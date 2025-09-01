---
title: "Open SQL - Null Values"
description: |
  A null value is an initial value of an empty column in the row of a database table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm 'Glossary Entry'). Null values do not correspond to any content of data objects(https://help.sap.com/doc/abapdocu_752_index_
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_null_values.htm"
abapFile: "abenopen_sql_null_values.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "data", "abenopen", "sql", "null", "values"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) → 

Open SQL - Null Values

A null value is an initial value of an empty column in the row of a [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry"). Null values do not correspond to any content of [data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") in ABAP.

In [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), null values can handled using the condition [IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_null.htm) and the function [coalesce](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_coalesce.htm). [Modifying](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) Open SQL statements generally do not create null values, provided that a [view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenview_glosry.htm "Glossary Entry") is not being edited that does not comprise all columns of a database table. However, depending on the [database system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_system_glosry.htm "Glossary Entry"), empty [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_glosry.htm "Glossary Entry") can also be displayed as null values. Null values can still arise in database tables if the new columns are appended to filled tables.

In reads using the Open SQL statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), null values can be produced by [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), in outer [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjoin_glosry.htm "Glossary Entry") in [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expression_glosry.htm "Glossary Entry"), and when [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") containing appropriate constructs are accessed. When passed to data objects, these values are transformed to type-dependent [initial values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_glosry.htm "Glossary Entry"), but are handled as standalone values in the additions [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm). Null values are also transformed to initial values in [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry").

Notes

-   In [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry"), null values passed to ABAP objects are also transformed to their type-dependent initial values.

-   In ABAP Dictionary, a [flag for initial values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_init.htm) can be set when inserting new columns in existing database tables to preserve the type-dependent initial value instead of the null value.

Example

In the following example, the condition IS NULL is true because the [CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_case.htm) expression on the left side does not find a true WHEN condition and does not have an ELSE branch.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
SELECT SINGLE '\_' AS id
       FROM demo\_expressions
       WHERE CASE WHEN id = 'Y' THEN 'Z' END IS NULL
       INTO @DATA(wa).