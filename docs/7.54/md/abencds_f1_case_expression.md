---
title: "Syntax Forms"
description: |
  Simple case distinction(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_simple_case_expression.htm) 1. ... CASE operand WHEN operand1 THEN result1 WHEN operand2 THEN result2 ... ELSE resultn END ... Complex case distinction(https://help.sap.com/doc/abapdocu
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_case_expression.htm"
abapFile: "abencds_f1_case_expression.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "expression"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - case\_expr

Syntax Forms

[Simple case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_simple_case_expression.htm)
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_searched_case_expr.htm)
2\. ... CASE WHEN cond\_expr1 THEN result1
          *\[*WHEN cond\_expr2 THEN result2*\]*
          *\[*WHEN cond\_expr3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"). Either a [simple case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_simple_case_expression.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_searched_case_expr.htm) (searched case).

Case distinctions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) and in operand positions of other expressions.

Continue
[ABAP CDS - simple\_case\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_simple_case_expression.htm)
[ABAP CDS - searched\_case\_expr](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_searched_case_expr.htm)