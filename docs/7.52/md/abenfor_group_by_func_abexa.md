  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

Internal Tables, Grouping with FOR Using a Function

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using a string function.

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

This example works in the same way as the corresponding [executable example](javascript:call_link\('abenloop_group_by_func_abexa.htm'\)) for [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), but uses the expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) for a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") with [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) instead of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry"). In both cases, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table comprehension could also be used in the [executable example](javascript:call_link\('abenloop_group_by_func_abexa.htm'\)) for LOOP AT ... GROUP BY instead of the [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").