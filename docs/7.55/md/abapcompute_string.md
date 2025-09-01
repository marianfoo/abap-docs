---
title: "Syntax"
description: |
  ...  string_tmpl(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm)    operand1 &&(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operators.htm) operand2 &&(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/ab
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm"
abapFile: "abapcompute_string.htm"
keywords: ["loop", "do", "if", "case", "try", "data", "types", "abapcompute", "string"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) → 

String Expressions (string\_exp)

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_exp_shortref.htm)

Syntax

... *{* [|string\_tmpl|](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm) *}*
  *|* *{* operand1 [&&](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operators.htm) operand2 *\[*[&&](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operators.htm)  operand3 ... *\]* *}* ...

Effect

A string expression formulates an operation (calculation) with character-like operands. The result of a string expression is a character string. A string expression consists of

-   exactly one [string template](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_glosry.htm "Glossary Entry") [|string\_tmpl|](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm) or
    

-   two or more operands operand1, operand2 ... that are concatenated as a character string using the [string operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operator_glosry.htm "Glossary Entry") [&&](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operators.htm), where one of the operands can itself be a string template.

String expressions can occur in the read positions of [certain statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions.htm) and, in particular, on the right side of an [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm) with the [assignment operator \=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm).

The operands of string expressions must be elementary and convertible to [character-like data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"). Structures with purely character-like flat components cannot, however, be specified.

If [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm) are specified as operands of string expressions, their data type is not determined by the string expression. The # character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Hints

-   The program DEMO\_EXPRESSIONS shows examples of how to use string expressions.

-   String expressions and [arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") cannot be mixed. Arithmetic expressions can, however, also be specified as [embedded expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates_expressions.htm) of [string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm). Furthermore, the [formatting options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string_format_options.htm) of embedded expressions or [string functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) in operand positions can contain arithmetic expressions as arguments.

-   The conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm) can be applied to a structure with character-like-only components to use it as an operand of a string expression.

-   Due to their special [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_enumerated.htm), [enumerated objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_object_glosry.htm "Glossary Entry") can be used as operands of string expressions regardless of their base type, which can produce unwanted results. This is why an extended program check message can be produced in this case. A special rule for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm) can be implemented to use the name of the enumerated object instead of the actual enumerated value.

-   If, on the right side of an [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm), strings are appended to a variable specified with the type string on the left side of the assignment, the variable is used directly in [specific cases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_expr_perfo.htm) without producing an interim result. It should be ensured that this optimization is not undone, especially in loops.

Example

Output of a string expression. The expression concatenates a string literal with a string template that contains an embedded expression.

cl\_demo\_output=>display(
   \`Hello \` && |{ sy-uname }!|
   ).

Continue
[string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm)
[string\_exp - &&](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_operators.htm)
[string\_exp - Performance Note](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_expr_perfo.htm)