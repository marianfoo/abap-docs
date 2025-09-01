  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20Using%20a%20Comparison%2C%20ABENFOR_GROUP_BY_COMPARISON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

itab - Grouping with FOR Using a Comparison

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using comparison expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_comparison DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      number\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA:
      numbers TYPE number\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_comparison IMPLEMENTATION.
  METHOD main.
    TYPES ot TYPE REF TO if\_demo\_output.
    DATA(threshold) = 5.
    cl\_demo\_input=>new( )->request( CHANGING field = threshold ).
    out->begin\_section( \`Grouping\` ).
    out = REDUCE #(
      INIT o1 TYPE ot
      FOR GROUPS <group> OF number IN numbers
            GROUP BY COND string(
              WHEN number <= threshold THEN |LE { threshold }|
                                       ELSE |GT { threshold }| )
      LET members = VALUE number\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o1 = out->begin\_section( <group>
               )->write( members )->end\_section( ) ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the corresponding [executable example](javascript:call_link\('abenloop_group_by_comparison_abexa.htm'\)) for [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), but uses the expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) for a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) instead of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry"). In both cases, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table comprehension could also be used in the [executable example](javascript:call_link\('abenloop_group_by_comparison_abexa.htm'\)) for LOOP AT ... GROUP BY instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").