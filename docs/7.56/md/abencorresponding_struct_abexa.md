  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

Component Operator for Structures

This example demonstrates the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) for structures.

Source Code

REPORT demo\_corresponding\_struct.
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
      struct1 TYPE        line1,
      struct2 TYPE        line2,
      out     TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      fill\_structures.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    fill\_structures( ).
    out->begin\_section( \`struct1\`
      )->write( struct1 ).
    out->next\_section( \`struct2\`
      )->write( struct2 ).
    DATA(base) = struct2.
    out->begin\_section(
      \`CORRESPONDING struct2( struct1 )\` ).
    struct2 = CORRESPONDING #( struct1 ).
    out->write( struct2
     )->next\_section(
      \`CORRESPONDING struct2( BASE ( struct2 ) struct1 )\` ).
    struct2 = CORRESPONDING #( BASE ( base ) struct1 ).
    out->write( struct2
     )->next\_section(
      \`CORRESPONDING struct2( DEEP struct1 )\` ).
    struct2 = CORRESPONDING #( DEEP struct1 ).
    out->write( struct2
     )->next\_section(
      \`CORRESPONDING struct2( DEEP BASE ( struct2 ) struct1 )\` ).
    struct2 = CORRESPONDING #( DEEP BASE ( base ) struct1 ).
    out->write( struct2
     )->display( ).  ENDMETHOD.
  METHOD fill\_structures.
    struct1 = VALUE #(
       col1 = 'a1'
       col2 = 'a2'
       col3 = VALUE #( ( col1 = 'a11'  col2 = 'a12' )
                       ( col1 = 'a21'  col2 = 'a22' ) ) ).
    struct2 = VALUE #(
       col2 = 'x11'
       col3 = VALUE #( ( col2 = 'x11'  col3 = 'x12' )
                       ( col2 = 'x21'  col3 = 'x22' )
                       ( col2 = 'x31'  col3 = 'x32' ) )
       col4 = 'x12'  ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example uses the same structures as the [executable example](javascript:call_link\('abenmove_corresponding_struc_abexa.htm'\)) for MOVE-CORRESPONDING. Here, the source structure struct1 is used as a parameter of a constructor expression with the component operator CORRESPONDING and the result is assigned to the target structure struct2. The source structure struct1 is assigned to the result with the type of struct2 with and without the addition DEEP. If the addition BASE is used, the result is given the original value of struct2 as its start value and otherwise stays initial. The assignment is made exactly as described in the [executable example](javascript:call_link\('abenmove_corresponding_struc_abexa.htm'\)) for MOVE-CORRESPONDING with or without EXPANDING NESTED TABLES. If DEEP is used, the name comparison is made for the components of the substructure col3, which means that fewer assignments are made than when omitting DEEP. The uninvolved component col4 keeps its initial value without using the addition BASE. If BASE is used, it keeps the set value. The result is assigned to the target structure struct2.

The result of the component operator matches the result of MOVE-CORRESPONDING only if the addition BASE is used.