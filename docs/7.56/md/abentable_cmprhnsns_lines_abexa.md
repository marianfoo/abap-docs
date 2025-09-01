---
title: "Source Code"
description: |
  REPORT demo_table_comprh_lines. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, col3 TYPE i, END OF line1, itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, itab2 TYPE STANDARD TABLE OF
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_cmprhnsns_lines_abexa.htm"
abapFile: "abentable_cmprhnsns_lines_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "lines", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehensions_abexas.htm) → 

itab - Table Comprehensions, Multiple Lines

This example demonstrates how multiple lines in a [FOR expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_itab.htm) of a table [comprehension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are created.

Source Code

REPORT demo\_table\_comprh\_lines.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE STANDARD TABLE OF i     WITH EMPTY KEY.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(itab1) = VALUE itab1(
      ( col1 = 11 col2 = 12 col3 = 13 )
      ( col1 = 21 col2 = 22 col3 = 23 )
      ( col1 = 31 col2 = 32 col3 = 33 ) ).
    out->write( itab1 ).
    DATA(itab2) = VALUE itab2(
      FOR wa IN itab1
        ( wa-col1 )
        ( wa-col2 )
        ( wa-col3 ) ).
    out->write( itab2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The columns of itabl are created as individual lines after its FOR expression. The result is a single-column internal table itab2 that contains the content of itab1 as an array