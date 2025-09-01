---
title: "LOOP AT itab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_shortref.htm) Syntax Forms Loop across table rows(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) 1. LOOP AT itab result(https://help.sap.com/doc/abapdocu_753_index_htm
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_variants.htm"
abapFile: "abaploop_at_itab_variants.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "internal-table", "abaploop", "itab", "variants"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_statements.htm) → 

LOOP AT itab

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_shortref.htm)

Syntax Forms

[Loop across table rows](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm)
1\. LOOP AT itab [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_result.htm) *\[*[cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm)*\]*.
    ...
  ENDLOOP.
[Loop across row groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by.htm)
2\. LOOP AT itab [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_result.htm) *\[* [cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm)*\]* GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by_key.htm)
                             *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                             *\[*WITHOUT MEMBERS*\]*
                             *\[*[group\_result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by_binding.htm)*\]*.
    ...
  ENDLOOP.

Effect

Executes a [table iteration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_iteration_glosry.htm "Glossary Entry") as a [loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_glosry.htm "Glossary Entry") across an internal table itab. itab is a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The statements LOOP and ENDLOOP define the statement block of the loop. The statement LOOP reads rows from the internal table itab sequentially that meet an optional condition [cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm).

-   [If the addition GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) is not specified, the statement block is executed for each read row and the row can be processed here. The way in which the read row is addressed in the statement block is specified in the output behavior [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_result.htm).
    
-   [The addition GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by.htm) is used to group the read rows by a group key [group\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by_key.htm) and the statement block is then executed for every group. The way in which the current group is addressed in the statement block is specified in the output behavior [group\_result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by_binding.htm).
    

To exit processing of the statement block, the statements described in the [leave loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_loops.htm) section can be used.

Note

Internal tables can also be specified as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_itab.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") in ABAP SQL.

Example

Simple LOOP over an internal table.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
DATA(str) = \`\`.
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  str = str && CONV string( <fs> ) && \` \`.
ENDLOOP.
cl\_demo\_output=>display( str ).

Continue
[LOOP AT itab - Basic Form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm)
[LOOP AT itab - GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by.htm)
[ENDLOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendloop.htm)