  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) →  [Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Table Buffering - Single Record Buffering, ABENBUFFER_SINGLE_BUFFERING, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Table Buffering - Single Record Buffering

Only those rows are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [WHERE](javascript:call_link\('abapwhere.htm'\)) clause is used to access a non-buffered row and this clause specifies equality conditions joined using AND, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified WHERE clause is used to avoid a new database access in the next read.

Hints

-   When using single record buffering, any ABAP SQL statements must respect the entire primary key to prevent them from [bypassing](javascript:call_link\('abenbuffer_restrictions.htm'\)) table buffering.
-   Single record buffering is recommended for large amounts of data from which single rows are often read. For comparatively small amounts of data from which many rows are read, [full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\)) is usually preferred since this reduces the number of direct database accesses required for loading.
-   The use of single record buffering depends on the WHERE clause only and not on the use of the addition [SINGLE](javascript:call_link\('abapselect_single.htm'\)).