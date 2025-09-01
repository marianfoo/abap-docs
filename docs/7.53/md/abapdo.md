---
title: "DO"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo_shortref.htm) Syntax DO n TIMES. statement_block ENDDO. Addition: ... n TIMES(#!ABAP_ONE_ADD@1@) Effect Unconditional loop. The statements DO and ENDDO define a control structure, which can contain
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo.htm"
abapFile: "abapdo.htm"
keywords: ["loop", "do", "if", "try", "data", "internal-table", "abapdo"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_loops.htm) → 

DO

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a closed statement block statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one for the statements for [leaving loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_loops.htm). In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_loop.htm) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise the loop is processed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If DO loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_conditional.htm) in constructor expressions.
    
-   The obsolete addition [VARYING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES is used to limit the number of loop passes of a DO loop. n is a [numerical expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenddo.htm)