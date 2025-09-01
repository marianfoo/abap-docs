  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Calculation Statements](javascript:call_link\('abencomputing_obsolete.htm'\)) → 

COMPUTE

[Short Reference](javascript:call_link\('abapcompute_shortref.htm'\))

Obsolete Syntax

COMPUTE *\[*EXACT*\]* lhs =*|*?= rhs.

Effect

The keyword COMPUTE can be written before every [assignment](javascript:call_link\('abenassignment_glosry.htm'\) "Glossary Entry") with an [assignment operator](javascript:call_link\('abenassignment_operator_glosry.htm'\) "Glossary Entry") [\=](javascript:call_link\('abenequals_operator.htm'\)) or [?=](javascript:call_link\('abapmove_cast.htm'\)), except when an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) is made on the left side or a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") exists. The keyword COMPUTE is ignored by the assignment, unless the addition EXACT is specified.

If the addition EXACT is specified, the statement works as follows:

lhs = [EXACT #( rhs ).](javascript:call_link\('abenlossless_calculation.htm'\))

In this case, COMPUTE performs a [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") in accordance with the same rules as apply when using the [lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry") [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) for [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"). Only the [simplified arithmetic expressions](javascript:call_link\('abenlossless_calculation.htm'\)) described here can be specified for rhs and lhs cannot have the type f. If a rounding raises an exception, the target variable is not modified.

Hint

The keyword COMPUTE is a historical relic and was originally designed for arithmetic calculations where the right side is an arithmetic expression:

COMPUTE *\[*EXACT*\]* result = [arith\_exp](javascript:call_link\('abapcompute_arith.htm'\)).

Strictly speaking, the statement applies only in this case; more loosely, it applies even if a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") or [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is specified as a different form of [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") on the right side.

In addition to the introduction using a calculation expression on the right side, the following variants also exist:

-   COMPUTE destination = dobj.
    
    If a data object dobj is specified on the right side, COMPUTE works like an [assignment of data objects](javascript:call_link\('abapmove.htm'\)).
    
-   COMPUTE destination\_ref =*|*?= source\_ref.
    
    If the source objects and target objects have reference types, COMPUTE works like an [up cast or down cast](javascript:call_link\('abapmove_cast.htm'\)).
    
-   COMPUTE destination = meth( ) *|* func( ) *|* constr\_expr
    
    If functional method calls, built-in functions, constructor expressions, or table expressions are specified on the right side, COMPUTE works like an [assignment of return values](javascript:call_link\('abenequals_return_values.htm'\)).
    
-   COMPUTE destination1 =  destination2 = ... =  destination = rhs.
    
    If a [multiple assignment](javascript:call_link\('abapmove_multiples.htm'\)) is specified on the right side, COMPUTE works like a multiple assignment.
    

This means that the keyword COMPUTE does not produce a calculation. More specifically, COMPUTE does not modify the way a [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined:

-   When a data object is assigned to a target object, the type of the source object is always converted to the type of the target object, even if prefixed with COMPUTE.
-   When an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is assigned, the calculation type is always determined from all operands involved, including the left side, even if not prefixed with COMPUTE.

For this reason, it is not advisable to specify the keyword COMPUTE before assignments. If the right side is not a calculation expression, the keyword produces false information. If the right side is a calculation expression, the keyword is ignored if specified.

Hint

When COMPUTE is used for assignments to [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), additionEXACT and the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) have the special effect that they can enable assignments, which otherwise would not have been possible.

Programming Guideline

[Assignments with the assignment operators \= and ?=](javascript:call_link\('abenassign_calc_guidl.htm'\) "Guideline") only

Example

It is not possible to make two commented out assignments of a calculation to the [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") num. The assignment is possible using EXACT, because in this case the assignment follows the same [rules](javascript:call_link\('abenexact_constructor_enum.htm'\)) as the lossless operator shown below.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2,
  END OF ENUM number.
DATA num TYPE number.
"num = + 1.
COMPUTE EXACT num = + 1.
num = EXACT number( + 1 ).