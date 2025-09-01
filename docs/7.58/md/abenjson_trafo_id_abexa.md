  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Identity%20Transformation%20with%20JSON%20Writer%20as%20Target%2C%20ABENJSON_TRAFO_ID_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

JSON - Identity Transformation with JSON Writer as Target

This example demonstrates various XML sources for [identity transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") with a [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") as a target.

Source Code   

\* Public class definition
CLASS cl\_demo\_call\_trafo\_id\_json DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_call\_trafo\_id\_json IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
      \`Identity Transformation for JSON Writer\` ).
    DATA json\_writer TYPE REF TO cl\_sxml\_string\_writer.
    out->begin\_section(
      \`Source JSON String\` ).
    FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
                   \`{"TEXT":"Hello JSON!"}\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON Reader\` ).
    FINAL(json\_reader) = cl\_sxml\_string\_reader=>create( json ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON-XML\` ).
    FINAL(xml\_json) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`<object><str name="TEXT">Hello JSON!</str></object>\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML xml\_json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is filled three times with XML sources. These sources can be passed to the [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") specified as an XML target:

-   Valid JSON data in a byte string.
-   A [JSON reader](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_reader_glosry.htm "Glossary Entry") that points to this byte string.
-   XML data in a byte string in [JSON XML format](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_xml_glosry.htm "Glossary Entry").