---
title: "Suitable Values for Lossless Assignments"
description: |
  When an elementary argument of the operator EXACT(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm) is converted to an incompatible elementary data type, the argument must contain a value suitable for the target type as shown in the following tab
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_fit.htm"
abapFile: "abenmove_exact_elementary_fit.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenmove", "exact", "elementary", "fit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_move.htm) →  [Lossless Assignments, Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_exact.htm) →  [Checking Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Suitable%20Values%20for%20Lossless%20Assignments%2C%20ABENMOVE_EXACT_ELEMENTARY_FIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Suitable Values for Lossless Assignments

When an elementary argument of the operator [EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm) is converted to an incompatible elementary data type, the argument must contain a value suitable for the target type as shown in the following tables. This avoids loss of values and provides a valid value for the target type.

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

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Numbers from the value range of the target type that do not have to be rounded. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

Numbers from the value range of the target type that do not have to be rounded. In arguments of type c or string, appropriate number [representations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_value.htm) according to the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm) are allowed if their value lies within the value range and does not have to be rounded. Arguments of type c or string are also allowed if they contain only blanks or empty strings. Arguments of type n can contain as many digits after leading zeros as fit in the value range. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

In arguments of types d and t, all [valid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) date and times (if specified) are allowed, but they cannot be assigned to the target types b and s. Inappropriate values raise exceptions from the class CX\_SY\_CONVERSION\_ROUNDING or CX\_SY\_CONVERSION\_OVERFLOW. The time stamp type utclong is not allowed.

Example

The second lossless assignment raises an exception because rounding would have to take place.

FINAL(result1) = EXACT i( '123' ).
FINAL(result2) = EXACT i( '123.4' ).

Target Type of Type f   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Integers with a maximum of 15 digits. In arguments of type i (b, s), all values are allowed. In arguments of types int8, p, decfloat16, and decfloat34, a maximum of 15 places, but no decimal places are allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_INEXACT\_FLTP.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

Integers with a maximum of 15 digits. In arguments of type c or string, numeric representations in [scientific notation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscientific_notation_glosry.htm "Glossary Entry") are allowed, whose values are integers with a maximum of 15 places. Arguments of type c or string are also allowed if they contain only blanks or empty strings. Arguments of type n can contain up to 15 digits after leading zeros. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_INEXACT\_FLTP.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

In arguments of types d and t, all [valid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) date and time specifications are allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE or CX\_SY\_CONVERSION\_NO\_TIME The time stamp type utclong is not allowed.

Example

The second lossfree assignment raises an exception because the value of the argument is not an integer.

FINAL(result1) = EXACT f( '3.33E+2' ).
FINAL(result2) = EXACT f( '3.33E+1' ).

Character-Like Target Types   

Target Type of Type c   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Numbers for which the result from the [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_source_fields.htm) to type c is not longer than the target type, but the result cannot be rounded. Positive signs represented as blanks are ignored. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

Character strings that are not longer than the target type. In arguments of type c, trailing blanks are ignored. In arguments of type string, no characters are ignored, including trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Byte chains for which the result from the [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_source_fields.htm) to type c is not longer than the target type. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

[Valid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) date, time, or time stamp specifications. The result of the conversion must not be longer than the target type. Values that are too long raise an exception from class CX\_SY\_CONVERSION\_DATA\_LOSS.

Example

The second lossless assignment raises an exception because the character string would be truncated.

TYPES c4 TYPE c LENGTH 4.
FINAL(result1) = EXACT c4( 'abcd' ).
FINAL(result2) = EXACT c4( 'abcdef' ).

Target Type of Type string   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Any [valid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) numbers.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

Any character strings.

[Byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Any byte chains.

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Any [valid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) date, time, or time stamp information.

Example

This program section never raises an exception.

DATA text TYPE c LENGTH 80 VALUE 'Never say never again'.
cl\_demo\_input=>request( CHANGING field = text ).
FINAL(result) = EXACT string( text ).

Target Type of Type n   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Positive integers including 0, whose number of digits does not exceed the length of the target type. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

A closed string of digits that cannot be longer than the target type apart from leading zeros. Arguments of type c and string can contain additional leading and trailing blanks. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_NO\_NUMBER or CX\_SY\_CONVERSION\_OVERFLOW.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry").

Arguments of type d and t cannot contain blanks and the target type must have the same length as the source fields. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_NO\_NUMBER or CX\_SY\_CONVERSION\_OVERFLOW. The time stamp type utclong is not allowed.

Example

The second lossless assignment raises an exception because not enough places are available for all digits.

TYPES n8 TYPE n LENGTH 8.
FINAL(result1) = EXACT n8( 12345678 ).
FINAL(result2) = EXACT n8( 1234567890 ).

Byte-Like Target Types   

Target Type of Type x   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Not allowed

[Character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

An even number of characters between 0 and 9 and A and F in a closed sequence. The number of bytes represented must correspond exactly to the length of the target type. Other characters are not allowed, with the exception that trailing blanks in arguments of type c are ignored. Arguments of the type n are not allowed. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT, CX\_SY\_CONVERSION\_DATA\_LOSS, or CX\_SY\_CONVERSION\_NO\_RAW.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

A byte chain that has exactly the same length as the target type. Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_SRC\_TOO\_SHORT or CX\_SY\_CONVERSION\_DATA\_LOSS.

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Arguments of the types d, t, and utclong are not allowed.

Example

The second lossless assignment raises an exception because the byte string would be truncated.

TYPES hex TYPE x LENGTH 1.
FINAL(result1) = EXACT hex( 'FF' ).
FINAL(result2) = EXACT hex( 'FFFF' ).

Target Type of Type xstring   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Not allowed

[Character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

An even number of characters between 0 and 9 and A and F in a closed sequence. Other characters are not allowed, with the exception that trailing blanks in arguments of type c are ignored. Arguments of the type n are not allowed. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_RAW.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

A byte chain of any length.

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Arguments of the types d, t, and utclong are not allowed.

Example

The second lossless assignment raises an exception because the number of characters is uneven.

FINAL(result1) = EXACT xstring( 'FF' ).
FINAL(result2) = EXACT xstring( 'FFF' ).

Date/Time Types as Target Types   

Target Type of Type d   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Positive integers between 0 and 3652060 (which corresponds to the date 12/31/9999). Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

A left-aligned [valid date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) specification with the format yyyymmdd. Arguments of type n and string can contain these eight digits only. Arguments of type c can also contain trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Valid date specification in an argument of type d. An argument of type t or utclong is not allowed.

Example

The second lossless assignment raises an exception because the date is invalid.

FINAL(result1) = EXACT d( '20160729' ).
FINAL(result2) = EXACT d( '20160700' ).

Target Type of Type t   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Positive integers between 0 and 86399 (which corresponds to the time 23:59:59). Inappropriate values raise exceptions from classes CX\_SY\_CONVERSION\_OVERFLOW or CX\_SY\_CONVERSION\_ROUNDING.

[character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

A left-aligned [valid time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmove_exact_elementary_valid.htm) specification with the format hhmmss. Arguments of type n and string can contain only these six digits. Arguments of type c can also contain trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_TIME.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Valid time specification in an argument of type t. An argument of type d or utclong is not allowed.

Example

The second lossless assignment raises an exception because the numeric value exceeds the number of seconds in a day.

FINAL(result1) = EXACT t( 10000 ).
FINAL(result2) = EXACT t( 100000 ).

Target Type of Type utclong   

Argument

Suitable Values

[Numeric data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")

Not allowed

[Character-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_type_glosry.htm "Glossary Entry")

A left-aligned valid [character-like representation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abents_value.htm) of a time stamp, such as yyyy-mm-ddThh:mm:ss.fffffff or an initial value with any number of trailing blanks. Inappropriate values raise an exception from class CX\_SY\_CONVERSION\_NO\_DATE\_TIME. Arguments of type n are not allowed.

[byte-like data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry")

Not allowed

[Date type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_type_glosry.htm "Glossary Entry"), [time type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_type_glosry.htm "Glossary Entry"), or [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry")

Valid time stamp in an argument of type utclong. Arguments of type d or t are not allowed.

Example

A character string composed correctly can be assigned to a time stamp without loss.

FINAL(time\_zone) = cl\_demo\_date\_time=>get\_user\_time\_zone( ).
CONVERT UTCLONG utclong\_current( )
        INTO DATE FINAL(dat)
              TIME FINAL(tim)
              FRACTIONAL SECONDS FINAL(fs)
              TIME ZONE time\_zone.
FINAL(ts) = EXACT utclong( |{ dat DATE = ISO } {
                              tim TIME = ISO }{
                              shift\_left( val = |{ fs }|
                                          places = 1 ) }| ).