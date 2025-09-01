  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Processing Functions for Character-Like Arguments](javascript:call_link\('abenprocess_functions.htm'\)) → 

reverse - Reverse Function

Syntax

... reverse( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))  ) ...

Effect

This function returns a character string that reverses the content of [text](javascript:call_link\('abenstring_functions_val.htm'\)).

The return code has the type string.

Example

Gets the Latin alphabet in reverse.

DATA(result) = reverse( sy-abcde ).