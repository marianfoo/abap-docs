  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [Open SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) →  [Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_kind.htm'\)) → 

Table Buffering - Single Record Buffering

Only those rows in the table are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [WHERE](javascript:call_link\('abapwhere.htm'\)) clause is used to access a non-buffered row and this clause specifies equality conditions joined using AND, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified WHERE clause is used to avoid a new database access in the next read.

Notes

-   When using single record buffering, any Open SQL statements must respect the full primary key to prevent them from [bypassing](javascript:call_link\('abenbuffer_restrictions.htm'\)) table buffering.

-   Single record buffering is recommended for large tables from which single rows are often read. In smaller tables from which many rows are read, [full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\)) is usually preferred since this reduces the number of direct database accesses that need to be loaded.

-   The use of single record buffering is specified by the WHERE clause only and not by using the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)).