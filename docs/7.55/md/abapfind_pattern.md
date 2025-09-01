  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind.htm) → 

FIND, pattern

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_shortref.htm)

Syntax

...  *{**\[*SUBSTRING*\]* substring*}* *|* *{*PCRE*|*REGEX regex*}* ... .

Variants:

[1\. ... *\[*SUBSTRING*\]* substring.](#!ABAP_VARIANT_1@1@)
[2\. ... PCRE*|*REGEX regex.](#!ABAP_VARIANT_2@2@)

Effect

Definition of a search pattern for the statements [FIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind.htm) and [FIND IN TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_itab.htm). The system can either search for exactly one substring substring or for a substring that matches a regular expression regex.

Hint

The statements [REPLACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace.htm) and [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace_itab.htm) use the same search pattern.

Variant 1

... *\[*SUBSTRING*\]* substring.

Effect

In this variant, a search is performed for the exact occurrence of a substring specified in a character-like or byte-like operand substring. substring is a [character-like expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The optional word SUBSTRING can be specified for emphasis.

If substring is either an empty string or is of type c, n, d, or t and only contains blanks, a search is performed for an empty substring. This is only possible when searching for the first occurrence, and the empty substring is always found before the first character or byte. In character string processing, the trailing blanks are ignored for substring data objects of fixed length.

Hint

If trailing blanks are not to be ignored in the substring, substring must have the data type string.

Example

Search for all occurrences of the string "now" in a text string literal. The offsets 11 and 24 of both occurrences are shown in the output.

FIND ALL OCCURRENCES OF \`now\` IN
     \`Everybody knows this is nowhere\`
     RESULTS DATA(result\_tab).
LOOP AT result\_tab ASSIGNING FIELD-SYMBOL(<match>).
  cl\_demo\_output=>write( |{ <match>-offset } {
                            <match>-length }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

Search for all occurrences of the string "now" in a text string literal using a WHILE loop. After every successful search, the search range is redefined to start after the occurrence. In this way, all occurrences of the search pattern could be found even before the addition ALL OCCURRENCES was introduced.

DATA(off) = 0.
WHILE sy-subrc = 0.
  FIND \`now\` IN SECTION OFFSET off OF
       \`Everybody knows this is nowhere\`
       MATCH OFFSET DATA(moff)
       MATCH LENGTH DATA(mlen).
  IF sy-subrc = 0.
    cl\_demo\_output=>write\_data( moff ).
    off = moff + mlen.
  ENDIF.
ENDWHILE.
cl\_demo\_output=>display( ).

Variant 2

... PCRE*|*REGEX regex.

Effect

In this variant, a search is performed for a substring that matches a [regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregular_expressions.htm) specified in regex.

-   If the addition PCRE is used, a character-like operand can be specified for regex that contains a valid [regular PCRE expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_pcre_syntax.htm).

-   If the addition REGEX is used, the following can be specified for regex:

-   A character-like operand that contains a valid [POSIX regular expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_syntax.htm).

-   An object reference variable that points to an instance of the [system class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX that represents either a PCRE or a POSIX regular expression.

If specified directly, regex is a [character-like expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

In searches using a regular expression, special [search patterns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_posix_search.htm) can be specified that allow further conditions including forecast conditions. The occurrences are determined according to the "leftmost-longest" rule. Of all the possible matches between the regular expression and the character string to be searched, the substring that starts in the furthest position to the left is selected. If there are multiple matches at this position, the longest of these substrings is selected.

An empty string in regex is not a valid regular expression and raises an exception. A character string is empty if regex is either an empty string or is of type c, n, d, or t and only contains blanks.

Hints

-   Some regular expressions that are not empty, such as a\*, are used to search for empty character strings. This is possible when searching for the first occurrence or all occurrences. The corresponding empty substrings are found before the first character, between all characters, and after the last character of the search range. A search of this type is always successful.

-   A regular expression can have correct syntax but be too complex for the execution of the statement FIND, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenregex_exceptions.htm).
    

Example

The first search finds the substring 'ababb' from offset 3. The similarly matching substring 'babboo' from offset 4 is not found because of the leftmost-longest rule of regular POSIX expressions. The second search uses regular PCRE expressions and has a different result.

DATA(text) = \`oooababboo\`.
FIND REGEX 'a.|\[ab\]+|b.\*' IN text
     MATCH OFFSET DATA(moff)
     MATCH LENGTH DATA(mlen).
IF sy-subrc = 0.
  cl\_demo\_output=>write( substring( val = text off = moff
                                               len = mlen ) ).
ENDIF.
FIND PCRE 'a.|\[ab\]+|b.\*' IN text
     MATCH OFFSET moff
     MATCH LENGTH mlen.
IF sy-subrc = 0.
  cl\_demo\_output=>display( substring( val = text off = moff
                                                 len = mlen ) ).
ENDIF.