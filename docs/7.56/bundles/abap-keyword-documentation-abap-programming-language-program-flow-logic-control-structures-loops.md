# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Control Structures / Loops

Included pages: 7


### abenabap_loops.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) → 

Loops

This section describes the loops defined using the following:

-   [DO - ENDDO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm)
-   [WHILE - ENDWHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm)

Further keywords for defining loops are:

-   [LOOP - ENDLOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab.htm)
-   [PROVIDE - ENDPROVIDE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprovide.htm) for loops across internal tables
-   [SELECT - ENDSELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) for loops across the result set of a database access.

Continue
[DO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm)
[WHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm)


### abapdo.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) → 

DO

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block.

Without the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@), the statement block is repeated until it is exited using one of the following statements:

-   [EXIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_processing_blocks.htm) can be used.

Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@) is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime framework.
-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARYING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.

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

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenddo.htm)


### abapenddo.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) →  [DO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm) → 

ENDDO

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_shortref.htm)

Syntax

ENDDO.

Effect

The statement ENDDO completes a loop started using [DO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm).


### abapdo.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) → 

DO

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_shortref.htm)

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block.

Without the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@), the statement block is repeated until it is exited using one of the following statements:

-   [EXIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcheck_processing_blocks.htm) can be used.

Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition [n TIMES](abapdo.htm#!ABAP_ONE_ADD@1@) is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime framework.
-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARYING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_varying.htm) can be used to process a sequence of data objects in the memory.

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

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

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
[ENDDO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenddo.htm)


### abapwhile.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) → 

WHILE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_shortref.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm)
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a complete [statement block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block. After WHILE, any [logical expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_loop.htm) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime framework.
-   If WHILE loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_vary.htm) can be used to process a sequence of data objects in the memory.

Example

Filling of an internal table with 100 lines. A [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor.htm) expression can now also be used for that purpose.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendwhile.htm)


### abapendwhile.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) →  [WHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm) → 

ENDWHILE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_shortref.htm)

Syntax

ENDWHILE.

Effect

The statement ENDWHILE completes a loop introduced using [WHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm).


### abapwhile.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_loops.htm) → 

WHILE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_shortref.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm)
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a complete [statement block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block. After WHILE, any [logical expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexit_loop.htm) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime framework.
-   If WHILE loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_vary.htm) can be used to process a sequence of data objects in the memory.

Example

Filling of an internal table with 100 lines. A [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor.htm) expression can now also be used for that purpose.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendwhile.htm)
