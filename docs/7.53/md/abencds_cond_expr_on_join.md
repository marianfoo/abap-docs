  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) →  [ABAP CDS - cond\_expr, Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_operands.htm) → 

ABAP CDS - cond\_expr, ON, Join

Rules for conditions [cond\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) in an [ON condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_joined_data_source.htm) of a join of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_field.htm) of the data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) that represents the left side of the join.

-   A [field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_field.htm) of both data sources [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) of the join, a [literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm) with optional domain prefix, a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter.htm), a [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm), or a [built-in function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_builtin_functions.htm) can be specified for rhs (with the exception of the operator [LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_like.htm)).

-   At least one comparison for equality between a field of the left data source and a field of the right data source of the join must be performed.

-   No path expressions or other expressions or function calls can be specified.