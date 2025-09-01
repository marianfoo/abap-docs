  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Byte-Like Source Fields](javascript:call_link\('abenbyte_source_fields.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20x%2C%20ABENCONVERSION_TYPE_X%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Field Type x

-   [Numeric Target Fields](#abenconversion-type-x-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_2)
-   [Byte-Like Target Fields](#abenconversion-type-x-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_4)

Numeric Target Fields   

Target

Conversion

i, (b, s)

Only the last 4 bytes of the source field are converted. If the source field is shorter than 4 bytes, it is extended on the left with the hexadecimal 0 until it is 4 bytes long. The content of these bytes is interpreted as a number stored in big endian order, of type i. The hexadecimal values from 00000000 to 7FFFFFFF are assigned to numbers from +0 to +2147483647 and the hexadecimal values from 80000000 to FFFFFFFF are assigned to the numbers -2147483648 to -1. The number obtained in this way is converted to the internal representation of the corresponding integer. If the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of data types b or s is not sufficient, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

int8

Only the last 8 bytes of the source field are converted. If the source field is shorter than 8 bytes, it is extended on the left with the hexadecimal 0 until it is 8 bytes long. The content of these bytes is interpreted as a number stored in big endian order, of type int8. The hexadecimal values from 0000000000000000 to 7FFFFFFFFFFFFFFF are assigned to numbers from +0 to +9223372036854775807 and the hexadecimal values from 8000000000000000 to FFFFFFFFFFFFFFFF are assigned to the numbers --9223372036854775808 to -1. The number obtained in this way is converted in the internal representation of the corresponding integer.

p

The content of the source field is first converted to data type i (see above) and then to type p (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

decfloat16, decfloat34

The content of the source field is first converted into data type i (see above) and then into type decfloat16 or decfloat34 (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

f

The content of the source field is first converted to data type i (see above) and then to type f (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The result of the following conversion has the value 10000.

DATA hex TYPE x LENGTH 2 VALUE '2710'.
FINAL(result) = CONV i( hex ).

Character-Like Target Fields   

Target

Conversion

c

The values of each half-byte in the source field are converted to the hexadecimal characters 0 to 9 and A to F and passed left-aligned to the target field. If the target field is longer than the number of characters passed, it is padded on the right with blank characters. If it is too short, it is truncated on the right.

n

The content of the source field is first converted to data type i (see above) and then to type n (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

string

The values of each half-byte in the source field are converted to the hexadecimal characters 0 to 9 and A to F and passed to the target field. The resulting length of the target field is determined by the number of characters passed.

Example

The string resulting from the conversion is 27. Two characters 10 are cut off on the right.

DATA hex TYPE x LENGTH 2 VALUE '2710'.
TYPES c2 TYPE c LENGTH 2.
FINAL(result) = CONV c2( hex ).

Byte-Like Target Fields   

Target

Conversion

x

The bytes in the source field are passed left-aligned to the target field. If the target field is longer than the number of bytes passed, it is padded with hexadecimal 0 on the right. If the target field is shorter, it is truncated on the right.

xstring

The bytes in the source field are placed in the target field. The resulting length of the target field is determined by the number of bytes passed.

Example

The byte chain resulting from the conversion is 27100000.

DATA hex2 TYPE x LENGTH 2 VALUE '2710'.
TYPES hex4 TYPE x LENGTH 4.
FINAL(result) = CONV hex4( hex2 ).

Date/Time Fields as Target Fields   

Target

Conversion

d

The content of the source field is first converted to data type i (see above) and then to type d (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

t

The content of the source field is first converted to data type i (see above) and then to type t (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the time field resulting from the conversion is 024640 (or 10000 seconds after midnight).

DATA hex TYPE x LENGTH 2 VALUE '2710'.
FINAL(result) = CONV t( hex ).