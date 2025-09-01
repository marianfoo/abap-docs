  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20control_characters%2C%20ABENSTRING_TEMPLATES_SEPARATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - control\_characters

Syntax

... \\n ... \\r ... \\t ...

Effect

String templates interpret the character combinations \\n, \\r, and \\t as [control characters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_character_glosry.htm "Glossary Entry").

Control Character

Meaning

Hexadecimal value (UTF-8)

\\n

Line feed

0A

\\r

Return

0D

\\t

Tabulator

09

In place of a control character, its hexadecimal value according to the current code page is inserted into the character string created by the string template.

Hints

-   If a control character is to be included as literal text, its special meaning can be removed by prefixing it with the escape character \\.
-   The control characters in string templates replace the use of some attributes of the class [CL\_ABAP\_CHAR\_UTILITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_char_utilities.htm).
-   The control characters have no effect on classical dynpros and [lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm). They appear in a list output as the # character. However, you can see the effect in the textedit control, for example.

Example

The following example generates in code the representation of the results of a string template with the three possible control characters in the code page UTF-8, namely 0A0D09. The hexadecimal values 0A, 0D, and 09 stand for line feed, return, and tabulator.

FINAL(code) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( |\\n\\r\\t| ).

Example

The following example produces a three line output in the textedit control.

cl\_demo\_text=>display\_string( |1\\n2\\n3| ).

Executable Example

[String Templates, Control Characters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_ctrlchar_abexa.htm)