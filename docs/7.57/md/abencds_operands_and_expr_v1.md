---
title: "CDS DDL - DDIC-Based View, SELECT, Operands and Expressions"
description: |
  -   Elementary operands(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_v1.htm): -   Literals(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm) -   Fields of data sources(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abe
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm"
abapFile: "abencds_operands_and_expr_v1.htm"
keywords: ["select", "do", "if", "case", "data", "abencds", "operands", "and", "expr"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, SELECT, Operands and Expressions, ABENCDS_OPERANDS_AND_EXP
R_V1, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, SELECT, Operands and Expressions

-   [Elementary operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_v1.htm):
    -   [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm)
    -   [Fields of data sources](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v1.htm)
    -   [Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm)
    -   [Session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm)
-   [Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm):
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v1.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v1.htm)
    -   [Case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v1.htm)
    -   [Casting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm)
    -   [Built-in Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm)
-   [Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm)
-   [Path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm)
-   [Passing actual parameters to input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_parameters_v1.htm)

Continue
[CDS DDL - DDIC-Based View, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_v1.htm)
[CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm)
[CDS DDL - DDIC-Based View, path\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm)
[CDS DDL - DDIC-Based View, CDS Parameter Passing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_parameters_v1.htm)