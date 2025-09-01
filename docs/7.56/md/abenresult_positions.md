---
title: "Result Positions"
description: |
  Result positions are write positions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwrite_position_glosry.htm 'Glossary Entry') in which writable expressions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwritable_expression_glosry.htm 'Glossary Entry') can be spe
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresult_positions.htm"
abapFile: "abenresult_positions.htm"
keywords: ["do", "if", "try", "method", "data", "field-symbol", "abenresult", "positions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_statements.htm) →  [Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_positions.htm) →  [Expression Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm) →  [Write Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions_write.htm) → 

Result Positions

Result positions are [write positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwrite_position_glosry.htm "Glossary Entry") in which [writable expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified. Writes are performed on the result of the expression. Result positions include the following:

-   Left side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm)
-   Operand dobj of the statement [CLEAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm)
-   Memory area mem\_area of the statement [ASSIGN mem\_area TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_writable_exp.htm)
-   Structure struc of the statement [ASSIGN COMPONENT comp OF STRUCTURE struc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_dobj.htm)
-   Actual parameter in [method calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls.htm) for [output parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm), [input/output parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm), and [return values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm)
-   Right side in the declaration of a local field symbol in a [LET expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm)

Example

Uses a table expression itab\[ sy-index \] on the left side of a [calculation assignment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_assignment_glosry.htm "Glossary Entry").

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
DO 3 TIMES.
  itab\[ sy-index \] \*= 10.
ENDDO.