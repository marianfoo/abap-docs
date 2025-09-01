  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Processing Functions for Character-Like Arguments](javascript:call_link\('abenprocess_functions.htm'\)) → 

shift\_left, shift\_right - Shift Functions

The shift functions shift the content of a character-like argument.

Syntax Forms

1\. ... shift\_left( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))
                  *\[*places = places*\]**|**\[*circular = places*\]**|**\[* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*\]* ) ...

2\. ... shift\_right( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))
                   *\[*places = places*\]**|**\[*circular = places*\]**|**\[* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*\]* ) ...

Effect

The functions shift\_left and shift\_right shift the character string [text](javascript:call_link\('abenstring_functions_val.htm'\)) to the left or to the right and return the result. The shift depends on the parameter pass as follows:

-   If the argument places is given a number value, this many characters are removed on the left or right of the character string and the length of the character string is reduced accordingly. If the value of places is negative or longer than the character string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.

-   If the argument circular is given a number value, the functions work like places, but insert the substring again at the end or start of the character string.

-   If the argument sub is given a character string in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)), all substrings in the character string from text are removed on the left or right that match the content of substring. If no substrings are found or if substring is given an empty string, the character string remains unchanged.

-   If none of the arguments places, circular, or sub are specified, the functions work as if the sub argument has been passed a blank character. All blank characters on the left or right are removed. In this case, an explicit val= can also be omitted.

places and circular are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of type i.

The return code has the type string accordingly.

Note

When places is specified, the function shift\_right behaves differently from the statement SHIFT with the additions RIGHT and PLACES. The function shift\_right reduces the length of the string, but the statement SHIFT makes the string longer or keeps it the same length.

Example

The following program line

txt = shift\_right( txt ).

has the same meaning as

txt = shift\_right( val = txt sub = \` \` ).

and removes the trailing blanks from a string txt.

Executable Example

[String Functions, shift and substring](javascript:call_link\('abenstring_function_shift_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Invalid value in places.
    Runtime error: STRING\_LENGTH\_TOO\_LARGE or STRING\_LENGTH\_NEGATIVE