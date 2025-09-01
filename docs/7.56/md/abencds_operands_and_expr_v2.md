---
title: "CDS DDL - SELECT, CDS View Entity, Operands and Expressions"
description: |
  -   Elementary operands(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_v2.htm): -   Literals(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v2.htm) -   Fields of data sources(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abe
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v2.htm"
abapFile: "abencds_operands_and_expr_v2.htm"
keywords: ["select", "do", "case", "data", "abencds", "operands", "and", "expr"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) → 

CDS DDL - SELECT, CDS View Entity, Operands and Expressions

-   [Elementary operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_v2.htm):
    -   [Literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v2.htm)
    -   [Fields of data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v2.htm)
    -   [Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v2.htm)
    -   [Session variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v2.htm)
-   [Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v2.htm):
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v2.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_aggregate_functions_v2.htm)
    -   [Case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v2.htm)
    -   [Casting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cast_expression_v2.htm)
    -   [Built-in Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v2.htm)
-   [Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm)
-   [Path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm)
-   [Passing actual parameters to input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_parameters_v2.htm)

Continue
[CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_v2.htm)
[CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v2.htm)
[CDS DDL - CDS View Entity, cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v2.htm)
[CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v2.htm)
[CDS DDL - CDS View Entity, CDS parameter passing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_parameters_v2.htm)