  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR, Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

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
      DATA(idx) = sy-index - 1.
      CLEAR column.
      DO rows TIMES.
        APPEND sy-abcde+idx(1) && |{ sy-index }| TO column.
      ENDDO.
      APPEND column TO matrix\_old.
    ENDDO.
    "New way
    DATA(matrix\_new) =
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

The lines and columns of a matrix are simulated using an internal table whose line types are arrays. These tables are filled using nested [DO](javascript:call_link\('abapdo.htm'\)) loops and equivalent iteration expressions for [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) in a constructor expression with the operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)). The [ASSERT](javascript:call_link\('abapassert.htm'\)) statement shows that both internal tables have the same content. It is possible to access each individual element.