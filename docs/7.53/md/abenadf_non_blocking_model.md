  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ADF - ABAP Daemon Framework](javascript:call_link\('abenabap_daemon.htm'\)) → 

ADF - Non-Blocking Mode

[ABAP Daemon processing](javascript:call_link\('abenabap_daemon_processing_glosry.htm'\) "Glossary Entry") is event-driven To stop an [ABAP Daemon session](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry") type from being blocked for inbound messages, the the session runs in [non-blocking model](javascript:call_link\('abennon_blocking_model_glosry.htm'\) "Glossary Entry"). In non-blocking mode for ADF, the following blocking statements are forbidden in ABAP Daemon processing and in the procedures called here:

-   Calls

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\))

-   [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\))

-   [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\))

-   [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\))

-   [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\))

-   [SET SCREEN](javascript:call_link\('abapset_screen.htm'\))

-   Exit

-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

-   [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))

-   [LEAVE SCREEN](javascript:call_link\('abapleave_screen.htm'\))

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)), [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\)), [STOP](javascript:call_link\('abapstop.htm'\)), and [REJECT](javascript:call_link\('abapreject.htm'\)) for exiting [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry")

-   Wait

-   [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), [WAIT FOR ...](javascript:call_link\('abapwait_until.htm'\))

-   [COMMUNICATION](javascript:call_link\('abapcommunication.htm'\))

Using a statement like this in non-blocking mode produces a runtime error.

Notes

-   The statement WAIT is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction (such as the end of a callback routine in [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"), [ABAP Timers](javascript:call_link\('abenabap_timer_glosry.htm'\) "Glossary Entry") can be used. An ABAP Timer is created by [ABAP Timer Manager](javascript:call_link\('abenabap_timer_manager_glosry.htm'\) "Glossary Entry") and handled using [ABAP Timer handlers](javascript:call_link\('abenabap_timer_handler_glosry.htm'\) "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER. ABAP Timers can only be used in non-blocking mode, namely [APC](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") and [ABAP Daemon sessions](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry").

-   Unlike in [non-blocking mode](javascript:call_link\('abenapc_non_blocking_model.htm'\)) for [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry"), the statement [CALL FUNCTION DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) for [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") is allowed in ABAP Daemon processing.