  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

Client-Dependence of Database Tables

If the first column of a database table is a key field of the [predefined type](javascript:call_link\('abenddic_builtin_types.htm'\)) CLNT, the table is client-specific. In this case, the column contains the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") evaluated in client copies and in automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry").

Note

Generally, tables in the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A are client-specific, whereas system tables in the delivery classes E, S, and W are cross-client.