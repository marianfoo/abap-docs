  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm) →  [Writing Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions_write.htm) → 

Result Positions

Result positions are [writing positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry") in which [writable expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. Writes are performed on the result of the expression. The following result positions are possible:

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm)

-   Operand dobj of the statement [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm)

-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm)

-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Actual parameter in [method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) for [output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm), [input/output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm), and [return values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)

-   The right side in the declaration of a local field symbol in a [LET expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)

Example

Uses a table expression itab\[ sy-index \] on the left side of an assignment.

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] = itab\[ sy-index \] \* 10.
ENDDO.