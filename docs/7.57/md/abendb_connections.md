  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Database Connections, ABENDB_CONNECTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Database Connections

An [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") uses database connections to access databases. A database connection defines the address of the database system (database host), the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and hence the assigned [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") that is accessed. The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements of an ABAP program and the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") Framework use a database connection of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access a database. By default, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is used to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). By opening a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry"), it is also possible to access databases or database schemas other than the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). This makes possible a number of options, for example, data can be passed to and committed in other databases or in other database schemas. The [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") does not need to be part of an AS ABAP here, but it must be supported by SAP. Connections called [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can also be used to access the standard database.

-   [Possible Database Connections](javascript:call_link\('abendb_connections_types.htm'\))
-   [Management of Database Connections](javascript:call_link\('abendb_connections_mngmnt.htm'\))
-   [Database Access Using Secondary Connections](javascript:call_link\('abendb_connections_using.htm'\))
-   [Database Connections and Transactions](javascript:call_link\('abendb_connections_trans.htm'\))

Continue
[Possible Database Connections](javascript:call_link\('abendb_connections_types.htm'\))
[Management of Database Connections](javascript:call_link\('abendb_connections_mngmnt.htm'\))
[Database Access Using Secondary Connections and Service Connections](javascript:call_link\('abendb_connections_using.htm'\))
[Database Connections and Transactions](javascript:call_link\('abendb_connections_trans.htm'\))