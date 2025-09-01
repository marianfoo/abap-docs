  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) → 

string\_exp - String Expressions

[Quick Reference](javascript:call_link\('abenstring_exp_shortref.htm'\))

Syntax

... *{* [|string\_template|](javascript:call_link\('abenstring_templates.htm'\)) *}*
  *|* *{* operand1 [&&](javascript:call_link\('abenstring_operators.htm'\)) operand2 *\[*[&&](javascript:call_link\('abenstring_operators.htm'\))  operand3 ... *\]* *}* ...

Effect

A string expression formulates an operation (calculation) with character-like operands. The result of a string expression is a character string. A string expression consists of

-   precisely one [string template](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") [|string\_template|](javascript:call_link\('abenstring_templates.htm'\)) or
    
-   two or more operands operand1, operand2 ..., concatenated as a character string using the [string operator](javascript:call_link\('abenstring_operator_glosry.htm'\) "Glossary Entry") [&&](javascript:call_link\('abenstring_operators.htm'\)), where one of the operands can itself be a string template.
    

String expressions can occur in the reading positions of [certain statements](javascript:call_link\('abenexpression_positions.htm'\)), in particular on the right side of an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)).

The operands of string expressions must have [character-like data types](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry"). Structures with character-like-only flat components cannot be specified.

Notes

-   The program DEMO\_EXPRESSIONS shows examples of how to use string expressions.
    
-   String expressions and [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can not be mixed. Arithmetic expressions can, however, also be specified as [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) of [string templates](javascript:call_link\('abenstring_templates.htm'\)). In addition, the [formatting options](javascript:call_link\('abapcompute_string_format_options.htm'\)) of embedded expressions or [string functions](javascript:call_link\('abenstring_functions.htm'\)) in operand positions can contain arithmetic expressions as arguments.
    
-   The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be applied to a structure with character-like-only components to use it as an operand of a string expression.
    
-   If the right side of an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) appends strings to a variable specified with the type string on the left side of the assignment, the variable is used directly in [specific cases](javascript:call_link\('abenstring_expr_perfo.htm'\)) without producing a subtotal. Be careful to preserve this optimization, especially in loops.
    

Example

Outputting a character string expression. It is a chaining of a string literal with a string template that contains an embedded expression.

cl\_demo\_output=>display(
   \`Hello \` && |{ sy-uname }!|
   ).

Continue
[string\_exp - String Templates](javascript:call_link\('abenstring_templates.htm'\))
[string\_exp - String Operator](javascript:call_link\('abenstring_operators.htm'\))
[string\_exp - Performance Note](javascript:call_link\('abenstring_expr_perfo.htm'\))