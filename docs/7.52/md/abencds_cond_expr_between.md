  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, BETWEEN

Syntax

... lhs BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2 The expression has the same meaning as the following join of two [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)):

... lhs >= rhs1 AND lhs <= rhs2 ...

The corresponding context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to the operands lhs, rhs1, and rhs2. The same [conditions](javascript:call_link\('abencds_cond_expr_types.htm'\)) for the data types also apply.