  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FIND, pattern, ABAPFIND_PATTERN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

FIND, pattern

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_shortref.htm)

Syntax

...  *{**\[*SUBSTRING*\]* substring*}* *|* *{*PCRE [pcre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm)*}**|**{*REGEX regex\_ref*}* ... .

Variants:

[1\. ... *\[*SUBSTRING*\]* substring.](#!ABAP_VARIANT_1@1@)
[2\. ... *{*PCRE pcre*}**|**{*REGEX regex\_ref*}*](#!ABAP_VARIANT_2@2@)

Effect

Definition of a search pattern for the statements [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) and [FIND IN TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm). The system can either search for exactly one substring substring or for a substring that matches a regular expression behind PCRE or REGEX.

Hint

The statements [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) and [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab.htm) use the same search pattern.

Variant 1   

... *\[*SUBSTRING*\]* substring.

Effect

In this variant, a search is performed for the exact occurrence of a substring specified in a character-like or byte-like operand substring. substring is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The optional word SUBSTRING can be specified for emphasis.

If substring is either an empty string or is of type c, n, d, or t and only contains blanks, a search is performed for an empty substring. This is only possible when searching for the first occurrence, and the empty substring is always found before the first character or byte. In character string processing, the trailing blanks are ignored for substring data objects of fixed length.

Hint

If trailing blanks are not to be ignored in the substring, substring must have the data type string.

Example

Search for all occurrences of the string now in a text string literal. The offsets 11 and 24 of both occurrences are shown in the output.

FIND ALL OCCURRENCES OF \`now\` IN
     \`Everybody knows this is nowhere\`
     RESULTS FINAL(result\_tab).
LOOP AT result\_tab ASSIGNING FIELD-SYMBOL(<match>).
  cl\_demo\_output=>write( |{ <match>-offset } {
                            <match>-length }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

Search for all occurrences of the string now in a text string literal using a WHILE loop. After every successful search, the search range is redefined to start after the occurrence. In this way, all occurrences of the search pattern could be found even before the addition ALL OCCURRENCES was introduced.

DATA(off) = 0.
WHILE sy-subrc = 0.
  FIND \`now\` IN SECTION OFFSET off OF
       \`Everybody knows this is nowhere\`
       MATCH OFFSET FINAL(moff)
       MATCH LENGTH FINAL(mlen).
  IF sy-subrc = 0.
    cl\_demo\_output=>write\_data( moff ).
    off = moff + mlen.
  ENDIF.
ENDWHILE.
cl\_demo\_output=>display( ).

Variant 2   

... *{*PCRE pcre*}**|**{*REGEX regex\_ref*}*

Effect

In this variant, a search is performed for a substring that matches a [regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm) specified in pcre or regex\_ref.

-   If the addition PCRE is used, a character-like operand can be specified for pcre that contains a valid [PCRE regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax.htm). The PCRE syntax is compiled in an extended mode: Most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped or the extended mode must be switched off with [(?-x)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm) in the regular expression.
-   If the addition REGEX is used, an object reference variable regex\_ref can be specified that points to an instance of the [system class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX that in turn represents a regular expression in any allowed [syntax for regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_syntax.htm) supported by ABAP.

pcre is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

In searches using a regular expression, special search patterns can be specified that allow further conditions including forecast conditions.

An empty string in pcre is not a valid regular expression and raises an exception. A character string is empty if pcre is either an empty string or is of type c, n, d, or t and only contains blanks.

Hints

-   Instances of CL\_ABAP\_REGEX for all kinds of regular expressions, PCRE, XPath, XSD and POSIX (obsolete) can be used with the addition REGEX. This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   When using CL\_ABAP\_REGEX, the extended mode can be switched by a parameter for PCRE and XPath regular expressions.
-   Some regular expressions that are not empty, such as a\*, are used to search for empty character strings. This is possible when searching for the first occurrence or all occurrences. The corresponding empty substrings are found before the first character, between all characters, and after the last character of the search range. A search of this type is always successful.
-   A regular expression can have correct syntax but be too complex for the execution of the statement FIND, which raises a catchable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_exceptions.htm).
-   Behind REGEX, a character-like operand that contains a valid [POSIX regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_posix_syntax.htm) [posix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_replace_regex_obs.htm) can also be specified. This variant is obsolete.

Example

The search uses PCRE regular expression syntax and finds the 'ab' from offset 3.

FINAL(text) = \`oooababboo\`.
FIND PCRE 'a.|\[ab\]+|b.\*' IN text
     MATCH OFFSET FINAL(moff)
     MATCH LENGTH FINAL(mlen).
IF sy-subrc = 0.
  cl\_demo\_output=>write( substring( val = text off = moff
                                               len = mlen ) ).
ENDIF.

Executable Examples

-   [Find a PCRE regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_abexa.htm)
-   [Search for a regular expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_abexa.htm)