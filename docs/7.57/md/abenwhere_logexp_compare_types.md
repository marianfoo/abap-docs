---
title: "DEC"
description: |
  CURR QUAN DECFLOAT16 DF16_DEC DF16_RAW DECFLOAT34 DF34_DEC DF34_RAW FLTP CHAR SSTRING NUMC CLNT LANG DATS TIMS ACCP UNIT CUKY DATN TIMN UTCLONG RAW INT1 x x x x x x x x y - x y - - - - - - - - - - - - - - - - INT2 x x x x x x x x y - x y - - - - - - - - - - - - -
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_compare_types.htm"
abapFile: "abenwhere_logexp_compare_types.htm"
keywords: ["select", "do", "if", "case", "data", "types", "abenwhere", "logexp", "compare"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) →  [sql\_cond - Comparison Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_compare.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - Comparable Types, ABENWHERE_LOGEXP_COMPARE_TYPES, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_cond - Comparable Types

The following table shows which [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary can be compared with each other. The table applies to the following:

-   [Comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_compare.htm) of a [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) condition or [HAVING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphaving_clause.htm) condition in which SQL expressions are specified on the left side (lhs) and columns are specified on the right side (rhs).
-   Comparisons of an [ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm) condition.
-   Comparisons in [expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm).

Invalid comparisons produce a syntax error in [conditions of an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) and in the [strict mode from Release 7.40, SP08](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_740_sp08.htm). In other cases, a syntax warning is produced. The result of invalid comparisons is determined by the database system and is platform-dependent. For details on comparisons on SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/HANA_SERVICE_CF/7c78579ce9b14a669c1f3295b0d8ca16/f327b70cae564c53a766367a8aad0164.html).

lhs/rhs

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DF16\_DEC

DF16\_RAW

DECFLOAT34

DF34\_DEC

DF34\_RAW

FLTP

CHAR

SSTRING

NUMC

CLNT

LANG

DATS

TIMS

ACCP

UNIT

CUKY

DATN

TIMN

UTCLONG

RAW

INT1

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DECFLOAT16

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF16\_DEC

y

y

y

y

y

y

y

y

z

\-

\-

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF16\_RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DECFLOAT34

x

x

x

x

x

x

x

x

y

\-

x

y

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF34\_DEC

y

y

y

y

y

y

y

y

y

\-

\-

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

DF34\_RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

x

x

y

x

x

y

y

\-

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

e

e

e

e

x

e

\-

e

e

y

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

e

e

e

e

e

x

\-

e

e

\-

y

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

y

y

y

y

y

\-

\-

y

y

y

\-

\-

\-

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

x

x

x

x

x

e

e

y

x

x

\-

\-

\-

\-

DATN

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

y

\-

\-

\-

\-

y

\-

\-

\-

\-

x

\-

\-

\-

TIMN

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

y

\-

\-

\-

\-

\-

y

\-

\-

\-

\-

x

\-

\-

UTCLONG

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\=

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

l, y

-   There are no restrictions for combinations using x.
-   Combinations with y cannot be used in [conditions in an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm).
-   In combinations with z, the lengths and decimal places must match in the compared columns or expressions in [conditions in an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm).
-   Combinations with e can only be used in [conditions in an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) and cannot be used in [conditions for a statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm).
-   In combinations with l, the lengths of the compared columns or expressions must match.
-   In [conditions in an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm), combinations with \= can only be compared for equality.

The comparability of dictionary types is significant for comparisons with [columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) or [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) on the right side or for [comparisons in SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm). This applies in particular to [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm), [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm), and [host expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) when handled as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_elem.htm). These elements are mapped to a dictionary type and comparability is identified for the dictionary type in question.

Hints

-   The table does not show the [obsolete types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_obsolete_types.htm) DF16\_SCL and DF34\_SCL, which cannot be compared in [conditions in an expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) and, like DF16\_RAW and DF34\_RAW, can otherwise only be compared with themselves.
-   Any [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_literals.htm), [host variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm), and [host expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_expressions.htm) that are not handled as [elementary SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_elem.htm) are usually converted to the matching dictionary type instead of being mapped to a dictionary type. For example, it may be possible to compare a host variable as the right side of a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) for statements with more dictionary types than in a [relational expression for SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm).
-   In the following cases, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.
    -   SQL expressions of the types DF16\_DEC or DF34\_DEC are compared with other numeric types other than themselves.
    -   SQL expressions of the type SSTRING are compared with types other than themselves in a [CASE expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_case.htm).