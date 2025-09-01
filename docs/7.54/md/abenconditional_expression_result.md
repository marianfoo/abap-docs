  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Conditional Expressions](javascript:call_link\('abenconditional_expressions.htm'\)) → 

COND, SWITCH - result

Syntax

...   operand
  *|* *{* THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[* [message](javascript:call_link\('abapraise_exception_message.htm'\))*\]*
                                            *\[*p1 = a1 p2 = a2 ...*\]* ) *}* ...

Alternatives:

[1\. ... operand](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )](#!ABAP_ALTERNATIVE_2@2@)

Effect

When specified after THEN and ELSE in the [conditional expressions](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) and [SWITCH](javascript:call_link\('abenconditional_expression_cond.htm'\)), these strings determine the result of the expression if the appropriate branch is selected.

Alternative 1

... operand

Effect

If an operand operand is specified, its value is converted to the data type type if necessary and returned as the result of the conditional expression. operand is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") with the following restrictions:

-   If operand is specified as a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), type must be character-like.

-   If operand is specified as a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"), type must be byte-like.

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

... THROW *\[*RESUMABLE*|*SHORTDUMP*\]* cx\_class( *\[*message*\]* *\[*p1 = a1 p2 = a2 ...*\]* )

Effect

If specified, THROW raises either an exception or a runtime error.

-   If the addition SHORTDUMP is not specified, THROW functions like the statement [RAISE EXCEPTION TYPE](javascript:call_link\('abapraise_exception_class.htm'\)) and raises an exception of the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class. The following applies here:

-   The addition RESUMABLE can be used to make the exception resumable.

-   A message can be passed to the exception object using the addition [message](javascript:call_link\('abapraise_exception_message.htm'\)).

-   The input parameters p1, p2, ... of the instance constructor can be filled with actual parameters a1, a2.

-   If the addition SHORTDUMP is specified, THROW functions like the statement [RAISE SHORTDUMP TYPE](javascript:call_link\('abapraise_shortdump.htm'\)) and raises a runtime error with the [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") cx\_class. In both cases, a message can be passed and the input parameters can be filled.

Notes

-   If the exception class is specified after THROW, the parentheses must always be specified, even if no messages or actual parameters are passed. EXPORTING cannot be specified, nor does it need to be.

-   Like the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)), THROW specified without the addition SHORTDUMP cannot be used in a method or function module in whose interface [non-class-based](javascript:call_link\('abenexceptions_non_class.htm'\)) exceptions are declared. Also, the statement does not permit simultaneous use of the statement [CATCHSYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) for the obsolete handling of [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"), and the statements [RAISE](javascript:call_link\('abapraise_exception.htm'\)) or [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) to raise non-class-based exceptions in the current processing block.

Example

Raises an exception of the class CX\_DEMO\_DYN\_T100 that includes the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

DATA cflag TYPE abap\_bool.
...
DATA(iflag) = COND i( WHEN cflag = abap\_true  THEN 1
                      WHEN cflag = abap\_false THEN 0
                      ELSE THROW cx\_demo\_dyn\_t100(
                             MESSAGE e888(sabapdemos)
                                     WITH 'Illegal value!' '' '' '' ) ).

Example

Raises a runtime error with an exception object of the class CX\_DEMO\_DYN\_T100, which includes the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

DATA(time) = COND t( WHEN sy-timlo BETWEEN '090000' AND '170000'
                       THEN sy-timlo
                     ELSE
                       THROW SHORTDUMP cx\_demo\_dyn\_t100(
                          MESSAGE e888(sabapdemos)
                                  WITH \`I\` \`don't\` \`work\` \`now!\` ) ).