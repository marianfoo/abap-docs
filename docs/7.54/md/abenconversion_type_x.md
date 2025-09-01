---
title: "Source Field Type x"
description: |
  -   Numeric Target Fields(#abenconversion-type-x-1--------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_2) -   Byte-Like Target Fields(#abenconversion-type-x-3--------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_4) Numeric Target Fields Target Conversion i, (b,
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_x.htm"
abapFile: "abenconversion_type_x.htm"
keywords: ["do", "if", "try", "data", "types", "abenconversion", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) →  [Byte-Like Source Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_source_fields.htm) → 

Source Field Type x

-   [Numeric Target Fields](#abenconversion-type-x-1--------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_2)

-   [Byte-Like Target Fields](#abenconversion-type-x-3--------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_X_4)

Numeric Target Fields

Target

Conversion

i, (b, s)

Only the last 4 bytes of the source field are converted. If the source field is shorter than 4 bytes, it is made longer on the left with the hexadecimal 0 until it is 4 bytes long. The content of these bytes is interpreted as a number stored in big endian order, of type i. The hexadecimal values from "00000000" to "7FFFFFFF" are assigned to numbers from +0 to +2147483647 and the hexadecimal values from "80000000" to "FFFFFFFF" are assigned to the numbers -2147483648 to -1. The numbers obtained in this way are converted in the internal representation of the corresponding integer. If the [value range](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_range_glosry.htm "Glossary Entry") of data types b or s is not sufficient, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

int8

Only the last 8 bytes of the source field are converted. If the source field is shorter than 8 bytes, it is made longer on the left with the hexadecimal 0 until it is 8 bytes long. The content of these bytes is interpreted as a number stored in big endian order, of type int8. The hexadecimal values from "0000000000000000" to "7FFFFFFFFFFFFFFF" are assigned to numbers from +0 to +9223372036854775807 and the hexadecimal values from "8000000000000000" to "FFFFFFFFFFFFFFFF" are assigned to the numbers --9223372036854775808 to -1. The numbers obtained in this way are converted in the internal representation of the corresponding integer.

p

The content of the source field is converted first to data type i (see above) and then to type p (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

decfloat16, decfloat34

The content of the source field is first converted into data type i (see above) and then into type decfloat16 or decfloat34 (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

f

The content of the source field is converted first to data type i (see above) and then to type f (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

Example

The result of the following conversion has the value 10000.

DATA hex TYPE x LENGTH 2 VALUE '2710'.
DATA(result) = CONV i( hex ).

Character-Like Target Fields

Target

Conversion

c

The values of each half-byte in the source field are converted to the hexadecimal characters "0" to "9" and "A" to "F" and passed left-justified to the target field. If the target field is longer than the number of characters passed, it is padded on the right with blank characters. If it is too short, the number is truncated on the right.

n

The content of the source field is converted first to data type i (see above) and then to type n (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

string

The values of each half-byte in the source field are converted to the hexadecimal characters "0" to "9" and "A" to "F" and placed in the target field. The resulting length of the target field is determined by the number of characters passed.

Example

The string produced by the conversion is 27. Two characters 10 are cut off on the right.

DATA hex TYPE x LENGTH 2 VALUE '2710'.
TYPES c2 TYPE c LENGTH 2.
DATA(result) = CONV c2( hex ).

Byte-Like Target Fields

Target

Conversion

x

The bytes in the source field are passed left-justified to the target field. The length of the target field is specified by the number of bytes passed. If the target field is shorter, it is truncated on the right.

xstring

The bytes in the source field are placed in the target field. The resulting length of the target field is determined by the number of bytes passed.

Example

The byte chain produced by the conversion is 27100000.

DATA hex2 TYPE x LENGTH 2 VALUE '2710'.
TYPES hex4 TYPE x LENGTH 4.
DATA(result) = CONV hex4( hex2 ).

Date/Time Fields as Target Fields

Target

Conversion

d

The content of the source field is converted first to data type i (see above) and then to type d (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

t

The content of the source field is converted first to data type i (see above) and then to type t (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_ibs.htm)).

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the time field produced by the conversion is 024640 (or 10000 seconds after midnight).

DATA hex TYPE x LENGTH 2 VALUE '2710'.
DATA(result) = CONV t( hex ).