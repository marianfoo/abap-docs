---
title: "Hints"
description: |
  -   To create a connection object for the standard connection(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm 'Glossary Entry'), an instance of CL_SQL_CONNECTION can be created directly using CREATE OBJECT or the instance operator NEW instead
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_connection.htm"
abapFile: "abencl_sql_connection.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "abencl", "sql", "connection"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20CL_SQL_CONNECTION%2C%20ABENCL_SQL_CONNECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - CL\_SQL\_CONNECTION

The SQL statements that are represented by objects of the [CL\_SQL\_STATEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_statement.htm) and [CL\_SQL\_PREPARED\_STATEMENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_prepared_statement.htm) classes work by default with the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The following class can be used to enable additional [database connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_connection_glosry.htm "Glossary Entry") or to make settings for database connections, including the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"):

CL\_SQL\_CONNECTION

The method GET\_ABAP\_CONNECTION of CL\_SQL\_CONNECTION attempts to activate an [ABAP connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_connection_glosry.htm "Glossary Entry") or to continue using it. The following parameters can be passed:

-   The value DEFAULT for the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current work process.
-   The name of a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") from the column CON\_NAME of the database table DBCON.
-   The name of a [service connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_connection_glosry.htm "Glossary Entry") prefixed with R/3\*.

All of these names are case-sensitive. If the connection can be opened or used, an instance of CL\_SQL\_CONNECTION is created as a connection object and the corresponding reference is returned.

A further method GET\_CONNECTION can be used to open or reuse an exclusive connection:

-   If the value abap\_false (default) is passed to the parameter SHARABLE, the secondary connection or service connection is not an ABAP connection and can be used exclusively via the connection object.
-   If the value abap\_true is passed to the parameter SHARABLE, GET\_CONNECTION works like GET\_ABAP\_CONNECTION and the connection is a shared ABAP connection.

References to instances of CL\_SQL\_CONNECTION can be passed to the parameter CON\_REF of the instance constructor of CL\_SQL\_STATEMENT or CL\_SQL\_PREPARED\_STATEMENT. Instances created in this way execute their SQL statements on the database connection represented by the instance of CL\_SQL\_CONNECTION.

There are two ways to close the secondary connection or service connection represented by a connection object:

-   The instance method CLOSE\_NO\_DISCONNECT of CL\_SQL\_CONNECTION ends the current database LUW with a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm) and deactivates the connection. Its status is shown as INACTIVE in the output of program DBCONINFO.
-   The instance method CLOSE of CL\_SQL\_CONNECTION ends the current database LUW with a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_rollback.htm) and closes the connection. Its status is shown as DISCONNECTED in the output of program DBCONINFO.

For both methods, all database changes not yet committed using a [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_commit.htm) are discarded. The connection object can no longer be used and statements that are already linked with the connection become invalid. The methods are ignored in instances that represent the standard connection.

To handle [database LUWs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_transaction.htm) using ADBC, the class CL\_SQL\_CONNECTION contains the methods COMMIT and ROLLBACK, which raise a [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") respectively. Furthermore, CL\_SQL\_CONNECTION contains methods for [setting the transaction behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_set_transaction.htm) of the current database connection. When an [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") is accessed, these methods must be used instead of the corresponding SQL SET TRANSACTION statements.

Hints

-   To create a connection object for the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"), an instance of CL\_SQL\_CONNECTION can be created directly using CREATE OBJECT or the instance operator NEW instead of calling the method GET\_ABAP\_CONNECTION with the value DEFAULT.
-   Method CLOSE\_NO\_DISCONNECT should be used instead of CLOSE if the database connection is to be reused in the current process. To restore a connection that was closed completely with CLOSE requires a significant amount of resources. CLOSE should only be used in exceptional cases, e.g, in order to avoid unwanted side effects that might exist for a connection when reusing it.
-   For detailed information about database connections, see [database connections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_connections.htm).

Example

Specification of a service connection to the standard database for a prepared statement.

TRY.
    FINAL(con) = cl\_sql\_connection=>get\_abap\_connection( \`R/3\*my\_conn\`
).
    FINAL(sql) = NEW cl\_sql\_prepared\_statement(
      statement = \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\`
      con\_ref   = con ).
    ...
    sql->close( ).
    con->close\_no\_disconnect( ).
  CATCH cx\_sql\_exception INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Continue
[ADBC - Database LUWs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_transaction.htm)