  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - reverse

Syntax

... reverse( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))  ) ...

Effect

This function returns a character string that reverses the content of [text](javascript:call_link\('abenstring_functions_val.htm'\)).

The return value has the type string.

Example

Returns the Latin alphabet in reverse.

DATA(result) = reverse( sy-abcde ).