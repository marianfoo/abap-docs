  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregular_expressions.htm) → 

regex - Searching, Replacing, Matching

Regular expressions can be used to find and replace substrings of character strings or to check if a complete character string matches its pattern. If a regular expression is applied to a character string as a search pattern, a search for matches of the regular expression with substrings of the character string is intended. In this case, special characters in the regular expression do not match characters, but match positions, thus affecting the type and number of occurrences. If a regular expression is applied to a character string as a search pattern, it is checked whether the character string matches a pattern.

-   [Searching](#@@ITOC@@ABENREGEX_MTCH_1)

-   [Replacing](#@@ITOC@@ABENREGEX_MTCH_2)

-   [Matching](#@@ITOC@@ABENREGEX_MTCH_3)

Searching

In order to search for substrings that match a pattern described by a regular expression you can use the following:

-   Statement [FIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind.htm) with the addition [PCRE*|*REGEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_pattern.htm).

-   Built-in functions with the argument [pcre*|*regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm):

-   [find, find\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm)

-   [count, count\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencount_functions.htm)

-   [match](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmatch_functions.htm)

-   [substring, substring\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm)

-   [contains...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontains_functions.htm)

-   Methods of [system class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_system_classes.htm) CL\_ABAP\_MATCHER.

Example

Demonstration of different possibilities for searching substrings that match a regular expression.

DATA(text)  = \`aaa-bbb-ccc\`.
DATA(regex) = \`\\W\`.
IF contains( val = text pcre = regex ).
  FIND ALL OCCURRENCES OF PCRE regex IN text MATCH COUNT  DATA(cnt)
                                             MATCH LENGTH DATA(len).
  DATA(off) = find( val = text pcre = regex occ = cnt ).
  ASSERT count( val = text pcre = regex ) = cnt.
  DATA(sub) = substring\_from( val = text pcre = regex len = len  ).
  cl\_demo\_output=>display(
    |{ cnt } occurrences found.\\n| &&
    |The offset of the last occurrence is { off }.\\n| &&
    |The first substring that matches is { sub }.| ).
ENDIF.

Replacing

In order to replace substrings that match a pattern described by a regular expression, the following can be used:

-   Statement [REPLACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace.htm) with the addition [PCRE*|*REGEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace_pattern.htm).

-   Built-in function [replace](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreplace_functions.htm) with the argument [pcre*|*regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm).

-   Methods of the [system class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_system_classes.htm) CL\_ABAP\_MATCHER.

Example

Demonstration of different possibilities for replacing substrings that match a regular expression.

DATA(text)  = \`aaa-bbb-ccc\`.
DATA(regex) = \`\\W\`.
REPLACE FIRST OCCURRENCE OF PCRE regex IN text WITH '\_'.
cl\_demo\_output=>display(
  replace( val = text pcre = regex with = \`~\` ) ).

Matching

In order to check if a complete character string matches a regular expression, the following can be used:

-   Built-in function [matches](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmatches_functions.htm) with the argument [pcre*|*regex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions_regex.htm).

-   Methods of [system class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_system_classes.htm) CL\_ABAP\_MATCHER.

Example

Demonstration of different possibilities for matching strings with a regular expression.

DATA(text)  = \`aaa-bbb-ccc\`.
DATA(regex) = \`\\w+\\W\\w+\\W\\w+\`.
IF cl\_abap\_regex=>create\_pcre( pattern = regex
     )->create\_matcher( text = text )->match( ).
  ASSERT matches( val = text pcre = regex ).
  cl\_demo\_output=>display( 'match' ).
ENDIF.