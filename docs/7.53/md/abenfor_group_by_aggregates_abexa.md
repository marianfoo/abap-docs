  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_grouping_abexas.htm) → 

Internal Table, Grouping with FOR for Aggregates

This example demonstrates aggregates with FOR expressions.

Source Code

REPORT demo\_for\_groups\_by\_aggregates.
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
    CLASS-METHODS sort
      IMPORTING itab        TYPE itab
      RETURNING VALUE(rtab) TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF aggregate,
        sum TYPE i,
        max TYPE i,
        min TYPE i,
        avg TYPE decfloat34,
      END OF aggregate.
    DATA out TYPE REF TO if\_demo\_output.
    initialize( ).
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                 )->next\_section( \`Table\` )->WRITE( numbers )
           aggregate = VALUE aggregate( )
           MEMBERS   = VALUE itab( )
      FOR GROUPS <group\_key> OF <wa> IN numbers
            GROUP BY ( key = <wa>-key count = GROUP SIZE )
            ASCENDING
      NEXT aggregate = VALUE #(
             sum = REDUCE i( INIT SUM = 0
                     FOR m IN GROUP <group\_key>
                     NEXT sum = sum + m-num )
             max = REDUCE i( INIT max = 0
                     FOR m IN GROUP <group\_key>
                     NEXT max = nmax( val1 = max
                                      val2 = m-num ) )
             min = REDUCE i( INIT MIN = 101
                     FOR m IN GROUP <group\_key>
                     NEXT min = nmin( val1 = min
                                val2 = m-num ) )
             avg = aggregate-sum / <group\_key>-count )
           members = sort(
                       VALUE itab( FOR m IN GROUP <group\_key> ( m ) ) )
           o = o->next\_section( |Group Key: { <group\_key>-key }|
             )->WRITE( MEMBERS
             )->WRITE( aggregate ) ).
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
      seed =  sy-uzeit + 1  min = 1 max = 100 ).
    numbers = VALUE #( FOR j = 1 UNTIL j > lines
                        ( key = rnd\_key->get\_next( )
                          num = rnd\_num->get\_next( ) ) ).
  ENDMETHOD.
  METHOD sort.
    rtab = itab.
    SORT rtab  BY num DESCENDING.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_group_by_aggregates_abexa.htm) for [group loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_loop_glosry.htm "Glossary Entry") with [member loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmember_loop_glosry.htm "Glossary Entry") and the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_group_by_for_abexa.htm) for group loops without member loops. Here, the group loop is also replaced by a [FOR expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_groups_of.htm). The aggregates are calculated in a VALUE expression, to avoid having to specify the name of the structure too often. The descending sort of the member table members must be passed to a method here, since there is no corresponding additions in table comprehensions.