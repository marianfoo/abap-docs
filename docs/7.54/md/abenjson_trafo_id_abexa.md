---
title: "JSON, Identity Transformation with JSON Writer as Target"
description: |
  This example demonstrates various XML sources for identity transformations(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm 'Glossary Entry') with a JSON writer(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm 'Glossary Entry
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_trafo_id_abexa.htm"
abapFile: "abenjson_trafo_id_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenjson", "trafo", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [JSON, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_abexas.htm) → 

JSON, Identity Transformation with JSON Writer as Target

This example demonstrates various XML sources for [identity transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") with a [JSON writer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm "Glossary Entry") as a target.

Source Code

REPORT demo\_call\_trafo\_id\_json.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section(
      \`Identity Transformation for JSON Writer\` ).
    DATA json\_writer TYPE REF TO cl\_sxml\_string\_writer.
    out->begin\_section(
      \`Source JSON String\` ).
    DATA(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
                   \`{"TEXT":"Hello JSON!"}\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON Reader\` ).
    DATA(json\_reader) = cl\_sxml\_string\_reader=>create( json ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( ) ).
    out->next\_section(
      \`Source JSON-XML\` ).
    DATA(xml\_json) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
     \`<object><str name="TEXT">Hello JSON!</str></object>\` ).
    json\_writer = cl\_sxml\_string\_writer=>create(
                    type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML xml\_json
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is filled three times with XML sources. These sources can be passed to the [JSON writer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm "Glossary Entry") specified as an XML target:

-   Valid JSON data in a byte string.

-   A [JSON reader](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_reader_glosry.htm "Glossary Entry") that points to this byte string.

-   XML data in a byte string in [JSON XML format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry").