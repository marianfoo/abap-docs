---
title: "Internal Tables, Grouping with LOOP Using a Function"
description: |
  This example demonstrates the construction of the group key(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm 'Glossary Entry') using a string function. Source Code REPORT demo_loop_group_by_string_func. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: m
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_func_abexa.htm"
abapFile: "abenloop_group_by_func_abexa.htm"
keywords: ["select", "loop", "do", "try", "method", "class", "data", "internal-table", "field-symbol", "abenloop", "group", "func", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_group_by_abexas.htm) → 

Internal Tables, Grouping with LOOP Using a Function

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_key_glosry.htm "Glossary Entry") using a string function.

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

[Grouping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) of an internal table text with [group key binding](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a value of the type string. This value is calculated from the content of each table row using the predefined function replace. Groups of rows are then created that contain the same digits in the same order in their text. The groups are sorted in ascending order according to the group key.

The group key, bound to a field symbol <group>, is produced in the group loop. The first group key is an initial text string. In a [member loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmember_loop_glosry.htm "Glossary Entry"), the rows of each group are placed in an internal table members using the [value operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm). These rows are then also displayed.

members could also be filled by the evaluation of a table comprehension sing [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_group.htm):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_group_by_func_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.