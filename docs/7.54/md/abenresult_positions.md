  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Writing Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_write.htm'\)) → 

Result Positions

Result positions are [writing positions](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry") in which [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified. Writes are performed on the result of the expression. The following result positions are possible:

-   Left side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))

-   Operand dobj of the statement [CLEAR](javascript:call_link\('abapclear.htm'\))

-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\))

-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))

-   Actual parameter in [method calls](javascript:call_link\('abenmethod_calls.htm'\)) for [output parameters](javascript:call_link\('abapcall_method_parameters.htm'\)), [input/output parameters](javascript:call_link\('abapcall_method_parameters.htm'\)), and [return values](javascript:call_link\('abapcall_method_parameters.htm'\))

-   The right side in the declaration of a local field symbol in a [LET expression](javascript:call_link\('abaplet.htm'\))

Example

Uses a table expression itab\[ sy-index \] on the left side of a [calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry").

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] \*= 10.
ENDDO.