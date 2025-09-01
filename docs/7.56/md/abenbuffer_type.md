  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) → 

Table Buffering - Buffering Types

The following buffering types can be [configured](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) for a DDIC database table or DDIC database view in the ABAP Dictionary:

-   [Table Buffering - Single Record Buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))
-   [Table Buffering - Generic Buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))
-   [Table Buffering - Full Buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))

Hint

If generic buffering or full buffering is activated, and the database table or view is specified statically in an ABAP SQL statement, the [secondary indexes](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") of the table are not ignored when the data is read from the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). If single record buffering is used, only the primary index is read. A secondary index defined in the ABAP Dictionary is evaluated regardless of whether the index was created on the database or not.

Continue
[Table Buffering - Single Record Buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))
[Table Buffering - Generic Buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))
[Table Buffering - Full Buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))