---
title: "Numeric Target Fields"
description: |
  Target Conversion i, int8, (b, s) The value of the decimal floating point number is rounded up to the nearest integer. If this number is within the value range(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm 'Glossary Entry') for the data type i, int8, (b, s),
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_decfloat.htm"
abapFile: "abenconversion_type_decfloat.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "abenconversion", "type", "decfloat"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) →  [Numeric Source Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_source_fields.htm) → 

Source Field Type decfloat16, decfloat34

If the source field does not contain a [valid decimal floating point number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), the handleable exception CX\_SY\_CONVERSION\_NO\_NUMBER is raised, except in the case of assignments to another decimal floating point number. In ABAP invalid decimal floating point numbers are the special values "+Infinity", "-Infinity", "NaN", and "sNaN", which represent infinity or invalid numbers and are designated in standard IEEE-754-2008.

-   [Numeric Target Fields](#abenconversion-type-decfloat-1--------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_DECFLOAT_2)

-   [Byte-Like Target Fields](#abenconversion-type-decfloat-3--------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_DECFLOAT_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

The value of the decimal floating point number is rounded up to the nearest integer. If this number is within the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") for the data type i, int8, (b, s), it is converted to the internal representation of the corresponding integer number. If the number is not within this range, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

The value of the decimal floating point number is rounded to the number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") in the target field. If this number is within the value range for the data type of the target field, it is converted to the internal representation of a packed number. If the number is not within this range, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

decfloat16, decfloat34

If an assignment is made to the same data type, the content is passed unconverted. In assignments from decfloat34 to decfloat16, the mantissa is shortened from 34 to 16 places and, if necessary, rounded commercially. If the mantissa of the target field is long enough, the [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") is preserved. If the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of decfloat16 is exceeded, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

f

The value of the decimal floating point number is applied in the value of a binary floating point number. If the decimal number cannot be represented as a binary floating point number, the nearest value is used. If the value is outside the value range for floating point numbers, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

Example

The result of the following conversion has the rounded value 1234.57.

DATA decf TYPE decfloat34 VALUE '1234.5678'.
TYPES pack TYPE p LENGTH 8 DECIMALS 2.
DATA(result) = CONV pack( decf ).

Character-Like Target Fields

Target

Conversion

c

The content of the source field is first converted to a [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry"), as described for the data type string. The result of this conversion is then copied, right-justified into the target field. If the target field is longer than the text string, it is padded on the left with blanks. If the target field is shorter than the text string, mathematical notation is converted to scientific notation and, if necessary, the mantissa is commercially rounded. If the length is not sufficient for at least one place of the mantissa, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

n

The value of the decimal floating point number is rounded up to the nearest integer. The absolute value is passed to the target field as a right-justified string of digits. If the target field is longer than the string of digits, the field is padded with zeroes on the left. If it is too short, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

string

If the exponent of the decimal floating point number is less than or equal to 0 and the absolute value of the number is greater than or equal to 1E-6, the floating point number is formatted in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") without gaps as follows: the string of digits consists of the mantissa of the decimal floating point number without leading zeroes. If the exponent of the decimal floating point number is less than 0, a decimal point is inserted in the place in question. If the exponent of the decimal floating point number is greater than 0 or the absolute value of the number is less than 1E-6, the floating point number is formatted in [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry") as follows: the mantissa is made up of the mantissa of the decimal floating point number without leading zeroes. If the mantissa contains more than one place, a decimal point is inserted after the first place. The exponent is always displayed with a sign and without leading zeroes. In both depictions, the sign is displayed for negative values but not for positive. Both depictions are also used if the value of the decimal floating point number is 0. The maximum length of the target field is 24 for decfloat16 and 42 for decfloat34.

Notes

-   The conversion rule for floating point numbers to text strings is as follows: a text string filled by the assignment of a decimal floating point number produces the same internal representation as in the original decimal floating point number (the [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") is preserved).

-   The formatting options [STYLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) for the statement [WRITE ... TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) and [STYLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) in [character strings templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) of [character string expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) provide further formats for assigning decimal floating point numbers to text strings.

Examples

The following table shows how decimal floating point numbers are converted to text strings:

Floating Point Number

Text String

123E+0

123

123E+1

1.23E+3

2E+1

2E+1

1230E-2

12.30

5E-6

0.000005

50E-7

0.0000050

5E-7

5E-7

50E-8

5.0E-7

\-0E+0

\-0

0E-100

0E-100

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is converted first to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_ibs.htm)).

xstring

The content of the source field is converted first to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_ibs.htm)).

Example

The byte chain produced by the conversion is 0000007C and matches the result of the conversion of the rounded number 124.

DATA decf TYPE decfloat34 VALUE '123,999'.
TYPES hex TYPE x LENGTH 4.
DATA(result) = CONV hex( decf ).

Date/Time Fields as Target Fields

Target

Conversion

d

The content of the source field is converted first to data type i (see above) and then to type d (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_ibs.htm)).

t

The content of the source field is converted first to data type i (see above) and then to type t (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_ibs.htm)).

Example

The value of the time field produced by the conversion is 100001.

DATA decf TYPE decfloat34 VALUE '36000.999'.
DATA(result) = CONV t( decf ).