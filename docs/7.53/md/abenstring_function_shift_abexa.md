---
title: "String Functions, shift and substring"
description: |
  This example demonstrates the string functions shift(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshift_functions.htm) and substring(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm). Source Code REPORT demo_shift_substring. CLASS demo DE
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_shift_abexa.htm"
abapFile: "abenstring_function_shift_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenstring", "function", "shift", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Examples of String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_abexas.htm) → 

String Functions, shift and substring

This example demonstrates the string functions [shift](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshift_functions.htm) and [substring](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubstring_functions.htm).

Source Code

REPORT demo\_shift\_substring.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA output TYPE TABLE OF string.
    output = VALUE #(
      ( \`            oo            \` ) ).
    output = VALUE #(
      LET n = strlen( output\[ 1 \] ) IN
      BASE output
      FOR j = 2 UNTIL j > n / 2
      LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN
        ( shift\_left(  val = substring( val = r
                                        len = l )
                                        circular = 1 ) &&
          shift\_right( val = substring( val = r
                                        off = l )
                                        circular = 1 ) ) ).
    output = VALUE #(
      LET n = strlen( output\[ 1 \] ) IN
      BASE output
      FOR j = n / 2 + 1 UNTIL j > n - 1
      LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN
        ( shift\_right( val = substring( val = r
                                        len = l )
                                        circular = 1 ) &&
          shift\_left(  val = substring( val = r
                                        off = l )
                                        circular = 1 ) ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program creates a diamond shape in the display.