---
title: "Source Code"
description: |
  REPORT demo_table_comprh_elementary. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, col3 TYPE i, col4 TYPE i, END OF line1, itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY WITH UNIQUE SORTED KEY key COMPONENTS col1, BEGIN OF line2, co
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_cmprhnsns_simple_abexa.htm"
abapFile: "abentable_cmprhnsns_simple_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "simple", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehensions_abexas.htm) → 

itab - Table Comprehensions, Basic Properties

This example demonstrates the basic properties of [table comprehensions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_table\_comprh\_elementary.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
        col4 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY
                                         WITH UNIQUE SORTED KEY
                                              key COMPONENTS col1,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab3 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab4 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY,
      itab5 TYPE STANDARD TABLE OF i     WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(itab1) = VALUE itab1(
      FOR j = 41 THEN j - 10 UNTIL j < 10
      ( col1 = j col2 = j + 1 col3 = j + 2 col4 = j + 3 ) ).
    out->write( itab1 ).
    DATA(itab2) = VALUE itab2(
      FOR wa IN itab1 WHERE ( col1 < 30 )
        ( wa ) ).
    out->write( itab2 ).
    DATA(itab3) = VALUE itab3(
      FOR wa IN itab1 INDEX INTO idx WHERE ( col1 = 21 ) ##PRIMKEY\[key\]
        ( LINES OF itab1 from idx ) ).
    out->write( itab3 ).
    DATA(itab4) = VALUE itab4(
       FOR wa IN itab1 FROM 2 TO 3
         ( col1 = wa-col2 col2 = wa-col3 ) ).
    out->write( itab4 ).
    DATA(base)  = VALUE itab5( ( 1 ) ( 2 ) ( 3 ) ).
    DATA(itab5) = VALUE itab5(
       BASE base
       FOR wa IN itab1 USING KEY key
          ( wa-col1 ) ).
    out->write( itab5 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

From an internal table itab1, the content of new internal tables is created in constructor expressions with one [FOR expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_itab.htm) each:

-   itab2 has the same line type as itab1. All columns of all lines are assigned that meet a WHERE condition.
-   itab3 has the same line type as itab1. All lines are assigned that meet a WHERE condition from a line.
-   itab4 has fewer columns than itab1. Only certain columns of a restricted number of lines are assigned.
-   itab5 has only one column. The addition BASE is used to first assign the table base and then the first column of itab1. This demonstrates the effect of specifying a sorted secondary key for this column.