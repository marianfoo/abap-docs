---
title: "REPLACE SECTION OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_shortref.htm) Syntax REPLACE SECTION OFFSET off LENGTH len OF dobj WITH new IN CHARACTERBYTE MODE. Addition:  ... IN CHARACTERBYTE MODE(#!ABAP_ONE_ADD@1@) Effect When
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_in_position.htm"
abapFile: "abapreplace_in_position.htm"
keywords: ["do", "if", "try", "data", "abapreplace", "position"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) →  [REPLACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace.htm) → 

REPLACE SECTION OF

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_shortref.htm)

Syntax

REPLACE SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj WITH new
                *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[
... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

When position-based replacements are performed, the section in dobj is replaced starting at the offset specified in off for the length specified in len with the content of the operand new. off and len are [numeric expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with the operand type i. new is a [functional operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

At least one of the additions OFFSET or LENGTH must be specified. If an offset is specified but no length, the content of the data object dobj is replaced starting at the offset off and continuing to the end. If a length is specified but no offset, the offset 0 is used implicitly. The values of off and len must be greater than or equal to 0 and the section specified by off and len must be located within the length of dobj.

Addition

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and new have to be character-like or byte-like.

Example

The statement FIND is used to determine the offset and length of the first word "know" in the data objects text1 and text2 and to replace this section in a position-based manner in text1 and text2 with "should know that". After the first REPLACE statement, text1 contains the complete content "I should know that you know" and sy-subrc contains 0. After the second REPLACE statement, text2 contains the truncated content "I should know that" and sy-subrc contains 2.

DATA: text1 TYPE string,
      text2 TYPE c LENGTH 18,
      off  TYPE i,
      len TYPE i.
text1 = text2 = 'I know you know'.
FIND 'know' IN text1 MATCH OFFSET off
                     MATCH LENGTH len.
REPLACE SECTION OFFSET off LENGTH len OF:
                text1 WITH 'should know that',
                text2 WITH 'should know that'.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Specified offset or length violated the bounds of the string dobj.
    Runtime error: REFI\_WRONG\_SECTION