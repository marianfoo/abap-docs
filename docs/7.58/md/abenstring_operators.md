  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_exp%20-%20%26%26%2C%20ABENSTRING_OPERATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_exp - &&

Syntax

... operand1 && operand2 ...

Effect

The [concatenation operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && concatenates two operands in a string expression into one character string.

The operand positions operand are enhanced [character-like expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_positions.htm), which means that [character-like data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), or [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [character-like data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"), can be specified. Furthermore, apart from built-in functions, generic expressions with non-character-like data types can also be specified, which can be converted to the type string. The operand operand must be elementary. Structures with character-like-only flat components cannot be specified.

In the case of character-like operands with a fixed length, trailing blanks are ignored. An operand that does not have a character-like data type is regarded implicitly as an [embedded expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenembedded_expression_glosry.htm "Glossary Entry") of a [string template](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_glosry.htm "Glossary Entry") and formatted as a text string before the concatenation in accordance with the associated [predefined format](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_predef_format.htm).

Hints

-   In particular, [string templates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) can be specified as operands.
-   [String functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_function_glosry.htm "Glossary Entry") with character-like return values are particularly suitable when specifying built-in functions as operands.
-   The concatenation operator && must not be confused with the [literal operator &](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenliteral_operator.htm), which combines two [character literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_literal_glosry.htm "Glossary Entry") to one literal. The literal operator is generally used if a literal is to be defined across multiple program lines. The operator is executed only once when the program is compiled, and trailing blanks of character literals are always respected. A string expression with a concatenation operator, on the other hand, is recalculated each time, like all expressions, and can be used to concatenate any number of character-like operands.
-   If on the right side of an [assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenequals_string_expr.htm), strings are appended using && to a variable specified with the type string on the left side of the assignment, the variable is used directly in [some cases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expr_perfo.htm) without producing an interim result. It should be ensured that this optimization is preserved, especially in loops.
-   It should be noted that the handling of non-character-like operands as [embedded expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenembedded_expression_glosry.htm "Glossary Entry") can have different results than simple [conversions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm).
-   A calculation assignment with the operator [&&=](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignment_string.htm) can be used as a short form for assignments of concatenations.

Example

Concatenation of four operands into the character string Hello world!. The last operand is a [string template](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_glosry.htm "Glossary Entry") that has only literal content.

DATA text TYPE string VALUE \`Hello\`.
text  = text && \` \` &&  'world' && |!|.

Example

This example demonstrates that a non-character-like operand in a concatenation is handled like an [embedded expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenembedded_expression_glosry.htm "Glossary Entry") and is not converted in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm). After handling as an embedded expression, the minus sign is placed to the left of the number. After the conversion, it is placed to the right of the number.

ASSERT \`\` && -1
     = \`\` && |{ -1 }|.
ASSERT \`\` && -1
    <> \`\` && CONV string( -1 ).

Continue
[&&=, Calculation Assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_assignment_string.htm)