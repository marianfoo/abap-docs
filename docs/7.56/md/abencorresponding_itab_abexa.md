  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

Component Operator for Internal Tables

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) for internal tables.

Source Code

REPORT demo\_corresponding\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      c3 TYPE c LENGTH 3,
      BEGIN OF iline1,
        col1 TYPE c3,
        col2 TYPE c3,
      END OF iline1,
      BEGIN OF iline2,
        col2 TYPE c3,
        col3 TYPE c3,
      END OF iline2,
      BEGIN OF line1,
        col1 TYPE                   c3,
        col2 TYPE                   c3,
        col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY,
      END OF line1,
      BEGIN OF line2,
        col2 TYPE                   c3,
        col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY,
        col4 TYPE                   c3,
      END OF line2.
    CLASS-DATA:
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY,
      out   TYPE REF TO            if\_demo\_output.
    CLASS-METHODS:
      fill\_tables.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    fill\_tables( ).
    out->begin\_section( \`itab1\`
      )->write( itab1
      )->next\_section( \`itab2\`
      )->write( itab2 ).
    DATA(base) = itab2.
    out->begin\_section(
      \`CORRESPONDING itab2( itab1 )\` ).
    itab2 = CORRESPONDING #( itab1 ).
    out->write( itab2
      )->next\_section(
      \`CORRESPONDING itab2( BASE ( itab2 ) itab1 )\` ).
    itab2 = CORRESPONDING #( BASE ( base ) itab1 ).
    out->write( itab2
      )->next\_section(
      \`CORRESPONDING itab2( DEEP itab1 )\` ).
    itab2 = CORRESPONDING #( DEEP itab1 ).
    out->write( itab2
      )->next\_section(
      \`CORRESPONDING itab2( DEEP BASE ( itab2 ) itab1 )\` ).
    itab2 = CORRESPONDING #( DEEP BASE ( base ) itab1 ).
    out->write( itab2 )->display( ).  ENDMETHOD.
  METHOD fill\_tables.
    itab1 = VALUE #(
      ( col1 = 'a11'
        col2 = 'a12'
        col3 = VALUE #( ( col1 = 'a11'  col2 = 'a12' )
                        ( col1 = 'a21'  col2 = 'a22' ) ) )
      ( col1 = 'b21'
        col2 = 'b22'
        col3 = VALUE #( ( col1 = 'b11'  col2 = 'b12' )
                        ( col1 = 'b21'  col2 = 'b22' ) ) )
      ( col1 = 'c31'
        col2 = 'c32'
        col3 = VALUE #( ( col1 = 'c11'  col2 = 'c12' )
                        ( col1 = 'c21'  col2 = 'c22' ) ) ) ).
    itab2 = VALUE #(
      ( col2 = 'x11'
        col3 = VALUE #( ( col2 = 'x11'  col3 = 'x12' )
                        ( col2 = 'x21'  col3 = 'x22' )
                        ( col2 = 'x31'  col3 = 'x32' ) )
        col4 = 'x12' )
      ( col2 = 'y21'
        col3 = VALUE #( ( col2 = 'y11'  col3 = 'y12' )
                        ( col2 = 'y21'  col3 = 'y22' )
                        ( col2 = 'y31'  col3 = 'y32' ) )
        col4 = 'y22' ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example uses the same internal tables as the [executable example](javascript:call_link\('abenmove_corresponding_abexa.htm'\)) for MOVE-CORRESPONDING. Here, the source table itab1 is used as a parameter of a constructor expression with the component operator CORRESPONDING and the result is assigned to the target table itab2. The source table itab1 is assigned to the result with the type of itab2 with and without the addition DEEP. If the addition BASE is used, the result is given the original value of itab2 as the start value and otherwise stays initial. The assignment is made exactly as described in the [executable example](javascript:call_link\('abenmove_corresponding_abexa.htm'\)) for MOVE-CORRESPONDING with or without EXPANDING NESTED TABLES. The use of the component selector with the addition BASE has the same effect as using MOVE-CORRESPONDING with the addition KEEPING TARGET LINES. If DEEP is used the name comparison is made for the components of the substructure col3, which means that fewer assignments are made than when omitting DEEP.

The uninvolved component col4 keeps its initial value in the new lines in both examples. The result is assigned to the target table itab2. Unlike in the [executable example](javascript:call_link\('abencorresponding_struct_abexa.htm'\)) for structures, the final results for MOVE-CORRESPONDING and the component selector CORRESPONDING are the same, since assignments are made to initial new lines in both cases.