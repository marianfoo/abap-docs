  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) → 

rel\_exp - Comparison Type of Calculation Expressions

Any [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") can be specified as an operand of a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry").

The table below summarizes the combinations in which calculation expressions can be listed in comparison expressions:

One side

Comparison operator

Other side

Single operand with [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") or [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](javascript:call_link\('abenlogexp_any_operand.htm'\))

[Arithmetical expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

Single operand with any [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](javascript:call_link\('abenlogexp_any_operand.htm'\)), [CO, CN, CA, NA, CS, NS, CP, NP](javascript:call_link\('abenlogexp_strings.htm'\))

[String expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")

Single operand with [byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry") or [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](javascript:call_link\('abenlogexp_any_operand.htm'\)), [BYTE-CO, BYTE-CN, BYTE-CA, BYTE-NA, BYTE-CS, BYTE-NS](javascript:call_link\('abenlogexp_bytes.htm'\)), [O, Z, M](javascript:call_link\('abenlogexp_bitmasks.htm'\))

[Bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")

The [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") is determined differently depending on the type of calculation expression.

-   [Comparison type of arithmetic expressions](javascript:call_link\('abenlogexp_rules_expr_arith.htm'\))

-   [Comparison type of string expressions](javascript:call_link\('abenlogexp_rules_expr_char.htm'\))

-   [Comparison type of bit expressions](javascript:call_link\('abenlogexp_rules_expr_bit.htm'\))

In comparison expressions with the comparison operators [BETWEEN](javascript:call_link\('abenlogexp_between.htm'\)) and [IN](javascript:call_link\('abenlogexp_select_option.htm'\)), which are converted internally to links of comparisons with the binary operators above, the rules of the respective comparisons apply.

Hints

-   [Relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") cannot yet be compared. Instead, they can be linked using [Boolean operators](javascript:call_link\('abenboolean_operator_glosry.htm'\) "Glossary Entry"), where the link with the operator [EQUIV](javascript:call_link\('abenlogexp_equiv.htm'\)) corresponds to the comparison of the resulting [truth values](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry") for equality.

-   A [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") cannot be specified as the operand of a [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry").

Continue
[rel\_exp - Comparison Type of Arithmetic Expressions](javascript:call_link\('abenlogexp_rules_expr_arith.htm'\))
[rel\_exp - Comparison Type of String Expressions](javascript:call_link\('abenlogexp_rules_expr_char.htm'\))
[rel\_exp - Comparison Type of Bit Expressions](javascript:call_link\('abenlogexp_rules_expr_bit.htm'\))