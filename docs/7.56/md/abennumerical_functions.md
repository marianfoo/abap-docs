  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions (num\_func)](javascript:call_link\('abenmathematical_functions.htm'\)) → 

num\_func - abs, sign, ceil, floor, trunc, frac

Syntax

... num\_func( arg ) ...

Effect

General [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) numeric functions for exactly one unnamed argument with any numeric data type. These functions are overloaded with the effect that the return value can have different numeric types. The argument of a general numeric function must be a single data object outside an arithmetic expression, and can itself be a numeric expression within an arithmetic expression.

The following table shows the general numeric functions and how they work.

Function num\_func

Return Value

abs

Absolute value of argument arg

sign

Sign of argument arg: -1, if the value of arg is negative; 0, if the value of arg is 0; 1, if the value of arg is positive

ceil

Smallest integer that is not less than the value of the argument arg

floor

Largest integer that is not greater than the value of the argument arg

trunc

Value of the integer part of the argument arg; negative if arg is negative

frac

Value of the [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") of the argument arg; negative if arg is negative

The following applies to the data type of the return value:

-   Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the data type of the argument determines the data type of the return value.
-   Within an arithmetic expression, the argument of the function contributes to the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If the argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated with this type.
-   If the argument arg is a [numeric expression](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry"), the function works like an arithmetic operator and it is handled in its operand position like an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry").

If the argument of a numeric function outside of an arithmetic expression does not have a numeric data type i, int8, p, decfloat16, decfloat34, or f, its data type determines the type of return value as follows:

-   d and t give i
-   c, n and string give p
-   x and xstring givei
-   utclong is not allowed

Before the calculation of the function, the argument is [converted](javascript:call_link\('abenconversion_rules.htm'\)) to the corresponding type.

Hints

-   The time stamp type utclong cannot be converted implicitly to a numeric type, and therefore cannot be specified directly as an argument.
-   The functions listed here are some of the functions that can also be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if their argument is a single data object.

Example

The following assertion should always be correct.

DATA pack TYPE p LENGTH 8 DECIMALS 4 VALUE '-1234.5678'.
cl\_demo\_input=>request( CHANGING field = pack ).
ASSERT pack  = trunc( pack ) + frac( pack ).

Executable Example

[Numeric Functions](javascript:call_link\('abenmath_func_abexa.htm'\))