  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, cds_cond, BETWEEN, ABENCDS_COND_EXPR_BETW_V2, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, cds\_cond, BETWEEN

Syntax

... lhs *\[*NOT*\]* BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2. The expression has the same meaning as the following join of two [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_comp_v2.htm): ... lhs >= rhs1 AND lhs <= rhs2 ...

The operands lhs, rhs1, and rhs2 must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_operands_v2.htm). Moreover, the data types of the operands must be comparable as described in topic [CDS DDL - View Entity, cds\_cond, Comparable Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm).