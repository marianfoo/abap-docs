---
title: "Source Code"
description: |
  REPORT demo_table_comprh_join. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line1, key TYPE c LENGTH 1, col1 TYPE i, col2 TYPE i, END OF line1, itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, BEGIN OF line2, key TY
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_cmprhnsns_join_abexa.htm"
abapFile: "abentable_cmprhnsns_join_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "join", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehensions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Table Comprehensions, Join, ABENTABLE_CMPRHNSNS_JOIN_ABEXA, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Table Comprehensions, Join

This example demonstrates a join between internal tables using a [table comprehension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code   

REPORT demo\_table\_comprh\_join.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line1,
        key TYPE c LENGTH 1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      BEGIN OF line2,
        key TYPE c LENGTH 1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY,
      BEGIN OF line3,
        key TYPE c LENGTH 1,
        col11 TYPE i,
        col12 TYPE i,
        col21 TYPE i,
        col22 TYPE i,
      END OF line3,
      itab3 TYPE STANDARD TABLE OF line3 WITH EMPTY KEY.
    FINAL(out) = cl\_demo\_output=>new( ).
    FINAL(itab1) = VALUE itab1(
      ( key = 'a' col1 = 11 col2 = 12 )
      ( key = 'b' col1 = 21 col2 = 22 )
      ( key = 'c' col1 = 31 col2 = 32 ) ).
    out->write( itab1 ).
    FINAL(itab2) = VALUE itab2(
      ( key = 'a' col1 = 13 col2 = 14 )
      ( key = 'b' col1 = 23 col2 = 24 )
      ( key = 'c' col1 = 33 col2 = 34 ) ).
    out->write( itab2 ).
    FINAL(itab3) = VALUE itab3(
      FOR wa IN itab1
        ( key   = wa-key
          col11 = wa-col1
          col12 = wa-col2
          col21 = itab2\[ key = wa-key \]-col1
          col22 = itab2\[ key = wa-key \]-col2 ) ).
    out->write( itab3 ).
    FINAL(itab4) = VALUE itab3(
      FOR wa1 IN itab1 INDEX INTO idx
      FOR wa2 IN itab2 WHERE ( key = wa1-key )
        ( key   = wa1-key
          col11 = wa1-col1
          col12 = wa1-col2
          col21 = wa2-col1
          col22 = wa2-col2 ) ).
    out->write( itab4 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The lines of two internal tables itab1 and itab2 that have the same value in the column key are combined in a table. This example shows two options:

-   The table itab3 is created after a simple FOR expression for itab1 in which the associated values are read using [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") from itab2.
-   The table itab4 is created after consecutive FOR expressions for itab1 and itab2. The last FOR expression is restricted by a WHERE condition.

In both cases, only those key values are evaluated in itab1. In the second case, duplicate key values in itab2 would also produce multiple lines in itab4.