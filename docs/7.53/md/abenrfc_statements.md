  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_intro_oview.htm) → 

RFC Calls

The following additions of the [CALL FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm) statement produce a remote function call:

-   [DESTINATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination.htm) for a synchronous RFC (sRFC)
    If the DESTINATION addition is specified without one of the following two additions, the calling program waits until the remotely called function has finished.

-   [STARTING NEW TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_starting.htm) for an asynchronous RFC (aRFC) and its parallel RFC variety (pRFC)
    The addition STARTING NEW TASK continues the processing of the calling program as soon as the remotely called function has been started, without waiting for the function to end. The results can be handled in callback routines.

-   [CALL FUNCTION ... IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm) for a background RFC (bgRFC).

-   [CALL FUNCTION ... IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_task.htm) (obsolete) for a transactional RFC (tRFC) and its variant queued RFC (qRFC)
    The addition IN BACKGROUND flags the remotely called function to be executed and starts it using the statement COMMIT WORK.

Note

Background RFC (bgRFC) is an enhanced successor of tRFC (and qRFC) and makes them obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

More Information

-   For a detailed description of RFC calls, see [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination-.htm).

-   and RFC documentation on [SAP Help Portal](http://help.sap.com).