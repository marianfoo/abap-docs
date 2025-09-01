  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Description Functions for Character-Like Arguments](javascript:call_link\('abendescriptive_functions.htm'\)) → 

count, count\_... - Search Functions

Syntax Forms

1\. ... count( [val = text](javascript:call_link\('abenstring_functions_val.htm'\))  *{*[sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*}**|**{* [regex = regex](javascript:call_link\('abenstring_functions_regex.htm'\))*}* *\[*[case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]*
             *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* ) ...

2\. ... count\_any\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\))  [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                    *\[*[off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[* [len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* ) ...

3\. ... count\_any\_not\_of( [val = text](javascript:call_link\('abenstring_functions_val.htm'\))  [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))
                        *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* ) ...

Effect

Just like the search functions [find](javascript:call_link\('abensearch_functions.htm'\)) and [find\_...](javascript:call_link\('abensearch_functions.htm'\)), the search functions count and count\_... search [text](javascript:call_link\('abenstring_functions_val.htm'\)) in the entire string [text](javascript:call_link\('abenstring_functions_val.htm'\)) or in a subarea defined using [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) for characters specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) or for a match with a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)). Instead of an offset, they return the number of occurrences.

The return value has the type i.

Example

The result of the following function calls is 1, 3, and 6.

DATA(result1) = count(            val = \`xxx123yyy\` regex = \`\\d+\` ).
DATA(result2) = count\_any\_of(     val = \`xxx123yyy\` sub   = \`123\` ).
DATA(result3) = count\_any\_not\_of( val = \`xxx123yyy\` sub   = \`x\`   ).

Executable Example

[String functions, count, find, and match](javascript:call_link\('abenstring_function_find_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX
    

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty or occurrence in occ is 0.
    Runtime error: STRG\_ILLEGAL\_PAR