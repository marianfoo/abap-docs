  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) →  [Numeric Source Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_source_fields.htm) → 

Source Field Type f

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_F_1)

-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_F_2)

-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_F_3)

-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_F_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

The value of the floating point number is rounded up to the nearest integer. If this number is within the [value range](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_range_glosry.htm "Glossary Entry") for the data type i, int8, (b, s), it is converted to the internal representation of the corresponding integer number. If the number is not within this range, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

The value of the binary floating point number is rounded to the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") in the target field. If this number is within the value range for the data type of the target field, it is converted to the internal representation of a packed number. If the number is not within this range, the handleable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

decfloat16, decfloat34

The value of the binary floating point number is rounded to 17 places (depending on the platform) and converted to the value of a decimal floating point number. The format in the decimal floating point number is such that the mantissa has no trailing zeroes.

f

The content of the source field is passed unconverted.

Example

The result of the following conversion has the rounded value 1234.57.

DATA fltp TYPE f VALUE '1.2345678E+3'.
TYPES pack TYPE p LENGTH 8 DECIMALS 2.
DATA(result) = CONV pack( fltp ).

Character-Like Target Fields

Target

Conversion

c

The value of the binary floating point number is formatted in the same way as when converting to the data type string. If the target field is shorter than the full notation, the mantissa is rounded up. If the target field is not long enough to include at least one digit of the mantissa apart from the exponent and the minus sign (for a negative value), the target field is padded with "\*" characters. If the target field is longer than the full notation, it is padded with blanks on the left.

n

The value of the floating point number is rounded up to the nearest integer. The absolute value is passed as a right-justified string of digits to the target field. If the target field is longer than the string of digits, the field is padded with zeroes on the left. If it is too short, the values on the left are cut off.

string

The value of the binary floating point number is formatted in [scientific notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscientific_notation_glosry.htm "Glossary Entry") and is copied into the target field. The exponent is always displayed with a sign and at least two places, and the mantissa with one integer digit and 16 decimal places. To do this, the internal representation of the floating point number is rounded to 17 places (depending on the platform) Depending on the sign and the length of the exponent, the resulting length of the target field is between 22 and 24.

Example

The string produced by the conversion is \-1.2345678000000001E-04.

DATA fltp TYPE f VALUE '-1.2345678E-4'.
DATA(result) = CONV string( fltp ).

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is converted first to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_ibs.htm)).

xstring

The content of the source field is first converted to the data type i (see above), and then to the type x (see the [conversion table for source field type i, (b, s)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_ibs.htm)).

Example

The byte chain produced by the conversion is 0000007C and matches the result of the conversion of the rounded number 124.

DATA fltp TYPE f VALUE '1.23999E+2'.
TYPES hex TYPE x LENGTH 4.
DATA(result) = CONV hex( fltp ).

Date/Time Fields as Target Fields

Target

Conversion

d

The content of the source field is converted first to data type i (see above) and then to type d (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_ibs.htm)).

t

The content of the source field is converted first to data type i (see above) and then to type t (see [conversion table for source field type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_ibs.htm)).

Example

The value of the time field produced by the conversion of a result of a calculation with calculation type f is 181216.

DATA(result) = CONV t( 2 \*\* 16 ).