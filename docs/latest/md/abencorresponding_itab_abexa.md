  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%20for%20Internal%20Tables%2C%20ABENCORRESPONDING_ITAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Component Operator for Internal Tables

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) for internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_itab DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
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
    DATA:
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY.
    METHODS:
      fill\_tables.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_itab IMPLEMENTATION.
  METHOD main.
    fill\_tables( ).
    out->begin\_section( \`itab1\`
      )->write( itab1
      )->next\_section( \`itab2\`
      )->write( itab2 ).
    FINAL(base) = itab2.
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
    out->write( itab2 ).
  ENDMETHOD.
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

Description   

This example uses the same internal tables as the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_abexa.htm) for MOVE-CORRESPONDING. Here, the source table itab1 is used as a parameter of a constructor expression with the component operator CORRESPONDING and the result is assigned to the target table itab2. The source table itab1 is assigned to the result with the type of itab2 with and without the addition DEEP. If the addition BASE is used, the result is given the original value of itab2 as the start value and otherwise stays initial. The assignment is made exactly as described in the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_corresponding_abexa.htm) for MOVE-CORRESPONDING with or without EXPANDING NESTED TABLES. The use of the component selector with the addition BASE has the same effect as using MOVE-CORRESPONDING with the addition KEEPING TARGET LINES. If DEEP is used the name comparison is made for the components of the substructure col3, which means that fewer assignments are made than when omitting DEEP.

The uninvolved component col4 keeps its initial value in the new lines in both examples. The result is assigned to the target table itab2. Unlike in the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencorresponding_struct_abexa.htm) for structures, the final results for MOVE-CORRESPONDING and the component selector CORRESPONDING are the same, since assignments are made to initial new lines in both cases.