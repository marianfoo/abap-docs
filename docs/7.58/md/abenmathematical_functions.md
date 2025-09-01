  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Numeric%20Functions%20%28num_func%29%2C%20ABENMATHEMATICAL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Numeric Functions (num\_func)

Numeric functions are a type of [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)). The main argument of a numeric function must represent a numeric value. The data type of the return value is determined either by the argument of the function (overloaded functions) or by the function.

Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the main argument of a numeric function must be a single numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numeric function:

-   [Numeric data object](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry")
-   [Arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry")
-   [Built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry")
-   [Functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry")

The numeric functions are divided into:

-   [General numeric functions](javascript:call_link\('abennumerical_functions.htm'\))
-   [Numeric extremum functions](javascript:call_link\('abennmax_nmin_functions.htm'\))
-   [Floating point functions](javascript:call_link\('abenfloating_point_functions.htm'\))
-   [Rounding functions](javascript:call_link\('abendec_floating_point_functions.htm'\))

Catchable Exceptions

The catchable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[num\_func - abs, sign, ceil, floor , trunc, frac](javascript:call_link\('abennumerical_functions.htm'\))
[num\_func - ipow](javascript:call_link\('abenpower_function.htm'\))
[num\_func - nmax, nmin](javascript:call_link\('abennmax_nmin_functions.htm'\))
[num\_func - acos, sin, tanh, exp , log, sqrt, ...](javascript:call_link\('abenfloating_point_functions.htm'\))
[num\_func - round, rescale](javascript:call_link\('abendec_floating_point_functions.htm'\))
[num\_func - Examples](javascript:call_link\('abennumerical_functions_abexas.htm'\))