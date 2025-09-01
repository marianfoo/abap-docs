---
title: "Numeric Data Types"
description: |
  ABAP supports the numeric data types i(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), int8(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), p(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbui
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_types.htm"
abapFile: "abennumber_types.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abennumber"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) → 

Numeric Data Types

ABAP supports the numeric data types [i](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [int8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [decfloat16](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [decfloat34](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), and [f](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), plus the internal types [b](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm). The latter cannot be specified directly in programs but are created when the built-in types INT1 or INT2 from ABAP Dictionary are referenced. They are generally used in the same way as the type i and are often converted to i internally.

The numeric data objects are used to handle numeric values and are intended for calculations. Calculations involving fields of the types i, int8, and type f correspond more or less directly to the machine commands of the operating system of the current AS Instance [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry"). In contrast, calculations involving packed numbers of type p are programmed in the kernel of the ABAP runtime environment and are therefore somewhat slower. Operations using the decimal floating point numbers decfloat16 and decfloat34 run using a library integrated into the ABAP kernel, until they are supported by the hardware of the host computer.

-   [Integer Numbers](#abennumber-types-1--------packed-numbers---@ITOC@@ABENNUMBER_TYPES_2)

-   [Floating Point Numbers](#abennumber-types-3--------decimal-floating-point-numbers---@ITOC@@ABENNUMBER_TYPES_4)

-   [Binary Floating Point Numbers](#@@ITOC@@ABENNUMBER_TYPES_5)

The common generic type of the numeric data types is numeric.

Programming Guideline

[Select the numeric type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_numeric_type_guidl.htm "Guideline")

Notes

-   To a great extent, [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") of the types decfloat16 and decfloat34 replace the [binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry") with type f.

-   The built-in type n (numeric text field) is not a numeric number type, even though its values are digit-only strings. Instead it is a character-like type, not advisable for use in calculations. Typical examples of numeric text fields are account numbers and article numbers, postal codes, and so on.

Integer Numbers

The data types for integer numbers [i](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) and [int8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) have a [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") from -2147483648 to +2147483647 for i and -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807 for int8 and only cover integers. Integer numbers with the type i can be specified directly in the program as [numeric literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_literal_glosry.htm "Glossary Entry").

Intermediate results in [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") of the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") i or int8 are stored in helper fields of the type i or int8. Otherwise, type i or int8 arithmetic is similar to performing calculations with type p without [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry"). In particular, division rounds numbers rather than truncating them and an overflow raises an exception. The data types i and int8 are typically used for counters, quantities, indexes, and offsets, as well as time periods.

Note

The data types [b](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [s](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), [i](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), and [int8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) provide a complete set of data types for single-byte, 2-byte, 4-byte, and 8-byte integer numbers. The types b and s for short integer numbers, however, cannot be specified directly in ABAP programs. Instead they have to be specified by using the built-in types [INT1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) from ABAP Dictionary. These types do not have their own calculation type.

Example

Typical use of the data type i.

DATA counter TYPE i.
...
counter = counter + 1.
...

Packed Numbers

The data type [p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) for [packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpacked_number_glosry.htm "Glossary Entry") has a [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") that depends on their length and the number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry"). Data objects of type p can be 1 to 16 bytes long, with two [places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenplace_glosry.htm "Glossary Entry") packed into each byte, and one place and the sign packed into the last byte. A packed number consists of the length multiplied by 2 minus 1 digits and can have a maximum of 14 decimal places. Packed numbers are used to implement [fixed point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_number_glosry.htm "Glossary Entry"). The decimal places in a packed number are an attribute of its data type and are fixed for this type.

Packed numbers with decimal places cannot be specified directly in the program. Instead, [character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_literal_glosry.htm "Glossary Entry") must be used whose content can be interpreted as a packed number, meaning that it represents a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). [Scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry") is not permitted unless it can be interpreted as a mathematical notation.

Helper fields for intermediate results in [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") of [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") p are always 16 bytes long and can thus hold up to 31 places. Before an overflow occurs, an arithmetic expression is calculated again with helper fields that are twice as large or 63 places. In the case of [comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_numeric.htm) between packed numbers, the operand with fewer decimal places is also converted into a helper field of this type, though an overflow occurs if the sum of the integer digits and decimal places exceeds 31.

If packed numbers are used, the [program attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") must always be set to fixed point arithmetic since only this setting ensures that the decimal point is calculated correctly. Otherwise, all numbers are specified as integers and all intermediate results are rounded up to the next integer. If fixed point arithmetic is not configured, the decimal places defined for the number only appear in dynpro output or when formatting with [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm).

Calculations using calculation type p are performed using [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry"). In other words, a calculation is performed "commercially", similarly to using a pocket calculator or paper and pencil. Type p is typically used for values such as lengths, weights, and sums of money.

Note

The number of decimal places in a packed number should be no greater than the number of digits; otherwise the decimal separator might be outside the sequence of digits. A packed number that has more decimal places than places can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") or in serializations to [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_glosry.htm "Glossary Entry").

Example

Typical use of the data type p.

DATA price TYPE p LENGTH 16 DECIMALS 2.

Floating Point Numbers

In floating point numbers, the number of [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") is a part of the value and not a part of the data type.

Decimal Floating Point Numbers

The data types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry") are [decfloat16](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm) and [decfloat34](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm). The value range is 1E385(1E-16 - 1) to -1E-383, 0, +1E-383 to 1E385(1 - 1E-16) for decfloat16 and 1E6145(1E-34 - 1) to -1E-6143, 0, +1E-6143 to 1E6145(1 - 1E-34) for decfloat34. The maximum precision is 16 places or 34 places, respectively. As well as its value, a decimal floating point number has a [scale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") and a [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry"). These properties are not relevant for calculations and comparisons of values, but are used in [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) and for formatting output.

Decimal floating point numbers with decimal places or exponents cannot be specified directly in the program. Instead, [character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_literal_glosry.htm "Glossary Entry") must be used whose content can be interpreted as a packed number, meaning that it represents a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), [scientific](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry"), or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry").

[Arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") with decimal floating point numbers always have the [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") decfloat34. Each calculation is made with [decimal floating point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_arith_glosry.htm "Glossary Entry"). Decimal floating point numbers are the best choice if precision and a large range of values are of importance. They do not have the disadvantages of binary floating point numbers described below. These binary floating point numbers cannot represent each decimal number in their value range exactly. Decimal floating point numbers have a much large value range and a higher level of precision than packed numbers.

By using the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_exact.htm), it is possible to force a lossless calculation for decimal floating point numbers under certain circumstances. No rounding is permitted in lossless calculations and raises an exception.

Internally, decimal floating point numbers are represented by a 16-digit or 34-digit decimal mantissa and a decimal exponent. The exponent is between -383 and +384 or -6143 and + 6144, respectively. Apart from potential roundings in assignments and calculations, the effects discussed below for binary floating point numbers are not observed. This is because every 16-digit or 34-digit decimal number can be represented exactly.

Binary Floating Point Numbers

The data type for [binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry"), [f](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_numeric.htm), has a [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of 2.2250738585072014E-308 to 1.7976931348623157E+308, positive as well as negative, and the number 0, with an accuracy of at least 15 places. 17 places are represented in ABAP. Whole numbers can be represented exactly up to an absolute value of 2\*\*53, which is equivalent to 9,007,199,254,740,992. Any larger numbers are rounded.

Binary floating point numbers cannot be specified directly in the program. Instead, [character literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_literal_glosry.htm "Glossary Entry") must be used whose content can be interpreted as floating point numbers, meaning that it represents a number in [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). [Mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry") is not permitted unless it can be interpreted as scientific notation.

[Arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") with [calculation type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_type_glosry.htm "Glossary Entry") f are performed using [binary floating point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_arith_glosry.htm "Glossary Entry"). Be aware of the following features of binary floating point arithmetic.

Internally, binary floating point numbers are stored separately, each in two parts. This can lead to unexpected results despite the high degree of intrinsic accuracy. These occur mainly when performing conversions from and to type f.

-   For example, the number 1.5 can be represented exactly in this notation since 1.5 = 1\*2\*\*0 + 1\*2\*\*(-1), but the number 0.15 can only be represented approximately by the number 0.14999999999999999. If 0.15 is rounded up to 1 valid digit, the result is 0.1 rather than the 0.2 expected. On the other hand, the number 1.5E-12 is represented by the number 1.5000000000000001E-12, which would be rounded up to 2E-12.

-   A further real-life example: 7.27% of 73050 needs to be calculated and rounded to 2 decimal places. The intermediate result is 5.3107349999999997E+03, since the correct result, 5310.735, cannot be represented exactly in two parts with 53 bits. (If the hardware cannot represent a real number exactly, it uses the next representable binary floating point number). After rounding, 5310.73 is therefore produced, rather than 5310.74 as expected.

The ABAP runtime environment always calculates commercially and not numerically like the underlying machine arithmetic. According to the rounding algorithm of the latter, the end digit 5 must always be rounded to the nearest even number (not the next largest number), that is, from 2.5 to 2 and from 3.5 to 4.

Note also that multiplication using powers of 10 (positive or negative) is not an exact operation.

-   Example: Although it can be represented exactly in two parts, a binary floating point number f of value 100.5, after the operation
    f = f / 100 \* 100.
    has the value 100.49999999999999.

As well as rounding errors, the restricted number of decimal places for the mantissa can lead to the loss of trailing digits.

-   Example: 1 - 1.0000000000000001 produces zero.

This means that the final places in binary floating point arithmetic are not reliable. In particular, it is not usually worth testing two binary floating point numbers a and b for equality. Instead, it is best to check whether the relative difference abs((a - b)/a) is less than a predefined limit, such as 10\*\*(-7).

Ultimately, the display and therefore the value of a binary floating point number stored in a database can be platform-dependent.

Note

To assign numeric values to text fields and text strings, instead of using a [conversion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) it is often better to use the statement [WRITE ... TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) or [embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) with the associated formatting options.

Example

The result of the calculation in result1 is 0.81499999999999995. The result of the calculation in result2, on the other hand, is the expected value 0.815.

DATA: result1 TYPE f,
      result2 TYPE decfloat34.
result1 = 815 / 1000.
result2 = 815 / 1000.
cl\_demo\_output=>display( |Binary  floating point: { result1 }\\n| &&
                         |Decimal floating point: { result2 }\\n| ).

Executable Example

[Floating Point Numbers, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfloating_point_numbers_abexa.htm)