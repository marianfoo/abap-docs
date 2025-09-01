  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20for%20Aggregates%2C%20ABENFOR_GROUP_BY_AGGREGATES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

itab - Grouping with FOR for Aggregates

This example demonstrates aggregates with FOR expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_aggregates DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS initialize.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        key TYPE i,
        num TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    DATA
      numbers TYPE itab.
    METHODS sort
      IMPORTING itab        TYPE itab
      RETURNING VALUE(rtab) TYPE itab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_aggregates IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF aggregate,
        sum TYPE i,
        max TYPE i,
        min TYPE i,
        avg TYPE decfloat34,
      END OF aggregate.
    TYPES ot TYPE REF TO if\_demo\_output.
    initialize( ).
    out->next\_section( \`Table\` )->write( numbers ).
    out = REDUCE #(
      INIT ol TYPE ot
           aggregate = VALUE aggregate( )
           members   = VALUE itab( )
      FOR GROUPS <group\_key> OF <wa> IN numbers
            GROUP BY ( key = <wa>-key count = GROUP SIZE )
            ASCENDING
      NEXT aggregate = VALUE #(
             sum = REDUCE i( INIT sum = 0
                     FOR m IN GROUP <group\_key>
                     NEXT sum += m-num )
             max = REDUCE i( INIT max = 0
                     FOR m IN GROUP <group\_key>
                     NEXT max = nmax( val1 = max
                                      val2 = m-num ) )
             min = REDUCE i( INIT min = 101
                     FOR m IN GROUP <group\_key>
                     NEXT min = nmin( val1 = min
                                val2 = m-num ) )
             avg = aggregate-sum / <group\_key>-count )
           members = sort(
                       VALUE itab( FOR m IN GROUP <group\_key> ( m ) ) )
           ol = out->next\_section( |Group Key: { <group\_key>-key }|
             )->write( members
             )->write( aggregate ) ).
  ENDMETHOD.
  METHOD initialize.
    DATA(keys) = 3.
    DATA(lines) = 10.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = keys
     )->request(   CHANGING field = lines ).
    IF keys <= 0 OR lines <= 0.
      RETURN.
    ENDIF.
    FINAL(rnd\_key) = cl\_abap\_random\_int=>create(
      seed = CONV i(
          cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = keys ).
    FINAL(rnd\_num) = cl\_abap\_random\_int=>create(
      seed =
          cl\_demo\_date\_time=>get\_user\_time( ) + 1  min = 1 max = 100 ).
    numbers = VALUE #( FOR j = 1 UNTIL j > lines
                        ( key = rnd\_key->get\_next( )
                          num = rnd\_num->get\_next( ) ) ).
  ENDMETHOD.
  METHOD sort.
    rtab = itab.
    SORT rtab  BY num DESCENDING.
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_aggregates_abexa.htm) for [group loops](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry") with [member loops](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry") and the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_for_abexa.htm) for group loops without member loops. Here, the group loop is also replaced by a [FOR expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm). The aggregates are calculated in a VALUE expression, to avoid having to specify the name of the structure too often. The descending sort of the member table members must be passed to a method here, since there is no corresponding additions in table comprehensions.