# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / Internal Statement for System Function Call

Included pages: 2


### abendata_communication_internal.htm

---
title: "Internal Statement for System Function Call"
description: |
  This statement is for internal use only. It must not be used in application programs. -   CALL cfunc(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall-.htm) CALL, System Function Call(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall-.htm)
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_communication_internal.htm"
abapFile: "abendata_communication_internal.htm"
keywords: ["do", "if", "data", "abendata", "communication", "internal"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Statement%20for%20System%20Function%20Call%2C%20ABENDATA_COMMUNICATION_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Internal Statement for System Function Call

This statement is for internal use only.
It must not be used in application programs.

-   [CALL cfunc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall-.htm)

Continue
[CALL, System Function Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall-.htm)


### abapcall-.htm

---
title: "CALL, System Function Call"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax CALL cfunc. Addition: ... ID id1 FIELD f1 ... ID idn FIELD fn(#!ABAP_ONE_ADD@1@) Effect Calls the system function cfunc. A flat character-like data object containing the name of the function can be specifi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall-.htm"
abapFile: "abapcall-.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "internal-table", "abapcall"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Internal Statement for System Function Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_communication_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%2C%20System%20Function%20Call%2C%20ABAPCALL-%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL, System Function Call

This statement is for internal use only.
It must not be used in application programs.

Syntax

CALL cfunc.

Addition:

[... ID id1 FIELD f1 ... ID idn FIELD fn](#!ABAP_ONE_ADD@1@)

Effect

Calls the system function cfunc. A flat character-like data object containing the name of the function can be specified for cfunc. The function must be entered in the file sapactab.h. Modifying a function or creating a new function requires the ABAP kernel to be compiled and linked again. This requires the C source code files.

System Fields

The CALL statement itself does not set any system fields. Whether system fields such as sy-subrc are set depends on the system function called.

Hints

-   If possible, [kernel methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkernel_methods.htm) should be used instead of system functions.
-   External programs should be called using the RFC mechanism: [CALL FUNCTION ... DESTINATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination.htm).
-   For some critical C functions, the system performs an authorization check automatically. If the user does not have the appropriate authorization, a runtime error occurs. The authorization can be checked using the function module AUTHORITY\_CHECK\_C\_FUNCTION.
-   The use of the system function SYSTEM, which can be used to execute operating system statements of the current [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry"), is not recommended and can be deactivated using the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system. If called, it then raises an uncatchable exception. If absolutely necessary, operating system statements can be called using the function modules in the [SXPG framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_commands_appl_sxpg.htm). Selected statements are addressed using logical command names created by the system administrator in the transaction SM69. See also [Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_commands_appl_depr.htm).

Security Hint

Calls of system functions whose names or parameters are passed to the program from outside present a serious security risk. The values from outside must be checked thoroughly before being used. See [System Command Injections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensys_comm_injections_scrty.htm).

Addition   

... ID id1 FIELD f1 ... ID idn FIELD fn

Effect

Passing fields to the called program by reference. ID id1 is used to specify the name of a formal parameter and FIELD f1 is used to specify the associated field from the ABAP program. If a formal parameter expects an internal table, the latter is passed in the form FIELD tab\[\].

Example

Query of the current database server.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No authorization to call this C function.
    Runtime error: CALL\_C\_FUNCTION\_NO\_AUTHORITY
-   Cause: The system function specified is unknown.
    Runtime error: CALL\_C\_FUNCTION\_NOT\_FOUND
-   Cause: The system function SYSTEM is disabled.
    Runtime error: CALL\_SYSTEM\_DISABLED
