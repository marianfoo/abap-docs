---
title: "COND, SWITCH - result"
description: |
  Syntax ...   operand   THROW RESUMABLE cx_class(  message(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) p1 = a1 p2 = a2 ... )  ... Alternatives: 1. ... operand(#!ABAP_ALTERNATIVE_1@1@) 2. ... THROW RESUMABLE
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm"
abapFile: "abenconditional_expression_result.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenconditional", "expression", "result"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm) → 

COND, SWITCH - result

Syntax

...   operand
  *|* *{* THROW *\[*RESUMABLE*\]* cx\_class( *\[* [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm)*\]*
                                  *\[*p1 = a1 p2 = a2 ...*\]* ) *}* ...

Alternatives:

[1\. ... operand](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... THROW *\[*RESUMABLE*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )](#!ABAP_ALTERNATIVE_2@2@)

Effect

When specified after THEN and ELSE in the [conditional expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_cond.htm), these strings determine the result of the expression if the appropriate branch is selected.

Alternative 1

... operand

Effect

If an operand operand is specified, its value is converted to the data type type if necessary and returned as the result of the conditional expression. operand is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") with the following restrictions:

-   If operand is specified as a [string expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry"), type must be character-like.

-   If operand is specified as a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like.

Note

When an operand is specified, the condition operators COND and SWITCH create a temporary data object whose data type is determined by the specified type and whose content is determined by the selected operand. This data object is used as the operand of a statement and then deleted. It is deleted either when the current statement is closed or when a relational expression is evaluated after the truth value is determined.

Example

Specifies the operands sum and sum + 1. The number of times a random number is less than half of its maximum value is counted.

DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 1 max = 101 ).
DATA(sum) = 0.
DO 100 TIMES.
  sum = COND i( WHEN rnd->get\_next( ) <= 50 THEN sum + 1
                                            ELSE sum ).
ENDDO.
cl\_demo\_output=>display( sum ).

Alternative 2

... THROW *\[*RESUMABLE*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )

Effect

If specified, THROW raises an exception of the succeeding [exception class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class in accordance with the rules of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm). The following applies here:

-   A message can be passed to the output class using the addition [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm).

-   The input parameters p1, p2, ... of the instance constructor can be filled with actual parameters a1, a2.

Notes

-   If the exception class is specified after THROW, the parentheses must always be specified, even if no messages or actual parameters are passed. The word EXPORTING cannot be specified.

-   Like the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm), THROW cannot be used in a method or function module in whose interface [non-class-based](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) exceptions are declared. Furthermore, the statement does not permit the statement [CATCHSYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm) for obsolete handling of [catchable runtime errors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") to be used at the same time as the statements [RAISE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) that raise non-class-based exceptions in the current processing block.

Example

Raises an exception of the class CX\_DEMO\_DYN\_T100 that includes the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm).

DATA cflag TYPE abap\_bool.
...
DATA(iflag) = COND i( WHEN cflag = abap\_true  THEN 1
                      WHEN cflag = abap\_false THEN 0
                      ELSE THROW cx\_demo\_dyn\_t100(
                             MESSAGE e888(sabapdemos)
                                     WITH 'Illegal value!' ) ).