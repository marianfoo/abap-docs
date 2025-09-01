  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) → 

SHIFT

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_shortref.htm)

Syntax

SHIFT dobj *\[* *{**\[* [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_places.htm)*\]**\[* [direction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_direction.htm)*\]**}* *|* [deleting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_deleting.htm) *\]*
           *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

This statement shifts the content of a variable dobj. In [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_places.htm), the number of places to be shifted can be specified and in [direction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_direction.htm), the direction of the shift. In [deleting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_deleting.htm), the characters to be deleted from the data object by the shift can be specified. If no additions are specified, the content is shifted to the left by one place.

By default, free places created by the shift are filled with blanks or hexadecimal 0 for data objects of fixed length, depending on the processing method. Data objects of type string or xstring are shortened by the number of shifted places when shifted to the left, and lengthened by the number of shifted places when shifted to the right.

When the character string is processed, the trailing blanks are respected for data objects dobj of fixed length.

Note

To shift a string in an operand position, [shift functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshift_functions.htm) that cover some of the functions of the statement SHIFT can be used.

Example

The shortest form of statement SHIFT. The content of str is moved one place to the left.

DATA(str) = \`0123456789\`.
SHIFT str.
cl\_demo\_output=>display( str ).

Addition

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) is performed. If the addition is not specified, character string processing is carried out. Depending on the processing method, dobj, [substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_places.htm) and [mask](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_deleting.htm) must be character-like or byte-like.

Example

Moving a byte string one byte to the left.

DATA(xstr) = CONV xstring( \`AABBCCDDEEFF\` ).
SHIFT xstr IN BYTE MODE.
cl\_demo\_output=>display( xstr ).

Continue
[SHIFT - places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_places.htm)
[SHIFT - direction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_direction.htm)
[SHIFT - deleting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_deleting.htm)