  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [REPLACE](javascript:call_link\('abapreplace.htm'\)) →  [REPLACE pattern IN](javascript:call_link\('abapreplace_in_pattern.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%2C%20options%2C%20ABAPREPLACE_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE, options

[Short Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

... *\[*VERBATIM*\]*
    *\[*RESPECTING*|*IGNORING CASE*\]*
    *\[*REPLACEMENT COUNT rcnt*\]*
    *{* *{**\[*REPLACEMENT OFFSET roff*\]*
       *\[*REPLACEMENT LENGTH rlen*\]**}*
    *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}* ...

Additions:

[1\. ... VERBATIM](#!ABAP_ADDITION_1@1@)
[2\. ... RESPECTING*|*IGNORING CASE](#!ABAP_ADDITION_2@2@)
[3\. ... REPLACEMENT COUNT rcnt](#!ABAP_ADDITION_3@3@)
[4\. ... REPLACEMENT OFFSET roff](#!ABAP_ADDITION_4@4@)
[5\. ... REPLACEMENT LENGTH rlen](#!ABAP_ADDITION_5@5@)
[6\. ... RESULTS result\_tab*|*result\_wa](#!ABAP_ADDITION_6@6@)

Effect

These additions control the statement [REPLACE pattern IN](javascript:call_link\('abapreplace_in_pattern.htm'\)) and provide extended evaluation options. The addition CASE can be used to determine whether the search is case-sensitive. The additions REPLACEMENT and RESULTS can be used to determine the number, position, and length of the strings replaced.

Addition 1   

... VERBATIM

Effect

The addition VERBATIM can only be used together with [PCRE*|*REGEX](javascript:call_link\('abapreplace_pattern.htm'\)). It causes all characters in the operand new to be used literally. Special characters for replacement patterns have no effect.

Hint

A REPLACE statement with addition VERBATIM is always faster than one without.

Example

While in the first REPLACE statement the $ characters have a special meaning as operators for addressing subgroups, this is not the case when the addition VERBATIM is used in the second REPLACE statement. In the third REPLACE statement, the special characters are escaped using \\. While the effect of escaping is the same as for the addition, the addition VERBATIM is faster.

DATA(text1) = \`123XXX456\`.
DATA(text2) = text1.
DATA(text3) = text1.
FINAL(regex) =  \`(\\d\*)(\\D\*)(\\d\*)\`.
REPLACE PCRE regex IN text1 WITH \`$1\_\_\_$3\`.
REPLACE PCRE regex IN text2 WITH \`$1\_\_\_$3\` VERBATIM.
REPLACE PCRE regex IN text3 WITH \`\\$1\_\_\_\\$3\`.
cl\_demo\_output=>display( |{ text1 }\\n{ text2 }\\n{ text3 }| ).

Addition 2   

... *{*RESPECTING*|*IGNORING*}* CASE

Effect

This addition is only allowed in character string processing. It has the same syntax and effect as the corresponding [addition](javascript:call_link\('abapfind_options.htm'\)) for searching for a substring in a data object using the [FIND](javascript:call_link\('abapfind.htm'\)) statement. This addition is not allowed when using an instance of class CL\_ABAP\_REGEX.

Example

Replacement of all uppercase characters in a string with a backquote. If IGNORING CASE were specified, all characters would be replaced.

DATA(str) = \`Hello\`.
REPLACE ALL OCCURRENCES OF PCRE \`\[A-Z\]\` IN str WITH '\`'
        RESPECTING CASE.
cl\_demo\_output=>display( str ).

Addition 3   

... REPLACEMENT COUNT rcnt

Effect

This addition saves the number of replacements made in data object dobj to rcnt. The following can be specified for rcnt:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)). The declared variable has the data type i.

If no replacements are made, rcnt is set to 0.

Hint

In data objects with a fixed length, the number of replacements made in data object dobj can be less than the number of occurrences.

Addition 4   

... REPLACEMENT OFFSET roff

Effect

This addition saves the [offset](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") related to the data object dobj at which the last replacement was made to roff. The following can be specified for roff:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)). The declared variable has the data type i.

If no replacement is made, roff retains its previous value or stays initial.

Hints

-   When ALL OCCURRENCES is used, REPLACEMENT OFFSET generally returns a different value than [MATCH OFFSET](javascript:call_link\('abapfind_options.htm'\)) for the [FIND](javascript:call_link\('abapfind.htm'\)) statement because the position of the last found location can be shifted by previous replacements.
-   In data objects of fixed length, the value in roff refers to the last replacement within the data object. Occurrences that are shifted by previous replacements in the data object are no longer relevant.

Addition 5   

... REPLACEMENT LENGTH rlen

Effect

This addition saves the length of the last substring inserted into dobj to rlen. The following can be specified for rlen:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)). The declared variable has the data type i.

If no replacement is made, rlen retains its previous value or stays initial.

Hint

In data objects with a fixed length, the length of the last inserted string can be shorter than the length of new if the interim result is truncated.

Example

Pattern-based replacement of all occurrences of the substring know in the data objects text1 and text2 with should know that. After the first REPLACE statement, text1 contains the complete content I should know that you know and sy-subrc contains 0. The data objects cnt, off, and len have the values 2, 23, and 16. After the second REPLACE statement, text2 contains the truncated content I should know that and sy-subrc contains 2. The data objects cnt, off, and len have the values 1, 2, and 16.

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

Addition 6   

... RESULTS result\_tab*|*result\_wa

Effect

If at least one replacement is made, the RESULTS addition saves the offsets of the positions at which replacements were made and the lengths of the inserted substrings either in an internal table result\_tab or in a structure result\_wa. The syntax and meaning of the addition are otherwise the same as those for the identically named [addition](javascript:call_link\('abapfind_options.htm'\)) for the [FIND](javascript:call_link\('abapfind.htm'\)) statement, with the difference that the data types for result\_tab and result\_wa must be REPL\_RESULT\_TAB and REPL\_RESULT, for which there is no SUBMATCHES component. As in FIND, an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)) can be specified after RESULTS.

Example

A result table results is declared inline and supplied with the properties of the seven replaced characters.

DATA(str) = \`Diddeldummdideldei\`.
REPLACE ALL OCCURRENCES OF \`d\` IN str WITH 't'
        IGNORING CASE
        RESULTS FINAL(results).
cl\_demo\_output=>display( results ).