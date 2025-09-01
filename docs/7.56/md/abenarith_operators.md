  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm) → 

arith\_exp - Arithmetic Operators

The table shows the possible arithmetic operators for [arithmetic expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), their priority, and the order in which the calculation is performed. Within a [parenthesis level](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_brackets.htm), calculations with operators of higher priority are performed before calculations with operators of lower priority. For adjacent operators of the same priority, the calculation is performed in the order specified. In the third column of the table below, 3 indicates the highest priority and 1 the lowest.

The calculation is performed according to the [calculation rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_type.htm) for the current [calculation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_type.htm). With the exception of \*\*, the operators have no effect on the calculation type. If the operator \*\* does not occur in an arithmetic expression, the calculation type is determined only by the data types involved. If \*\* is used, the calculation type is either decfloat34 or f. It is decfloat34 if one of the operands involved is a [decimal floating point number](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendecfloat_glosry.htm "Glossary Entry") and f in all other cases.

Operator

Calculation

Priority

Order

+

Addition of the operands

1

From left to right

\-

Subtraction of the right operand from the left

1

From left to right

\*

Multiplication of the operands

2

From left to right

/

Division of the left operand by the right

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

Left operand raised to the power of the right

3

From right to left

Programming Guideline

[Prevent division by zero](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendivision_zero_guidl.htm "Guideline")

Hints

-   Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.
-   In ABAP, the result of a division for the [calculation types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_type.htm) i, int8, p, and decfloat34 is rounded commercially, whereas in most other programming languages any surplus decimal places are cut off.
-   The result of DIV multiplied by operand2 plus the result of MOD always produces operand1. Therefore, the rule that the result of MOD is always positive also affects the result of DIV. The result of an integer division of two positive numbers with a remainder that is not equal to zero differs from the result of an integer division of two negative numbers with the same amounts. Likewise, for operands with different plus/minus signs, it is important which operand is positive and which is negative.
-   If, when raising to a power, the left operand is 0, the right operand must be greater than or equal to 0. If the left operand is negative, the right operand must be an integer. Otherwise, both cases raise a catchable exception.
-   To prevent the operator \*\* from producing the [calculation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_type_glosry.htm "Glossary Entry") f, the built-in function [ipow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpower_function.htm) can be used for integer exponents for which the calculation type is determined by the argument.
-   The ABAP operators DIV and MOD behave differently with respect to the signs than the SQL operators [DIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm).

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

The following table shows the results of integer divisions and their remainders. See also the example for the SQL operators [DIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm).

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

[Arithmetic Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendivisions_abexa.htm)

Executable Example

[Floating Point Numbers, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_numbers_abexa.htm)

Continue
![Example](exa.gif "Example") [arith\_exp - Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendivisions_abexa.htm)
![Example](exa.gif "Example") [arith\_exp - Floating Point Numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_numbers_abexa.htm)