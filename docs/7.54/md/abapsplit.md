  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) → 

SPLIT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit_shortref.htm)

Syntax

SPLIT dobj AT sep INTO
      *{* *{*result1 result2 *\[*...*\]**}* *|* *{*TABLE result\_tab*}* *}*
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[
... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

The content of the operand dobj is separated into segments in accordance with the sequence of separators in sep. The results are either stored in individual target fields result1 result2 ... or in the rows of an internal table result\_tab.

-   At least two target fields result1 result2 ... must be specified. The following can be specified for the target fields:

-   Existing character-like or byte-like variables.

-   Inline declarations with [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). If IN CHARACTER MODE is used, the declared variables are of the type string; if IN BYTE MODE is used, they are of the type xstring.

-   The following can be specified for the internal table result\_tab:

-   An existing internal table with character-like or byte-like row type. It must be a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The table is initialized before being split.

-   An inline declaration with [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). A standard table is declared with the table row as the primary table key (and without secondary table keys). If IN CHARACTER MODE is used, the row type is of the type string; if IN BYTE MODE is used, it is of the type xstring.

dobj and sep are [character-like expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

The system searches the operand dobj from left to right for all occurrences of the content of the operand sep. The search is case-sensitive. All segments from the start of the operand to the first occurrence, between the occurrences, and from the last occurrence to the end of the operand are assigned one by one to the individual target fields result1 result2 ..., or appended to the internal table result\_tab.

-   If the target fields result1 result2 ... or the rows of the internal table result\_tab have a fixed length and this length is not enough for the segment, the segment is truncated on the right and sy-subrc is set to 4. If the length is greater than the length of the segment, it is padded with blanks or hexadecimal 0 on the right. If the target fields result1 result2 ... or the rows of the internal table result\_tab are strings, their length is adjusted to match the length of the associated segment.
    
-   If there are not enough target fields result1 result2 ... to include all the segments, dobj is only split until all the target fields result1 result2 ... have been assigned values, except for the last target field. The remaining content of dobj is assigned to the final operand, without being split.
    
-   The segments are assigned directly while ignoring the conversion rules.
    
-   If more target fields result1 result2 ... are specified than required, the surplus target fields with fixed lengths contain blanks or hexadecimal 0 after the assignment. Any surplus strings are initial.
    

If the content of the operand sep is found immediately at the start of dobj, or occurs in direct succession in dobj, the result of the separation is an empty string. If the content of sep is at the end of dobj, the search is terminated and no further separation takes place to the right of this point.

If the content of the operand sep is not found or is an empty string, the result of the split is a single segment that contains the whole content of dobj, and which is assigned to the first individual target field or the first row of the internal table.

When strings are processed, trailing blanks are respected in separators sep of fixed length. If the operand dobj has a fixed length, any trailing blanks are ignored both in the operand dobj and in the new segments. If the operand dobj has the type string, any trailing blanks are respected both in the operand dobj and in the new segments.

System Fields

sy-subrc

Meaning

0 (means:

The segments were passed to the target fields or the internal table without being truncated.

4

At least one of the segments was truncated on the right when being passed to the target fields or internal table.

Notes

-   If enough target fields are specified or the segments have been saved to an internal table, the number of segments created is defined by the number of separators found, as follows:
    

-   If the last occurrence is not at the end of the operand, the number of segments matches the number of occurrences plus 1.

-   If the last occurrence is at the end of the operand, the number of segments matches the number of occurrences.

-   In the case of target fields or table rows with the type n, d, or t, the type-dependent assignment rules and initial values are not relevant. The segments are assigned without being converted and any surplus target fields are filled with blanks.
    
-   All single fields result1 result2 ... specified are given values.
    
-   To access the segments of a character string directly in an operand position, a [segment function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensegment_functions.htm) can be used that includes some of the functions of the statement SPLIT.
    

Example

The text field text is separated at its blanks, firstly into the three strings str1, str2, and str3, and then into an internal table with the row type string. Since the three strings are not enough for all seven parts, str3 contains "drag it is getting old" after the separation, while the internal table contains seven rows; one for each word in text.

DATA text TYPE string.
text = \`What a drag it is getting old\`.
SPLIT text AT space INTO: DATA(str1) DATA(str2) DATA(str3),
                          TABLE DATA(itab).

Example

A text string text1 and a text field text2 have the same content and are segmented into a table in the same way. When the text string is segmented, the segments contain trailing blanks. This is not the case when the text field is segmented.

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
SPLIT condense( replace( val   = text
                         regex = \`\\D\`
                         with  = \` \`
                         occ = 0 ) ) AT \` \` INTO TABLE DATA(itab).
cl\_demo\_output=>display( itab ).

Addition

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is carried out. Depending on the type of processing, the operands dobj, sep, and the target fields result1 result2 ... or the rows of the internal table result\_tab must be byte-like or character-like.

Example

The byte string xstr is split at bytes with the value hexadecimal 20, which stands for a blank in code page UTF-8, into an internal table with row type xstring.

DATA(xstr) =
  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`Like a Hurricane\` ).
SPLIT xstr AT CONV xstring( '20' )
              INTO TABLE DATA(xtab) IN BYTE MODE.
LOOP AT xtab INTO xstr.
  cl\_demo\_output=>write(
    cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ).
ENDLOOP.
cl\_demo\_output=>display( ).