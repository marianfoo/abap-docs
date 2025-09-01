---
title: "Catchable exceptions"
description: |
  The catchable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes CX_SY_ARITHMETIC_ERROR and CX_SY_CONVERSION_ERROR. num_func - abs, sign, ceil, floor, trunc, frac(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_f
version: "7.55"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_functions.htm"
abapFile: "abenmathematical_functions.htm"
keywords: ["do", "try", "catch", "method", "class", "data", "abenmathematical", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompute_expressions.htm) → 

Numeric Functions (num\_func)

Numeric functions are a type of [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_functions.htm). The main argument of a numeric function must represent a numeric value. The data type of the return value is determined either by the argument of the function (overloaded functions) or by the function.

Outside of an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the main argument of a numeric function must be a single numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numeric function:

-   [Numeric data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

-   [Arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

-   [Built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_function_glosry.htm "Glossary Entry")

-   [Functional method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_glosry.htm "Glossary Entry")

The numeric functions are divided into:

-   [General numeric functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm)

-   [Numeric extremum functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm)

-   [Floating point functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm)

-   [Rounding functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm)

Catchable exceptions

The catchable exceptions that can be raised during the calculation of a numeric function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[num\_func - abs, sign, ceil, floor, trunc, frac](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm)
[num\_func - ipow](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpower_function.htm)
[num\_func - nmax, nmin](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm)
[num\_func - acos, sin, tanh, exp, log, sqrt, ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm)
[num\_func - round, rescale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm)
[num\_func - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions_abexas.htm)