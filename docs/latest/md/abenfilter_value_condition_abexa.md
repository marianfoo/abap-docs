  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FILTER, Filter Operator](javascript:call_link\('abenconstructor_expression_filter.htm'\)) →  [itab - Examples for FILTER](javascript:call_link\('abentable_filtering_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FILTER%2C%20Single%20Values%2C%20ABENFILTER_VALUE_CONDITION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FILTER, Single Values

This example demonstrates [table filtering](javascript:call_link\('abenconstructor_expression_filter.htm'\)) using single values.

Source Code   

\* Public class definition
CLASS cl\_demo\_filter\_value\_condition DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_filter\_value\_condition IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    DATA cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt'.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = carrid
     )->request( CHANGING field = cityfrom ).
    DATA spfli\_tab TYPE STANDARD TABLE OF spfli
                   WITH EMPTY KEY
                   WITH NON-UNIQUE SORTED KEY carr\_city
                        COMPONENTS carrid cityfrom.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    FINAL(extract) =
      FILTER #( spfli\_tab USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    out->write( extract ).
    FINAL(rest) =
      FILTER #( spfli\_tab EXCEPT USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    ASSERT lines( extract ) + lines( rest ) = lines( spfli\_tab ).
  ENDMETHOD.
ENDCLASS.

Description   

Those lines are filtered from an internal table spfli\_tab filled with flight data that have a specific value in the columns carrid and cityfrom and the result is assigned to an internal table extract. A suitable secondary key carr\_city is defined for the internal table here.

A further internal table, rest, is given the same table filtering, but the addition EXCEPT is specified. The assertion ASSERT demonstrates that rest contains all lines from spfli\_tab that are not in extract.