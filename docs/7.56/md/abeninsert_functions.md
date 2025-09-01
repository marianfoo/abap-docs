  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - insert

Syntax

... insert( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\)) *\[*[off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) inserts the character string specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) into the string specified in [text](javascript:call_link\('abenstring_functions_val.htm'\)), either before the first character or at the optional offset specified [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and returns the corresponding extended result. If substring is empty, the unchanged content of text is returned.

The return value has the type string.

Example

After the following iteration has been executed, the result is in result "X X X X X".

DATA(result) = \`XXXXX\`.
result =
  REDUCE #( INIT r = result
            FOR j = 1 UNTIL j > strlen( result ) - 1
            NEXT r = insert( val = r sub = \` \` off = j \* 2 - 1 ) ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Invalid offset specified in places.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE