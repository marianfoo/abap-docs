  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_grouping_abexas.htm) → 

Internal Tables, Grouping with FOR Using a Comparison

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_key_glosry.htm "Glossary Entry") using comparison expressions.

Source Code

REPORT demo\_for\_groups\_by\_comparison.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      number\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    CLASS-DATA:
      numbers TYPE number\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    DATA(threshold) = 5.
    cl\_demo\_input=>request( CHANGING field = threshold ).
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                  )->begin\_section( \`Grouping\` )
      FOR GROUPS <group> OF number IN numbers
            GROUP BY COND string(
              WHEN number <= threshold THEN |LE { threshold }|
                                       ELSE |GT { threshold }| )
      LET members = VALUE number\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->begin\_section( <group>
               )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_group_by_comparison_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_group_by_comparison_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmember_loop_glosry.htm "Glossary Entry").