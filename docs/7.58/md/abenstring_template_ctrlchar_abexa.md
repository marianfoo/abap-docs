  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Control%20Characters%2C%20ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

string\_tmpl - Control Characters

The example demonstrates the formatting of a text using [control characters](javascript:call_link\('abencontrol_character_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_ctrl\_char DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_ctrl\_char IMPLEMENTATION.
  METHOD main.
    out->write(
      |First line.\\r\\ttab\\ttab\\ttab\\n\\ttab\\ttab\\ttab\\rLast line.| ).
  ENDMETHOD.
ENDCLASS.

Description   

A string template with literal text and control character is output using the class CL\_DEMO\_OUTPUT. The text output is formatted with line feeds and tabulators.

Hint

Note that the output shown here is not a direct display of the character string but an HTML representation displayed in a browser. In the HTML representation, the control characters are replaced by normal characters suitable for HTML.