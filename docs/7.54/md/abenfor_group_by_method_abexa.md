  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

Internal Tables, Grouping with FOR Using a Method

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using the assignment of return values.

Source Code

REPORT demo\_for\_groups\_by\_method.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      spfli\_tab    TYPE STANDARD TABLE OF spfli    WITH EMPTY KEY,
      sairport\_tab TYPE STANDARD TABLE OF sairport WITH EMPTY KEY.
    CLASS-DATA:
      flights  TYPE spfli\_tab,
      airports TYPE sairport\_tab.
    CLASS-METHODS
      get\_time\_zone IMPORTING id               TYPE sairport-id
                    RETURNING VALUE(time\_zone) TYPE sairport-time\_zone.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new( )
      FOR GROUPS <group> OF wa IN flights
            GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom )
                       tz\_to   = get\_time\_zone( wa-airpto )
                       size    = GROUP SIZE index = GROUP INDEX )
      LET members = VALUE spfli\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->write( name = \`Group key\`
                         data = <group>
               )->write( members )->line( ) ).
  out->display( ).ENDMETHOD.
METHOD class\_constructor.
  SELECT \* FROM spfli    INTO TABLE flights.
  SELECT \* FROM sairport INTO TABLE airports.
ENDMETHOD.
METHOD get\_time\_zone.
  time\_zone = airports\[ id = id \]-time\_zone.
ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](javascript:call_link\('abenloop_group_by_method_abexa.htm'\)) for [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), but uses the expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) for a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) instead of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry"). In both cases, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table comprehension could also be used in the [executable example](javascript:call_link\('abenloop_group_by_method_abexa.htm'\)) for LOOP AT ... GROUP BY instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").