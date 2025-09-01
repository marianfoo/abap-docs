  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%2C%20ABENASSIGN_CALC_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments

Background   

For explicit assignments in which the value of a source is assigned to a target, ABAP contains the general assignment operator [\=](javascript:call_link\('abenequals_operator.htm'\)) and the special casting operator [?=](javascript:call_link\('abapmove_cast.htm'\)). Statements with these operators

lhs =*|*?= rhs.

enable assignments of

-   data objects,
-   return values or results of functional methods, built-in functions or construction expressions, table expressions and
-   results of calculation expressions (arithmetic expressions, bit expressions, and string expressions)

to be made to variables that can also be declared inline and to [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry").

Alongside the assignment operators, two obsolete statements exist for historical reasons that can also perform assignments:

-   The statement
    
    [MOVE source TO*|*?TO destination.](javascript:call_link\('abapmove_obs.htm'\))
    
    assigns a source source to a target destination. It covers some of the operators performed by the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)).
    
-   The statement
    
    [COMPUTE lhs =*|*?= rhs.](javascript:call_link\('abapcompute.htm'\))
    
    has the same semantics as lhs =*|*?= rhs. The keyword COMPUTE can be written in front of each assignment with the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)) where the left side is not an inline declaration, but is ignored.
    

Rule   

Assignments with the assignment operators \= and ?= only

Use the assignment operators instead of the statement MOVE. Do not use the keyword COMPUTE in front of assignments.

Details   

Assignments with the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)) implement the most global concept. The right side is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and the left side is a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry") (except in downcasts).

The statements MOVE and COMPUTE have the following drawbacks:

-   The statement MOVE cannot be used globally. The only sources allowed are data objects, function methods, and certain built-in functions whose arguments must be single data objects. The only targets allowed are variables; inline declarations are not possible. Any future enhancements to operand positions will not be applied to MOVE.
-   The keyword COMPUTE is both confusing and surplus to requirements. If an arithmetic expression or other calculation expression is on the right side, the keyword COMPUTE has the correct meaning, but is redundant. If a data object, a function method, a built-in function, or a constructor expression is on the right side, the keyword COMPUTE has the wrong meaning, since a return value is assigned instead of an expression being calculated.

The statements MOVE and COMPUTE were created at a time when assignments were only made between individual data objects and calculations were exclusively arithmetic. Neither of these statements is appropriate in a modern, expression-oriented ABAP program that exploits all options on the left and right sides of an assignments.

Hint

The optional addition EXACT of the statements [MOVE](javascript:call_link\('abapmove_obs.htm'\)) and [COMPUTE](javascript:call_link\('abapcompute.htm'\)), which produces lossless assignments and lossless calculations, has been replaced in full by the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)).

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
FINAL(result) = CONV decfloat34( number1 \* number2 ).