---
title: "SEARCH"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_shortref.htm) Obsolete Syntax SEARCH dobj FOR pattern IN CHARACTERBYTE MODE STARTING AT p1 ENDING AT p2 ABBREVIATED AND MARK. Extras: 1. ... IN CHARACTERBY
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch-.htm"
abapFile: "abapsearch-.htm"
keywords: ["do", "while", "if", "case", "try", "data", "abapsearch"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_string_obsolete.htm) → 

SEARCH

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_shortref.htm)

Obsolete Syntax

SEARCH dobj FOR pattern *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
       *\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*
       *\[*ABBREVIATED*\]*
       *\[*AND MARK*\]*.

Extras:

[1\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... ABBREVIATED](#!ABAP_ADDITION_3@3@)
[4\. ... AND MARK](#!ABAP_ADDITION_4@4@)

Effect

This statement searches the data object dobj according to the search pattern specified in pattern. The additions enable subareas to be searched, shortened patterns to be found, and occurrences to be marked.

The search ends at the first hit and sy-fdpos is set to the offset of the found pattern or to the word in the search area. If the pattern is not found, sy-fdpos is set to value 0.

Search Pattern in pattern

The pattern in pattern can have the following forms (the case is ignored in string processing):

-   "pat"
    In string processing, blanks at the end of the string are ignored and wildcard characters (\*) are handled in a special way if they are found at the position of the first or last character (see following sections).
    
-   ".pat."
    Only valid for string processing. If a pattern "pat" is enclosed by periods (.), the exact string "pat" is the search object. Here, trailing blanks are respected and wildcard characters (\*) are not handled as wildcards.
    
-   "\*pat"
    Only valid for string processing. If a pattern contains the wildcard character (\*) as the first character, a word is searched for (see below) which ends with the string "pat".
    
-   "pat\*"
    Only valid for string processing. If a string contains the wildcard character (\*) as its last character, a word (see below) is searched for that begins with the string "pat".
    
-   "\*pat\*"
    Only valid for string processing. If a string contains the wildcard character (\*) as both the first and last character, the search is not for a word (see below) that contains "pat", but a word that ends with "pat\*".
    

A word in a character-like data object dobj is defined: Enclosed by non-alphanumeric separators.

In string processing with data objects dobj of fixed length, the trailing blanks are respected, while with pattern they are not. If pattern is an empty string or is of type c, n, d, or t and only contains blanks, the search is never successful.

System Fields

sy-subrc

Meaning

0

The search pattern was found in dobj.

4

The search pattern was found in dobj.

Notes

-   It is preferable to use the new statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) instead of SEARCH, wherever possible. The functions of SEARCH (with the exception of marking the found pattern (using the addition AND MARK)) are covered by the introduction of [regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) in the statement FIND. If required, the marking performed after a pattern is found can be replaced by the statement [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) or the built-in function [replace](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreplace_functions.htm). Here, the [replacement patterns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_replace.htm) for [regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregex_syntax.htm) are particularly useful. In contrast to FIND, SEARCH is not case-sensitive and is much slower when searching large texts.
    
-   A variant of this statement used for searching tables ([SEARCH itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm)) has also been replaced by a variant of the statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm).
    

Addition 1

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and pattern must be either character-like or byte-like.

Addition 2

... *\[*STARTING AT p1*\]* *\[*ENDING AT p2*\]*

Effect

The additions STARTING AT and ENDING AT can be used to restrict the search to a subarea of the data object dobj. p1 and p2 expect data objects of the data type i.

The value in p1 specifies the first, the value in p2 specifies the last of the positions to be searched. Without specifying STARTING AT p1, the data object dobj is searched from the first position to position p2. Without specifying ENDING AT p2, dobj is searched from position p1 to the end.

If the addition STARTING AT is specified, sy-fdpos is set to the offset of the occurrence minus the offset of p1, provided that the search was successful. In the following cases, the search is not carried out, and sy-subrc is set to 4:

-   The value of p1 or p2 is less than 1.
    
-   The value of p1 is greater than the length of dobj.
    
-   The value of p2 is less than or equal to p1.
    

Note

The term "position" is not equivalent to the term "[offset](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_glosry.htm "Glossary Entry")". A byte or a character on position 1 has an offset of 0.

Addition 3

... ABBREVIATED

Effect

The addition ABBREVIATED can be used to specify a shortened pattern in pattern. This addition is only possible in string processing. A word is searched in dobj that begins with the same character as the pattern in pattern and contains the remaining characters of "pattern" in the same order, but at otherwise completely arbitrary positions of the word.

Example

Search for an abbreviated pattern with SEARCH. The FIND statement has the same result and also specifies the occurrence.

DATA: text TYPE string VALUE \`Roll over Beethoven\`,
      moff TYPE i,
      mlen TYPE i.
SEARCH text FOR 'bth' ABBREVIATED.
FIND REGEX '\\<(b\[a-z0-9\]\*t\[a-z0-9\]\*h\[a-z0-9\]\*)\\>' IN text
     IGNORING CASE
     MATCH OFFSET moff
     MATCH LENGTH mlen.

Addition 4

... AND MARK

Effect

The addition AND MARK is used to transform a string found in dobj or a found word to uppercase letters. This addition is only possible in string processing and, if used, only modifiable data objects can be specified for dobj.

Example

The first two SEARCH statements have the same effect. They find the first blank in text and set sy-fdpos to the value 4. The third SEARCH statement finds the word "Beethoven" in the search area (beginning from position 6 of text), sets sy-fdpos to the value 5. In other words, the offset of the occurrence in the search area and changes the content of text to "Roll over BEETHOVEN".

DATA: text TYPE string VALUE \`Roll over Beethoven\`,
      pos TYPE i.
SEARCH text FOR '. .'.
SEARCH text FOR \` \`.
IF sy-subrc = 0.
  pos = sy-fdpos + 2.
    SEARCH text FOR 'bth' STARTING AT pos
                          ABBREVIATED AND MARK.
ENDIF.