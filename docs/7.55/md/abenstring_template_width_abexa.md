---
title: "Source Code"
description: |
  REPORT demo_string_template_width. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY. cl_demo_output=>write( VALUE result( FOR j = 1 UNTIL j > strlen( sy-abcde ) (  substring(
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_width_abexa.htm"
abapFile: "abenstring_template_width_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenstring", "template", "width", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates_abexas.htm) → 

string\_tmpl - Specified Length

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

Two [iteration expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_conditional.htm) perform the built-in function substring for the system field sy-abcde in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration constantly sets the length to half the length of the full string and is therefore ignored for longer substring accesses.