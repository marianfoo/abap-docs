---
title: "Database Connections"
description: |
  An AS ABAP(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm 'Glossary Entry') uses database connections to access databases. A database connection defines the address of the database system (database host), the database user(https://help.sap.com/doc/abapdocu
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections.htm"
abapFile: "abendb_connections.htm"
keywords: ["do", "if", "try", "data", "types", "abendb", "connections"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Connections%2C%20ABENDB_CONNECTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Connections

An [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") uses database connections to access databases. A database connection defines the address of the database system (database host), the [database user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_user_glosry.htm "Glossary Entry"), and hence the assigned [database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_schema_glosry.htm "Glossary Entry") that is accessed. The [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") and [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements of an ABAP program and the [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") Framework use a database connection of the current [work process](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm "Glossary Entry") to access a database. By default, the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is used to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"). By opening a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry"), it is also possible to access databases or database schemas other than the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"). This makes possible a number of options, for example, data can be passed to and committed in other databases or in other database schemas. The [secondary database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_glosry.htm "Glossary Entry") does not need to be part of an AS ABAP here, but it must be supported by SAP. Connections called [service connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_connection_glosry.htm "Glossary Entry") can also be used to access the standard database.

-   [Possible Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_types.htm)
-   [Management of Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_mngmnt.htm)
-   [Database Access Using Secondary Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_using.htm)
-   [Database Connections and Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_trans.htm)

Continue
[Possible Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_types.htm)
[Management of Database Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_mngmnt.htm)
[Database Access Using Secondary Connections and Service Connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_using.htm)
[Database Connections and Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections_trans.htm)