  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) →  [Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Table Buffering - Full Buffering, ABENBUFFER_COMPLETE_BUFFERING, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Table Buffering - Full Buffering

When a row is read, all rows in the table or view are loaded to the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data records are sorted by the key of the table or view. Optimized access requires that the left-aligned part of the primary key or of the fields of a secondary index be as large as possible. If not, the buffer is scanned linearly.

If full buffering is switched on in a client-dependent table or view, generic buffering using the client column as a generic key is performed internally.

Hints

-   In a fully buffered table or view, access to nonexistent data is very fast (see [Buffer Management](javascript:call_link\('abenbuffer_memory.htm'\))).
-   Full buffering should be used for small amounts of data, such as customizing tables. For larger amounts of data, full buffering is worthwhile only if large quantities of data are read frequently. Writes on fully buffered tables should be performed only rarely.

Example

The table T005 is fully buffered since it is small and accessed often by reads.