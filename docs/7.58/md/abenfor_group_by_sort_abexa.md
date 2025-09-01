---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_for_grps_by_sort DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_for_grps_by_sort IMPLEMENTATION. METHOD main. TYPES itab TYPE STAN
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_sort_abexa.htm"
abapFile: "abenfor_group_by_sort_abexa.htm"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenfor", "group", "sort", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20for%20Sorts%2C%20ABENFOR_GROUP_BY_SORT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

itab - Grouping with FOR for Sorts

This example demonstrates sorts with FOR expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_sort DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    FINAL(itab) =
      VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` )
                  ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ).
    out->write( itab ).
    DATA jtab TYPE itab.
    jtab = VALUE #( FOR GROUPS <grp1> OF <line> IN itab
                        GROUP BY to\_upper( <line> ) ASCENDING
                    FOR GROUPS <grp2> OF <mbr1> IN GROUP <grp1>
                        GROUP BY <mbr1> DESCENDING
                    FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
    out->write( jtab ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_sort_abexa.htm) for sorts across groupings using LOOP. Here, all groupings are collected in a single expression using three [FOR expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm).