  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) →  [regex - POSIX Syntax (obsolete)](javascript:call_link\('abenregex_posix_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20POSIX%20regex%20-%20Search%20Patterns%20%28obsolete%29%2C%20ABENREGEX_POSIX_SEARCH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

POSIX regex - Search Patterns (obsolete)

A main application of regular expressions is the search for and subsequent [replacement of](javascript:call_link\('abenregex_posix_replace.htm'\)) substrings in character strings. In general, a user is interested in a specific selection of substrings that match a regular expression. In ABAP, searches using regular expressions are implemented using the addition [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) of the statement [FIND](javascript:call_link\('abapfind.htm'\)) or one of the [search functions](javascript:call_link\('abensearch_function_glosry.htm'\) "Glossary Entry"). Here, the found substrings are determined with no overlaps in accordance with the leftmost-longest rule.

-   [Leftmost-Longest Rule](#@@ITOC@@ABENREGEX_POSIX_SEARCH_1)
-   [Operators for Search Patterns](#@@ITOC@@ABENREGEX_POSIX_SEARCH_2)
    -   [Start and End of a Line](#@@ITOC@@ABENREGEX_POSIX_SEARCH_3)
    -   [Start and End of a Character String](#@@ITOC@@ABENREGEX_POSIX_SEARCH_4)
    -   [Start and End of a Word](#@@ITOC@@ABENREGEX_POSIX_SEARCH_5)
    -   [Preview Conditions](#@@ITOC@@ABENREGEX_POSIX_SEARCH_6)
    -   [Cut Operator](#@@ITOC@@ABENREGEX_POSIX_SEARCH_7)

Leftmost-Longest Rule   

First, the substring furthest to the left in the character string, which matches the regular expression (leftmost), is identified. If there are multiple substrings, the longest sequence is chosen (longest). This procedure is then repeated for the remaining sequence after the occurrence.

Example

For the regular expression d\*od\*, five substrings are found in doobedoddoo: do at offset 0, o at offset 2, dodd at offset 5, o at offset 9, and o at offset 10.

DATA result\_tab TYPE match\_result\_tab.
FIND ALL OCCURRENCES OF regex 'd\*od\*' IN 'doobedoddoo' ##regex\_posix
                     RESULTS result\_tab.

Operators for Search Patterns   

The following operators support searches in character strings. These operators consist of the special characters ^, $, \\, <, \>, (, ), \=, and !. The special characters can be converted into literal characters using the prefix \\.

Start and End of a Line   

The operator ^ acts as an anchor character for the offset in front of the first character in a line. The operator $ acts as an anchor character for the offset after the last character in a line.

Character-like data objects have at least one start and end of line, which are defined as follows:

-   In a text field of the type c and the other character-like data objects with fixed lengths, a line starts in front of the first character and ends after the defined length.
-   In a string of the type string, a line starts in front of the first character and ends after its current length.

If a character-like data object contains [control characters](javascript:call_link\('abencontrol_character_glosry.htm'\) "Glossary Entry") for a line feed or a return, further line starts and line ends are possible:

-   A line end precedes each control character for a line feed or a return.
-   A line start follows each control character for a line feed or a return.

Hint

Within ABAP programs, control characters generally only occur when externally generated data records are imported or if the characters are specified explicitly in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

Example

The character string in text contains two [control characters](javascript:call_link\('abenstring_templates_separators.htm'\)) for line feeds, inserted using a string template. The first search finds three line starts with the offsets 0, 6, and 12. The second search finds three line ends with the offsets 5, 11, and 17.

DATA TEXT type STRING.
DATA result\_tab TYPE match\_result\_tab.
text = |Line1\\nLine2\\nLine3|.
FIND ALL OCCURRENCES OF REGEX '^' ##regex\_posix
     IN text RESULTS result\_tab.
FIND ALL OCCURRENCES OF REGEX '$' ##regex\_posix
     IN text RESULTS result\_tab.

Start and End of a Character String   

The operators \\A and \\z act as anchor characters for the offset in front of the first character in a character string and the offset behind the last character of a character string. This means that the operator \\A always finds the offset 0. In a string of type string, \\z finds the offset behind the last character. In text fields of type c, trailing blanks are respected, which means that \\z always finds the offset behind the defined length.

In addition to \\z, there is another operator \\Z for the end of a character string. The operator \\Z works like \\z, but all line breaks at the end of the character string are ignored.

Hint

If a character string does not contain any control characters, the operators ^, $ and \\A, \\z, \\Z behave in the same way.

Example

The following search finds Smile at the start of the first line and at the end of the last line of the internal table text\_tab. If the line type were string instead of c, the search would find Smile at the end of every line.

DATA text(10) TYPE c.
DATA text\_tab LIKE TABLE OF text.
DATA result\_tab TYPE match\_result\_tab.
APPEND 'Smile' TO text\_tab.
APPEND ' Smile' TO text\_tab.
APPEND '  Smile' TO text\_tab.
APPEND '   Smile' TO text\_tab.
APPEND '    Smile' TO text\_tab.
APPEND '     Smile' TO text\_tab.
FIND ALL OCCURRENCES OF regex '\\A(?:Smile)|(?:Smile)\\z'
     IN TABLE text\_tab RESULTS result\_tab ##regex\_posix.

Example

The following searches illustrate the difference between \\z and \\Z. The first search is not successful because there are line feeds between the searched for text and the end of the character string. These are ignored in the second search.

DATA text TYPE string.
text = |... this is the end\\n\\n\\n|.
FIND  REGEX 'end\\z' IN text ##regex\_posix.
IF sy-subrc <> 0.
  cl\_demo\_output=>write\_text( \`There's no end.\` ).
ENDIF.
FIND  REGEX 'end\\Z' IN text ##regex\_posix.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( \`The end is near the end.\` ).
ENDIF.
cl\_demo\_output=>display( ).

Start and End of a Word   

The operator \\< matches the start and the operator \\> matches the end of a word. The operator \\b matches both the start and end of a word. Words are considered to be uninterrupted strings of alphanumeric characters.

Example

The first search finds the five places where a word starts with s or S. The second search finds both instances of s at the end of a word.

DATA text TYPE string.
DATA result\_tab TYPE match\_result\_tab.
text = \`Sometimes snow seems so soft.\`.
FIND ALL OCCURRENCES OF regex '\\<s' ##regex\_posix
     IN text IGNORING CASE
     RESULTS result\_tab.
FIND ALL OCCURRENCES OF regex 's\\b' ##regex\_posix
     IN text IGNORING CASE
     RESULTS result\_tab.

Preview Conditions   

The operator (?=...) defines a regular expression s as a subsequent condition for a previous regular expression r. The regular expression r(?=s) has the same effect in a search as the regular expression r, provided that the regular expression s matches the substring that directly follows the substring found with r.

The operator (?!...) acts in the same way as (?=...), with the difference that r(?!s) matches the substring for r if s does not match the subsequent substring.

Hint

The substring found by the preview s is not a part of the match found by r(?=s).

Example

The following search finds the substring la at offset 7.

DATA text TYPE string.
DATA result\_tab TYPE match\_result\_tab.
text = \`Shalalala!\`.
FIND ALL OCCURRENCES OF REGEX '(?:la)(?=!)' ##regex\_posix
     IN text RESULTS result\_tab.

Cut Operator   

The operator (?>...) intervenes in the processing of the character string pattern search. The search is usually performed in accordance with the leftmost-longest rule of the POSIX standard. First, all first possible matches are found and then the longest match is selected. Backtracking, as it is known, is executed when matching concatenations with alternatives. The search returns to branching points to determine whether another alternative or another iteration of a concatenation produces a longer match.

The cut operator deactivates backtracking for the subexpression contained therein. The entire search is terminated after the first successful match of the subexpression and the result is returned. The leftmost-longest rule and the rule requiring as much as possible of the entire expression to match are overridden.

Hints

-   When the cut operator is used, the search behavior of regular expressions that do not follow the POSIX standard is simulated in Perl.
-   The cut operator should only be used by very experienced developers for tasks that cannot be achieved in any other way.

Example

The first search without a cut operator finds aabbaaaa at offset 2. The second search with a cut operator only finds aabb. This corresponds to the first alternative. The search for the second alternative, which would be longer in this case, is not executed. The third search is not successful. The subexpression a+ captures all text characters which follow offset 2 (greedy behavior), so that no character remains for the individual pattern a outside of the cut operator. The latter violates the usually applicable rule that generally the entire regular expression must match primarily.

DATA text TYPE string.
DATA moff TYPE i.
DATA mlen TYPE i.
text = \`xxaabbaaaaxx\`.
FIND REGEX 'a+b+|\[ab\]+' IN text MATCH OFFSET moff ##regex\_posix
                                MATCH LENGTH mlen.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( |{ text+moff(mlen) }| ).
ENDIF.
FIND REGEX '(?>a+b+|\[ab\]+)' IN text MATCH OFFSET moff ##regex\_posix
                                    MATCH LENGTH mlen.
IF sy-subrc = 0.
  cl\_demo\_output=>write\_text( |{ text+moff(mlen) }| ).
ENDIF.
FIND REGEX '(?>a+|a)a' IN text MATCH OFFSET moff ##regex\_posix
                               MATCH LENGTH mlen.
IF sy-subrc <> 0.
  cl\_demo\_output=>write\_text( 'Nothing found' ).
ENDIF.
cl\_demo\_output=>display( ).