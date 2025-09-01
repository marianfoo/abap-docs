  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_style_guidl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalternative_spelling_guidl.htm) → 

Assignments

Background

For explicit assignments in which the value of a source is assigned to a target, ABAP contains the general assignment operator [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) and the special casting operator [?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm). Statements with these operators

lhs =*|*?= rhs.

enable assignments of

-   data objects,

-   return values or results of functional methods, built-in functions or construction expressions, table expressions and

-   results of calculation expressions (arithmetic expressions, bit expressions, and string expressions)

to be made to variables that can also be declared inline and to [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry").

Alongside the assignment operators, two obsolete statements exist for historical reasons that can also perform assignments:

-   The statement

[MOVE source TO*|*?TO destination.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_obs.htm)

assigns a source source to a target destination. It covers some of the operators performed by the assignment operators [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) and [?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm).

-   The statement

[COMPUTE lhs =*|*?= rhs.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute.htm)

has the same semantics as lhs =*|*?= rhs. The keyword COMPUTE can be written in front of each assignment with the assignment operators [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) and [?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm) where the left side is not an inline declaration, but is ignored.

Rule

Assignments with the assignment operators \= and ?= only

Use the assignment operators instead of the statement MOVE. Do not use the keyword COMPUTE in front of assignments.

Details

Assignments with the assignment operators [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenequals_operator.htm) and [?=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_cast.htm) implement the most global concept. The right side is a [general expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and the left side is a [declaration position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclaration_position_glosry.htm "Glossary Entry") (except in down casts).

The statements MOVE and COMPUTE have the following drawbacks:

-   The statement MOVE cannot be used globally. The only sources allowed are data objects, function methods, and certain built-in functions whose arguments must be single data objects. The only targets allowed are variables; inline declarations are not possible. Any future enhancements to operand positions will not be applied to MOVE.

-   The keyword COMPUTE is both confusing and surplus to requirements. If an arithmetic expression or other calculation expression is on the right side, the keyword COMPUTE has the correct meaning, but is redundant. If a data object, a function method, a built-in function, or a constructor expression is on the right side, the keyword COMPUTE has the wrong meaning, since a return value is assigned instead of an expression being calculated.

The statements MOVE and COMPUTE were created at a time when assignments were only made between individual data objects and calculations were exclusively arithmetic. Neither of these statements is appropriate in a modern, expression-oriented ABAP program that exploits all options on the left and right sides of an assignments.

Note

The optional addition EXACT of the statements [MOVE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_obs.htm) and [COMPUTE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute.htm), which produces lossless assignments and lossless calculations, has been replaced in full by the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_exact.htm).

Bad Example

The following source code shows a simple assignment using MOVE and the assignment of an arithmetic expression after COMPUTE.

DATA text1 TYPE string.
DATA text2 TYPE string.
...
MOVE text1 TO text2.
DATA result TYPE decfloat34.
DATA number1 TYPE i.
DATA number2 TYPE i.
...
COMPUTE result = number1 \* number2.

Good Example

The following source code shows the same example as above but without specifying the keywords MOVE and COMPUTE. This makes inline declarations possible on the left side.

DATA text1 TYPE string.
...
DATA(text2) = text1.
DATA number1 TYPE i.
DATA number2 TYPE i.
...
DATA(result) = CONV decfloat34( number1 \* number2 ).