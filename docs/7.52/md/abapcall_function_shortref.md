  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CALL FUNCTION - Quick reference

[Reference](javascript:call_link\('abapcall_function.htm'\))

Syntax

CALL FUNCTION func *\[* *{*IN UPDATE TASK*}*
                   *|* *{* *\[* *{*STARTING NEW TASK task*}*
                       *|* *{*IN BACKGROUND TASK *\[*AS SEPARATE UNIT*\]**}* *\]*
                       *\[*DESTINATION dest*\]* *}*
                   *|* *{*IN BACKGROUND UNIT*}* *\]*
                   *\[**{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK*\]*
                   *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                     *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                     *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*
                     *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
                     *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                                 *\[*error\_message = n\_error*\]*
                                 *\[*system\_failure = ns
                                   *\[*MESSAGE smess*\]**\]*
                                 *\[*communication\_failure = nc
                                   *\[*MESSAGE cmess*\]**\]*
                                 *\[*resource\_failure = nc*\]*
                                 *\[*OTHERS = n\_others*\]**\]**}*
                   *|* *{**\[*PARAMETER-TABLE ptab*\]*
                       *\[*EXCEPTION-TABLE etab*\]* *}*.

Effect

Calls the function module specified in func.

Additions

-   [IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\))
    Registers an update function module.
    
-   [DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)), [STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)), [IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)), [IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\))
    [Synchronous](javascript:call_link\('abensynchronous_rfc_glosry.htm'\) "Glossary Entry"), [asynchronous](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry"), [background](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry"), or [transactional RFC](javascript:call_link\('abentrfc_1_glosry.htm'\) "Glossary Entry") (obsolete).
    
-   [*{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK](javascript:call_link\('abapcall_function_starting.htm'\))
    At the end of an asynchronous RFC, calls method meth or subroutine subr.
    
-   [EXPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_function_parameter.htm'\))
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   [IMPORTING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_function_parameter.htm'\))
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
    
-   [TABLES t1 = itab1 t2 = itab2 ...](javascript:call_link\('abapcall_function_parameter.htm'\))
    Assigns internal tables itab1, itab2, ... to table parameters t1, t2, etc.
    
-   [CHANGING p1 = a1 p2 = a2 ...](javascript:call_link\('abapcall_function_parameter.htm'\))
    Assigns actual parameters a1, a2, ... to input/output parameters p1, p2, and so on.
    
-   [EXCEPTIONS](javascript:call_link\('abapcall_function_parameter.htm'\))
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    error\_message = n\_error - Handles messages using the special exception error\_message.
    system\_failure, communication\_failure, resource\_failure - Handles special classic exceptions by passing the first line of the short dump to smess or cmess.
    OTHERS = n\_others - Assigns a number n\_others for the return code sy-subrc to all exceptions not named explicitly.
    
-   [PARAMETER-TABLE ptab](javascript:call_link\('abapcall_function_dynamic.htm'\))
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of the type ABAP\_FUNC\_PARMBIND\_TAB.
    
-   [EXCEPTION-TABLE etab](javascript:call_link\('abapcall_function_dynamic.htm'\))
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of the type ABAP\_FUNC\_EXCPBIND\_TAB.