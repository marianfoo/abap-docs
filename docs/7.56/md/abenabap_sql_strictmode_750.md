---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.50 applies to all ABAP SQL statements that use one of the following attributes introduced in Release 7.50(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-750-abap_sql.htm): -   Use of UNION(https://help.sap.com/doc/abapdocu_756
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm"
abapFile: "abenabap_sql_strictmode_750.htm"
keywords: ["select", "insert", "update", "do", "if", "case", "try", "data", "types", "abenabap", "sql", "strictmode", "750"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) → 

ABAP SQL - Strict Mode in Release 7.50

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-750-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_750_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.50 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-750-abap_sql.htm):

-   Use of [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm).
-   Use of [host expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm)
-   [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) on the left-hand side of a [relational expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm) of an [SQL condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm)
-   Specifying columns on the right side of an interval condition [BETWEEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_interval.htm)
-   Shared use of [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") with DDIC database tables or DDIC views in a SELECT statement.
-   In a [cast expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cast.htm), other [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) are used as operands or FLTP is not the only data type that can be specified as the target type.
-   In an [ON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm) condition
    -   of any join, an [SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expression_glosry.htm "Glossary Entry") is used on the left side,
    -   of an outer join, the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_null.htm) is used.
-   Use of [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm) in a [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry").
-   Use of a [host expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm) as an operand n after [UP TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) or [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement.
-   [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") specified as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement.
-   Implicit pass of a value to an input parameter of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"), annotated with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm), in the [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement.
-   A [SELECT clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_clause.htm) started with [FIELDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) after the [FROM clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) in the [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm).
-   Access to a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_gtt.htm).
-   Use of the numeric function [ROUND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_arith_func.htm) or the string functions [CONCAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [LPAD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [LENGTH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [LTRIM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [RIGHT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), [RTRIM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm), and [SUBSTRING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm).
-   [Path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm) as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm).
-   Subquery as [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_source.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm).
-   [Comparison](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_compare_types.htm) of columns or expressions of the types DF16\_DEC or DF34\_DEC with other numeric types (except with itself) or comparison of columns or expressions of the type SSTRING with other types (except with itself) in a [CASE expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm).
-   Use of the target type INT8 in a [CAST expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cast.htm).

Rules for the Strict Mode

The strict mode in Release 7.50 covers all rules of the [strict mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm), plus the following rules:

-   In a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement, it is not possible to access to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a corresponding CDS view as an [obsolete data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_cds_obsolete.htm).
-   No [writes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_writing.htm) can be performed on DDIC database tables or DDIC views with a [replacement object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreplacement_object_glosry.htm "Glossary Entry").
-   If it is not possible to make a [lossless](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_exact.htm) read on an [untyped literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_untyped_literals.htm), a syntax error occurs.
-   A column can occur only once in a single [update expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate_set_expression.htm) after the addition [SET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate_source.htm) of the statement [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm).
-   If the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) is specified as \*, [HAVING clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) without [GROUP BY clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) are forbidden.
-   The [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) clause must be specified as the last clause of a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement and the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) and [abap\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_additions.htm) of the SELECT statement must be specified after the INTO clause.
-   If an [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm) statement is checked in accordance with the rules of the strict mode from Release 7.60, all [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) must be prefixed with the escape character @ in the statements [FETCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm) and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclose_cursor.htm) that access the open cursor.

Hint

If used in the statements FETCH and CLOSE CURSOR, the escape character @ is ignored by the checks made on the associated statement OPEN CURSOR.