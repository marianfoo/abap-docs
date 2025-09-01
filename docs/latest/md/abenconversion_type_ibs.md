---
title: "Numeric Target Fields"
description: |
  Target Conversion i, int8, (b, s) In an assignment is made to the same data type, the content is passed unconverted. Otherwise, the value of the integer is converted to the internal representation i, int8, (b, s). If the value range(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/a
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm"
abapFile: "abenconversion_type_ibs.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abenconversion", "type", "ibs"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) →  [Numeric Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20i%2C%20int8%2C%20%28b%2C%20s%29%2C%20ABENCONVERSION_TYPE_IBS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Source Field Type i, int8, (b, s)

Types [b](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) are internal and cannot be specified directly in ABAP statements. User-defined data types and data objects in ABAP programs have the data type b or s if they are defined with reference to data elements of the ABAP Dictionary, which have the [external data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") INT1 or INT2.

-   [Numeric Target Fields](#abenconversion-type-ibs-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_IBS_2)
-   [Byte-Like Target Fields](#abenconversion-type-ibs-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_IBS_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

In an assignment is made to the same data type, the content is passed unconverted. Otherwise, the value of the integer is converted to the internal representation i, int8, (b, s). If the [value range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the internal data types i, int8, b, or s is exceeded, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

The value of the integer is converted to the internal representation of a packed number. If the value range of the target field is too small, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

decfloat16, decfloat34

The value of the integer is converted to internal representation of a decimal floating point number with [scaling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscale_glosry.htm "Glossary Entry") 0.

f

The value of the integer is converted to the internal format of a binary floating point number.

Example

The integers 1 to 99999 can be converted to the type p with length 4 and two decimal places. (In this case, an exception is raised due to the value range being exceeded.)

TYPES pack TYPE p LENGTH 4 DECIMALS 2.
DO.
  TRY.
      FINAL(result) = CONV pack( sy-index ).
    CATCH cx\_sy\_conversion\_overflow.
      cl\_demo\_output=>display( |{ result }| ).
      EXIT.
  ENDTRY.
ENDDO.

Character-Like Target Fields   

Target

Conversion

c

The value of the integer is formatted in [commercial notation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_value.htm) and passed right-aligned and without a decimal separator to the target field. For a negative value, the character \- is placed in the last position and for a positive value, a blank is placed there. If the target field is longer than the string of digits, including the plus/minus sign, it is padded with blanks on the left. If it is too short, the number representation is moved to the right by one place for positive values. If the target field is still too short (and for negative values), it is truncated on the left and the character \* is set in the first position of the target field.

n

The absolute value of this integer number is passed as a right-aligned string of digits to the target field. If the target field is longer than the string of digits, it is padded with zeros on the left. If it is too short, it is truncated on the left.

string

The value of the integer is formatted in [commercial notation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommercial_notation_glosry.htm "Glossary Entry") and passed, without gaps and without decimal separators to the target field. The character \- is set in the last position for a negative value and a blank is set in the last position for a positive value. The resulting length of the target field is determined by the number of digits plus the place for the sign.

Example

The string resulting from the conversion is 123-.

FINAL(result) = CONV string( -123 ).

Byte-Like Target Fields   

Target

Conversion

x

Data objects of the types b or s are converted to the internal representation of data type i. The 4 or 8 bytes of the data types i and int8 are positioned in the target field so that they are right-aligned and in [big endian](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbig_endian_glosry.htm "Glossary Entry") order. If the target field is too long, it is padded on the left with hexadecimal 0. If it is too short, it is truncated on the left.

xstring

Data objects of the types b or s are converted to the internal representation of data type i. The 4 or 8 bytes of the data types i and int8 are positioned in the target field in [big endian](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbig_endian_glosry.htm "Glossary Entry") order. In this representation, positive values have 1, 2, 3, 4, or 8 bytes. Negative values always require 4 or 8 bytes. For positive values, the leading zeros before the fourth or eighth byte are not transported. Therefore, the resulting length of the target field is 1 byte for data type b, 1, 2, or 4 bytes for data type s and 1, 2, 3, 4, or 8 bytes for data type int8.

Hint

In conversions of the data types b and s to x and xstring, it is important to note that the leading zeros are cut off in the previous conversion to i and also in the conversion of i to xstring. To ensure the result is correct, it is recommended that only the data types i, b, and s are converted to fields of type x and length 4 and then used. For example, negative values in a field of data type s always require 4 bytes instead of the expected 2 bytes during the conversion to x or xstring. This can produce unexpected results in a target field of length 2. For fields of the type int8, possible target fields are of type x and length 8.

Example

The byte chain resulting from the conversion is 01E240.

FINAL(result) = CONV xstring( 123456 ).

Executable Example

[Conversion of Integer Numbers to Bytes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_int_to_hex_abexa.htm)

Date/Time Fields as Target Fields   

Target

Conversion

d

If the value of the integer is between 1 and 3,652,060, it is interpreted as the number of days since 01.01.0001 and the resulting date is placed in the target field in the format yyyymmdd. If the value is outside this range, the target field is padded with the character 0.

t

The value of the integer is divided by the number of seconds in a day (86,400) and the integer remainder of the division is interpreted as the number of seconds since midnight. The resulting time is placed in the target field in the format hhmmss.

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Hints

-   The assignment of the value 0 to a target field of type d produces the value 0000000 for an invalid date and not 00010101 for 01.01.0001. The earliest valid date that can be created by assigning a number is 02.01.0001 by assigning the number 1.
-   Converting 577736 to a target field of type d produces 4.10.1582, and converting 577737 produces 15.10.1582. The dates for the intermediate days lost during the switch from the Julian to the Gregorian calendar cannot be created by assigning a numeric value to a target field of type d.

Example

The value of the time field resulting from the conversion is 103045.

FINAL(result) = CONV t( 3600 \* 10 + 30 \* 60 + 45 ).

Continue
![Example](exa.gif "Example") [Conversion of Integer Numbers to Bytes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_int_to_hex_abexa.htm)