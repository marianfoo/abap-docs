  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [string\_exp - String Expressions](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates](javascript:call_link\('abenstring_templates.htm'\)) →  [Examples of string templates](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

String Templates, Length

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

Two [iteration expressions](javascript:call_link\('abenfor_conditional.htm'\)) loops perform the built-in function substring for the system field sy-abcde in an embedded expression of a string template. The first iteration calculates the length from the length of the substring plus a fixed value. The second iteration sets the length (constantly) as half the length of the full string and is ignored for longer substring accesses.