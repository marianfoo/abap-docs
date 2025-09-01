  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Predefined Numeric Types

The data objects of the numeric data types are used to handle number values.

Properties

Type

Length

Standard Length

Name

b

1 byte

 

1-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

s

2 byte

 

2-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

i

4 byte

 

4-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

int8

8 byte

 

8-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

p

1 to 16 bytes

8 byte

[Packed number](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")

decfloat16

8 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 16 places

decfloat34

16 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 34 places

f

8 byte

 

[Binary floating point number](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") with 17 places

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

The valid length for packed numbers is between 1 and 16 bytes. Two places are packed into one byte, where the last byte only contains one place and the sign (the number of places or digits is calculated from 2 \* len1). After the decimal separator, up to 14 [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") are permitted (as long as the number of decimal places does not exceed the number of places). Depending on the field length len and the number of decimal places dec, the following applies to the value range: (-10^(2len-1) +1) / (10^(+dec)) to (+10^(2len-1) -1) /(10^(+dec)) in increments of 10^(-dec). Any intermediate values are rounded (decimal). Invalid content produces undefined behavior.

0

decfloat16

Decimal floating point numbers of this type are represented internally with 16 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E385(1E-16 - 1) and -1E-383 for the negative range, 0 and +1E-383 to 1E385(1 - 1E-16) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 16-digit decimal number can be represented precisely with a decimal floating point number of this type

0

decfloat34

Decimal floating point numbers of this type are represented internally with 34 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E6145(1E-34 - 1) and -1E-6143 for the negative range, 0 and +1E-6143 and 1E6145(1 - 1E-34) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 34-digit decimal number can be represented precisely using a decimal floating point number like this.

0

f

Binary floating point numbers are represented internally in accordance with the IEEE-754 standard (double precision). In ABAP, 17 places are represented (one integer digit and 16 decimal places). Valid values are numbers between -1.7976931348623157E+308 and -2.2250738585072014E-308 for the negative range and between +2.2250738585072014E-308 and +1.7976931348623157E+308 for the positive range, plus 0. Both validity intervals are extended in the direction of zero using subnormal numbers in accordance with the IEEE-754 standard.

0

Programming Guideline

[Select the numeric type](javascript:call_link\('abenselect_numeric_type_guidl.htm'\) "Guideline")

Notes

-   The numeric data objects are used to handle numeric values and [numeric calculations](javascript:call_link\('abencompute_expressions.htm'\)). Here, the data type f for binary floating point numbers is replaced largely by the types decfloat16 and decfloat34 for decimal floating point numbers.

-   The types b and s are internal types and cannot be specified either statically or dynamically in ABAP statements. Self-defined data types and data objects in ABAP programs have the data types b or s if they were defined with reference to data elements in ABAP Dictionary that have the [external data types](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) or [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The system class [CL\_ABAP\_MATH](javascript:call_link\('abenfloating_point_class.htm'\)) contains constants for the minimum and maximum values of most numeric types. The methods GET\_MIN\_VALUE and GET\_MAX\_VALUE in the class CL\_ABAP\_EXCEPTIONAL\_VALUES can also be used.

-   The system class CL\_ABAP\_ELEMDESCR in [RTTS](javascript:call_link\('abenrtti.htm'\)) contains constants TYPE\_P\_MAX\_LENGTH and TYPE\_P\_MAX\_DECIMALS for the maximum length and the maximum number of decimal places p.

-   Since the decimal places in a floating point number of type f are represented internally as dual fractions, there is not an exact equivalent for every number that can be represented in the decimal system. This can produce rounding errors in conversions and intermediate results of calculations. These errors can be avoided by using a two-step rounding procedure (see [Example](javascript:call_link\('abenfloating_point_class.htm'\))).

-   The type p, for which a length interval is specified in the second column in the first table, is [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. Also, both the [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") and the length are undefined. The entry in the Standard Length column specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The data type p is used to implement [fixed point numbers](javascript:call_link\('abenfixed_point_number_glosry.htm'\) "Glossary Entry"). The number of decimal places in a packed number with the type p is a type attribute defined using the addition [DECIMALS](javascript:call_link\('abaptypes_simple.htm'\)) and is not saved together with the number. Technically, the number value is determined by dividing the saved sequence of digits in the packed number by 10 to the power of the number of decimal places (10^(+dec)). In the definition of a packed number, the number of decimal places cannot be greater than the number of places calculated from 2 \*  len - 1. Otherwise, the decimal separator is outside the sequence of digits and not all decimal places can be given values. For example, if a packed number with length 1 and two decimal places has a value range of \-0.09 to +0.09 in increments of 0.01, there is no possible value for which the first decimal place is filled, for example 0.14.

-   A number with the data type p that has more decimal places than places can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") or in serializations to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry").

-   The [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary mapped to the data type p cannot have more decimal places than places. In ABAP, declarations like this that are known statically produce a syntax check warning.

-   For data objects of data type p, the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic must be set so that the decimal separator is respected. Otherwise, in all operations, the content is handled as if there is no decimal separator. The sequence of digits in the variables of type p is interpreted as an integer value. Exceptions are:

-   Representation on screens

-   Formatting with [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   [Assignments](javascript:call_link\('abenconversion_type_p.htm'\)) to character-like objects with the types c and string

-   See also [Numeric Data Types](javascript:call_link\('abennumber_types.htm'\)).

Example

Declares variables with built-in numeric ABAP types for a numeric calculation.

DATA: num1   TYPE i,
      num2   TYPE i,
      result TYPE decfloat34.
...
result = num1 / num2.

Executable Example

[Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))