  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) → 

CDS DDL - CDS View Entity, cds\_cond

Syntax

... rel\_expr
  | *\[*NOT*\]* cds\_cond *\[*AND*|*OR cds\_cond*\]* ...

Effect

Logical expression cds\_cond for formulating a condition in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). A logical expression is either a single relational expression rel\_exp, or an expression composed of the Boolean operators NOT, AND, OR and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression.

Possible relational expressions rel\_expr from which a condition cds\_cond can be constructed:

-   Comparisons with [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\))

-   Interval comparisons using [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\))

-   Pattern comparisons using [LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\))

-   Checks on the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") using [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\))

-   Checks on the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") using [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\))

The Boolean operators work as follows:

-   NOT negates the result of the following condition.

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a stronger binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

Continue
[CDS DDL - CDS View Entity, cds\_cond, Comparison Operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\))
[CDS DDL - CDS View Entity, cds\_cond, BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\))
[CDS DDL - CDS View Entity, cds\_cond, LIKE](javascript:call_link\('abencds_cond_expr_like_v2.htm'\))
[CDS DDL - CDS View Entity, cds\_cond, NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\))
[CDS DDL - CDS View Entity, cds\_cond, INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\))
[CDS DDL - CDS View Entity, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v2.htm'\))