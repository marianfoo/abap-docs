---
title: "Syntax"
description: |
  ... lhs operator rhs ... Effect Comparison operators can be used to specify a comparison in a condition(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) in a CDS view entity(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_vie
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_comp_v2.htm"
abapFile: "abencds_cond_expr_comp_v2.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abencds", "cond", "expr", "comp"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) → 

CDS DDL - CDS View Entity, cds\_cond, Comparison Operators

Syntax

... lhs operator rhs ...

Effect

Comparison operators can be used to specify a comparison in a [condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The following table shows relational expressions rel\_exp that are constructed with comparison operators:

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

-   Context-dependent rules apply when specifying the operands lhs and rhs. For further details, see topic [CDS DDL - View Entity, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_operands_v2.htm)

-   The tables of [comparable types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_types_v2.htm) show which data types can be compared with each other.

Continue
[CDS DDL - CDS View Entity, cds\_cond, Comparable Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_types_v2.htm)