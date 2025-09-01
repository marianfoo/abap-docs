  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) → 

CALL FUNCTION STARTING NEW TASK

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION func STARTING NEW TASK task
              *\[*DESTINATION *{*dest*|**{*IN GROUP *{*group*|*DEFAULT*}**}**}**\]*
              *\[**{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK*\]*
[parameter\_list](javascript:call_link\('abapcall_function_starting_para.htm'\)).

Additions:

[1\. ... DESTINATION IN GROUP *{*group*|*DEFAULT*}*](#!ABAP_ADDITION_1@1@)
[2\. ... *{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK](#!ABAP_ADDITION_2@2@)

Effect

Asynchronous call (aRFC) of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") specified in func using the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"). The addition DESTINATION is used to specify a single [destination](javascript:call_link\('abenrfc_destination.htm'\)) in dest or use IN GROUP to specify a group of AS instances. The latter supports parallel processing of multiple function modules. The calling program is continued using the statement CALL FUNCTION, as soon as the remotely called function has been started in the target system, without having to wait for its processing to be finished. CALLING and PERFORMING can be used to specify callback routines for the takeover of events when the remotely called function is terminated. func and dest expect character-like data objects.

If the destination is not specified and also not defined in a callback routine using the addition KEEPING TASK of the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)), the destination "NONE" is used implicitly. The asynchronous RFC does not support communication with external systems or programs written in other programming languages.

A character-like data object must be specified for task. This object must contain a freely definable task ID with a maximum of 32 digits for the remotely called function module. This task ID is passed to the callback routines to identify the function. Each task ID defines a separate RFC connection with a separate [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") .

-   If a callback routine is specified, it must be ended before another function module is called with the same task ID and destination.

-   A repeated function call with the same task ID and destination uses the same RFC session in which the global data of the associated function pool can be accessed (if the connection still exists). This only applies in the following case:

-   If the PERFORMING addition or the CALLING addition are used and

-   The addition KEEPING TASK of the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) is specified in the callback routine.

-   In all other cases, a new RFC session is usually opened for function modules called more than once. This applies in the following cases:

-   If the task ID or destination is different (even if the connection still exists) and

-   If no callback routine is specified using the PERFORMING addition or the CALLING addition or if the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) is used without the addition KEEPING TASK in a callback routine. In these cases, the RFC connection is closed again directly after the call.

If a callback routine is specified, it must be ended before another function module is called with the same task ID and destination. If not, the call raises an exception.

More Information

More information about aRFC can be found in the RFC documentation in SAP Help Portal.

Hints

-   As with every RFC, an asynchronous RFC opens a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). If a calling program raises multiple consecutive asynchronous RFCs with different destinations or task identifiers or if a connection no longer exists, the called function modules are processed in parallel in different user sessions automatically. This property can be exploited when running applications in parallel. Since the associated management tool can cause resource bottlenecks on both the client and the server, this kind of parallel processing is only recommended using the addition DESTINATION IN GROUP.
    

-   If an asynchronous RFC is executed without a specified destination, the logon data user name, client, and logon language from the calling session are applied to the RFC session implicitly. The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the calling session must be used for the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") (and not the logon language of the session). The text environment language can be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).
    

-   If a function module is started multiple times using asynchronous RFC, the order of execution is not fixed; instead it depends in the system availability.
    

-   When dynpros are called in aRFC processing, additional [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") are opened in the RFC client (see also [RFC Dialog Interactions](javascript:call_link\('abenrfc_dialog.htm'\)). The maximum number of ABAP sessions cannot be exceeded and if there are more, an error message is displayed. The maximum number of sessions is defined in the profile parameter rdisp/max\_alt\_modes and cannot be greater than 16.
    

-   Asynchronous RFC triggers a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") in the calling program with the following exception: No database commit is triggered by an aRFC during [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") processing. aRFC is not [forbidden during updates](javascript:call_link\('abendb_commit_during_update.htm'\)).
    

-   Calls using STARTING NEW TASK are always executed using the RFC interface and a destination specified as dest is always interpreted accordingly. This is why, unlike in [synchronous RFC](javascript:call_link\('abapcall_function_destination.htm'\)), an initial string or text field containing only blanks cannot be specified for dest.
    

-   The task ID passed as task does not need to be unique for each call. Unique tasks IDs can, however, help to identify calls within a callback routine.
    

-   If by mistake the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) is not used in a callback routine specified using the PERFORMING addition or the CALLING addition, the connection is persisted as when RECEIVE is specified using the addition KEEPING TASK.
    

Addition 1

... DESTINATION IN GROUP *{*group*|*DEFAULT*}*

Effect

If IN GROUP is specified as [RFC destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry") , this supports parallel execution of multiple function modules on a predefined group of AS instances of the current [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). This variant of aRFC is also known as parallel remote function call (pRFC).

group expects a data object of the type RZLLI\_APCL from ABAP Dictionary, either an initial objects or one that includes the name of an RFC server group created in transaction RZ12. If DEFAULT is specified or if group is initial, all currently available AS instances of the current AS ABAP are used as the group. Only one RFC server group may be used within a program. The first asynchronous RFC using the addition IN GROUP initializes the specified RFC server group. For each asynchronous RFC where the group is specified, the most suitable AS instance is determined automatically, and the called function module is executed on this.

If the function module cannot be executed on any of the AS instances, because not enough resources are available at present, a predefined exception RESOURCE\_FAILURE is raised, to which, in addition to the other [RFC exceptions](javascript:call_link\('abenrfc_exception.htm'\)), a return value can be assigned. If this exception is raised, the addition MESSAGE is not allowed.

Hints

-   The parallel processing of function modules with the addition IN GROUP makes optimal use of the available resources and is preferable to self-programmed parallel processing with explicitly specified destinations.

-   An AS instance used as part of an RFC server group for parallel processing, must have at least three dialog work processes, of which one is currently free. Other resources, such as requests in the queue, the number of system messages and so on, are also respected and must not exceed certain [threshold values](javascript:call_link\('abenapp_server_resources.htm'\)).

-   To ensure that only those AS instances that have enough resources are accessed, it is preferable work with explicitly defined RFC server groups instead of working with the addition DEFAULT.

-   The function modules of function pool SPBT provide service functions for parallel processing, for example, initialization of RFC server groups, determination of the used destination or temporary removal of an AS instance from an RFC group.
    

Addition 2

... *{*CALLING meth*}**|**{*PERFORMING subr*}* ON END OF TASK

Effect

This addition can be used to specify either a method meth or a subroutine subr as the callback routine registered to be executed after terminating the asynchronously called function module. The same information can be specified for meth as for the general [method call](javascript:call_link\('abenmethod_calls.htm'\)), in particular dynamic information. subr expects a subroutine of the same program to be specified statically.

The method meth must be [public](javascript:call_link\('abenpublic_glosry.htm'\) "Glossary Entry"), and can have only one non-optional input parameter p\_task of type clike. The specified [subroutine](javascript:call_link\('abapform.htm'\)) subr can have exactly one USING parameter of the type clike. In the call, the RFC interface fills this parameter with the task identifier of the remotely called function specified in the call in task.

In the method meth or in the subroutine subr, the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) must be used to receive the results of the remote function. In the callback routine, no statements can be executed that interrupt the routine or that trigger an implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). Any statements used for [list output](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry") are not executed. Class-based exceptions can only be handled within the callback routine. There is no location where a class-based exception can be handled outside the callback routine. This is why it is not a good idea to propagate a class-based exception from a callback routine using RAISING (this produces a syntax check warning).

A prerequisite for the execution of a registered callback routine is that the calling program still exists in its [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") when the remote function is terminated. It is then executed here at the next change of the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") in a roll-in. If the program was terminated or is located on the stack as part of a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") , the callback routine is not executed.

If multiple callback routines are registered during a program section, they are executed in an undefined order when the work process changes in a roll-in. The statement [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)) can be used to stop the program execution until certain or all callback routines have been executed.

Hints

-   If no RECEIVE statement is executed in the callback routine to receive the result of the remote function, the connection remains intact and implicitly behaves like the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) with the addition KEEPING TASK. This implicit behavior is usually unwanted and a callback routine without a RECEIVE statement must be viewed as a programming error.

-   The time when the callback routines are executed can be programmed explicitly or be reached implicitly:

-   The statement [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)) is used for explicit programming. As specified by a condition, this statement changes the work process and hence executes the callback routines registered up to this time. It waits for as many registered routines to end until the condition is met (the maximum wait time can be restricted). Explicit programming is recommended whenever the results of the remote function are required in the current program.

-   If the results of the remote function are not required in the current program, the time at which the callback routines are executed can also be determined by an implicit change of the work process (for example, at the end of a [dialog step](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry")). This can be a good idea, for example, in GUI scenarios in which uses of WAIT are not wanted. In this case, it must be ensured that the work process changes before the program is ended. There is also a risk that, if the work process is changed implicitly, not all callback routines are registered in time.

Continue
[CALL FUNCTION STARTING NEW TASK, parameter\_list](javascript:call_link\('abapcall_function_starting_para.htm'\))
[RECEIVE](javascript:call_link\('abapreceive.htm'\))
[WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\))
[RFC - Thresholds for Resource Allocation](javascript:call_link\('abenapp_server_resources.htm'\))