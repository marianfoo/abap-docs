  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm) → 

FIND - pattern

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_shortref.htm)

Syntax

...  *{**\[*SUBSTRING*\]* substring*}* *|* *{*REGEX regex*}* ... .

Variants:

[1\. ... *\[*SUBSTRING*\]* substring.](#!ABAP_VARIANT_1@1@)
[2\. ... REGEX regex.](#!ABAP_VARIANT_2@2@)

Effect

Defines a search string for the statements [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm) and [FIND IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm). The search can either search for an exact substring substring or for a substring that matches a regular expression regex.

Note

The statements [REPLACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace.htm) and [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm) use the same search string.

Variant 1

... *\[*SUBSTRING*\]* substring.

Effect

In this variant, a search is performed for the exact occurrence of a substring specified in a character-like or byte-like operand substring. substring is a [character-like expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The optional word SUBSTRING can be specified for emphasis.

If substring is an empty string or is of type c, n, d, or t and only contains blanks, a search is performed for an empty substring. This is only possible when searching for the first instance, and the empty substring is always found before the first character or byte. In character string processing, the trailing blanks are ignored for substring data objects of fixed length.

Note

If trailing blanks are not to be ignored in the substring, substring must have the data type string.

Example

Search for all occurrences of the string "now" in a text string literal. The offsets 11 and 24 of both found locations are displayed as output.

DATA: patt       TYPE string VALUE \`now\`,
      text TYPE string,
      result\_tab TYPE match\_result\_tab.
FIELD-SYMBOLS <match> LIKE LINE OF result\_tab.
FIND ALL OCCURRENCES OF patt IN
     \`Everybody knows this is nowhere\`
     RESULTS result\_tab.
LOOP AT result\_tab ASSIGNING <match>.
  cl\_demo\_output=>write( |{ <match>-offset } {
                            <match>-length }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

Searches for all occurrences of the string "now" in a text string literal using a WHILE loop. After every successful search, the search range is redefined to start after the found location. This enabled all occurrences of the search pattern to be found even before the addition ALL OCCURRENCES was introduced.

DATA: patt TYPE string VALUE \`now\`,
      text TYPE string,
      off  TYPE i,
      moff TYPE i,
      mlen TYPE i.
off = 0.
WHILE sy-subrc = 0.
  FIND patt IN SECTION OFFSET off OF
       \`Everybody knows this is nowhere\`
       MATCH OFFSET moff
       MATCH LENGTH mlen.
  IF sy-subrc = 0.
    cl\_demo\_output=>write\_data( moff ).
    off = moff + mlen.
  ENDIF.
ENDWHILE.
cl\_demo\_output=>display( ).

Variant 2

... REGEX regex.

Effect

In this variant, a search is performed for a match with a regular expression specified in regex. For regex, either a character-like operand can be specified that contains a [valid, regular expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax.htm) when the statement is executed, or an object reference variable that points to an instance of the class CL\_ABAP\_REGEX. If specified directly, regex is a [character-like expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

In searches using a regular expression, specific [search strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_search.htm) can be entered that permit further conditions including forecast conditions. The occurrences are determined according to the "leftmost-longest" rule. Of all the possible matches between the regular expression and the required character string, the substring starting in the furthest position to the left is selected. If there are several matches in this position, the longest of these substrings is selected.

An empty substring in regex is not a valid regular expression and raises an exception. A character string is empty if regex is either an empty string or is of type c, n, d, or t and only contains blanks.

Notes

-   Some regular expressions that are not empty, such as a\*, are used to search for empty character strings. This is possible when searching for the first occurrence or all occurrences. The relevant empty substrings are found before the first character, between all characters, and after the last character of the search ranges. A range of this type is always successful.
    
-   A regular expression can have correct syntax, but be too complex for the execution of the statement FIND, which raises a handleable exception of the class CX\_SY\_REGEX\_TOO\_COMPLEX. See [Exceptions in Regular Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_exceptions.htm).
    

Example

The following search finds the substring 'ababb' from offset 3. The other matching substring 'babboo' from offset 4 is not found using the "leftmost-longest" rule.

DATA: moff TYPE i,
      mlen TYPE i.
FIND REGEX 'a.|\[ab\]+|b.\*' IN 'oooababboo'
     MATCH OFFSET moff
     MATCH LENGTH mlen.