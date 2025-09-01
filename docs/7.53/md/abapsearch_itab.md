---
title: "SEARCH itab"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_shortref.htm) Obsolete Syntax SEARCH itab FOR pattern IN CHARACTERBYTE MODE STARTING AT idx1 ENDING AT idx2 ABBREVIATED AND MARK. Extras: 1. ... IN CHARACTER
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm"
abapFile: "abapsearch_itab.htm"
keywords: ["do", "if", "case", "try", "data", "internal-table", "abapsearch", "itab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_obsolete.htm) → 

SEARCH itab

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_shortref.htm)

Obsolete Syntax

SEARCH itab FOR pattern *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
       *\[*STARTING AT idx1*\]* *\[*ENDING AT idx2*\]*
       *\[*ABBREVIATED*\]*
       *\[*AND MARK*\]*.

Extras:

[1\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*STARTING AT idx1*\]* *\[*ENDING AT idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... ABBREVIATED](#!ABAP_ADDITION_3@3@)
[4\. ... AND MARK](#!ABAP_ADDITION_4@4@)

Effect

This statement searches the rows of the index table itab for a pattern specified in pattern. SEARCH cannot be used for [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry"). The statement always searches the internal table and not the [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry") (if it exists).

For pattern, a character-like or byte-like data object can be specified, depending on the processing type. The pattern in pattern can have the same forms as the statement [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch-.htm) has for character-like or byte-like string processing.

The search ends at the first hit and sy-tabix is set to the index of the table row found. sy-fdpos is set to the offset of the character string or byte string found or word found in the table row. If the pattern is not found, sy-fdpos and sy-tabix are set to 0.

Return Value

sy-subrc

Meaning

0

Pattern found in itab.

4

Pattern not found in itab.

Note

The statement SEARCH has been replaced by the statement [FIND IN TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm).

Addition 1

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The addition IN CHARACTER MODE or IN BYTE MODE is used to determine whether [character or byte string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) is carried out. The row type of the internal table must be suitable for the chosen processing type. If no addition is specified, the search is carried out character by character.

Addition 2

... *\[*STARTING AT idx1*\]* *\[*ENDING AT idx2*\]*

Effect

The additions STARTING AT and ENDING AT are used to restrict the search to just some of the table rows of table itab. idx1 and idx2 expect data objects of the type i. The value in idx1 specifies from which row and to which row the value idx2 is searched for. If only one of the additions is specified, the search is carried out from the first to the last row.

The search is not carried out and sy-subrc is set to 4, if:

-   the value of idx1 or idx2 is less than 1
    
-   the value of idx1 is greater than the number of rows in itab
    
-   the value of idx2 is less than the value of idx1
    

Addition 3

... ABBREVIATED

Effect

When searching character by character, it is possible to specify an abbreviated pattern in pattern for character string processing by using the addition ABBREVIATED (just as with the statement [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch-.htm)).

Addition 4

... AND MARK

Effect

When searching character by character, it is possible to transform a character string or a word found in itab to uppercase using the statement AND MARK (just as with the statement [SEARCH for character string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch-.htm)).

Example

The search character by character is successful and sets sy-tabix to the index (2) of the corresponding row and sy-fdpos to the offset (7) of the word "see" in the row. After the statement is executed, the second table row contains the content "you'll SEE the line" specified by the addition AND MARK.

DATA text\_table TYPE TABLE OF string.
APPEND: 'Sweet child in time' TO text\_table,
        'you''ll see the line' TO text\_table,
        'the line between' TO text\_table,
        'good and bad.' TO text\_table.
SEARCH text\_table FOR '.see.' AND MARK.