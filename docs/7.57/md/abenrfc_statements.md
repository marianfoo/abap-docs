  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Calls, ABENRFC_STATEMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

RFC - Calls

The following additions of the [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) statement cause a remote function call:

-   [DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) for a synchronous RFC (sRFC)
    
    If the DESTINATION addition is specified without one of the following two additions, the calling program waits until the remotely called function was completed.
    
-   [STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) for an asynchronous RFC (aRFC) and its parallel RFC variety (pRFC)
    
    The addition STARTING NEW TASK is used to continue the processing of the calling program as soon as the remotely called function has been started without waiting for the function to end. The results can be handled in callback routines.
    
-   [CALL FUNCTION ... IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) for a background RFC (bgRFC).
-   [CALL FUNCTION ... IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\)) (obsolete) for a transactional RFC (tRFC) and its variant queued RFC (qRFC)
    
    The addition IN BACKGROUND flags the remotely called function for execution and starts it using the statement COMMIT WORK.
    

Hint

Background RFC (bgRFC) is an enhanced successor technology of tRFC (and qRFC) and makes it obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

More Information   

-   For a detailed description of RFC calls, see [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\))
-   and the documentation RFC in SAP Help Portal.