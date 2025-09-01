---
title: "String Templates, Length"
description: |
  This example demonstrates how to specify a length for embedded expressions. Source Code REPORT demo_string_template_width. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY. cl_de
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_width_abexa.htm"
abapFile: "abenstring_template_width_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "abenstring", "template", "width", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) →  [Examples of string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_abexas.htm) → 

String Templates, Length

This example demonstrates how to specify a length for embedded expressions.

Source Code

REPORT demo\_string\_template\_width.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    cl\_demo\_output=>write(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( sy-abcde )
        ( |{ substring( val = sy-abcde len = j )
             WIDTH = j + 4 }<---| ) ) ).
    cl\_demo\_output=>display(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( sy-abcde )
        ( |{ substring( val = sy-abcde len = j )
             WIDTH = strlen( sy-abcde ) / 2 } <---| ) ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Two [iteration expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) loops perform the predefined function substring for the system field sy-abcde in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration sets the length (constantly) as half the length of the full string and is ignored for longer substring accesses.