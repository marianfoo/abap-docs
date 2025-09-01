  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_gdl.htm'\)) → 

Database Accesses

Background

In ABAP, data in database tables can be accessed in the following ways:

-   ABAP SQL
    
    Implemented by ABAP statements, [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) is a subset of the Structured Query Language (SQL) comprising the DML (Data Manipulation Language) part. The ABAP SQL statements use the ABAP SQL interface for platform-independent access to those database tables in the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary and having instances created in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry").
    
-   AMDP
    
    The [AMDP framework](javascript:call_link\('abenamdp.htm'\)) is used to manage and call ABAP Managed Database Procedures. These are database procedures or database procedures implemented as AMDP procedures in an AMDP method or an AMDP class and replicated to the database system from here.
    
-   Native SQL
    
    Database-specific SQL statements that include both DML and DDL (Data Definition Language) statements and which can be passed to the Native SQL interface of the database as follows:
    
    -   The methods of [ADBC](javascript:call_link\('abenadbc.htm'\)) make it possible to execute dynamic SQL statements on a database system and process the results. ADBC (ABAP Database Connectivity), a class-based API that enables object-oriented access to the Native SQL interface.
    -   Native SQL statements can be specified in ABAP programs between the statements [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)). Static Native SQL statements of this kind are not checked completely by the syntax check and are forwarded almost unchanged from the Native SQL interface to the database of an AS ABAP.

Alongside access to the ABAP database schema of the standard AS ABAP database, all access types (except for AMDP) also allow access to other databases and other database schemas using additional [database connections](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry").

Rule

Using ABAP SQL

Use ABAP SQL for general database accesses where possible. Only use AMDP and Native SQL for tasks where ABAP SQL is not suitable.

Details

Only ABAP SQL is guaranteed to be independent of the database platform used. For this reason, ABAP SQL does not contain the set of all possible SQL statements in a specific database, but only a subset of the DML scope of all database systems supported by AS ABAP. The database tables that can be processed using ABAP SQL can be used in ABAP directly as structured types for the declaration of suitable work areas. Only ABAP SQL supports [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") of table content in the [shared memory](javascript:call_link\('abenuse_shared_memory_guidl.htm'\) "Guideline").

AMDP and Native SQL should only be used if the task really cannot be solved using ABAP SQL. Services that work with AMDP and Native SQL are generally dependent on the database system used, so that they cannot be executed in all AS ABAP systems. For platform-independent services, implementations should be provided for all supported databases.

If the database is accessed using the Native SQL interface instead of the ABAP SQL interface, [AMDP](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") should be used.

-   AMDP, currently only available for a SAP HANA database as the standard AS ABAP database, is recommended for all tasks that swap out code from ABAP programs to this SAP HANA database for performance reasons.
-   ADBC is a modern object-oriented API that is better suited to modern ABAP programming than [EXEC SQL](javascript:call_link\('abapexec.htm'\)). Enhancements to the Native SQL interface, such as bulk access using internal tables, are now only provided using ADBC. ADBC also enables [dynamic access](javascript:call_link\('abendynamic_prog_technique_gdl.htm'\)); Native SQL on the other hand is just static. Newer SQL statements, such as WITH for common table expressions (CTEs), are not supported in full by EXEC SQL.

Hints

-   The rule dictating that ABAP SQL is to be used for as long as possible applies in particular to [AMDP](javascript:call_link\('abenamdp.htm'\)) too. It is not a good idea to swap out SQL statements to database procedures if these could be implemented using ABAP SQL or [ABAP CDS](javascript:call_link\('abencds_glosry.htm'\) "Glossary Entry") too. In this case, no performance gains can be expected since the ABAP SQL statements are updated to Native SQL by the database interface in exactly the same way as they would be written in the database procedure. Using AMDP is a good idea only if HANA-specific properties can be exploited by procedure calls or if repeated transports of large amounts of data between the database and the AS ABAP can be bypassed.
-   It is [not advisable](javascript:call_link\('abendatabase_access_recomm.htm'\)) to access ABAP-managed database objects if the access does not take place in ABAP programs.

Bad Example

See the executable example [AMDP, Comparison with ABAP SQL](javascript:call_link\('abenamdp_vs_abap_sql_abexa.htm'\)). Database access not programmed well using ABAP SQL can often be optimized by improved use of ABAP SQL, making it unnecessary to use AMDP in these cases.

Bad Example

See the executable example [Currency Conversion with SQLScript](javascript:call_link\('abensql_script_curr_conv_abexa.htm'\)). In this case, a specific built-in function of HANA SQL is used that was not generally available in ABAP SQL. Meanwhile, the function [currency\_conversion](javascript:call_link\('abensql_curr_unit_conv_func.htm'\)) is available in ABAP SQL and can replace the usage of AMDP.