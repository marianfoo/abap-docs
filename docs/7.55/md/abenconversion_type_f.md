  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Numeric Source Fields](javascript:call_link\('abennumeric_source_fields.htm'\)) → 

Source Field Type f

-   [Numeric Target Fields](#abenconversion-type-f-1--------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_F_2)

-   [Byte-Like Target Fields](#abenconversion-type-f-3--------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_F_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

The value of the binary floating point number is rounded up to an integer. If this number is within the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") for the data type i, int8, (b, s), it is converted to the internal representation of the corresponding integer number. Otherwise, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

The value of the binary floating point number is rounded to the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") in the target field. If this number is within the value range for the data type of the target field, it is converted to the internal representation of a packed number. Otherwise, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

decfloat16, decfloat34

The value of the binary floating point number is rounded to 17 places, depending on the platform, and converted to the value of a decimal floating point number. The representation in the decimal floating point number is such that the mantissa has no trailing zeros.

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

The value of the binary floating point number is formatted in the same way as when converting to the data type string. If the target field is shorter than the complete notation, the mantissa is rounded up. If the target field is not long enough to include at least one digit of the mantissa in addition to the exponent and the minus sign (for a negative value), the target field is padded with "\*" characters. If the target field is longer than the complete notation, it is padded with blanks on the left.

n

The value of the floating point number is rounded up to an integer. The absolute value of this number is passed as a right-aligned string of digits to the target field. If the target field is longer than the string of digits, the field is padded with zeros on the left. If it is too short, it is truncated on the left.

string

The value of the binary floating point number is formatted in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") and transferred to the target field without gaps. The exponent is always displayed with a plus/minus sign and at least two places, and the mantissa with one integer digit and 16 decimal places. To do this, the internal representation of the floating point number is rounded to 17 places (depending on the platform). Depending on the sign and the length of the exponent, the resulting length of the target field is between 22 and 24.

Example

The string resulting from the conversion is \-1.2345678000000001E-04.

DATA fltp TYPE f VALUE '-1.2345678E-4'.
DATA(result) = CONV string( fltp ).

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The byte chain resulting from the conversion is 0000007C and matches the result of the conversion of the rounded number 124.

DATA fltp TYPE f VALUE '1.23999E+2'.
TYPES hex TYPE x LENGTH 4.
DATA(result) = CONV hex( fltp ).

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

The value of the time field resulting from the conversion of the result of a calculation with calculation type f is 181216.

DATA(result) = CONV t( 2 \*\* 16 ).