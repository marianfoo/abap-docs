  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [arith\_exp - Arithmetic Expressions](javascript:call_link\('abapcompute_arith.htm'\)) → 

arith\_exp - Arithmetic Operators

The table below shows the possible arithmetic operators for [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), their priority, and the order in which the calculation is performed. Within one [parenthesis level](javascript:call_link\('abenarith_brackets.htm'\)), calculations with operators of higher priority are performed before calculations with operators of lower priority. For consecutive operators of the same priority, the calculation is performed in the order specified. In the third column of the table below, 3 indicates the highest priority and 1 the lowest.

The calculation is made as specified by the [calculation rule](javascript:call_link\('abenarith_type.htm'\)) for the current [calculation type](javascript:call_link\('abenarith_type.htm'\)). With the exception of \*\*, the operators are ignored by the calculation type. If the operator \*\* does not appear in an arithmetic expression, the calculation type is determined only by the data types involved. When \*\* is used, the calculation type is either decfloat34 or f. The calculation type is decfloat34 if one of the operands used is a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), otherwise it is f.

Operator

Calculation

Priority

Order

+

Adds the operands

1

From left to right

\-

Subtracts the right operand from the left

1

From left to right

\*

Multiplies the operands

2

From left to right

/

Divides the left operand by the right

2

From left to right

DIV

Integer part of the division of the left operand by the right, with positive remainder

2

From left to right

MOD

Positive remainder of the division of the left operand by the right; a remainder other than zero is always between zero and the size of the right operand

2

From left to right

\*\*

Raises the left operand to the power of the right

3

From right to left

Programming Guideline

[Preventing Division by Zero](javascript:call_link\('abendivision_zero_guidl.htm'\) "Guideline")

Notes

-   Division by the value 0 is undefined and raises a handleable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

-   In ABAP, the result of a division for the [calculation types](javascript:call_link\('abenarith_type.htm'\)) i, int8, p, and decfloat34 is rounded commercially, whereas in most other programming languages any surplus decimal places are cut off.

-   The result of DIV multiplied by operand2 plus the result of MOD always produces operand1. Therefore, the rule that the result of MOD is always positive also has an impact on the result of DIV. The result of an integer division of two positive numbers with a remainder that is not equal to zero differs from the result of an integer division of two negative numbers with the same amounts. Likewise, for operands with different signs, which operand is positive and which is negative is of significance.

-   If, when raising to a power, the left operand is 0, the right operand must be greater than or equal to 0. If the left operand is negative, the right operand must be an integer. Otherwise, both cases raise a handleable exception.

-   To stop the operator \*\* producing the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") f, the predefined function [ipow](javascript:call_link\('abenpower_function.htm'\)) can be used for integer exponents. Here, the calculation type is determined by the argument.

-   The ABAP operators DIV and MOD behave differently with respect to the signs than the SQL operators [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)).

Example

This example demonstrates the functions of the three division operators, DIV, MOD, and /. The results are 4.7273, 4.0000, and 0.8000.

DATA: pack TYPE p DECIMALS 4,
      n    TYPE decfloat34 VALUE '+5.2',
      m    TYPE decfloat34 VALUE '+1.1'.
pack = n / m.
cl\_demo\_output=>write( |{ n } / { m } = { pack }| ).
pack = n DIV m.
cl\_demo\_output=>write( |{ n } DIV { m } = { pack }| ).
pack = n MOD m.
cl\_demo\_output=>display( |{ n } MOD { m } = { pack }| ).

Example

The following table shows the result of integer divisions and their remainders. See also the example for the SQL operators [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)).

operand1

operand2

DIV

MOD

7

3

2

1

\-7

3

\-3

2

7

\-3

\-2

1

\-7

\-3

3

2

Executable Example

[Arithmetic Calculations](javascript:call_link\('abendivisions_abexa.htm'\))

Executable Example

[Floating Point Numbers, Arithmetic Calculations](javascript:call_link\('abenfloating_point_numbers_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Arithmetic Calculations](javascript:call_link\('abendivisions_abexa.htm'\))
![Example](exa.gif "Example") [Floating Point Numbers, Arithmetic Calculations](javascript:call_link\('abenfloating_point_numbers_abexa.htm'\))