  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - repeat

Syntax

... repeat( [val = text](javascript:call_link\('abenstring_functions_val.htm'\))  occ = occ ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) returns a character string that contains the content of [text](javascript:call_link\('abenstring_functions_val.htm'\)) as many times as specified in occ. If text is an empty string or if occ contains the value 0, an empty string is returned.

occ is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with type i. If the value of occ is negative, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.

The return value has the type string.

Hint

The parameter occ has a different meaning here than in functions used for searching.

Example

The function repeat is used to create a string with ten blanks.

DATA(result) = repeat( val = \` \` occ = 10 ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Occurrences in occ are less than 0.
    Runtime error: STRG\_ILLEGAL\_PAR