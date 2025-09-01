# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Control Structures / Loops

Included pages: 7


### abenabap_loops.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) → 

Loops

This section describes the loops defined using

-   [DO - ENDDO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm), and

-   [WHILE - ENDWHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm)

Other keywords for defining loops are:

-   [LOOP - ENDLOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), and

-   [PROVIDE - ENDPROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm) for loops through internal tables and

-   [SELECT - ENDSELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) for loops through the result set of a database access

Continue
[DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm)
[WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm)


### abapdo.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) → 

DO

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a closed statement block statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one for the statements for [leaving loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm). In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise the loop is processed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If DO loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) in constructor expressions.
    
-   The obsolete addition [varying](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES limits the amount of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapenddo.htm)


### abapenddo.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) →  [DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm) → 

ENDDO

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo_shortref.htm)

Syntax

ENDDO.

Effect

The statement ENDDO closes a loop started using [DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm).


### abapdo.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) → 

DO

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a closed statement block statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one for the statements for [leaving loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm). In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise the loop is processed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If DO loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) in constructor expressions.
    
-   The obsolete addition [varying](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES limits the amount of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapenddo.htm)


### abapwhile.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) → 

WHILE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile_shortref.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm)
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a closed statement block statement\_block. After WHILE, any [logical expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to leave loops. In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If WHILE loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) in constructor expressions.
    
-   The obsolete addition [VARY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile_vary.htm) can be used to process a sequence of data objects in the memory.
    

Example

Fills an internal table with 100 rows.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendwhile.htm)


### abapendwhile.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) →  [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm) → 

ENDWHILE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile_shortref.htm)

Syntax

ENDWHILE.

Effect

The statement ENDWHILE closes a loop introduced using [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm).


### abapwhile.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_loops.htm) → 

WHILE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile_shortref.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm)
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a closed statement block statement\_block. After WHILE, any [logical expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to leave loops. In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If WHILE loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) in constructor expressions.
    
-   The obsolete addition [VARY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile_vary.htm) can be used to process a sequence of data objects in the memory.
    

Example

Fills an internal table with 100 rows.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendwhile.htm)
