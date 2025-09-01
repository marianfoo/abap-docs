---
title: "Source Code"
description: |
  REPORT demo_tab_exp_changing. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES: BEGIN OF struct, col1 TYPE i, col2 TYPE i, END OF struct, itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY. CLASS-METHODS: change_component IMPORTING p1 TYPE i EXPORTING p2 TYPE i, c
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_itab_changing_abexa.htm"
abapFile: "abentable_exp_itab_changing_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abentable", "exp", "itab", "changing", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm) →  [table\_exp - Write Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_exp_lhs.htm) → 

table\_exp - Write Positions

This example demonstrates table expressions in write positions.

Source Code

REPORT demo\_tab\_exp\_changing.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        col1 TYPE i,
        col2 TYPE i,
      END OF struct,
      itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
    CLASS-METHODS:
      change\_component
        IMPORTING p1 TYPE i
        EXPORTING p2 TYPE i,
      change\_line
        CHANGING p TYPE struct.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(itab) = VALUE itab(
                   ( col1 = 3 )
                   ( col1 = 5 )
                   ( col1 = 7 ) ).
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Before\`
      )->write( itab ).
    DO lines( itab ) TIMES.
      change\_component( EXPORTING p1 = itab\[ sy-index \]-col1
                        IMPORTING p2 = itab\[ sy-index \]-col2 ).
    ENDDO.
    out->next\_section( \`After change\_component\`
      )->write( itab ).
    DO lines( itab ) TIMES.
      change\_line( CHANGING p = itab\[ sy-index \] ).
    ENDDO.
    out->next\_section( \`After change\_line\`
      )->write( itab
      )->display( ).  ENDMETHOD.
  METHOD change\_component.
    p2 = ipow( base = p1 exp = 2 ).
  ENDMETHOD.
  METHOD change\_line.
    p-col2 = ipow( base = p-col1 exp = 3 ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a DO loop, the content of an internal table

-   is passed component by component to an IMPORTING parameter and EXPORTING parameter of a method using two [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm). This modifies one column of the current line.
-   is passed line by line to a CHANGING parameter of a method using one [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm). This modifies one column of the table line.

The second method is quicker, of course, since only one read is performed on the internal table instead of two.