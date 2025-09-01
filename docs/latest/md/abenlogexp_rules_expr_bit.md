  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Calculation Expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20Type%20of%20Bit%20Expressions%2C%20ABENLOGEXP_RULES_EXPR_BIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

rel\_exp - Comparison Type of Bit Expressions

[Bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be used as operands of comparison expressions with the following:

-   [Comparison operators for all data types](javascript:call_link\('abenlogexp_compare_all.htm'\))
-   [Comparison operators for byte-like data types](javascript:call_link\('abenlogexp_bytes.htm'\))
-   [Comparison operators for bit patterns](javascript:call_link\('abenlogexp_bitmasks.htm'\))

A [bit expression](javascript:call_link\('abapcompute_bit.htm'\)) can be compared with a single operand of a [byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry") or with a different bit expression.

Each bit expression of a comparison expression is calculated based on the length of the single longest operand, for which shorter operands are padded on the right with hexadecimal 0. All operands of the entire comparison expression are considered. The result of the involved bit expressions is contained in this length and, if necessary, a single operand is padded with hexadecimal 0 on the right before comparison. The comparison is then performed according to the [comparison rule](javascript:call_link\('abencomparison_type.htm'\)) for a byte-like [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry").

Hint

A bit expression cannot be specified as the operand of a [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry").

Example

This example shows the different ways lengths are handled in comparisons between byte fields and bit expressions. The bit expression in the first comparison is evaluated with length 4 and produces the value hexadecimal 1100. The single operand on the right is lengthened to the value hexadecimal 1100 by filling with hexadecimal 00 and the equality comparison is true. In the second comparison, on the other hand, the operand on the left is converted to the type xstring and the operand on the right is not lengthened, which is why the inequality comparison is true.

IF x\`FFFF\` BIT-AND x\`11\` = xstring\`11\`.
  ...
ENDIF.
IF x\`1100\` <> xstring\`11\`.
  ...
ENDIF.