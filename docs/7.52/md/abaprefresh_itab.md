  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

REFRESH

[Quick Reference](javascript:call_link\('abaprefresh_shortref.htm'\))

Obsolete Syntax

REFRESH itab.

Effect

This statement deletes all rows in an internal table itab. This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\))). itab expects an internal table.

The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) can be used to delete all rows and free all memory used by these rows.

Notes

-   The statement REFRESH itab has the same effect on internal tables as [CLEAR itab\[\]](javascript:call_link\('abapclear.htm'\)). If the internal table itab has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is initialized and not the header line.
    
-   If the internal table itab does not have a header line, REFRESH itab has the same effect as CLEAR itab. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of REFRESH instead of CLEAR obsolete too. [CLEAR](javascript:call_link\('abapclear.htm'\)) or [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) can always be used to delete rows in internal tables.