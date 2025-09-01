---
title: "FIND - options"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_shortref.htm) Syntax ...  RESPECTINGIGNORING CASE MATCH COUNT  mcnt  MATCH OFFSET moff MATCH LENGTH mlen  RESULTS result_tabresult_wa  SUBMAT
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_options.htm"
abapFile: "abapfind_options.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "internal-table", "abapfind", "options"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm) → 

FIND - options

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_shortref.htm)

Syntax

...  *\[**{*RESPECTING*|*IGNORING*}* CASE*\]*
     *\[*MATCH COUNT  mcnt*\]*
     *{* *{**\[*MATCH OFFSET moff*\]*
        *\[*MATCH LENGTH mlen*\]**}*
     *|* *\[*RESULTS result\_tab*|*result\_wa*\]* *}*
     *\[*SUBMATCHES s1 s2 ...*\]* ...

Extras:

[1\. ... *{*RESPECTING*|*IGNORING*}* CASE](#!ABAP_ADDITION_1@1@)
[2\. ... MATCH COUNT mcnt](#!ABAP_ADDITION_2@2@)
[3\. ... MATCH OFFSET moff](#!ABAP_ADDITION_3@3@)
[4\. ... MATCH LENGTH mlen](#!ABAP_ADDITION_4@4@)
[5\. ... RESULTS result\_tab*|*result\_wa](#!ABAP_ADDITION_5@5@)
[6\. ... SUBMATCHES s1 s2 ...](#!ABAP_ADDITION_6@6@)

Effect

These additions control the [FIND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind.htm) statement and provide advanced evaluation options. The addition CASE can be used to specify whether the search is case-sensitive. The additions MATCH, SUBMATCHES, and RESULTS can be used to determine the number, position, and length of the sequence(s) found.

Addition 1

... *{*RESPECTING*|*IGNORING*}* CASE

Effect

This addition can be used only when processing strings. It specifies whether pattern and dobj are to be handled as case-sensitive in the search. When RESPECTING CASE is used, the search is case-sensitive and when IGNORING CASE is used, it is not. If neither of these additions is specified, RESPECTING CASE is used implicitly. If a regular expression is passed as an object of class CL\_ABAP\_REGEX for [pattern](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_pattern.htm), this addition is not permitted. Instead, the properties of the object are respected by the search.

Example

The first search finds the letter "a", the second finds the letter "A".

FIND 'A' in \`aA\` IGNORING   CASE MATCH OFFSET DATA(moff1).
FIND 'A' in \`aA\` RESPECTING CASE MATCH OFFSET DATA(moff2).
cl\_demo\_output=>display( |{ moff1 }, { moff2 }| ).

Addition 2

... MATCH COUNT mcnt

Effect

If the search pattern pattern is found in the search range, the MATCH COUNT addition saves the number of occurrences in mcnt. The following can be specified for mcnt:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If FIRST OCCURRENCE is used, the value after a successful search is always 1. If the search is not successful, mcnt is set to 0.

Example

Checks whether the numbers of opening and closing tags in an HTML file match.

DATA html TYPE string.
...
FIND ALL OCCURRENCES OF '<div'  IN html IGNORING CASE
                                MATCH COUNT DATA(divo).
FIND ALL OCCURRENCES OF '</div' IN html IGNORING CASE
                                MATCH COUNT DATA(divc).
ASSERT divo = divc.

Addition 3

... MATCH OFFSET moff

Effect

If the search pattern pattern is found in the search range, the MATCH OFFSET addition saves the [offset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_glosry.htm "Glossary Entry") of the last occurrence in relation to the dobj operands in moff. The following can be specified for moff:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If FIRST OCCURRENCE is used, the result is the offset of the first occurrence. If the search is not successful, moff retains its previous value or remains initial.

Note

The system field sy-fdpos is not filled by FIND.

Addition 4

... MATCH LENGTH mlen

Effect

If the search pattern pattern is found in the search range, the MATCH LENGTH addition saves the length of the last substrings found in mlen. The following can be specified for mlen:

-   An existing variable that expects the data type i.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). The declared variable has the data type i.
    

If FIRST OCCURRENCE is used, the result is the length of the first occurrence. If the search is not successful, mlen retains its previous value or remains initial.

Example

Determination of the first string of digits within a string, and its output.

FIND REGEX '\\d+' IN 'abc123def'
     MATCH OFFSET DATA(moff)
     MATCH LENGTH DATA(mlen).
cl\_demo\_output=>display( substring( val = 'abc123def'
                                    off = moff
                                    len = mlen ) ).

Addition 5

... RESULTS result\_tab*|*result\_wa

Effect

If the search pattern pattern is found in the search range, the RESULTS addition saves the offsets of the occurrences, the lengths of the substrings found, and information about the registers for the subgroups of regular expressions either in an internal table result\_tab or in a structure result\_wa. The internal table or structure can be specified as follows:

-   An existing internal table with the table type MATCH\_RESULT\_TAB with the row type MATCH\_RESULT from ABAP Dictionary is specified for result\_tab. A structure of the type MATCH\_RESULT from ABAP Dictionary is specified for result\_wa
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm) is specified after RESULTS. If ALL OCCURRENCES is used, an internal table of the type MATCH\_RESULT\_TAB is declared; if FIRST OCCURRENCE is used, a structure of the type MATCH\_RESULT is declared.
    

When an internal table is used, this table is initialized before the search starts. When the search runs, a row is added to the internal table for each match found. If a structure is used, it is assigned the values of the last occurrence. If FIRST OCCURRENCE is used and an internal table is specified, precisely one row is inserted in this table if the search is successful.

The row type or structure type MATCH\_RESULT has the following components:

-   OFFSET of type INT4 for storing the offset of the substring
    
-   LENGTH of type INT4 for storing the length of the substring
    
-   SUBMATCHES from table type SUBMATCH\_RESULT\_TAB with the row type SUBMATCH\_RESULT for storing the offset and length of the substring of the current occurrence, which are saved in the [subgroup registers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax_operators.htm) of a regular expression
    

The rows from result\_tab are sorted according to the OFFSET and LENGTH columns. An additional component LINE is only relevant for the [FIND IN TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm) variant.

If a search is not successful, the contents of the result\_tab internal table are empty, whereas the result\_wa structure retains its contents.

Note

The RESULTS addition is particularly useful when used in conjunction with the ALL OCCURRENCES addition when an internal table is used, and in conjunction with the FIRST OCCURRENCE addition when a structure is used.

Example

The following search for a regular expression finds the two substrings "ab" and "ba" at offset 0 and offset 2, and fills the internal table result\_tab with two corresponding values. Since the regular expression contains three subgroups, the submatches component contains three lines. The first line of submatches relates to the outer parenthesis, the second line relates to the first inner parenthesis, and the third line relates to the second inner parenthesis. The first and second lines contain the offset and length of the first occurrence, and the third line remains undefined. The first and third lines contain the offset and length of the second occurrence, and the second line remains undefined.

DATA: result\_tab TYPE match\_result\_tab.
FIND ALL OCCURRENCES OF REGEX \`((ab)|(ba))\`
     IN 'abba'
     RESULTS result\_tab.

Addition 6

... SUBMATCHES s1 s2 ...

Effect

This addition can be used only when a [regular expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax.htm) is used in [pattern](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_pattern.htm). The current contents of the [registry of the subgroups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenregex_syntax_operators.htm) of the regular expression are written to s1, s2, ... for the current occurrence. The operands can be specified as follows:

-   As existing variables that expect a character-like type.
    
-   As an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of type string is declared.
    

When ALL OCCURRENCES is used, the last occurrence is evaluated. If there are more operands s1, s2, ... than subgroups, the surplus variables of fixed length are filled with blanks and strings are initialized. If there are fewer operands s1, s2, ... than subgroups, the surplus subgroups are ignored.

Example

The regular expression after REGEX has two subgroups. The search finds the substring at offset 0 with length 14. The contents of the registry for the subgroups are "Hey" and "my".

DATA text TYPE string.
text = \`Hey hey, my my, Rock and roll can never die\`.
FIND REGEX \`(\\w+)\\W+\\1\\W+(\\w+)\\W+\\2\`
     IN text
     IGNORING CASE
     MATCH OFFSET DATA(moff)
     MATCH LENGTH DATA(mlen)
     SUBMATCHES DATA(s1) DATA(s2).