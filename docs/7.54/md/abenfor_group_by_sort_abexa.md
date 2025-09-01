---
title: "Internal Table, Grouping with FOR for Sorts"
description: |
  This example demonstrates sorts with FOR expressions. Source Code REPORT demo_for_groups_by_sort. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. DATA(itab) = VALUE itab( ( `d`
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_group_by_sort_abexa.htm"
abapFile: "abenfor_group_by_sort_abexa.htm"
keywords: ["select", "loop", "do", "method", "class", "data", "types", "internal-table", "abenfor", "group", "sort", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_grouping_abexas.htm) → 

Internal Table, Grouping with FOR for Sorts

This example demonstrates sorts with FOR expressions.

Source Code

REPORT demo\_for\_groups\_by\_sort.
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
    jtab = VALUE #( FOR GROUPS <grp1> OF <line> IN itab
                        GROUP BY to\_upper( <line> ) ASCENDING
                    FOR GROUPS <grp2> OF <mbr1> IN GROUP <grp1>
                        GROUP BY <mbr1> DESCENDING
                    FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
    cl\_demo\_output=>display( jtab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_sort_abexa.htm) for sorts across groupings using LOOP. Here, all groupings are collected in a single expression using three [FOR expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_groups_of.htm).