---
title: "Syntax"
description: |
  ... EXACT type( arith_exp ) .... If the operand of the operator EXACT is an arithmetic expression, the data type specified by type must not be of type f. arith_exp must be an arithmetic expression simplified as follows: -   The allowed arithmetic operators(https://help.sap.com/doc/abapdocu_758_i
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_calculation.htm"
abapFile: "abenlossless_calculation.htm"
keywords: ["do", "if", "try", "catch", "method", "data", "types", "abenlossless", "calculation"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_arith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20arith_exp%20-%20Lossless%20Calculations%2C%20ABENLOSSLESS_CALCULATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

arith\_exp - Lossless Calculations

A [lossless calculation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_calculation_glosry.htm "Glossary Entry") is a calculation of an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") in which no roundings occur. Lossless calculations can be performed using the [lossless operator EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_exact.htm):

Syntax

... EXACT type( arith\_exp ) ....

If the operand of the operator EXACT is an arithmetic expression, the data type specified by type must not be of type f. arith\_exp must be an arithmetic expression simplified as follows:

-   The allowed [arithmetic operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_operator_glosry.htm "Glossary Entry") are +, \-, \*, and /. The operators DIV, MOD, and \*\* cannot be used.
-   The allowed [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_function_glosry.htm "Glossary Entry") are abs, sign, ceil, floor, trunc, frac, round, and rescale. These functions do not raise the exception CX\_SY\_CONVERSION\_ROUNDING. No other built-in functions can be specified because their results are not lossless in principle.
-   No operands of data type x and xstring can be specified.
-   No [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") can be specified, since the requirement for losslessness cannot be applied to the method execution.
-   Operands of the type f (binary floating point numbers) are not allowed because they cannot represent every decimal number precisely, due to their internal representation.

The operator EXACT ensures that a simplified expression with the [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry") decfloat34 is calculated and checks whether roundings are performed. If no roundings occur, the result is assigned to the return value. If necessary, the result is converted from decfloat34 to the data type determined by type. If a rounding is required by the calculation, the exception CX\_SY\_CONVERSION\_ROUNDING is raised. Rounding can occur when operands are converted to the calculation type, during the calculation, or when the result is converted to the target field.

The exception is raised when the first subexpression that requires a rounding is calculated. If the exception is handled, the exception object in the VALUE attribute contains the result of a regular calculation. The attribute OPERATION contains the first operation that had to be rounded, whereby conversions are represented by :=.

Hints

-   If the operand of the operator EXACT is not an arithmetic expression, the operator performs a [lossless assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").
-   Since the first calculation in lossless calculations that requires rounding raises an exception, the behavior in arithmetic expressions that are mathematically identical but constructed in different ways can be different.
-   For this, see the executable [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_exact_abexa.htm).
-   The use of the addition EXACT in the obsolete statement [COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute.htm) is an obsolete form of lossless calculation.

Example

The second arithmetic expression raises an exception, since it requires rounding to two decimal places.

TYPES pack TYPE p LENGTH 8 DECIMALS 2.
FINAL(result1) = EXACT pack( 1 / 4 ).
FINAL(result2) = EXACT pack( 1 / 3 ).

Executable Example

[Lossless Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_exact_abexa.htm)

Executable Example

[Floating Point Numbers, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_numbers_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_TYPE\_NOT\_EXACT

-   Cause: Invalid operand type for lossless calculations
    Runtime error: UNCAUGHT\_EXCEPTION

CX\_SY\_CONVERSION\_ROUNDING

-   Cause: Rounding in a lossless calculation
    Runtime error: UNCAUGHT\_EXCEPTION

Continue
![Example](exa.gif "Example") [arith\_exp - Lossless Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_exact_abexa.htm)