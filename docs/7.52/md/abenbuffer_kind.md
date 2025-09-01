  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [Open SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) → 

Table Buffering - Buffering Types

There are three buffering types that can be [configured](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) for a database table or database view in ABAP Dictionary:

-   [Single record buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))

-   [Generic buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))

-   [Full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))

Note

If generic buffering or full buffering is activated, and the database table or view is specified statically in an Open SQL statement, the [secondary indexes](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") of the table are not ignored when the data is read from the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). If single record buffering is used, only the primary index is read.

Continue
[Table Buffering - Single Record Buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))
[Table Buffering - Generic Buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))
[Table Buffering - Full Buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))