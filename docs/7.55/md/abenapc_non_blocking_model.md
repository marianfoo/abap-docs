---
title: "APC - Non-Blocking Mode"
description: |
  Stateful APC processing(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc_processing_glosry.htm 'Glossary Entry') takes place in an event-driven way: -   AS ABAP as a stateful APC server -   AS ABAP as a stateful detached APC client To stop APC sessions(https://help.sap.com/doc/
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc_non_blocking_model.htm"
abapFile: "abenapc_non_blocking_model.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abenapc", "non", "blocking", "model"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc.htm) → 

APC - Non-Blocking Mode

Stateful [APC processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc_processing_glosry.htm "Glossary Entry") takes place in an event-driven way:

-   AS ABAP as a stateful APC server

-   AS ABAP as a stateful detached APC client

To stop [APC sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc_session_glosry.htm "Glossary Entry") of this type from being blocked for inbound messages, processing must run in [non-blocking mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennon_blocking_model_glosry.htm "Glossary Entry"). The following blocking statements are not allowed in non-blocking mode for APC:

-   Calls

-   [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm)

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm)

-   [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination.htm) for [sRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrfc_glosry.htm "Glossary Entry")

-   [CALL DIALOG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_dialog.htm)

-   [CALL SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_screen.htm)

-   [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_selection_screen.htm)

-   [SET SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_screen.htm)

-   Exit

-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_list-processing.htm)

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_program.htm)

-   [LEAVE SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_screen.htm)

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm)

-   [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_list-processing.htm)

-   [CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcheck_processing_blocks.htm), [EXIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexit_processing_blocks.htm), [STOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstop.htm), and [REJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreject.htm) for exiting [reporting events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_event_glosry.htm "Glossary Entry")

-   Wait

-   [WAIT UP TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_up_to.htm), [WAIT FOR ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_arfc.htm)

-   [COMMUNICATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommunication.htm)

Using a statement like this in non-blocking mode produces the runtime error APC\_ILLEGAL\_STATEMENT.

Hints

-   The statement WAIT is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction (such as the end of a callback routine in [aRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarfc_glosry.htm "Glossary Entry"), [ABAP Timers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_timer_glosry.htm "Glossary Entry") can be used. An ABAP Timer is created by [ABAP Timer Manager](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_timer_manager_glosry.htm "Glossary Entry") and handled using [ABAP Timer handlers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER. ABAP Timers can only be used in non-blocking mode, namely [APC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapc_session_glosry.htm "Glossary Entry") and [ABAP Daemon sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry").

-   Unlike in APC processing, the statement [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination.htm) is allowed for [sRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrfc_glosry.htm "Glossary Entry") in [non-blocking mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadf_non_blocking_model.htm) for [ADF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadf_glosry.htm "Glossary Entry").