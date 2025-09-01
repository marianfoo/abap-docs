---
title: "Hints"
description: |
  -   If multiple logical expressions are joined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false. -   The smallest unit of a joined logical expression is always a relational expression(https://help.sap.com/doc/abapdocu_755_index_htm/7
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_boole.htm"
abapFile: "abenlogexp_boole.htm"
keywords: ["do", "if", "try", "method", "field-symbol", "abenlogexp", "boole"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) → 

log\_exp - Boolean Operators and Parentheses

The following Boolean operators join logical expressions:

-   [AND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_and.htm)

-   [OR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_or.htm)

-   [EQUIV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_equiv.htm)

The following operator negates a logical expression:

-   [NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_not.htm)

negates a logical expression.

Logical expressions can be parenthesized explicitly using the following:

-   [( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bracket.htm)

When multiple Boolean operators are combined, the system implicitly parenthesizes all logical expressions that are not closed by explicit parentheses according to the following hierarchy (operator order, precedence). This expresses the binding strength between Boolean operators:

1.  All Boolean operators NOT are combined with the adjacent logical expression on the right to form a logical expression.
    
2.  All logical expressions joined using AND are combined to form a logical expression.
    
3.  All logical expressions joined using OR are combined to form a logical expression.
    
4.  All logical expressions joined using EQUIV are combined to form a logical expression.
    

The logical expressions of a parenthesis level are processed from left to right. If the value of a logical expression determines the total value of the parenthesis level, the remaining logical expressions are no longer evaluated. In particular, the dynamic parts of the expressions that are not evaluated, such as field symbols or reference variables, are not checked for validity.

Hints

-   If multiple logical expressions are joined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false.

-   The smallest unit of a joined logical expression is always a [relational expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrelational_expression_glosry.htm "Glossary Entry").

-   If [functional methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are used as operands in the involved relational expressions, they are executed directly before the respective relational expression is evaluated. Functional methods in relational expressions that do not need to be evaluated to get the result are not executed.

Continue
[log\_exp - NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_not.htm)
[log\_exp - AND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_and.htm)
[log\_exp - OR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_or.htm)
[log\_exp - EQUIV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_equiv.htm)
[log\_exp - ( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bracket.htm)