  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Null%20Values%2C%20ABENABAP_SQL_NULL_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Null Values

A null value is a special value returned by a [database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_glosry.htm "Glossary Entry") in order to indicate an undefined value or result. Null values do not correspond to any content of [data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry") in ABAP. Especially, a null value is not the same as a type-dependent initial value.

In [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"), null values can be handled using one of the following:

-   The condition [IS NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_null.htm)
-   The special expression [sql\_null](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_null.htm)
-   A [null indicator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_indicator_glosry.htm "Glossary Entry")
-   The function [coalesce](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm)
-   The parameter on\_null in [date/time conversion functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_date_time_conversions.htm)

ABAP SQL statements for [write access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) generally do not create null values, except when processing [views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenview_glosry.htm "Glossary Entry") that do not cover all columns of a database table.

As values of database fields, null values might occur in the following situations:

-   Depending on the [database system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_system_glosry.htm "Glossary Entry"), empty [strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_glosry.htm "Glossary Entry") can also be represented by null values.
-   Null values can be produced in DDIC database tables if new columns are appended to filled tables.

In read accesses with the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm), null values can be produced by

-   [aggregate functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_function_glosry.htm "Glossary Entry"),
-   outer [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry"),
-   [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry"),
-   when [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") containing such constructs are accessed.

When they are passed to data objects, they are transformed to type-dependent [initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry"). However, in the additions [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm), in the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm) for accessing the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") or internal tables as [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm), null values are handled as such. A [null indicator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_indicator_glosry.htm "Glossary Entry") of a structured target area of a query can show which columns of the result set contain null values and which do not.

Hints

-   When [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") are inserted using [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm) or [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), null values are also transformed to type-dependent initial values or raise an exception after an attempt to set a key field to the null value.
-   It is, by principle, not possible to insert null values in key fields of DDIC database tables. If an attempt is made, this raises an exception on the database.
-   In the ABAP Dictionary, a [flag for initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_init.htm) can be set when inserting new columns in existing DDIC database tables to preserve the type-dependent initial value instead of the null value.
-   In [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry"), null values passed to ABAP objects are also transformed to their type-dependent initial values.

Example

In the following example, the condition IS NULL is true because the [CASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm) expression on the left side does not find a true WHEN condition and does not have an ELSE branch.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE '\_' AS id
       FROM demo\_expressions
       WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL
       INTO @FINAL(wa).