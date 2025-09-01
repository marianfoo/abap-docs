---
title: "Hints"
description: |
  -   If multiple logical expressions are combined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false. -   The smallest unit of a combined logical expression is always a relational expression(https://help.sap.com/doc/abapdocu_latest_inde
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_boole.htm"
abapFile: "abenlogexp_boole.htm"
keywords: ["do", "if", "try", "method", "field-symbol", "abenlogexp", "boole"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20log_exp%20-%20Boolean%20Operators%20and%20Parentheses%2C%20ABENLOGEXP_BOOLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

log\_exp - Boolean Operators and Parentheses

The following Boolean operators combine logical expressions:

-   [AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_and.htm)
-   [OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_or.htm)
-   [EQUIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_equiv.htm)

The following operator negates a logical expression:

-   [NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_not.htm)

Logical expressions can be parenthesized explicitly using the following:

-   [( )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bracket.htm)

When multiple Boolean operators are combined, the system implicitly parenthesizes all logical expressions that are not closed by explicit parentheses according to the following hierarchy (operator order, precedence). This expresses the binding strength between Boolean operators:

1.  All Boolean operators NOT are combined with the adjacent logical expression on the right to form a logical expression.

1.  All logical expressions combined using AND form a logical expression.

1.  All logical expressions combined using OR form a logical expression.

1.  All logical expressions combined using EQUIV form a logical expression.

The logical expressions of a parenthesis level are processed from left to right. If the value of a logical expression determines the total value of the parenthesis level, the remaining logical expressions are no longer evaluated. In particular, the dynamic parts of the expressions that are not evaluated, such as field symbols or reference variables, are not checked for validity.

Hints

-   If multiple logical expressions are combined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false.
-   The smallest unit of a combined logical expression is always a [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry").
-   If [functional methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are used as operands in the involved relational expressions, they are executed directly before the respective relational expression is evaluated. Functional methods in relational expressions that do not need to be evaluated to get the result are not executed.

Continue
[log\_exp - NOT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_not.htm)
[log\_exp - AND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_and.htm)
[log\_exp - OR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_or.htm)
[log\_exp - EQUIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_equiv.htm)
[log\_exp - ( )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bracket.htm)