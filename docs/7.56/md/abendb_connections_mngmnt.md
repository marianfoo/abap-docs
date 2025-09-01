---
title: "Management of Database Connections"
description: |
  Database connections are managed by the ABAP runtime framework. This is done at the work process(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm 'Glossary Entry') level and the internal session(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/aben
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_connections_mngmnt.htm"
abapFile: "abendb_connections_mngmnt.htm"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "abendb", "connections", "mngmnt"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Database Connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_connections.htm) → 

Management of Database Connections

Database connections are managed by the ABAP runtime framework. This is done at the [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry") level and the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") level. Each time an AS ABAP is started, a [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is opened for every [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry") and this connection cannot be closed. In addition to the standard connection, 15 further [secondary connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or [service connections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_connection_glosry.htm "Glossary Entry") can be opened for each work process. A maximum of 16 database connections can be open for each work process. On certain databases, it may not be possible to reach this number. If more than 16 database connections are opened, the runtime error DBSQL\_NO\_MORE\_CONNECTION occurs.

-   [Opening and Closing Secondary Connections and Service Connections](#abendb-connections-mngmnt-1-------active-and-inactive-secondary-connections-and-service-connections---@ITOC@@ABENDB_CONNECTIONS_MNGMNT_2)
-   [Secondary Connections and Service Connections in the Internal Session](#abendb-connections-mngmnt-3-------displaying-secondary-connections-and-service-connections---@ITOC@@ABENDB_CONNECTIONS_MNGMNT_4)

Opening and Closing Secondary Connections and Service Connections

ABAP SQL and Native SQL can request secondary connections or service connections. AMDP can only request service connections. A secondary connection or a service connection is requested as follows:

-   Implicitly in ABAP SQL by specifying the name of the connection after the addition [CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_additions.htm)
-   Explicitly and implicitly in Native SQL using one of the following:
    -   The methods [GET\_ABAP\_CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_sql_connection.htm) and [GET\_CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_sql_connection.htm) of the ADBC class CL\_SQL\_CONNECTION
    -   The statement [CONNECT TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_connection.htm) after [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm)
-   The input parameter [CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_db_connections.htm) of [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry") (for service connections only)

If no inactive database connection can be activated after the specified name, it is opened for the current work process and activated for the current internal session.

A secondary connection or service connection is closed explicitly in Native SQL using the following:

-   The method [CLOSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_sql_connection.htm) of the ADBC class CL\_SQL\_CONNECTION
-   The statement [DISCONNECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec_connection.htm) after [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm)

If closed explicitly in Native SQL, all database changes in the current database LUW of the connection that were not yet [committed on the database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm) are discarded.

ABAP SQL does not have a statement that closes a database connection explicitly. Any secondary connection or service connection that is inactive for a specific period of time (approximately 15 minutes by default) is closed by the ABAP runtime framework implicitly.

Hint

Generally speaking, database connections should only be closed implicitly by the ABAP runtime framework. Database connections should only be closed explicitly if it can be guaranteed that they are not required for a long time in the current process, since it takes a significant amount of resources to restore a connection.

Example

Opening of three service connections with ABAP SQL, ADBC, and after EXEC SQL. The connection opened using ABAP SQL is closed again using Native SQL, which requires its name to be specified in uppercase letters.

TRY.
    SELECT \*
           FROM scarr
           INTO TABLE @DATA(itab)
           CONNECTION r/3\*demo1.
    DATA(con) = cl\_sql\_connection=>get\_abap\_connection( \`R/3\*Demo2\` ).
    EXEC SQL.
      CONNECT TO 'R/3\*Demo3'
    ENDEXEC.
    EXEC SQL.
      DISCONNECT 'R/3\*DEMO1'
    ENDEXEC.
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Active and Inactive Secondary Connections and Service Connections

An open secondary connection or service connection can be active or inactive. Once opened in ABAP SQL, Native SQL, or AMDP, a database connection is active and can be used by ABAP SQL, Native SQL, or AMDP. The secondary connection or service connection becomes inactive as soon as the current database LUW on this connection is ended. This can occur as follows:

-   Using the statements [COMMIT CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_rollback_connection.htm) or [ROLLBACK CONNECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_rollback_connection.htm) for this connection.
-   Using the Native SQL statements COMMIT WORK or ROLLBACK WORK after [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm) for this connection
-   Using the methods [COMMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_transaction.htm) and [ROLLBACK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_transaction.htm) of the ADBC class CL\_SQL\_CONNECTION for this connection
-   Using the statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) for all connections
-   In an implicit [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit.htm) or [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_rollback.htm) for all connections
-   When closing the internal session in which the connection was opened, where a COMMIT CONNECTION is executed for the connection implicitly.

An inactive open secondary connection or service connection is reused by the ABAP runtime framework if it is to be reopened for its work process. Once activated in an internal session, a secondary connection or service connection can be reused here regardless of whether it is active or inactive. When an inactive connection is reused, it is activated implicitly and a new database LUW is opened. In this case, it is not necessary to open it again explicitly in Native SQL either.

Hint

When a database connection is closed explicitly in Native SQL it is actually closed and not just set to inactive. The next request must then reopen the connection for the current work process.

Example

A service connection R/3\*DEMO is requested using ADBC and used for an SQL statement. The statement COMMIT CONNECTION ends the database LUW of the connection and sets it from active to inactive. The connection can be shared, and the connection name does not contain any lowercase letters, which means it is reused by being specified in the ABAP SQL statement INSERT. The connection is reactivated here and a new database LUW is started. A further COMMIT CONNECTION statement ends this LUW and deactivates the connection.

DATA(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ).
TRY.
    NEW cl\_sql\_statement(
      con\_ref =
        cl\_sql\_connection=>get\_abap\_connection( con\_name = conn )
          )->execute\_update( \`DELETE FROM demo\_update\` ).
    COMMIT CONNECTION (conn).
    INSERT demo\_update CONNECTION (conn)
      FROM @( VALUE #( id = 'X' col1 = 1
                                col2 = 2
                                col3 = 3
                                col4 = 4 ) ).
    COMMIT CONNECTION (conn).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Secondary Connections and Service Connections in the Internal Session

Active open secondary connections or service connections can only be used within the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") in which they are opened. An active open secondary connection or service connection can be shared by ABAP SQL, Native SQL, and AMDP within an internal session. In Native SQL or AMDP, the open connections cannot have any lowercase letters in the name and in ADBC, open connections must be intended for this purpose.

When the internal session is closed, any changes made using the connections are committed and the connections are set to inactive. When an ABAP program is called that returns to the called program (SUBMIT AND RETURN or CALL TRANSACTION), the states of any secondary connections or service connections opened here are preserved as active or inactive. They are not, however, passed to the called program. If a secondary connection or service connection with the same name is requested here, a further connection of the same type is opened.

Any secondary connection or service connection that becomes inactive within an internal session when its database LUW is ended can be reused in the same session without being requested explicitly, not just in ABAP SQL, but also in Native SQL or AMDP.

Example

An ABAP SQL statement requests a service connection R/3\*DEMO and then calls a further program. The called program requests a service connection with the same name. After this, two service connections with the same name are open and active for the current work process until the end of the internal session of the called program. When a return is made from the called program, its service connection is deactivated, just as the service connection of the calling program is deactivated when it is exited. No database commit was made before the call, which means that the [isolation level](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_isolation.htm) of the database determines whether the change made in the caller is visible in the called program.

Calling Program

DELETE FROM demo\_update CONNECTION r/3\*demo.
SUBMIT ... AND RETURN.

Called Program

SELECT \*
       FROM demo\_update
       INTO TABLE @DATA(itab)
       CONNECTION r/3\*demo.

Displaying Secondary Connections and Service Connections

The program DBCONINFO shows all database connection of all work processes in the current AS ABAP. The name R/3 in the column ConName identifies the standard connection. Other names indicate the secondary connections and service connections. The column ConState shows the states ACTIVE, INACTIVE, and DISCONNECTED. The column Hdl indicates whether a connection is a secondary connection or a service connection. Identically named secondary and service connections can occur for the following reasons:

-   Identically named connections are opened in called programs
-   Connections are opened using the method GET\_CONNECTION of the class CL\_SQL\_CONNECTION in ADBC, where the value abap\_false is used for the parameter SHARABLE
-   Connections are opened using CONNECT TO after EXEC SQL, where AS is used to specify an explicit name

Example

The program DBCONINFO can be used to search the examples shown in this section while they are being executed step by step in the ABAP Debugger.