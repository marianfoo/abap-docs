  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION - STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) → 

WAIT FOR ASYNCHRONOUS TASKS

[Quick Reference](javascript:call_link\('abapwait_shortref.htm'\))

Syntax

WAIT FOR ASYNCHRONOUS TASKS
         *\[*[MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\))*\]*
         *\[*[PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\))*\]*
         UNTIL [log\_exp](javascript:call_link\('abenlogexp.htm'\)) *\[*UP TO sec SECONDS*\]*.

Extras:

[1\. ... MESSAGING CHANNELS](#!ABAP_ADDITION_1@1@)
[2\. ... PUSH CHANNELS](#!ABAP_ADDITION_2@2@)
[3\. ... UP TO sec SECONDS](#!ABAP_ADDITION_3@3@)

Effect

This variant of the statement WAIT is designed only for use after an [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)) with callback routines. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)) after UNTIL.

-   If the result of log\_exp is false and there is an asynchronous function call with callback routine, the program waits until a [callback routine](javascript:call_link\('abapcall_function_starting.htm'\)) of a previous function (called asynchronously) has been executed and then checks the logical expression again:
    

-   If the new check on the result of the logical expression is true, sy-subrc is set to 0 and the execution of the program is resumed with the statement that follows WAIT.

-   If the new check on the result of the logical expression is false and the callback routines of the functions previously called asynchronously were not all executed, one of the remaining callback routines must be executed before the program resumes.

-   If the new check on the result of the logical expression is false and the callback routines of the functions previously called asynchronously were all executed, sy-subrc is set to 4 and the execution of the program is resumed with the statement that follows WAIT.

-   If the result of log\_exp is false and there is no asynchronous function call with a callback routine, the execution of the program is not interrupted (regardless of the result of log\_exp) and sy-subrc is set to the value 4.
    
-   If the logical expression is true, the execution of the program is not interrupted (regardless of whether there is a function call with a callback routine) and sy-subrc is set to the value 0.
    

If the statement WAIT interrupts the program, the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") is changed and a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is executed (except in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"). For this reason, WAIT must not be used between ABAP SQL statements that open or close a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").

System Fields

sy-subrc

Meaning

0

The logical expression log\_exp is true.

4

The logical expression log\_exp is false. Also the current program does not contain any asynchronous function calls with callback routines, and no receiver is registered for [AMC](javascript:call_link\('abenamc_glosry.htm'\) "Glossary Entry") messages or [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry") messages for the use of the additions MESSAGING CHANNELS or PUSH CHANNELS.

8

The logical expression log\_exp is false and when the addition UP TO was specified, the maximum time was exceeded.

Notes

-   If the logical expression is false and there is an asynchronous function call with a callback routine, the statement WAIT FOR changes the work process and hence executes all callback routines registered up until now.
    
-   When a program is interrupted, the running program is paused in its current state. After a callback routine, all data objects that were not changed in the callback routine have the same value as when the logical expression was last evaluated. Any methods called by functions within the logical expression are executed again during the next check.
    
-   This statement has an [obsolete short form](javascript:call_link\('abapwait_obsolete.htm'\)), in which FOR ASYNCHRONOUS TASKS is not specified.
    

Addition 1

... MESSAGING CHANNELS

Addition 2

... PUSH CHANNELS

Effect

If these additions are specified, this variant of the statement WAIT is combined with the variants [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) or [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)). The program flow described in the variants is added to the program flow described above. The WAIT statement then also waits for AMC messages or APC messages to be executed and does not just wait for asynchronously called functions to be executed.

Addition 3

... UP TO sec SECONDS

Effect

If UP TO is specified, a maximum time sec can be specified in seconds and the statement waits for asynchronously called functions to be ended for this time. sec expects a data object of the type f that must contain a positive number. The unit of the number in sec is seconds and the time resolution is one millisecond.

If none of the asynchronously called functions are ended within the specified time, their callback routine dictates that the result of the logical expression log\_exp is true, sy-subrc is set to 8, and the execution of the program is resumed with the statement that follows WAIT.

Notes

-   If there are not asynchronous function calls with a callback routine, the addition UP TO sec SECONDS is ignored.
    
-   The addition UP TO sec SECONDS is ignored with respect to the execution of the callback routines. The time needed for these routines to execute can be longer than the time specified.
    
-   If the addition UP TO sec SECONDS is used to cancel the wait, it does not mean that any outstanding callback routines are never executed. A change of the work process at a later time in the same program can result in the callback routines of the asynchronous functions executed until now being executed. Only the callback routines of those asynchronous functions not ended at the end of the program are no longer executed.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Negative time specified for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT