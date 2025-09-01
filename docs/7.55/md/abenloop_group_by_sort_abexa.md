---
title: "Source Code"
description: |
  REPORT demo_loop_group_by_sort. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. DATA(itab) = VALUE itab( ( `d` ) ( `B` ) ( `D` ) ( `b` ) ( `a` ) ( `D` ) ( `a` ) (
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_sort_abexa.htm"
abapFile: "abenloop_group_by_sort_abexa.htm"
keywords: ["select", "loop", "do", "while", "case", "method", "class", "data", "types", "internal-table", "abenloop", "group", "sort", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_abexas.htm) → 

itab - Grouping with LOOP and Sort

This example demonstrates how groupings are used for sorts.

Source Code

REPORT demo\_loop\_group\_by\_sort.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    DATA(itab) =
      VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` )
                  ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ).
    cl\_demo\_output=>write( itab ).
    DATA jtab TYPE itab.
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<line>)
                 GROUP BY to\_upper( <line> ) ASCENDING
                 ASSIGNING FIELD-SYMBOL(<grp1>).
      LOOP AT GROUP <grp1> ASSIGNING FIELD-SYMBOL(<mbr1>)
              GROUP BY <mbr1> DESCENDING
              ASSIGNING FIELD-SYMBOL(<grp2>).
           jtab = VALUE #( BASE jtab
                           FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
      ENDLOOP.
    ENDLOOP.
    cl\_demo\_output=>display( jtab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the additions ASCENDING and DESCENDING of [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) are used to sort a character-like table first while ignoring case and then sort within the groups to separate uppercase from lowercase. A further [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_group_by_sort_abexa.htm) shows how the LOOP statements can be replaced by a single expression.