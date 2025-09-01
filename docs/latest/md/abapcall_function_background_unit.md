---
title: "CALL FUNCTION IN BACKGROUND UNIT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_shortref.htm) Syntax CALL FUNCTION func IN BACKGROUND UNIT oref parameter_list(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_para.htm). Effect Backgro
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_unit.htm"
abapFile: "abapcall_function_background_unit.htm"
keywords: ["update", "delete", "do", "if", "try", "catch", "method", "class", "data", "abapcall", "function", "background", "unit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination-.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%20IN%20BACKGROUND%20UNIT%2C%20ABAPCALL_FUNCTION_BACKGROUND_UNIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

CALL FUNCTION IN BACKGROUND UNIT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_shortref.htm)

Syntax

CALL FUNCTION func IN BACKGROUND UNIT oref
              [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_para.htm).

Effect

Background Remote Function Call (bgRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Here, oref is an [object reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") that must point to an object whose class implements the interface IF\_BGRFC\_UNIT.

The object contains all the information required for the Remote Function Call, including the destination, whether to execute a transactional or queued call and, if required, the quantity of queues. If the same object is used for multiple calls, all called function modules are executed in one unit. Conversely, multiple objects of this type can be used in parallel in one [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which enables parallel processing.

Parallel processing is executed if queues or destinations in the used objects have different names. If, in consecutive calls, different objects are used for which the same queues and destinations are specified, they are executed in the same queue one after the other.

Hint

[Background](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") RFC (bgRFC) is the enhanced successor technology of [transactional RFC (tRFC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_task.htm) and makes this technology [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_obsolete.htm). It is strongly recommended that bgRFC is used instead of tRFC. The [background Processing Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbackround_processing_fw_glosry.htm "Glossary Entry") (bgPF) encapsulates bgRFC to execute time-consuming methods asynchronously.

More Information

For more information about bgRFC, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

Hints

-   Before the introduction of bgRFC, the parallel processing of multiple function modules was only possible using the addition AS SEPARATE UNIT of the statement [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_task.htm). This same functionality is provided by the parallel use of multiple objects, which means this addition is no longer necessary.
-   If, within the same SAP LUW, bgRFC units and [updates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry") are executed, the bgRFC units are dependent on the update. Only after the update has been processed can the associated bgRFC be started. When an incorrect update record is deleted, the bgRFC units linked to it are also deleted. The bgRFC can be decoupled from the update using the interface method IF\_BGRFC\_UNIT~SEPARATE\_FROM\_UPDATE\_TASK of the bgRFC object.
-   [bgRFCs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbgrfc_glosry.htm "Glossary Entry") registered in a [dialog module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_module_object_glosry.htm "Glossary Entry") that are not started there with COMMIT WORK are not started by a COMMIT WORK statement executed by the caller of the dialog module either.
-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback.htm) must not be executed within a unit. In addition, no implicit [database commit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_commit_glosry.htm "Glossary Entry") can be triggered there.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BGRFC\_INVALID\_UNIT

-   Cause: oref points to an invalid object.

Continue
[CALL FUNCTION IN BACKGROUND, parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_background_para.htm)