  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Examples](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

string\_func - shift and substring

This example demonstrates the string functions [shift](javascript:call_link\('abenshift_functions.htm'\)) and [substring](javascript:call_link\('abensubstring_functions.htm'\)).

Source Code

REPORT demo\_shift\_substring.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA output TYPE TABLE OF string.
    output = VALUE #(
      ( \`            oo            \` ) ).
    output = VALUE #(
      LET n = strlen( output\[ 1 \] ) IN
      BASE output
      FOR j = 2 UNTIL j > n / 2
      LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN
        ( shift\_left(  val = substring( val = r
                                        len = l )
                                        circular = 1 ) &&
          shift\_right( val = substring( val = r
                                        off = l )
                                        circular = 1 ) ) ).
    output = VALUE #(
      LET n = strlen( output\[ 1 \] ) IN
      BASE output
      FOR j = n / 2 + 1 UNTIL j > n - 1
      LET r = output\[ j - 1 \] l = strlen( r ) / 2 IN
        ( shift\_right( val = substring( val = r
                                        len = l )
                                        circular = 1 ) &&
          shift\_left(  val = substring( val = r
                                        off = l )
                                        circular = 1 ) ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program creates a diamond shape in the display.