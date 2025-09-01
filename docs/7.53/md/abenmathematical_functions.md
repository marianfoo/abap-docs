  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) → 

Numeric Functions

Numeric functions are a type of [built-in function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_functions.htm). The main argument of a numeric function must represent a numeric value. The data type of the return value is determined either by the argument of the function (overloaded functions), or by the function.

Outside of an [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the main argument of a numeric function must be a single, numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numeric function:

-   [Numeric data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

-   [Arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

-   [Built-in function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry")

-   [Functional method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry")

The numeric functions are divided into:

-   [General numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_functions.htm)

-   [Numeric extremum functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennmax_nmin_functions.htm)

-   [Floating point functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfloating_point_functions.htm)

-   [Rounding functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendec_floating_point_functions.htm)

Handleable exceptions

The handleable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[abs, sign, ceil, floor, trunc,](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_functions.htm)
[ipow - Integer Power Function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpower_function.htm)
[nmax, nmin - Numeric Extremum Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennmax_nmin_functions.htm)
[acos, sin, tanh, exp, log,sqrt](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfloating_point_functions.htm)
[round, rescale - Rounding Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendec_floating_point_functions.htm)
[Examples of Numeric Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_functions_abexas.htm)