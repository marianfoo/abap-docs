  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) → 

String Templates - literal\_text

Syntax

c...c

Effect

Within a string template |...|, a literal text c...c represents its exact character string. Literal text consists of all characters in c that

-   are not enclosed in curly brackets { }

-   are not control characters

-   are not the special characters |, {, }, or \\.

Blanks in string templates in particular are always significant. To display a special character |, {, }, or \\ as a literal character, it can be prefixed with the escape character \\.

Note

A standalone string template that contains nothing but literal text is not evaluated as an expression until runtime, even if it is not part of an expression. For such operands, a [text string literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_string_literal_glosry.htm "Glossary Entry") with backquotes should be used instead, for performance reasons.

Example

The following string template creates the character string shown below it.

DATA(txt) =
  |Characters \\|, \\{, and \\} have to be escaped by \\\\ in literal text.|.

Characters |, {, and } have to be escaped by \\ in literal text.