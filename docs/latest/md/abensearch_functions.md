  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Description Functions](javascript:call_link\('abendescriptive_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20find%2C%20find_...%2C%20ABENSEARCH_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - find, find\_...

Syntax

1\. ... find( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *{* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*}**|**{* [pcre = regex](javascript:call_link\('abenstring_functions_regex.htm'\))*}* *\[*[case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
           *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

2\. ... find\_end( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *{* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*}**|**{* [pcre = regex](javascript:call_link\('abenstring_functions_regex.htm'\))*}* *\[*[case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
               *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

3\. ... find\_any\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                  *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

4\. ... find\_any\_not\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\))  [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                      *\[*[off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

Effect

The [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) search functions find and find\_... search [text](javascript:call_link\('abenstring_functions_val.htm'\)) for the characters specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) or for a match with a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)), where the optional parameters [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) determine the subarea to be searched and the occurrence of the match can be specified in the optional parameter [occ](javascript:call_link\('abenstring_functions_occ.htm'\)).

If the argument pcre is used, regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.

The return value has the type i and is filled as follows:

-   The function find searches for the exact substring specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) or for a match with the regular expression [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) and returns the offset of the occurrence with respect to the entire length of text. The search is case-sensitive by default, but this can be overridden using the parameter [case](javascript:call_link\('abenstring_functions_case.htm'\)). If substring is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised.
-   The function find\_end searches like find, but it returns the sum of the offset of the occurrence and the length of the found match with the regular expression.
-   The function find\_any\_of returns the offset of the occurrence of any character contained in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)), and is always case-sensitive. If substring is empty, the value -1 is returned.
-   The function find\_any\_not\_of returns the offset of the found occurrence of any character not in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)), and is always case-sensitive. If substring is empty, the value -1 is returned.

If a search is not successful, all functions return the value -1.

The optional parameters [off](javascript:call_link\('abenstring_functions_off_len.htm'\)), [len](javascript:call_link\('abenstring_functions_off_len.htm'\)), and [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) have the following meaning when combined:

-   If occ is positive, the subarea defined by off and len is searched from left to right.
-   If occ is negative, the subarea defined by off and len is searched from right to left.

The occurrence of the match specified by occ refers to the search range defined by off and len.

Hints

-   Using the related search functions [count](javascript:call_link\('abencount_functions.htm'\)) and [count\_...](javascript:call_link\('abencount_functions.htm'\)), it is possible to determine the total number of occurrences instead of an offset.
-   Like the statement [FIND](javascript:call_link\('abapfind.htm'\)), the search functions can be faster than the comparison operator [CS](javascript:call_link\('abenlogexp_strings.htm'\)) by some magnitude.
-   Besides pcre, also the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

Example

The result of the following function calls is 3, 6, 3, and 3.

FINAL(result1) = find(            val = \`xxx123yyy\` pcre = \`\\d+\` ).
FINAL(result2) = find\_end(        val = \`xxx123yyy\` pcre = \`\\d+\` ).
FINAL(result3) = find\_any\_of(     val = \`xxx123yyy\` sub  = \`123\` ).
FINAL(result4) = find\_any\_not\_of( val = \`xxx123yyy\` sub  = \`x\`   ).

Executable Example

[String Functions, find and substring](javascript:call_link\('abenstring_function_find_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty or occurrence in occ is 0.
    Runtime error: STRG\_ILLEGAL\_PAR