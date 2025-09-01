  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) → 

CDS DDL - DDIC-Based View, cds\_cond

Syntax

... rel\_expr
  | *\[*NOT*\]* cds\_cond *\[*AND*|*OR cds\_cond*\]* ...

Effect

Logical expression cds\_cond for formulating a condition in ABAP CDS. A logical expression is either a single relational expression rel\_exp, or an expression composed of the Boolean operators NOT, AND, OR and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression.

Possible relational expressions rel\_expr from which a condition cds\_cond can be constructed:

-   Comparisons with [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\))
-   Interval comparisons using [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v1.htm'\))
-   Pattern comparisons using [LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))
-   Checks on the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") using [IS NULL](javascript:call_link\('abencds_cond_expr_null_v1.htm'\))
-   Checks on the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") using [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v1.htm'\))

The Boolean operators work as follows:

-   NOT negates the result of the following condition.
-   An AND combination is true if both combined conditions are true.
-   An OR combination is true if at least one of the combined conditions is true.

The operator NOT has a stronger binding than AND, which itself has a stronger binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

In SQL, the order in which two expressions are evaluated that are combined by AND is not defined. Results can be different on different database platforms.

Hint

If multiple expressions are combined by AND, rules such as the following are not reliable: If one expression is false, then the following expressions are no longer evaluated. For example a condition col1 <> 0 AND col2 / col1 > 1 can raise an exception. To avoid such exceptions, CASE expressions can be used.

Continue
[CDS DDL - DDIC-based View, cds\_cond, Comparison Operators](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\))
[CDS DDL - DDIC-based View, cds\_cond, BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v1.htm'\))
[CDS DDL - DDIC-Based View, cds\_cond, LIKE](javascript:call_link\('abencds_cond_expr_like_v1.htm'\))
[CDS DDL - DDIC-based View, cds\_cond, NULL](javascript:call_link\('abencds_cond_expr_null_v1.htm'\))
[CDS DDL - DDIC-based View, cds\_cond, INITIAL](javascript:call_link\('abencds_cond_expr_initial_v1.htm'\))
[CDS DDL - DDIC-based View, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\))