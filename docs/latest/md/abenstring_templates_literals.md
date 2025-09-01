  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20literal_text%2C%20ABENSTRING_TEMPLATES_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - literal\_text

Syntax

c...c

Effect

Within a string template |...|, a literal text c...c represents the exact character string it displays. Literal text consists of all characters in c that

-   are not enclosed in curly brackets { }
-   are not [control characters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrol_character_glosry.htm "Glossary Entry")
-   are not the special characters |, {, }, or \\.

In particular, blanks in string templates are always significant. To display a special character |, {, }, or \\ as a literal character, it can be prefixed with the escape character \\.

Hint

A standalone string template that contains nothing but literal text is not handled like a literal but evaluated as an expression during runtime, even if it is not part of an expression. For such operands, a [text string literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_string_literal_glosry.htm "Glossary Entry") with backquotes should be used instead, for performance reasons.

Example

The following string template creates the character string shown below it.

FINAL(txt) =
  |Characters \\|, \\{, and \\} have to be escaped by \\\\ in literal text.|.

Characters |, {, and } have to be escaped by \\ in literal text.