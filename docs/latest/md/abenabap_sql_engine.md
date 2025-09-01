  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20ABAP%20SQL%20Engine%2C%20ABENABAP_SQL_ENGINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - ABAP SQL Engine

The [ABAP SQL Engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry") is a part of the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry") for processing [read accesses](javascript:call_link\('abenabap_sql_reading.htm'\)) to tabular data in the memory of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") with [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements. The following tabular data can be accessed:

-   Data from [database tables](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry") buffered in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry").
-   [Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") of [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") accessed with [SELECT ... FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

The ABAP SQL engine produces the same results as if the ABAP SQL statements where processed on the database, for example:

-   [Null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") of database tables stored in able buffer are handled as null values. They are not transformed to type-dependent initial values.
-   [Supported SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)) produces the same results as on the database, even for internal tables accessed with [SELECT ... FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

The ABAP SQL Engine supports a large subset of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") but there are some [restrictions](javascript:call_link\('abensql_engine_restr.htm'\)). If an ABAP SQL statement cannot be processed by the ABAP SQL engine, the following situations can occur:

-   When accessing buffered database tables in the table buffer, the buffer is bypassed and the ABAP SQL statement is converted to database-specific SQL, passed to the database and used for the actual database tables.
-   When accessing internal tables with [SELECT ... FROM @itab](javascript:call_link\('abapselect_itab.htm'\)):
    -   If only one internal table is accessed in the ABAP SQL statement, the data of the table can be passed to a temporary table in the database before the query is actually executed. Only the columns that are to be accessed are transported. Then the SQL statement is passed to the database and processed there. This option is not supported by all databases. If it is known statically that data is required on the database, a syntax check warning occurs that can be hidden by the pragma ##itab\_db\_select.
    -   If more than one internal table is accessed in the ABAP SQL statement, their content cannot be passed to the database. The statement cannot be executed and a syntax error or a catchable exception occurs.

If an ABAP SQL statement can be processed by the ABAP SQL engine, there are no further restrictions for internal tables accessed with [SELECT ... FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) and database tables with the buffering type [full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\)). They can be processed on the AS ABAP. For database tables with other [buffering types](javascript:call_link\('abenbuffer_type.htm'\)), there are further [restrictions](javascript:call_link\('abenbuffer_restrictions.htm'\)) that can cause bypassing the buffer and processing the statement on the database. In this case, only one internal table can be accessed within the SQL statement.

Hints

-   The above rule about accessing only one internal table in an ABAP SQL statement that is processed on the database currently means that even the same internal table cannot be accessed more than once within one statement. As a workaround, the access to an internal table can be placed in a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") that then can be accessed multiple times in following subqueries.
-   Generally, only one internal table can be accessed together with database tables within one ABAP SQL statement. All multiple accesses are obtained using joins or subqueries which are currently not supported by the ABAP SQL engine.

Executable Examples

-   [ABAP SQL Engine, Multiple Internal Tables](javascript:call_link\('abenabap_sql_engine_abexa.htm'\))
-   [ABAP SQL Engine, Restrictions](javascript:call_link\('abenabap_sql_engine_restr_abexa.htm'\))
-   [ABAP SQL Engine, Restriction to One Internal Table](javascript:call_link\('abenabap_sql_engine_itab_abexa.htm'\))

Continue
[ABAP SQL Engine, Restrictions](javascript:call_link\('abensql_engine_restr.htm'\))
[ABAP SQL Engine, Supported SQL Expressions](javascript:call_link\('abensql_engine_expr.htm'\))
[ABAP SQL Engine, Examples](javascript:call_link\('abenabap_sql_engine_abexas.htm'\))