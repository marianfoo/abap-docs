  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

INSERT, UPDATE, MODIFY, DELETE dbtab, connection

Syntax

... CONNECTION con*|*(con\_syntax) ...

Effect

The ABAP SQL statement is executed on the specified [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). The database connection can be specified as follows:

-   con

Specified directly and statically as con.

-   (con\_syntax)

Specified as the content of a parenthesized data object con\_syntax of type c or string. The following can be specified for con\_syntax:

-   Literal or constant
    If the data object con\_syntax is specified as a character literal or as a constant, it can be evaluated statically and the database connection is identified as the used object.

-   Variable
    If the data object con\_syntax is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

The following can be specified for con or in con\_syntax (and transformed to uppercase letters internally):

-   default specified statically or DEFAULT specified dynamically for the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") of the current work process. The ABAP SQL statement uses the standard connection to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

-   The name of [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") specified statically or dynamically. The name must exist in the column CON\_NAME of the database table DBCON. The following applies to the secondary connection:

-   It is used in its current database LUW if already open actively in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   If it is not yet open actively in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is either opened for the current work process or (if already open) it is reused and set to an active state,

The ABAP SQL statement uses the secondary connection to access the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") of the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") of the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") that is defined for the secondary connection in the database table DBCON. All subsequent ABAP SQL statements in the same [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (for which the same secondary connection is specified) use the active connection.

-   The name of a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") specified statically or dynamically. The name of a service connection must consist of the prefix R/3\* followed by any 26 alphanumeric characters (in uppercase). The following applies to the service connection:

-   It is used in its current database LUW if already open actively in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   If it is not yet open actively in the current internal session, it is either opened for the current work process or (if already open) it is reused and set to an active state,

The ABAP SQL statement uses the standard connection to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). All subsequent ABAP SQL statements in the same [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (for which the same service connection is specified) use the active connection.

-   A name (in uppercase letters) granted for a secondary connection or service connection by the addition AS of the static Native SQL statement [CONNECT TO](javascript:call_link\('abapexec_connection.htm'\)). The same rules apply here as to directly specified secondary connections or service connections. It should be noted, however, that a connection with a name of this kind is a standalone database connection that can exist in parallel with a connection without a name defined using AS.

A database connection is not evaluated until runtime, regardless of whether it is specified statically or dynamically, and any unknown database connections produce the runtime error DBSQL\_UNKNOWN\_CONNECTION.

The database tables or views specified in the current ABAP SQL statement must be active in ABAP Dictionary in the current AS ABAP regardless of the specified database connection. In a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"), an identically named and usable object with a suitable structure must exist for each database table or view specified in the current ABAP SQL statement. If not, an exception is raised.

Hints

-   Detailed information about database connections can be found [here](javascript:call_link\('abenopensql_multiconnect.htm'\)).

-   Any ABAP SQL statement that uses the standard connection accesses the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") only.

-   Secondary database connections can be used to access all [views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") that can be accessed using ABAP SQL, including [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), [DDIC projection views](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry"), [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry"), and non-abstract [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). CDS views should be specified using the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), since the names of associated [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") are an [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)) way of accessing views.

-   The type of a database object specified in an ABAP SQL statement does not necessarily need to match the type of the database object with the same name in the [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). For example, a view with the same name in the secondary database can be accessed by specifying a database table (or a database table by specifying a view) if they have the same structure.

-   Unlike in ABAP SQL, any database connections specified in Native SQL and AMDP are case-sensitive. To access a database connection activated in ABAP SQL in Native SQL or AMDP, the connection must be specified in uppercase letters. Conversely, an ABAP SQL statement cannot use a database connection activated using Native SQL AMDP if its name contains lowercase letters.

-   The addition CONNECTION bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Example

Deletes all data in a DDIC database table using a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") to the standard database.

DELETE FROM demo\_expressions CONNECTION r/3\*my\_conn.