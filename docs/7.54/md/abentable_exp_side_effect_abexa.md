  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [table\_exp - Table Expressions](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - Result](javascript:call_link\('abentable_exp_result.htm'\)) → 

Table Expressions, Side Effects

This example demonstrates a possible side effect when field symbols are produced as the result.

Source Code

REPORT demo\_tab\_exp\_side\_effect.
TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
CLASS class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth IMPORTING idx          TYPE i
                                 line1        TYPE i OPTIONAL
                                 VALUE(line2) TYPE i OPTIONAL
                       CHANGING  ptab         TYPE itab.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD meth.
    ptab\[ idx \] = 111.
    IF line1 IS SUPPLIED.
      cl\_demo\_output=>write\_data( line1 ).
    ELSEIF line2 IS SUPPLIED.
      cl\_demo\_output=>write\_data( line2 ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ( 4 ) ).
  class=>meth( EXPORTING idx    = 1
                         line1 = itab\[ 1 \] ##operator
               CHANGING  ptab  = itab ).
  class=>meth( EXPORTING idx   = 2
                         line1 = VALUE #( itab\[ 2 \] )
               CHANGING  ptab  = itab ).
  class=>meth( EXPORTING idx   = 3
                         line2 = itab\[ 3 \]
               CHANGING  ptab  = itab ).
  class=>meth( EXPORTING idx   = 4
                         line2 = VALUE #( itab\[ 4 \] )
               CHANGING  ptab  = itab ).
  cl\_demo\_output=>display( ).

Description

A table expression is used to pass a row of an internal table and the internal table itself to a method. The row in question of the internal table is modified in the method by specifying a table expression on the left side of an assignment.

-   In the first method call, the table expression is passed by reference without the VALUE operator. The result is a temporary field symbol to which the row in question is assigned throughout the entire method call. The change made to the row in the table also has an effect on the formal parameter.

-   In the second method call, the table expression is passed by reference with the VALUE operator. The result is a temporary work area that exists throughout the entire method call. The change made to the row in the table does not affect the formal parameter.

-   The third and fourth method calls repeat the previous calls, but use pass by value instead of pass by reference. Pass by value does not produce any side effects, regardless of the result.

The critical point demonstrated here also produces a syntax check warning in the extended program check (for performance reasons), if not hidden using the pragma ##operator.