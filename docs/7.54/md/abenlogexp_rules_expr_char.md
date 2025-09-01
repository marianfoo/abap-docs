  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_expressions.htm) → 

rel\_exp - Comparison Type of String Expressions

[String expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry") can be used as operands in comparison expressions with the following:

-   [comparison operators for all data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_compare_all.htm)

-   [comparison operators for character-like data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_strings.htm)

It is possible to compare a [string expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry") with a single operand of any [elementary data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or with another string expression. With regard to the conversion of the elementary expression by string, two cases can be distinguished:

-   If a string expression is compared with an individual operand in a generic logical expression, the comparison type is string. The individual operand is implicitly regarded as an [embedded expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenembedded_expression_glosry.htm "Glossary Entry") of a [string template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry") and formatted as a text string before the comparison in accordance with the associated [predefined format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_predef_format.htm).

-   If a string expression on the right-hand side of a WHERE condition is used in a [processing statement for internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm), the comparison type results from the [combination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_character.htm) of string with the type on the left-hand side. Both sides are [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) to the comparison type as required.

Notes

-   A string expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

-   The result of the formatting of an individual operand differs from the result of a simple [conversion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) for some data types. An example is the type decfloat34.

-   The results of general logical expressions and logical expressions in WHERE conditions for internal tables may differ for comparisons with string expressions, since both the formatting and the comparison type play a role.

Example

This example demonstrates the effect of different comparison types. The first comparison is true, since the character-like operand is converted to the type of the numeric operand (in accordance with the rule for [comparing character-like data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_character.htm)) and the number value is compared. However, the second comparison is also true, since the numeric operand is formatted as a text string and the internal representation of the code page used is compared-

ASSERT \`02\` > 1.
ASSERT |02| < 1.

Example

The example demonstrates the effect of different formatting and different rules. All comparisons are true. An elementary operand of type decfloat34 is compared with a text string and a string expression. For the comparison with the text string, the left-hand side is also converted to the type string and the values of both sides are the same. For the comparison with the chain, the left-hand side is [formatted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_predef_format.htm) differently and the values of both sides are different. The third comparison shows explicitly how the elementary operand is handled during the comparison with the chain. In contrast, the WHERE conditions [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) statements convert both sides to the numeric [comparison type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_character.htm) decfloat34. The output shows the difference between simple conversion and formatting as an embedded expression.

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