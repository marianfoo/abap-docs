---
title: "ABAP SQL - SQL Operand Positions"
description: |
  The following table provides a general overview of important operand positions in ABAP SQL and which operands can be used. Operand Position Operands Arguments of SQL Expressions Column specification col_spec(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause_col_spec.htm
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operand_positions_oview.htm"
abapFile: "abensql_operand_positions_oview.htm"
keywords: ["select", "do", "if", "data", "abensql", "operand", "positions", "oview"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - SQL Operand Positions, ABENSQL_OPERAND_POSITIONS_OVIEW, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - SQL Operand Positions

The following table provides a general overview of important operand positions in ABAP SQL and which operands can be used.

Operand Position

Operands

Arguments of SQL Expressions

Column specification [col\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause_col_spec.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm)

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_join.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm), no [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphaving_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphaving_clause.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_operands.htm) and [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm), no other [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Grouping criterion after [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Window criterion after [PARTITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm)

Sort criterion after [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm)

[Columns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_columns.htm) and alias names for [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) defined using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm)

\-

-   The arguments of [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) with the exception of [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm).
-   The arguments of [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) with the exception of [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm).

Certain operand positions are subject to further restrictions and these are documented where appropriate.