  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)) →  [sql\_agg - agg\_func](javascript:call_link\('abensql_agg_func.htm'\)) → 

sql\_agg - ALLOW\_PRECISION\_LOSS

Syntax

... ALLOW\_PRECISION\_LOSS( [SUM](javascript:call_link\('abensql_agg_func.htm'\))( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )

Effect

The ALLOW\_PRECISION\_LOSS statement can improve the performance of an [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") [agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\)) at the cost of accuracy of the result. This function should only be used on decimal values and when loss of precision is acceptable. Currently, [SUM](javascript:call_link\('abensql_agg_func.htm'\)) is the only supported aggregate expression.

Hint

A different result is not necessarily obtained when using the ALLOW\_PRECISION\_LOSS statement to sum up decimal values. A different result and simultaneous improvement in performance is only obtained during certain complex operations. One example is when operations are carried out in a different order to reduce the total number of operations. See the executable example below for further details.

Executable Example

[Aggregate function, allow precision loss](javascript:call_link\('abensql_expr_aggr_prec_loss_abexa.htm'\))