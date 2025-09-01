  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

string\_tmpl - Specified Length

This example demonstrates how to specify a length for embedded expressions.

Source Code

REPORT demo\_string\_template\_width.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES result TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    cl\_demo\_output=>write(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( sy-abcde )
        ( |{ substring( val = sy-abcde len = j )
             WIDTH = j + 4 }<---| ) ) ).
    cl\_demo\_output=>display(
      VALUE result(
        FOR j = 1 UNTIL j > strlen( sy-abcde )
        ( |{ substring( val = sy-abcde len = j )
             WIDTH = strlen( sy-abcde ) / 2 } <---| ) ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Two [iteration expressions](javascript:call_link\('abenfor_conditional.htm'\)) perform the built-in function substring for the system field sy-abcde in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration constantly sets the length to half the length of the full string and is therefore ignored for longer substring accesses.