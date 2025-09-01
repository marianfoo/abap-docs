  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Database Connections](javascript:call_link\('abendb_connections.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Database%20Access%20Using%20Secondary%20Connections%20and%20Service%20Connections%2C%20ABENDB_CONNECTIONS_USING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

Database Access Using Secondary Connections and Service Connections

Secondary connections and service connections are opened and used in different ways in ABAP SQL, Native SQL, and AMDP. A secondary or service connection active for an internal session can be shared by ABAP SQL, Native SQL, or AMDP. Connections used by ABAP SQL, however, cannot have any lowercase letters in their names and ADBC can reserve connections for itself exclusively.

-   [ABAP SQL](#@@ITOC@@ABENDB_CONNECTIONS_USING_1)
-   [Native SQL - ADBC](#@@ITOC@@ABENDB_CONNECTIONS_USING_2)
-   [Native SQL - EXEC SQL](#@@ITOC@@ABENDB_CONNECTIONS_USING_3)
-   [AMDP](#@@ITOC@@ABENDB_CONNECTIONS_USING_4)
-   [Shared ABAP Connections](#@@ITOC@@ABENDB_CONNECTIONS_USING_5)

ABAP SQL   

The following additions can be used to use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in ABAP SQL:

-   The addition [CONNECTION](javascript:call_link\('abapselect_connection.htm'\)) for read statements
-   The identical addition [CONNECTION](javascript:call_link\('abapiumd_conn.htm'\)) for write statements

If the addition CONNECTION is specified using the name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") from the database table DBCON or using the name of a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") in an ABAP SQL statement, the following applies:

-   If the specified connection is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and given the state active or, if an open inactive connection exists for the current work process, it is reused and set to active. When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, or AMDP.
-   If the specified connection is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the ABAP SQL statement uses this connection and works in its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). The connection can be activated using ABAP SQL, Native SQL, or AMDP.

When a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used, an ABAP SQL statement only accesses the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") assigned to the [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") assigned to the secondary connection. ABAP SQL can only access database tables and views that are defined in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") in the current AS ABAP, which means that every database table or view accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") must exist and be active as a database or view with the same name and matching DDIC structure in the current AS ABAP, regardless of the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") and database schema. For the database tables or views of the secondary database, ABAP SQL assumes that their [table category](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\)) and type information matches the local definition exactly. This prerequisite is essential, for example, for the correct interpretation of the database content and, if necessary, their conversion with respect to the ABAP types of the target fields. If this prerequisite is not met, incorrect data or runtime errors can be caused by reads or writes depending on the database system. Because the ABAP runtime framework cannot ensure the consistency of the type descriptions in the local and remote databases, the consistency must be guaranteed by the relevant application program.

The name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") specified after CONNECTION is transformed into uppercase letters internally. This must be respected when Native SQL accesses the connection explicitly. Conversely, an ABAP SQL statement can reuse database connections active in Native SQL or AMDP only if their names do not contain any lowercase letters.

Hints

-   The type of a database object specified in an ABAP SQL statement using the addition CONNECTION does not necessarily need to match the type of the database object with the same name in the secondary database. For example, a view with the same name in the secondary database can be accessed by specifying a database table and vice versa if they have the same structure.
-   If a database table specified using the addition CONNECTION in an ABAP SQL statement is a [global temporary table (GTT)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry"), it is handled like a GTT, even if it is a regular transparent table in the secondary database. Conversely, there is no special handling in ABAP SQL if the database is a GTT on the secondary database only.
-   The prerequisite that an identically named database object with a suitable DDIC structure must exist in the current system for views accessed using a secondary connection is particularly important for [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry").

Example

Specification of a database connection in ABAP SQL.

FINAL(conn) = CONV dbcon-con\_name( \`...\` ).
DELETE FROM demo\_update CONNECTION (conn).

Native SQL - ADBC   

To use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), the static method [GET\_ABAP\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) of the class CL\_SQL\_CONNECTION can be used. The return value of the method is a reference to a connection object that can be passed to other ADBC objects. Using the input parameter CON\_NAME, the method can be passed the name of a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") from the database table DBCON or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry"). These names are case-sensitive. The activated connection is an [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") that can be used in ABAP SQL, Native SQL, and AMDP. A further method [GET\_CONNECTION](javascript:call_link\('abencl_sql_connection.htm'\)) works in a similar way to GET\_ABAP\_CONNECTION, but has an additional input parameter SHARABLE, which activates an exclusive connection if its default parameter abap\_false is used.

-   GET\_ABAP\_CONNECTION or GET\_CONNECTION with abap\_true passed to SHARABLE for shared [ABAP connections](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry"):
    -   If the connection passed to CON\_NAME is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and set to active or, if an open inactive connection exists for the current work process, it is reused and set to active. When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it.
    -   If the connection passed to CON\_NAME is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are used. The connection can be activated using ABAP SQL, Native SQL, or AMDP.
-   GET\_CONNECTION with abap\_false passed to SHARABLE (default) for exclusive connections:
    
    A new connection is always activated for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") by opening a new connection or activating an inactive connection of the current work process. No existing active connection of the name passed to CON\_NAME is used. A connection activated like this can only be used exclusively using the returned connection object in ADBC.
    

After successful execution, GET\_CONNECTION gets a reference to a connection object. The connection object represents the connection activated or reused using GET\_CONNECTION in ADBC and can be passed to the instance constructors of the classes CL\_SQL\_STATEMENT and CL\_SQL\_PREPARED\_STATEMENT. The SQL statements of these classes are then executed on this connection in its database LUW.

Hints

-   abap\_false can be used for the parameter SHARABLE of the method GET\_CONNECTION to control the use of a database connection and its database LUW explicitly. Database connections that are activated differently are usually available to all accesses in ABAP SQL and Native SQL.
-   If abap\_false is passed to the parameter SHARABLE of the method GET\_CONNECTION, multiple database connections with the same name can be activated and used within a single internal session. These are indicated in the output of the program DBCONINFO by the different values in the column Hdl.
-   When opening exclusive connections for connection objects, the maximum number of connections for each work process must not be exceeded. Exclusive connection should be closed explicitly once they are no longer needed and if there are a large number of connection objects.

Example

Specification of a database connection in ADBC.

FINAL(conn) = CONV dbcon-con\_name( \`...\` ).
TRY.
    NEW cl\_sql\_statement(
      con\_ref = cl\_sql\_connection=>get\_abap\_connection(
                  con\_name = conn )
                )->execute\_update( \`DELETE FROM demo\_update\` ).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Native SQL - EXEC SQL   

The following special statements can be used to use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in Native SQL embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\))

-   [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\))
-   [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\))

The statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)) can be used to activate a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry"). Here, the addition AS can be used to open the same connection more than once under different names. The entries made here are case-sensitive.

-   If no name is specified using AS, the following applies:
    -   If the connection specified after CONNECT TO is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and set to active or, if an open inactive connection exists for the current work process, it is reused and set to active. When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, and AMDP.
    -   If the connection specified after CON\_NAME is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are reused. The connection can be activated using ABAP SQL, Native SQL, or AMDP.
-   If a name is specified using AS, the following applies:
    -   If the connection specified after CONNECT TO is not yet active under this name in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and set to active or, if an open inactive connection exists for the current work process, it is reused and given the state active. When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it. A connection with a name defined using AS is only used by Native SQL embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)). ABAP SQL and other kinds of Native SQL or AMDP do not use this type of connection.
    -   If the connection specified after CON\_NAME is already active under this name in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), this connection and its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") are reused. The connection can only have been activated using CONNECT TO.

After the statement CONNECT TO, all subsequent Native SQL statements embedded between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) in the current internal session use the connection activated or reused using CONNECT TO. The statement [SET CONNECTION](javascript:call_link\('abapexec_connection.htm'\)) can be used to switch to the use of the previously activated connection of the current internal session. Here, a name defined with AS must be specified using this connection. More specifically, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") can be activated by specifying DEFAULT. The statement SET CONNECTION is ignored by the database LUWs of the connections involved.

Hint

When a name is specified after AS in the statement CONNECT TO, multiple database connections with the same original name can be activated and used in the same internal session. These are indicated in the output of the program DBCONINFO by the different values in the column Hdl.

Example

Specification of a database connection after EXEC SQL.

FINAL(conn) = CONV dbcon-con\_name( \`...\` ).
EXEC SQL.
  CONNECT TO :conn
ENDEXEC.
EXEC SQL.
  DELETE FROM demo\_update
ENDEXEC.

AMDP   

To use a database connection other than the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") to execute an [AMDP procedure implementation](javascript:call_link\('abenamdp_procedure_method_glosry.htm'\) "Glossary Entry"), the names of [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") can be passed to the input parameter [CONNECTION](javascript:call_link\('abenamdp_db_connections.htm'\)) of the associated [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry"). The names are case-sensitive here. [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") cannot be used.

-   If the passed connection is not yet active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened and set to active or, if an open inactive connection exists for the current work process, it is reused and set to active. When the connection is activated, a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is opened for it and this can be used by ABAP SQL, Native SQL, and AMDP.
-   If the specified connection is already active in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the procedure implementation is called using this connection and works in its [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). The connection can be activated using ABAP SQL, Native SQL, or AMDP.

Hint

The service connections that can be used by AMDP are also connections that can be used by ABAP SQL, Native SQL, and AMDP, as long as the appropriate conditions are met.

Example

Specification of a database connection in AMDP.

FINAL(conn) = CONV dbcon-con\_name( \`R/3\*...\` ).
TRY.
    NEW cl\_demo\_amdp\_connection(
          )->get\_scarr( EXPORTING
                          connection = conn
                          clnt       = sy-mandt
                        IMPORTING
                          carriers = FINAL(result) ).
  CATCH cx\_amdp\_error INTO FINAL(amdp\_error).
    ...
ENDTRY.

Shared ABAP Connections   

A secondary connection or service connection active within an internal session is an [ABAP connection](javascript:call_link\('abenabap_connection_glosry.htm'\) "Glossary Entry") that is shared by ABAP SQL, Native SQL, and AMDP with the following exceptions:

-   A connection activated using ADBC that uses the value abap\_false for the parameter SHARABLE of the method GET\_CONNECTION of the class CL\_SQL\_CONNECTION can only be used exclusively using the associated connection object.
-   A connection activated after EXEC SQL with CONNECT TO using a name specified after AS can only be used between EXEC and ENDEXEC.
-   AMDP can only use service connections.

Shared ABAP connections are activated as follows:

-   Using the CONNECTION addition of ABAP SQL statements to activate the connection
-   Using either the method GET\_ABAP\_CONNECTION of the ADBC class CL\_SQL\_CONNECTION or the method GET\_CONNECTION with the value abap\_true for the parameter SHARABLE to activate the connection.
-   Passing the name to the input parameter CONNECTION of an AMDP method to activate the connection.
-   Using the statement CONNECT TO after EXEC SQL to activate the connection, without specifying a name after AS.

After a shared ABAP connection is activated, it is reused by all following accesses from ABAP SQL, Native SQL, and AMDP within the same internal session, regardless of how it was activated.

Shared ABAP connections can be closed using Native SQL, as described [here](abendb_connections_mngmnt.htm#@@ITOC@@ABENDB_CONNECTIONS_MNGMNT_1). The connection can then no longer be used. When a closed connection is specified in ABAP SQL, it is opened again implicitly. If a closed connection is reused in Native SQL or AMDP an exception is raised.

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