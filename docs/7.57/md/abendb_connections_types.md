  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Possible Database Connections, ABENDB_CONNECTIONS_TYPES, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Possible Database Connections

When ABAP SQL, Native SQL, or AMDP is used in an ABAP program, the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") uses a [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access a database. Every work process always has a standard connection to the standard database. In addition, secondary connections to other databases or database schemas can be defined. Service connections can also still be opened to the standard database.

-   [Standard Connection](#@@ITOC@@ABENDB_CONNECTIONS_TYPES_1)
-   [Secondary Connections](#@@ITOC@@ABENDB_CONNECTIONS_TYPES_2)
-   [Service Connections to the Standard Database](#@@ITOC@@ABENDB_CONNECTIONS_TYPES_3)

Standard Connection   

Each AS ABAP work process always has a standard connection to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") and this connection cannot be closed. It is shared by all [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). If the standard connection is used, the work process acts as a [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") to which the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") is assigned.

-   By default, [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") all use the standard connection to access the ABAP database schema of the standard AS ABAP database.
-   In all places where a database connection can be specified explicitly in ABAP, the standard connection can also be specified using the predefined name DEFAULT.

Example

Specifies the standard connection explicitly in ABAP SQL. It would not be necessary to specify the connection in the statements DELETE and INSERT. The statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)), however, makes an explicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") possible on the standard connection.

DELETE FROM demo\_update CONNECTION default.
INSERT demo\_update CONNECTION default
  FROM @( VALUE #( id = 'X'  col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ).
COMMIT CONNECTION default.

Secondary Connections   

A secondary connection is a database connection to a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") defined by an entry in the database table DBCON. The table key CON\_NAME of the table DBCON is the name of the secondary connection in uppercase letters under which it can be specified explicitly in ABAP. The remaining columns describe the properties of the secondary connection, such as the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"), the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and the physical address.

Entries in the database table DBCON are created and modified using the central [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") tool. If the DBA Cockpit tool is not available in a system for some reason, transaction DBCO can be used instead, but this requires some expertise. DBCON should not be accessed in any other way. More specifically, the table DBCON cannot be displayed using the [Data Browser](javascript:call_link\('abendata_browser_glosry.htm'\) "Glossary Entry") tool.

The [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") of the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") used to log on the database connection to the database system is part of the definition of a secondary connection in the table DBCON. An ABAP SQL statement that uses a secondary connection accesses only that [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") that is assigned to this user.

A secondary connection must be specified explicitly before it can be used in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") or [Native SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). If possible, the secondary connection is opened for the current work process or an existing inactive secondary connection with the same name is reused. Secondary connections cannot be used in [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

Secondary connections between an AS ABAP that has a SAP HANA database as its standard database and other non-SAP HANA secondary databases are now obsolete. SAP HANA Smart Data Access (SDA) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names via the standard connection. This is only possible using AMDP and Native SQL, since no qualified names can be specified in ABAP SQL.

Hints

-   Secondary connections can address any number of [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") or databases other than the standard database as [secondary databases](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). An AS ABAP can, for example, access the SAP HANA database of an independently operated SAP HANA appliance.
-   The prerequisite for a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is that it must be a database system supported by SAP. Only this system has software for ABAP SQL and Native SQL access as a shared library.
-   If the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") is a database system other than the standard database of the current AS ABAP, the Database Shared Library (DBSL) provided for this database by SAP and client software provided by the database vendor must be installed here before an access using a secondary connection from the table DBCON. Information about creating the DBCON entry and installing the additional software is described in the standard SAP Notes for every supported database system.
-   Once all reads on secondary database, except SAP HANA databases, have been replaced by SDA, Shared Libraries (DBSL) are no longer required.

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