---
title: "REPLACE SECTION OF"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_shortref.htm) Syntax REPLACE SECTION OFFSET off LENGTH len OF dobj WITH new IN CHARACTERBYTE MODE. Addition: ... IN CHARACTERBYTE MODE(#!ABAP_ONE_ADD@1@) Effect In pos
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_in_position.htm"
abapFile: "abapreplace_in_position.htm"
keywords: ["do", "if", "catch", "data", "abapreplace", "position"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_statements.htm) →  [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%20SECTION%20OF%2C%20ABAPREPLACE_IN_POSITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE SECTION OF

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreplace_shortref.htm)

Syntax

REPLACE SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj WITH new
                *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

In position-based replacements, the section in dobj is replaced starting at the offset specified in off for the length specified in len with the content of the operand new. The same applies to the additions OFFSET and LENGTH as to [FIND SECTION OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfind_section_of.htm).

Addition   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and new must be character-like or byte-like.

Example

The statement FIND determines the offset and length of the first word know in the data objects text1 and text2 and to replace this section in a position-based manner in text1 and text2 with should know that. After the first REPLACE statement, text1 contains the complete content I should know that you know and sy-subrc contains 0. After the second REPLACE statement, text2 contains the truncated content I should know that and sy-subrc contains 2.

DATA: text1 TYPE string,
      text2 TYPE c LENGTH 18,
      off   TYPE i,
      len   TYPE i.
text1 = text2 = 'I know you know'.
FIND 'know' IN text1 MATCH OFFSET off
                     MATCH LENGTH len.
REPLACE SECTION OFFSET off LENGTH len OF:
                text1 WITH 'should know that',
                text2 WITH 'should know that'.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Specified offset or length violated the bounds of the string dobj.
    Runtime error: REFI\_WRONG\_SECTION