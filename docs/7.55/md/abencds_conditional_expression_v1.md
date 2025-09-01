  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond

Syntax

... rel\_expr
  | *\[*NOT*\]* cds\_cond *\[*AND*|*OR cds\_cond*\]* ...

Effect

Logical expression cds\_cond for formulating a condition in ABAP CDS. A logical expression is either a single relational expression rel\_exp, or an expression composed of the Boolean operators NOT, AND, OR and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression.

Possible relational expressions rel\_expr from which a condition cds\_cond can be constructed:

-   Comparisons with [comparison operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm)

-   Interval comparisons using [BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_betw_v1.htm)

-   Pattern comparisons using [LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v1.htm)

-   Checks on the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry") using [IS NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v1.htm)

-   Checks on the [initial value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_glosry.htm "Glossary Entry") using [IS INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v1.htm)

The Boolean operators work as follows:

-   NOT negates the result of the following condition.

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a stronger binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

Continue
[CDS DDL - DDIC-based View, cds\_cond, Comparison Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_betw_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, LIKE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_like_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_initial_v1.htm)
[CDS DDL - DDIC-based View, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_operands_v1.htm)