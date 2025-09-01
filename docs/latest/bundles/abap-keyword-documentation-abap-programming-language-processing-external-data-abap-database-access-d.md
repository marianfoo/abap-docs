# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / ABAP Database Access / Database Connections

Included pages: 5


### abendb_connections.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Connections%2C%20ABENDB_CONNECTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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


### abendb_connections_types.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Possible%20Database%20Connections%2C%20ABENDB_CONNECTIONS_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Possible Database Connections

When ABAP SQL, Native SQL, or AMDP is used in an ABAP program, the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") uses a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access a database. Every work process always has a standard connection to the standard database. In addition, secondary connections to other databases or database schemas can be defined. Service connections can also still be opened to the standard database.

-   [Standard Connection](#abendb-connections-types-1-------secondary-connections---@ITOC@@ABENDB_CONNECTIONS_TYPES_2)
-   [Service Connections to the Standard Database](#abendb-connections-types-3---standard-connection-----each-as-abap-work-process-always-has-a-standard-connection-to-the--standard-database--javascript-call-link---abenstandard-db-glosry-htm-----glossary-entry---and-this-connection-cannot-be-closed--it-is-shared-by-all--internal-sessions--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----if-the-standard-connection-is-used--the-work-process-acts-as-a--database-user--javascript-call-link---abendatabase-user-glosry-htm-----glossary-entry---to-which-the--abap-database-schema--javascript-call-link---abenabap-db-schema-glosry-htm-----glossary-entry---is-assigned-------by-default---abap-sql--javascript-call-link---abenabap-sql-glosry-htm-----glossary-entry-----native-sql--javascript-call-link---abenabap-sql-glosry-htm-----glossary-entry----and--amdp--javascript-call-link---abenamdp-glosry-htm-----glossary-entry---all-use-the-standard-connection-to-access-the-abap-database-schema-of-the-standard-as-abap-database------in-all-places-where-a-database-connection-can-be-specified-explicitly-in-abap--the-standard-connection-can-also-be-specified-using-the-predefined-name-default---example--specifies-the-standard-connection-explicitly-in-abap-sql--it-would-not-be-necessary-to-specify-the-connection-in-the-statements-delete-and-insert--the-statement--commit-connection--javascript-call-link---abapcommit-rollback-connection-htm------however--makes-an-explicit--database-commit--javascript-call-link---abendatabase-commit-glosry-htm-----glossary-entry---possible-on-the-standard-connection---delete-from-demo--update-connection-default--insert-demo--update-connection-default---from-( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION default.

Secondary Connections   

A secondary connection is a database connection to a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") defined by an entry in the database table DBCON. The table key CON\_NAME of the table DBCON is the name of the secondary connection in uppercase letters under which it can be specified explicitly in ABAP. The remaining columns describe the properties of the secondary connection, such as the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"), the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and the physical address.

Entries in the database table DBCON are created and modified using the central [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") tool. If the DBA Cockpit tool is not available in a system for some reason, transaction DBCO can be used instead, but this requires some expertise. DBCON should not be accessed in any other way. More specifically, the table DBCON cannot be displayed using the [Data Browser](javascript:call_link\('abendata_browser_glosry.htm'\) "Glossary Entry") tool.

The [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") of the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") used to log on the database connection to the database system is part of the definition of a secondary connection in the table DBCON. An ABAP SQL statement that uses a secondary connection accesses only that [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") that is assigned to this user.

A secondary connection must be specified explicitly before it can be used in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") or [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). If possible, the secondary connection is opened for the current work process or an existing inactive secondary connection with the same name is reused. Secondary connections cannot be used in [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

Secondary connections between an AS ABAP that has a SAP HANA database as its standard database and other non-SAP HANA secondary databases are now obsolete. [SAP HANA Smart Data Access (SDA)](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d) should be used instead (see [SAP Note 2626805](https://launchpad.support.sap.com/#/notes/2626805)). In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names via the standard connection. This is only possible using AMDP and Native SQL, since no qualified names can be specified in ABAP SQL.

Hints

-   Secondary connections can address any number of [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") or databases other than the standard database as [secondary databases](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). An AS ABAP can, for example, access the SAP HANA database of an independently operated SAP HANA appliance.
-   The prerequisite for a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is that it must be a database system supported by SAP. Only this system has software for ABAP SQL and Native SQL access as a shared library.
-   If the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is a database system other than the standard database of the current AS ABAP, the Database Shared Library (DBSL) provided for this database by SAP and client software provided by the database vendor must be installed here before an access using a secondary connection from the table DBCON. Information about creating the DBCON entry and installing the additional software is described in the standard SAP Notes for every supported database system.
-   Once all reads on secondary database, except SAP HANA databases, have been replaced by [SDA](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d), Shared Libraries (DBSL) are no longer required.

Example

Use of a secondary connection in ABAP SQL. The connection can be entered, and a check is made to see whether it exists in the database table DBCON. If no secondary connection exists in ABAP SQL, the uncatchable exception DBSQL\_UNKNOWN\_CONNECTION is raised.

DATA conn TYPE dbcon-con\_name.
cl\_demo\_input=>request( CHANGING field = conn ).
SELECT SINGLE @abap\_true
       FROM dbcon
       WHERE con\_name = @conn
       INTO @FINAL(dbtype).
IF sy-subrc <> 0.
  cl\_demo\_output=>display( 'Connection not in DBCON' ).
  RETURN.
ENDIF.
DELETE FROM demo\_update CONNECTION (conn).
INSERT demo\_update CONNECTION (conn)
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION (conn).

Service Connections to the Standard Database   

A service connection is a database connection defined by specifying its name in an ABAP program. The name of a service connection is R/3\*name and consists of the prefix R/3\* in uppercase letters and a definable case-sensitive name that can have between 1 and 26 alphanumeric characters.

A service connection is always a database connection to the standard database and inherits all settings from the standard connection automatically.

When a service connection is requested in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), it is opened for the current work process if possible or an existing inactive service connection with the same name is reused.

Hints

-   The freely definable name is not associated with the entries in the database table DBCON and is used only to identify a service connection. Hence, specifying a database connection from the database table DBCON for name does not mean that this database connection is used.
-   Service connections to the standard SAP database are useful for performing operations in a [database LUW](javascript:call_link\('abendb_transaction.htm'\)) that are independent of the LUW of the standard connection. It should be noted that the current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) is responsible for determining whether a read from a database LUW can access data modified in a different database LUW, before this data is committed using a database commit.
-   Like secondary connections, service connections add to the number of open connections of the current work process. There can be a maximum of 16 open connections, including the standard connection itself.

Example

Use of a service connection called R/3\*service\_conn in ABAP SQL.

DELETE FROM demo\_update CONNECTION R/3\*service\_conn.
INSERT demo\_update CONNECTION R/3\*service\_conn
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION R/3\*service\_conn.


### abendb_connections_mngmnt.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Management%20of%20Database%20Connections%2C%20ABENDB_CONNECTIONS_MNGMNT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Management of Database Connections

Database connections are managed by the ABAP runtime framework. This is done at the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") level and the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") level. Each time an AS ABAP is started, a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is opened for every [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") and this connection cannot be closed. In addition to the standard connection, 15 further [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be opened for each work process. A maximum of 16 database connections can be open for each work process. On certain databases, it may not be possible to reach this number. If more than 16 database connections are opened, the runtime error DBSQL\_NO\_MORE\_CONNECTION occurs.

-   [Opening and Closing Secondary Connections and Service Connections](#abendb-connections-mngmnt-1-------active-and-inactive-secondary-connections-and-service-connections---@ITOC@@ABENDB_CONNECTIONS_MNGMNT_2)
-   [Secondary Connections and Service Connections in the Internal Session](#abendb-connections-mngmnt-3-------displaying-secondary-connections-and-service-connections---@ITOC@@ABENDB_CONNECTIONS_MNGMNT_4)

Opening and Closing Secondary Connections and Service Connections   

ABAP SQL and Native SQL can request secondary connections or service connections. AMDP can only request service connections. A secondary connection or a service connection is requested as follows:

-   Implicitly in ABAP SQL by specifying the name of the connection after the addition [CONNECTION](javascript:call_link\('abapselect_connection.htm'\))
-   Explicitly and implicitly in Native SQL using one of the following:
    -   The methods [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) and [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the ADBC class CL\_SQL\_CONNECTION
    -   The statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))
-   The input parameter [CONNECTION](javascript:call_link\('abenamdp_db_connections.htm'\)) of [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") (for service connections only)

If no inactive database connection can be activated after the specified name, it is opened for the current work process and activated for the current internal session.

A secondary connection or service connection is closed explicitly in Native SQL using the following:

-   The method [CLOSE](javascript:call_link\('abencl_sql_connection.htm'\)) of the ADBC class CL\_SQL\_CONNECTION
-   The statement [DISCONNECT](javascript:call_link\('abapexec_connection.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))

If closed explicitly in Native SQL, all database changes in the current database LUW of the connection that were not yet [committed on the database](javascript:call_link\('abendb_commit.htm'\)) are discarded.

ABAP SQL does not have a statement that closes a database connection explicitly. Any secondary connection or service connection that is inactive for a specific period of time (approximately 15 minutes by default) is closed by the ABAP runtime framework implicitly.

Hints

-   Generally speaking, database connections should only be closed implicitly by the ABAP runtime framework. Since it takes a significant amount of resources to restore a connection, database connections should only be closed explicitly in the following cases:
    -   A database connection was used in such a way that unwanted side effects occur when reusing it.
    -   They are not required for a long time in the current process,
-   The method [CLOSE\_NO\_DISCONNECT](javascript:call_link\('abencl_sql_connection.htm'\)) of ADBC does not actually close a connection but makes it inactive (see below). The connection is not available via the respective connection object any more, but it can be activated again.
-   A closed connection has the status DISCONNECTED in the output of program DBCONINFO.

Example

Opening of three service connections with ABAP SQL, ADBC, and after EXEC SQL. The connection opened using ABAP SQL is closed again using Native SQL, which requires its name to be specified in uppercase letters.

TRY.
    SELECT \*
           FROM scarr
           INTO TABLE @FINAL(itab)
           CONNECTION r/3\*demo1.
    FINAL(con) = cl\_sql\_connection=>get\_abap\_connection( \`R/3\*Demo2\` ).
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

An open secondary connection or service connection can be active or inactive. Once opened in ABAP SQL, Native SQL, or AMDP, a database connection is active and can be used by ABAP SQL, Native SQL, or AMDP. The secondary connection or service connection becomes inactive as soon as the current database LUW of this connection is ended. This can occur as follows:

-   Using the statements [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) or [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) for this connection.
-   Using the Native SQL statements COMMIT WORK or ROLLBACK WORK after [EXEC SQL](javascript:call_link\('abapexec.htm'\)) for this connection
-   Using the methods [COMMIT](javascript:call_link\('abenadbc_transaction.htm'\)) and [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) of the ADBC class CL\_SQL\_CONNECTION for this connection.
-   Using the method [CLOSE\_NO\_DISCONNECT](javascript:call_link\('abencl_sql_connection.htm'\)) of the ADBC class CL\_SQL\_CONNECTION for this connection. This method ends the current database LUW with a database rollback and also closes the connection for the respective ADBC connection object.
-   Using the statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) for all connections
-   In an implicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)) for all connections
-   When closing the internal session in which the connection was opened, where a COMMIT CONNECTION is executed for the connection implicitly.

An inactive open secondary connection or service connection is reused by the ABAP runtime framework if it is to be reopened for its work process. Once activated in an internal session, a secondary connection or service connection can be reused here regardless of whether it is active or inactive. It is not necessary to open it again explicitly in Native SQL. When an inactive connection is reused, it is activated implicitly and a new database LUW is opened. For a shared [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry"), the usage can be ABAP SQL, Native SQL or ADBC, An exception to this rule are connections closed by method [CLOSE\_NO\_DISCONNECT](javascript:call_link\('abencl_sql_connection.htm'\)) of ADBC. They cannot be used via the connection object any longer.

Hints

-   When a database connection is closed explicitly in Native SQL it is actually closed and not just set to inactive. The next request must then reopen the connection for the current work process.
-   The method [CLOSE\_NO\_DISCONNECT](javascript:call_link\('abencl_sql_connection.htm'\)) of ADBC does not fully close a connection but makes it inactive. A shared [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") closed in such a way can be implicitly reopened as any inactive ABAP connection.
-   Active and inactive connections have the status ACTIVE and INACTIVE in the output of program DBCONINFO respectively.

Example

A service connection R/3\*DEMO is requested using ADBC and used for an SQL statement. The statement COMMIT CONNECTION ends the database LUW of the connection and sets it from active to inactive. Since the connection is a shared [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") and the connection name does not contain any lowercase letters, it is reused by being specified in the ABAP SQL statement INSERT. The connection is reactivated here and a new database LUW is started. A further COMMIT CONNECTION statement ends this LUW and deactivates the connection.

FINAL(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ).
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

Active open secondary connections or service connections can only be used within the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in which they are opened. An active open secondary connection or service connection is usually an [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") that can be shared by ABAP SQL, Native SQL, and AMDP within an internal session. Exceptions from this rule are connections opened in Native SQL or AMDP with lowercase letters in the name or exclusive connections opened in ADBC with method GET\_CONNECTION instead of GET\_ABAP\_CONNECTION of class CL\_SQL\_CONNECTION.

When the internal session is closed, any changes made using the connections are committed and the connections are set to inactive. When an ABAP program is called that returns to the called program (SUBMIT AND RETURN or CALL TRANSACTION), the states of any secondary connections or service connections opened here are preserved as active or inactive. They are not, however, passed to the called program. If a secondary connection or service connection with the same name is requested here, a further connection of the same type is opened.

Any shared [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") that becomes inactive within an internal session when its database LUW is ended can be reused in the same session without being requested explicitly, not just in ABAP SQL, but also in Native SQL or AMDP.

Example

An ABAP SQL statement requests a service connection R/3\*DEMO and then calls a further program. The called program requests a service connection with the same name. After this, two service connections with the same name are open and active for the current work process until the end of the internal session of the called program. When a return is made from the called program, its service connection is deactivated, just as the service connection of the calling program is deactivated when it is exited. No database commit was made before the call, which means that the [isolation level](javascript:call_link\('abendb_isolation.htm'\)) of the database determines whether the change made in the caller is visible in the called program.

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

The program DBCONINFO can be used to explore the examples shown in this section while they are being executed step by step in the ABAP Debugger.


### abendb_connections_using.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Access%20Using%20Secondary%20Connections%20and%20Service%20Connections%2C%20ABENDB_CONNECTIONS_USING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

Database Access Using Secondary Connections and Service Connections

Secondary connections and service connections are opened and used in different ways in ABAP SQL, Native SQL, and AMDP. A secondary or service connection active for an internal session can be shared by ABAP SQL, Native SQL, or AMDP. Connections used by ABAP SQL, however, cannot have any lowercase letters in their names and ADBC can reserve connections for itself exclusively.

-   [ABAP SQL](#abendb-connections-using-1-------native-sql---adbc---@ITOC@@ABENDB_CONNECTIONS_USING_2)
-   [Native SQL - EXEC SQL](#abendb-connections-using-3-------amdp---@ITOC@@ABENDB_CONNECTIONS_USING_4)
-   [Shared ABAP Connections](#abendb-connections-using-5---abap-sql-----the-following-additions-can-be-used-to-use-a-database-connection-other-than-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---in-abap-sql-------the-addition--connection--javascript-call-link---abapselect-connection-htm-----for-read-statements-----the-identical-addition--connection--javascript-call-link---abapiumd-conn-htm-----for-write-statements--if-the-addition-connection-is-specified-using-the-name-of-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---from-the-database-table-dbcon-or-using-the-name-of-a--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry---in-an-abap-sql-statement--the-following-applies-------if-the-specified-connection-is-not-yet-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----it-is-either-opened-and-given-the-state-active-or--if-an-open-inactive-connection-exists-for-the-current-work-process--it-is-reused-and-set-to-active--when-the-connection-is-activated--a--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---is-opened-for-it-and-this-can-be-used-by-abap-sql--native-sql--or-amdp------if-the-specified-connection-is-already-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----the-abap-sql-statement-uses-this-connection-and-works-in-its--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry----the-connection-can-be-activated-using-abap-sql--native-sql--or-amdp---when-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---is-used--an-abap-sql-statement-only-accesses-the--database-schema--javascript-call-link---abendatabase-schema-glosry-htm-----glossary-entry---assigned-to-the--database-user-name--javascript-call-link---abendatabase-user-name-glosry-htm-----glossary-entry---assigned-to-the-secondary-connection--abap-sql-can-only-access-database-tables-and-views-that-are-defined-in-the--abap-dictionary--javascript-call-link---abenabap-dictionary-glosry-htm-----glossary-entry---in-the-current-as-abap--which-means-that-every-database-table-or-view-accessed-using-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---must-exist-and-be-active-as-a-database-or-view-with-the-same-name-and-matching-ddic-structure-in-the-current-as-abap--regardless-of-the--secondary-database--javascript-call-link---abensecondary-db-glosry-htm-----glossary-entry---and-database-schema--for-the-database-tables-or-views-of-the-secondary-database--abap-sql-assumes-that-their--table-category--javascript-call-link---abenddic-database-tables-tab-cat-htm-----and-type-information-matches-the-local-definition-exactly--this-prerequisite-is-essential--for-example--for-the-correct-interpretation-of-the-database-content-and--if-necessary--their-conversion-with-respect-to-the-abap-types-of-the-target-fields--if-this-prerequisite-is-not-met--incorrect-data-or-runtime-errors-can-be-caused-by-reads-or-writes-depending-on-the-database-system--because-the-abap-runtime-framework-cannot-ensure-the-consistency-of-the-type-descriptions-in-the-local-and-remote-databases--the-consistency-must-be-guaranteed-by-the-relevant-application-program---the-name-of-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---or--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry---specified-after-connection-is-transformed-into-uppercase-letters-internally--this-must-be-respected-when-native-sql-accesses-the-connection-explicitly--conversely--an-abap-sql-statement-can-reuse-database-connections-active-in-native-sql-or-amdp-only-if-their-names-do-not-contain-any-lowercase-letters---hints------the-type-of-a-database-object-specified-in-an-abap-sql-statement-using-the-addition-connection-does-not-necessarily-need-to-match-the-type-of-the-database-object-with-the-same-name-in-the-secondary-database--for-example--a-view-with-the-same-name-in-the-secondary-database-can-be-accessed-by-specifying-a-database-table-and-vice-versa-if-they-have-the-same-structure------if-a-database-table-specified-using-the-addition-connection-in-an-abap-sql-statement-is-a--global-temporary-table--gtt---javascript-call-link---abenglobal-temporary-table-glosry-htm-----glossary-entry----it-is-handled-like-a-gtt--even-if-it-is-a-regular-transparent-table-in-the-secondary-database--conversely--there-is-no-special-handling-in-abap-sql-if-the-database-is-a-gtt-on-the-secondary-database-only------the-prerequisite-that-an-identically-named-database-object-with-a-suitable-ddic-structure-must-exist-in-the-current-system-for-views-accessed-using-a-secondary-connection-is-particularly-important-for--ddic-external-views--javascript-call-link---abenexternal-view-glosry-htm-----glossary-entry-----example--specification-of-a-database-connection-in-abap-sql---final-conn----conv-dbcon-con--name-------------delete-from-demo--update-connection--conn----native-sql---adbc-----to-use-a-database-connection-other-than-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---in--adbc--javascript-call-link---abenadbc-glosry-htm-----glossary-entry----the-static-method--get--abap--connection--javascript-call-link---abencl-sql-connection-htm-----of-the-class-cl--sql--connection-can-be-used--the-return-value-of-the-method-is-a-reference-to-a-connection-object-that-can-be-passed-to-other-adbc-objects--using-the-input-parameter-con--name--the-method-can-be-passed-the-name-of-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---from-the-database-table-dbcon-or-a--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry----these-names-are-case-sensitive--the-activated-connection-is-an--abap-connection--javascript-call-link---abenabap-connection-glosry-htm-----glossary-entry---that-can-be-used-in-abap-sql--native-sql--and-amdp--a-further-method--get--connection--javascript-call-link---abencl-sql-connection-htm-----works-in-a-similar-way-to-get--abap--connection--but-has-an-additional-input-parameter-sharable--which-activates-an-exclusive-connection-if-its-default-parameter-abap--false-is-used-------get--abap--connection-or-get--connection-with-abap--true-passed-to-sharable-for-shared--abap-connections--javascript-call-link---abenabap-connection-glosry-htm-----glossary-entry------------if-the-connection-passed-to-con--name-is-not-yet-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----it-is-either-opened-and-set-to-active-or--if-an-open-inactive-connection-exists-for-the-current-work-process--it-is-reused-and-set-to-active--when-the-connection-is-activated--a--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---is-opened-for-it----------if-the-connection-passed-to-con--name-is-already-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----this-connection-and-its--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---are-used--the-connection-can-be-activated-using-abap-sql--native-sql--or-amdp------get--connection-with-abap--false-passed-to-sharable--default--for-exclusive-connections-----------a-new-connection-is-always-activated-for-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry---by-opening-a-new-connection-or-activating-an-inactive-connection-of-the-current-work-process--no-existing-active-connection-of-the-name-passed-to-con--name-is-used--a-connection-activated-like-this-can-only-be-used-exclusively-using-the-returned-connection-object-in-adbc--------after-successful-execution--get--connection-gets-a-reference-to-a-connection-object--the-connection-object-represents-the-connection-activated-or-reused-using-get--connection-in-adbc-and-can-be-passed-to-the-instance-constructors-of-the-classes-cl--sql--statement-and-cl--sql--prepared--statement--the-sql-statements-of-these-classes-are-then-executed-on-this-connection-in-its-database-luw---hints------abap--false-can-be-used-for-the-parameter-sharable-of-the-method-get--connection-to-control-the-use-of-a-database-connection-and-its-database-luw-explicitly--database-connections-that-are-activated-differently-are-usually-available-to-all-accesses-in-abap-sql-and-native-sql------if-abap--false-is-passed-to-the-parameter-sharable-of-the-method-get--connection--multiple-database-connections-with-the-same-name-can-be-activated-and-used-within-a-single-internal-session--these-are-indicated-in-the-output-of-the-program-dbconinfo-by-the-different-values-in-the-column-hdl------when-opening-exclusive-connections-for-connection-objects--the-maximum-number-of-connections-for-each-work-process-must-not-be-exceeded--exclusive-connection-should-be-closed-explicitly-once-they-are-no-longer-needed-and-if-there-are-a-large-number-of-connection-objects---example--specification-of-a-database-connection-in-adbc---final-conn----conv-dbcon-con--name-------------try------new-cl--sql--statement--------con--ref---cl--sql--connection--get--abap--connection--------------------con--name---conn----------------------execute--update----delete-from-demo--update--------catch-cx--sql--exception----------endtry---native-sql---exec-sql-----the-following-special-statements-can-be-used-to-use-a-database-connection-other-than-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---in-native-sql-embedded-between--exec-sql--javascript-call-link---abapexec-htm-----and--endexec--javascript-call-link---abapendexec-htm-----------connect-to--javascript-call-link---abapexec-connection-htm----------set-connection--javascript-call-link---abapexec-connection-htm------the-statement--connect-to--javascript-call-link---abapexec-connection-htm-----can-be-used-to-activate-a--secondary-connection--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---or-a--service-connection--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry----here--the-addition-as-can-be-used-to-open-the-same-connection-more-than-once-under-different-names--the-entries-made-here-are-case-sensitive-------if-no-name-is-specified-using-as--the-following-applies----------if-the-connection-specified-after-connect-to-is-not-yet-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----it-is-either-opened-and-set-to-active-or--if-an-open-inactive-connection-exists-for-the-current-work-process--it-is-reused-and-set-to-active--when-the-connection-is-activated--a--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---is-opened-for-it-and-this-can-be-used-by-abap-sql--native-sql--and-amdp----------if-the-connection-specified-after-con--name-is-already-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----this-connection-and-its--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---are-reused--the-connection-can-be-activated-using-abap-sql--native-sql--or-amdp------if-a-name-is-specified-using-as--the-following-applies----------if-the-connection-specified-after-connect-to-is-not-yet-active-under-this-name-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----it-is-either-opened-and-set-to-active-or--if-an-open-inactive-connection-exists-for-the-current-work-process--it-is-reused-and-given-the-state-active--when-the-connection-is-activated--a--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---is-opened-for-it--a-connection-with-a-name-defined-using-as-is-only-used-by-native-sql-embedded-between--exec-sql--javascript-call-link---abapexec-htm-----and--endexec--javascript-call-link---abapendexec-htm------abap-sql-and-other-kinds-of-native-sql-or-amdp-do-not-use-this-type-of-connection----------if-the-connection-specified-after-con--name-is-already-active-under-this-name-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----this-connection-and-its--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---are-reused--the-connection-can-only-have-been-activated-using-connect-to---after-the-statement-connect-to--all-subsequent-native-sql-statements-embedded-between--exec-sql--javascript-call-link---abapexec-htm-----and--endexec--javascript-call-link---abapendexec-htm-----in-the-current-internal-session-use-the-connection-activated-or-reused-using-connect-to--the-statement--set-connection--javascript-call-link---abapexec-connection-htm-----can-be-used-to-switch-to-the-use-of-the-previously-activated-connection-of-the-current-internal-session--here--a-name-defined-with-as-must-be-specified-using-this-connection--more-specifically--the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---can-be-activated-by-specifying-default--the-statement-set-connection-is-ignored-by-the-database-luws-of-the-connections-involved---hint--when-a-name-is-specified-after-as-in-the-statement-connect-to--multiple-database-connections-with-the-same-original-name-can-be-activated-and-used-in-the-same-internal-session--these-are-indicated-in-the-output-of-the-program-dbconinfo-by-the-different-values-in-the-column-hdl---example--specification-of-a-database-connection-after-exec-sql---final-conn----conv-dbcon-con--name-------------exec-sql----connect-to--conn-endexec--exec-sql----delete-from-demo--update-endexec---amdp-----to-use-a-database-connection-other-than-the--standard-connection--javascript-call-link---abenstandard-db-connection-glosry-htm-----glossary-entry---to-execute-an--amdp-procedure-implementation--javascript-call-link---abenamdp-procedure-method-glosry-htm-----glossary-entry----the-names-of--service-connections--javascript-call-link---abenservice-connection-glosry-htm-----glossary-entry---can-be-passed-to-the-input-parameter--connection--javascript-call-link---abenamdp-db-connections-htm-----of-the-associated--amdp-method--javascript-call-link---abenamdp-method-glosry-htm-----glossary-entry----the-names-are-case-sensitive-here---secondary-connections--javascript-call-link---abensecondary-db-connection-glosry-htm-----glossary-entry---cannot-be-used-------if-the-passed-connection-is-not-yet-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----it-is-either-opened-and-set-to-active-or--if-an-open-inactive-connection-exists-for-the-current-work-process--it-is-reused-and-set-to-active--when-the-connection-is-activated--a--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry---is-opened-for-it-and-this-can-be-used-by-abap-sql--native-sql--and-amdp------if-the-specified-connection-is-already-active-in-the-current--internal-session--javascript-call-link---abeninternal-session-glosry-htm-----glossary-entry----the-procedure-implementation-is-called-using-this-connection-and-works-in-its--database-luw--javascript-call-link---abendatabase-luw-glosry-htm-----glossary-entry----the-connection-can-be-activated-using-abap-sql--native-sql--or-amdp---hint--the-service-connections-that-can-be-used-by-amdp-are-also-connections-that-can-be-used-by-abap-sql--native-sql--and-amdp--as-long-as-the-appropriate-conditions-are-met---example--specification-of-a-database-connection-in-amdp---final-conn----conv-dbcon-con--name----r-3-----------try------new-cl--demo--amdp--connection---------------get--scarr--exporting---------------------------connection---conn---------------------------clnt---------sy-mandt-------------------------importing---------------------------carriers---final-result-------catch-cx--amdp--error-into-final-amdp--error-----------endtry---shared-abap-connections-----a-secondary-connection-or-service-connection-active-within-an-internal-session-is-an--abap-connection--javascript-call-link---abenabap-connection-glosry-htm-----glossary-entry---that-is-shared-by-abap-sql--native-sql--and-amdp-with-the-following-exceptions-------a-connection-activated-using-adbc-that-uses-the-value-abap--false-for-the-parameter-sharable-of-the-method-get--connection-of-the-class-cl--sql--connection-can-only-be-used-exclusively-using-the-associated-connection-object------a-connection-activated-after-exec-sql-with-connect-to-using-a-name-specified-after-as-can-only-be-used-between-exec-and-endexec------amdp-can-only-use-service-connections---shared-abap-connections-are-activated-as-follows-------using-the-connection-addition-of-abap-sql-statements-to-activate-the-connection-----using-either-the-method-get--abap--connection-of-the-adbc-class-cl--sql--connection-or-the-method-get--connection-with-the-value-abap--true-for-the-parameter-sharable-to-activate-the-connection------passing-the-name-to-the-input-parameter-connection-of-an-amdp-method-to-activate-the-connection------using-the-statement-connect-to-after-exec-sql-to-activate-the-connection--without-specifying-a-name-after-as---after-a-shared-abap-connection-is-activated--it-is-reused-by-all-following-accesses-from-abap-sql--native-sql--and-amdp-within-the-same-internal-session--regardless-of-how-it-was-activated---shared-abap-connections-can-be-closed-using-native-sql--as-described--here--abendb-connections-mngmnt-htm-@ITOC@@ABENDB_CONNECTIONS_MNGMNT_1). The connection can then no longer be used. When a closed connection is specified in ABAP SQL, it is opened again implicitly. If a closed connection is reused in Native SQL or AMDP an exception is raised.

Hint

When sharing database connections, it should be noted that the name of a database connection is always converted to uppercase letters in ABAP SQL. In Native SQL and AMDP, on the other hand, the name is case-sensitive. To access a database connection activated in ABAP SQL in Native SQL or AMDP, the connection must be specified in uppercase letters. Conversely, an ABAP SQL statement cannot use a database connection activated using Native SQL AMDP if its name contains lowercase letters. This mainly affects [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") and names defined using the addition AS of the statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)). [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry"), on the other hand, must be specified in uppercase letters in Native SQL too in accordance with their spelling in the table DBCON.

Example

Use of a shared service connection in ADBC and ABAP SQL. The modifying statements are executed in a database LUW. If the name of the service connection were to contain lowercase letters or if the method GET\_CONNECTION with the value abap\_false were used for the parameter SHARABLE in ADBC, separate connections with two different database LUWs would be produced. Accessing the same database table would then usually cause a lock situation.

FINAL(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ).
TRY.
    NEW cl\_sql\_statement(
      con\_ref = cl\_sql\_connection=>get\_abap\_connection(
                  con\_name = conn )
                  )->execute\_update( \`DELETE FROM demo\_update\` ).
    INSERT demo\_update CONNECTION (conn)
      FROM @( VALUE #(
        id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.


### abendb_connections_trans.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Connections%20and%20Transactions%2C%20ABENDB_CONNECTIONS_TRANS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Database Connections and Transactions

Every active database connection creates a separate transaction context or is linked with its own [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). This means that database changes on one connection can be committed or rolled back independently of changes on other database connections. In this way, for example, log data can be stored in and committed on a secondary connection without modifying the database LUW of the standard connection.

Database changes can be committed or rolled back as follows specifically for database connections:

-   The statements [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) and [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) trigger targeted [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") on specific connections.
-   In ADBC, the instance methods [COMMIT](javascript:call_link\('abenadbc_transaction.htm'\)) and [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) as well as [CLOSE\_NO\_DISCONNECT](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION trigger [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") for the connection of the current connection object.
-   In static Native SQL, the statements COMMIT WORK and ROLLBACK WORK after EXEC SQL trigger [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") for the current connection.
-   When a database connection is made inactive implicitly at the end of an internal session, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered.
-   When a database connection is closed explicitly in Native SQL, a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is triggered.

In addition, there are the statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), as well as the implicit [database commits](javascript:call_link\('abendb_commit.htm'\)) and [database rollbacks](javascript:call_link\('abendb_rollback.htm'\)), that act on all active connections.

A secondary connection or service connection is always set to inactive when its database changes are committed or rolled back. A connection deactivated in this way can, however, still be used in the same internal session without being opened explicitly, not just in ABAP SQL, but also in Native SQL or AMDP. The first time an inactive secondary connection or service connection previously active in the current internal session is reused, it is made active again and a new database LUW is opened.

Warning

Extreme care must be taken when using SQL SET TRANSACTION statements to set the transaction behavior of the current database connection. The transaction behavior set using these statements is preserved across the entire current database LUW, which can cause unexpected or critical situations when the database connection is reused. The default behavior of the transactions must be restored before the end of the database LUW. When the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed, special methods must be called for [setting the transaction behavior](javascript:call_link\('abenhana_set_transaction.htm'\)) instead of using the SQL SET TRANSACTION statements directly. In this case, the default transaction behavior is restored automatically at the end of the database LUW. No automatic resets can currently be performed for other database platforms.

Hints

-   All ABAP SQL, Native SQL, and AMDP reads made on a active shared [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") of an internal session work in the same database LUW.
-   The static Native SQL statement [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\)) is ignored by the database LUWs of the connections involved.
-   Secondary connections and service connections in an internal session cannot be used in called programs, which means that a called program always activates its own connection and hence its own database LUW, even if the same connection name is used.
-   Secondary connections, more specifically service connections, can be used to implement independent database LUWs on a secondary database or on the standard database. Care must be taken to avoid lock situations here.
-   Working with multiple database connections, namely independent database LUWs, can produce lock situations in which only one work process is involved: a program changes a database row on the first connection and tries to change the same row on a second connection. This results in the program waiting for the lock of the first database LUW, without this first LUW ever being able to continue. This situation can only be resolved by ending the work process. This is done automatically for dialog processes, but it must be done manually for background jobs. It is therefore not advisable to change the same table within the a single program using multiple database connections.

Example

If the statement COMMIT CONNECTION default were not used, the following program section would produce a lock situation because the standard connection (ABAP SQL here) and a service connection (Native SQL here) would be used in independent database LUWs to access the same row of a database table.

INSERT demo\_update FROM @( VALUE #( id = 'X' ) ).
DELETE FROM demo\_update.
COMMIT CONNECTION default.
DATA conn TYPE dbcon-con\_name VALUE 'R/3\*DEMO'.
EXEC SQL.
  CONNECT TO :conn
ENDEXEC.
EXEC SQL.
  INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 )
ENDEXEC.
