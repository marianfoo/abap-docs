  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_string_obsolete.htm) → 

REPLACE substring WITH

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_pattern_shortref.htm)

Obsolete Syntax

REPLACE substring WITH new INTO dobj
        *\[*IN *{*BYTE*|*CHARACTER*}* MODE*\]*
        *\[*LENGTH len*\]*.

Extras:

[1\. ... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)

Effect

This statement scans a character string or byte chain dobj for the substring specified in substring and replaces the first character sequence or byte sequence in dobj that matches substring with the contents of the data object new.

The memory areas of substring and new must not overlap, otherwise the result is undefined. If substring is an empty string, the position before the first character or byte of the search range is found and the content of new is inserted before the first character.

If the length of the intermediate result is longer than the length of dobj, the object is truncated on the right in the case of data objects of fixed length. If the length of the intermediate result is shorter than the length of dobj, data objects of fixed length are padded on the right with blanks or hexadecimal zeros. Data objects of variable length are adjusted accordingly.

In character string processing, the trailing blanks are not ignored for data objects dobj, substring, and new of type c, d, n, or t.

System Fields

sy-subrc

Meaning

0

The substring in substring was replaced in the target field dobj by the content of new.

4

The substring in substring could not be replaced in the target field dobj by the content of new.

Note

This variant of the REPLACE statement has been replaced by the variant [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm).

Addition 1

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is carried out. Depending on the processing type, the data objects substring, new, and dobj must be character-like or byte-like.

Addition 2

... LENGTH len

Effect

If the addition LENGTH is not specified, all the data objects involved are evaluated in their entire length. If the addition LENGTH is specified, only the first len characters or bytes of substring are used for the search. len expects a data object of the type i.

Example

After the replacements, text1 contains the complete content "I should know that you know", while text2 has the cut-off content "I should know that".

DATA: text1      TYPE string      VALUE 'I know You know',
      text2      TYPE c LENGTH 18 VALUE 'I know You know',
      substring  TYPE string      VALUE 'know',
      new        TYPE string      VALUE 'should know that'.
REPLACE substring WITH new INTO text1.
REPLACE substring WITH new INTO text2.