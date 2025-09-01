---
title: "Source Code"
description: |
  REPORT demo_table_comprh_locals. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: array TYPE STANDARD TABLE OF i WITH EMPTY KEY, BEGIN OF line, col1 TYPE i, col2 TYPE i, col3 TYPE i, END OF line, itab TYPE STANDARD TABLE OF line W
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_cmprhnsns_locals_abexa.htm"
abapFile: "abentable_cmprhnsns_locals_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "locals", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehensions_abexas.htm) → 

itab - Table Comprehensions, Local Helper Fields

This example demonstrates how local helper fields are used in [table comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_table\_comprh\_locals.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      array TYPE STANDARD TABLE OF i WITH EMPTY KEY,
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    CONSTANTS factor TYPE i VALUE 1000.
    DATA(array) = VALUE array(
      ( 3 ) ( 5 ) ( 7 ) ( 9 ) ).
    DATA(itab) = VALUE itab(
      FOR x IN array INDEX INTO idx
         LET off = factor \* idx IN
        ( col1 = x col2 = x \* x col3 = x + off ) ).
    cl\_demo\_output=>display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

From a single column table array, a three-column table itab is created whose column content is calculated from the respective line content in array. The local helper fields in this example are the work area x of the [FOR expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_in_itab.htm) and the helper field off defined in a [LET expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm).