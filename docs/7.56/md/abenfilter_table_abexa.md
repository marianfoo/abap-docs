  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER, Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) →  [itab - Examples for FILTER](javascript:call_link\('abentable_filtering_abexas.htm'\)) → 

FILTER, Filter Table

This example demonstrates [table filtering](javascript:call_link\('abenconstructor_expression_filter.htm'\)) using a filter table.

Source Code

REPORT demo\_filter\_table.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA:
      cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt',
      cityto   TYPE spfli-cityto   VALUE 'New York'.
    CLASS-METHODS:
      main,
      init.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    init( ).
    TYPES: BEGIN OF filter,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
           END OF filter,
           filter\_tab TYPE HASHED TABLE OF filter
                 WITH UNIQUE KEY cityfrom cityto.
    DATA(filter\_tab) = VALUE filter\_tab(
        ( cityfrom = cityfrom cityto = cityto )
        ( cityfrom = cityto   cityto = cityfrom ) ).
    SELECT carrid, connid, cityfrom, cityto
          FROM spfli
          ORDER BY carrid, connid, cityfrom, cityto
          INTO TABLE @DATA(spfli\_tab).
    cl\_demo\_output=>display(
      FILTER #( spfli\_tab IN filter\_tab
                  WHERE cityfrom = cityfrom  AND cityto = cityto ) ).  ENDMETHOD.
  METHOD init.
    cl\_demo\_input=>add\_field( CHANGING field = cityfrom ).
    cl\_demo\_input=>request(   CHANGING field = cityto ).
    cityfrom = to\_upper( cityfrom ).
    cityto = to\_upper( cityto ).
    IF cityfrom = cityto.
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Those lines are filtered out of an internal table spfli\_tab filled with flight data that have specific values in the columns cityfrom and cityto. The filter is applied using a filter table of the type filter\_tab constructed using VALUE filled with input values. The result includes all outbound and return flights for the entered cities.