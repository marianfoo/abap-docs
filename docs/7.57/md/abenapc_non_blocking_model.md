  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) →  [ABAP Push Channels (APC)](javascript:call_link\('abenapc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: APC - Non-Blocking Mode, ABENAPC_NON_BLOCKING_MODEL, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

APC - Non-Blocking Mode

Stateful [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") takes place in an event-driven way:

-   AS ABAP as a stateful APC server
-   AS ABAP as a stateful detached APC client

To stop [APC sessions](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") of this type from being blocked for inbound messages, processing takes place in [non-blocking mode](javascript:call_link\('abennon_blocking_model_glosry.htm'\) "Glossary Entry"). The following blocking statements are not allowed in non-blocking mode for APC:

-   Calls
    -   [SUBMIT](javascript:call_link\('abapsubmit.htm'\))
    -   [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\))
    -   [CALL FUNCTION DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) for [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry")
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
    -   [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), [WAIT FOR ...](javascript:call_link\('abapwait_arfc.htm'\))
    -   [COMMUNICATION](javascript:call_link\('abapcommunication.htm'\))

Using a statement like this in non-blocking mode produces the runtime error APC\_ILLEGAL\_STATEMENT.

Hints

-   The statement WAIT is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction, such as the end of a callback routine in [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"), [ABAP Timers](javascript:call_link\('abenabap_timer_glosry.htm'\) "Glossary Entry") can be used. An ABAP Timer is created by the [ABAP Timer Manager](javascript:call_link\('abenabap_timer_manager_glosry.htm'\) "Glossary Entry") and handled using the [ABAP Timer handlers](javascript:call_link\('abenabap_timer_handler_glosry.htm'\) "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER. ABAP Timers can only be used in non-blocking mode, namely [APC](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry") and [ABAP daemon sessions](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry").
-   Unlike in APC processing, the statement [CALL FUNCTION DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) is allowed for [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") in [non-blocking mode](javascript:call_link\('abenadf_non_blocking_model.htm'\)) for [ADF](javascript:call_link\('abenadf_glosry.htm'\) "Glossary Entry").