  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [table\_exp - Table Expressions](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - Writing Positions](javascript:call_link\('abentable_exp_lhs.htm'\)) → 

Table Expressions, Writer Positions

This example demonstrates table expressions in writer positions.

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

-   is passed component by component to an IMPORTING parameter and EXPORTING parameter of a method using two [table expressions](javascript:call_link\('abentable_expressions.htm'\)). This modifies one column of the current row.

-   is passed row by row to a CHANGING parameter of a method using one [table expression](javascript:call_link\('abentable_expressions.htm'\)). This modifies one column of the table row.

The second method is quicker, of course, since only one read is performed on the internal table instead of two.