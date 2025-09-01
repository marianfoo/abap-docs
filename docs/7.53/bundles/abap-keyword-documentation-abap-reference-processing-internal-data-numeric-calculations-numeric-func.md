# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Numeric Calculations / Numeric Functions

Included pages: 12


### abenmathematical_functions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

Numeric Functions

Numeric functions are a type of [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)). The main argument of a numeric function must represent a numeric value. The data type of the return value is determined either by the argument of the function (overloaded functions), or by the function.

Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the main argument of a numeric function must be a single, numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numeric function:

-   [Numeric data object](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")

-   [Arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

-   [Built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry")

-   [Functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")

The numeric functions are divided into:

-   [General numeric functions](javascript:call_link\('abennumerical_functions.htm'\))

-   [Numeric extremum functions](javascript:call_link\('abennmax_nmin_functions.htm'\))

-   [Floating point functions](javascript:call_link\('abenfloating_point_functions.htm'\))

-   [Rounding functions](javascript:call_link\('abendec_floating_point_functions.htm'\))

Handleable exceptions

The handleable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[abs, sign, ceil, floor, trunc,](javascript:call_link\('abennumerical_functions.htm'\))
[ipow - Integer Power Function](javascript:call_link\('abenpower_function.htm'\))
[nmax, nmin - Numeric Extremum Functions](javascript:call_link\('abennmax_nmin_functions.htm'\))
[acos, sin, tanh, exp, log,sqrt](javascript:call_link\('abenfloating_point_functions.htm'\))
[round, rescale - Rounding Functions](javascript:call_link\('abendec_floating_point_functions.htm'\))
[Examples of Numeric Functions](javascript:call_link\('abennumerical_functions_abexas.htm'\))


### abennumerical_functions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

abs, sign, ceil, floor, trunc, frac - Numeric Functions

The following table shows the general numeric functions for a single unnamed argument with any numeric data type. These functions are overloaded with the effect that the return value can have different numeric types.

Syntax

... func( arg ) ...

Effect

The argument of a general numeric function must be an individual data object outside an arithmetic expression, and can itself be a numeric expression within an arithmetic expression.

Effect of the general numeric functions.

Functionfunc

Return value

abs

Absolute value of argument arg

sign

Sign of argument arg: -1, if the value of arg is negative; 0, if the value of arg is 0; 1, if the value of arg is positive

ceil

Smallest integer that is not less than the value of the argument arg is

floor

Largest integer that is not greater than the value of the argument arg is

trunc

Value of the integer part of the argument arg; negative if arg is negative

frac

Value of the [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") of the argument arg; negative if arg is negative

The following applies with regard to the data type of the return value:

-   With the exception of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the data type of the argument determines the data type of the return value.

-   Within an arithmetic expression, the argument of the function contributes to the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If the argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated with this type.

-   If the argument arg is a [numeric expression](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry"), the function works like an arithmetic operator and it is handled in its operand position like an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry").

If the argument of a numeric function outside of an arithmetic expression does not have a numeric data type i, int8, p, decfloat16, decfloat34, or f, its data type determines the type of return value as follows:

-   d and t give i

-   c, n and string give p

-   x and xstring givei

Before the calculation of the function, the argument is [converted](javascript:call_link\('abenconversion_rules.htm'\)) into the respective type..

Note

The functions described here are some of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if their argument is a single data object.

Example

The following assertion should always be correct.

DATA pack TYPE p LENGTH 8 DECIMALS 4 VALUE '-1234.5678'.
cl\_demo\_input=>request( CHANGING field = pack ).
ASSERT pack  = trunc( pack ) + frac( pack ).

Executable Example

[Numeric Functions](javascript:call_link\('abenmath_func_abexa.htm'\))


### abenpower_function.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

ipow - Integer Power Function

Syntax

... ipow( base = arg exp = n ) ...

Effect

This function raises the argument arg passed to base to the exponent n passed to exp. The arguments arg and n are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry"). Any [numeric data object](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry") can be specified for arg. n expects the type i and exponents of other types are [converted](javascript:call_link\('abenconversion_elementary.htm'\)) to i. If the argument arg has the value 0, the value of the exponent n must be greater than or equal to 0.

The function ipow is overloaded with the effect that the return value can have different numeric types.

-   With the exception of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the data type of the argument arg determines the data type of the return value.

-   Within an arithmetic expression, the argument arg contributes to the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the entire expression and the function is calculated using the calculation type.

-   If the argument arg is a [numeric expression](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry"), ipow works like an arithmetic operator and the function is handled in its operand position like an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry").

This function can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry"). The calculation type is determined from the argument arg in the same way as with the other [numeric functions](javascript:call_link\('abennumerical_functions.htm'\)). The argument n does not have any effect on the data type of the return value.

Notes

-   The power function ipow can replace [arg \*\* n](javascript:call_link\('abenarith_operators.htm'\)) calculations, if the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") f is to be avoided. This makes sense if the type f is not precise enough.

-   In many cases, the power function ipow displays better performance than using the arithmetic operator [\*\*](javascript:call_link\('abenarith_operators.htm'\)).

Example

The results are 1.4399999999999999 for \*\* and 1.4400 for ipow. The result of ipow is more precise.

cl\_demo\_output=>display( |\*\*  : { '1.2' \*\* 2 } \\n| &&
                         |ipow: { ipow( base = '1.2' exp = 2 ) }| ).

Executable Example

[Power Function ipow](javascript:call_link\('abenipow_function_abexa.htm'\))


### abennmax_nmin_functions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

nmax, nmin - Numeric Extremum Functions

Syntax Forms

... nmax*|*nmin( val1 = arg1 val2 = arg2 *\[*val3 = arg3*\]* ... *\[*val9 = arg9*\]* ) ...

Effect

These functions return the value of the greatest or the least of the arguments passed. A minimum of two arguments, arg1 and arg2, and a maximum of nine arguments must be passed. Here, the optional input parameters val3 to val9 must be filled in ascending order without gaps. The arguments arg1 to arg9 are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry").

The following applies to the data type of the return value:

-   Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), a [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined from all the arguments, and it is used to perform the comparison. The calculation type is determined just like an [arithmetic expression](javascript:call_link\('abenarith_type.htm'\)) and also determines the data type of the return value.

-   In an arithmetic expression, the arguments of the function contribute to the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If an argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated using this type.

Notes

-   The extremum functions [cmax](javascript:call_link\('abencmax_cmin_functions.htm'\)) and [cmin](javascript:call_link\('abencmax_cmin_functions.htm'\)) can be used to determine character-like extreme values.
    
-   When using two input parameters:
    

result =  nmax*|*nmin( val1 = arg1 val2 = arg2 )

the evaluation of the functions is equivalent to:

IF num1 >= num2 *|* num1 <= num2.
  result = num1.
ELSE.
  result = num2.
ENDIF.

When using more than two input parameters, an equivalent control structure would be more complex.

Example

Determines the lesser of two time stamps. Here, the initial value of the conditional operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) is not regarded as the least value.

CONSTANTS max\_ts TYPE timestamp VALUE 999999999999999.
DATA: ts1 TYPE timestamp,
      ts2 TYPE timestamp.
GET TIME STAMP FIELD ts1.
DATA(min\_ts) = nmin( val1 = COND timestamp( WHEN ts1 IS INITIAL
                                            THEN max\_ts ELSE ts1 )
                     val2 = COND timestamp( WHEN ts2 IS INITIAL
                                            THEN max\_ts ELSE ts2 ) ).

Executable Example

[Extremum Functions nmax, nmin](javascript:call_link\('abennmax_nmin_function_abexa.htm'\))


### abenfloating_point_functions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

acos, sin, tanh, exp, log,sqrt - Floating Point Functions

The following table shows the floating point functions that expect a [floating point number](javascript:call_link\('abenfloating_point_number_2_glosry.htm'\) "Glossary Entry") as an unnamed argument. Floating point functions are overloaded so that the return code can have the type decfloat34 or f. [Decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") are still only possible as arguments of exp, log, log10, and sqrt.

Syntax

... func( arg ) ...

Effect

The argument of a floating point function must be a single data object outside an arithmetic expression and can be an arithmetic expression itself within an arithmetic expression.

Effect of the floating point functions:

Function func

Meaning

Definition Range

acos

arccosine

\[-1,1\], no decfloat34

asin

arcsine

\[-1,1\], no decfloat34

atan

arctangent

\-, no decfloat34

cos

cosine

\-, no decfloat34

sin

sine

\-, no decfloat34

tan

tangent

\-, no decfloat34

cosh

hyperbolic cosine

\-, no decfloat34

sinh

hyperbolic sine

\-, no decfloat34

tanh

hyperbolic tangent

\-, no decfloat34

exp

Exponential function for base e

\[-709, 709\] for type f and \[-14144, 14149\] for type decfloat34

log

Natural logarithm

\> 0

log10

Logarithm to base 10

\> 0

sqrt

Square root

\>= 0

Functions that specify "no decfloat34" cannot currently have the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") decfloat34. If one of these functions is specified in an expression with this calculation type, a syntax error occurs or the exception CX\_SY\_UNSUPPORTED\_FUNCTION is raised.

The following applies to the [floating point arithmetic](javascript:call_link\('abenfloating_point_arith_glosry.htm'\) "Glossary Entry") in which a floating point function is calculated, and to the data type of the return code:

-   If the argument has the type decfloat16 or decfloat34, a floating point function is calculated in decimal floating point arithmetic and the return code has the type decfloat34.

-   If a floating point function is used in an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") whose [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is decfloat34, or that contains a [numeric expression](javascript:call_link\('abennumerical_expression_glosry.htm'\) "Glossary Entry") of type decfloat34 as an argument, it also calculates a return code with the type decfloat34 and the argument is first converted to the data type decfloat34, if necessary.

-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return code with type f and the argument is first converted to the data type f, if necessary.

Functions with a definition range require the value of arg to be within the specified limits. Arguments within the definition ranges are guaranteed to be error-free for the exponential function exp, since the results are then within the [value ranges](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") for [binary](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") or [decimal](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") [floating point numbers](javascript:call_link\('abenfloating_point_number_2_glosry.htm'\) "Glossary Entry") in accordance with IEEE-754. For arguments less than -709, the result for binary floating point numbers is (depending on the platform) a subnormal number, 0, or a handleable exception of the class CX\_SY\_ARITHMETIC\_OVERFLOW is raised from a specific value.

The trigonometric functions sin, cos, and tan are defined for any arguments but the results become imprecise if the argument is greater than approximately 100,000,000.

Notes

-   The atan function is undefined for odd number multiples of pi/2, but the definition range of atan is nevertheless restricted since an argument of this function can never contain the precise value of pi/2.

-   The functions described here are some of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if their argument is a single data object.

Example

The results in the internal table should all have the value 1 or a value very close to this.

DATA itab TYPE TABLE OF f WITH EMPTY KEY.
itab = VALUE #( FOR i = 0 UNTIL i > 64
                LET n = CONV f( i / 10 ) IN
                ( sin( n ) \*\* 2 + cos( n ) \*\* 2 ) ).
cl\_demo\_output=>display( itab ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ARG\_OUT\_OF\_DOMAIN

-   Cause: Invalid call of acos
    Runtime error: COMPUTE\_ACOS\_DOMAIN
    
-   Cause: Invalid call of asin
    Runtime error: COMPUTE\_ASIN\_DOMAIN
    
-   Cause: Invalid call of cos
    Runtime error: COMPUTE\_COS\_DOMAIN
    
-   Cause: Invalid call of log10
    Runtime error: COMPUTE\_LOG10\_ERROR
    
-   Cause: Invalid call of log
    Runtime error: COMPUTE\_LOG\_ERROR
    
-   Cause: Invalid call of sin
    Runtime error: COMPUTE\_SIN\_DOMAIN
    
-   Cause: Invalid call of sqrt
    Runtime error: COMPUTE\_SQRT\_DOMAIN
    
-   Cause: Invalid call of tan
    Runtime error: COMPUTE\_TAN\_DOMAIN


### abendec_floating_point_functions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

round, rescale - Rounding Functions

Syntax

... round*|*rescale( val = arg ...  ) ...

Effect

The rounding functions expect a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") as a main argument val and additional arguments that describe how this floating point number is handled. The type of the return value of a rounding function is always decfloat34. Within an arithmetic expression, the argument for the decimal floating point number can either be an arithmetic expression or a function. The other arguments must always be specified as numeric data objects.

-   [Rounding Function](#abendec-floating-point-functions-1--------rescaling-function---@ITOC@@ABENDEC_FLOATING_POINT_FUNCTIONS_2)

Note

The class CL\_ABAP\_MATH includes the method NORMALIZE for normalizing a decimal floating point object. The mantissa does not have any closing zeros in a normalized floating point number.

Rounding Function

The rounding function round can be implemented in [operand positions](javascript:call_link\('abenoperands_expressions.htm'\)) using the following syntax:

Syntax

... round( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function rounds a decimal floating point number declared as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, and rounding must be to either a particular number of decimal places or [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry"):

-   If the parameter dec is given a value, the value entered is rounded to the number of decimal places specified in n and returned. n expects data objects of the type i. The value of these data objects cannot be less than -6144. If a negative value is given, the relevant whole number place is rounded.

-   If the parameter prec is given a value, the value entered is rounded to the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") specified in n and returned. n expects data objects of the type i. The value of these data objects must be greater than 0.

A rounding can reduce [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") but cannot increase them. If dec is specified, the mantissa of the return code does not contain any zeroes after the place where the rounding applies. If prec is specified, the input value is returned without being changed, if the specified precision is greater than or equal to the input value.

The parameter mode (optional) can be used to set the rounding type. For m it is only possible to specify values that exist as ROUND\_... constants in class CL\_ABAP\_MATH. The following table shows the possible rounding rules. If mode is not given a value, commercial rounding is used.

Constant

Rounding rule

ROUND\_HALF\_UP

The value is rounded down to the next round figure. If the value falls precisely halfway between two rounded values, it is rounded up away from zero (commercial rounding).

ROUND\_HALF\_DOWN

The value is rounded down to the next round figure. If the value falls precisely halfway between two round values, it is rounded down towards zero.

ROUND\_HALF\_EVEN

The value is rounded down to the next round figure. If the value falls precisely halfway between two rounded values, it is rounded to the value which has an even number in the last place.

ROUND\_UP

The value is always rounded away from zero/to the larger absolute value.

ROUND\_DOWN

The value is always rounded to zero/to the smaller absolute value.

ROUND\_CEILING

The value is always rounded in a positive direction/to the larger value.

ROUND\_FLOOR

The value is always rounded in a positive direction/to the larger value.

Example

The following tables show the results of commercial rounding of the decimal floating point number 1234.56789 (scaling 5, precision 9) with various values for dec and prec. The displayed results are generated by executing the program DEMO\_ROUND\_AND\_RESCALE.

dec

Result

Scaling

Precision

\-5

0E+5

\-5

1

\-4

0E+4

\-4

1

\-3

1E+3

\-3

1

\-2

1.2E+3

\-2

2

\-1

1.23E+3

\-1

3

0

1235

0

4

1

1234.6

1

5

2

1234.57

2

6

3

1234.568

3

7

4

1234.5679

4

8

5

1234.56789

5

9

6

1234.56789

5

9

prec

Result

Scaling

Precision

1

1E+3

\-3

1

2

1.2E+3

\-2

2

3

1.23E+3

\-1

3

4

1235

0

4

5

1234.6

1

5

6

1234.57

2

6

7

1234.568

3

7

8

1234.5679

4

8

9

1234.56789

5

9

10

1234.56789

5

9

Executable Example

[Rounding Function round](javascript:call_link\('abenround_function_abexa.htm'\))

Rescaling Function

The rescaling function rescale can be implemented in [operand positions](javascript:call_link\('abenoperands_expressions.htm'\)) using the following syntax:

Syntax

... rescale( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function changes the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of a decimal floating point number declared as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, where either the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") or the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") is set:

-   If the parameter dec is given a value, the value entered is rounded using the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") specified in n and returned. n expects data objects of the type i. The value of these data objects cannot be less than -6144. If the scaling produces more than 34 places in the mantissa of the return value, a handleable exception is raised.

-   If the parameter prec is given a value, the value entered is returned with the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") specified in n and appropriate [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and returned. n expects data objects of the type i. The value of these data objects must be greater than 0 and less than 34.

A rescaling can both reduce and increase [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry"). An increase adds zeros on the right.

The input value is rounded if required. The optional parameter mod can be used to specify the rounding rule, as described under the function round. The default is commercial rounding.

Examples

The following tables show the results of rescaling of the decimal floating point number 1234.56789 (scaling 5, precision 9) with various values for dec and prec, if commercial rounding is used. The displayed results are generated by executing the program DEMO\_ROUND\_AND\_RESCALE.

dec

Result

Scaling

Precision

\-5

0E+5

\-5

1

\-4

0E+4

\-4

1

\-3

1E+3

\-3

1

\-2

1.2E+3

\-2

2

\-1

1.23E+3

\-1

3

0

1235

0

4

1

1234.6

1

5

2

1234.57

2

6

3

1234.568

3

7

4

1234.5679

4

8

5

1234.56789

5

9

6

1234.567890

6

10

7

1234.5678900

7

11

8

1234.56789000

8

12

prec

Result

Scaling

Precision

1

1E+3

\-3

1

2

1.2E+3

\-2

2

3

1.23E+3

\-1

3

4

1235

0

4

5

1234.6

1

5

6

1234.57

2

6

7

1234.568

3

7

8

1234.5679

4

8

9

1234.56789

5

9

10

1234.567890

6

10

11

1234.5678900

7

11

12

1234.56789000

8

12


### abennumerical_functions_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

Examples of Numeric Functions

Continue
![Example](exa.gif "Example") [Numeric Functions](javascript:call_link\('abenmath_func_abexa.htm'\))
![Example](exa.gif "Example") [Integer Power Function ipow](javascript:call_link\('abenipow_function_abexa.htm'\))
![Example](exa.gif "Example") [Extremum Functions nmax, nmin](javascript:call_link\('abennmax_nmin_function_abexa.htm'\))
![Example](exa.gif "Example") [Rounding Function round](javascript:call_link\('abenround_function_abexa.htm'\))


### abenmath_func_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) →  [Examples of Numeric Functions](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

Numeric Functions

This example demonstrates the use of general numeric functions.

Source Code

REPORT demo\_numerical\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE decfloat16.
    DATA m TYPE decfloat16 VALUE '-5.55'.
    DATA(out) = cl\_demo\_output=>new( ).
    n = abs( m ).
    out->write( |ABS: { n }| ).
    n = sign( m ).
    out->write( |SIGN: { n }| ).
    n = ceil( m ).
    out->write( |CEIL: { n }| ).
    n = floor( m ).
    out->write( |FLOOR: { n }| ).
    n = trunc( m ).
    out->write( |TRUNC: { n }| ).
    n = frac( m ).
    out->write( |FRAC: { n }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output of the program shows how each of the general numeric functions affects the number -5.55.


### abenipow_function_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) →  [Examples of Numeric Functions](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

Integer Power Function ipow

This example demonstrates the integer power function [ipow](javascript:call_link\('abenpower_function.htm'\)).

Source Code

REPORT demo\_ipow.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE i.
    DATA arg1 TYPE p DECIMALS 1.
    DATA arg2 TYPE int8.
    n = 2.
    arg1 = \`1.2\`.
    DATA(out) = cl\_demo\_output=>new(
      )->write( |\*\*  : { arg1 \*\* n }|
      )->write( |ipow: { ipow( base = arg1 exp = n ) }| ).
    cl\_demo\_output=>line( ).
    n = 62.
    arg2 = 2.
    out->write( |\*\*  : { arg2 \*\* n }|
      )->write( |ipow: { ipow( base = arg2 exp = n ) }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program demonstrates that the integer power function ipow can be used to achieve more precise results than with the [arithmetic operator \*\*](javascript:call_link\('abenarith_operators.htm'\)). In the cases shown here, the operator \*\* produces the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") f. If ipow is used, the calculation type is determined by the arguments arg1 and arg2.


### abennmax_nmin_function_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) →  [Examples of Numeric Functions](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

Extremum Functions nmax, nmin

This example demonstrates the extremum functions [nmax](javascript:call_link\('abennmax_nmin_functions.htm'\)) and [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\)).

Source Code

REPORT demo\_nmax\_nmin.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: a TYPE i VALUE 1,
          b TYPE i VALUE 0,
          c TYPE i VALUE 0.
    cl\_demo\_input=>new(
      )->add\_text( \`Parabola:\`
      )->add\_field( CHANGING field = a
      )->add\_field( CHANGING field = b
      )->add\_field( CHANGING field = c )->request( ).
    IF a = 0.
      cl\_demo\_output=>display(
        'You must enter a non-zero value for a' ).
      RETURN.
    ENDIF.
    CONSTANTS: xmin TYPE i VALUE -100,
               xmax TYPE i VALUE 100,
               n    TYPE i VALUE 20000.
    DATA: x  TYPE decfloat34,
          y  TYPE decfloat34,
          y0 TYPE decfloat34.
    DATA       txt  TYPE string.
    DO n + 1 TIMES.
      x = ( xmax - xmin ) / n \* ( sy-index - 1 ) + xmin.
      y = a \* x \*\* 2 + b \* x + c.
      IF sy-index = 1.
        y0 = y.
      ELSE.
        IF a > 0.
          txt = 'Minimum'.
          y0 = nmin( val1 = y0 val2 = y ).
        ELSE.
          txt = 'Maximum'.
          y0 = nmax( val1 = y0 val2 = y ).
        ENDIF.
      ENDIF.
    ENDDO.
    cl\_demo\_output=>display( |{ txt } value of parabola is: { y0 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program determines the minimum or maximum value of a parabola opened up or down and whose parameters can be entered on the selection screen.


### abenround_function_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) →  [Examples of Numeric Functions](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

Rounding Function round

This example demonstrates the rounding function [round](javascript:call_link\('abendec_floating_point_functions.htm'\)).

Source Code

REPORT demo\_round.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF mode,
                  value LIKE cl\_abap\_math=>round\_half\_up,
                  name  TYPE abap\_attrdescr-name,
                END OF mode,
                modes LIKE SORTED TABLE OF mode
                      WITH UNIQUE KEY name.
    CLASS-METHODS get\_modes.
    TYPES:
      BEGIN OF line,
        number          TYPE decfloat34,
        ceiling   TYPE decfloat34,
        down      TYPE decfloat34,
        floor     TYPE decfloat34,
        half\_down TYPE decfloat34,
        half\_even TYPE decfloat34,
        half\_up   TYPE decfloat34,
        up        TYPE decfloat34,
      END OF line.
    CLASS-DATA output TYPE TABLE OF line.
    CLASS-METHODS write\_output IMPORTING VALUE(idx) TYPE i
                                         VALUE(col) TYPE i
                                         text       TYPE clike.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA number TYPE decfloat34.
    cl\_demo\_output=>begin\_section( \`Rounding Function\` ).
    get\_modes( ).
    DO 21 TIMES.
      number = - ( sy-index - 11 ) / 10.
      write\_output(
        idx = sy-index
        col = '1'
        text = |{ number }| ).
      LOOP AT modes INTO mode.
        write\_output(
          idx = sy-index
          col = sy-tabix + 1
          text = |{ round( val  = number
                           dec  = 0
                           mode = mode-value ) }| ).
      ENDLOOP.
    ENDDO.
    cl\_demo\_output=>display( output ).  ENDMETHOD.
  METHOD get\_modes.
    DATA: modes   TYPE abap\_attrdescr\_tab,
          mode    LIKE LINE OF modes.
    FIELD-SYMBOLS <mode> LIKE cl\_abap\_math=>round\_half\_up.
    modes =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_MATH' )
             )->attributes.
    DELETE modes WHERE name NP 'ROUND\_\*' OR is\_constant <> 'X'.
    LOOP AT modes INTO mode.
      ASSIGN cl\_abap\_math=>(mode-name) TO <mode>.
      demo=>mode-value = <mode>.
      demo=>mode-name = mode-name.
      INSERT demo=>mode INTO TABLE demo=>modes.
    ENDLOOP.
  ENDMETHOD.
  METHOD write\_output.
    ASSIGN output\[ idx \] TO FIELD-SYMBOL(<line>).
    IF sy-subrc <> 0.
      DO.
        APPEND INITIAL LINE TO output ASSIGNING <line>.
        IF sy-tabix = idx.
          EXIT.
        ENDIF.
      ENDDO.
    ENDIF.
    ASSIGN COMPONENT col OF STRUCTURE <line> TO FIELD-SYMBOL(<col>).
    <col> = text.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

For fraction numbers between 1 and -1, the program depicts the effect of all rounding types from the class CL\_ABAP\_MATH in the rounding function [round](javascript:call_link\('abendec_floating_point_functions.htm'\)). The program reads the possible rounding methods using RTTI and sorts them by name.


### abennumerical_functions_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

Examples of Numeric Functions

Continue
![Example](exa.gif "Example") [Numeric Functions](javascript:call_link\('abenmath_func_abexa.htm'\))
![Example](exa.gif "Example") [Integer Power Function ipow](javascript:call_link\('abenipow_function_abexa.htm'\))
![Example](exa.gif "Example") [Extremum Functions nmax, nmin](javascript:call_link\('abennmax_nmin_function_abexa.htm'\))
![Example](exa.gif "Example") [Rounding Function round](javascript:call_link\('abenround_function_abexa.htm'\))
