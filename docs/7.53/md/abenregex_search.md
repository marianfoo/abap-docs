  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) →  [Syntax of Regular Expressions](javascript:call_link\('abenregex_syntax.htm'\)) → 

Search Patterns

One of the principle uses of regular expressions is the search for (and subsequent [replacement of](javascript:call_link\('abenregex_replace.htm'\))) substrings in character strings. In general, a user is interested in a specific selection of character strings that match a regular expression. In ABAP, searches using regular expressions are implemented using the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) of the statement [FIND](javascript:call_link\('abapfind.htm'\)) or one of the [search functions](javascript:call_link\('abensearch_function_glosry.htm'\) "Glossary Entry"). Here, the found substrings are determined with no overlaps in accordance with the leftmost-longest rule.

-   [Leftmost-longest rule](#@@ITOC@@ABENREGEX_SEARCH_1)

-   [Operators for Search Patterns](#@@ITOC@@ABENREGEX_SEARCH_2)

-   [Start and End of a Line](#@@ITOC@@ABENREGEX_SEARCH_3)

-   [Start and End of a Character String](#@@ITOC@@ABENREGEX_SEARCH_4)

-   [Start and End of a Word](#@@ITOC@@ABENREGEX_SEARCH_5)

-   [Preview Conditions](#@@ITOC@@ABENREGEX_SEARCH_6)

-   [Cut Operator](#@@ITOC@@ABENREGEX_SEARCH_7)

Leftmost-longest rule

First, the substring furthest to the left in the character string, which matches the regular expression ("leftmost"), is identified. If there are multiple substrings, the longest sequence is chosen (longest). This procedure is then repeated for the remaining sequence after the occurrence.

Example

For the regular expression d\*od\*, five substrings are found in doobedoddoo: "do" at offset 0, "o" at offset 2, "dodd" at offset 5, "o" at offset 9, and "o" at offset 10.

DATA result\_tab TYPE match\_result\_tab.
FIND ALL OCCURRENCES OF regex 'd\*od\*' IN 'doobedoddoo'
                     RESULTS result\_tab.

Operators for Search Patterns

The following operators support searches in character strings. These operators are made up of the special characters ^, $, \\, <, \>, (, ), \=, and !. The special characters can be made into literal characters using the prefix \\.

Start and End of a Line

The operator ^ works like an anchor character for the offset before the first character in a line. The operator $ works like an anchor character for the offset after the last character in a line.

Character-like data objects have at least a start and end of line, defined as follows:

-   In a text field of the type c and the other character-like data objects with fixed lengths, a line starts before the first character and ends after the defined length.

-   In a string of the type string, a line starts before the first character and ends after its current length.

If a character-like data object contains control characters for a line break or a return, other line starts and line ends are possible:

-   A line end is placed before each control character for a line break or a return.

-   A line start is placed behind each control character for a line break or a return.

Note

Within ABAP programs, control characters generally only occur when externally generated data records are imported or if the characters are specified explicitly in [character string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

Example

The character string in text contains two [control characters](javascript:call_link\('abenstring_templates_separators.htm'\)) for line breaks, inserted using a character string template. The first search finds three starts of lines with the offsets 0, 6, and 12. The second search finds three ends of lines with the offsets 5, 11, and 17.

DATA TEXT type STRING.
DATA result\_tab TYPE match\_result\_tab.
text = |Line1\\nLine2\\nLine3|.
FIND ALL OCCURRENCES OF REGEX '^'
     IN text RESULTS result\_tab.
FIND ALL OCCURRENCES OF REGEX '$'
     IN text RESULTS result\_tab.

Start and End of a Character String

The operators \\A and \\z are used as anchor characters for the offset in front of the first character in a character string and the offset behind the last character of a character string. This means that the operator \\A always finds the offset 0. In a string of type string, \\z finds the offset behind the last character. In text fields of type c, trailing blanks are respected, which means that \\z always finds the offset behind the defined length.

As well as \\z, there is another operator \\Z for the end of a character string. The operator \\Z works like \\z, except that all line breaks at the end of the character string are ignored.

Note

If a character string does not contain any control characters, the operators ^, $ and \\A, \\z, \\Z behave in the same way.

Example

The following search finds "Smile" at the start of the first row and at the end of the last row of the internal table text\_tab. If the row type were string instead of c, the search would find "Smile" at the end of every row.

DATA text(10) TYPE c.
DATA text\_tab LIKE TABLE OF text.
DATA result\_tab TYPE match\_result\_tab.
APPEND '     Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
FIND ALL OCCURRENCES OF regex '\\A(?:Smile)|(?:Smile)\\z'
     IN TABLE text\_tab RESULTS result\_tab.

Example

The following searches illustrate the difference between \\z and \\Z. The first search is not successful because there are line breaks between the text in question and the end of the character string. These are ignored in the second search.

DATA text TYPE string.
text = |... this is the end\\n\\n\\n|.
FIND  REGEX 'end\\z' IN text.
IF sy-subrc <> 0.
  cl\_demo\_output=>write\_text( \`There's no end.\` ).
ENDIF.
FIND  REGEX 'end\\Z' IN text.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( \`The end is near the end.\` ).
ENDIF.
cl\_demo\_output=>display( ).

Start and End of a Word

The operator \\< matches the beginning and the operator \\> matches the end of a word. The operator \\b matches both the beginning and end of a word. Words are defined as uninterrupted strings of alphanumeric characters.

Example

The first search finds the five places where a word starts with "s" or "S". The second search finds both instances of "s" at the end of a word.

DATA text TYPE string.
DATA result\_tab TYPE match\_result\_tab.
text = \`Sometimes snow seems so soft.\`.
FIND ALL OCCURRENCES OF regex '\\<s'
     IN text IGNORING CASE
     RESULTS result\_tab.
FIND ALL OCCURRENCES OF regex 's\\b'
     IN text IGNORING CASE
     RESULTS result\_tab.

Preview Conditions

The operator (?=...) defines a regular expression s as a subsequent condition for a previous regular expression r. The regular expression r(?=s) has the same effect in a search as the regular expression r, if the regular expression s matches the substring that immediately follows the substring found with r.

The operator (?!...) acts in the same way as (?=...), with the difference that r(?!s) matches the substring for r if s does not match the subsequent substring.

Note

The substring found by the preview s is not a part of the match found by r(?=s).

Example

The following search finds the substring "la" at offset 7.

DATA text TYPE string.
DATA result\_tab TYPE match\_result\_tab.
text = \`Shalalala!\`.
FIND ALL OCCURRENCES OF REGEX '(?:la)(?=!)'
     IN text RESULTS result\_tab.

Cut Operator

The operator (?>...) intervenes in the processing of the character string pattern search. The search is usually performed in accordance with the Leftmost-longest rule of the POSIX standard. First of all, all the first possible matches are found and then the longest match is selected. Backtracking, as it is known, is executed when matching chainings with alternatives. The search returns to branching points to establish if another alternative or another iteration of a chaining produces a longer match.

The cut operator deactivates backtracking for the subexpression in question. The entire search is terminated after the first successful match of the subexpression and the result is returned. The Leftmost-longest rule and the rule requiring as much as possible of the entire expression to match are suspended.

Notes

-   When the cut operator is used, the search behavior of regular expressions which do not follow the POSIX standard is simulated in Perl.

-   The cut operator should only be used by very experienced developers, and only for tasks which cannot be achieved in any other way.

Example

The first search without a cut operator finds "aabbaaaa" at offset 2. The second search with a cut operator only finds "aabb". This corresponds to the first alternative. The search for the second alternative, which would be longer in this case, is not executed. The third search is not successful. The partial expression a+ captures all text characters which follow offset 2 (greedy behavior), meaning that no character is left for the individual pattern a outside of the cut operator. This last point breaks the usually applicable rule generally requiring the entire regular expression to match.

DATA text TYPE string.
DATA moff TYPE i.
DATA mlen TYPE i.
text = \`xxaabbaaaaxx\`.
FIND REGEX 'a+b+|\[ab\]+' IN text MATCH OFFSET moff
                                MATCH LENGTH mlen.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( |{ text+moff(mlen) }| ).
ENDIF.
FIND REGEX '(?>a+b+|\[ab\]+)' IN text MATCH OFFSET moff
                                    MATCH LENGTH mlen.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( |{ text+moff(mlen) }| ).
ENDIF.
FIND REGEX '(?>a+|a)a' IN text MATCH OFFSET moff
                               MATCH LENGTH mlen.
IF sy-subrc <> 0.
  cl\_demo\_output=>write\_text( 'Nothing found' ).
ENDIF.
cl\_demo\_output=>display( ).