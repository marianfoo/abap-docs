  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FIND, ABAPFIND, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improveme
nt:)

FIND

[Short Reference](javascript:call_link\('abapfind_shortref.htm'\))

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](javascript:call_link\('abapfind_pattern.htm'\))
  IN *\[*[section\_of](javascript:call_link\('abapfind_section_of.htm'\))*\]* dobj
  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
  *\[*[find\_options](javascript:call_link\('abapfind_options.htm'\))*\]*.

Additions:

[1\. ... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*](#!ABAP_ADDITION_2@2@)

Effect

The operand dobj is searched for the character or byte sequence determined by a search pattern [pattern](javascript:call_link\('abapfind_pattern.htm'\)).

The additions FIRST OCCURRENCE and ALL OCCURRENCES determine whether all occurrences or only the first one is searched. The addition [section\_of](javascript:call_link\('abapfind_section_of.htm'\)) can be used to restrict the search range. The search is terminated if the search pattern is found for the first time, all search patterns in the entire search range have been found, or if the end of the search range was reached. The search result is communicated by setting sy-subrc. The addition MODE determines whether a character or byte string is processed, and the addition [find\_options](javascript:call_link\('abapfind_options.htm'\)) provides additional options for controlling and evaluating the statement.

When a character string is processed, dobj is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") and the blanks are respected for dobj operands of a fixed length.

System Fields

sy-subrc

Meaning

0

The search pattern was found at least once in the search range.

4

The search pattern was not found in the search range.

Hints

-   The statement [FIND IN TABLE](javascript:call_link\('abapfind_itab.htm'\)) is available for searching in internal tables.
-   [Search functions](javascript:call_link\('abensearch_functions.htm'\)) can be used to search in a string in an operand position. They cover some of the functions of the statement FIND.
-   The statement FIND and the search functions can be quicker than the comparison operator [CS](javascript:call_link\('abenlogexp_strings.htm'\)) by some magnitude.

Example

The simplest form of the statement FIND.

FIND 'bcd' in 'abcde'.
ASSERT sy-subrc = 0.

Addition 1   

... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF

Effect

The optional addition *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF specifies whether all or only the first occurrence of the search pattern is searched. If the addition FIRST OCCURRENCE or none of the additions is specified, only the first occurrence is searched for. Otherwise, all occurrences are searched for.

If substring is an empty string in [pattern](javascript:call_link\('abapfind_pattern.htm'\)) or is of type c, n, d, or t and only contains blanks, the place in front of the first character or byte of the search range is found when searching for the first occurrence. In searches for all occurrences, the exception CX\_SY\_FIND\_INFINITE\_LOOP is raised in this case.

If regex in [pattern](javascript:call_link\('abenregex_syntax.htm'\)) contains a [regular expression](javascript:call_link\('abapfind_pattern.htm'\)) that matches the empty character string, the search for the first occurrence also finds the place in front of the first character. When searching for all occurrences in this case, the search finds the place in front of the first character, all interim places that are not within a match, and the place after the last character.

Example

All three occurrences of the letter a are searched for and found.

FIND ALL OCCURRENCES OF 'a' in 'ababa' MATCH COUNT FINAL(mcnt).
ASSERT mcnt = 3.

Addition 2   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](javascript:call_link\('abenstring_processing_statements.htm'\)) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and substring in [pattern](javascript:call_link\('abapfind_pattern.htm'\)) must be character-like or byte-like. If [regular expressions](javascript:call_link\('abenregex_syntax.htm'\)) are used in pattern, only character string processing is allowed.

Example

Search for the first byte that represents a blank space in the code page UTF-8.

FINAL(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( )->convert( \`a b c\` ).
FINAL(xspc) =
  cl\_abap\_conv\_codepage=>create\_out( )->convert( \` \` ).
FIND xspc IN xstr IN BYTE MODE MATCH OFFSET FINAL(moff).
ASSERT moff = 1.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_FIND\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: FIND\_INFINITE\_LOOP

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in the addition SECTION OF.
    Runtime error: REFI\_WRONG\_SECTION

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition PCRE*|*REGEX.
    Runtime error: INVALID\_REGEX

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](javascript:call_link\('abenregex_exceptions.htm'\)).
    Runtime error: REGEX\_TOO\_COMPLEX

Continue
[FIND, pattern](javascript:call_link\('abapfind_pattern.htm'\))
[FIND, section\_of](javascript:call_link\('abapfind_section_of.htm'\))
[FIND, options](javascript:call_link\('abapfind_options.htm'\))
![Example](exa.gif "Example") [Find a PCRE Regular Expression](javascript:call_link\('abenpcre_abexa.htm'\))