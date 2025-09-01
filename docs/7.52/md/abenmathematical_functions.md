---
title: "Numerical Functions"
description: |
  Numerical functions belong to the predefined functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). The main argument of a numerical function must represent a numerical value. The data type of the return value is determined either by the argument of the f
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm"
abapFile: "abenmathematical_functions.htm"
keywords: ["do", "try", "method", "class", "data", "abenmathematical", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) → 

Numerical Functions

Numerical functions belong to the [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). The main argument of a numerical function must represent a numerical value. The data type of the return value is determined either by the argument of the function (overloaded functions), or by the function.

Outside of an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the main argument of a numerical function must be a single, numeric data object. Within an arithmetic expression, the following are possible as main arguments of a numerical function:

-   [Numeric data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_object_glosry.htm "Glossary Entry")

-   [Arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

-   [Predefined function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry")

-   [Functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry")

The numerical functions are divided into:

-   [General numerical functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm)

-   [Numerical extremum functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennmax_nmin_functions.htm)

-   [Floating point functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm)

-   [Rounding functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm)

Handleable exceptions

The handleable exceptions that can be raised during the computation of a numerical function are subclasses of the classes CX\_SY\_ARITHMETIC\_ERROR and CX\_SY\_CONVERSION\_ERROR.

Continue
[abs, sign, ceil, floor, trunc,](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm)
[ipow - Integer Power Function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpower_function.htm)
[nmax, nmin - Numeric Extremum Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennmax_nmin_functions.htm)
[acos, sin, tanh, exp, log, sqrt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm)
[round, rescale - Rounding Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm)
[Examples of numerical functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions_abexas.htm)