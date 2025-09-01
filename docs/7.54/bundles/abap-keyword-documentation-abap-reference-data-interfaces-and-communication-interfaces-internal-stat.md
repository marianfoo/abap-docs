# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / Internal Statement for System Function Call

Included pages: 2


### abendata_communication_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) → 

Internal Statement for System Function Call

This statement is for internal use only.
It must not be used in application programs.

-   [CALL cfunc](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall-.htm)

Continue
[CALL - System Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall-.htm)


### abapcall-.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [Internal Statement for System Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_communication_internal.htm) → 

CALL - System Function Call

This statement is for internal use only.
It must not be used in application programs.

Syntax

CALL cfunc.

Addition:

[... ID id1 FIELD f1 ... ID idn FIELD fn](#!ABAP_ONE_ADD@1@)

Effect

Calls the system function cfunc. A flat character-like data object containing the name of the function can be specified for cfunc. The function must be entered in the file sapactab.h. Modifying a function or creating a new function requires the ABAP kernel to be compiled again and linked. This requires the C source code files.

System Fields

The CALL statement itself does not set any system fields. Whether system fields such as sy-subrc are set depends on the system function called.

Notes

-   If possible, use [kernel methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkernel_methods.htm) instead of system functions.
    
-   External programs should be called using the RFC mechanism: [CALL FUNCTION ... DESTINATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination.htm).
    
-   With some critical C functions, the system performs an authorization check automatically. If the user does not have the appropriate authorization, a runtime error occurs. The authorization can be checked using the function module AUTHORITY\_CHECK\_C\_FUNCTION.
    
-   The use of the system function SYSTEM, which can be used to execute operating system statements of the current [host computer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"), is not recommended and can be deactivated using the [profile parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/call\_system. If called, it then raises a non-handleable exception. If absolutely necessary, operating system statements can be called using the function modules in the [SXPG framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_commands_appl_sxpg.htm). This addresses specific statements using logical command names created by the system administrator in the transaction SM68. See also [Unwanted Calls of Operating System Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_system_commands_appl_depr.htm).
    

Security Note

Calls of system functions whose names or parameters are injected into the program from outside present a serious security risk. The values from outside must be checked thoroughly before being used. See [System Command Injections](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensys_comm_injections_scrty.htm).

Addition

... ID id1 FIELD f1 ... ID idn FIELD fn

Effect

Passes fields to the called program using pass by reference. ID id1 is used to specify the name of a formal parameter and FIELD f1 is used to specify the associated field from the ABAP program. If a formal parameter expects an internal table, the latter is passed in the form FIELD tab\[\].

Example

Query of the current database server.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: No authorization to call this C function.
    Runtime error: CALL\_C\_FUNCTION\_NO\_AUTHORITY
    
-   Cause: The system function specified is unknown.
    Runtime error: CALL\_C\_FUNCTION\_NOT\_FOUND
    
-   Cause: The system function SYSTEM is disabled.
    Runtime error: CALL\_SYSTEM\_DISABLED
