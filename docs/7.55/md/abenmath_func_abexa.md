---
title: "Source Code"
description: |
  REPORT demo_numerical_function. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA n TYPE decfloat16. DATA m TYPE decfloat16 VALUE '-5.55'. DATA(out) = cl_demo_output=>new( ). n = abs( m ). out->write( ABS:  n  ). n = sign( m ).
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmath_func_abexa.htm"
abapFile: "abenmath_func_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "abenmath", "func", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions_abexas.htm) → 

num\_func - General Numeric Functions

This example demonstrates the use of general numeric functions.

Source Code

REPORT demo\_numerical\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE decfloat16.
    DATA m TYPE decfloat16 VALUE '-5.55'.
    DATA(out) = cl\_demo\_output=>new( ).
    n = abs( m ).
    out->write( |ABS: { n }| ).
    n = sign( m ).
    out->write( |SIGN: { n }| ).
    n = ceil( m ).
    out->write( |CEIL: { n }| ).
    n = floor( m ).
    out->write( |FLOOR: { n }| ).
    n = trunc( m ).
    out->write( |TRUNC: { n }| ).
    n = frac( m ).
    out->write( |FRAC: { n }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output of the program shows how each of the general numeric functions affects the number -5.55.