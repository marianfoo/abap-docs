---
title: "CALL FUNCTION, IN BACKGROUND TASK"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm) Obsolete Syntax CALL FUNCTION func IN BACKGROUND TASK AS SEPARATE UNIT DESTINATION dest parameter_list(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_f
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm"
abapFile: "abapcall_function_background_task.htm"
keywords: ["delete", "do", "if", "try", "data", "abapcall", "function", "background", "task"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [Obsolete Transactional RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION, IN BACKGROUND TASK, ABAPCALL_FUNCTION_BACKGROUND_TASK, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION, IN BACKGROUND TASK

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm)

Obsolete Syntax

CALL FUNCTION func IN BACKGROUND TASK
                   *\[*AS SEPARATE UNIT*\]*
                   *\[*DESTINATION dest*\]*
[parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_para.htm).

Addition:

[... AS SEPARATE UNIT](#!ABAP_ONE_ADD@1@)

Effect

Transactional call (tRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). The addition DESTINATION can be used to specify a unique [destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_destination.htm) in dest. If the destination is not specified, the destination NONE is used implicitly. func and dest expect character-like data objects.

The transactional call registers the name of the called function, together with the destination and the actual parameters passed in [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_para.htm) for the current [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry") in the DDIC database tables ARFCSSTATE and ARFCSDATA of the current [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") under a unique transaction ID, which is abbreviated as TID, stored in a structure of type ARFCTID from the ABAP Dictionary, viewed using transaction SM58. After registration, the calling program is continued after the statement CALL FUNCTION.

When the [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) statement is executed, the function modules registered for the current SAP LUW are started in the order in which they were registered. The statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) deletes all previous registrations for the current SAP LUW.

If the specified destination is not available when COMMIT WORK is executed, an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") called RSARFCSE is started in [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry"). By default, this tries to start the function modules registered for an SAP LUW in their destination every 15 minutes and up to 30 times. These parameters can be changed using transaction SM59. If the destination does not become available within the specified time, it is recorded in the DDIC database table ARFCSDATA as the entry CPICERR. By default, this entry in database table ARFCSSTATE is deleted after eight days.

Hint

[background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") executed with the statement [CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm) is the enhanced successor technology of transactional RFC (tRFC) and makes this technology obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

More Information

For more information about tRFC, see the RFC documentation in the SAP Help Portal.

Addition   

... AS SEPARATE UNIT

Effect

When using the addition AS SEPARATE UNIT, the affected function module is executed in a separate [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry"), in which the global data of the function pool is not affected by previous calls. Each function module that is registered with the addition AS SEPARATE UNIT is given its own transaction ID. Without the addition AS SEPARATE UNIT, the usual [description](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_context.htm) applies to the [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry") of the called function modules. This means that, when using the same [RFC destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_dest_glosry.htm "Glossary Entry") for multiple calls of function modules of to the same function pool, the global data of this function pool is accessed collectively.

Hints

-   The function module ID\_OF\_BACKGROUNDTASK can be used after a transactional RFC to determine the transaction ID (TID) of the current [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry").
-   The transactional RFC (tRFC) is suitable for implementing LUWs in distributed environments (a typical application is ALE). It should be noted that, although the execution of the function modules within a transaction ID is specified, the order of the [LUWs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenluw_glosry.htm "Glossary Entry") on the RFC servers is not necessarily the same as the order of the SAP LUWs on the RFC client. To achieve the same serialization on RFC servers as well, the tRFC can be extended to [queued RFC (qRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenqrfc_glosry.htm "Glossary Entry"). For this, the function module TRFC\_SET\_QUEUE\_NAME can be called before a transactional RFC. For more information about qRFC, see the RFC documentation in the SAP Help Portal.
-   If [tRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrfc_2_glosry.htm "Glossary Entry") or [qRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenqrfc_glosry.htm "Glossary Entry") are registered in a [dialog module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_object_glosry.htm "Glossary Entry") and not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller either.
-   The new variant [CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm) ([bgRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbgrfc_glosry.htm "Glossary Entry")) includes and enhances the existing tRFC and qRFC variants. For this reason, it is strongly recommended that bgRFC is used instead of tRFC.
-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) must not be executed within a LUW. In addition, no implicit [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") can be triggered there.
-   When handling the registration entries in the DDIC database tables ARFCSSTATE and ARFCSDATA, it should be noted that they are subject to the regular administration rules for a [database LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). For example, the database LUW is ended by a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"), all registration entries of the current database LUW are deleted.