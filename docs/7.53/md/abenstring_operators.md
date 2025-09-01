---
title: "Syntax"
description: |
  ... operand1 && operand2 ... Effect The chaining operator && concatenates two operands in a string expression as a character string. The operand positions operand are enhanced character-like expression positions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_posit
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_operators.htm"
abapFile: "abenstring_operators.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "data", "types", "abenstring", "operators"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) → 

string\_exp - Character String Operator

One string operator is currently available for [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry").

Syntax

... operand1 && operand2 ...

Effect

The chaining operator && concatenates two operands in a string expression as a character string.

The operand positions operand are enhanced [character-like expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_positions.htm), which means that [character-like data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), or [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return code has a [character-like data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_data_type_glosry.htm "Glossary Entry"), can be specified. Furthermore, operands of non-character-like data types can be specified, which are convertible to the type string.

In the case of character-like operands with a fixed length, trailing blanks are ignored. All operands that do not have a character-like data type are converted to the type string before the chaining is performed.

Notes

-   In particular, [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) can be specified as operands.

-   [String functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_function_glosry.htm "Glossary Entry") with character-like return codes are the best choice when specifying built-in functions as operands.

-   The chaining operator && must not be confused with the [literal operator &](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_operator.htm), which joins two [character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_literal_glosry.htm "Glossary Entry") as a literal. The literal operator is generally used if a literal string template is to be defined across multiple program lines. The operator is executed only once, when the program is compiled and trailing blanks of character literals are always respected. A character string expression with a chaining operator, on the other hand, is recalculated each time (like all expressions) and can be used to concatenate any number of character-like operands.

-   If the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_string_expr.htm) appends strings using && to a variable specified with the type string on the left side of the assignment, the variable is used directly in [some cases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expr_perfo.htm) without producing a subtotal. Care must be taken to preserve this optimization, especially in loops.

Example

Concatenation of four operands as the character string "Hello world!". The last operand is a [string template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry") that has only literal content.

DATA text TYPE string VALUE \`Hello\`.
text  = text && \` \` &&  'world' && |!|.