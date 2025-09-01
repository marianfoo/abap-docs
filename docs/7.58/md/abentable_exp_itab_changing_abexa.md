  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [itab - Table Expressions (table\_exp)](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - Write Positions](javascript:call_link\('abentable_exp_lhs.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Write%20Positions%2C%20ABENTABLE_EXP_ITAB_CHANGING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Write Positions

This example demonstrates table expressions in write positions.

Source Code   

\* Public class definition
CLASS cl\_demo\_tab\_exp\_changing DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        col1 TYPE i,
        col2 TYPE i,
      END OF struct,
      itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
    METHODS:
      change\_component
        IMPORTING p1 TYPE i
        EXPORTING p2 TYPE i,
      change\_line
        CHANGING p TYPE struct.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_tab\_exp\_changing IMPLEMENTATION.
  METHOD main.
    DATA(itab) = VALUE itab(
                   ( col1 = 3 )
                   ( col1 = 5 )
                   ( col1 = 7 ) ).
    out->begin\_section( \`Before\`
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
      )->write( itab ).
  ENDMETHOD.
  METHOD change\_component.
    p2 = ipow( base = p1 exp = 2 ).
  ENDMETHOD.
  METHOD change\_line.
    p-col2 = ipow( base = p-col1 exp = 3 ).
  ENDMETHOD.
ENDCLASS.

Description   

In a DO loop, the content of an internal table

-   is passed component by component to an IMPORTING parameter and EXPORTING parameter of a method using two [table expressions](javascript:call_link\('abentable_expressions.htm'\)). This modifies one column of the current line.
-   is passed line by line to a CHANGING parameter of a method using one [table expression](javascript:call_link\('abentable_expressions.htm'\)). This modifies one column of the table line.

The second method is quicker, of course, since only one read is performed on the internal table instead of two.