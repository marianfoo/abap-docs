  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_abexas.htm) → 

Internal Tables, Grouping with LOOP and FOR

This example demonstrates aggregates using table reductions.

Source Code

REPORT demo\_loop\_group\_by\_for.
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
      DATA(members) = VALUE itab( FOR m IN GROUP <group\_key> ( m ) ).
      aggregate-sum = REDUCE i( INIT sum = 0
                                FOR m IN GROUP <group\_key>
                                NEXT sum = sum + m-num ).
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_aggregates_abexa.htm) for aggregates. Here, expressions [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_group.htm) are used instead of the [member loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmember_loop_glosry.htm "Glossary Entry") to calculate aggregates using [table reductions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry") and to determine the group members using a [table comprehension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry"). A further [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_group_by_aggregates_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.