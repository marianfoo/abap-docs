---
title: "Creating a Matrix Using FOR and VALUE"
description: |
  This example demonstrates how a matrix is created using iterations. Source Code  Public class definition CLASS cl_demo_matrix DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. TYPES: t_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY, t_rows   TYPE STANDA
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_matrix_abexa.htm"
abapFile: "abencond_iteration_matrix_abexa.htm"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abencond", "iteration", "matrix", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20a%20Matrix%20Using%20FOR%20and%20VALUE%2C%20ABENCOND_ITERATION_MATRIX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Creating a Matrix Using FOR and VALUE

This example demonstrates how a matrix is created using iterations.

Source Code   

\* Public class definition
CLASS cl\_demo\_matrix DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES: t\_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY,
           t\_rows   TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      rows    TYPE i,
      columns TYPE i,
      x       TYPE i VALUE 1,
      y       TYPE i VALUE 1,
      abcde   TYPE string VALUE 'abcdefghijklmnopqrstuvwxyz'.
    METHODS initialize.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_matrix IMPLEMENTATION.
  METHOD main.
    initialize( ).
    "Old way
    DATA: column     TYPE t\_column,
          matrix\_old TYPE t\_rows.
    DO columns TIMES.
      FINAL(idx) = sy-index - 1.
      CLEAR column.
      DO rows TIMES.
        APPEND abcde+idx(1) && |{ sy-index }| TO column.
      ENDDO.
      APPEND column TO matrix\_old.
    ENDDO.
    "New way
    FINAL(matrix\_new) =
      VALUE t\_rows(
        FOR i = 0 UNTIL i > columns - 1 (
          VALUE t\_column(
            FOR j = 1 UNTIL j > rows
              ( abcde+i(1) && |{ j }| ) ) ) ).
    ASSERT matrix\_new = matrix\_old.
    TRY.
        out->write( matrix\_new\[ x \]\[ y \] ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Not found' ).
    ENDTRY.
  ENDMETHOD.
  METHOD initialize.
    rows = 100.
    columns = strlen( abcde ).
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = x
     )->add\_field( CHANGING field = y
     )->request( ).
  ENDMETHOD.
ENDCLASS.

Description   

The lines and columns of a matrix are simulated using an internal table whose line types are arrays. These tables are filled using nested [DO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm) loops and equivalent iteration expressions for [conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) in a constructor expression with the operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm). The [ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm) statement shows that both internal tables have the same content. It is possible to access each individual element.