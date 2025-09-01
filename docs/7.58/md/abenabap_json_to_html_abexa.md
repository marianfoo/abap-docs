---
title: "JSON - Transformation to HTML"
description: |
  Transformation from JSON data to HTML. Source Code  Public class definition CLASS cl_demo_json_2_html DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_json_2_html IMPLEMENTA
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_to_html_abexa.htm"
abapFile: "abenabap_json_to_html_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenabap", "json", "html", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Transformation%20to%20HTML%2C%20ABENABAP_JSON_TO_HTML_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

JSON - Transformation to HTML

Transformation from JSON data to HTML.

Source Code   

\* Public class definition
CLASS cl\_demo\_json\_2\_html DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_json\_2\_html IMPLEMENTATION.
  METHOD main.
    SELECT \*
           FROM scarr
           INTO TABLE @FINAL(result)
           UP TO 3 ROWS.
    FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE result = result
                           RESULT XML json\_writer.
    FINAL(json) = json\_writer->get\_output( ).
    CALL TRANSFORMATION sjson2html SOURCE XML json
                                   RESULT XML FINAL(html).
    out->write\_html(
      cl\_abap\_conv\_codepage=>create\_in( )->convert( html ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates how [JSON data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_oview.htm) is transformed to HTML using the XSL transformation SJSON2HTML. The nodes for objects and arrays can be opened and closed in the displayed result.