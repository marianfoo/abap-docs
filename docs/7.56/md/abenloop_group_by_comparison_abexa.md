  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_abexas.htm) → 

itab - Grouping with LOOP Using a Comparison

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_key_glosry.htm "Glossary Entry") using comparison expressions.

Source Code

REPORT demo\_loop\_group\_by\_comparison.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      numbers TYPE TABLE OF i WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(threshold) = 5.
    cl\_demo\_input=>request( CHANGING field = threshold ).
    out->begin\_section( \`Grouping\` ).
    DATA members LIKE numbers.
    LOOP AT numbers INTO DATA(number)
         GROUP BY COND string(
           WHEN number <= threshold THEN |LE { threshold }|
                                    ELSE |GT { threshold }| )
         ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( <group> ).
      CLEAR members.
      LOOP AT GROUP <group> REFERENCE INTO DATA(member\_ref).
        members = VALUE #( BASE members ( member\_ref->\* ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm) of an internal table numbers with [group key binding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a value of the type string, which is calculated from the content of each table line using the conditional operator cond. This creates groups of lines whose content is either less than or equal to or greater than an entered value.

The group key that is bound to a field symbol <group> is produced in the group loop. In a [member loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmember_loop_glosry.htm "Glossary Entry"), the lines of each group are placed in an internal table members using the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm). This table is also displayed.

members could also be filled by evaluating a table comprehension using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_group.htm):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_group_by_comparison_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.