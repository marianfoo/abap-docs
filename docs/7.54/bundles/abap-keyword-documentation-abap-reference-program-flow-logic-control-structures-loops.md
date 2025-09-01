# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Control Structures / Loops

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_loops.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_loops.htm)
- [abapdo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)
- [abapenddo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenddo.htm)
- [abapwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhile.htm)
- [abapendwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwhile.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.981Z

---

### abenabap_loops.htm

> **📖 Official SAP Documentation**: [abenabap_loops.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_loops.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) → 

Loops

This section describes the loops defined using

-   [DO - ENDDO](javascript:call_link\('abapdo.htm'\)), and

-   [WHILE - ENDWHILE](javascript:call_link\('abapwhile.htm'\))

Other keywords for defining loops are:

-   [LOOP - ENDLOOP](javascript:call_link\('abaploop_at_itab.htm'\)), and

-   [PROVIDE - ENDPROVIDE](javascript:call_link\('abapprovide.htm'\)) for loops through internal tables and

-   [SELECT - ENDSELECT](javascript:call_link\('abapselect.htm'\)) for loops through the result set of a database access

Continue
[DO](javascript:call_link\('abapdo.htm'\))
[WHILE](javascript:call_link\('abapwhile.htm'\))



**📖 Source**: [abenabap_loops.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_loops.htm)

### abapdo.htm

> **📖 Official SAP Documentation**: [abapdo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

The addition n TIMES limits the amount of loop passes in a DO loop. n is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

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



**📖 Source**: [abapdo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)

### abapenddo.htm

> **📖 Official SAP Documentation**: [abapenddo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenddo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) →  [DO](javascript:call_link\('abapdo.htm'\)) → 

ENDDO

[Quick Reference](javascript:call_link\('abapdo_shortref.htm'\))

Syntax

ENDDO.

Effect

The statement ENDDO closes a loop started using [DO](javascript:call_link\('abapdo.htm'\)).



**📖 Source**: [abapenddo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenddo.htm)

### abapdo.htm

> **📖 Official SAP Documentation**: [abapdo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

The addition n TIMES limits the amount of loop passes in a DO loop. n is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i.

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



**📖 Source**: [abapdo.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm)

### abapwhile.htm

> **📖 Official SAP Documentation**: [abapwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhile.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

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



**📖 Source**: [abapwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhile.htm)

### abapendwhile.htm

> **📖 Official SAP Documentation**: [abapendwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwhile.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) →  [WHILE](javascript:call_link\('abapwhile.htm'\)) → 

ENDWHILE

[Quick Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Syntax

ENDWHILE.

Effect

The statement ENDWHILE closes a loop introduced using [WHILE](javascript:call_link\('abapwhile.htm'\)).



**📖 Source**: [abapendwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendwhile.htm)

### abapwhile.htm

> **📖 Official SAP Documentation**: [abapwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhile.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapwhile.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhile.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Loops](javascript:call_link\('abenabap_loops.htm'\)) → 

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
