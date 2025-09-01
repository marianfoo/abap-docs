  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_exp%20-%20String%20Templates%20%28string_tmpl%29%2C%20ABENSTRING_TEMPLATES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

string\_exp - String Templates (string\_tmpl)

Syntax

|*\[*[literal\_text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_literals.htm)*\]**\[* [embedded\_expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm)*\]**\[* [control\_characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_separators.htm)*\]*|

Effect

A string template is enclosed by two characters | and creates a character string that is used by the string expression at the operand position of the string template. The characters in this character string are determined by any sequence of the following syntax elements of the string template:

-   Literal text [literal\_text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_literals.htm)
-   Embedded expressions [embedded\_expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm)
-   Control characters [control\_characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_separators.htm)

A string template that starts with | must be closed with | within the same line of source code. The only exceptions to this rule are line breaks in [embedded expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm). However, a string template is not subject to any length restrictions. The [literal operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral_operator_glosry.htm "Glossary Entry") & or the [concatenation operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && can be used to combine multiple string templates into a single string template. A string template can be defined across multiple lines of source code and be given [comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomment_glosry.htm "Glossary Entry").

Hints

-   To display the delimiters | within [literal text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_literals.htm) of a string template, it must be prefixed with the escape symbol \\.
-   Using the string function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm), all special characters for string templates can be put in front of their escape character.
-   When string templates are combined, the literal operator [&](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral_operator.htm) behaves differently than with literals. This operator is executed at runtime in the same way as the concatenation operator [&&](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_operators.htm) and not just once during compilation. This means, however, that the restriction of 255 characters for literals no longer applies. The two combinations
    
    |...| &  |...|
    
    |...| && |...|
    
    are identical for string templates. For purely literal content, they are the same as
    
    \`...\` && \`...\`
    
    However, they are different to
    
    \`...\` &  \`...\`
    
    '...' &  '...'
    
    '...' && '...'
    
    In the first two cases, a length restriction of 255 characters applies. In the third case, trailing blanks are ignored.
    
-   If on the right side of an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_string_expr.htm), strings are appended to a variable specified with the type string on the left side of the assignment, the variable is used directly in [specific cases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expr_perfo.htm) without producing an interim result. It should be ensured that this optimization is not undone, especially in loops.
-   The delimiter characters | can be formatted in the ABAP Editor by choosing Fonts and Colors → Token operator to highlight them in the source code.

Example

String template with literal text and an embedded expression. The result is made up of the content of the literal text and the result of the embedded expression.

FINAL(result) = |Hello { sy-uname }!|.

Example

The following section of source code shows three identical string templates, all of which represent the character string Hello World!. The first string template contains the entire character string as literal text. The next two string expressions distribute the literal text across multiple parts of the string template and these are combined into the same character string using the literal operator & as in the first string template.

FINAL(result1) = |Hello World!|.
FINAL(result2) = |Hello| & | | & |World| & |!|.
FINAL(result3) = |Hello| & "sub template 1
                | |     &
                |World| & "sub template 3
\* sub template 4:
                |!|.

Continue
[string\_tmpl - literal\_text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_literals.htm)
[string\_tmpl - embedded\_expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm)
[string\_tmpl - control\_characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_separators.htm)
[string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_abexas.htm)