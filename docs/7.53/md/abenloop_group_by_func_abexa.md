  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP Using a Function

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using a string function.

Source Code

REPORT demo\_loop\_group\_by\_string\_func.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA
      text TYPE TABLE OF string WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`Text\` ).
    out->write( text ).
    out->next\_section( \`Grouping\` ).
    DATA members LIKE text.
    LOOP AT text INTO DATA(line)
         GROUP BY replace( val = line regex = \`\\D\` with = \`\` occ =  0 )
                  ASCENDING AS TEXT
                  ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( |Group Key: { <group> }| ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING FIELD-SYMBOL(<member>).
        members = VALUE #( BASE members ( <member> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
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

[Grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table text with [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The [group key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") is constructed as a value of the type string. This value is calculated from the content of each table row using the built-in function replace. Groups of rows are then created that contain the same digits in the same order in their text. The groups are sorted in ascending order according to the group key.

The group key, bound to a field symbol <group>, is produced in the group loop. The first group key is an initial text string. In a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"), the rows of each group are placed in an internal table members using the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") with the addition [BASE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). These rows are then also displayed.

members could also be filled by evaluating a table comprehension using [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)), instead of in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_func_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.