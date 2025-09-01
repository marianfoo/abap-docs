  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

WHILE - VARY

[Quick Reference](javascript:call_link\('abapwhile_shortref.htm'\))

Obsolete Syntax

WHILE ... VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
         *\[*VARY ...*\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

The addition VARY and its addition RANGE have exactly the same effect on a [WHILE](javascript:call_link\('abapwhile.htm'\)) loop as the other obsolete additions [VARYING](javascript:call_link\('abapdo_varying.htm'\)) and [RANGE](javascript:call_link\('abapdo_varying.htm'\)) of the statement [DO](javascript:call_link\('abapdo.htm'\)). The addition VARY can be used more than once in a WHILE statement.

Note

Instead of the addition VARY, the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) should be used in the loop with the addition [INCREMENT](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Invalid access to tables, strings, field references, or object references within the range specified by the addition RANGE.
    Runtime error: DO\_WHILE\_VARY\_ILLEGAL\_ACCESS
    
-   Cause: Access to data outside the range specified by the RANGE addition.
    Runtime error: DO\_WHILE\_VARY\_NOT\_IN\_RANGE