  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) → 

log\_exp - Boolean Operators and Parentheses

The Boolean operators

-   [AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm)

-   [OR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_or.htm)

-   [EQUIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_equiv.htm)

join logical expressions; the operator

-   [NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm)

negates a logical expression.

Logical expressions can be parenthesized explicitly using

-   [( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bracket.htm)

.

When combining multiple Boolean operators, the system implicitly parenthesizes all logical expressions that are not closed by explicit parentheses according to the following hierarchy (operator order, precedence). This expresses the strength of the connection between Boolean operators:

1.  All Boolean operators NOT are combined with the adjacent logical expression on the right to make a logical expression.
    
2.  All logical expressions joined using AND are combined as one logical expression.
    
3.  All logical expressions joined using OR are combined as one logical expression.
    
4.  All logical expressions joined using EQUIV are combined as one logical expression.

The logical expressions of a parenthesis level are processed from the left to the right. If the value of a logical expression determines the total value of the parenthesis level, the remaining logical expressions are not evaluated. The dynamic parts of the expressions that are not evaluated, such as field symbols or reference variables, are not checked for validity in this case.

Notes

-   If multiple logical expressions are joined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false.

-   The smallest unit of a joined logical expression is always a [relational expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_expression_glosry.htm "Glossary Entry").

-   If [functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") are used as operands in the relational expressions in question, they are executed directly before the respective relational expression is evaluated. Functional methods are not executed in relational expressions that do not need to be evaluated to get the result.

Continue
[log\_exp - NOT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_not.htm)
[log\_exp - AND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_and.htm)
[log\_exp - OR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_or.htm)
[log\_exp - EQUIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_equiv.htm)
[log\_exp - ( )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bracket.htm)