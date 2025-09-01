  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20SQL%20Operand%20Positions%2C%20ABENSQL_OPERAND_POSITIONS_OVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

ABAP SQL - SQL Operand Positions

The following table provides a general overview of important operand positions in ABAP SQL and which operands can be used.

Operand Position

Operands

Arguments of SQL Expressions

Column specification [col\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm)

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) in [WHERE clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) and [ON conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_operands.htm), no [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) in [HAVING clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm)

Elementary [SQL operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_operands.htm) and [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm), no other [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm)

\-

Left side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Right side of a relational expression [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm) for expressions

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Grouping criterion after [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Window criterion after [PARTITION BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

[SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) except [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm)

Sort criterion after [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm)

[Columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm) and alias names for [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) defined using [AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm)

\-

-   The arguments of [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) with the exception of [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm).
-   The arguments of [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm) can be [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) with the exception of [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_over.htm).

Certain operand positions are subject to further restrictions and these are documented where appropriate.