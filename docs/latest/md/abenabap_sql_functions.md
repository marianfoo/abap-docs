---
title: "Hint"
description: |
  Certain SQL expressions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_expr.htm) can be calculated by the ABAP SQL engine(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm 'Glossary Entry'). If any other SQL expressions
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_functions.htm"
abapFile: "abenabap_sql_functions.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abenabap", "sql", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20SQL%20Functions%2C%20ABENABAP_SQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - SQL Functions

The following built-in [SQL functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions.htm) can either be specified as standalone functions in ABAP SQL or as operands of [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm), in all places where SQL expressions are possible.

-   [Numeric functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith_func.htm)
-   [String functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm)
-   [Coalesce function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm)
-   [UUID function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_uuid.htm)

Hint

[Certain SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_expr.htm) can be calculated by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"). If any other SQL expressions are used, [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[sql\_func - Numeric Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith_func.htm)
[sql\_func - String Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm)
[sql\_func - Coalesce Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm)
[sql\_func - UUID Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_uuid.htm)