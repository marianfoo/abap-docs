  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_grouping_abexas.htm) → 

itab - Grouping with FOR Using a Function

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_glosry.htm "Glossary Entry") using a string function.

Source Code

REPORT demo\_for\_groups\_by\_string\_func.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES
      text\_tab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    CLASS-DATA
      text TYPE text\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                 )->begin\_section( \`Text\`
                 )->write( text
                 )->next\_section( \`Grouping\` )
      FOR GROUPS <GROUP> OF LINE IN TEXT
            GROUP BY REPLACE(
                       val = LINE REGEX = \`\\D\` WITH = \`\` occ =  0 )
            ASCENDING AS TEXT
      LET members = VALUE text\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->begin\_section( |Group Key: { <group> }|
               )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    text = VALUE #( ( \`aaa1aaaaa2aaaaa\` )
                    ( \`bbbbb3bbbbbbbbb\` )
                    ( \`cccccccccc3cccc\` )
                    ( \`ddddddddddddddd\` )
                    ( \`eeeee1eeeeee2ee\` )
                    ( \`ffff1fff2ff3fff\` )
                    ( \`ggggggggggggggg\` ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_func_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_func_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmember_loop_glosry.htm "Glossary Entry").