  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_tmpl - literal_text, ABENSTRING_TEMPLATES_LITERALS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_tmpl - literal\_text

Syntax

c...c

Effect

Within a string template |...|, a literal text c...c represents the exact character string it displays. Literal text consists of all characters in c that

-   are not enclosed in curly brackets { }
-   are not control characters
-   are not the special characters |, {, }, or \\.

In particular, blanks in string templates are always significant. To display a special character |, {, }, or \\ as a literal character, it can be prefixed with the escape character \\.

Hint

A standalone string template that contains nothing but literal text is not handled like a literal but evaluated as an expression during runtime, even if it is not part of an expression. For such operands, a [text string literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_string_literal_glosry.htm "Glossary Entry") with backquotes should be used instead, for performance reasons.

Example

The following string template creates the character string shown below it.

FINAL(txt) =
  |Characters \\|, \\{, and \\} have to be escaped by \\\\ in literal text.|.

Characters |, {, and } have to be escaped by \\ in literal text.