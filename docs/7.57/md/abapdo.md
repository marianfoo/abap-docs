  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_loops.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DO, ABAPDO, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DO

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block.

Without the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@), the statement block is repeated until it is exited using one of the following statements:

-   [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm) can be used.

Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@) is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime framework.
-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARYING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.

Example

Exit a DO loop based on a condition.

DATA(str) = \`xxx\`.
DO.
  str = str && str.
  IF strlen( str ) > 10000.
    EXIT.
  ENDIF.
ENDDO.

Addition   

... n TIMES

Effect

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

The numeric value of n when entering the loop determines the maximum number of times the statement block is executed. The control structure ignores changes to the value n within the loop. If n contains a value less than or equal to 0, the statement block is not executed.

Example

Calculation and display of the first ten square numbers in a DO loop.

DATA square TYPE i.
DO 10 TIMES.
  square = ipow( base = sy-index exp = 2 ).
  cl\_demo\_output=>write( |{ sy-index } { square }| ).
ENDDO.
cl\_demo\_output=>display( ).

Continue
[ENDDO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenddo.htm)