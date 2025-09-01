---
title: "Syntax"
description: |
  ...  string_template(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm)    operand1 &&(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm) operand2 &&(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-U
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm"
abapFile: "abapcompute_string.htm"
keywords: ["loop", "do", "if", "case", "try", "data", "types", "abapcompute", "string"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) → 

string\_exp - String Expressions

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_exp_shortref.htm)

Syntax

... *{* [|string\_template|](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) *}*
  *|* *{* operand1 [&&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm) operand2 *\[*[&&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm)  operand3 ... *\]* *}* ...

Effect

A string expression formulates an operation (calculation) with character-like operands. The result of a string expression is a character string. A string expression consists of

-   precisely one [string template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry") [|string\_template|](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) or
    
-   two or more operands operand1, operand2 ..., concatenated as a character string using the [string operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operator_glosry.htm "Glossary Entry") [&&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm), where one of the operands can itself be a string template.
    

String expressions can occur in the reading positions of [certain statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm), in particular on the right side of an [assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_string_expr.htm) with the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm).

The operands of string expressions must have [character-like data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). Structures with character-like-only flat components cannot be specified.

If [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expressions.htm) are specified as operands of string expressions, their data type is not determined by the string expression. The # character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Notes

-   The program DEMO\_EXPRESSIONS shows examples of how to use string expressions.
    
-   String expressions and [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can not be mixed. Arithmetic expressions can, however, also be specified as [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_expressions.htm) of [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm). In addition, the [formatting options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm) of embedded expressions or [string functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) in operand positions can contain arithmetic expressions as arguments.
    
-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) can be applied to a structure with character-like-only components to use it as an operand of a string expression.
    
-   If the right side of an [assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_string_expr.htm) appends strings to a variable specified with the type string on the left side of the assignment, the variable is used directly in [specific cases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expr_perfo.htm) without producing a subtotal. Care must be taken to preserve this optimization, especially in loops.
    

Example

Displays a string expression. This is a chaining of a string literal with a string template that contains an embedded expression.

cl\_demo\_output=>display(
   \`Hello \` && |{ sy-uname }!|
   ).

Continue
[string\_exp - String Templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm)
[string\_exp - Character String Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm)
[string\_exp - Performance Note](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expr_perfo.htm)