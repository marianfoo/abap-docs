  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [string\_exp - String Expressions](javascript:call_link\('abapcompute_string.htm'\)) → 

string\_exp - Character String Operator

One string operator is currently available for [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry").

Syntax

... operand1 && operand2 ...

Effect

The chaining operator && concatenates two operands in a string expression as a character string.

The operand positions operand are enhanced [character-like expression positions](javascript:call_link\('abenstring_expression_positions.htm'\)), which means that [character-like data objects](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"), [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return code has a [character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry"), can be specified. Furthermore, apart from built-in functions, generic expressions with non-character-like data types can be specified, which can be converted to the type string.

In the case of character-like operands with a fixed length, trailing blanks are ignored. An operand that does not have a character-like data type is regarded implicitly as an [embedded expression](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") of a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") and formatted as a text string before the chaining in accordance with the associated [predefined format](javascript:call_link\('abenstring_templates_predef_format.htm'\)).

Notes

-   In particular, [string templates](javascript:call_link\('abenstring_templates.htm'\)) can be specified as operands.

-   [String functions](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") with character-like return codes are the best choice when specifying built-in functions as operands.

-   The chaining operator && must not be confused with the [literal operator &](javascript:call_link\('abenliteral_operator.htm'\)), which joins two [character literals](javascript:call_link\('abencharacter_literal_glosry.htm'\) "Glossary Entry") as a literal. The literal operator is generally used if a literal string template is to be defined across multiple program lines. The operator is executed only once, when the program is compiled and trailing blanks of character literals are always respected. A character string expression with a chaining operator, on the other hand, is recalculated each time (like all expressions) and can be used to concatenate any number of character-like operands.

-   If the right side of an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) appends strings using && to a variable specified with the type string on the left side of the assignment, the variable is used directly in [some cases](javascript:call_link\('abenstring_expr_perfo.htm'\)) without producing a subtotal. Care must be taken to preserve this optimization, especially in loops.

-   It should be noted that the handling of non-character-like operands as [embedded expressions](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") can produce results different from simple [conversions](javascript:call_link\('abenconversion_elementary.htm'\)).

Example

Concatenation of four operands as the character string "Hello world!". The last operand is a [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") that has only literal content.

DATA text TYPE string VALUE \`Hello\`.
text  = text && \` \` &&  'world' && |!|.

Example

This example demonstrates that a non-character-like operand in a chaining is handled like an [embedded expression](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") and is not converted in accordance with the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)). After the handling, the minus character is placed on the left of the number as an embedded expression. After the conversion, it is placed on the right of the number.

ASSERT \`\` && -1
     = \`\` && |{ -1 }|.
ASSERT \`\` && -1
    <> \`\` && CONV string( -1 ).