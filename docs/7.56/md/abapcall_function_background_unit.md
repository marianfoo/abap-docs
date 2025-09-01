  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination-.htm) → 

CALL FUNCTION IN BACKGROUND UNIT

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_shortref.htm)

Syntax

CALL FUNCTION func IN BACKGROUND UNIT oref
[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_background_para.htm).

Effect

Background Remote Function Call (bgRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Here, oref is an [object reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") that must point to an object whose class implements the interface IF\_BGRFC\_UNIT.

The object contains all the information required for the Remote Function Call, including the destination, whether to execute a transactional or queued call and, if required, the quantity of queues. If the same object is used for multiple calls, all called function modules are executed in one unit. Conversely, multiple objects of this type can be used in parallel in one [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"), which enables parallel processing.

Parallel processing is executed if queues or destinations in the used objects have different names. If, in consecutive calls, different objects are used for which the same queues and destinations are specified, they are executed in the same queue one after the other.

Hint

[Background](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") RFC (bgRFC) is the enhanced successor technology of [transactional RFC (tRFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_background_task.htm) and makes this technology [obsolete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_obsolete.htm). It is strongly recommended to use bgRFC instead of tRFC.

More Information

For more information about bgRFC, see the documentation RFC in SAP Help Portal.

Hints

-   Before the introduction of bgRFC, the parallel processing of multiple function modules was only possible using the addition AS SEPARATE UNIT of the statement [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_background_task.htm). This same functionality is provided by the parallel use of multiple objects, which means this addition is no longer necessary.
-   If, within the same SAP LUW, bgRFC units and [updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry") are executed, the bgRFC units are dependent on the update. Only after the update has been processed can the associated bgRFC processed. When an incorrect update record is deleted, the bgRFC units linked to it are also deleted. The bgRFC can be decoupled from the update using the interface method IF\_BGRFC\_UNIT~SEPARATE\_FROM\_UPDATE\_TASK of the bgRFC object.
-   [bgRFCs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbgrfc_glosry.htm "Glossary Entry") registered in a [dialog module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_module_object_glosry.htm "Glossary Entry") that were not started there using COMMIT WORK are not executed by the COMMIT WORK of the caller either.
-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) must not be executed within a unit. In addition, no implicit [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") can be triggered there.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BGRFC\_INVALID\_UNIT

-   Cause: oref points to an invalid object.

Continue
[CALL FUNCTION IN BACKGROUND, parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_background_para.htm)