  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC - CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) → 

ADBC - Database LUWs

For each open database connection that can be represented by an instance of class [CL\_SQL\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)), only one [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is active at any one time. When a connection is opened, the first database LUW of the connection is opened implicitly.

The class CL\_SQL\_CONNECTION contains the following instance methods:

-   COMMIT

-   ROLLBACK

These methods end the current database LUW of a connection using a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). The current connection is set to inactive here. If the connection is still associated with an ADBC SQL statement and this statement is being used, it is activated again implicitly and a new database LUW opened at the same time.

The database LUWs of different connections are independent of one another and must be ended individually. When the work process is switched, with the resulting [implicit database commit](javascript:call_link\('abendb_commit.htm'\)), this is executed on all open connections. The database commit on the default connection takes place last of all.

Notes

-   Detailed information about database connections can be found [here](javascript:call_link\('abenopensql_multiconnect.htm'\)).

-   To execute a database commit or a database rollback on the default connection using ADBC, an instance of class CL\_SQL\_CONNECTION must be created for this connection using CREATE OBJECT.

-   Transaction control is possible only using the methods COMMIT and ROLLBACK of the class CL\_SQL\_CONNECTION, since only in this case are all actions required at the end of the transaction executed in the database interface. The native statements COMMIT or ROLLBACK should not be executed using CL\_SQL\_STATEMENT or CL\_SQL\_PREPARED\_STATEMENT, to avoid critical side effects.