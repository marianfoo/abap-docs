  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

Database Connections

An [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") uses database connections to access databases. A database connection defines the address of the database system (database host), the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and hence the associated [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") that is accessed. The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements of an ABAP program and the [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") Framework use a database connection of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access a database. By default, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is used to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). By opening a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry"), it is also possible to access databases or database schemas other than the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). This makes possible a number of options, for example, data can be passed to and committed in other databases or in other database schemas. The [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") does not need to be part of an AS ABAP here, but it does need to be supported by SAP. Connections called [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can also be used to access the standard database.

-   [Possible Database Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_1)

-   [Standard Connection](#@@ITOC@@ABENOPENSQL_MULTICONNECT_2)

-   [Secondary Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_3)

-   [Service Connections to the Standard Database](#@@ITOC@@ABENOPENSQL_MULTICONNECT_4)

-   [Management of Database Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_5)

-   [Opening and Closing Secondary Connections and Service Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_6)

-   [Active and Inactive Secondary Connections and Service Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_7)

-   [Secondary Connections and Service Connections in the Internal Session](#@@ITOC@@ABENOPENSQL_MULTICONNECT_8)

-   [Displaying Secondary Connections and Service Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_9)

-   [Database Access Using Secondary Connections and Service Connections](#@@ITOC@@ABENOPENSQL_MULTICONNECT_10)

-   [ABAP SQL](#@@ITOC@@ABENOPENSQL_MULTICONNECT_11)

-   [Native SQL - ADBC](#@@ITOC@@ABENOPENSQL_MULTICONNECT_12)

-   [Native SQL - EXEC SQL](#@@ITOC@@ABENOPENSQL_MULTICONNECT_13)

-   [AMDP](#@@ITOC@@ABENOPENSQL_MULTICONNECT_14)

-   [Interaction of ABAP SQL, Native SQL, and AMDP](#@@ITOC@@ABENOPENSQL_MULTICONNECT_15)

-   [Database Connections and Transactions](#@@ITOC@@ABENOPENSQL_MULTICONNECT_16)

Possible Database Connections

When ABAP SQL, Native SQL, or AMDP is used in an ABAP program, the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") uses a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access a database. Every work process always has a standard connection to the standard database. In addition, secondary connections to other databases or database schemas can be defined. Service connections can also still be opened to the standard database.

Standard Connection

Each AS ABAP work process always has a standard connection to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") and this connection cannot be closed. It is shared by all [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). If the standard connection is used, the work process acts as a [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") assigned to the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").

-   By default, [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") all use the standard connection to access the ABAP database schema of the standard AS ABAP database.

-   In all places where a database connection can be specified explicitly in ABAP, the standard connection can also be specified using the predefined name DEFAULT.

Example

Specifies the standard connection explicitly in ABAP SQL. It would not be necessary to specify the connection in the statements DELETE and INSERT. The statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)), however, makes an explicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") possible on the standard connection.

DELETE FROM demo\_update CONNECTION default.
INSERT demo\_update CONNECTION default
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION default.

Secondary Connections

A secondary connection is a database connection to a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") defined by an entry in the database table DBCON. The table key CON\_NAME of the table DBCON is the name (in uppercase letters) of the secondary connection under which it can be specified explicitly in ABAP. The remaining columns describe the properties of the secondary connection, such as the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"), the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and the physical address.

Entries in the database table DBCON are created and modified using the central [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") tool. If the DBA Cockpit tool is not available in a system for some reason, transaction DBCO can be used instead (but this requires some expertise). DBCON should not be accessed in any other way. More specifically, the table DBCON cannot be displayed using the [Data Browser](javascript:call_link\('abendata_browser_glosry.htm'\) "Glossary Entry") tool.

The [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") of the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") used to log on the database connection to the database system is part of the definition of a secondary connection in the table DBCON. An ABAP SQL statement that uses a secondary connection accesses only that [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") that is assigned to this user.

A secondary connection must be specified explicitly before it can be used in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") or [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). If possible, the secondary connection is opened for the current work process or an existing inactive secondary connection with the same name is reused. Secondary connections cannot be used in [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

Secondary connections between an AS ABAP that has a SAP HANA database as its standard database and other non-SAP HANA secondary databases are now obsolete. SAP HANA Smart Data Access (SDA) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names across the standard connection. This is only possible using AMDP and Native SQL, since no qualified names can be specified in ABAP SQL.

Hints

-   Secondary connections can address any number of [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") or databases other than the standard database as [secondary databases](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). An AS ABAP can, for example, access the SAP HANA database of an independently operated SAP HANA appliance.

-   One prerequisite for a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is that it must be a database system supported by SAP. Only this system has software for ABAP SQL and Native SQL access (as a shared library).

-   If the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is a database system other than the standard database of the current AS ABAP, the Database Shared Library (DBSL) provided for this database by SAP and client software provided by the database vendor must be installed here in front of the access through a secondary connection from the table DBCON. Information about creating the DBCON entry and installing the additional software is described in the standard SAP Notes for every supported database system.

-   Once all reads on secondary database (except SAP HANA databases) have been replaced by SDA, Shared Libraries (DBSL) are no longer required.

Example

Uses a secondary connection in ABAP SQL. The connection can be entered and a check is made to see whether it exists in the database table DBCON. If no secondary connection exists in ABAP SQL, the uncatchable exception DBSQL\_UNKNOWN\_CONNECTION is raised.

DATA conn TYPE dbcon-con\_name.
cl\_demo\_input=>request( CHANGING field = conn ).
SELECT SINGLE @abap\_true
       FROM dbcon
       WHERE con\_name = @conn
       INTO @DATA(dbtype).
IF sy-subrc <> 0.
  cl\_demo\_output=>display( 'Connection not in DBCON' ).
  RETURN.
ENDIF.
DELETE FROM demo\_update CONNECTION (conn).
INSERT demo\_update CONNECTION (conn)
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION (conn).

Service Connections to the Standard Database

A service connection is a database connection defined by specifying its name in an ABAP program. The name of a service connection is R/3\*name and consists of the prefix R/3\* (in uppercase letters) and a definable case-sensitive name that can have between 1 and 26 alphanumeric characters.

A service connection is always a database connection to the standard database and inherits all settings from the standard connection automatically.

When a service connection is requested in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), it is opened for the current work process (if possible) or an existing inactive service connection with the same name is reused.

Hints

-   The definable name is not associated with the entries in the database table DBCON and is used only to identify a service connection. Hence, specifying a database connection from the database table DBCON for name does not mean that this database connection is used.

-   Service connections to the SAP standard database are useful for performing operations in a [database LUW](javascript:call_link\('abendb_transaction.htm'\)), which does not depend on the LUW of the standard connection. It should be noted that the current [isolation level](javascript:call_link\('abendb_isolation.htm'\)) is responsible for determining whether a read from a database LUW can access data modified in a different database LUW, before this data is committed using a database commit.

-   Like secondary connections, service connections add to the number of open connections of the current work process. There can be a maximum of 16 open connections, including the standard connection itself.

Example

Uses a service connection called R/3\*service\_conn in ABAP SQL.

DELETE FROM demo\_update CONNECTION R/3\*service\_conn.
INSERT demo\_update CONNECTION R/3\*service\_conn
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION R/3\*service\_conn.

Management of Database Connections

Database connections are managed by the ABAP runtime environment. This is done at the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") level and the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") level. Each time an AS ABAP is started, a [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is opened for every [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") and this connection cannot be closed. Alongside the standard connection, 15 further [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be opened for each work process. A maximum of 16 database connections can be open for each work process. On certain databases, it may not be possible to reach this number. If more than 16 database connections are opened, the runtime error DBSQL\_NO\_MORE\_CONNECTION occurs.

Opening and Closing Secondary Connections and Service Connections

ABAP SQL and Native SQL can request secondary connections or service connections. AMDP can only request service connections. A secondary connection or a service connection is requested as follows:

-   Implicitly in ABAP SQL by specifying the name of the connection after the addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\))

-   Explicitly and implicitly in Native SQL using one of the following:

-   The methods [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) and [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the ADBC class CL\_SQL\_CONNECTION

-   The statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))

-   The input parameter [CONNECTION](javascript:call_link\('abenamdp_db_connections.htm'\)) of [AMDP procedure implementations](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry") (for service connections only)

If no inactive database connection can be activated after the specified name, it is opened for the current work process and activated for the current internal session.

A secondary connection or service connection is closed explicitly in Native SQL using the following:

-   The method [CLOSE](javascript:call_link\('abencl_sql_connection.htm'\)) of the ADBC class CL\_SQL\_CONNECTION

-   The statement [DISCONNECT](javascript:call_link\('abapexec_connection.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\))

If closed explicitly in Native SQL, all database changes in the current database LUW of the connection that were not yet [committed on the database](javascript:call_link\('abendb_commit.htm'\)) are discarded.

ABAP SQL does not have a statement that closes a database connection explicitly. Any secondary connection or service connection that is inactive for a specific period of time (approximately 15 minutes by default) is closed by the ABAP runtime environment implicitly.

Hint

Generally speaking, database connections should only be closed implicitly by the ABAP runtime environment. Database connections should only be closed explicitly if it can be guaranteed that they are not required for some time in the current process, since it takes a significant amount of resources to recover a connection.

Example

Opens three service connections with ABAP SQL, ADBC, and after EXEC SQL. The connection opened using ABAP SQL is closed again using Native SQL, which requires its name to be specified in uppercase letters.

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

-   Using the statements [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) or [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) for this connection.

-   Using the Native SQL statements COMMIT WORK or ROLLBACK WORK after [EXEC SQL](javascript:call_link\('abapexec.htm'\)) for this connection

-   Using the methods [COMMIT](javascript:call_link\('abenadbc_transaction.htm'\)) and [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) of the ADBC class CL\_SQL\_CONNECTION for this connection

-   Using the statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) for all connections

-   In an implicit [database commit](javascript:call_link\('abendb_commit.htm'\)) or [database rollback](javascript:call_link\('abendb_rollback.htm'\)) for all connections

-   When closing the internal session in which the connection was opened (here a COMMIT CONNECTION is executed for the connection implicitly)

An inactive open secondary connection or service connection is reused by the ABAP runtime environment if it needs to be reopened for its work process. Once activated in an internal session, a secondary connection or service connection can be reused here regardless of whether it is active or inactive. When an inactive connection is reused, it is activated implicitly and a new database LUW is opened. In this case, it is not necessary to open it again explicitly in Native SQL either.

Hint

When a database connection is closed explicitly in Native SQL it is actually closed and not just set to inactive. The next request must then reopen the connection for the current work process.

Example

Requests a service connection R/3\*DEMO using ADBC and uses it for an SQL statement. The statement COMMIT CONNECTION ends the database LUW of the connection and sets it from active to inactive. The connection can be shared and the connection name does not contain any lowercase letters, which means it is reused by being specified in the ABAP SQL statement INSERT. The connection is reactivated here and a new database LUW is started. A further COMMIT CONNECTION statement ends this LUW and deactivates the connection.

DATA(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ).
TRY.
    NEW cl\_sql\_statement(
      con\_ref =
        cl\_sql\_connection=>get\_abap\_connection( con\_name = conn )
          )->execute\_update( \`DELETE FROM demo\_update\` ).
    COMMIT CONNECTION (conn).
    INSERT demo\_update CONNECTION (conn)
      FROM @( VALUE #( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4
) ).
    COMMIT CONNECTION (conn).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Secondary Connections and Service Connections in the Internal Session

Active open secondary connections or service connections can only be used within the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in which they are opened. An active open secondary connection or service connection can be shared by ABAP SQL, Native SQL, and AMDP within an internal session. In Native SQL or AMDP, the open connections cannot have any lowercase letters in the name and in ADBC, dedicated open connections must be made available.

When the internal session is closed, any changes made using the connections are committed and the connections are set to inactive. When an ABAP program is called that contains a return to the called program (using SUBMIT AND RETURN or CALL TRANSACTION), the states of any secondary connections or service connections opened here are preserved as active or inactive. They are not, however, passed to the called program. If a secondary connection or service connection with the same name is requested here, a further connection of the same type is opened.

Any secondary connection or service connection that is made inactive within an internal session by its database LUW being ended can be reused in the same session without being requested explicitly, not just in ABAP SQL, but also in Native SQL or AMDP.

Example

An ABAP SQL statement requests a service connection R/3\*DEMO and then calls a further program. The called program requests a service connection with the same name. After this, two service connections with the same name are open and active for the current work process, up until the end of the internal session of the called program. When a return is made from the called is exited, its service connection is deactivated, just as the service connection of the calling program is deactivated when it is exited. No database commit was made before the call, which means that the [isolation level](javascript:call_link\('abendb_isolation.htm'\)) of the database determines whether the change made in the caller is visible in the called program.

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

The program DBCONINFO can be used to scan the examples shown in this section while they are being executed step by step in ABAP Debugger.

Database Access Using Secondary Connections and Service Connections

Secondary connections and service connections are opened and used in different ways in ABAP SQL, Native SQL, and AMDP. A secondary or service connection active for an internal session can be shared by ABAP SQL, Native SQL, or AMDP. Connections used by ABAP SQL, however, cannot have any lowercase letters in their names and ADBC can reserve connections for itself exclusively.

ABAP SQL

The following additions can be used to use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in ABAP SQL:

-   The addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)) for read statements

-   The identical addition [CONNECTION](javascript:call_link\('abapiumd_conn.htm'\)) for write statements

If cases where the addition CONNECTION is specified using the name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") from the database table DBCON or using the name of a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") in an ABAP SQL statement, the following applies:

-   If the specified connection is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or an open inactive connection is reused and given the state active (if a connection exists for the current work process). When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, or AMDP.

-   If the specified connection is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the ABAP SQL statement uses this connection and works in its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). The connection can be activated using ABAP SQL, Native SQL, or AMDP.

When a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used, an ABAP SQL statement only accesses the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") assigned to the [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") associated with the secondary connection. ABAP SQL can only access database tables and views that are defined in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") in the current AS ABAP, which means that every database table or view accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") must exist and be active as a database or view with the same name and matching DDIC structure in the current AS ABAP, regardless of the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") and database schema. For the database tables or views of the secondary database, ABAP SQL assumes that their [table category](javascript:call_link\('abenddic_database_tables_tab_type.htm'\)) and type information matches the local definition exactly. This prerequisite is essential, for example, for the correct interpretation of the database contents and, if necessary, their conversion with respect to the ABAP types of the target fields. If this prerequisite is not met, wrong data or runtime errors can be caused by reads or writes (depending on the database system in question). Because the ABAP runtime environment cannot ensure the consistency of the type descriptions in the local and remote databases, the consistency must be guaranteed by the relevant application program.

The name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") specified after CONNECTION is transformed into uppercase letters internally. This must be respected when Native SQL accesses the connection explicitly. Conversely, an ABAP SQL statement can reuse database connections active in Native SQL or AMDP only if their names do not contain any lowercase letters.

Hints

-   The type of a database object specified in an ABAP SQL statement using the addition CONNECTION does not necessarily need to match the type of the database object with the same name in the secondary database. For example, a view with the same name in the secondary database can be accessed by specifying a database table (or a database table by specifying a view) if they have the same structure.

-   If a database table specified using the addition CONNECTION in an ABAP SQL statement is a [global temporary table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry"), it is handled like a GTT, even if it is a regular transparent table in the secondary database. Conversely, there is no special handling in ABAP SQL if the database is a GTT on the secondary database only.

-   The prerequisite that an identically named database object with a suitable DDIC structure must exist in the current system for views accessed using a secondary connection is particularly important for [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry").

Example

Specifies a database connection in ABAP SQL.

DATA(conn) = CONV dbcon-con\_name( \`...\` ).
DELETE FROM demo\_update CONNECTION (conn).

Native SQL - ADBC

To use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), the static method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION can be used. The return value of the method is a reference to a connection object that can be passed to other ADBC objects. Using the input parameter CON\_NAME, the method can be passed the name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") from the database table DBCON or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry"). These names are case-sensitive. The activated connection can be used in ABAP SQL, Native SQL, and AMDP. A further method, [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)), works in a similar way to GET\_ABAP\_CONNECTION but has an additional input parameter, SHARABLE, which defines how any active secondary connections and service connections are reused. If abap\_true is passed to SHARABLE, GET\_CONNECTION works in exactly the same way as GET\_ABAP\_CONNECTION.

-   GET\_ABAP\_CONNECTION or GET\_CONNECTION with abap\_true passed to SHARABLE:

-   If the connection passed to CON\_NAME is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or an open inactive connection is reused and given the state active (if a connection exists for the current work process). When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it.

-   If the connection passed to CON\_NAME is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are used. The connection can be activated using ABAP SQL, Native SQL, or AMDP.

-   GET\_CONNECTION with abap\_false passed to SHARABLE (default):

A new connection is always activated for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") by opening a new connection or activated an inactive connection of the current work process. No existing active connection of the name passed to CON\_NAME is used. A connection activated like this can only be used exclusively using the returned connection object in ADBC.

Once executed, GET\_CONNECTION gets a reference to a connection object. The connection object represents the connection activated or reused using GET\_CONNECTION in ADBC and can be passed to the instance constructors of the classes CL\_SQL\_STATEMENT and CL\_SQL\_PREPARED\_STATEMENT. The SQL statements of these classes are then executed on this connection in its database LUW.

Hints

-   abap\_false can be used for the parameter SHARABLE of the method GET\_CONNECTION to specify the use of a database connection and its database LUW explicitly. Database connections that are activated differently are usually available to all accesses in ABAP SQL and Native SQL.

-   If abap\_false is passed to the parameter SHARABLE of the method GET\_CONNECTION, multiple database connections with the same name can be activated and used within a single internal session. These are indicated in the output of the program DBCONINFO by the different values in the column Hdl.

-   When opening exclusive connections for connection objects, the maximum number of connections for each work process must not be exceeded. Exclusive connection should be closed explicitly once they are no longer needed and if there are a large number of connection objects.

Example

Specifies a database connection in ADBC.

DATA(conn) = CONV dbcon-con\_name( \`...\` ).
TRY.
    NEW cl\_sql\_statement(
      con\_ref = cl\_sql\_connection=>get\_abap\_connection(
                  con\_name = conn )
                )->execute\_update( \`DELETE FROM demo\_update\` ).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Native SQL - EXEC SQL

The following special statements can be used to implement a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in Native SQL embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\))

-   [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\))

-   [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\))

The statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)) can be used to activate a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry"). Here, the addition AS can be used to open the same connection more than once under different names. The entries made here are case-sensitive.

-   If no name is specified using AS, the following applies:

-   If the connection specified after CONNECT TO is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or an open inactive connection is reused and given the state active (if a connection exists for the current work process). When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, and AMDP.

-   If the connection specified after CON\_NAME is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are reused. The connection can be activated using ABAP SQL, Native SQL, or AMDP.

-   If a name is specified using AS, the following applies:

-   If the connection specified after CONNECT TO is not yet active under this name in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or an open inactive connection is reused and given the state active (if a connection exists for the current work process). When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it. A connection with a name defined using AS is only used by Native SQL embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)). ABAP SQL and other kinds of Native SQL or AMDP do not use this type of connection.

-   If the connection specified after CON\_NAME is already active under this name in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are reused. The connection can only have been activated using CONNECT TO.

After the statement CONNECT TO, all subsequent Native SQL statements embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) in the current internal session use the connection activated or reused using CONNECT TO. The statement [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\)) can be used to redirect to the previously activated connection of the current internal session. Here, a name defined with AS must be specified using this connection. More specifically, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") can be activated by specifying DEFAULT. The statement SET CONNECTION is ignored by the database LUWs of the connections in question.

Hint

When a name is specified after AS in the statement CONNECT TO, multiple database connections with the same original name can be activated and used in the same internal session. These are indicated in the output of the program DBCONINFO by the different values in the column Hdl.

Example

Specifies a database connection after EXEC SQL.

DATA(conn) = CONV dbcon-con\_name( \`...\` ).
EXEC SQL.
  CONNECT TO :conn
ENDEXEC.
EXEC SQL.
  DELETE FROM demo\_update
ENDEXEC.

AMDP

To use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") to execute an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"), the names of [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be passed to the input parameter [CONNECTION](javascript:call_link\('abenamdp_db_connections.htm'\)) of the associated [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"). The names are case-sensitive here. [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") cannot be used.

-   If the passed connection is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or an open inactive connection is reused and given the state active (if a connection exists for the current work process). When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, and AMDP.

-   If the specified connection is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the procedure implementation is called using this connection and works in its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). The connection can be activated using ABAP SQL, Native SQL, or AMDP.

Hint

The service connections that can be used by AMDP are also connections that can be used by ABAP SQL, Native SQL, and AMDP, as long as the appropriate conditions are met.

Example

Specifies a database connection in AMDP.

DATA(conn) = CONV dbcon-con\_name( \`R/3\*...\` ).
TRY.
    NEW cl\_demo\_amdp\_connection(
          )->get\_scarr( EXPORTING
                          connection = conn
                          clnt       = sy-mandt
                        IMPORTING
                          carriers = DATA(result) ).
  CATCH cx\_amdp\_error INTO DATA(amdp\_error).
    ...
ENDTRY.

Interaction of ABAP SQL, Native SQL, and AMDP

A secondary connection or service connection active within an internal session is shared by ABAP SQL, Native SQL, and AMDP with the following exceptions:

-   A connection activated using ADBC that uses the value abap\_false for the parameter SHARABLE of the method GET\_CONNECTION of the class CL\_SQL\_CONNECTION can only be used exclusively using the associated connection object.

-   A connection activated after EXEC SQL with CONNECT TO using a name specified after AS can only be used between EXEC and ENDEXEC.

-   AMDP can only use service connections.

Shared connections are activated as follows:

-   By using the CONNECTION addition of ABAP SQL statements to activate the connection

-   By using either the method GET\_ABAP\_CONNECTION of the ADBC class CL\_SQL\_CONNECTION or the method GET\_CONNECTION to activate the connection. The value abap\_true is used for the parameter SHARABLE here.

-   By passing the name to the input parameter CONNECTION of an AMDP method to activate the connection.

-   By using the statement CONNECT TO after EXEC SQL to activate the connection, without specifying a name after AS.

When a shared connection is activated, it is reused whenever the same internal session is used subsequently in ABAP SQL, Native SQL, and AMDP, regardless of how it is activated.

Shared connections can be closed using Native SQL, as shown above. The connection can then no longer be used. When a closed connection is specified in ABAP SQL, it is opened again implicitly. If a closed connection is reused in Native SQL or AMDP an exception is raised.

Hint

When sharing database connections, it should be noted that the name of a database connection is always converted to uppercase letters in ABAP SQL. In Native SQL and AMDP, on the other hand, the name is case-sensitive. To access a database connection activated in ABAP SQL in Native SQL or AMDP, the connection must be specified in uppercase letters. Conversely, an ABAP SQL statement cannot use a database connection activated using Native SQL AMDP if its name contains lowercase letters. This mainly affects [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") and names defined using the addition AS of the statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)). [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry"), on the other hand, must be specified in uppercase letters in Native SQL too (in accordance with their spelling in the table DBCON).

Example

Uses a shared service connection in ADBC and ABAP SQL. The modifying statements are executed in a database LUW. If the name of the service connection were to contain lowercase letters or if the method GET\_CONNECTION with the value abap\_false were used for the parameter SHARABLE in ADBC, separate connections with two different database LUWs would be produced. Accessing the same database table would then usually cause a lock situation.

DATA(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ).
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

Database Connections and Transactions

Every active database connection creates a separate transaction context or is associated with its own [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). This means that database changes on one connection can be committed or rolled back independently of changes on other database connections. In this way, for example, log data can be saved and committed on a secondary connection without modifying the database LUW of the standard connection.

Database changes can be committed or rolled back as follows for database connections:

-   The statements [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) and [ROLLBACK CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) trigger targeted [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") on specific connections.

-   In ADBC, the instance methods [COMMIT](javascript:call_link\('abenadbc_transaction.htm'\)) and [ROLLBACK](javascript:call_link\('abenadbc_transaction.htm'\)) of the class CL\_SQL\_CONNECTION trigger [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") for the connection of the current connection object.

-   In static Native SQL, the statements COMMIT WORK and ROLLBACK WORK after EXEC SQL trigger [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") for the current connection.

-   When a database connection is made inactive implicitly at the end of an internal session, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered.

-   When a database connection is closed explicitly in Native SQL, a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") is triggered.

The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) work similarly, as do the implicit [database commits](javascript:call_link\('abendb_commit.htm'\)) and [database rollbacks](javascript:call_link\('abendb_rollback.htm'\)), which are applied to all active connections.

A secondary connection or service connection is always given the state inactive when its database changes are committed or rolled back. A connection made inactive in this way can, however, continue to be used in the same internal session without being opened explicitly, not just in ABAP SQL, but also in Native SQL or AMDP. The first time an inactive secondary connection or service connection previously active in the current internal session is reused, it is made active again and a new database LUW is opened.

Warning

Extreme care must be taken when using SQL SET TRANSACTION statements to set the transaction behavior of the current database connection. The transaction behavior set using these statements is preserved across the full current database LUW, which can cause unexpected or critical situations when the database connection is reused. The default behavior of the transactions must be restored before the end of the database LUW. When the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed, special methods must be called for [setting the transaction behavior](javascript:call_link\('abenhana_set_transaction.htm'\)) instead of using the SQL SET TRANSACTION statements directly. In this case, the default transaction behavior is restored automatically at the end of the database LUW. No automatic resets can currently be performed for other database platforms.

Hints

-   All ABAP SQL, Native SQL, and AMDP reads made on a shared active database connection in an internal session are applied in the same database LUW.

-   The static Native SQL statement [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\)) is ignored by the database LUWs of the connections in question.

-   Secondary connections and service connections in an internal session cannot be used in called programs, which means that a called program always activates its own connection and hence its own database LUW, even if the same connection name is used.

-   Secondary connections, and more specifically service connections, can be used to implement independent database LUWs on a secondary database or on the standard database. Care must be taken to avoid lock situations here.

-   Working with multiple database connections, namely independent database LUWs, can produce lock situations in which only one work process is involved: a program changes a database row on the first connection and tries to change the same row on a second connection. This results in the program waiting for the lock of the first database LUW, without this first LUW ever being able to continue. This situation can only be resolved by ending the work process. This is done automatically for dialog processes, but must be done manually for background jobs. It is therefore not advisable to change the same table within the a single program using multiple database connections.

Example

If the statement COMMIT CONNECTION default were not used, the following program section would produce a lock situation. This because the standard connection (ABAP SQL here) and a service connection (Native SQL here) would be used in independent database LUWs to access the same row of a database table.

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