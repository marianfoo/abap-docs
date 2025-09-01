  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20and%20FOR%2C%20ABENLOOP_GROUP_BY_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

itab - Grouping with LOOP and FOR

This example demonstrates aggregates using table reductions.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_for DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
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
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_for IMPLEMENTATION.
  METHOD main.
    initialize( ).
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
      DATA(members) = VALUE itab( FOR m IN GROUP <group\_key> ( m ) ).
      aggregate-sum = REDUCE i( INIT sum = 0
                                FOR m IN GROUP <group\_key>
                                NEXT sum += m-num ).
      aggregate-max = REDUCE i( INIT max = 0
                                FOR m IN GROUP <group\_key>
                                NEXT max = nmax( val1 = max
                                                 val2 = m-num ) ).
      aggregate-min = REDUCE i( INIT min = 101
                                FOR m IN GROUP <group\_key>
                                NEXT min = nmin( val1 = min
                                                 val2 = m-num ) ).
      aggregate-avg = aggregate-sum / <group\_key>-count.
      SORT members BY num DESCENDING.
      out->write( members
        )->write( aggregate ).
    ENDLOOP.
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
ENDCLASS.

Description   

This example works in the same way as the [executable example](javascript:call_link\('abenloop_group_by_aggregates_abexa.htm'\)) for aggregates. Here, expressions [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) are used instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") to calculate aggregates using [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") and to determine the group members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"). A further [executable example](javascript:call_link\('abenfor_group_by_aggregates_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.