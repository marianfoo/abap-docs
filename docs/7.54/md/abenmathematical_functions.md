  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

Numerical Functions

Numerical functions belong to the [predefined functions](javascript:call_link\('abenbuilt_in_functions.htm'\)). The main argument of a numerical function must represent a numerical value. The data type of the return value is determined either by the argument of the function (overloaded functions), or by the function.

Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the main argument of a numerical function must be a single, numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numerical function:

-   [Numeric data object](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")

-   [Arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")

-   [Predefined function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry")

-   [Functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")

The numerical functions are divided into:

-   [General numerical functions](javascript:call_link\('abennumerical_functions.htm'\))

-   [Numerical extremum functions](javascript:call_link\('abennmax_nmin_functions.htm'\))

-   [Floating point functions](javascript:call_link\('abenfloating_point_functions.htm'\))

-   [Rounding functions](javascript:call_link\('abendec_floating_point_functions.htm'\))

Handleable exceptions

The handleable exceptions that can be raised during the computation of a numerical function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[abs, sign, ceil, floor, trunc, frac - Numeric Functions](javascript:call_link\('abennumerical_functions.htm'\))
[ipow - Integer Power Function](javascript:call_link\('abenpower_function.htm'\))
[nmax, nmin - Numeric Extremum Functions](javascript:call_link\('abennmax_nmin_functions.htm'\))
[acos, sin, tanh, exp, log, sqrt - Floating Point Functions](javascript:call_link\('abenfloating_point_functions.htm'\))
[round, rescale - Rounding Functions](javascript:call_link\('abendec_floating_point_functions.htm'\))
[Examples of numerical functions](javascript:call_link\('abennumerical_functions_abexas.htm'\))