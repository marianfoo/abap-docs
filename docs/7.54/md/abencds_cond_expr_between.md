  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm) → 

ABAP CDS - cond\_expr, BETWEEN

Syntax

... lhs BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conditional_expression.htm) in a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2 The expression has the same meaning as the following join of two [comparisons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_comp.htm):

... lhs >= rhs1 AND lhs <= rhs2 ...

The corresponding context-dependent [rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_operands.htm) apply to the operands lhs, rhs1, and rhs2. The same [conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_cond_expr_types.htm) for the data types also apply.