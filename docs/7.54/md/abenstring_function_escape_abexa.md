---
title: "String Functions, escape for HTML"
description: |
  This example demonstrates the string function escape(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) for HTML. Source Code REPORT  demo_escape_html. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. D
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_function_escape_abexa.htm"
abapFile: "abenstring_function_escape_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "abenstring", "function", "escape", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Examples of String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_abexas.htm) → 

String Functions, escape for HTML

This example demonstrates the string function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) for HTML.

Source Code

REPORT  demo\_escape\_html.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: body     TYPE string,
          esc\_body TYPE string.
    body = \`<table border> \`
        && \`<tr><td>11</td><td>12</td></tr> \`
        && \`<tr><td>21</td><td>22</td></tr> \`
        && \`</table>\`.
    esc\_body = escape( val    = body
                       format = cl\_abap\_format=>e\_html\_text ).
    cl\_demo\_output=>new(
      )->begin\_section( 'Original text'
      )->write\_text( body
      )->next\_section( 'Original text formatted as HTML'
      )->write\_html( body
      )->next\_section( 'Escaped text'
      )->write\_text( esc\_body
      )->next\_section( 'Escaped text formatted as HTML'
      )->write\_html( esc\_body
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program applies the function escape to a string used as the body of an HTML file. The string is displayed as a text and as an HTML file both before and after the function is executed.