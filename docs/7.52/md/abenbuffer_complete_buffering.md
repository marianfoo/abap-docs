  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [Open SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) →  [Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_kind.htm'\)) → 

Table Buffering - Full Buffering

When a row is read, all rows in the table or view are loaded to the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data records are sorted by the key of the table or view. Optimized access requires that the left-justified part of the primary key or of the fields of a secondary index be as large as possible. If not, the buffer is scanned in a linear fashion.

If full buffering is switched on in a client-specific table or view, generic buffering using the client column as a generic key is performed internally.

Notes

-   In a fully buffered table or view, access to nonexistent data is very fast (see [Buffer Management](javascript:call_link\('abenbuffer_memory.htm'\))).

-   Full buffering should be used in small tables, such as customizing tables. In larger tables, full buffering is worthwhile only if large quantities of data are read frequently. Writes on fully buffered tables should be performed only rarely.

Example

The table T005 is fully buffered since it is small and accessed often by reads.