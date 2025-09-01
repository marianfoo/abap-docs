# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Control Structures / Loops

Included pages: 7


### abenabap_loops.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) → 

Loops

This section describes the loops defined using the following:

-   [DO - ENDDO](javascript:call_link\('abapdo.htm'\))

-   [WHILE - ENDWHILE](javascript:call_link\('abapwhile.htm'\))

Further keywords for defining loops are:

-   [LOOP - ENDLOOP](javascript:call_link\('abaploop_at_itab.htm'\))

-   [PROVIDE - ENDPROVIDE](javascript:call_link\('abapprovide.htm'\)) for loops across internal tables

-   [SELECT - ENDSELECT](javascript:call_link\('abapselect.htm'\)) for loops across the result set of a database access.

Continue
[DO](javascript:call_link\('abapdo.htm'\))
[WHILE](javascript:call_link\('abapwhile.htm'\))


### abapdo.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

DO

[Short Reference](javascript:call_link\('abapdo_shortref.htm'\))

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one of the statements for [exiting loops](javascript:call_link\('abenleave_loops.htm'\)). In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime environment.

-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.

-   The obsolete addition [VARYING](javascript:call_link\('abapdo_varying.htm'\)) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

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
[ENDDO](javascript:call_link\('abapenddo.htm'\))


### abapenddo.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) →  [DO](javascript:call_link\('abapdo.htm'\)) → 

ENDDO

[Short Reference](javascript:call_link\('abapdo_shortref.htm'\))

Syntax

ENDDO.

Effect

The statement ENDDO completes a loop started using [DO](javascript:call_link\('abapdo.htm'\)).


### abapdo.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

DO

[Short Reference](javascript:call_link\('abapdo_shortref.htm'\))

Syntax

DO *\[*n TIMES*\]*.
  *\[*statement\_block*\]*
ENDDO.

Addition:

[... n TIMES](#!ABAP_ONE_ADD@1@)

Effect

Unconditional loop. The statements DO and ENDDO define a control structure, which can contain a complete [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") statement\_block.

Without the addition n TIMES, the statement block is repeated until it is exited using one of the statements for [exiting loops](javascript:call_link\('abenleave_loops.htm'\)). In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   If the addition n TIMES is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this is exceeded, the program is terminated by the runtime environment.

-   If DO loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.

-   The obsolete addition [VARYING](javascript:call_link\('abapdo_varying.htm'\)) can be used to process a sequence of data objects in the memory.
    

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

The addition n TIMES limits the number of loop passes in a DO loop. n is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

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
[ENDDO](javascript:call_link\('abapenddo.htm'\))


### abapwhile.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

WHILE

[Short Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Syntax

WHILE [log\_exp](javascript:call_link\('abenlogexp.htm'\))
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a complete [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") statement\_block. After WHILE, any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime environment.

-   If WHILE loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.

-   The obsolete addition [VARY](javascript:call_link\('abapwhile_vary.htm'\)) can be used to process a sequence of data objects in the memory.
    

Example

Filling of an internal table with 100 lines. A [FOR](javascript:call_link\('abenfor.htm'\)) expression can now also be used for that purpose.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](javascript:call_link\('abapendwhile.htm'\))


### abapendwhile.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) →  [WHILE](javascript:call_link\('abapwhile.htm'\)) → 

ENDWHILE

[Short Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Syntax

ENDWHILE.

Effect

The statement ENDWHILE completes a loop introduced using [WHILE](javascript:call_link\('abapwhile.htm'\)).


### abapwhile.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

WHILE

[Short Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Syntax

WHILE [log\_exp](javascript:call_link\('abenlogexp.htm'\))
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a complete [statement block](javascript:call_link\('abenstatement_block_glosry.htm'\) "Glossary Entry") statement\_block. After WHILE, any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime environment.

-   If WHILE loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.

-   The obsolete addition [VARY](javascript:call_link\('abapwhile_vary.htm'\)) can be used to process a sequence of data objects in the memory.
    

Example

Filling of an internal table with 100 lines. A [FOR](javascript:call_link\('abenfor.htm'\)) expression can now also be used for that purpose.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](javascript:call_link\('abapendwhile.htm'\))
