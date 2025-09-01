  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm) →  [Open SQL - Examples forLOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlobs_abexas.htm) → 

Locator, Copy Column

The example demonstrates how column content can be copied using [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_db\_copy.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      source TYPE c LENGTH 255
             VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      target TYPE c LENGTH 255
             VALUE 'picture\_copy'.
    DATA wa TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.
    cl\_demo\_input=>add\_field( CHANGING field = source ).
    cl\_demo\_input=>request(   CHANGING field = target ).
    SELECT SINGLE picture
           FROM demo\_blob\_table
           WHERE name = @source
           INTO @wa-picture.
    IF sy-subrc <> 0.
      cl\_demo\_output=>display(
        'Nothing found, run DEMO\_DB\_WRITER first!' ).
      RETURN.
    ENDIF.
    wa-name = target.
    INSERT demo\_blob\_table FROM @wa.
    IF sy-subrc = 0.
      cl\_demo\_output=>display(
        'You can run DEMO\_DB\_READER with new name now' ).
    ELSE.
      cl\_demo\_output=>display(
        'Target already exists' ).
    ENDIF.
    wa-picture->close( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method main [derives](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_lob_handle.htm) an [LOB handle structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") from the structure of the database table DEMO\_BLOB\_TABLE, where the component PICTURE is declared as an [LOB handle component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") for a locator. This locator is then [created](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm) in a SELECT statement.

A new value is then assigned to the key field of the LOB handle structure and the LOB handle structure is used as a work area in an INSERT statement. In this way, the content of the column to which the locator is connected is [copied](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_update_modify_lob.htm) to the corresponding column of the new row without the content having to be transported to the ABAP program.

If data previously written in the executable [writer stream example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_writer_abexa.htm) is read, this is the data of a figure in the GIF format. By specifying the new name, the copied figure can be displayed using the[example for reader streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_reader_abexa.htm).