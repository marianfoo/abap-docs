---
title: "READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE, Short Forms"
description: |
  Obsolete Syntax READ TABLE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) itab table_key(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_key.htm) free_key(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_free
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_short_forms.htm"
abapFile: "abenitab_short_forms.htm"
keywords: ["insert", "delete", "loop", "do", "if", "try", "class", "data", "internal-table", "abenitab", "short", "forms"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE, Short Forms, ABENITAB_SHORT_FORM
S, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE, Short Forms

Obsolete Syntax

[READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) itab [table\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_key.htm)| [free\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_free.htm)|[index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_index.htm).
[LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) itab *\[*[cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm)*\]*.
[INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) [itab\_position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_position.htm) *\[*[result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_result.htm)*\]*.
[COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm) itab *\[*[result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect_itab_result.htm)*\]*.
[APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm) TO itab *\[*SORTED BY comp*\]* *\[* [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_result.htm)*\]*.
[MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm) [table\_key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_table_key.htm)*|* [index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_index.htm) *\[*TRANSPORTING comp1 comp2 ...*\]**\[* [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab_result.htm)*\]*.
[MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm) itab TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_components.htm) ... WHERE [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm)*|*(cond\_syntax).
[DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm) [TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab_line.htm) itab.

Effect

These short forms of processing statements for internal tables, which are forbidden in classes, can only be used for obsolete standard tables with [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"). INTO itab, itab INTO, itab TO, and FROM itab are added to them implicitly, with itab indicating the header line. Instead, an explicit work area wa must be specified in explicit additions INTO wa, wa INTO, wa TO, and FROM wa.