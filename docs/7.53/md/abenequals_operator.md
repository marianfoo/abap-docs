---
title: "Syntax"
description: |
  lhs = rhs. Effect If the character = is specified in a statement between a left side lhs (or 'left hand side') and a right side rhs (or 'right hand side'), it works like an assignment operator(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenassignment_operator_glosry.htm 'Glossary
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm"
abapFile: "abenequals_operator.htm"
keywords: ["do", "if", "try", "method", "data", "abenequals", "operator"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) → 

\= - Assignment Operator

Syntax

lhs = rhs.

Effect

If the character \= is specified in a statement between a left side lhs (or "left hand side") and a right side rhs (or "right hand side"), it works like an [assignment operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenassignment_operator_glosry.htm "Glossary Entry") that assigns the value of the right side to the left side, possibly using a [conversion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm).

The right side rhs, the source of the assignment, is a [general expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As a single [data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm)

-   As a [return value or result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_return_values.htm) of functional methods, built-in functions, or constructor expressions or table expressions

-   As a result of [calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_calc_expr.htm)

The left side lhs, the target of the assignment, is a both a [declaration position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclaration_position_glosry.htm "Glossary Entry") and a [result position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenresult_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As any data object that can be specified in a [writing position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwriting_position_glosry.htm "Glossary Entry"). The data type of the data object must either be [compatible](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompatible_glosry.htm "Glossary Entry") with the assigned value or must be convertible to the data type of lhs in accordance with one of the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm). If the assigned value does not match the data type of lhs, the exceptions described in the conversion rules may be raised.

-   As an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm). The data type of the declared variable is determined by the right side and is described as one of the rhs options. Any variables used on the right side cannot be declared on the left side. An identically named data object from a more global context can be used on the right side and is not obscured by the local declaration until after the statement.

-   As a [writable expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry") representing an operand to which the right side can be assigned.

If an exception is raised on the right side, the statement is not executed and the value of the target field is undefined.

Notes

-   If lhs is not a data object, it can be prefixed with the obsolete keyword [COMPUTE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute.htm). This keyword is ignored, however, and should no longer be used.

-   Another obsolete variant of the assignment is the statement [MOVE rhs TO lhs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove_obs.htm). Here, the left side is on the right side and does not cover all options of the assignment operator \=.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenassign_calc_guidl.htm "Guideline")

Example

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

DATA: o1 TYPE i,
      o2 TYPE i,
      r  TYPE i.
o1 = 100.
o2 = CONV #( '200' ).
r  = o1 + o2.

Continue
[\= - Assign Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm)
[\= - Assign Return Values and Results](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_return_values.htm)
[\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_calc_expr.htm)