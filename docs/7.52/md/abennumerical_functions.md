---
title: "Syntax"
description: |
  ... func( arg ) ... Effect The argument of a general numeric function must be an individual data object outside an arithmetic expression, and can itself be a numeric expression within an arithmetic expression. Effect of the general numeric functions. Function func Return Value abs Absolute value of
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm"
abapFile: "abennumerical_functions.htm"
keywords: ["do", "if", "try", "data", "types", "abennumerical", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [Numerical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm) → 

abs, sign, ceil, floor, trunc, frac - Numeric Functions

The following table shows the general numeric functions for a single unnamed argument with any numeric data type. These functions are overloaded with the effect that the return value can have different numeric types.

Syntax

... func( arg ) ...

Effect

The argument of a general numeric function must be an individual data object outside an arithmetic expression, and can itself be a numeric expression within an arithmetic expression.

Effect of the general numeric functions.

Function func

Return Value

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

Value of the [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") of the argument arg; negative if arg is negative

The following applies to the data type of the return value:

-   With the exception of an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the data type of the argument determines the data type of the return value.

-   Within an arithmetic expression, the argument of the function contributes to the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If the argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated with this type.

-   If the argument arg is a [numeric expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expression_glosry.htm "Glossary Entry"), the function works like an arithmetic operator and it is handled in its operand position like an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry").

If the argument of a numeric function outside of an arithmetic expression does not have a numeric data type i, int8, p, decfloat16, decfloat34, or f, its data type determines the type of return value as follows:

-   d and t give i

-   c, n and string give p

-   x and xstring givei

Before the calculation of the function, the argument is [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) into the respective type.

Note

The functions described here are some of the functions that can be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_functional_positions.htm), even if their argument is a single data object.

Example

The following assertion should always be correct.

DATA pack TYPE p LENGTH 8 DECIMALS 4 VALUE '-1234.5678'.
cl\_demo\_input=>request( CHANGING field = pack ).
ASSERT pack  = trunc( pack ) + frac( pack ).

Executable Example

[Numeric Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmath_func_abexa.htm)