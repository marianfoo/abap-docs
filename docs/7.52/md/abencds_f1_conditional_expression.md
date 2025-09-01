  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - cond\_expr

Syntax

... rel\_expr
  | *\[*NOT*\]* cond\_expr *\[*AND*|*OR cond\_expr*\]* ...

Effect

Formulates a conditions in a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") whose result is true or false. A condition is either a single relational expression, rel\_expr, or an expression constructed from the Boolean operators NOT, AND, and OR in which parenthesized full conditions cond\_expr using parentheses ( ... ) are possible.

The relational expressions rel\_expr from which a condition cond\_expr can be constructed are as follows:

-   Comparisons with [relational operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm)

-   Interval comparisons using [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_between.htm)

-   Pattern comparisons using [LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_like.htm)

-   Checks on the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") using [IS NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_null.htm)

The Boolean operators work as follows:

-   NOT negates the result of the following condition.

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a strong binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

Continue
[ABAP CDS - cond\_expr, Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm)
[ABAP CDS - cond\_expr, BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_between.htm)
[ABAP CDS - cond\_expr, LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_like.htm)
[ABAP CDS - cond\_expr, NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_null.htm)
[ABAP CDS - cond\_expr, Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_operands.htm)