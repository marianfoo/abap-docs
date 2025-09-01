---
title: "Source Code"
description: |
  REPORT demo_group_by_overlap. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. CLASS-DATA itab TYPE TABLE OF i WITH EMPTY KEY. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( ). DATA members LIKE itab. out->begin
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_overlap_abexa.htm"
abapFile: "abenloop_group_by_overlap_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenloop", "group", "overlap", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_abexas.htm) → 

itab - Grouping with LOOP in Overlaps

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_key_glosry.htm "Glossary Entry") if conditions overlap.

Source Code

REPORT demo\_group\_by\_overlap.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA
      itab TYPE TABLE OF i WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA members LIKE itab.
    out->begin\_section( \`LE 5, BT 2 AND 7, GT 5\` ).
    LOOP AT itab INTO DATA(wa)
         GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\`
                               WHEN wa >  2 AND
                                    wa <= 7 THEN \`BT 2 AND 7\`
                               WHEN wa >  5 THEN \`GT 5\` )
                 ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( <group> ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING FIELD-SYMBOL(<wa>).
        members = VALUE #( BASE members ( <wa> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`BT 2 AND 7, LE 5, GT 5\` ).
    LOOP AT itab INTO wa
         GROUP BY COND string( WHEN wa >  2 AND
                                    wa <= 7 THEN \`BT 2 AND 7\`
                               WHEN wa <= 5 THEN \`LE 5\`
                               WHEN wa >  5 THEN \`GT 5\` )
                 ASSIGNING <group>.
      out->begin\_section( <group> ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING <wa>.
        members = VALUE #( BASE members ( <wa> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in a similar way to the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_comparison_abexa.htm) for constructions using comparison expressions. The following shows how the result of comparison expressions that overlap depends on the order in which the expressions are evaluated.

In the first group loop,

-   those lines are identified first whose value is less than or equal to 5,
-   then the lines whose value is between 2 and 7,
-   then the lines whose value is greater than 5.

In the second group loop,

-   those lines are identified first whose value is between 2 and 7,
-   then the lines whose value is less than or equal to 5,
-   then the lines whose value is greater than 5.

The result of this is that the lines with the values 3, 4, and 5 are assigned to different groups. The group assignments of the lines would not change, however, even if the internal table were sorted differently.

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_group_by_overlap_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.