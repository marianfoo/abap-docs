  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstreams_locators.htm) →  [ABAP SQL - Examples of LOB Handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlobs_abexas.htm) → 

Writer Stream, Fill Database Table

The example demonstrates how data can be written to a database table using a [writer stream](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwriter_stream_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_db\_writer.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:  class\_constructor,
                    main.
  PRIVATE SECTION.
    TYPES:
      pict\_line TYPE x LENGTH 1022,
      pict\_tab  TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
    CLASS-DATA:
      name TYPE c LENGTH 255
           VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      pict TYPE pict\_tab.
    CLASS-METHODS get\_pict\_tab
     IMPORTING
       mime\_url TYPE csequence
     EXPORTING
       pict\_tab TYPE pict\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA wa TYPE demo\_blob\_table WRITER FOR COLUMNS picture.
    cl\_demo\_input=>request( CHANGING field = demo=>name ).
    TRY.
        wa-name = name.
        INSERT demo\_blob\_table FROM @wa.
        IF sy-subrc = 4.
          DATA(subrc) = sy-subrc.
        ELSE.
          DATA(stmnt) = wa-picture->get\_statement\_handle( ).
          LOOP AT pict INTO DATA(xline).
            wa-picture->write( CONV #( xline ) ).
          ENDLOOP.
          wa-picture->close( ).
          IF stmnt->get\_db\_count( ) <> 1.
            subrc = 4.
          ENDIF.
        ENDIF.
      CATCH cx\_stream\_io\_exception cx\_close\_resource\_error.
        subrc = 4.
    ENDTRY.
    IF subrc = 0.
      cl\_demo\_output=>display(
        'One line inserted, you can run DEMO\_DB\_READER now' ).
    ELSE.
      cl\_demo\_output=>display(
        'Error during insertion' ).
    ENDIF.  ENDMETHOD.
  METHOD class\_constructor.
    get\_pict\_tab(
     EXPORTING
       mime\_url = name
     IMPORTING
       pict\_tab = pict ).
    DELETE FROM demo\_blob\_table WHERE name = @name.
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = DATA(pict\_wa)
      EXCEPTIONS OTHERS = 4 ).
    IF sy-subrc = 4.
      RETURN.
    ENDIF.
    pict\_tab =
      VALUE #( LET l1 = xstrlen( pict\_wa ) l2 = l1 - 1022 IN
               FOR j = 0 THEN j + 1022  UNTIL j >= l1
                 ( COND #( WHEN j <= l2 THEN
                                pict\_wa+j(1022)
                           ELSE pict\_wa+j ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method main [derives](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_lob_handle.htm) an [LOB handle structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") from the structure of the database table DEMO\_BLOB\_TABLE, where the component PICTURE is declared as an [LOB handle component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") for a binary writer stream.

This writer stream is created in the statement INSERT and then the content of the internal table pict is passed to it sequentially. After the writer stream is closed, the content of the internal table is stored in the database table as a binary string.

Here, the content of the internal table is a figure in GIF format, which is retrieved from the Mime Repository using an auxiliary method. The address there is also used as a database table key. Any existing rows are deleted in the static constructor so that the example always works.

The number of changed rows is checked by an object of the class CL\_ABAP\_SQL\_CHANGING\_STMNT.

The content can be read again using the executable [reader stream example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_reader_abexa.htm).