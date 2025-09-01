  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) →  [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace.htm) →  [REPLACE pattern IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_in_pattern.htm) → 

REPLACE - options

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_shortref.htm)

Syntax

... *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
    *\[*REPLACEMENT COUNT rcnt*\]*
    *{* *{**\[*REPLACEMENT OFFSET roff*\]*
       *\[*REPLACEMENT LENGTH rlen*\]**}*
    *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}* ...

Extras:

[1\. ... *{*RESPECTING*|*IGNORING*}* CASE](#!ABAP_ADDITION_1@1@)
[2\. ... REPLACEMENT COUNT rcnt](#!ABAP_ADDITION_2@2@)
[3\. ... REPLACEMENT OFFSET roff](#!ABAP_ADDITION_3@3@)
[4\. ... REPLACEMENT LENGTH rlen](#!ABAP_ADDITION_4@4@)
[5\. ... RESULTS result\_tab*|*result\_wa](#!ABAP_ADDITION_5@5@)

Effect

These additions modify the statement [REPLACE pattern IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_in_pattern.htm) and provide advanced evaluation options. The addition CASE can be used to specify whether the search is case-sensitive. The additions REPLACEMENT and RESULTS can be used to determine the number, position, and length of the string(s) replaced.

Addition 1

... *{*RESPECTING*|*IGNORING*}* CASE

Effect

This addition can be used only when processing strings. It has the same syntax and effect as the associated [addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_options.htm) for searching for a substring in a data object using the [FIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind.htm) statement. This addition is not permitted when using an instance of class CL\_ABAP\_REGEX.

Example

Replacement of all uppercase characters in a string by a backquote. If RESPECTING CASE is not specified, all characters are replaced.

DATA(str) = \`Hello\`.
REPLACE ALL OCCURRENCES OF REGEX \`\\u\` IN str WITH '\`'
        RESPECTING CASE.
cl\_demo\_output=>display( str ).

Addition 2

... REPLACEMENT COUNT rcnt

Effect

This addition saves the number of replacements made in data object dobj to rcnt. The following can be specified for rcnt:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If no replacements are made, rcnt is set to 0.

Note

In data objects with a fixed length, the number of replacements made in data object dobj can be less than the number of occurrences.

Addition 3

... REPLACEMENT OFFSET roff

Effect

This addition saves the [offset](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoffset_glosry.htm "Glossary Entry") with respect to data object dobj at which the last replacement was made to roff. The following can be specified for roff:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If no replacement is made, roff retains its existing value or stays initial.

Notes

-   When ALL OCCURRENCES is used, REPLACEMENT OFFSET generally returns a different value than [MATCH OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_options.htm) for the [FIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind.htm) statement. This is because the position of the last location found can be shifted by previous replacements.
    
-   In data objects of fixed length, the value in roff refers to the last replacement within the data object. Occurrences that are shifted by previous replacements in the data object are no longer relevant.
    

Addition 4

... REPLACEMENT LENGTH rlen

Effect

This addition saves the length of the last substring inserted into dobj to rlen. The following can be specified for rlen:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If no replacement is made, rlen retains its existing value or stays initial.

Note

In data objects with a fixed length, the length of the last string inserted can be shorter than the length of new if the intermediate result is truncated.

Example

Pattern-based replacement of all occurrences of the substring "know" in the data objects text1 and text2 with "should know that". After the first REPLACE statement, text1 contains the full text "I should know that you should know that" and sy-subrc has the value 0. The data objects cnt, off, and len have the values 2, 23, and 16. After the second REPLACE statement, text2 contains the truncated text "I should know that" and sy-subrc has the value 2. The data objects cnt, off, and len have the values 1, 2, and 16.

DATA: text1 TYPE string,
      text2 TYPE c LENGTH 18.
text1 = text2 = 'I know you know'.
REPLACE ALL OCCURRENCES OF 'know' IN
        text1 WITH 'should know that'
              REPLACEMENT COUNT  DATA(cnt)
              REPLACEMENT OFFSET DATA(off)
              REPLACEMENT LENGTH DATA(len).
REPLACE ALL OCCURRENCES OF 'know' IN
        text2 WITH 'should know that'
              REPLACEMENT COUNT  cnt
              REPLACEMENT OFFSET off
              REPLACEMENT LENGTH len.

Addition 5

... RESULTS result\_tab*|*result\_wa

Effect

If at least one replacement is made, the RESULTS addition saves the offsets of the locations at which replacements were made. It also saves the length of the substrings inserted either in an internal table result\_tab or in a structure result\_wa. The syntax and meaning of the addition are otherwise the same as those for the [addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind_options.htm) of the same name for the [FIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfind.htm) statement. The only difference is that in this case, the data types for result\_tab and result\_wa must be REPL\_RESULT\_TAB and REPL\_RESULT, in which there is no SUBMATCHES component. As in FIND, an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) can be specified after RESULTS.

Example

A result table results is declared inline and supplied with the properties of the seven replaced characters.

DATA(str) = \`Diddeldummdideldei\`.
REPLACE ALL OCCURRENCES OF \`d\` IN str WITH 't'
        IGNORING CASE
        RESULTS DATA(results).
cl\_demo\_output=>display( results ).