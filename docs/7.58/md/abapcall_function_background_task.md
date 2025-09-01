  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [Obsolete Transactional RFC](javascript:call_link\('abenrfc_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%2C%20IN%20BACKGROUND%20TASK%2C%20ABAPCALL_FUNCTION_BACKGROUND_TASK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CALL FUNCTION, IN BACKGROUND TASK

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Obsolete Syntax

CALL FUNCTION func IN BACKGROUND TASK
                   *\[*AS SEPARATE UNIT*\]*
                   *\[*DESTINATION dest*\]*
                   [parameter\_list](javascript:call_link\('abapcall_function_background_para.htm'\)).

Addition:

[... AS SEPARATE UNIT](#!ABAP_ONE_ADD@1@)

Effect

Transactional call (tRFC) of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") specified in func using the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"). The addition DESTINATION can be used to specify a unique [destination](javascript:call_link\('abenrfc_destination.htm'\)) in dest. If the destination is not specified, the destination NONE is used implicitly. func and dest expect character-like data objects.

The transactional call registers the name of the called function, together with the destination and the actual parameters passed in [parameter\_list](javascript:call_link\('abapcall_function_background_para.htm'\)) for the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") in the DDIC database tables ARFCSSTATE and ARFCSDATA of the current [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") under a unique transaction ID, which is abbreviated as TID, stored in a structure of type ARFCTID from the ABAP Dictionary, viewed using transaction SM58. After registration, the calling program is continued after the statement CALL FUNCTION.

When the [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) statement is executed, the function modules registered for the current SAP LUW are started in the order in which they were registered. The statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) deletes all previous registrations for the current SAP LUW.

If the specified destination is not available when COMMIT WORK is executed, an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") called RSARFCSE is started in [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"). By default, this tries to start the function modules registered for an SAP LUW in their destination every 15 minutes and up to 30 times. These parameters can be changed using transaction SM59. If the destination does not become available within the specified time, it is recorded in the DDIC database table ARFCSDATA as the entry CPICERR. By default, this entry in database table ARFCSSTATE is deleted after eight days.

Hint

[background RFC (bgRFC)](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") executed with the statement [CALL FUNCTION IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) is the enhanced successor technology of transactional RFC (tRFC) and makes this technology obsolete. It is strongly recommended that bgRFC is used instead of tRFC.

More Information

For more information about tRFC, see the [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) documentation in the SAP Help Portal.

Addition   

... AS SEPARATE UNIT

Effect

When using the addition AS SEPARATE UNIT, the affected function module is executed in a separate [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry"), in which the global data of the function pool is not affected by previous calls. Each function module that is registered with the addition AS SEPARATE UNIT is given its own transaction ID. Without the addition AS SEPARATE UNIT, the usual [description](javascript:call_link\('abenrfc_context.htm'\)) applies to the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") of the called function modules. This means that, when using the same [RFC destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry") for multiple calls of function modules of to the same function pool, the global data of this function pool is accessed collectively.

Hints

-   The function module ID\_OF\_BACKGROUNDTASK can be used after a transactional RFC to determine the transaction ID (TID) of the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").
-   The transactional RFC (tRFC) is suitable for implementing LUWs in distributed environments (a typical application is ALE). It should be noted that, although the execution of the function modules within a transaction ID is specified, the order of the [LUWs](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") on the RFC servers is not necessarily the same as the order of the SAP LUWs on the RFC client. To achieve the same serialization on RFC servers as well, the tRFC can be extended to [queued RFC (qRFC)](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry"). For this, the function module TRFC\_SET\_QUEUE\_NAME can be called before a transactional RFC. For more information about qRFC, see the [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) documentation in the SAP Help Portal.
-   If [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") or [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry") are registered in a [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") and not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller either.
-   The new variant [CALL FUNCTION IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) ([bgRFC](javascript:call_link\('abenbgrfc_glosry.htm'\) "Glossary Entry")) includes and enhances the existing tRFC and qRFC variants. For this reason, it is strongly recommended that bgRFC is used instead of tRFC.
-   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) must not be executed within a LUW. In addition, no implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") can be triggered there.
-   When handling the registration entries in the DDIC database tables ARFCSSTATE and ARFCSDATA, it should be noted that they are subject to the regular administration rules for a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). For example, the database LUW is ended by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"), all registration entries of the current database LUW are deleted.