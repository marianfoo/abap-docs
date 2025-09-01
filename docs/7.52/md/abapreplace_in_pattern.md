  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [REPLACE](javascript:call_link\('abapreplace.htm'\)) → 

REPLACE pattern IN

[Quick Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

REPLACE *\[**{*FIRST OCCURRENCE*}**|* *{*ALL OCCURRENCES*}* OF*\]* [pattern](javascript:call_link\('abapreplace_pattern.htm'\))
        IN *\[*[section\_of](javascript:call_link\('abapfind_section_of.htm'\))*\]* dobj WITH new
        *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
        *\[*[replace\_options](javascript:call_link\('abapreplace_options.htm'\))*\]*.

Extras:

[1\. ... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF](#!ABAP_ADDITION_1@1@)
[2\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_2@2@)

Effect

When replacing by pattern, the data object dobj is scanned for the character or byte strings specified in [pattern](javascript:call_link\('abapreplace_pattern.htm'\)) and the occurrences are replaced by the content of the operand new. new is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

If a regular expression is used in pattern, special [replacement patterns](javascript:call_link\('abenregex_replace.htm'\)) can be used in new that permit a reference to each occurrence. Note that, in regular replacement texts, the associated special characters $, &, \`, and ´ plus the escape character \\ must be transformed to literal characters using the prefix \\.

The syntax and effect of the addition [section\_of](javascript:call_link\('abapfind_section_of.htm'\)) are the same as searching for a substring in a data object using the statement [FIND](javascript:call_link\('abapfind.htm'\)), and the same handleable exception can be raised. The addition MODE defines whether a character or byte string is processed, and the addition [replace\_options](javascript:call_link\('abapreplace_options.htm'\)) provides additional options for controlling and analyzing the statement.

Note

The statement [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)) can be used to make replacements in internal tables.

Example

The result of the replacement is "$bcd$". Whereas $1 in the replacement pattern represents the parenthesized subgroup bcd of the regular expression a(bcd)e, the two \\$ stand for the literal character "$".

DATA(str) = \`abcde\`.
REPLACE REGEX \`a(bcd)e\` IN str WITH \`\\$$1\\$\`.
cl\_demo\_output=>display( str ).

Addition 1

... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF

Effect

The optional addition *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF specifies whether only the first occurrence or all occurrences of the search pattern are replaced by the content of new. If the addition FIRST OCCURRENCE is specified or none of the additions are specified, the first occurrence is replaced. If ALL OCCURRENCES is used, all non-overlapping occurrences are replaced.

If substring is an empty string in [pattern](javascript:call_link\('abapreplace_pattern.htm'\)) or is of the type c, n, d, or t and only contains blanks, the place before the first character or byte of the search range is located when the first occurrence is being searched for, and the content of new is inserted in front of the first character or byte. If a search for all occurrences is taking place, the exception CX\_SY\_REPLACE\_INFINITE\_LOOP is raised in this case.

If regex contains a [regular expression](javascript:call_link\('abenregex_syntax.htm'\)) in the [pattern](javascript:call_link\('abapreplace_pattern.htm'\)), and this expression matches the empty character string, the content of new is also inserted before the first character when the first occurrence is being searched for. If all occurrences are being searched for, the content of new is inserted in front of the first character, in all spaces that do not come before or inside a match, and after the last character.

Note

If the addition ALL OCCURRENCES is used, no recursions take place. This means that, if the statement finds further occurrences of the search pattern, they are not replaced automatically, since this could create endless loops.

Example

After being replaced, text contains the value "x-xx-x".

DATA text TYPE string VALUE '-uu-'.
REPLACE ALL OCCURRENCES OF REGEX 'u\*' IN text WITH 'x'.

Example

After being replaced, text still contains the substring "abcde" once.

DATA text TYPE string VALUE 'xxababcdcdxx'.
REPLACE ALL OCCURRENCES OF 'abcd' IN text WITH \`\`.

Addition 2

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](javascript:call_link\('abenstring_processing_statements.htm'\)) is performed. If the addition is not specified, character string processing is carried out. Depending on the processing type, dobj, new, and substring in [pattern](javascript:call_link\('abapreplace_pattern.htm'\)) have to be character-like or byte-like. If [regular expressions](javascript:call_link\('abenregex_syntax.htm'\)) are used in pattern, only character string processing is permitted.

Note

For replacements by character-like content that contains trailing blanks, new has to have the data type string.

Example

Replacement of all bytes that represent a hyphen in code page UTF-8 with those for an underscore.

DATA(xstr) = cl\_abap\_codepage=>convert\_to( \`a-b-c\` ).
REPLACE ALL OCCURRENCES OF CONV xstring( \`2D\` ) IN xstr
                      WITH CONV xstring( \`5F\` ) IN BYTE MODE.
cl\_demo\_output=>display( cl\_abap\_codepage=>convert\_from( xstr ) ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_REPLACE\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: REPLACE\_INFINITE\_LOOP
    

CX\_SY\_INVALID\_REGEX

-   Cause: Illegal expression after the addition REGEX.
    Runtime error: INVALID\_REGEX
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX
    

CX\_SY\_INVALID\_REGEX\_FORMAT

-   Cause: Invalid [replacement pattern](javascript:call_link\('abenregex_replace.htm'\)) after the addition WITH.
    Runtime error: INVALID\_FORMAT
    

Continue
[REPLACE - pattern](javascript:call_link\('abapreplace_pattern.htm'\))
[REPLACE - options](javascript:call_link\('abapreplace_options.htm'\))