  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Examples](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20escape%20for%20HTML%2C%20ABENSTRING_FUNCTION_ESCAPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

string\_func - escape for HTML

This example demonstrates the string function [escape](javascript:call_link\('abenescape_functions.htm'\)) for HTML.

Source Code   

\* Public class definition
CLASS cl\_demo\_escape\_html DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_escape\_html IMPLEMENTATION.
  METHOD main.
    DATA: body     TYPE string,
          esc\_body TYPE string.
    body = \`<table border> \`
        && \`<tr><td>11</td><td>12</td></tr> \`
        && \`<tr><td>21</td><td>22</td></tr> \`
        && \`</table>\`.
    esc\_body = escape( val    = body
                       format = cl\_abap\_format=>e\_html\_text ).
    out->begin\_section( 'Original text'
      )->write\_text( body
      )->next\_section( 'Original text formatted as HTML'
      )->write\_html( body
      )->next\_section( 'Escaped text'
      )->write\_text( esc\_body
      )->next\_section( 'Escaped text formatted as HTML'
      )->write\_html( esc\_body ).
  ENDMETHOD.
ENDCLASS.

Description   

The class applies the function escape to a string used as the body of an HTML file. The string is displayed as a text and as an HTML file both before and after the function is executed.