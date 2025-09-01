  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [arith\_exp - Arithmetic Expressions](javascript:call_link\('abapcompute_arith.htm'\)) → 

arith\_exp - Lossless Calculations

A [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") is a calculation of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") in which no roundings occur. Lossless calculations can be performed using the [lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)):

Syntax

... EXACT type( arith\_exp ) ....

If the operand of the operator EXACT is an arithmetic expression, the data type specified by type cannot have the type f. arith\_exp must be an arithmetic expression simplified as follows:

-   The permitted [arithmetic operators](javascript:call_link\('abenarithmetic_operator_glosry.htm'\) "Glossary Entry") are +, \-, \*, and /. The operators DIV, MOD, and \*\* cannot be used.

-   The permitted [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") are abs, sign, ceil, floor, trunc, frac, round, and rescale. These functions do not raise the exception CX\_SY\_CONVERSION\_ROUNDING. No other built-in functions can be specified because their results are not lossless (in principle).

-   No operands of data type x and xstring can be specified.

-   No [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") can be specified, since the losslessness requirements cannot be applied to the method execution.

-   Operands of the type f (binary floating point numbers) are not permitted because they cannot represent every decimal number precisely, due to their internal representation.

The operator EXACT specifies that a simplified expression with the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") decfloat34 is calculated and checks whether roundings are performed. If roundings are not performed, the result is assigned to the return value (if necessary, the result is converted from decfloat34 to the data type determined by type. If a rounding is required by the calculation, the exception CX\_SY\_CONVERSION\_ROUNDING is raised. Rounding can take place when operands are converted to the calculation type, during the calculation, or when the result is converted to the target field.

The exception is raised when the first subexpression that requires a rounding is calculated. When the exception is handled, the VALUE attribute in the exception object contains the result provided by a regular calculation. The attribute OPERATION contains the first operation that had to be rounded; conversions are represented by ":=".

Notes

-   The first calculation in lossless calculations that requires rounding raises an exception. This means that arithmetic expressions that are mathematically identical but constructed in different ways can display different behavior (see the executable [example](javascript:call_link\('abencompute_exact_abexa.htm'\))).

-   If the operand of the operator EXACT is not an arithmetic expression, the operator performs a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   The use of the addition EXACT in the obsolete statement [COMPUTE](javascript:call_link\('abapcompute.htm'\)) is an obsolete form of lossless calculation.
    

Example

The second arithmetic expression raises an exception, since it requires rounding to two decimal places.

TYPES pack TYPE p LENGTH 8 DECIMALS 2.
DATA(result1) = EXACT pack( 1 / 4 ).
DATA(result2) = EXACT pack( 1 / 3 ).

Executable Example

[Lossless Calculations](javascript:call_link\('abencompute_exact_abexa.htm'\))

Executable Example

[Floating Point Numbers, Arithmetic Calculations](javascript:call_link\('abenfloating_point_numbers_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_TYPE\_NOT\_EXACT

-   Cause: Invalid operand type for lossless calculations
    Runtime error: UNCAUGHT\_EXCEPTION
    

CX\_SY\_CONVERSION\_ROUNDING

-   Cause: Rounding in a lossless calculation
    Runtime error: UNCAUGHT\_EXCEPTION
    

Continue
![Example](exa.gif "Example") [Lossless Calculations](javascript:call_link\('abencompute_exact_abexa.htm'\))