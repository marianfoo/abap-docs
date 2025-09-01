---
title: "ABAP SQL - Null Values"
description: |
  A null value is an initial value of an empty column in the row of a database table(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_table_glosry.htm 'Glossary Entry'). Null values do not correspond to any content of data objects(https://help.sap.com/doc/abapdocu_754_index_
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_null_values.htm"
abapFile: "abenopen_sql_null_values.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "data", "internal-table", "abenopen", "sql", "null", "values"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) → 

ABAP SQL - Null Values

A null value is an initial value of an empty column in the row of a [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_table_glosry.htm "Glossary Entry"). Null values do not correspond to any content of [data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry") in ABAP.

In [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), null values can be handled using the condition [IS NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_null.htm), a [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry"), and the function [coalesce](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm). [Write](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) ABAP SQL statements generally do not create null values, except when editing [views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenview_glosry.htm "Glossary Entry") that do not cover all columns of a database column.

Depending on the [database system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_system_glosry.htm "Glossary Entry"), empty [strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_glosry.htm "Glossary Entry") can also be displayed as null values. Null values can still arise in database tables if the new columns are appended to filled tables.

In reads using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), null values can be produced by [aggregate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), in outer [joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjoin_glosry.htm "Glossary Entry") in [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expression_glosry.htm "Glossary Entry"), and when [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") containing appropriate constructs are accessed. When transferred to data objects, they are transformed to type-dependent [initial values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_glosry.htm "Glossary Entry"). However, in the additions [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm), in [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry"), and when using internal tables as [data sources](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_itab.htm), null values are treated as such. A [null indicator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_indicator_glosry.htm "Glossary Entry") of a structured target area of a query can show which columns of the results set contain null values and which do not.

Notes

-   When [subqueries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") are inserted using [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) or [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm), any null values are also transformed to type-dependent initial values or raise an exception after an attempt to set a key field to the null value.

-   In [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry"), null values passed to ABAP objects are also transformed to their type-dependent initial values.

-   It is, by principle, not possible to insert null values in key fields of database tables. If attempted, this raises an exception on the database.

-   In ABAP Dictionary, a [flag for initial values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) can be set when inserting new columns in existing database tables to preserve the type-dependent initial value instead of the null value.

Example

In the following example, the condition IS NULL is true because the [CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm) expression on the left side does not find a true WHEN condition and does not have an ELSE branch.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE '\_' AS id
       FROM demo\_expressions
       WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL
       INTO @DATA(wa).