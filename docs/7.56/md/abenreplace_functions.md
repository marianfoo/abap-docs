  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - replace

Syntax Forms

1\. ... replace( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *\[* [off = off](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]* *\[*[len = len](javascript:call_link\('abenstring_functions_off_len.htm'\))*\]*
               with = new ) ...

2\. ... replace( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) *{* [sub = substring](javascript:call_link\('abenstring_functions_sub.htm'\))*}**|**{* [pcre = regex](javascript:call_link\('abenstring_functions_regex.htm'\))*}*
               with = new *\[* [case = case](javascript:call_link\('abenstring_functions_case.htm'\))*\]* *\[*[occ = occ](javascript:call_link\('abenstring_functions_occ.htm'\))*\]* ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) replaces a substring of [text](javascript:call_link\('abenstring_functions_val.htm'\)) with the character string specified in new and returns the changed text.

The substring is determined as follows:

-   The variant with the arguments [off](javascript:call_link\('abenstring_functions_off_len.htm'\)) and [len](javascript:call_link\('abenstring_functions_off_len.htm'\)) replaces the substring determined by the offset off and the length len. At least one of these additions must be defined.
-   The variant with the arguments sub or [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) searches the text for the occurrence specified in [occ](javascript:call_link\('abenstring_functions_occ.htm'\)) for a match with the substring specified in [substring](javascript:call_link\('abenstring_functions_sub.htm'\)) or with a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) specified in [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) and replaces the occurrence.
    
    regex must contain a [PCRE regular expression](javascript:call_link\('abenregex_pcre_syntax.htm'\)). A regular expression in PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.
    
    If occ contains the value 0, all occurrences are replaced. If substring is empty, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised. The search is case-sensitive by default, but this can be overridden using the parameter case. If no substring is found, the unchanged content of text is returned.
    

new is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). If this has a fixed length, trailing blanks are ignored.

The return value has the type string.

Hints

-   Borderline cases for the variants with the arguments off and len:
    -   If only off is specified or if the value 0 is specified for len, replace works like the [insert](javascript:call_link\('abeninsert_functions.htm'\)) function.
    -   If only len is specified or if off has the value 0, the first segment of the length len is replaced.
    -   If the value of off is equal to the length of text, the value of len must be equal to 0 or len is not specified. The character string new is then appended to the end of text.
-   If a regular expression is used with [regex](javascript:call_link\('abenstring_functions_regex.htm'\)), special [replacement patterns](javascript:call_link\('abenregex_posix_replace.htm'\)) that allow references to the respective occurrences can be specified in new. It should be noted that in regular replacement texts, the associated special characters $, &, \`, and ´ as well as the escape character \\ must be transformed to literal characters using the prefix \\.
-   Besides pcre, also the obsolete argument [regex](javascript:call_link\('abenstring_functions_regex_obs.htm'\)) can be used. Then an obsolete [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)) must be passed.

Example

The result of the following replacement is

aa\_XX\_cc

The substring "bb" starting at offset 3 having a length of 2 is replaced with "XX".

DATA(text) = \`aa-bb-cc\`.
cl\_demo\_output=>write( text ).
text = replace( val = text off = 3 len = 2 with = \`XX\` ).
cl\_demo\_output=>write( text ).
cl\_demo\_output=>display( ).

Example

The result of the following replacements are

aa\_bb\_cc

and

aabbcc

First, all occurrences (occ = 0) of substring "-" are replaced with "\_", then these are replaced by an empty string, hence removed.

DATA(text) = \`aa-bb-cc\`.
cl\_demo\_output=>write( text ).
text = replace( val = text sub = \`-\` with = \`\_\`  occ = 0 ).
cl\_demo\_output=>write( text ).
text = replace( val = text sub = \`\_\` with = \`\`  occ = 0 ).
cl\_demo\_output=>write( text ).
cl\_demo\_output=>display( ).

Example

The result of the following replacement is

<title>Th<b>i</b>s <b>i</b>s the <i>T<b>i</b>tle</i></title>.

In an HTML line, a particular letter is surrounded by format tags if it is not within a tag itself.

DATA(html) = \`<title>This is the <i>Title</i></title>\`.
DATA(repl)   = \`i\`.
html = replace( val  = html
                pcre = repl && \`(?!\[^<>\]\*>)\`
                with = \`<b>$0</b>\`
                occ  =   0 ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in off and len.
    Runtime error: STRING\_OFFSET\_TOO\_LARGE

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Substring in sub or regular expression in regex is empty.
    Runtime error: STRG\_ILLEGAL\_PAR