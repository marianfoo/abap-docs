  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP, Explicit and Implicit

This example demonstrates a self-programmed group loop and how it is replaced by [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).

Source Code

REPORT demo\_loop\_at\_group\_by\_expl.
CLASS demo\_group\_by DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      numbers TYPE TABLE OF i WITH EMPTY KEY,
      out     TYPE REF TO if\_demo\_output,
      limit1  TYPE i VALUE 3,
      limit2  TYPE i VALUE 6.
    CLASS-METHODS:
      group\_explicit,
      group\_by.
ENDCLASS.
CLASS demo\_group\_by IMPLEMENTATION.
  METHOD class\_constructor.
    numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    group\_explicit( ).
    group\_by( ).
    out->display( ).
  ENDMETHOD.
  METHOD group\_explicit.
    TYPES:
      BEGIN OF helper\_struc,
        key  TYPE string,
        refs TYPE STANDARD TABLE OF REF TO i WITH EMPTY KEY,
      END OF helper\_struc,
      helper\_tab TYPE STANDARD TABLE OF helper\_struc WITH EMPTY KEY.
    DATA(helper\_tab) = VALUE helper\_tab(
     ( key = |below|   )
     ( key = |between| )
     ( key = |above|   ) ).
    out->next\_section( 'Group Explicit' ).
    "Grouping
    LOOP AT numbers REFERENCE INTO DATA(dref).
      IF dref->\* < limit1.
        ASSIGN helper\_tab\[ key = |below| \]-refs to FIELD-SYMBOL(<fs>).
        INSERT dref INTO TABLE <fs>.
      ELSEIF dref->\* <= limit2.
        ASSIGN helper\_tab\[ key = |between| \]-refs to <fs>.
        INSERT dref INTO TABLE <fs>.
      ELSE.
        ASSIGN helper\_tab\[ key = |above| \]-refs to <fs>.
        INSERT dref INTO TABLE <fs>.
      ENDIF.
    ENDLOOP.
    "Group loop
    DATA members LIKE numbers.
    LOOP AT helper\_tab INTO DATA(helper\_struc).
      out->begin\_section( helper\_struc-key ).
      members = VALUE #( FOR m IN helper\_struc-refs ( m->\* ) ).
      out->write( members )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD group\_by.
    out->next\_section( 'Group By' ).
    DATA members LIKE numbers.
    LOOP AT numbers INTO DATA(number)
         GROUP BY COND string(
           WHEN number <  limit1 THEN |below|
           WHEN number <= limit2 THEN |between|
           ELSE |above| )
         INTO DATA(group).
      out->begin\_section( group ).
      members = VALUE #( FOR m IN GROUP group ( m ) ).
      out->write( members )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_group\_by=>main( ).

Description

The task of splitting the rows in a single one-column table into three groups by comparison criteria is solved in two different ways:

-   The method group\_explicit works without GROUP BY. Instead, the grouping takes place explicitly in the ABAP program, using an explicit helper table helper\_tab. After the grouping, the rows of the nested table refs in helper\_tab point to the associated rows of the original table numbers for each group defined using the column key. This grouping loop is followed by the group loop across the helper table. Here, every loop pass accesses the group members by evaluating the nested tables refs.

-   The method group\_by works with GROUP BY. The result matches the result of group\_explicit. A comparison of the methods shows that the grouping loop of the first method in the second method is done explicitly by [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) and no explicit helper table is required. Only the group loop can be seen.

Both methods perform three types of loops, the grouping loop, the group loop, and the optional member loops. Using GROUP BY is easier since the grouping loop does not need to be programmed explicitly and the second method becomes significantly shorter.