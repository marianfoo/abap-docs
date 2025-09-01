---
title: "Source Code"
description: |
  REPORT demo_reduce_simple. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA itab TYPE TABLE OF i WITH EMPTY KEY. itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ). cl_demo_output=>write( itab ). DATA(sum) = REDUCE i( INIT x = 0 FOR w
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreduce_simple_abexa.htm"
abapFile: "abenreduce_simple_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "internal-table", "abenreduce", "simple", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_reductions_abexas.htm) → 

itab - Table Reduction, Summation of an Array

This example demonstrates a simple [table reduction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_reduction_glosry.htm "Glossary Entry") using [REDUCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_reduce.htm).

Source Code

REPORT demo\_reduce\_simple.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i WITH EMPTY KEY.
    itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ).
    cl\_demo\_output=>write( itab ).
    DATA(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ).
    cl\_demo\_output=>write( sum ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

After the [FOR expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_in_itab.htm), the content of the table lines in itab is added to the local variable x and this variable is provided as the result. Instead of x = 0, x TYPE i could also be specified after INIT.