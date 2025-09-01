  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Numeric Source Fields](javascript:call_link\('abennumeric_source_fields.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Source Field Type p, ABENCONVERSION_TYPE_P, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Source Field Type p

If the program property [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is not set, the decimal separator in source fields with the type [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) is ignored, except in assignments to character-like target fields with the types c and string.

-   [Numeric Target Fields](#abenconversion-type-p-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_P_2)
-   [Byte-Like Target Fields](#abenconversion-type-p-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_P_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

The value of the packed number is rounded commercially to an integer number. If this number is within the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") for the data type i, (b, s), it is converted to the internal representation of the corresponding integer number. Otherwise, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

p

The value of the packed number is rounded commercially to the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") of the target field. If this number is within the value range for the data type of the target field, it is converted to the internal representation of this packed number. Otherwise, the catchable exception CX\_SY\_CONVERSION\_OVERFLOW is raised.

decfloat16, decfloat34

The value of the packed number is converted into the internal format of a decimal floating point number. If the number of places for a target field of type decfloat16 is greater than 16 when the assignment is performed, commercial rounding to 16 places is applied. If the mantissa of the target field is long enough, the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") is set to the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") of the source field. An invalid value in the source field raises the catchable exception CX\_SY\_CONVERSION\_NO\_NUMBER.

f

The value of the packed number is converted into the internal format of a binary floating point number. If the decimal number cannot be represented as a binary floating point number, the nearest value is used. An invalid value in the source field produces undefined behavior.

Example

The result of the following conversion has the value 8.1499999999999995E-01.

DATA pack TYPE p DECIMALS 3 VALUE '0.815'.
FINAL(result) = CONV f( pack ).

Character-Like Target Fields   

Target

Conversion

c

The value of the packed number is formatted in [commercial notation](javascript:call_link\('abennumerical_value.htm'\)) and passed right-aligned to the target field. The character "-" is set in the last position for a negative value and a blank is set in the last place for a positive value. If the target field is longer than the string of digits, including the plus/minus sign, it is padded with blanks on the left. If it is too short, the number representation is moved to the right by one position for positive values. If the target field is still too short (and for negative values), it is truncated on the left and the character \* is set in the first position of the target field.

n

The value of the packed number is rounded commercially to an integer number. The absolute value is passed to the target field as a right-aligned string of digits. If the target field is longer than the string of digits, the field is padded with zeros on the left. If it is too short, the values on the left are cut off.

string

The value of the packed number is formatted in [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry") and passed to the target field without gaps. The character "-" is set in the last position for a negative value and a blank is set in the last position for a positive value. The resulting length of the target field is determined by the number of digits, plus the places for the plus/minus sign and the decimal separator.

Hint

If the number of decimal places in the source field is greater than the number of digits calculated from 2 x the length of dobj - 1, the corresponding number of zeros is inserted between decimal separators and digits in assignments to data objects of the types c and string and the longer string of digits is assigned.

Example

The string resulting from the conversion is 123.456-.

DATA pack TYPE p DECIMALS 3 VALUE '-123.456'.
FINAL(result) = CONV string( pack ).

Byte-Like Target Fields   

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The byte chain resulting from the conversion is 0000007C and matches the result of the conversion of the rounded number 124.

DATA pack TYPE p DECIMALS 3 VALUE '123.999'.
TYPES hex TYPE x LENGTH 4.
FINAL(result) = CONV hex( pack ).

Date/Time Fields as Target Fields   

Target

Conversion

d

The content of the source field is first converted to data type i (see above) and then to type d (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

t

The content of the source field is first converted to data type i (see above) and then to type t (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Hint

The method TSTMP2UTCLONG of the class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) converts [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) to [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") of the type utclong.

Example

The value of the date field resulting from the conversion is 20170111.

DATA pack TYPE p VALUE 736341.
FINAL(result) = CONV d( pack ).