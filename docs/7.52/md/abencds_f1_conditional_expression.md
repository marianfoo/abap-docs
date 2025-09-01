  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - cond\_expr

Syntax

... rel\_expr
  | *\[*NOT*\]* cond\_expr *\[*AND*|*OR cond\_expr*\]* ...

Effect

Formulates a conditions in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") whose result is true or false. A condition is either a single relational expression, rel\_expr, or an expression constructed from the Boolean operators NOT, AND, and OR in which parenthesized full conditions cond\_expr using parentheses ( ... ) are possible.

The relational expressions rel\_expr from which a condition cond\_expr can be constructed are as follows:

-   Comparisons with [relational operators](javascript:call_link\('abencds_cond_expr_comp.htm'\))

-   Interval comparisons using [BETWEEN](javascript:call_link\('abencds_cond_expr_between.htm'\))

-   Pattern comparisons using [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))

-   Checks on the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") using [IS NULL](javascript:call_link\('abencds_cond_expr_null.htm'\))

The Boolean operators work as follows:

-   NOT negates the result of the following condition.

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a strong binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

Continue
[ABAP CDS - cond\_expr, Relational Operators](javascript:call_link\('abencds_cond_expr_comp.htm'\))
[ABAP CDS - cond\_expr, BETWEEN](javascript:call_link\('abencds_cond_expr_between.htm'\))
[ABAP CDS - cond\_expr, LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))
[ABAP CDS - cond\_expr, NULL](javascript:call_link\('abencds_cond_expr_null.htm'\))
[ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\))