  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) →  [ABAP CDS - cond\_expr, Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_operands.htm) → 

ABAP CDS - cond\_expr, WHERE

Rules for conditions [cond\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) in a [WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_where_clause.htm) of a [CDS-View](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   All relational operators are allowed.

-   lhs expects a [field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_field.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm).

-   A [field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_field.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm), a [literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm) with optional domain prefix, a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter.htm), a [session variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_session_variable.htm), or a [built-in function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_builtin_functions.htm) can be specified for rhs (with the exception of the operator [LIKE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_like.htm)).

-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_path_expression.htm).element, as long as the associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_path_expression_attr.htm) with addition 1:.

element can be used to specify an element of the target data source of the last association of the path.

-   Other expressions and function calls are not allowed.