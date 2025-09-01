# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / Lossless Assignments / Lossless Assignments, Rules

Included pages: 8


### abapmove_exact.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) → 

Lossless Assignments, Rules

A lossless assignment checks the assigned content, before its [conversion](javascript:call_link\('abenconversion_glosry.htm'\) "Glossary Entry") to an incompatible target object, to determine whether the assignment is possible without losses, that is:

-   whether it is a valid value for the data type of the source
-   whether a conversion to the target field would lead to a loss of values
-   whether the value is valid for the target field after conversion

If the source contains a valid value and no values are lost, the conversion is performed in accordance with the associated [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). Otherwise no assignment is made. If it is already known statically that one of the prerequisites is violated, a syntax error occurs. If this violation is not identified until the program is executed, a catchable exception is raised whose exception class is generally a subclass of CX\_SY\_CONVERSION\_ERROR.

The following sections outline which rules are used by the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) when checking the content of its argument with respect to the data types involved:

-   [Checks elementary data objects](javascript:call_link\('abenmove_exact_elementary.htm'\))
-   [Checks structures](javascript:call_link\('abenmove_exact_structure.htm'\))
-   [Checks internal tables](javascript:call_link\('abenmove_exact_itab.htm'\))

If an exception is raised as a result of an invalid or inappropriate value, the VALUE attribute of the exception object is assigned this value in character form and this value is generally also included in the exception text.

No checks are made for:

-   compatible data types
    
    The content of the argument is passed to the return value without being converted, even if it already contains an invalid value.
    
-   reference variables
    
    Checks on the content of a reference variable using EXACT are not useful because nothing is converted and the content is either assignable or not assignable, as specified by the [assignment rules for reference variables](javascript:call_link\('abenconversion_references.htm'\)).
    

A syntax check warning is produced if it is known statically that no checks are performed for the combination of argument and target type, making EXACT superfluous.

Hint

Since lossless checks are only performed for conversions to incompatible data types, it is best to only use the operator EXACT to fill data objects that should only be given valid objects. Other types of assignments that require a start value to be specified in the declaration using [VALUE](javascript:call_link\('abapdata_options.htm'\)) can create invalid values that are then not recognized when a lossless assignment is made to a compatible target field.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\))
[Checking Structures](javascript:call_link\('abenmove_exact_structure.htm'\))
[Checking Internal Tables](javascript:call_link\('abenmove_exact_itab.htm'\))


### abenmove_exact_elementary.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Elementary Data Objects

In conversions between incompatible [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) ensures that no values are lost. Regardless of the value of the argument, the operator EXACT generally does not allow conversions between data objects with the following data types, for which the values are always lost when the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) are applied.

-   From x, xstring to n, d, t, and vice versa.
-   From x, xstring to all [numeric data types](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), and vice versa.
-   From d and t to b and s

Conversions from d to t and vice versa, and most conversions for time stamps of the type utclong are prohibited regardless of the operator EXACT. Other conversions that are not allowed are conversions in which byte-like fields are converted directly or as an interim result to the data type i and vice versa.

If the compiler detects a forbidden conversion a syntax error occurs. If a forbidden conversion is detected at runtime, an exception of the class CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP is raised. The same applies to types for which conversions are allowed, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

If allowed conversions are made between incompatible elementary data objects, the operator EXACT checks the content of the argument at runtime as follows:

-   [Check for valid values in the argument](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
-   [Check for appropriate values in the target type](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))

If the elementary data types for which no conversion is required are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), no checks are performed, and no exceptions are raised.

Hints

-   When the operator EXACT is used, a catchable exception is always raised at runtime when a forbidden conversions is made, in particular, when conversions are attempted between d and t. In all other cases, an attempted conversion of this type raises an uncatchable exception.
-   If an argument contains an invalid or inappropriate value, this is assigned to its return value, even if the operator EXACT is used.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Valid Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
[Suitable Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))
![Example](exa.gif "Example") [Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\))


### abenmove_exact_elementary_valid.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) →  [Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\)) → 

Valid Values for Lossless Assignments

When a lossless conversion of an elementary argument of the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) to an incompatible data type is performed, the argument must, depending on its data type, represent a valid value according to the following tables:

-   [Numeric Arguments](#abenmove-exact-elementary-valid-1-------character-like-arguments---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_VALID_2)
-   [Byte-Like Arguments](#abenmove-exact-elementary-valid-3-------date-fields--time-fields--and-time-stamp-fields-as-arguments---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_VALID_4)

Numeric Arguments

Argument

Valid Values

i, int8, (b, s)

All content is valid.

decfloat16, decfloat34

All values that can result from assignments and calculations in ABAP are valid. The special values that indicate infinity or invalid numbers are invalid. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_NUMBER.

p

All values that can result from assignments and calculations in ABAP are valid. If, however, the type has more decimal places than available places, this type is always invalid. (This means that the last half byte can contain only the hexadecimal values "A", "C", "E", or "F", for a positive sign, or "B" or "D" for a negative sign. The remaining half bytes can contain only the hexadecimal values "0" to "9".) If, however, the type has more decimal places than available places, this type is always invalid. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_NUMBER.

f

Integers with a maximum of 15 digits.

Hint

Decimal numbers with decimal places cannot generally be represented precisely by binary floating point numbers of type f. The operator EXACT therefore restricts the valid value range to integers with a maximum of 15 places.

Example

The second lossless assignment raises an exception, caused by the attempt to convert a number with decimal places.

DATA arg TYPE f.
arg = 123.
DATA(result1) = EXACT i( arg ).
arg = '123.456'.
DATA(result2) = EXACT i( arg ).

Character-Like Arguments

Argument

Valid Values

c, string

All content is valid. No check is made to determine whether a byte or string of bytes contains valid characters for the current code page.

n

The argument can only contain the digits "0" to "9" only. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_NUMBER.

Example

The second lossless assignment raises an exception because numtext does not contain a valid value.

DATA numtext TYPE n LENGTH 6.
DATA time    TYPE t.
numtext = time = '115500'.
DATA(result1) = EXACT string( numtext ).
numtext = time = '1155\_\_'.
DATA(result2) = EXACT string( numtext ).

Byte-Like Arguments

Argument

Valid Values

x, xstring

All content is valid.

Example

The lossless assignment does not raise an exception for any of the randomly generated byte strings.

DATA hex TYPE x LENGTH 1.
DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 0 max = 1 ).
DO 8 TIMES.
  SET BIT sy-index OF hex TO rnd->get\_next( ).
ENDDO.
DATA(result) = EXACT string( hex ).

Date fields, time fields, and time stamp fields as arguments

Argument

Valid Values

d

The argument must contain a valid date in the format "yyyymmdd", for which the following values are possible: "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31. In addition, the initial value "00000000" is also a valid date. The value "00010101" is only a valid date in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") and nowhere else in ABAP. The smallest valid value that corresponds to one day is "00010102". The values "15821005" to "15821014" are also invalid due to the switch from the Julian to the Gregorian calendar, where 04.10.1582 is followed directly by 15.10.1582. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_DATE.

t

The argument must contain a valid time in the format "hhmmss", for which the following values are allowed: "hh" (hours): 00 to 23, "mm" (minutes): 01 to 59, "ss" (seconds): 01 to 59. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_TIME.

utclong

The argument must contain a value from the value range for [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)), meaning a valid time stamp, or be initial. Invalid values raise an exception from the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME.

Hints

-   The values that the operator EXACT allows for date fields of type d are different from those defined by the [value range](javascript:call_link\('abenbuiltin_types_date_time.htm'\)). The initial value "00000000", which does not lie within the value range and is normally considered an invalid date, is considered valid here, whereas the value "00010101", which lies within the value range, is considered invalid. Only in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") is the value "00010101" also accepted as a valid date and treated like the initial value "00000000" in operand positions for which values must meet the rules for lossless assignments.
-   The rule for time stamps of data type utclong does not differ from the standard [conversion rule](javascript:call_link\('abenconversion_type_utclong.htm'\)).

Example

The second lossless assignment raises an exception because date does not contain a valid value.

DATA date TYPE d.
date = '20160729'.
DATA(result1) = EXACT i( date ).
date = '201607\_\_'.
DATA(result2) = EXACT i( date ).


### abenmove_exact_elementary_fit.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) →  [Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\)) → 

Suitable Values for Lossless Assignments

When an elementary argument of the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is converted to an incompatible elementary data type, the argument must contain a value suitable for the target type as shown in the following tables. This avoids loss of values and provides a valid value for the target type.

-   [Numeric Target Types](#abenmove-exact-elementary-fit-1-----------target-type-with-numeric-type--except-f----@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_2)
    -   [Target Type of Type f](#abenmove-exact-elementary-fit-3-------character-like-target-types---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_4)
    -   [Target Type of Type c](#abenmove-exact-elementary-fit-5-----------target-type-of-type-string---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_6)
    -   [Target Type of Type n](#abenmove-exact-elementary-fit-7-------byte-like-target-types---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_8)
    -   [Target Type of Type x](#abenmove-exact-elementary-fit-9-----------target-type-of-type-xstring---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_10)
-   [Date/Time Types as Target Types](#abenmove-exact-elementary-fit-11-----------target-type-of-type-d---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_12)
    -   [Target Type of Type t](#abenmove-exact-elementary-fit-13-----------target-type-of-type-utclong---@ITOC@@ABENMOVE_EXACT_ELEMENTARY_FIT_14)

Numeric Target Types

Target Type with Numeric Type (Except f)

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Numbers from the value range of the target type that do not have to be rounded. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

Numbers from the value range of the target type that do not have to be rounded. In arguments of type c or string, appropriate number [representations](javascript:call_link\('abennumerical_value.htm'\)) according to the [conversion rules](javascript:call_link\('abencharacter_source_fields.htm'\)) are allowed if their value lies within the value range and does not have to be rounded. Arguments of type c or string are also allowed if they contain only blanks or empty strings. Arguments of type n can contain as many digits after leading zeros as fit in the value range. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

In arguments of types d and t, all [valid](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) date and times (if specified) are allowed, but they cannot be assigned to the target types b and s. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW. The time stamp type utclong is not allowed.

Example

The second lossless assignment raises an exception because rounding would have to take place.

DATA(result1) = EXACT i( '123' ).
DATA(result2) = EXACT i( '123.4' ).

Target Type of Type f

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Integers with a maximum of 15 digits. In arguments of type i (b, s), all values are allowed. In arguments of types int8, p, decfloat16, and decfloat34, a maximum of 15 places, but no decimal places are allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_INEXACT\_FLTP.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

Integers with a maximum of 15 digits. In arguments of type c or string, numeric representations in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") are allowed, whose values are integers with a maximum of 15 places. Arguments of type c or string are also allowed if they contain only blanks or empty strings. Arguments of type n can contain up to 15 digits after leading zeros. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_INEXACT\_FLTP.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

In arguments of types d and t, all [valid](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) date and time specifications are allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE or CX\_SY\_CONVERSION\_NO\_TIME The time stamp type utclong is not allowed.

Example

The second lossfree assignment raises an exception because the value of the argument is not an integer.

DATA(result1) = EXACT f( '3.33E+2' ).
DATA(result2) = EXACT f( '3.33E+1' ).

Character-like target types

Target Type of Type c

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Numbers for which the result from the [conversion](javascript:call_link\('abennumeric_source_fields.htm'\)) to type c is not longer than the target type, but the result cannot be rounded. Positive signs represented as blanks are ignored. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

Character strings that are not longer than the target type. In arguments of type c, trailing blanks are ignored. In arguments of type string, no characters are ignored, including trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Byte chains for which the result from the [conversion](javascript:call_link\('abenbyte_source_fields.htm'\)) to type c is not longer than the target type. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

[Valid](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) date, time, or time stamp specifications. The result of the conversion must not be longer than the target type. Values that are too long raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

Example

The second lossless assignment raises an exception because the character string would be truncated.

TYPES c4 TYPE c LENGTH 4.
DATA(result1) = EXACT c4( 'abcd' ).
DATA(result2) = EXACT c4( 'abcdef' ).

Target Type of Type string

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Any [valid](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) numbers.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

Any character strings.

[Byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Any byte chains.

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Any [valid](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) date, time, or time stamp information.

Example

This program section never raises an exception.

DATA text TYPE c LENGTH 80 VALUE 'Never say never again'.
cl\_demo\_input=>request( CHANGING field = text ).
DATA(result) = EXACT string( text ).

Target Type of Type n

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Positive integers including 0, whose number of digits does not exceed the length of the target type. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

A closed string of digits that cannot be longer than the target type apart from leading zeros. Arguments of type c and string can contain additional leading and trailing blanks. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_NO\_NUMBER or CX\_SY\_CONVERSION\_OVERFLOW.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry").

Arguments of type d and t cannot contain blanks and the target type must have the same length as the source fields. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_NO\_NUMBER or CX\_SY\_CONVERSION\_OVERFLOW. The time stamp type utclong is not allowed.

Example

The second lossless assignment raises an exception because not enough places are available for all digits.

TYPES n8 TYPE n LENGTH 8.
DATA(result1) = EXACT n8( 12345678 ).
DATA(result2) = EXACT n8( 1234567890 ).

Byte-Like Target Types

Target Type of Type x

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Not allowed

[Character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

An even number of characters between "0" and "9" and "A" and "F" in a closed sequence. The number of bytes represented must correspond exactly to the length of the target type. Other characters are not allowed, with the exception that trailing blanks in arguments of type c are ignored. Arguments of the type n are not allowed. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT, CX\_SY\_CONVERSION\_DATA\_LOSS, or CX\_SY\_CONVERSION\_NO\_RAW.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

A byte chain that has exactly the same length as the target type. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT or CX\_SY\_CONVERSION\_DATA\_LOSS.

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Arguments of the types d, t, and utclong are not allowed.

Example

The second lossless assignment raises an exception because the byte string would be truncated.

TYPES hex TYPE x LENGTH 1.
DATA(result1) = EXACT hex( 'FF' ).
DATA(result2) = EXACT hex( 'FFFF' ).

Target Type of Type xstring

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Not allowed

[Character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

An even number of characters between "0" and "9" and "A" and "F" in a closed sequence. Other characters are not allowed, with the exception that trailing blanks in arguments of type c are ignored. Arguments of the type n are not allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_RAW.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

A byte chain of any length.

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Arguments of the types d, t, and utclong are not allowed.

Example

The second lossless assignment raises an exception because the number of characters is uneven.

DATA(result1) = EXACT xstring( 'FF' ).
DATA(result2) = EXACT xstring( 'FFF' ).

Date/Time Types as Target Types

Target Type of Type d

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Positive integers between 0 and 3652060 (which corresponds to the date 12/31/9999). Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

A left-aligned [valid date](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) specification with the format "yyyymmdd". Arguments of type n and string can contain these eight digits only. Arguments of type c can also contain trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Valid date specification in an argument of type d. An argument of type t or utclong is not allowed.

Example

The second lossless assignment raises an exception because the date is invalid.

DATA(result1) = EXACT d( '20160729' ).
DATA(result2) = EXACT d( '20160700' ).

Target Type of Type t

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Positive integers between 0 and 86399 (which corresponds to the time 23:59:59). Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

A left-aligned [valid time](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) specification with the format "hhmmss". Arguments of type n and string can contain only these six digits. Arguments of type c can also contain trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_TIME.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Valid time specification in an argument of type t. An argument of type d or utclong is not allowed.

Example

The second lossless assignment raises an exception because the numeric value exceeds the number of seconds in a day.

DATA(result1) = EXACT t( 10000 ).
DATA(result2) = EXACT t( 100000 ).

Target Type of Type utclong

Argument

Suitable Values

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")

Not allowed

[Character-like data type](javascript:call_link\('abencharlike_data_type_glosry.htm'\) "Glossary Entry")

A left-aligned valid [character-like representation](javascript:call_link\('abents_value.htm'\)) of a time stamp, such as "yyyy-mm-ddThh:mm:ss.fffffff" or an initial value with any number of trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE\_TIME. Arguments of type n are not allowed.

[byte-like data type](javascript:call_link\('abenbyte_like_data_typ_glosry.htm'\) "Glossary Entry")

Not allowed

[Date type](javascript:call_link\('abendate_type_glosry.htm'\) "Glossary Entry"), [time type](javascript:call_link\('abentime_type_glosry.htm'\) "Glossary Entry"), or [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry")

Valid time stamp in an argument of type utclong. Arguments of type d or t are not allowed.

Example

A character string composed correctly can be assigned to a time stamp without loss.

CONVERT UTCLONG utclong\_current( )
        INTO DATE DATA(dat)
             TIME DATA(tim)
             FRACTIONAL SECONDS DATA(fs)
             TIME ZONE sy-zonlo.
DATA(ts) = EXACT utclong( |{ dat DATE = ISO } {
                             tim TIME = ISO }{
                             shift\_left( val = |{ fs }|
                                         places = 1 ) }| ).


### abenmove_exact_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) →  [Checking Elementary Data Objects](javascript:call_link\('abenmove_exact_elementary.htm'\)) → 

Lossless Assignment

This example demonstrates how the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) is used to make lossless assignments.

Source Code

REPORT demo\_move\_exact.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: text     TYPE string VALUE \`4 Apples + 2 Oranges\`,
          num\_text TYPE n LENGTH 8.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( text
      )->begin\_section( \`Not really exact:\` ).
    num\_text = text.
    out->write\_data( num\_text
      )->next\_section( \`Try to be exact:\` ).
    TRY.
        num\_text = EXACT #( text ).
        out->write\_data( num\_text ).
      CATCH cx\_sy\_conversion\_error INTO DATA(exc).
        out->write\_text( exc->get\_text( ) ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Without the operator EXACT, text is assigned to num\_text without the check for validity of the assigned value against the associated [conversion rules](javascript:call_link\('abenconversion_type_string.htm'\)), which produces a value that is not very intuitive, "00000042".

Using the operator EXACT, the value that is passed is checked and an exception is raised in the case in question.


### abenmove_exact_elementary.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Elementary Data Objects

In conversions between incompatible [elementary data objects](javascript:call_link\('abenelementary_data_object_glosry.htm'\) "Glossary Entry"), the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) ensures that no values are lost. Regardless of the value of the argument, the operator EXACT generally does not allow conversions between data objects with the following data types, for which the values are always lost when the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) are applied.

-   From x, xstring to n, d, t, and vice versa.
-   From x, xstring to all [numeric data types](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), and vice versa.
-   From d and t to b and s

Conversions from d to t and vice versa, and most conversions for time stamps of the type utclong are prohibited regardless of the operator EXACT. Other conversions that are not allowed are conversions in which byte-like fields are converted directly or as an interim result to the data type i and vice versa.

If the compiler detects a forbidden conversion a syntax error occurs. If a forbidden conversion is detected at runtime, an exception of the class CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP is raised. The same applies to types for which conversions are allowed, but for which a loss of values can be identified regardless of the content, for example, if a conversion is made to fields that are too short.

If allowed conversions are made between incompatible elementary data objects, the operator EXACT checks the content of the argument at runtime as follows:

-   [Check for valid values in the argument](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
-   [Check for appropriate values in the target type](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))

If the elementary data types for which no conversion is required are [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry"), no checks are performed, and no exceptions are raised.

Hints

-   When the operator EXACT is used, a catchable exception is always raised at runtime when a forbidden conversions is made, in particular, when conversions are attempted between d and t. In all other cases, an attempted conversion of this type raises an uncatchable exception.
-   If an argument contains an invalid or inappropriate value, this is assigned to its return value, even if the operator EXACT is used.

Executable Example

[Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\)).

Continue
[Valid Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_valid.htm'\))
[Suitable Values for Lossless Assignments](javascript:call_link\('abenmove_exact_elementary_fit.htm'\))
![Example](exa.gif "Example") [Lossless Assignment](javascript:call_link\('abenmove_exact_abexa.htm'\))


### abenmove_exact_structure.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Structures

The operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) can only be used to convert structures to [compatible](javascript:call_link\('abencompatibility.htm'\)) structures. Full compatibility is not required for the following deep components, for which the specified requirements apply:

-   For components that have a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry"), [up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") but not [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are allowed.
-   For table-like components, it is sufficient if the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") is compatible. This means that the full [compatibility](javascript:call_link\('abencompatibility.htm'\)), which includes [table categories](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"), is not required here.

Hints

-   The operator EXACT ensures that the [conversion rules](javascript:call_link\('abenconversion_struc.htm'\)) for flat structures are the same as those for deep structures. It is not possible to make conversions between structures and elementary data objects.
-   If the structured types are compatible, no further checks are performed on the content. If the source structure already contains invalid data, this data is assigned to a compatible return value despite the addition EXACT.

Example

Unlike simple conversion, the lossless assignment leads to a syntax error.

DATA:
  BEGIN OF struc,
    col1 TYPE d,
    col2 TYPE t,
  END OF struc.
DATA(result1) = CONV string( struc ).  "Possible
DATA(result2) = EXACT string( struc ). "Not possible


### abenmove_exact_itab.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Lossless Assignments](javascript:call_link\('abenlossless_move.htm'\)) →  [Lossless Assignments, Rules](javascript:call_link\('abapmove_exact.htm'\)) → 

Checking Internal Tables

The operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) checks a table specified as an argument line-by-line against the tabular target type:

-   If the line types are elementary, each line is checked for [elementary data objects](javascript:call_link\('abenmove_exact_elementary.htm'\)).
-   If the line types are structured, each line is checked for [structures](javascript:call_link\('abenmove_exact_structure.htm'\)).
-   If the line types are tabular, the check described here is performed. If the inner table is a table with an elementary line type, the line types must be compatible.

The [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and the [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") are ignored by the check.

If the check raises an exception due to an invalid value or loss of values, the target table is filled with all lines assigned up to that point.

Hints

-   If an internal table with elementary line type is converted, this line type does not have to be compatible with the target line type but only needs to be convertible according to the conditions of EXACT. If an internal table with elementary line type is converted that occurs as an inner table of another table, it is handled like a structure component and the line types must be compatible.
-   If internal tables are converted using the operator EXACT, only internal tables with elementary line type can raise an exception.

Example

The first seven lines of the internal table itab are assigned to the internal table jtab. When the eighth line is assigned, the exception CX\_SY\_CONVERSION\_NO\_DATE occurs.

DATA itab TYPE STANDARD TABLE OF d
          WITH EMPTY KEY.
itab = VALUE #( ( CONV d( '20160101' ) )
                ( CONV d( '20160201' ) )
                ( CONV d( '20160301' ) )
                ( CONV d( '20160401' ) )
                ( CONV d( '20160501' ) )
                ( CONV d( '20160601' ) )
                ( CONV d( '20160701' ) )
                ( CONV d( '20160ß01' ) )
                ( CONV d( '20160901' ) )
                ( CONV d( '20161001' ) )
                ( CONV d( '20161101' ) )
                ( CONV d( '20161201' ) ) ).
DATA jtab TYPE SORTED TABLE OF string
          WITH UNIQUE KEY table\_line.
TRY.
    jtab = EXACT #( itab ).
  CATCH cx\_sy\_conversion\_no\_date.
ENDTRY.
cl\_demo\_output=>display( jtab ).
