---
title: "COMPUTE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_shortref.htm) Obsolete Syntax COMPUTE EXACT lhs =?= rhs. Effect The keyword COMPUTE can be written before every assignment(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_g
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute.htm"
abapFile: "abapcompute.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abapcompute"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Calculation Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomputing_obsolete.htm) → 

COMPUTE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_shortref.htm)

Obsolete Syntax

COMPUTE *\[*EXACT*\]* lhs =*|*?= rhs.

Effect

The keyword COMPUTE can be written before every [assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_glosry.htm "Glossary Entry") with an [assignment operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_operator_glosry.htm "Glossary Entry") [\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) or [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm), except when an [inline declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) or a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") is made on the left side. The keyword COMPUTE is ignored by the assignment unless the addition EXACT is specified.

If the addition EXACT is specified, the statement works as follows:

lhs = [EXACT #( rhs ).](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_calculation.htm)

In this case, COMPUTE performs a [lossless calculation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_calculation_glosry.htm "Glossary Entry") in accordance with the same rules as apply when using the [lossless operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_exact.htm) for [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"). Only the [simplified arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_calculation.htm) described here can be specified for rhs and lhs cannot have the type f. If a rounding raises an exception, the target variable is not modified.

Note

The keyword COMPUTE is a relic and was originally designed for arithmetic calculations where the right side is an arithmetic expression:

COMPUTE *\[*EXACT*\]* result = [arith\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Strictly speaking, the statement applies only in this case; more loosely, it applies even if a [string expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") or [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is specified as a different form of [calculation expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") on the right side.

Alongside the introduction using a calculation expression on the right side, the following variants also exist:

-   COMPUTE destination = dobj.

If a data object dobj is specified on the right side, COMPUTE works like an [assignment of data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm).

-   COMPUTE destination\_ref =*|*?= source\_ref.

If the source objects and target objects have reference types, COMPUTE works like an [up cast or down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm).

-   COMPUTE destination = meth( ) *|* func( ) *|* constr\_expr

If functional method calls, predefined functions, constructor expressions, or table expressions are specified on the right side, COMPUTE works like an [assignment of return values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_return_values.htm).

-   COMPUTE destination1 =  destination2 = ... = destination = rhs.

If a [multiple assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_multiples.htm) is specified on the right side, COMPUTE works like a multiple assignment.

This means that the keyword COMPUTE does not produce a calculation. More specifically, COMPUTE does not modify the way a [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is chosen:

-   When a data object is assigned to a target object, the type of the source object is always converted to the type of the target object, even if prefixed with COMPUTE.

-   When an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is assigned, the calculation type is always determined from all operands involved, including the left side, even if not prefixed with COMPUTE.

For this reason, it is not advisable to specify the keyword COMPUTE before assignments. If the right side is not a calculation expression, the keyword produces false information. If the right side is a calculation expression, the keyword is ignored if specified.

Note

When COMPUTE is used for assignments to [enumerated variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), additionEXACT and the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_exact.htm) have the special effect that they can enable assignments, which otherwise would not have been possible.

Programming Guideline

[Assignments with the assignment operators \= and ?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassign_calc_guidl.htm "Guideline") only

Example

It is not possible to have the two commented out assignments of a calculation to the [enumerated variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") num. The assignment is possible using EXACT, because in this case the assignment follows the same [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexact_constructor_enum.htm) as the lossless operator displayed underneath.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2,
  END OF ENUM number.
DATA num TYPE number.
"num = + 1.
COMPUTE EXACT num = + 1.
num = EXACT number( + 1 ).