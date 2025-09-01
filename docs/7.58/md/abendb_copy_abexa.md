---
title: "ABAP SQL - Locator, Copy Column"
description: |
  The example demonstrates how column content can be copied using locators(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_db_copy DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_copy_abexa.htm"
abapFile: "abendb_copy_abexa.htm"
keywords: ["select", "insert", "do", "if", "try", "method", "class", "data", "types", "abendb", "copy", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreams_locators.htm) →  [ABAP SQL - Examples of LOB Handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlobs_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Locator%2C%20Copy%20Column%2C%20ABENDB_COPY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Locator, Copy Column

The example demonstrates how column content can be copied using [locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_db\_copy DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_db\_copy IMPLEMENTATION.
  METHOD main.
    DATA:
      source TYPE c LENGTH 255
             VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      target TYPE c LENGTH 255
             VALUE 'picture\_copy'.
    DATA wa TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = source
     )->request(   CHANGING field = target ).
    SELECT SINGLE picture
           FROM demo\_blob\_table
           WHERE name = @source
           INTO @wa-picture.
    IF sy-subrc <> 0.
      out->write(
        'Nothing found, run DEMO\_DB\_WRITER first!' ).
      RETURN.
    ENDIF.
    wa-name = target.
    INSERT demo\_blob\_table FROM @wa.
    IF sy-subrc = 0.
      out->write(
        'You can run DEMO\_DB\_READER with new name now' ).
    ELSE.
      out->write(
        'Target already exists' ).
    ENDIF.
    wa-picture->close( ).
  ENDMETHOD.
ENDCLASS.

Description   

The method main [derives](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_lob_handle.htm) an [LOB handle structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") from the structure of the DDIC database table DEMO\_BLOB\_TABLE, where the component PICTURE is declared as an [LOB handle component](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") for a locator. This locator is then [created](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_lob_handles.htm) in a SELECT statement.

A new value is then assigned to the key field of the LOB handle structure and the LOB handle structure is used as a work area in an INSERT statement. As a result, the content of the column to which the locator is linked is [copied](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenium_lob.htm) to the corresponding column of the new row without the content having to be transported to the ABAP class.

If data previously written in the executable [writer stream example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_writer_abexa.htm) is read, this is the data of a figure in the GIF format. By specifying the new name, the copied figure can be displayed using the [example for reader streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_reader_abexa.htm).