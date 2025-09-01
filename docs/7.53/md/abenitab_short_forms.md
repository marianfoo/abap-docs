---
title: "READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE - Kurzformen"
description: |
  Obsolete Syntax READ TABLE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) itab table_key(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_key.htm) free_key(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_free
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_short_forms.htm"
abapFile: "abenitab_short_forms.htm"
keywords: ["insert", "delete", "loop", "do", "if", "try", "data", "internal-table", "abenitab", "short", "forms"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_obsolete.htm) → 

READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE - Kurzformen

Obsolete Syntax

[READ TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) itab [table\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_key.htm)| [free\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_free.htm)|[index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_index.htm).
[LOOP AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) itab *\[*[cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm)*\]*.
[INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab.htm) [itab\_position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_position.htm) *\[*[result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_result.htm)*\]*.
[COLLECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm) itab *\[*[result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect_itab_result.htm)*\]*.
[APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm) TO itab *\[*SORTED BY comp*\]* *\[* [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_result.htm)*\]*.
[MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) [table\_key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_table_key.htm)*|* [index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_index.htm) *\[*TRANSPORTING comp1 comp2 ...*\]**\[* [result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_result.htm)*\]*.
[MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab.htm) itab TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_components.htm) ... WHERE [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm)*|*(cond\_syntax).
[DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) [TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm) itab.

Effect

Diese in Klassen verbotenen Kurzformen von Verarbeitungsanweisungen für interne Tabellen sind nur für obsolete Standardtabellen mit [Kopfzeile](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") möglich. Sie werden implizit um die Angabe INTO itab, itab INTO, itab TO und FROM itab ergänzt, wobei itab die Kopfzeile bezeichnet. Statt dessen ist ein expliziter Arbeitsbereich wa in expliziten Zusätzen INTO wa, wa INTO, wa TO und FROM wa anzugeben.