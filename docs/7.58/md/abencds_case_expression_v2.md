---
title: "Syntax Forms"
description: |
  Simple Case Distinction(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm) 1. ... CASE operand WHEN operand1 THEN result1 WHEN operand2 THEN result2 ... ELSE resultn  ELSE NULL END ... Complex Case Distinction(https://help.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm"
abapFile: "abencds_case_expression_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "expression"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20case_expr%2C%20ABENCDS_CASE_EXPRESSION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CDS DDL - CDS View Entity, case\_expr

Syntax Forms

[Simple Case Distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm)

1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[**{*ELSE resultn *|* ELSE NULL*}**\]*
      END ...

[Complex Case Distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_searched_case_expr_v2.htm)

2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[**{*ELSE resultn *|* ELSE NULL*}**\]*
      END ...

Effect

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). Either a [simple case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_searched_case_expr_v2.htm) (searched case).

Case distinctions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) and in operand positions of other expressions.

Continue
[CDS DDL - CDS View Entity, simple\_case\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm)
[CDS DDL - CDS View Entity, searched\_case\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_searched_case_expr_v2.htm)