  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Grouping with FOR Using Column Values, ABENFOR_GROUP_BY_VALUES_ABEXA, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Grouping with FOR Using Column Values

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using simple value assignments.

Source Code   

REPORT demo\_for\_groups\_by\_values.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      initialize.
  PRIVATE SECTION.
    TYPES spfli\_tab TYPE STANDARD TABLE OF spfli WITH EMPTY KEY.
    CLASS-DATA:
      carrier TYPE spfli-carrid VALUE 'LH',
      flights TYPE spfli\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                 )->begin\_section( \`Flights\`
                 )->write( flights
                 )->begin\_section( \`Grouping\` )
      FOR GROUPS group OF flight IN flights
            GROUP BY
              ( carrier = flight-carrid cityfr = flight-cityfrom
                size = GROUP SIZE index = GROUP INDEX )
            ASCENDING
      LET members = VALUE spfli\_tab(
                       FOR <flight> IN GROUP group ( <flight> ) ) IN
      NEXT o = o->begin\_section(
                    |Group Key: { group-carrier }, { group-cityfr }|
               )->write(
                    |Group Size: {  group-size  }, | &&
                    |Group Index: { group-index }|
               )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD initialize.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    carrier = to\_upper( carrier ).
    SELECT \*
           FROM spfli
           WHERE carrid = @carrier
           INTO TABLE @flights.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example works in the same way as the corresponding [executable example](javascript:call_link\('abenloop_group_by_values_abexa.htm'\)) for [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), but uses the expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) for a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) instead of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry"). In both cases, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table comprehension could also be used in the [executable example](javascript:call_link\('abenloop_group_by_values_abexa.htm'\)) for LOOP AT ... GROUP BY instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").