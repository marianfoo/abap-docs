  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RECEIVE, ABAPRECEIVE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

RECEIVE

[Short Reference](javascript:call_link\('abapreceive_shortref.htm'\))

Syntax

RECEIVE RESULTS FROM FUNCTION func
                *\[*KEEPING TASK*\]*
                [parameter\_list](javascript:call_link\('abapreceive_para.htm'\)).

Addition:

[... KEEPING TASK](#!ABAP_ONE_ADD@1@)

Effect

This statement must be used in a callback routine specified in an [asynchronous RFC](javascript:call_link\('abapcall_function_starting.htm'\)) to receive output parameters of an asynchronously called function func in the parameter list [parameter\_list](javascript:call_link\('abapreceive_para.htm'\)) and to handle exceptions.

Hints

-   Callback routines without a RECEIVE statement are possible in the syntax but are not desired and are to be viewed as programming errors. Callback routines without a RECEIVE statement behave implicitly in the same way as when the addition KEEPING TASK is specified for RECEIVE.
-   Before the statement RECEIVE is executed in a callback routine, the current work process is interrupted in order to receive the data. If this has not already been done by another action, such as by using the statement [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)), the callback routine is executed after an implicit switch of the work process. This results in a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") except during the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry").

Addition   

... KEEPING TASK

Effect

The addition KEEPING TASK retains the asynchronous RFC connection, and therefore also the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") of the called function module. When a new call is made with the same task ID, the same global data of the function pool is addressed. A destination specified directly using DESTINATION can be specified again but does not have to be. DESTINATION IN GROUP cannot be used to specify a group if a new call is performed. Without the addition KEEPING TASK, an asynchronous RFC connection is ended after the remote function is executed or after the results have been transferred.

Hint

The addition KEEPING TASK should be used only if the RFC session of the called function module is required for further function calls.

Continue
[RECEIVE, parameter\_list](javascript:call_link\('abapreceive_para.htm'\))