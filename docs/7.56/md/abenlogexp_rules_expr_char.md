  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [Comparison Expressions (rel\_exp)](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Calculation Expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\)) → 

rel\_exp - Comparison Type of String Expressions

[String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") can be used as operands of comparison expressions with the following:

-   [Comparison operators for all data types](javascript:call_link\('abenlogexp_compare_all.htm'\))
-   [Comparison operators for character-like data types](javascript:call_link\('abenlogexp_strings.htm'\))

It is possible to compare a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") with a single operand of any [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or with another string expression. With regard to the conversion of the elementary expression by string, two cases can be distinguished:

-   If a string expression is compared with an individual operand in a generic logical expression, the comparison type is string. The individual operand is implicitly regarded as an [embedded expression](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") of a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") and formatted as a text string before the comparison in accordance with the associated [predefined format](javascript:call_link\('abenstring_templates_predef_format.htm'\)).
-   If a string expression on the right side of a WHERE condition is used in a [processing statement for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)), the comparison type results from the [combination](javascript:call_link\('abenlogexp_character.htm'\)) of string with the type on the left side. Both sides are [converted](javascript:call_link\('abenconversion_elementary.htm'\)) to the comparison type as required.

Hints

-   A string expression cannot be specified as the operand of a [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry").
-   The result of the formatting of an individual operand differs from the result of a simple [conversion](javascript:call_link\('abenconversion_elementary.htm'\)) for some data types. An example is the type decfloat34.
-   The results of general logical expressions and logical expressions in WHERE conditions for internal tables may differ for comparisons with string expressions, since both the formatting and the comparison type play a role.

Example

This example demonstrates the effect of different comparison types. The first comparison is true, since the character-like operand is converted to the type of the numeric operand in accordance with the rule for [comparing character-like data types](javascript:call_link\('abenlogexp_character.htm'\)) and the numeric value is compared. However, the second comparison is also true, since the numeric operand is formatted as a text string and the internal representation of the code page used is compared.

ASSERT \`02\` > 1.
ASSERT |02| < 1.

Example

This example demonstrates the effect of different formatting and different rules. All comparisons are true. An elementary operand of type decfloat34 is compared with a text string and a string expression. For the comparison with the text string, the left side is also converted to the type string and the values of both sides are the same. For the comparison with the chain, the left-hand side is [formatted](javascript:call_link\('abenstring_templates_predef_format.htm'\)) differently and the values of both sides are different. The third comparison shows explicitly how the elementary operand is handled during the comparison with the chain. In contrast, the WHERE conditions [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) statements convert both sides to the numeric [comparison type](javascript:call_link\('abenlogexp_character.htm'\)) decfloat34. The output shows the difference between simple conversion and formatting as an embedded expression.

DATA decf TYPE decfloat34 VALUE '0.00000004'.
DATA itab LIKE TABLE OF decf.
APPEND decf TO itab.
ASSERT decf       =  CONV string( decf ).
ASSERT decf       <> CONV string( decf ) && \`\`.
ASSERT |{ decf }| <> CONV string( decf ) && \`\`.
LOOP AT itab TRANSPORTING NO FIELDS
             WHERE table\_line = CONV string( decf ).
ENDLOOP.
ASSERT sy-subrc = 0.
LOOP AT itab TRANSPORTING NO FIELDS
             WHERE table\_line = CONV string( decf ) && \`\`.
ENDLOOP.
ASSERT sy-subrc = 0.
cl\_demo\_output=>display(
  |CONV string( decf ):\\t{ CONV string( decf ) }\\n| &&
  |{ \`|{ decf }|\` }:\\t\\t{ decf }| ).