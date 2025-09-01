  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Examples](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20shift%20and%20substring%2C%20ABENSTRING_FUNCTION_SHIFT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

string\_func - shift and substring

This example demonstrates the string functions [shift](javascript:call_link\('abenshift_functions.htm'\)) and [substring](javascript:call_link\('abensubstring_functions.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_shift\_substring DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_shift\_substring IMPLEMENTATION.
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
    out->write( output ).
  ENDMETHOD.
ENDCLASS.

Description   

This class creates a diamond shape in the display.