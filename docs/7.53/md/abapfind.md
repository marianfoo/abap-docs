  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) → 

FIND

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_shortref.htm)

Syntax

FIND *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
  IN *\[*[section\_of](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_section_of.htm)*\]* dobj
  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
  *\[*[find\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_options.htm)*\]*.

Extras:

[1\. ... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*](#!ABAP_ADDITION_2@2@)

Effect

The operand dobj is searched for the character or byte sequence specified by the search string [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm).

The additions FIRST OCCURRENCE and ALL OCCURRENCES determine whether all occurrences or only the first one is searched. The addition [section\_of](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_section_of.htm) can be used to restrict the search range. The search is terminated if the search pattern was found for the first time, or if all search patterns were found in the entire search area, or if the end of the search area was reached. The search result is communicated by setting sy-subrc. The addition MODE determines a character or byte string is processed, and the addition [find\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_options.htm) provides additional options for controlling and analyzing the statement.

When a character string is processed, dobj is a [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") and the blanks are respected for dobj operands of a fixed length.

System Fields

sy-subrc

Meaning

0

The search pattern was found at least once in the search range.

4

The search pattern was not found in the search range.

Notes

-   The statement [FIND IN TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm) is available for searching in internal tables.
    
-   [Search functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensearch_functions.htm) can be used to search in a string in an operand position. They mask some of the functions of the statement FIND.
    
-   The statement FIND and the search functions can be quicker than the relational operator [CS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_strings.htm) by some magnitude.
    

Example

The simplest form of the statement FIND.

FIND 'bcd' in 'abcde'.
ASSERT sy-subrc = 0.

Addition 1

... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF

Effect

The optional addition *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF defines whether all or only the first occurrence of the search pattern is searched. If the addition FIRST OCCURRENCE or none of the additions is specified, only the first occurrence is found. Otherwise, all occurrences are found.

If substring is an empty string in the [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm) or is of type c, n, d, or t and only contains blanks, the place in front of the first character or byte of the search range is found when searching for the first occurrence. If searching for all occurrences, in this case the exception CX\_SY\_FIND\_INFINITE\_LOOP is triggered.

If regex contains a [regular expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm) in the [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) that matches the empty character string, the search for the first occurrence also finds the place before the first character. When searching for all occurrences in this case, the search finds the place before the first character, all intermediate places that are not within a match, and the place after the last character.

Example

All three occurrences of the letter "a" are searched for and found.

FIND ALL OCCURRENCES OF 'a' in 'ababa' MATCH COUNT DATA(mcnt).
ASSERT mcnt = 3.

Addition 2

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and substring in [pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm) must be character-like or byte-like. If [regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) are used in pattern, only character string processing is permitted.

Example

Finds the first byte that represents a blank space in the code page UTF-8.

DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out( )->convert( \`a b c\` ).
DATA(xspc) =
  cl\_abap\_conv\_codepage=>create\_out( )->convert( \` \` ).
FIND xspc IN xstr IN BYTE MODE MATCH OFFSET DATA(moff).
ASSERT moff = 1.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_FIND\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: FIND\_INFINITE\_LOOP
    

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Illegal offset or length specified in the addition SECTION OF.
    Runtime error: REFI\_WRONG\_SECTION
    

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition REGEX.
    Runtime error: INVALID\_REGEX
    

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: More information: [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX
    

Continue
[FIND - pattern](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_pattern.htm)
[FIND - section\_of](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_section_of.htm)
[FIND - options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_options.htm)