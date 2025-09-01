  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

Internal Tables, Grouping with FOR in Overlaps

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") if conditions overlap.

Source Code

REPORT demo\_for\_groups\_by\_overlap.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES
      i\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    CLASS-DATA
      itab TYPE i\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                  )->begin\_section( \`LE 5, BT 3 AND 7, GT 5\` )
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\`
                                  WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa >  5 THEN \`GT 5\` )
      LET members = VALUE i\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->begin\_section( <group>
               )->write( members )->end\_section( ) ).
    out = REDUCE #(
      INIT o = out->next\_section( \`BT 3 AND 7, LE 5, GT 5\` )
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa <= 5 THEN \`LE 5\`
                                               ELSE \`GT 5\` )
      LET members = VALUE i\_tab(
                       FOR <member> IN GROUP <group> ( <member> ) )
      IN NEXT o = o->begin\_section( <group>
                  )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](javascript:call_link\('abenloop_group_by_overlap_abexa.htm'\)) for [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), but uses the expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) for a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) instead of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry"). In both cases, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table comprehension could also be used in the [executable example](javascript:call_link\('abenloop_group_by_overlap_abexa.htm'\)) for LOOP AT ... GROUP BY instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").