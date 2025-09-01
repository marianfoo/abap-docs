---
title: "Hints"
description: |
  -   If a conversion error occurs in an arithmetic expression in a relational expression, the associated exception can be handled differently than in direct comparisons of data objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_dobj.htm). -   To compare an
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_expr_arith.htm"
abapFile: "abenlogexp_rules_expr_arith.htm"
keywords: ["do", "if", "try", "data", "types", "abenlogexp", "rules", "expr", "arith"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - Comparison Type of Arithmetic Expressions, ABENLOGEXP_RULES_EXPR_ARITH, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

rel\_exp - Comparison Type of Arithmetic Expressions

[Arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") are possible as operands of comparison expressions using [comparison operators for all data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_compare_all.htm). It is possible to compare an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm) with a single operand of a [numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") or with another arithmetic expression.

The [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") of all arithmetic expressions of a comparison expression is determined from all single operands of the entire comparison expression as well as by any operators \*\* in accordance with the [usual rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_type.htm). The result of the involved arithmetic expressions involved exists in the calculation type. This calculation type is also the [comparison type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type_glosry.htm "Glossary Entry") whose [comparison rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type.htm) are used to perform the comparison. If necessary, single operands are [converted](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_source_fields.htm) to the comparison type before comparison.

If multiple relational expressions are combined into a logical expression using [Boolean operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_boole.htm), the calculation type or comparison type are determined separately for each relational expression.

Hints

-   If a conversion error occurs in an arithmetic expression in a relational expression, the associated exception can be handled differently than in direct [comparisons of data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_rules_operands_dobj.htm).
-   To compare an arithmetic expression with a single non-numeric operand, the operand can be prefixed with the "+" sign to turn it into an arithmetic expression.
-   An arithmetic expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Example

The following comparisons are both true. In the first one, the calculation type is i and the result of the calculation is rounded to 1. In the second, the calculation type is decfloat34 and there is no rounding.

IF 4 / 3 = 1.
  cl\_demo\_output=>write( '4 / 3 = 1' ).
ENDIF.
IF 4 / 3 > CONV decfloat34( 1 ).
  cl\_demo\_output=>write( '4 / 3 > CONV decfloat34( 1 )' ).
ENDIF.
cl\_demo\_output=>display( ).