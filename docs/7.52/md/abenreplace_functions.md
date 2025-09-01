  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Processing Functions for Character-Like Arguments](javascript:call_link\('abenprocess_functions.htm'\)) → 

replace - Replace Function

Syntax Forms

1\. ... replace( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]*
               with = new ) ...

2\. ... replace( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *{* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*}**|**{* [regex = regex](javascript:call_link\('abenstring_functions_regex.htm'\))*}*
               with = new *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

Effect

This function replaces a substring of [text](javascript:call_link\('abenstring_functions_val.htm'\)) with the character string specified in new and returns the changed text.

The substring is determined as follows:

-   The variant with the arguments [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) replaces the substring defined by the offset off and the length len. At least one of these additions must be defined.

-   The variant with the arguments sub or [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) scans the text for the occurrence specified in [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) for a match with the substring specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) or with a [regulären Ausdruck](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) and replaces the occurrence. If occ contains the value 0, all occurrences are replaced. If substring is empty, an exception from the class CX\_SY\_STRG\_PAR\_VAL is raised. The search is case-sensitive by default, but this can be overridden using the parameter case. If no substring is found, the unchanged content of text is returned.

new is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If they have a fixed length, trailing blanks are ignored.

The return code has the type string accordingly.

Notes

-   Borderline cases for the variants with the arguments off and len:

-   If only off is specified or if the value 0 is specified for len, replace works like [insert](javascript:call_link\('abeninsert_functions.htm'\)).

-   If only len is specified or if off has the value 0, the first segment of the length len is replaced.

-   If the value of off is equal to the length of text, the value of len must be equal to 0 or len is not specified. The character string new is then attached to the end of text.

-   If a regular expression is used with [regex](javascript:call_link\('abenstring_functions_regex.htm'\)), special [replacement models](javascript:call_link\('abenregex_replace.htm'\)) that allow references to particular occurrences can be specified in new. Note that, in regular replacement texts, the associated special characters $, &, \`, and ´ plus the escape character \\ must be transformed to literal characters using the prefix \\.

Example

The result of the following replacement is "<title>Th<b>i</b>s <b>i</b>s the <i> T<b>i</b>tle</i> </title>". In an HTML line, a particular letter is placed in format tags if it is not itself in a tag.

DATA(html) = \`<title>This is the <i>Title</i></title>\`.
DATA(repl)   = \`i\`.
html = replace( val   = html
                regex = repl && \`(?!\[^<>\]\*>)\`
                with  = \`<b>$0</b>\`
                occ   =   0 ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX
    

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty.
    Runtime error: STRG\_ILLEGAL\_PAR