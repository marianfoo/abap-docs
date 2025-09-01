---
title: "Syntax"
description: |
  lhs = rhs. Effect An operator = that is placed in a statement between a left hand side lhs and a right hand side rhs acts as an assignment operator(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_operator_glosry.htm 'Glossary Entry'), that assigns the value of the r
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm"
abapFile: "abenequals_operator.htm"
keywords: ["do", "if", "try", "method", "data", "abenequals", "operator"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20%3D%2C%20Assignment%20Operator%2C%20ABENEQUALS_OPERATOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

\=, Assignment Operator

Syntax

lhs = rhs.

Effect

An operator \= that is placed in a statement between a left hand side lhs and a right hand side rhs acts as an [assignment operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassignment_operator_glosry.htm "Glossary Entry"), that assigns the value of the right hand side to the left hand side. If necessary, a [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) takes place.

The right side rhs, which is the source of the assignment, is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As a single [data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm)
-   As a [return value or result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_return_values.htm) of functional methods, built-in functions, or constructor expressions or table expressions
-   As a result of [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_calc_expr.htm)

The left side lhs, the target of the assignment, is a both a [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_position_glosry.htm "Glossary Entry") and a [result position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresult_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As any data object that can be specified in a [write position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_position_glosry.htm "Glossary Entry"). The data type of the data object must either be [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") with the assigned value or must be convertible to the data type of lhs in accordance with one of the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm). If the assigned value does not match the data type of lhs, the exceptions described in the conversion rules can occur.
-   As an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). The data type of the declared variable is determined by the right side and is described for the different rhs options. Any variable that is used on the right side cannot be declared on the left side. An identically named data object of a more global context can be used on the right side and is not hidden by the local declaration until after the statement.
-   As a [writable expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwritable_expression_glosry.htm "Glossary Entry") representing an operand to which the right side can be assigned.

If an exception is raised on the right side, the statement is not executed, and the value of the target field is undefined.

Hints

-   See also [calculation assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignment_glosry.htm "Glossary Entry") with the operators [+=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignments.htm), [\-=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignments.htm), [\*=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignments.htm), [/=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignments.htm), and [&&=](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_assignment_string.htm).
-   If lhs is a data object, it can be prefixed with the obsolete keyword [COMPUTE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute.htm), which has no effect however and should therefore be omitted.
-   Another obsolete form of the assignment is the statement [MOVE rhs TO lhs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove_obs.htm), where the left side is on the right side and does not include all options of the assignment operator \=.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassign_calc_guidl.htm "Guideline")

Example

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

DATA: o1 TYPE i,
      o2 TYPE i,
      r  TYPE i.
o1 = 100.
o2 = CONV #( '200' ).
r  = o1 + o2.

Continue
[\=, Assign Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm)
[\=, Assign Return Values and Results](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_return_values.htm)
[\=, Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_calc_expr.htm)