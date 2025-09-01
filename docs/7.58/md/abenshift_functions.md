  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20shift_left%2C%20shift_right%2C%20ABENSHIFT_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - shift\_left, shift\_right

The shift functions shift the content of a character-like argument.

Syntax

1\. ... shift\_left( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))
                  *\[*places = places*\]**|**\[*circular = places*\]**|**\[* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*\]* ) ...

2\. ... shift\_right( [*\[*val =*\]* text](javascript:call_link\('abenstring_functions_val.htm'\))
                   *\[*places = places*\]**|**\[*circular = places*\]**|**\[* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*\]* ) ...

Effect

The [built-in functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) shift\_left and shift\_right shift the character string [text](javascript:call_link\('abenstring_functions_val.htm'\)) to the left or to the right and return the result. The shift depends on the parameter pass as follows:

-   If the argument places is given a numeric value, the corresponding number of characters is removed on the left or right of the character string and the length of the character string is reduced accordingly. If the value of places is negative or longer than the character string, an exception of the class CX\_SY\_RANGE\_OUT\_OF\_BOUNDS is raised.
-   If the argument circular is given a numeric value, the functions behave like places, but insert the removed substring at the end or start of the character string.
-   If the argument sub is given a character string in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)), all substrings in the character string from text are removed on the left or right that match the content of substring. If no substrings are found or if substring is given an empty string, the character string remains unchanged.
-   If none of the arguments places, circular, or sub are specified, the functions behave as if the sub argument were passed a blank character. All blank characters to the left or right are removed. In this case, an explicit val can also be omitted.

places and circular are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of type i.

The return value has the type string.

Hint

When places is specified, the function shift\_right behaves differently than the statement SHIFT with the additions RIGHT and PLACES. The function shift\_right reduces the length of the string, but the statement SHIFT lengthens it or it remains the same.

Example

The following program line

txt = shift\_right( txt ).

has the same meaning as

txt = shift\_right( val = txt sub = \` \` ).

and removes the trailing blanks from a string txt.

Executable Example

[String Functions, shift and substring](javascript:call_link\('abenstring_function_shift_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Invalid value in places.
    Runtime error: STRING\_LENGTH\_TOO\_LARGE or STRING\_LENGTH\_NEGATIVE