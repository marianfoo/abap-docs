---
title: "REPLACE pattern IN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_shortref.htm) Syntax REPLACE FIRST OCCURRENCE ALL OCCURRENCES OF pattern(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm) IN section_of(https://
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_in_pattern.htm"
abapFile: "abapreplace_in_pattern.htm"
keywords: ["insert", "loop", "do", "while", "if", "case", "try", "catch", "data", "internal-table", "abapreplace", "pattern"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_statements.htm) →  [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm) → 

REPLACE pattern IN

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_shortref.htm)

Syntax

REPLACE *\[**{*FIRST OCCURRENCE*}**|* *{*ALL OCCURRENCES*}* OF*\]* [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm)
        IN *\[*[section\_of](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_section_of.htm)*\]* dobj WITH new
        *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
        *\[*[replace\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_options.htm)*\]*.

Additions:

[1\. ... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF](#!ABAP_ADDITION_1@1@)
[2\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_2@2@)

Effect

In pattern-based replacements, the data object dobj is searched for the character or byte strings specified in [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm) and the occurrences are replaced by the content of the operand new. new is a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

If a regular expression is used in pattern, special [replacement patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_replace.htm) can be specified in new that allow a reference to the respective occurrence. It should be noted that, in regular replacement texts, the associated special characters $, &, \`, and ´ as well as the escape character \\ must be transformed to literal characters using the prefix \\.

The syntax and effect of the addition [section\_of](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind_section_of.htm) are the same as searching a data object for a substring using the statement [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm), and the same catchable exception can be raised. The addition MODE defines whether a character or byte string is processed, and the addition [replace\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_options.htm) provides additional options for controlling and evaluating the statement.

Hint

The statement [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_itab.htm) can be used to make replacements in internal tables.

Example

The result of the replacement is "$bcd$". While $1 in the replacement pattern represents the parenthesized subgroup bcd of the regular expression a(bcd)e, the two \\$ stand for the literal character "$".

DATA(str) = \`abcde\`.
REPLACE PCRE \`a(bcd)e\` IN str WITH \`\\$$1\\$\`.
cl\_demo\_output=>display( str ).

Addition 1   

... *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF

Effect

The optional addition *{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF specifies whether only the first occurrence or all occurrences of the search pattern are replaced by the content of new. If the addition FIRST OCCURRENCE or none of the additions are specified, the first occurrence is replaced. If ALL OCCURRENCES is used, all non-overlapping occurrences are replaced.

If substring is an empty string in [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm) or is of the type c, n, d, or t and only contains blanks, the place in front of the first character or byte of the search range is found when searching for the first occurrence, and the content of new is inserted in front of the first character or byte. When searching for all occurrences, the exception CX\_SY\_REPLACE\_INFINITE\_LOOP is raised in this case.

If regex contains a [regular expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_syntax.htm) in [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm) that matches the empty character string, the content of new is also inserted in front of the first character when searching for the first occurrence. When searching for all occurrences, the content of new is inserted in front of the first character in all spaces that are not in front of or inside a match, and after the last character.

Hint

If the addition ALL OCCURRENCES is used, no recursive processing takes place. This means that, if the statement finds further occurrences of the search pattern, they are not replaced automatically, since this could create endless loops.

Example

After the replacement, text contains the value "x-xx-x".

DATA text TYPE string VALUE '-uu-'.
REPLACE ALL OCCURRENCES OF PCRE 'u\*' IN text WITH 'x'.

Example

After the replacement, text still contains the substring "abcde" once.

DATA text TYPE string VALUE 'xxababcdcdxx'.
REPLACE ALL OCCURRENCES OF 'abcd' IN text WITH \`\`.

Addition 2   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj, new, and substring in [pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm) must be character-like or byte-like. If [regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_syntax.htm) are used in pattern, only character string processing is allowed.

Hint

For replacements with character-like content that contains trailing blanks, new must have the data type string.

Example

Replacement of all bytes that represent a hyphen in code page UTF-8 with bytes for an underscore.

DATA(xstr) = cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`a-b-c\` ).
REPLACE ALL OCCURRENCES OF CONV xstring( \`2D\` ) IN xstr
                      WITH CONV xstring( \`5F\` ) IN BYTE MODE.
cl\_demo\_output=>display(
  cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ).

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_REPLACE\_INFINITE\_LOOP

-   Cause: Substring of length 0 creates an endless loop when searching for all occurrences.
    Runtime error: REPLACE\_INFINITE\_LOOP

CX\_SY\_INVALID\_REGEX

-   Cause: Invalid expression after the addition PCRE*|*REGEX.
    Runtime error: INVALID\_REGEX

CX\_SY\_REGEX\_TOO\_COMPLEX

-   Cause: See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_exceptions.htm).
    Runtime error: REGEX\_TOO\_COMPLEX

CX\_SY\_INVALID\_REGEX\_FORMAT

-   Cause: Invalid [replacement pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_posix_replace.htm) after the addition WITH.
    Runtime error: INVALID\_FORMAT

Continue
[REPLACE, pattern](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_pattern.htm)
[REPLACE, options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace_options.htm)