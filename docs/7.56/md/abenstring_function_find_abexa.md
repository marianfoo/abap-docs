---
title: "Source Code"
description: |
  REPORT demo_find_and_match. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: text TYPE c LENGTH 120 VALUE `Cathy's cat with the hat sat on Matt's mat.`, regx TYPE c LENGTH 120 VALUE `b.atb`. DATA: result TYPE i, substr TYPE
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_function_find_abexa.htm"
abapFile: "abenstring_function_find_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "abenstring", "function", "find", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_abexas.htm) → 

string\_func - count, find, and match

The example demonstrates the string functions [count](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencount_functions.htm), [find](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensearch_functions.htm), and [match](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmatch_functions.htm).

Source Code

REPORT demo\_find\_and\_match.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: text TYPE c LENGTH 120
               VALUE \`Cathy's cat with the hat sat on Matt's mat.\`,
          regx TYPE c LENGTH 120
               VALUE \`\\b.at\\b\`.
    DATA: result TYPE i,
          substr TYPE string.
    data out TYPE c LENGTH 120.
    cl\_demo\_input=>add\_field( CHANGING field = text ).
    cl\_demo\_input=>request(   CHANGING field = regx ).
    cl\_demo\_output=>write( text ).
    result = count( val  = text
                    pcre = regx ).
    DO result TIMES.
      result = find( val  = text
                     pcre = regx
                     occ   = sy-index ).
      substr = match( val  = text
                      pcre = regx
                      occ  = sy-index ).
      data(len) = strlen( substr ).
      out+result(len) = substr.
    ENDDO.
    cl\_demo\_output=>display( out ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the text field text, all occurrences are found using count and find that match a regular expression. When a search is successful, the substring found is read and displayed using the function match.

Instead of using the function count, it is also possible to use an unlimited DO loop that is exited using EXIT if the result of find has the value -1.