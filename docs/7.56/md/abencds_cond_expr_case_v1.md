  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, case\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v1.htm) →  [CDS DDL - DDIC-based View, searched\_case\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, CASE

Rules for conditions [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [complex case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") view:

-   All relational operators are allowed.
-   lhs expects a [field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm).
-   A [field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm), a [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) with optional domain prefix, a [parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v1.htm), a [session variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm), or a [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v1.htm) can be specified for rhs (with the exception of the operator [LIKE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_like_v1.htm)).
-   A field of a data source can be specified using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm).element, as long as the CDS associations of the expression do not have any [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") as [association targets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") and the expression is unique:
    
    -   The [cardinality](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencardinality_glosry.htm "Glossary Entry") of the contained [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") is to-one.
    -   The path expression only contains
    -   [filter conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v1.htm) with addition 1:.
    
    element can be used to specify an element of the [association target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path.
    
-   Other expressions and function calls are not allowed.