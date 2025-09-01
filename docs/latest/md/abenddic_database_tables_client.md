  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Client%20Dependency%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_CLIENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Client Dependency of Database Tables

If the first column of a DDIC database table is a key field with the [built-in type](javascript:call_link\('abenddic_builtin_types.htm'\)) CLNT, the table is client-dependent. In this case, the column contains the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") evaluated in [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c) and in [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

Hints

-   Generally, tables in the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A are client-dependent, whereas system tables in the delivery classes E, S, and W are client-independent.
-   The system table T000, which contains the [client IDs](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"), is an exception. The first column has the type CLNT, but the table is client-independent. If the table is accessed using ABAP SQL, the additions [USING](javascript:call_link\('abapselect_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified.