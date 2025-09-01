  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FILTER, Filter Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_filter.htm) →  [itab - Examples for FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_filtering_abexas.htm) → 

FILTER, Single Values

This example demonstrates [table filtering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_filter.htm) using single values.

Source Code

REPORT demo\_filter\_value\_condition.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>add\_field( CHANGING field = carrid ).
    DATA cityfrom TYPE spfli-cityfrom VALUE 'Frankfurt'.
    cl\_demo\_input=>request( CHANGING field = cityfrom ).
    DATA spfli\_tab TYPE STANDARD TABLE OF spfli
                   WITH EMPTY KEY
                   WITH NON-UNIQUE SORTED KEY carr\_city
                        COMPONENTS carrid cityfrom.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    DATA(extract) =
      FILTER #( spfli\_tab USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    cl\_demo\_output=>display( extract ).
    DATA(rest) =
      FILTER #( spfli\_tab EXCEPT USING KEY carr\_city
                  WHERE carrid   = CONV #( to\_upper( carrid ) ) AND
                        cityfrom = CONV #( to\_upper( cityfrom ) ) ).
    ASSERT lines( extract ) + lines( rest ) = lines( spfli\_tab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Those lines are filtered from an internal table spfli\_tab filled with flight data that have a specific value in the columns carrid and cityfrom and the result is assigned to an internal table extract. A suitable secondary key carr\_city is defined for the internal table here.

A further internal table, rest, is given the same table filtering, but the addition EXCEPT is specified. The assertion ASSERT demonstrates that rest contains all lines from spfli\_tab that are not in extract.