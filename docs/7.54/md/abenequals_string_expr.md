---
title: "Syntax"
description: |
  result = string_exp(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm). Effect If a string expression(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm 'Glossary Entry') string_exp(https://help.sap.com/doc/abapdocu_754
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_string_expr.htm"
abapFile: "abenequals_string_expr.htm"
keywords: ["loop", "do", "if", "case", "try", "method", "data", "types", "abenequals", "string", "expr"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) →  [\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_calc_expr.htm) → 

\=, String Expression

Syntax

result = [string\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm).

Effect

If a [string expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry") [string\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm), its result of type string is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariable_glosry.htm "Glossary Entry") that has type string or to whose data type the result can be converted.

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm). The data type of the declared variable var is string.

Notes

-   In the following example, the result result is a variable with the type string, strings are appended to this variable on the right side, and the strings cannot be dependent on result (as known by the compiler):

result = result && dobj1 && dobj2 && ...

result = |result...{ dobj1 ... }...{ dobj2 ... }...|.

Here, no subtotal is created and an append is made directly on result. In all other cases (namely data types other than string or when expressions or functions are appended on the right side), a subtotal is created first and then assigned. This optimized method improves performance, but care should be taken, especially in loops, that this improvement is not canceled out by using expression or functions on the right side (even if they are not dependent on result). See also the [Performance Note](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expr_perfo.htm) for string expressions.

-   See also [calculation assignment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operator [\*\*=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_assignment_string.htm).

Example

The first assignment declares a target field of the type string inline and assigns it the chained text "12". The second assignment converts the chained text "12" to the number 12.

DATA(text) = '1' && '2'.
DATA number TYPE i.
number = 1 && 2.