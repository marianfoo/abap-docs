  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

Open SQL - Null Values

A null value is an initial value of an empty column in the row of a [database table](javascript:call_link\('abendatabase_table_glosry.htm'\) "Glossary Entry"). Null values do not correspond to any content of [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") in ABAP.

In [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), null values can handled using the condition [IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) and the function [coalesce](javascript:call_link\('abensql_coalesce.htm'\)). [Modifying](javascript:call_link\('abenopen_sql_writing.htm'\)) Open SQL statements generally do not create null values, provided that a [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") is not being edited that does not comprise all columns of a database table. However, depending on the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"), empty [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") can also be displayed as null values. Null values can still arise in database tables if the new columns are appended to filled tables.

In reads using the Open SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), null values can be produced by [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry"), in outer [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") in [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry"), and when [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") containing appropriate constructs are accessed. When passed to data objects, these values are transformed to type-dependent [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"), but are handled as standalone values in the additions [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) and [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)). Null values are also transformed to initial values in [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").

Notes

-   In [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), null values passed to ABAP objects are also transformed to their type-dependent initial values.

-   In ABAP Dictionary, a [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)) can be set when inserting new columns in existing database tables to preserve the type-dependent initial value instead of the null value.

Example

In the following example, the condition IS NULL is true because the [CASE](javascript:call_link\('abensql_case.htm'\)) expression on the left side does not find a true WHEN condition and does not have an ELSE branch.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE '\_' AS id
       FROM demo\_expressions
       WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL
       INTO @DATA(wa).