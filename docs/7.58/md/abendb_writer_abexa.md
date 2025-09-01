  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) →  [ABAP SQL - Examples of LOB Handles](javascript:call_link\('abenlobs_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Writer%20Stream%2C%20Fill%20Database%20Table%2C%20ABENDB_WRITER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ABAP SQL - Writer Stream, Fill Database Table

The example demonstrates how data can be written to a DDIC database table using a [writer stream](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_db\_writer DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      pict\_line TYPE x LENGTH 1022,
      pict\_tab  TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
    DATA:
      name TYPE c LENGTH 255
           VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      pict TYPE pict\_tab.
    METHODS get\_pict\_tab
      IMPORTING
        mime\_url TYPE csequence
      EXPORTING
        pict\_tab TYPE pict\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_db\_writer IMPLEMENTATION.
  METHOD main.
    DATA wa TYPE demo\_blob\_table WRITER FOR COLUMNS picture.
    cl\_demo\_input=>new( )->request(
              CHANGING field = me->name ).
    TRY.
        wa-name = name.
        INSERT demo\_blob\_table FROM @wa.
        IF sy-subrc = 4.
          DATA(subrc) = sy-subrc.
        ELSE.
          FINAL(stmnt) = wa-picture->get\_statement\_handle( ).
          LOOP AT pict INTO FINAL(xline).
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
      out->write(
        'One line inserted, you can run DEMO\_DB\_READER now' ).
    ELSE.
      out->write(
        'Error during insertion' ).
    ENDIF.
  ENDMETHOD.
  METHOD get\_pict\_tab.
    cl\_mime\_repository\_api=>get\_api( )->get(
      EXPORTING i\_url = mime\_url
      IMPORTING e\_content = FINAL(pict\_wa)
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
  METHOD constructor.
    super->constructor( ).
    get\_pict\_tab(
     EXPORTING
       mime\_url = name
     IMPORTING
       pict\_tab = pict ).
    DELETE FROM demo\_blob\_table WHERE name = @name.
  ENDMETHOD.
ENDCLASS.

Description   

The method main [derives](javascript:call_link\('abaptypes_lob_handle.htm'\)) an [LOB handle structure](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry") from the structure of the DDIC database table DEMO\_BLOB\_TABLE, where the component PICTURE is declared as an [LOB handle component](javascript:call_link\('abenlob_handle_component_glosry.htm'\) "Glossary Entry") for a binary writer stream.

This writer stream is [created](javascript:call_link\('abenium_lob.htm'\)) in the statement INSERT and then the content of the internal table pict is passed to it sequentially. After the writer stream is closed, the content of the internal table is stored in the DDIC database table as a binary string.

Here, the content of the internal table is a figure in GIF format, which is retrieved from the Mime Repository using an auxiliary method. The address there is also used as a DDIC database table key. Any existing rows are deleted in the static constructor to ensure that the example always works.

The number of changed rows is checked by an object of the class CL\_ABAP\_SQL\_CHANGING\_STMNT.

The content can be read again using the executable [reader stream example](javascript:call_link\('abendb_reader_abexa.htm'\)).