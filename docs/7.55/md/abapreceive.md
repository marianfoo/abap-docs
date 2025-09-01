---
title: "RECEIVE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_shortref.htm) Syntax RECEIVE RESULTS FROM FUNCTION func KEEPING TASK parameter_list(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_para.htm). Addition: ... KEEPING TASK(#!ABA
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive.htm"
abapFile: "abapreceive.htm"
keywords: ["update", "do", "if", "try", "data", "abapreceive"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_starting.htm) → 

RECEIVE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_shortref.htm)

Syntax

RECEIVE RESULTS FROM FUNCTION func
                *\[*KEEPING TASK*\]*
                [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_para.htm).

Addition:

[... KEEPING TASK](#!ABAP_ONE_ADD@1@)

Effect

This statement must be used in a callback routine specified in an [asynchronous RFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_starting.htm) to receive output parameters of an asynchronously called function func in the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_para.htm) and to handle exceptions.

Hints

-   Callback routines without a RECEIVE statement are possible in the syntax, but are to be avoided and viewed as programming errors. Callback routines without a RECEIVE statement behave implicitly in the same way as when the addition KEEPING TASK is specified for RECEIVE.

-   Before the statement RECEIVE is executed in a callback routine, the current work process is interrupted so that the data can be received. If this has not already been done by another action, such as by using the statement [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_arfc.htm), the callback routine is executed after an implicit switch of the work process. A [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed, except during the [update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_glosry.htm "Glossary Entry").
    

Addition

... KEEPING TASK

Effect

The addition KEEPING TASK retains the asynchronous RFC connection, and therefore also the [RFC session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_session_glosry.htm "Glossary Entry") of the called function module. When a new call is made with the same task ID, the same global data of the function pool is addressed. A destination specified directly using DESTINATION can be specified again, but does not have to be. DESTINATION IN GROUP cannot be used to specify a group if a new call is performed. Without the addition KEEPING TASK, an asynchronous RFC connection is ended after the remote function is executed or after the results are applied.

Hint

The addition KEEPING TASK should be used only if the RFC session of the called function module is needed for further function calls.

Continue
[RECEIVE, parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreceive_para.htm)