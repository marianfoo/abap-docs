  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - match

The match function returns a substring of a character-like argument that matches a regular expression.

Syntax

... match( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [pcre*|*xpath = regex](javascript:call_link\('abenstring_functions_regex.htm'\)) *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

Effect

The [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) match searches [text](javascript:call_link\('abenstring_functions_val.htm'\)) for the match specified in [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) with the [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) and returns the substring found. The search is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)).

-   If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)).
-   If the argument xpath is used, regex must contain a [XPath regular expression](javascript:call_link\('abenregex_xpath_syntax.htm'\)).

A regular expression in PCRE or XPath syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to specify whitespace and # characters in a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.

The return value has the type string.

Hint

Besides pcre and xpath, the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can also be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

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