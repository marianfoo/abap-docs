  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [REPLACE](javascript:call_link\('abapreplace.htm'\)) → 

REPLACE SECTION OF

[Quick Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax

REPLACE SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj WITH new
                *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[
... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

When position-based replacements are performed, the section in dobj is replaced starting at the offset specified in off for the length specified in len with the content of the operand new. off and len are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with the operand type i. new is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

At least one of the additions OFFSET or LENGTH must be specified. If an offset is specified but no length, the content of the data object dobj is replaced starting at the offset off and continuing to the end. If a length is specified but no offset, the offset 0 is used implicitly. The values of off and len must be greater than or equal to 0 and the section specified by off and len must be located within the length of dobj.

Addition

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](javascript:call_link\('abenstring_processing_statements.htm'\)) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, dobj and new have to be character-like or byte-like.

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_RANGE\_OUT\_OF\_BOUNDS

-   Cause: Specified offset or length violated the bounds of the string dobj.
    Runtime error: REFI\_WRONG\_SECTION