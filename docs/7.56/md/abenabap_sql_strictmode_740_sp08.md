---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.40, SP08 applies to all ABAP SQL statements that use one of the following features introduced in Release 7.40 SP08(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp08-abap_sql.htm): -   Columns dbtab~ specified in the SEL
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm"
abapFile: "abenabap_sql_strictmode_740_sp08.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abenabap", "sql", "strictmode", "740", "sp08"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) → 

ABAP SQL - Strict Mode in Release 7.40, SP08

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-740-sp08-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_740_SP08_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.40, SP08 applies to all ABAP SQL statements that use one of the following features introduced in [Release 7.40 SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp08-abap_sql.htm):

-   Columns dbtab~\* specified in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm).
-   Inline declarations using [@DATA(...)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm) for the [target area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) of [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm).
-   [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expression_glosry.htm "Glossary Entry"):
    -   Minus sign (\-) in front of an operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_arith.htm)
    -   SQL expression as an operand of a [simple case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_simple_case.htm)
    -   Use of a [complex case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_searched_case.htm)
    -   SQL expression after SELECT together with [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm) or the addition [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm)
    -   SQL expression after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) of the statement SELECT
    -   SQL expression as an argument of [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm) in the SELECT list or in the HAVING clause
-   [Joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm):
    -   Use of the additions LIKE, IN, and NOT and the operators OR or NOT in an ON condition.
    -   Outer join without a comparison between columns on the left and right sides.
-   [Subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry") specified in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_dynamic.htm).
-   Arrangement of the [INTO clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) as the final clause of a SELECT statement.

Rules for the Strict Mode

The strict mode in Release 7.40, SP08 covers all rules of the [strict mode in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm), plus the following rules:

-   If the content of an [untyped literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_untyped_literals.htm), a [host variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm), or a host [expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm) that is read in an operand position needs to be converted to the target type, this is done using the [rules for lossless assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_exact.htm). If the assignment cannot be lossless, an exception is raised.
-   If [AS tabalias](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) is used to define an alias name for a DDIC database table, this name must also be used in dynamic tokens.
-   Comparisons between non-[comparable types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_compare_types.htm) produce a syntax error or raise an exception.
-   If a column specified in the [HAVING clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) outside of an aggregate expression is not specified after [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm), a syntax error occurs.
-   Columns listed directly in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) cannot be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) if a HAVING clause is specified.