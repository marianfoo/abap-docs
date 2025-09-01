  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, Comparison Operators

Syntax

... lhs operator rhs ...

Effect

Comparison operators can be used to specify a comparison in a [condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The following table shows relational expressions rel\_exp that are constructed with comparison operators:

rel\_expr

True if

lhs = rhs

Value of lhs is equal to the value of rhs

lhs <> rhs

Value of lhs is not equal to the value of rhs

lhs < rhs

Value of lhs is less than the value of rhs

lhs > rhs

Value of lhs is greater than the value of rhs

lhs <= rhs

Value of lhs is less than or equal to the value of rhs

lhs >= rhs

Value of lhs is greater than or equal to the value of rhs

-   Context-dependent rules apply when specifying the [operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_operands_v1.htm) lhs and rhs.
-   The tables of [comparable types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_types_v1.htm) show which data types can be compared with each other.

Continue
[CDS DDL - DDIC-based View, cds\_cond, Comparable Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_types_v1.htm)