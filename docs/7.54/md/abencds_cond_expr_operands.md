  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_f1_literal.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_f1_literal.htm'\)) that represent a value outside the value range of [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   [Rules](javascript:call_link\('abencds_cond_expr_where.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_cond_expr_on_join.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\)) for use in an ON condition of a CDS association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case.htm'\)) for use in a complex case distinction.

Note

For [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](javascript:call_link\('abencds_cond_expr_where.htm'\))
[ABAP CDS - cond\_expr, HAVING](javascript:call_link\('abencds_cond_expr_having.htm'\))
[ABAP CDS - cond\_expr, ON, Join](javascript:call_link\('abencds_cond_expr_on_join.htm'\))
[ABAP CDS - cond\_expr, ON, CDS Association](javascript:call_link\('abencds_cond_expr_on_assoc.htm'\))
[ABAP CDS - cond\_expr, Filter](javascript:call_link\('abencds_cond_expr_filter.htm'\))
[ABAP CDS - cond\_expr, CASE](javascript:call_link\('abencds_cond_expr_case.htm'\))