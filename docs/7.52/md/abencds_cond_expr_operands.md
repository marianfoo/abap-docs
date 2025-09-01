  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) → 

ABAP CDS - cond\_expr, Operands

The following rules apply when specifying the operands lhs and rhs in the relational expressions of the SELECT statement in a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   General Rules

-   [Character literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm) cannot be used in comparisons with numeric values.

-   [Numeric literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm) that represent a value outside the value range of [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) must be specified as floating point literals with a decimal point.

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm) for use in a WHERE condition

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_having.htm) for use in a HAVING condition

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_on_join.htm) for use in an ON condition of a join expression

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_on_assoc.htm) for use in an ON condition of an association

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_filter.htm) for use in a filter condition of a path expression

-   [Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_case.htm) for use in a complex case distinction.

Note

For [comparisons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_comp.htm), the tables of [comparable types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_types.htm) show which data types can be compared with each other.

Continue
[ABAP CDS - cond\_expr, WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm)
[ABAP CDS - cond\_expr, HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_having.htm)
[ABAP CDS - cond\_expr, ON, Join](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_on_join.htm)
[ABAP CDS - cond\_expr, ON, Association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_on_assoc.htm)
[ABAP CDS - cond\_expr, Filter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_filter.htm)
[ABAP CDS - cond\_expr, CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_case.htm)