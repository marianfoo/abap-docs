---
title: "Syntax"
description: |
  literal_text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_literals.htm) embedded_expressions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm) control_characters(https://help.sap.com/doc/a
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm"
abapFile: "abenstring_templates.htm"
keywords: ["loop", "do", "if", "case", "try", "data", "abenstring", "templates"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) → 

string\_exp - String Templates

Syntax

|*\[*[literal\_text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_literals.htm)*\]**\[* [embedded\_expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm)*\]**\[* [control\_characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_separators.htm)*\]*|

Effect

A string template is enclosed by two characters "|" and creates a character string that is used by the string expression instead of the string templates. The characters of this character string consist of any sequence of the following syntax elements of the string template:

-   Literal text [literal\_text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_literals.htm)

-   Embedded expressions [embedded\_expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm)

-   Control characters [control\_characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_separators.htm)

A string template that starts with "|" must be closed with "|" within the same line of source code. The only exceptions to this rule are line breaks in [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm). There are, however, no length restrictions on a string template. The [literal operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_operator_glosry.htm "Glossary Entry") & or the [chaining operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && can be used to join multiple string templates in a single string template. A string template can be defined across multiple lines of source code and be given [comments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomment_glosry.htm "Glossary Entry").

Notes

-   To display the delimiters "|" in [literal text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_literals.htm) in a string template, you must prefix them with the escape symbol \\.

-   The delimiter characters "|” can be formatted in the ABAP Editor by choosing Fonts and Colors → Token operator to highlight them in the source code.

-   Using the character string function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm), all special characters for character string templates can be put in front of their escape character.

-   When string templates are joined, the literal operator [&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_operator.htm) behaves differently than with literals. This operator is executed at runtime (like the chaining operator [&&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm)) and not during compilation as a one-off process. This means the restriction of 255 characters for literals no longer applies. The two joins

|...| &  |...|

|...| && |...|

are identical for string templates. For literal-only content, they are the same as

\`...\` && \`...\`

However they are different to

\`...\` &  \`...\`

'...' &  '...'

'...' && '...'

In the first two cases, a length restriction of 255 characters applies. In the third case, trailing blanks are ignored.

-   If the right side of an [assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_string_expr.htm) appends strings using string templates to a variable specified with the type string on the left side of the assignment, the variable is used directly in [some cases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expr_perfo.htm) without producing a subtotal. Care must be taken to preserve this optimization, especially in loops.

Example

String template with literal text and an embedded expression. The result is made up of the content of the literal text and the result of the embedded expression.

DATA(result) = |Hello { sy-uname }!|.

Example

The following piece of source code shows three similar string templates that all display the character string "Hello World!". The first string template contains the entire character string as literal text. The next two string expressions distribute the literal text across multiple parts of the string template. The literal operator & is used to join them as the first string template.

DATA(result1) = |Hello World!|.
DATA(result2) = |Hello| & | | & |World| & |!|.
DATA(result3) = |Hello| & "sub template 1
                | |     &
                |World| & "sub template 3
\* sub template 4:
                |!|.

Continue
[String Templates - literal\_text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_literals.htm)
[String Templates - embedded\_expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm)
[String Templates - control\_characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_separators.htm)
[Examples of string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_abexas.htm)