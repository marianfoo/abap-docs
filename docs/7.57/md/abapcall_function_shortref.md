---
title: "CALL FUNCTION - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function.htm) Syntax CALL FUNCTION func  IN UPDATE TASK    STARTING NEW TASK task  IN BACKGROUND TASK AS SEPARATE UNIT  DESTINATION dest   IN BACKGROUND UNI
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm"
abapFile: "abapcall_function_shortref.htm"
keywords: ["update", "do", "if", "try", "method", "class", "internal-table", "abapcall", "function", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION, ABAPCALL_FUNCTION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

CALL FUNCTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function.htm)

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

-   [IN UPDATE TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_update.htm)
    Registers an update function module.
-   [DESTINATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm), [STARTING NEW TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm), [IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm), [IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm)
    [Synchronous](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensynchronous_rfc_glosry.htm "Glossary Entry"), [asynchronous](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"), [background](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbg_remote_function_glosry.htm "Glossary Entry"), or [transactional RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrfc_1_glosry.htm "Glossary Entry") (obsolete).
-   [*{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm)
    At the end of an asynchronous RFC, calls method meth or subroutine subr.
-   [EXPORTING p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
    Passes actual parameters a1, a2, ... to input parameters p1 p2, ...
-   [IMPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
-   [TABLES  t1 = itab1 t2 = itab2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
    Assigns internal tables itab1, itab2, ... to table parameters t1, t2, and so on.
-   [CHANGING   p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
    Assigns actual parameters a1, a2, ... to input/output parameters p1, p2, and so on.
-   [EXCEPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
    Enables the handling of non-class-based exceptions:
    exc1 = n1 exc2 = n2 ... - Assigns numbers n1, n2, ... to the classic exceptions exc1, exc2, ... for the return code sy-subrc.
    error\_message = n\_error - Handles messages using the special exception error\_message.
    system\_failure, communication\_failure, resource\_failure - Handles special classic exceptions by passing the first line of the short dump to smess or cmess.
    OTHERS = n\_others - Assigns a number n\_others for the return code sy-subrc to all exceptions not named explicitly.
-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_dynamic.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of the type abap\_func\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_dynamic.htm)
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of the type abap\_func\_excpbind\_tab.