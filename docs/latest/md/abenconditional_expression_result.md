---
title: "COND, SWITCH, result"
description: |
  Syntax ...   operand   THROW RESUMABLESHORTDUMP cx_class(  message(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) p1 = a1 p2 = a2 ... )  ... Alternatives: 1. ... operand(#!ABAP_ALTERNATIVE_1@1@) 2. ... THRO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm"
abapFile: "abenconditional_expression_result.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "abenconditional", "expression", "result"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COND%2C%20SWITCH%2C%20result%2C%20ABENCONDITIONAL_EXPRESSION_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COND, SWITCH, result

Syntax

...   operand
  *|* *{* THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[* [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm)*\]*
                                            *\[*p1 = a1 p2 = a2 ...*\]* ) *}* ...

Alternatives:

[1\. ... operand](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )](#!ABAP_ALTERNATIVE_2@2@)

Effect

These specifications after THEN and ELSE in the [conditional expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) determine the result of the expression when the corresponding branch is selected.

Alternative 1   

... operand

Effect

If an operand operand is specified, its value is converted to the data type type if necessary and returned as the result of the conditional expression. operand is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") with the following restrictions:

-   If operand is specified as a [string expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expression_glosry.htm "Glossary Entry"), type must be character-like.
-   If operand is specified as a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like.

Hint

When an operand is specified, the conditional operators COND and SWITCH create a temporary data object whose data type is determined by the specified type and whose content is determined by the selected operand. This data object is used as the operand of a statement and then deleted. It is deleted either when the current statement is completed or when a relational expression is evaluated after the truth value is determined.

Example

Specification of the operands sum and sum + 1. The number of times a random number is less than half of its maximum value is counted.

FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( t ) min = 1 max = 101 ).
DATA(sum) = 0.
DO 100 TIMES.
  sum = COND i( WHEN rnd->get\_next( ) <= 50 THEN sum + 1
                                            ELSE sum ).
ENDDO.
cl\_demo\_output=>display( sum ).

Alternative 2   

... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )

Effect

The specification of THROW raises either an exception or a runtime error.

-   If the addition SHORTDUMP is not specified, THROW works like the statement [RAISE EXCEPTION TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) and raises an exception of the [exception class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class. The following applies here:
    -   The addition RESUMABLE can be used to make the exception resumable.
    -   A message can be passed to the exception object using the addition [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm).
    -   The input parameters p1, p2, ... of the instance constructor can be filled with actual parameters a1, a2.
-   If the addition SHORTDUMP is specified, THROW works like the statement [RAISE SHORTDUMP TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_shortdump.htm) and raises a runtime error with the [exception class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_class_glosry.htm "Glossary Entry") cx\_class, whereby a message can be also passed and the input parameters can be filled.

Hints

-   If the exception class is specified after THROW, the parentheses must always be specified, even if no messages or actual parameters are passed. EXPORTING cannot be specified, nor is it necessary.
-   Like the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm), the specification THROW without the addition SHORTDUMP cannot be used in a method or function module in whose interface [non-class-based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) exceptions are declared. Furthermore, it does not allow simultaneous use of the statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcatch_sys.htm) for the obsolete handling of [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry"), and the statements [RAISE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) to raise non-class-based exceptions in the current processing block.

Example

Raising of an exception of the class CX\_DEMO\_DYN\_T100 that implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm).

DATA cflag TYPE abap\_bool.
...
TRY.
    FINAL(iflag) = COND i( WHEN cflag = abap\_true  THEN 1
                          WHEN cflag = abap\_false THEN 0
                          ELSE THROW cx\_demo\_dyn\_t100(
                                 MESSAGE e888(sabapdemos)
                                   WITH 'Illegal value!' '' '' '' ) ).
  CATCH cx\_demo\_dyn\_t100.
    ...
ENDTRY.

Example

Raising of a runtime error with an exception object of the class CX\_DEMO\_DYN\_T100, which implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm).

FINAL(t) = cl\_demo\_date\_time=>get\_user\_time( ).
FINAL(time) = COND t( WHEN t BETWEEN '090000' AND '170000'
                       THEN t
                     ELSE
                       THROW SHORTDUMP cx\_demo\_dyn\_t100(
                          MESSAGE e888(sabapdemos)
                                  WITH \`I\` \`don't\` \`work\` \`now!\` ) ).