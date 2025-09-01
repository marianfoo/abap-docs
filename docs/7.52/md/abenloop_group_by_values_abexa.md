  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP Using Column Values

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using simple value assignments.

Source Code

REPORT demo\_loop\_group\_by\_values.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      initialize.
  PRIVATE SECTION.
    CLASS-DATA:
      carrier TYPE spfli-carrid VALUE 'LH',
      flights TYPE TABLE OF spfli WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`Flights\` ).
    out->write( flights ).
    out->begin\_section( \`Grouping\` ).
    DATA members LIKE flights.
    LOOP AT flights INTO DATA(flight)
         GROUP BY ( carrier = flight-carrid cityfr = flight-cityfrom
                    size = GROUP SIZE index = GROUP INDEX )
                  ASCENDING
                  REFERENCE INTO DATA(group\_ref).
      out->begin\_section(
        |Group Key: { group\_ref->carrier }, { group\_ref->cityfr }| ).
      out->write(
        |Group Size: {  group\_ref->size  }, | &&
        |Group Index: { group\_ref->index }| ).
      CLEAR members.
      LOOP AT GROUP group\_ref ASSIGNING FIELD-SYMBOL(<flight>).
        members = VALUE #( BASE members ( <flight> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD initialize.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    carrier = to\_upper( carrier ).
    SELECT \* FROM spfli
             WHERE carrid = @carrier
             INTO TABLE @flights.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table flights with [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The [group key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") is constructed as a structure. Here, the values of the columns carrid or cityfrom in each row of the internal table are assigned to the components carrier and cityfr. This creates groups of rows that have the same value in these columns. Furthermore, the components size and index are created for the special language elements GROUP SIZE or GROUP INDEX to determine the size and index of each group.

The group key, bound to a reference variable group\_ref, and the additional components are produced in the group loop. In a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"), the rows of each group are placed in an internal table members using the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") with the addition [BASE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). These rows are then also displayed.

members could also be filled by the evaluation of a table comprehension sing [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)), instead of in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)):

members = VALUE #( FOR <flight> IN GROUP group\_ref ( <flight> ) ).

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_values_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.