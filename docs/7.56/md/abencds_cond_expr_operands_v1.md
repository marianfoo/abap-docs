  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, Operands

The following rules apply to the operands lhs and rhs in relational expressions of the SELECT statement in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   General Rules
    -   [Character literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) cannot be used in comparisons with numeric values.
    -   [Numeric literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) that represent a value outside the value range of [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) must be specified as floating point literals with a decimal point.
-   Special Context-Specific Rules:
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_where_v1.htm) for use in a WHERE condition
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_having_v1.htm) for use in a HAVING condition
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v1.htm) for use in an ON condition of a join expression
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_on_assoc_v1.htm) for use in an ON condition of a CDS association
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_filter_v1.htm) for use in a filter condition of a path expression
    -   [Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_case_v1.htm) for use in a complex case distinction.

Hint

For [comparisons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v1.htm), the tables of [comparable types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_types_v1.htm) show which data types can be compared with each other.