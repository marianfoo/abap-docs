  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

\=, Assignment Operator

Syntax

lhs = rhs.

Effect

If the character \= is specified in a statement between a left side lhs (or "left hand side") and a right side rhs (or "right hand side"), it works like an [assignment operator](javascript:call_link\('abenassignment_operator_glosry.htm'\) "Glossary Entry") that assigns the value of the right side to the left side, using a [conversion](javascript:call_link\('abenconversion_rules.htm'\)) if necessary.

The right side rhs, which is the source of the assignment, is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and can be specified as follows:

-   As a single [data object](javascript:call_link\('abapmove.htm'\))

-   As a [return value or result](javascript:call_link\('abenequals_return_values.htm'\)) of functional methods, built-in functions, or constructor expressions or table expressions

-   As a result of [calculation expressions](javascript:call_link\('abenequals_calc_expr.htm'\))

The left side lhs, the target of the assignment, is a both a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry") and a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") and can be specified as follows:

-   As any data object that can be specified in a [write position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"). The data type of the data object must either be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the assigned value or must be convertible to the data type of lhs in accordance with one of the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). If the assigned value does not match the data type of lhs, the exceptions described in the conversion rules can occur.

-   As an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable is determined by the right side and is described as one of the rhs options. Any variable that is used on the right side cannot be declared on the left side. An identically named data object of a more global context can be used on the right side and is not hidden by the local declaration until after the statement.

-   As a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") representing an operand to which the right side can be assigned.

If an exception is raised on the right side, the statement is not executed, and the value of the target field is undefined.

Hints

-   See also [calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [+=](javascript:call_link\('abencalculation_assignments.htm'\)), [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)), [/=](javascript:call_link\('abencalculation_assignments.htm'\)), and [&&=](javascript:call_link\('abencalculation_assignment_string.htm'\)).

-   If lhs is a data object, it can be prefixed with the obsolete keyword [COMPUTE](javascript:call_link\('abapcompute.htm'\)), which has no effect and should therefore be omitted.

-   Another obsolete form of the assignment is the statement [MOVE rhs TO lhs](javascript:call_link\('abapmove_obs.htm'\)), where the left side is on the right side and does not include all options of the assignment operator \=.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](javascript:call_link\('abenassign_calc_guidl.htm'\) "Guideline")

Example

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

DATA: o1 TYPE i,
      o2 TYPE i,
      r  TYPE i.
o1 = 100.
o2 = CONV #( '200' ).
r  = o1 + o2.

Continue
[\=, Assign Data Objects](javascript:call_link\('abapmove.htm'\))
[\=, Assign Return Values and Results](javascript:call_link\('abenequals_return_values.htm'\))
[\=, Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\))