  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Operators](javascript:call_link\('abenlogexp_op.htm'\)) →  [rel\_exp - Comparison Operators for Character-Like Data Types](javascript:call_link\('abenlogexp_strings.htm'\)) → 

rel\_exp - Comparison Operators vs. Predicate Functions

Instead of the [comparison operators for character-like data types](javascript:call_link\('abenlogexp_strings.htm'\)), [predicate functions](javascript:call_link\('abenpredicate_functions_strgs.htm'\)) can be used as shown in the following table:

Comparison Operator

Predicate Function

o1 CO o2

NOT contains\_any\_not\_of( val = o1 sub = o2 )

o1 CN o2

contains\_any\_not\_of( val = o1 sub = o2 )

o1 CA o2

contains\_any\_of( val = o1 sub = o2 )

o1 NA o2

NOT contains\_any\_of( val = o1 sub = o2 )

o1 CS o2

contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

o1 NS o2

NOT contains( val = to\_upper( o1 ) sub = to\_upper( o2 ) )

Since the comparison operators CS and NS are not case-sensitive, the arguments must be processed by the functions [to\_upper](javascript:call_link\('abencase_functions.htm'\)) (or to\_lower). It should also be noted that the trailing blanks of character-like arguments of fixed length are always ignored in the predicate functions, whereas there are exceptions to this rule for operands of comparison operators.

The operators CP and NP can also be replaced by the predicate function contains or matches and a suitable [regular expression](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry"). The differences in case handling must also be respected, whereby a simple mapping like in CS and NS is not possible, but usually not required.

Example

The following two relational expressions yield the same result.

DATA(text) = \`xxxxaaayyyy\`.
ASSERT text CP \`\*aaa\*\` AND
       matches( val = text pcre = \`.\*aaa.\*\` case = ' ' ).