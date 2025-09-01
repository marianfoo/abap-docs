  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

Client-Dependence of Database Tables

If the first column of a database table is a key field with the [built-in type](javascript:call_link\('abenddic_builtin_types.htm'\)) CLNT, the table is client-specific. In this case, the column contains the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") evaluated in client copies and in [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry").

Notes

-   Generally, tables in the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A are client-specific, whereas system tables in the delivery classes E, S, and W are cross-client.

-   The system table T000, which contains the [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of an [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"), is an exception. The first column has the type CLNT, but the table is cross-client. If the table is accessed using ABAP SQL, the additions [USING](javascript:call_link\('abapselect_client.htm'\)) and the obsolete [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified.