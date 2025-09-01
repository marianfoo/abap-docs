---
title: "RFC - Calls"
description: |
  The following additions of the CALL FUNCTION(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) statement cause a remote function call: -   DESTINATION(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination.htm) for a syn
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_statements.htm"
abapFile: "abenrfc_statements.htm"
keywords: ["do", "if", "data", "abenrfc", "statements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Calls%2C%20ABENRFC_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Calls

The following additions of the [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) statement cause a remote function call:

-   [DESTINATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination.htm) for a synchronous RFC (sRFC)
    
    If the DESTINATION addition is specified without one of the following two additions, the calling program waits until the remotely called function was completed.
    
-   [STARTING NEW TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_starting.htm) for an asynchronous RFC (aRFC) and its parallel RFC variety (pRFC)
    
    The addition STARTING NEW TASK is used to continue the processing of the calling program as soon as the remotely called function has been started without waiting for the function to end. The results can be handled in callback routines.
    
-   [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_unit.htm) for a background RFC (bgRFC).
-   [CALL FUNCTION ... IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_task.htm) (obsolete) for a transactional RFC (tRFC) and its variant queued RFC (qRFC)
    
    The addition IN BACKGROUND flags the remotely called function for execution and starts it using the statement COMMIT WORK.
    

Hint

Background RFC (bgRFC) is an enhanced successor technology of tRFC (and qRFC) and makes it obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

More Information   

-   For a detailed description of RFC calls, see [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination-.htm)
-   and the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.