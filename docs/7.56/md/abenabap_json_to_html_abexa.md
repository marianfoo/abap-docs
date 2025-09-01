---
title: "JSON - Transformation to HTML"
description: |
  Transformation from JSON data to HTML. Source Code REPORT demo_json_2_html. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. SELECT  FROM scarr INTO TABLE @DATA(result) UP TO 3 ROWS. DATA(json_writer) = cl_sxml_string_writer=>creat
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_to_html_abexa.htm"
abapFile: "abenabap_json_to_html_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenabap", "json", "html", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_abexas.htm) → 

JSON - Transformation to HTML

Transformation from JSON data to HTML.

Source Code

REPORT demo\_json\_2\_html.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT \*
           FROM scarr
           INTO TABLE @DATA(result)
           UP TO 3 ROWS.
    DATA(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE result = result
                           RESULT XML json\_writer.
    DATA(json) = json\_writer->get\_output( ).
    CALL TRANSFORMATION sjson2html SOURCE XML json
                                   RESULT XML DATA(html).
    cl\_demo\_output=>display\_html(
      cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how [JSON data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_oview.htm) is transformed to HTML using the XSL transformation SJSON2HTML. The nodes for objects and arrays can be opened and closed in the displayed result.