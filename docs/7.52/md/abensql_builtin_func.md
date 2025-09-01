---
title: "Syntax"
description: |
  ... sql_func( ... )(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) ... Effect Calls a built-in function(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) as an SQL expression in Open SQL. The result is
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_builtin_func.htm"
abapFile: "abensql_builtin_func.htm"
keywords: ["select", "do", "data", "abensql", "builtin", "func"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_func

Syntax

... [sql\_func( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) ...

Effect

Calls a [built-in function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) as an SQL expression in Open SQL. The result is the return value of the function with the associated dictionary type.

Example

Uses the built-in functions [CONCAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func.htm), and [LOWER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

SELECT FROM   spfli
       FIELDS CONCAT( CONCAT( LOWER( carrid ), '\_' ),
                              LOWER( CAST( connid AS CHAR ) ) ) AS key,
              CONCAT\_WITH\_SPACE( CONCAT( cityfrom,
                                 ',' ), cityto, 1 ) AS cities
       WHERE carrid = '...'
       INTO TABLE @DATA(result).

Executable Examples

-   [SQL expressions, arithmetic calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_arith_abexa.htm)

-   [String functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func_abexa.htm)

-   [SQL expressions, Coalesce function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_coalesce_abexa.htm)