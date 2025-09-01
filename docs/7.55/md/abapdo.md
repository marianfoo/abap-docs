  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_loops.htm) → 

DO

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one of the statements for [exiting loops](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleave_loops.htm). In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexit_loop.htm) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime environment.

-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_conditional.htm) in constructor expressions.

-   The obsolete addition [VARYING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapenddo.htm)