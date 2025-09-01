  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20String%20Expressions%20%28string_exp%29%2C%20ABAPCOMPUTE_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

String Expressions (string\_exp)

[Short Reference](javascript:call_link\('abenstring_exp_shortref.htm'\))

Syntax

... *{* [|string\_tmpl|](javascript:call_link\('abenstring_templates.htm'\)) *}*
  *|* *{* operand1 [&&](javascript:call_link\('abenstring_operators.htm'\)) operand2 *\[*[&&](javascript:call_link\('abenstring_operators.htm'\))  operand3 ... *\]* *}* ...

Effect

A string expression formulates an operation (calculation) with character-like operands. The result of a string expression is a character string. A string expression consists of

-   exactly one [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") [|string\_tmpl|](javascript:call_link\('abenstring_templates.htm'\)) or
-   two or more operands operand1, operand2 ... that are concatenated as a character string using the [string operator](javascript:call_link\('abenstring_operator_glosry.htm'\) "Glossary Entry") [&&](javascript:call_link\('abenstring_operators.htm'\)), where one of the operands can itself be a string template.

String expressions can occur in the read positions of [certain statements](javascript:call_link\('abenexpression_positions.htm'\)) and, in particular, on the right side of an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)).

The operands of string expressions must be elementary and convertible to [character-like data types](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry"). Structures with purely character-like flat components cannot, however, be specified.

If [constructor expressions](javascript:call_link\('abenconstructor_expressions.htm'\)) are specified as operands of string expressions, their data type is not determined by the string expression. The # character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Hints

-   String expressions and [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") cannot be mixed. Arithmetic expressions can, however, also be specified as [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) of [string templates](javascript:call_link\('abenstring_templates.htm'\)). Furthermore, the [formatting options](javascript:call_link\('abapcompute_string_format_options.htm'\)) of embedded expressions or [string functions](javascript:call_link\('abenstring_functions.htm'\)) in operand positions can contain arithmetic expressions as arguments.
-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be applied to a structure with character-like-only components to use it as an operand of a string expression.
-   Due to their special [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)), [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") can be used as operands of string expressions regardless of their base type, which can produce unwanted results. This is why an extended program check message can be produced in this case. A special rule for the conversion operator [CONV](javascript:call_link\('abenconv_constructor_enum.htm'\)) can be implemented to use the name of the enumerated object instead of the actual enumerated value.
-   If, on the right side of an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)), strings are appended to a variable specified with the type string on the left side of the assignment, the variable is used directly in [specific cases](javascript:call_link\('abenstring_expr_perfo.htm'\)) without producing an interim result. It should be ensured that this optimization is not undone, especially in loops.
-   The program DEMO\_EXPRESSIONS shows examples of how to use string expressions.

Example

Output of a string expression. The expression concatenates a text string literal with a string template that contains an embedded expression.

cl\_demo\_output=>display(
   \`Hello \` && |{ sy-uname }!|
   ).

Continue
[string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\))
[string\_exp - &&](javascript:call_link\('abenstring_operators.htm'\))
[string\_exp - Performance Note](javascript:call_link\('abenstring_expr_perfo.htm'\))