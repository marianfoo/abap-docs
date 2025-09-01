  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP for Aggregates

This example demonstrates a grouping with aggregates.

Source Code

REPORT demo\_loop\_group\_by\_aggregates.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      initialize.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        key TYPE i,
        num TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    CLASS-DATA
      numbers TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    DATA(out) = cl\_demo\_output=>new( ).
    DATA:
      BEGIN OF aggregate,
        sum TYPE i,
        max TYPE i,
        min TYPE i,
        avg TYPE decfloat34,
      END OF aggregate.
    out->next\_section( \`Table\`
      )->write( numbers ).
    LOOP AT numbers ASSIGNING FIELD-SYMBOL(<wa>)
         GROUP BY ( key = <wa>-key  count = GROUP SIZE )
         ASCENDING
         ASSIGNING FIELD-SYMBOL(<group\_key>).
      out->next\_section( |Group Key: { <group\_key>-key }| ).
      aggregate = VALUE #( min = 101 ).
      DATA(members) = VALUE itab( ).
      LOOP AT GROUP <group\_key> ASSIGNING FIELD-SYMBOL(<member>).
        members = VALUE #( BASE members ( <member> ) ).
        aggregate-sum = aggregate-sum + <member>-num.
        aggregate-max = nmax( val1 = aggregate-max
                              val2 = <member>-num ).
        aggregate-min = nmin( val1 = aggregate-min
                              val2 = <member>-num ).
      ENDLOOP.
      aggregate-avg = aggregate-sum / <group\_key>-count.
      SORT members BY num DESCENDING.
      out->write( members
        )->write( aggregate ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD initialize.
    DATA(keys) = 3.
    cl\_demo\_input=>add\_field( CHANGING field = keys ).
    DATA(lines) = 10.
    cl\_demo\_input=>request( CHANGING field = lines ).
    IF keys <= 0 OR lines <= 0.
      RETURN.
    ENDIF.
    DATA(rnd\_key) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = keys ).
    DATA(rnd\_num) = cl\_abap\_random\_int=>create(
      seed = sy-uzeit + 1 min = 1 max = 100 ).
    numbers = VALUE #( FOR j = 1 UNTIL j > lines
                       ( key = rnd\_key->get\_next( )
                         num = rnd\_num->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") across an internal table numbers is used to group by the content of the column key. For the groups, the usual SQL aggregates sum, maximum, minimum, and average are calculated for the second column num. The output is the group members and the associated aggregates. The example enables a maximum number of different key values and rows in the internal table to be entered. The values in the second column are random numbers between 1 and 100.

The example above demonstrates an implementation with a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"). A further [executable example](javascript:call_link\('abenloop_group_by_for_abexa.htm'\)) shows how the member loop can be replaced by table comprehensions and table reductions while preserving the function. Another [executable example](javascript:call_link\('abenfor_group_by_aggregates_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.