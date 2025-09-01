  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_grouping_abexas.htm) → 

Internal Table, Grouping with FOR Using Column Values

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm "Glossary Entry") using simple value assignments.

Source Code

REPORT demo\_for\_groups\_by\_values.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      initialize.
  PRIVATE SECTION.
    TYPES spfli\_tab TYPE STANDARD TABLE OF spfli WITH EMPTY KEY.
    CLASS-DATA:
      carrier TYPE spfli-carrid VALUE 'LH',
      flights TYPE spfli\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                 )->begin\_section( \`Flights\`
                 )->write( flights
                 )->begin\_section( \`Grouping\` )
      FOR GROUPS group OF flight IN flights
            GROUP BY
              ( carrier = flight-carrid cityfr = flight-cityfrom
                size = GROUP SIZE index = GROUP INDEX )
            ASCENDING
      LET members = VALUE spfli\_tab(
                       FOR <flight> IN GROUP group ( <flight> ) ) IN
      NEXT o = o->begin\_section(
                    |Group Key: { group-carrier }, { group-cityfr }|
               )->write(
                    |Group Size: {  group-size  }, | &&
                    |Group Index: { group-index }|
               )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD initialize.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    carrier = to\_upper( carrier ).
    SELECT \*
           FROM spfli
           WHERE carrid = @carrier
           INTO TABLE @flights.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_values_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_values_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmember_loop_glosry.htm "Glossary Entry").