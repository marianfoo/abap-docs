  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

READ, LOOP, INSERT, COLLECT, APPEND, MODIFY, DELETE - Short Forms

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

These short forms of processing statements for internal tables, which are forbidden in classes, can only be used for obsolete standard tables with [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). INTO itab, itab INTO, itab TO, and FROM itab are added to them implicitly, with itab indicating the header line. Instead, an explicit work area wa must be specified in explicit additions INTO wa, wa INTO, wa TO, and FROM wa.