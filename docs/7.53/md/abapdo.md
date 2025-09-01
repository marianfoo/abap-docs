  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

DO

[Quick Reference](javascript:call_link\('abapdo_shortref.htm'\))

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a closed statement block statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one for the statements for [leaving loops](javascript:call_link\('abenleave_loops.htm'\)). In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise the loop is processed endlessly. A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If DO loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.
    
-   The obsolete addition [VARYING](javascript:call_link\('abapdo_varying.htm'\)) can be used to process a sequence of data objects in the memory.
    

Example

Exits a DO loop based on a condition.

DO.
  ...
  IF ...
    EXIT.
  ENDIF.
ENDDO.

Addition

... n TIMES

Effect

The addition n TIMES is used to limit the number of loop passes of a DO loop. n is a [numerical expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

The number value of n when entering the loop determines the maximum amount of passes of the statement block. The control structure ignores changes to the value n within the loop. If n contains a value less than or equal to 0, the statement block is not executed.

Example

Calculates and displays the first ten square numbers in a DO loop.

DATA square TYPE i.
DO 10 TIMES.
  square = ipow( base = sy-index exp = 2 ).
  cl\_demo\_output=>write( |{ sy-index } { square }| ).
ENDDO.
cl\_demo\_output=>display( ).

Continue
[ENDDO](javascript:call_link\('abapenddo.htm'\))