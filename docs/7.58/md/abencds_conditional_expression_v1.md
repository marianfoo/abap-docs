  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20cds_cond%2C%20ABENCDS_CONDITIONAL_EXPRESSION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - DDIC-Based View, cds\_cond

Syntax

... rel\_expr
  | *\[*NOT*\]* cds\_cond *\[*AND*|*OR cds\_cond*\]* ...

Effect

Logical expression cds\_cond for formulating a condition in ABAP CDS. A logical expression is either a single relational expression rel\_exp, or an expression composed of the Boolean operators NOT, AND, OR and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression.

Possible relational expressions rel\_expr from which a condition cds\_cond can be constructed:

-   Comparisons with [comparison operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_comp_v1.htm)
-   Interval comparisons using [BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_betw_v1.htm)
-   Pattern comparisons using [LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_like_v1.htm)
-   Checks on the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") using [IS NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_null_v1.htm)
-   Checks on the [initial value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry") using [IS INITIAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_initial_v1.htm)

The Boolean operators work as follows:

-   NOT negates the result of the following condition.
-   An AND combination is true if both combined conditions are true.
-   An OR combination is true if at least one of the combined conditions is true.

The operator NOT has a stronger binding than AND, which itself has a stronger binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

In SQL, the order in which two expressions are evaluated that are combined by AND is not defined. Results can be different on different database platforms.

Hint

If multiple expressions are combined by AND, rules such as the following are not reliable: If one expression is false, then the following expressions are no longer evaluated. For example a condition col1 <> 0 AND col2 / col1 > 1 can raise an exception. To avoid such exceptions, CASE expressions can be used.

Continue
[CDS DDL - DDIC-Based View, cds\_cond, Comparison Operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_comp_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_betw_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_like_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_null_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, INITIAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_initial_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_operands_v1.htm)