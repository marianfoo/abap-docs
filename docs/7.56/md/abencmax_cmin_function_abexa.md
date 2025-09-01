---
title: "Source Code"
description: |
  REPORT demo_cmax_cmin. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA:  txt TYPE string, max TYPE string, min TYPE string, msg TYPE string. txt = `one two three four five six seven eight nine ten`. max = ` `. min = `�`. DO. T
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencmax_cmin_function_abexa.htm"
abapFile: "abencmax_cmin_function_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "abencmax", "cmin", "function", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_abexas.htm) → 

string\_func - cmax, cmin, and segment

This example demonstrates the extremum functions [cmax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencmax_cmin_functions.htm) and [cmin](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennmax_nmin_functions.htm), plus the segment function [segment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensegment_functions.htm).

Source Code

REPORT demo\_cmax\_cmin.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  txt TYPE string,
           max TYPE string,
           min TYPE string,
           msg TYPE string.
    txt = \`one two three four five six seven eight nine ten\`.
    max = \` \`.
    min = \`�\`.
    DO.
      TRY.
          max = cmax( val1 = max
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
          min = cmin( val1 = min
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
        CATCH cx\_sy\_strg\_par\_val.
          EXIT.
      ENDTRY.
    ENDDO.
    cl\_demo\_output=>display(
      |Maximum is { max } and minimum is { min }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program determines the minimum and the maximum segment of a character string with respect to the current [code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry").