---
title: "Built-In Numeric Types"
description: |
  The data objects of the numeric data types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_type_glosry.htm 'Glossary Entry') are used to store numeric values. Properties Type Length Standard Length Meaning Data Object b 1 byte Internal 1-byte integer type(https://help
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm"
abapFile: "abenbuiltin_types_numeric.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenbuiltin", "numeric"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Numeric%20Types%2C%20ABENBUILTIN_TYPES_NUMERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Numeric Types

The data objects of the [numeric data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") are used to store numeric values.

Properties

Type

Length

Standard Length

Meaning

Data Object

b

1 byte

 

Internal 1-byte [integer type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_type_glosry.htm "Glossary Entry")

1 byte [integer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_glosry.htm "Glossary Entry")

s

2 byte

 

Internal 2-byte [integer type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_type_glosry.htm "Glossary Entry")

2 byte [integer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_glosry.htm "Glossary Entry")

i

4 byte

 

4-byte [integer type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_type_glosry.htm "Glossary Entry")

4 byte [integer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_glosry.htm "Glossary Entry")

int8

8 byte

 

8-byte [integer type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_type_glosry.htm "Glossary Entry")

8 byte [integer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninteger_glosry.htm "Glossary Entry")

p

1 to 16 bytes

8 byte

[Packed number type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpacked_number_type_glosry.htm "Glossary Entry")

[Packed number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpacked_number_glosry.htm "Glossary Entry")

decfloat16

8 byte

 

[Decimal floating point number type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_type_glosry.htm "Glossary Entry") with 16 places

[Decimal floating point number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_glosry.htm "Glossary Entry") with 16 places

decfloat34

16 byte

 

[Decimal floating point number type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_type_glosry.htm "Glossary Entry") with 34 places

[Decimal floating point number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_glosry.htm "Glossary Entry") with 34 places

f

8 byte

 

[Binary floating point number type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbinfloat_type_glosry.htm "Glossary Entry") with 17 places

[Binary floating point number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbinfloat_glosry.htm "Glossary Entry") with 17 places

Value Ranges and Initial Values

Type

Value Range

Initial Value

b

0 to 255

0

s

\-32,768 to +32,767

0

i

\-2,147,483,648 to +2,147,483,647

0

int8

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

0

p

The valid length for packed numbers is between 1 and 16 bytes. Two places are packed into one byte, where the last byte contains only one place and the sign, which is the number of places or places calculated from 2 \* len1. After the decimal separator, up to 14 [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") are allowed (the number of decimal places should not exceed the number of places). Depending on the field length len and the number of decimal places dec, the value range is: (-10^(2len-1) +1) / (10^(+dec)) to (+10^(2len-1) -1) /(10^(+dec)) in increments of 10^(-dec). Any intermediate values are rounded decimally. Invalid content produces undefined behavior.

0

decfloat16

Decimal floating point numbers of this type are represented internally with 16 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E385(1E-16 - 1) and -1E-383 for the negative range, 0 and +1E-383 to 1E385(1 - 1E-16) for the positive range. Values between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 16-digit decimal number can be represented exactly with a decimal floating point number of this type.

0

decfloat34

Decimal floating point numbers of this type are represented internally with 34 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E6145(1E-34 - 1) and -1E-6143 for the negative range, 0 to +1E-6143 and 1E6145(1 - 1E-34) for the positive range. Values between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 34-digit decimal number can be represented exactly using a decimal floating point number.

0

f

Binary floating point numbers are represented internally according to the IEEE-754 standard (double precision). In ABAP, 17 places are represented (one integer digit and 16 decimal places). Valid values are numbers between -1.7976931348623157E+308 and -2.2250738585072014E-308 for the negative range and between +2.2250738585072014E-308 and +1.7976931348623157E+308 for the positive range, plus 0. Both validity intervals are extended to the value zero by subnormal numbers according to IEEE-754. Not every 16-digit number can be represented exactly by a binary floating point number.

0

Programming Guideline

[Selection of the numeric type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_numeric_type_guidl.htm "Guideline")

Hints

-   The numeric data objects are used to store numeric values and [numeric calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm). Here, the data type f for binary floating point numbers is replaced largely by the types decfloat16 and decfloat34 for decimal floating point numbers.
-   The types b and s are internal and cannot be specified either statically or dynamically in ABAP statements. User-defined data types and data objects in ABAP programs have the data types b or s, provided that they were defined with reference to data elements of the ABAP Dictionary that have the [external data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") [INT1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) or [INT2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).
-   The system class [CL\_ABAP\_MATH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_class.htm) contains constants for the minimum and maximum values of most numeric types. The methods GET\_MIN\_VALUE and GET\_MAX\_VALUE in the class CL\_ABAP\_EXCEPTIONAL\_VALUES can also be used.
-   The system class CL\_ABAP\_ELEMDESCR of [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) contains constants TYPE\_P\_MAX\_LENGTH and TYPE\_P\_MAX\_DECIMALS for the maximum length and the maximum number of decimal places for the type p.
-   Due to the internal representation of the decimal places of a floating point number of type f as dual fractions, there is not an exact equivalent for every number that can be represented in the decimal system. This can cause rounding errors in assignments and interim results of calculations. These errors can be avoided by using a two-level rounding procedure (see [Example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_class.htm)).
-   The type p, for which a length interval is specified in the second column of the first table, is [generic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm), which means that the length is not part of the type description. In addition to the length, the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") is undefined. The entry in the column Standard Length determines the length that is used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The data type p is used to implement [fixed point numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_point_number_glosry.htm "Glossary Entry"). The number of decimal places in a packed number with the type p is a type property that is defined using the addition [DECIMALS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm) and that is not stored with the number. Technically, the numeric value is determined by dividing the stored string of digits of the packed number by 10 to the power of the number of decimal places (10^(+dec)). In the definition of a packed number, the number of decimal places should not be greater than the number of places calculated from 2 \*  len - 1. Otherwise, the decimal separator is outside the strings of digits and not all decimal places can be given values. For example, a packed number with length 1 and two decimal places would have a value range of \-0.09 to +0.09 in increments of 0.01 but there cannot be a value for which the first decimal place is also filled, as for example 0.14.
-   A number with the data type p that has more decimal places than places can raise exceptions when converting to external formats such as data types of the database in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") or during serializations to [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry").
-   The [built-in types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) of the ABAP Dictionary mapped to the data type p cannot have more decimal places than places. In ABAP, such declarations, if known statically, produce a syntax check warning.
-   See also [Numeric Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumber_types.htm).
-   For data objects with data type p, the [program property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") Fixed Point Arithmetic must be set so that the decimal separator is respected. Otherwise, the content is handled in all operations as if there were no decimal separator. The sequence of digits in the variables of type p is interpreted as an integer value. Exceptions are:
    -   Representation on screens
    -   [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_p.htm) to character-like objects with the types c and string
    -   Formatting with [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm)

Example

Declaration of variables with built-in numeric ABAP types for a numeric calculation.

DATA: num1   TYPE i,
      num2   TYPE i,
      result TYPE decfloat34.
...
result = num1 / num2.

Executable Example

[Value Ranges of Packed Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_p_value_range_abexa.htm)

Continue
![Example](exa.gif "Example") [Value Ranges of Packed Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_p_value_range_abexa.htm)