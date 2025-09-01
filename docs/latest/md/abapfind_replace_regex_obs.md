  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Character String and Byte String Processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) →  [Obsolete Regular Expression Syntax](javascript:call_link\('abenregular_expressions_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIND%2C%20REPLACE%20REGEX%20posix%20%28obsolete%29%2C%20ABAPFIND_REPLACE_REGEX_OBS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

FIND, REPLACE REGEX posix (obsolete)

Syntax

FIND*|*REPLACE REGEX posix ... .

Effect

In this variant for specifying a [pattern](javascript:call_link\('abapfind_pattern.htm'\)) in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)), a character string posix is specified behind REGEX instead of a reference variable [regex\_ref](javascript:call_link\('abapfind_pattern.htm'\)).

posix is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") that can contain a valid [POSIX regular expression](javascript:call_link\('abenregex_posix_syntax.htm'\)).

The occurrences are determined according to the leftmost-longest rule. Of all possible matches between the regular expression and the character string to be searched, the substring that starts at the furthest position to the left is selected. If there are multiple matches at this position, the longest of these substrings is selected.

Hint

Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) or another regular expression syntax supported by ABAP.

Example

The search uses obsolete POSIX regular expression syntax and finds the substring 'ababb' from offset 3. The substring 'babboo' from offset 4, which also matches, is not found because of the leftmost-longest rule of POSIX regular expressions.

FINAL(text) = \`oooababboo\`.
FIND REGEX 'a.|\[ab\]+|b.\*' IN text ##regex\_posix
     MATCH OFFSET FINAL(moff)
     MATCH LENGTH FINAL(mlen).
IF sy-subrc = 0.
  cl\_demo\_output=>display( substring( val = text off = moff
                                                 len = mlen ) ).
ENDIF.