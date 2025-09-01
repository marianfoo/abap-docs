---
title: "Creating a Matrix Using FOR and VALUE"
description: |
  This example demonstrates how a matrix is created using iterations. Source Code REPORT demo_matrix. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: t_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY, t_rows   TYPE STANDARD TABLE OF t_column WITH EMPTY KEY. CLASS-METHODS: main. PRIVATE SECTION
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencond_iteration_matrix_abexa.htm"
abapFile: "abencond_iteration_matrix_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abencond", "iteration", "matrix", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Creating a Matrix Using FOR and VALUE, ABENCOND_ITERATION_MATRIX_ABEXA, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Creating a Matrix Using FOR and VALUE

This example demonstrates how a matrix is created using iterations.

Source Code   

REPORT demo\_matrix.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES: t\_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY,
           t\_rows   TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY.
    CLASS-METHODS: main.
  PRIVATE SECTION.
    CLASS-DATA:
      rows    TYPE i,
      columns TYPE i,
      x       TYPE i VALUE 1,
      y       TYPE i VALUE 1.
    CLASS-METHODS initialize.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    "Old way
    DATA: column     TYPE t\_column,
          matrix\_old TYPE t\_rows.
    DO columns TIMES.
      FINAL(idx) = sy-index - 1.
      CLEAR column.
      DO rows TIMES.
        APPEND sy-abcde+idx(1) && |{ sy-index }| TO column.
      ENDDO.
      APPEND column TO matrix\_old.
    ENDDO.
    "New way
    FINAL(matrix\_new) =
      VALUE t\_rows(
        FOR i = 0 UNTIL i > columns - 1 (
          VALUE t\_column(
            FOR j = 1 UNTIL j > rows
              ( sy-abcde+i(1) && |{ j }| ) ) ) ).
    ASSERT matrix\_new = matrix\_old.
    TRY.
        cl\_demo\_output=>display( matrix\_new\[ x \]\[ y \] ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        cl\_demo\_output=>display( 'Not found' ).
    ENDTRY.  ENDMETHOD.
  METHOD initialize.
    rows = 100.
    columns = strlen( sy-abcde ).
    cl\_demo\_input=>add\_field( CHANGING field = x ).
    cl\_demo\_input=>add\_field( CHANGING field = y ).
    cl\_demo\_input=>request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The lines and columns of a matrix are simulated using an internal table whose line types are arrays. These tables are filled using nested [DO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm) loops and equivalent iteration expressions for [conditional iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) in a constructor expression with the operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm). The [ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm) statement shows that both internal tables have the same content. It is possible to access each individual element.