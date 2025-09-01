---
title: "JSON - asJSON in General"
description: |
  This example demonstrates asJSON(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_asjson_general.htm) for a text string. Source Code REPORT demo_json_elementary_trafo. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main.
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_hello_json_abexa.htm"
abapFile: "abenabap_hello_json_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenabap", "hello", "json", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_json_abexas.htm) → 

JSON - asJSON in General

This example demonstrates [asJSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_asjson_general.htm) for a text string.

Source Code

REPORT demo\_json\_elementary\_trafo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(text) = \`Hello JSON, I'm ABAP!\`.
    DATA(out) = cl\_demo\_output=>new(
      )->write\_data( text ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE text = text
                           RESULT XML writer.
    DATA(json) = writer->get\_output( ).
    out->write\_json( json ).
    out->line( ).
    text = \`{"TEXT":"Hello ABAP, I'm JSON!"}\`.
    out->write\_json( text ).
    CALL TRANSFORMATION id SOURCE XML text
                           RESULT text = text.
    out->write\_data( text
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, for which a [JSON writer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_writer_glosry.htm "Glossary Entry") is specified as the XML target, serializes a text string to [JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjson_glosry.htm "Glossary Entry"). The output shows the [asJSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasjson_glosry.htm "Glossary Entry") representation of the text string.

The [identity transformation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID then deserializes JSON data in asJSON format to a text string.