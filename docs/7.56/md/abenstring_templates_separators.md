  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) → 

string\_tmpl - control\_characters

Syntax

... \\n ... \\r ... \\t ...

Effect

String templates interpret the character combinations \\n, \\r, and \\t as control characters.

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
-   The control characters in string templates replace the use of some attributes of the class [CL\_ABAP\_CHAR\_UTILITIES](javascript:call_link\('abencl_abap_char_utilities.htm'\)).
-   The control characters have no effect on classical dynpros and [lists](javascript:call_link\('abenabap_dynpro_list.htm'\)). They appear in a list output as the # character. However, you can see the effect in the textedit control, for example.

Example

The following example generates in code the representation of the results of a string template with the three possible control characters in the code page UTF-8, namely 0A0D09. The hexadecimal values 0A, 0D, and 09 stand for line feed, return, and tabulator.

DATA(code) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( |\\n\\r\\t| ).

Example

The following example produces a three line output in the textedit control.

cl\_demo\_text=>display\_string( |1\\n2\\n3| ).

Executable Example

[String Templates, Control Characters](javascript:call_link\('abenstring_template_ctrlchar_abexa.htm'\))