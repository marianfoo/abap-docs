  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - SQL Operand Positions

The following table provides a general overview of significant operand positions in ABAP SQL and which operands can be used.

Operand Position

Operands

Arguments of SQL Expressions

Specified column [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) in a [SELECT list](javascript:call_link\('abapselect_list.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

Left side of a relational expression [rel\_exp](javascript:call_link\('abenwhere_logexp.htm'\)) in [WHERE clauses](javascript:call_link\('abapwhere.htm'\)) and [ON conditions](javascript:call_link\('abapselect_join.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

Right side of a relational expression [rel\_exp](javascript:call_link\('abenwhere_logexp.htm'\)) in [WHERE clauses](javascript:call_link\('abapwhere.htm'\)) and [ON conditions](javascript:call_link\('abapselect_join.htm'\))

Elementary [SQL operands](javascript:call_link\('abensql_operands.htm'\)), no [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

\-

Left side of a relational expression [rel\_exp](javascript:call_link\('abenwhere_logexp.htm'\)) in [HAVING clauses](javascript:call_link\('abaphaving_clause.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [window expressions](javascript:call_link\('abapselect_over.htm'\))

Right side of a relational expression [rel\_exp](javascript:call_link\('abenwhere_logexp.htm'\)) in [HAVING clauses](javascript:call_link\('abaphaving_clause.htm'\))

Elementary [SQL operands](javascript:call_link\('abensql_operands.htm'\)) and [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)), no other [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

\-

Left side of a relational expression [rel\_exp](javascript:call_link\('abenosql_expr_logexp.htm'\)) for expressions

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

Right side of a relational expression [rel\_exp](javascript:call_link\('abenosql_expr_logexp.htm'\)) for expressions

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

Grouping criterion after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

Window criterion after [PARTITION](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\))

Sort criterion after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))

[Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and alias names for [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) defined using [AS](javascript:call_link\('abapselect_list.htm'\))

\-

-   The arguments of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) can be [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the exception of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)).

-   The arguments of [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the exception of[window expressions](javascript:call_link\('abapselect_over.htm'\)).

Some operand positions are subject to certain other restrictions and these are documented where appropriate.