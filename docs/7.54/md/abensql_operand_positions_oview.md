---
title: "ABAP SQL - SQL Operand Positions"
description: |
  The following table provides a general overview of significant operand positions in ABAP SQL and which operands can be used. Operand Position Operands Arguments of SQL Expressions Specified column col_spec(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause_col_spec.htm)
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_operand_positions_oview.htm"
abapFile: "abensql_operand_positions_oview.htm"
keywords: ["select", "do", "if", "data", "abensql", "operand", "positions", "oview"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - SQL Operand Positions

The following table provides a general overview of significant operand positions in ABAP SQL and which operands can be used.

Operand Position

Operands

Arguments of SQL Expressions

Specified column [col\_spec](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_clause_col_spec.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_join.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_operands.htm), no [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_operands.htm) and [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm), no other [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenosql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Grouping criterion after [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Window criterion after [PARTITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

Sort criterion after [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm)

[Columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) and alias names for [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm)

\-

-   The arguments of [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) with the exception of [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

-   The arguments of [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) with the exception of[window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm).

Some operand positions are subject to certain other restrictions and these are documented where appropriate.