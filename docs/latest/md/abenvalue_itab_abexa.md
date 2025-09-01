  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE, Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20VALUE%2C%20Operator%20for%20Internal%20Tables%2C%20ABENVALUE_ITAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

VALUE, Operator for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_constructor\_itab DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_value\_constructor\_itab IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    FINAL(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
    DATA(itab1) = itab.
    itab1 = VALUE #(  BASE itab1
                     ( 4 )
                     ( 5 ) ).
    out->write( itab1 ).
    DATA(itab2) = itab.
    itab2 = VALUE #( ( LINES OF itab2 )
                      ( 4 )
                      ( 5 ) ).
    out->write( itab2 ).
    DATA(itab3) = itab.
    itab3 = VALUE #( BASE itab3
                     ( LINES OF itab3 )
                     ( 4 )
                     ( 5 ) ).
    out->write( itab3 ).
    DATA(itab4) = itab.
    itab4 = VALUE #( LET x = itab4 IN
                     ( LINES OF x )
                     ( 4 )
                     ( 5 ) ).
    out->write( itab4 ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows various effects when using the left side of an assignment in line specifications of the operator VALUE in the construction of internal tables.

-   In the construction of itab1, the left side is used after BASE. Here, it is passed the original three lines as a start value before the line specifications are evaluated. Two single lines are then appended to this start value.
-   In the construction of itab2, the left side is initialized before the line specifications are evaluated. This is why no lines are inserted by LINES OF itab2 and the table contains only two single lines.
-   In the construction of itab3, the left side is given its original three lines as a start line using BASE. They are then appended again using LINES OF, before the two single lines are appended.
-   In the construction of itab4, the left side is saved in the helper variable x before it is initialization and is then used in LINES OF. The result is the same as when the left side is used after BASE.