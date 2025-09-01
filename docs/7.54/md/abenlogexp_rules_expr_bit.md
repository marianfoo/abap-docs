  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Calculation Expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\)) → 

rel\_exp - Comparison Type of Bit Expressions

[Bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be used as operands in comparison expressions with the following:

-   [comparison operators for all data types](javascript:call_link\('abenlogexp_compare_all.htm'\))

-   [comparison operators for byte-like data types](javascript:call_link\('abenlogexp_bytes.htm'\))

-   [comparison operators for bit patterns](javascript:call_link\('abenlogexp_bitmasks.htm'\))

A [bit expression](javascript:call_link\('abapcompute_bit.htm'\)) can be compared with a single operand of a [byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry") or with another bit expression.

Each bit expression of a comparison expression is calculated based on the length of its longest operand, with shorter operands padded on the right with hexadecimal 0. All operands of the entire comparison expression are respected. The result of the bit expressions involved is contained within this length and, if necessary, a single operand is converted to this length before the comparison, again by filling with hexadecimal 0 on the right. The comparison is then performed using the [comparison rule](javascript:call_link\('abencomparison_type.htm'\)) for a byte-like [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry").

Note

A bit expression cannot be specified as the operand of a [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry").

Example

This example demonstrates the different ways lengths are handled in comparisons between byte fields and bit expressions. The bit expression in the first comparison is evaluated with length 4 and produces the value hexadecimal 1100. The single operand on the right is converted to the value hexadecimal 1100 by filling with hexadecimal 00 and the equality comparison is true. In the second comparison, on the other hand, the operand on the left is converted to the type xstring and the operand on the right is not made longer. Here, the inequality comparison is true.

IF x\`FFFF\` BIT-AND x\`11\` = xstring\`11\`.
  ...
ENDIF.
IF x\`1100\` <> xstring\`11\`.
  ...
ENDIF.