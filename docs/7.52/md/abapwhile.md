  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

WHILE

[Quick Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Syntax

WHILE [log\_exp](javascript:call_link\('abenlogexp.htm'\))
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a closed statement block statement\_block. After WHILE, any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to leave loops. In particular, the statement [EXIT](javascript:call_link\('abapexit_loop.htm'\)) is ideal for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Notes

-   A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is ended by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.
    
-   If WHILE loops are used to construct values or fill internal tables, they can probably be expressed more elegantly using conditional iterations with [FOR](javascript:call_link\('abenfor_conditional.htm'\)) in constructor expressions.
    
-   The obsolete addition [VARY](javascript:call_link\('abapwhile_vary.htm'\)) can be used to process a sequence of data objects in the memory.
    

Example

Fills an internal table with 100 rows.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](javascript:call_link\('abapendwhile.htm'\))