---
title: "Table Buffering - SQL Expressions"
description: |
  SQL expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) are usually evaluated on the database and and any built-in functions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) used as operands of these expressions a
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_expressions.htm"
abapFile: "abenbuffer_expressions.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abenbuffer", "expressions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_puffering.htm) → 

Table Buffering - SQL Expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) are usually evaluated on the database and and any [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) used as operands of these expressions are usually executed on the database too. If used, SQL expressions then bypass table buffering. The following expressions and functions, however, have an implementation in the table buffer and table buffering is not bypassed when they are used in reads (including nested reads).

-   [Elementary SQL expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_elem.htm)

-   [Built-in SQL function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_builtin_func.htm)

-   [Numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm) ABS, CEIL, DIV, FLOOR, and MOD

-   [String functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm) CONCAT, CONCAT\_WITH\_SPACE, and SUBSTRING

-   [Null value function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm) COALESCE (in the [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) list only)

-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm)

-   [Case distinctions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_case.htm) (in the [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) list only)

The expressions and functions can be used in both [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) lists and in [WHERE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhere.htm) clauses.

If a catchable exception is raised when an SQL expression is evaluated in the table buffer, it is wrapped by the class CX\_SY\_OPEN\_SQL\_DB and can be handled using this class. The attribute PREVIOUS of the associated exception object is then given the name of the original exception class.

Notes

-   When an SQL expression is evaluated in the table buffer, the same results are produced as on the database and not as in the corresponding ABAP evaluation. The following are some examples:

-   Evaluations of the functions [DIV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm) and [MOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm) that are not the same as calculations with the identically named [ABAP operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm).

-   Operands of the type [SSTRING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) that do not have trailing blanks on the database, unlike in ABAP.

-   Any [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") produced as results of nested expressions (for example in the [COALESCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm) function or in [comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenosql_expr_logexp.htm)) are handled as null values.

-   The result of a [relational expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) with columns that contain [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm).

-   If an SQL expression can be evaluated in the table buffer, any [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_itab.htm) used as [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") can also be evaluated on AS ABAP rather than their content having to be transported to the database. .