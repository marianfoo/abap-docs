  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Null%20Values%2C%20ABENABAP_SQL_NULL_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Null Values

A null value is a special value returned by a [database](javascript:call_link\('abendatabase_glosry.htm'\) "Glossary Entry") in order to indicate an undefined value or result. Null values do not correspond to any content of [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") in ABAP. Especially, a null value is not the same as a type-dependent initial value.

In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), null values can be handled using one of the following:

-   The condition [IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))
-   The special expression [sql\_null](javascript:call_link\('abensql_null.htm'\))
-   A [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry")
-   The function [coalesce](javascript:call_link\('abensql_coalesce.htm'\))
-   The parameter on\_null in [date/time conversion functions](javascript:call_link\('abensql_date_time_conversions.htm'\))

ABAP SQL statements for [write access](javascript:call_link\('abenabap_sql_writing.htm'\)) generally do not create null values, except when processing [views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") that do not cover all columns of a database table.

As values of database fields, null values might occur in the following situations:

-   Depending on the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"), empty [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") can also be represented by null values.
-   Null values can be produced in DDIC database tables if new columns are appended to filled tables.

In read accesses with the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), null values can be produced by

-   [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry"),
-   outer [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"),
-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry"),
-   when [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") containing such constructs are accessed.

When they are passed to data objects, they are transformed to type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). However, in the additions [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) and [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), in the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)) for accessing the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") or internal tables as [data sources](javascript:call_link\('abapselect_itab.htm'\)), null values are handled as such. A [null indicator](javascript:call_link\('abennull_indicator_glosry.htm'\) "Glossary Entry") of a structured target area of a query can show which columns of the result set contain null values and which do not.

Hints

-   When [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") are inserted using [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), null values are also transformed to type-dependent initial values or raise an exception after an attempt to set a key field to the null value.
-   It is, by principle, not possible to insert null values in key fields of DDIC database tables. If an attempt is made, this raises an exception on the database.
-   In the ABAP Dictionary, a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)) can be set when inserting new columns in existing DDIC database tables to preserve the type-dependent initial value instead of the null value.
-   In [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), null values passed to ABAP objects are also transformed to their type-dependent initial values.

Example

In the following example, the condition IS NULL is true because the [CASE](javascript:call_link\('abensql_case.htm'\)) expression on the left side does not find a true WHEN condition and does not have an ELSE branch.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE '\_' AS id
       FROM demo\_expressions
       WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL
       INTO @FINAL(wa).