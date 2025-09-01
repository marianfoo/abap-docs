  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Examples of String Functions](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

String Functions, escape for HTML

This example demonstrates the string function [escape](javascript:call_link\('abenescape_functions.htm'\)) for HTML.

Source Code

REPORT  demo\_escape\_html.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: body     TYPE string,
          esc\_body TYPE string.
    body = \`<table border> \`
        && \`<tr><td>11</td><td>12</td></tr> \`
        && \`<tr><td>21</td><td>22</td></tr> \`
        && \`</table>\`.
    esc\_body = escape( val    = body
                       format = cl\_abap\_format=>e\_html\_text ).
    cl\_demo\_output=>new(
      )->begin\_section( 'Original text'
      )->write\_text( body
      )->next\_section( 'Original text formatted as HTML'
      )->write\_html( body
      )->next\_section( 'Escaped text'
      )->write\_text( esc\_body
      )->next\_section( 'Escaped text formatted as HTML'
      )->write\_html( esc\_body
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program applies the function escape to a string used as the body of an HTML file. The string is displayed as a text and as an HTML file both before and after the function is executed.