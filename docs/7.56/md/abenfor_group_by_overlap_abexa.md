---
title: "Source Code"
description: |
  REPORT demo_for_groups_by_overlap. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES i_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY. CLASS-DATA itab TYPE i_tab. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA out TYPE REF TO if_demo_
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_group_by_overlap_abexa.htm"
abapFile: "abenfor_group_by_overlap_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenfor", "group", "overlap", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_grouping_abexas.htm) → 

itab - Grouping with FOR in Overlaps

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_key_glosry.htm "Glossary Entry") if conditions overlap.

Source Code

REPORT demo\_for\_groups\_by\_overlap.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES
      i\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    CLASS-DATA
      itab TYPE i\_tab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new(
                  )->begin\_section( \`LE 5, BT 3 AND 7, GT 5\` )
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\`
                                  WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa >  5 THEN \`GT 5\` )
      LET members = VALUE i\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->begin\_section( <group>
               )->write( members )->end\_section( ) ).
    out = REDUCE #(
      INIT o = out->next\_section( \`BT 3 AND 7, LE 5, GT 5\` )
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa <= 5 THEN \`LE 5\`
                                               ELSE \`GT 5\` )
      LET members = VALUE i\_tab(
                       FOR <member> IN GROUP <group> ( <member> ) )
      IN NEXT o = o->begin\_section( <group>
                  )->write( members )->end\_section( ) ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_overlap_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_overlap_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmember_loop_glosry.htm "Glossary Entry").