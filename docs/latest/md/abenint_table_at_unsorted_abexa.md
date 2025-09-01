---
title: "Group Level Processing for Unsorted Tables"
description: |
  This example demonstrates group level processing for an unsorted internal table. Source Code  Public class definition CLASS cl_demo_int_tbls_at_unsorted DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenint_table_at_unsorted_abexa.htm"
abapFile: "abenint_table_at_unsorted_abexa.htm"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenint", "table", "unsorted", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) →  [AT, Group Level Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_itab.htm) →  [Examples of Group Level Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenat_itab_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Group%20Level%20Processing%20for%20Unsorted%20Tables%2C%20ABENINT_TABLE_AT_UNSORTED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

Group Level Processing for Unsorted Tables

This example demonstrates group level processing for an unsorted internal table.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_at\_unsorted DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES: BEGIN OF t\_line,
             col1 TYPE string,
             col2 TYPE string,
           END OF t\_line,
           t\_itab TYPE STANDARD TABLE OF t\_line WITH EMPTY KEY.
    DATA itab TYPE t\_itab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_at\_unsorted IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
      \`Group Level Processing for Unsorted Table\` ).
    DATA group TYPE t\_itab.
    LOOP AT itab INTO DATA(wa).
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( wa ) ).
      AT END OF col1.
        out->write( group ).
      ENDAT.
    ENDLOOP.
    out->next\_section(
      \`Grouping for Unsorted Table\` ).
    LOOP AT itab INTO wa GROUP BY wa-col1.
      group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).
      out->write( group ).
    ENDLOOP.
    out->begin\_section(
      \`Group Level Processing for Sorted Table\` ).
    SORT itab BY col1 ASCENDING.
    LOOP AT itab INTO wa.
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( wa ) ).
      AT END OF col1.
        out->write( group ).
      ENDAT.
    ENDLOOP.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE t\_itab( ( col1 = \`a\` col2 = \`0\` )
                         ( col1 = \`a\` col2 = \`1\` )
                         ( col1 = \`a\` col2 = \`2\` )
                         ( col1 = \`a\` col2 = \`3\` )
                         ( col1 = \`b\` col2 = \`4\` )
                         ( col1 = \`b\` col2 = \`5\` )
                         ( col1 = \`b\` col2 = \`6\` )
                         ( col1 = \`b\` col2 = \`7\` )
                         ( col1 = \`a\` col2 = \`8\` )
                         ( col1 = \`a\` col2 = \`9\` ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Group level processing using an unsorted internal table with the group key col1. Group breaks result from each change in the content of this column. A grouping using [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) for comparison produces a different result, since it is independent of the sorting of the internal table. Group level processing for the table sorted by col1 has the same result as the grouping.