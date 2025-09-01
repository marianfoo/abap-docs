  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextern_obsolete.htm) →  [Obsolete Transactional RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_obsolete.htm) → 

CALL FUNCTION - IN BACKGROUND TASK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_shortref.htm)

Obsolete Syntax

CALL FUNCTION func IN BACKGROUND TASK
                   *\[*AS SEPARATE UNIT*\]*
                   *\[*DESTINATION dest*\]*
                   [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_para.htm).

Addition:

[... AS SEPARATE UNIT](#!ABAP_ONE_ADD@1@)

Effect

Transactional call (tRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Using the addition DESTINATION, a unique [destination](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_destination.htm) can be specified in dest. If the destination is not specified, the destination "NONE" is used implicitly. func and dest expect character-like data objects.

The transactional call registers the name of the called function, together with the destination and the actual parameters passed in [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_para.htm) for the current [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry") in the database tables ARFCSSTATE and ARFCSDATA of the current [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") under a unique transaction ID (abbreviated as TID, stored in a structure of type ARFCTID from ABAP Dictionary, viewed using transaction SM58). After registration, the calling program is continued after the statement CALL FUNCTION.

When the [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) statement is executed, the function modules registered for the current SAP LUW are started in the order in which they were registered. The statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm) deletes all previous registrations for the current SAP LUW.

If the specified destination is not available when COMMIT WORK is executed, an [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") called RSARFCSE is started in [background processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbackround_processing_glosry.htm "Glossary Entry"). By default, this tries to start the function modules registered for a SAP LUW in their destination every 15 minutes and up to 30 times. Changes can be made to these parameters using transaction SM59. If the destination does not become available within the defined time, it is recorded in the database table ARFCSDATA as the entry "CPICERR". By default, this entry in database table ARFCSSTATE is deleted after eight days.

Note

[background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") executed with the statement [CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm) is the enhanced successor technology of transactional RFC (tRFC) and makes this technology obsolete. It is strongly recommended to use bgRFC instead of tRFC.

More Information

More information about tRFC can be found in the RFC documentation on [SAP Help Portal](http://help.sap.com).

Addition

... AS SEPARATE UNIT

Effect

When using the addition AS SEPARATE UNIT, the relevant function module is executed in a separate [RFC session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_session_glosry.htm "Glossary Entry"), in which the global data of the function group is not influenced by previous calls. Each function module that is registered with the addition AS SEPARATE UNIT is given a separate transaction ID. Without the addition AS SEPARATE UNIT, the usual [description](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_context.htm) applies to the [RFC session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_session_glosry.htm "Glossary Entry") of the called function modules. This means that, when using the same [RFC destination](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendestination_glosry.htm "Glossary Entry") for multiple calls of function modules belonging to the same function group, the global data of this function group is accessed collectively.

Notes

-   The function module ID\_OF\_BACKGROUNDTASK can be used after a transactional RFC to determine the transactional ID (TID) of the current [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry").
    
-   The transactional RFC (tRFC) is suitable for realizing LUWs in distributed environments (a typical application is ALE). Note that, although the execution of the function modules within a transaction ID is specified, the order of the [LUWs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenluw_glosry.htm "Glossary Entry") on the RFC servers is not necessarily the same as the order of the SAP LUWs on the RFC client. To ensure the same serialization is also used on RFC servers, the tRFC can be enhanced as ([queued RFC (qRFC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry")). For this, the function module TRFC\_SET\_QUEUE\_NAME can be called before a transactional RFC. More information about qRFC can be found in the RFC documentation on [SAP Help Portal](http://help.sap.com).
    
-   If [tRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_2_glosry.htm "Glossary Entry") or [qRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry") are registered in a [dialog module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_module_object_glosry.htm "Glossary Entry") and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.
    
-   The new variant [CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm) ([bgRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbgrfc_glosry.htm "Glossary Entry")) includes and enhances the existing tRFC and qRFC variants. For this reason, we strongly recommend using bgRFC instead of tRFC.
    
-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm) must not be executed within a LUW. In addition, no implicit [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") can be triggered there.
    
-   When handling the registration entries in the database tables ARFCSSTATE and ARFCSDATA, note that they are subject to the regular administration rules for a [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). For example, the database LUW is ended by a [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"), all registration entries of the current database LUW are deleted.