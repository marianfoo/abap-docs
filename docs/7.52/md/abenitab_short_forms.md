  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE - Kurzformen

Obsolete Syntax

[READ TABLE](javascript:call_link\('abapread_table.htm'\)) itab [table\_key](javascript:call_link\('abapread_table_key.htm'\))| [free\_key](javascript:call_link\('abapread_table_free.htm'\))|[index](javascript:call_link\('abapread_table_index.htm'\)).
[LOOP AT](javascript:call_link\('abaploop_at_itab.htm'\)) itab *\[*[cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]*.
[INSERT](javascript:call_link\('abapinsert_itab.htm'\)) [itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\)) *\[*[result](javascript:call_link\('abapinsert_itab_result.htm'\))*\]*.
[COLLECT](javascript:call_link\('abapcollect.htm'\)) itab *\[*[result](javascript:call_link\('abapcollect_itab_result.htm'\))*\]*.
[APPEND](javascript:call_link\('abapappend.htm'\)) TO itab *\[*SORTED BY comp*\]* *\[* [result](javascript:call_link\('abapappend_result.htm'\))*\]*.
[MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) [table\_key](javascript:call_link\('abapmodify_itab_table_key.htm'\))*|* [index](javascript:call_link\('abapmodify_itab_index.htm'\)) *\[*TRANSPORTING comp1 comp2 ...*\]**\[* [result](javascript:call_link\('abapmodify_itab_result.htm'\))*\]*.
[MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) itab TRANSPORTING [comp1](javascript:call_link\('abenitab_components.htm'\)) [comp2](javascript:call_link\('abenitab_components.htm'\)) ... WHERE [log\_exp](javascript:call_link\('abenlogexp.htm'\))*|*(cond\_syntax).
[DELETE](javascript:call_link\('abapdelete_itab.htm'\)) [TABLE](javascript:call_link\('abapdelete_itab_line.htm'\)) itab.

Effect

Diese in Klassen verbotenen Kurzformen von Verarbeitungsanweisungen für interne Tabellen sind nur für obsolete Standardtabellen mit [Kopfzeile](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") möglich. Sie werden implizit um die Angabe INTO itab, itab INTO, itab TO und FROM itab ergänzt, wobei itab die Kopfzeile bezeichnet. Statt dessen ist ein expliziter Arbeitsbereich wa in expliziten Zusätzen INTO wa, wa INTO, wa TO und FROM wa anzugeben.