---
title: "RFC - CALL FUNCTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm) Syntax Forms Synchronous RFC(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm) 1. CALL FUNCTION func DESTINATION dest parameter_list(https://
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination-.htm"
abapFile: "abapcall_function_destination-.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "internal-table", "abapcall", "function", "destination"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - CALL FUNCTION, ABAPCALL_FUNCTION_DESTINATION-, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

RFC - CALL FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm)

Syntax Forms

[Synchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm)
1\. CALL FUNCTION func DESTINATION dest
                [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination_para.htm).
[Asynchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm)
2\. CALL FUNCTION func STARTING NEW TASK task
                *\[*DESTINATION *{*dest*|**{*IN GROUP *{*group*|*DEFAULT*}**}**}**\]*
                *\[**{*PERFORMING subr*}**|**{*CALLING meth*}* ON END OF TASK*\]*
                [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting_para.htm).
[Background RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm)
3\. CALL FUNCTION func IN BACKGROUND UNIT
[parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_para.htm).

Effect

A function module or a function is called using the RFC interface. The same applies to the specification func as to [general function module calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_general.htm).

Hints

-   [Background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") is the enhanced successor technology of [transactional RFC (tRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm) and makes this technology [obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_obsolete.htm). It is strongly recommended that bgRFC is used instead of tRFC.
-   For a more detailed description of exceptions that can be raised in RFC, see the documentation RFC in SAP Help Portal.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendyn_call_scrty.htm).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The called function module is not released for RFC.
    Runtime error: CALL\_BACK\_ENTRY\_NOT\_FOUND
-   Cause: The destination type is not allowed.
    Runtime error: CALL\_FUNCTION\_DEST\_TYPE
-   Cause: The current function was not called remotely.
    Runtime error: CALL\_FUNCTION\_NO\_SENDER
-   Cause: Missing communication type (I for internal connection, 3 for AS ABAP) when performing an asynchronous RFC
    Runtime error: CALL\_FUNCTION\_DESTINATION\_NO\_T
-   Cause: The specified destination does not exist.
    Runtime error: CALL\_FUNCTION\_NO\_DEST
-   Cause: The specified destination (in load balancing mode) does not exist.
    Runtime error: CALL\_FUNCTION\_NO\_LB\_DEST
-   Cause: Data received for an unknown CPI-C connection.
    Runtime error: CALL\_FUNCTION\_NO\_RECEIVER
-   Cause: The function module to be called is not flagged as "remotely" callable.
    Runtime error: CALL\_FUNCTION\_NOT\_REMOTE
-   Cause: An error occurred in RFC that has been logged in the calling system.
    Runtime error: CALL\_FUNCTION\_REMOTE\_ERROR
-   Cause: The user logon data is incomplete.
    Runtime error: CALL\_FUNCTION\_SIGNON\_INCOMPL
-   Cause: RFC from external program does not have a valid user name
    Runtime error: CALL\_FUNCTION\_SIGNON\_INVALID
-   Cause: Logon attempt to target system without valid user name.
    Runtime error: CALL\_FUNCTION\_SIGNON\_REJECTED
    
    The error code may have any of the following meanings:
    1) Wrong password or invalid user name
    2) User locked
    3) Too many login attempts
    4) Error in the authorization buffer (internal error)
    5) No external user check
    6) Invalid user type
    7) Validity period of the user exceeded
    
-   Cause: No authorization to log on as trusted system.
    Runtime error: CALL\_FUNCTION\_SINGLE\_LOGIN\_REJ
    
    The error code may have any of the following meanings:
    0) Incorrect logon data for a valid security ID.
    1) Calling system is not a Trusted System or security ID is invalid.
    2) Either user does not have RFC authorization (authorization object S\_RFCACL), or a logon was performed using one of the protected users 'DDIC' or 'SAP\*'.
    3) Time stamp of the logon data is invalid.
    
-   Cause: RFC without valid user name only allowed when calling a system function module. The meaning of the error codes is the same as for CALL\_FUNCTION\_SINGLE\_LOGIN\_REJ.
    Runtime error: CALL\_FUNCTION\_SYSCALL\_ONLY
-   Cause: Data error (information in internal table) in a remote function call.
    Runtime error: CALL\_FUNCTION\_TABINFO
-   Cause: No memory available for table to be imported.
    Runtime error: CALL\_FUNCTION\_TABLE\_NO\_MEMORY
-   Cause: For asynchronous RFC only: The task name is already being used.
    Runtime error: CALL\_FUNCTION\_TASK\_IN\_USE
-   Cause: For asynchronous RFC only: The specified task is already open.
    Runtime error: CALL\_FUNCTION\_TASK\_YET\_OPEN
-   Cause: No RFC authorization.
    Runtime error: CALL\_FUNCTION\_NO\_AUTH
-   Cause: No RFC authorization for user.
    Runtime error: RFC\_NO\_AUTHORITY
-   Cause: Destination BACK is not allowed in the current system.
    Runtime error: CALL\_FUNCTION\_BACK\_REJECTED
    Runtime error: CALL\_XMLRFC\_BACK\_REJECTED
-   Cause: Type conflict when passing a table.
    Runtime error: CALL\_FUNCTION\_CONFLICT\_TAB\_TYP
-   Cause: No memory available for creating a local internal table.
    Runtime error: CALL\_FUNCTION\_CREATE\_TABLE
-   Cause: Type conflict when passing a structure.
    Runtime error: CALL\_FUNCTION\_UC\_STRUCT
-   Cause: Invalid data type when passing parameters.
    Runtime error: CALL\_FUNCTION\_WRONG\_VALUE\_LENG
-   Cause: Invalid LEAVE statement on RFC server
    Runtime error: CALL\_FUNCTION\_ILLEGAL\_LEAVE
-   Cause: Incorrect length when passing a parameter of type decfloat16 or decfloat32.
    Runtime error: CALL\_FUNCTION\_ILL\_DECFLOAT\_LEN

Continue
[CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm)
[CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm)
[CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm)