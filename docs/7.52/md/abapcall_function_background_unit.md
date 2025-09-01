  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) → 

CALL FUNCTION - IN BACKGROUND UNIT

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION func IN BACKGROUND UNIT oref
                   [parameter\_list](javascript:call_link\('abapcall_function_background_para.htm'\)).

Effect

Background Remote Function Call (bgRFC) of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") specified in func using the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"). Here, oref is an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry") pointing to an object whose class implements the interface IF\_BGRFC\_UNIT.

The object contains all the information required for the remote function call, including the destination, whether to execute a transactional or queued call and, if required, the quantity of queues. If the same object is used for multiple calls, all called function modules are executed in one unit. Conversely, multiple objects of this type can be used in parallel in one [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), which enables parallel processing.

Parallel processing is executed if queues or destinations in the used objects have different names. If, in successive calls, different objects are used for which the same queues and destinations are specified, they are processed in the same queue one after the other.

Note

[Background RFC (bgRFC)](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") is the enhanced successor technology of [transactional RFC (tRFC)](javascript:call_link\('abapcall_function_background_task.htm'\)) and makes this technology [obsolete](javascript:call_link\('abenrfc_obsolete.htm'\)). It is strongly recommended that bgRFC is used instead of tRFC.

More Information

For more detailed information about bgRFC, see the RFC documentation on [SAP Help Portal](http://help.sap.com).

Notes

-   Before the introduction of bgRFC, the parallel processing of multiple function modules was only possible using the addition AS SEPARATE UNIT of the statement [CALL FUNCTION IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\)). This same function is provided by the parallel use of multiple objects, which means this addition is no longer necessary.
    
-   If, within the same SAP LUW, bgRFC units and also [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") are executed, the bgRFC units are dependent on the update. Only after the update has been processed can the associated bgRFC also be processed. When an incorrect update record is deleted, the corresponding bgRFC units are also deleted. The linkage of bgRFC with the update can be removed using the interface method IF\_BGRFC\_UNIT~SEPARATE\_FROM\_UPDATE\_TASK of the bgRFC object.
    
-   [bgRFCs](javascript:call_link\('abenbgrfc_glosry.htm'\) "Glossary Entry") registered in a [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") that were not started there using COMMIT WORK are not executed by the COMMIT WORK of the caller either.
    
-   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) may not be executed in a unit. In addition, no implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") can be triggered there.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_BGRFC\_INVALID\_UNIT

-   Cause: oref points to an invalid object.
    

Continue
[CALL FUNCTION - IN BACKGROUND parameter\_list](javascript:call_link\('abapcall_function_background_para.htm'\))