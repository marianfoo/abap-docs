  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SPLIT%2C%20ABAPSPLIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SPLIT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsplit_shortref.htm)

Syntax

SPLIT dobj AT sep INTO
      *{* *{*result1 result2 *\[*...*\]**}* *|* *{*TABLE result\_tab*}* *}*
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

The content of the operand dobj is split into segments in accordance with the sequence of separators in sep and the results are either stored in individual target fields result1 result2 ... or in the lines of an internal table result\_tab.

-   At least two target fields result1 result2 ... must be specified. The following can be specified for the target fields:
    -   Existing character-like or byte-like variables.
    -   Inline declarations with [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). If IN CHARACTER MODE is used, the declared variables are of the type string; if IN BYTE MODE is used, they are of the type xstring.
-   The following can be specified for the internal table result\_tab:
    -   An existing internal table with character-like or byte-like line type. It must be a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The table is initialized before being split.
    -   An inline declaration with [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). A standard table is declared with the table line as the primary table key and without secondary table keys. If IN CHARACTER MODE is used, the line type is of the type string; if IN BYTE MODE is used, it is of the type xstring.

dobj and sep are [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

The system searches the operand dobj from left to right for all occurrences of the content of the operand sep. The search is case-sensitive. All segments between the start of the operand and the first occurrence, between the occurrences, and between the last occurrence and the end of the operand are assigned one by one to the individual target fields result1 result2 ..., or appended to the internal table result\_tab as follows.

-   If the target fields result1 result2 ... or the lines of the internal table result\_tab have a fixed length and this length is not sufficient for a segment, the segment is truncated on the right and sy-subrc is set to 4. If the length is greater than the length of the segment, it is padded with blanks or hexadecimal 0 on the right. If the target fields result1 result2 ... or the lines of the internal table result\_tab are strings, their length is adjusted to that of the associated segment.
-   If not enough target fields result1 result2 ... are specified to include all the segments, dobj is only split until all the target fields result1 result2 ... have been assigned values, except for the last one. The remaining content of dobj is then assigned to the final operand, without being split.
-   The segments are assigned directly while ignoring the conversion rules.
-   If more target fields result1 result2 ... are specified than required, the surplus target fields with fixed lengths contain blanks or hexadecimal 0 after the statement and surplus strings are initial.

If the content of the operand sep is found immediately at the start of dobj, or occurs in direct succession in dobj, the result of the split is an empty string. If the content of sep is at the end of dobj, the search is completed there and no further separation takes place to the right of this point.

If the content of the operand sep is not found or is an empty string, the result of the split is a single segment that contains the entire content of dobj, and which is assigned to the first individual target field or the first line of the internal table.

In character string processing, trailing blanks are respected in separators sep of fixed length. If the operand dobj has a fixed length, any trailing blanks are ignored in the operand dobj and in the segments created by the split. If the operand dobj has the type string, any trailing blanks are respected in the operand dobj and in the segments created by the split.

System Fields

sy-subrc

Meaning

0

The segments were passed to the target fields or the internal table without being truncated.

4

At least one of the segments was truncated on the right when passed to the target fields or internal table.

Hints

-   Provided that enough target fields are specified or that the segments are stored in an internal table, the number of segments created is determined by the number of separators found, as follows:
    -   If the last occurrence is not at the end of the operand, the number of segments matches the number of occurrences plus 1.
    -   If the last occurrence is at the end of the operand, the number of segments matches the number of occurrences.
-   In the case of target fields or table lines with the type n, d, or t, the type-dependent assignment rules and initial values are not relevant. The segments are assigned as unconverted segments and any surplus target fields are filled with blanks.
-   All specified single fields result1 result2 ... are given values.
-   To access the segments of a character string directly in an operand position, a [segment function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensegment_functions.htm) can be used that covers some of the functions of the statement SPLIT.

Example

The text field text is separated at its blanks into the three strings str1, str2, and str3, and also into an internal table with the line type string. Since the three strings are not sufficient for all seven parts, str3 contains drag it is getting old after the split, while the internal table contains seven lines; one for each word in text.

DATA text TYPE string.
text = \`What a drag it is getting old\`.
SPLIT text AT space INTO: FINAL(str1) FINAL(str2) FINAL(str3),
                          TABLE FINAL(itab).

Example

A text string text1 and a text field text2 have the same content and are split into a table in the same way. When the text string is split, the segments contain trailing blanks. This is not the case when the text field is split.

DATA:
  text1 TYPE string      VALUE \` 1 : 2 : 3 \`,
  text2 TYPE c LENGTH 11 VALUE ' 1 : 2 : 3 '.
SPLIT text1 AT ':' INTO TABLE DATA(segments).
LOOP AT segments INTO DATA(segment).
  cl\_demo\_output=>write( segment && \`<--\` ).
ENDLOOP.
cl\_demo\_output=>line( ).
SPLIT text2 AT ':' INTO TABLE segments.
LOOP AT segments INTO segment.
  cl\_demo\_output=>write( segment && \`<--\` ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

The following SPLIT statement extracts all strings of digits in a text string to an internal table.

DATA(text) = \`aaa123bbb456ccc789\`.
cl\_demo\_input=>request( CHANGING field =  text ).
SPLIT condense( replace( val  = text
                         pcre = \`\\D\`
                         with = \` \`
                         occ  = 0 ) ) AT \` \` INTO TABLE FINAL(itab).
cl\_demo\_output=>display( itab ).

Addition   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the type of processing, the operands dobj, sep, and the target fields result1 result2 ... or the lines of the internal table result\_tab must be byte-like or character-like.

Example

The byte string xstr is split into an internal table with line type xstring at bytes with the value hexadecimal 20, which stands for a blank in code page UTF-8.

DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`Like a Hurricane\` ).
SPLIT xstr AT CONV xstring( '20' )
              INTO TABLE FINAL(xtab) IN BYTE MODE.
LOOP AT xtab INTO xstr.
  cl\_demo\_output=>write(
    cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ).
ENDLOOP.
cl\_demo\_output=>display( ).