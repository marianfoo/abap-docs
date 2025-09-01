  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - match

The match function returns a substring of a character-like argument that matches a regular expression.

Syntax

... match( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [pcre*|*regex = regex](javascript:call_link\('abenstring_functions_regex.htm'\)) *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

Effect

The match function searches [text](javascript:call_link\('abenstring_functions_val.htm'\)) for the match specified in [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) with the [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) and returns the substring found. The search is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).

-   If the argument regex is used, regex must contain a [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).

The return value has the type string.

Example

The following match function returns x2.

cl\_demo\_output=>display(
  match( val = 'x1 x2 x3' pcre = 'x.' occ = 2 ) ).

Executable Example

[String Functions, count, find and match](javascript:call_link\('abenstring_function_find_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Regular expression in regex is empty or there are 0 occurrences in occ.
    Runtime error: STRG\_ILLEGAL\_PAR