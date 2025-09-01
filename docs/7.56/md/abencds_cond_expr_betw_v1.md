  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, BETWEEN

Syntax

... lhs BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2. The expression has the same meaning as the following combination of two [comparisons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_comp_v1.htm):

... lhs >= rhs1 AND lhs <= rhs2 ...

The corresponding context-dependent rules apply to the [operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_operands_v1.htm) lhs, rhs1, and rhs2 as well as the same [conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_types_v1.htm) for the data types.