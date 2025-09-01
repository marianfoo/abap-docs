# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Data and Communication Interfaces

Included pages: 17


### abenextern_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Data and Communication Interfaces, ABENEXTERN_OBSOLETE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Data and Communication Interfaces

-   [Transactional RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_obsolete.htm)
-   [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_obsolete.htm)
-   [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm)
-   [ABAP and JavaScript](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_java_script.htm)

Continue
[Obsolete Transactional RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_obsolete.htm)
[Obsolete Wait](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwait_obsolete.htm)
[Obsolete XML Binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_obsolete.htm)
[CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm)
[ABAP and JavaScript](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_java_script.htm)


### abenrfc_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Transactional RFC, ABENRFC_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Obsolete Transactional RFC

-   [CALL FUNCTION - IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm)

Hint

[Transactional remote function call (tRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrfc_1_glosry.htm "Glossary Entry") and its enhancement, [queued remote function call (qRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenqueued_remote_function_glosry.htm "Glossary Entry"), have been replaced by [background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbg_remote_function_glosry.htm "Glossary Entry"). It is strongly recommended that bgRFC is used instead of tRFC.

Continue
[CALL FUNCTION, IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm)


### abapcall_function_background_task.htm

  

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


### abenrfc_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Transactional RFC, ABENRFC_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Obsolete Transactional RFC

-   [CALL FUNCTION - IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm)

Hint

[Transactional remote function call (tRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrfc_1_glosry.htm "Glossary Entry") and its enhancement, [queued remote function call (qRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenqueued_remote_function_glosry.htm "Glossary Entry"), have been replaced by [background RFC (bgRFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbg_remote_function_glosry.htm "Glossary Entry"). It is strongly recommended that bgRFC is used instead of tRFC.

Continue
[CALL FUNCTION, IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_task.htm)


### abenwait_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Wait, ABENWAIT_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

Obsolete Wait

-   [WAIT UNTIL - Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_obsolete.htm)

Continue
[WAIT UNTIL, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_obsolete.htm)


### abapwait_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [Obsolete Wait](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwait_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WAIT UNTIL, Short Form, ABAPWAIT_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

WAIT UNTIL, Short Form

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_shortref.htm)

Obsolete Syntax

WAIT UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) *\[*UP TO sec SECONDS*\]*.

Effect

This statement works in the same way as

[WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_arfc.htm) UNTIL logexp *\[*UP TO sec SECONDS*\]*.

Hint

The complete form using FOR ASYNCHRONOUS TASKS should always be used. This addition expresses that an [asynchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is expected and distinguishes the statement from [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_amc.htm) or [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_apc.htm), which are waiting for messages from [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") or [ABAP Push Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_push_channels_glosry.htm "Glossary Entry").


### abenwait_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Wait, ABENWAIT_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

Obsolete Wait

-   [WAIT UNTIL - Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_obsolete.htm)

Continue
[WAIT UNTIL, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_obsolete.htm)


### abenabap_xml_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete XML Binding, ABENABAP_XML_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

Obsolete XML Binding

-   [CALL TRANSFORMATION - OBJECTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_objects.htm)

Continue
[CALL TRANSFORMATION, OBJECTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_objects.htm)


### abapcall_transformation_objects.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [Obsolete XML Binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSFORMATION, OBJECTS, ABAPCALL_TRANSFORMATION_OBJECTS, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL TRANSFORMATION, OBJECTS

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_shortref.htm)

Obsolete Syntax

... OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*(otab) ...

Effect

This addition of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) can be used to pass object references e1 e2 ... to an XSL transformation as external objects o1 o2 ... to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table otab with the type abap\_trans\_objbind\_tab from the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP.

Hint

The addition OBJECTS is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm).


### abenabap_xml_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete XML Binding, ABENABAP_XML_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

Obsolete XML Binding

-   [CALL TRANSFORMATION - OBJECTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_objects.htm)

Continue
[CALL TRANSFORMATION, OBJECTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_objects.htm)


### abenabap_cpic.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CPI-C Interface, ABENABAP_CPIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

CPI-C Interface

This section describes cross-system communications between two ABAP programs as realized using the [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) statement.

Hint

SDK for CPI-C is no longer supported. The CPI-C libraries and the documentation for programming are no longer delivered. For new programs, SDK and the libraries for [RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_glosry.htm "Glossary Entry") must be used. The API for CPI-C was retained to support existing programs and for internal technical purposes.

Continue
[COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm)


### abapcommunication.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, ABAPCOMMUNICATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMUNICATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

COMMUNICATION [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id *\[* [cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)*\]*.

Effect

This statement enables cross-system communication between two ABAP programs, or between an ABAP program and a program written in another programming language. The entire communication process takes place in individual communication steps, for which the COMMUNICATION statement must be executed repeatedly with the corresponding additions [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm). For both partner programs, communication is based on the [CPI-C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencpi-c_glosry.htm "Glossary Entry") interface, which has been defined as a communication standard by IBM as a part of the SAA standard. This interface provides the following functions in the form of the CPI-C starter set:

-   Establishing, accepting, and closing a connection
-   Sending and receiving data

Coordination of the individual communication steps, recording any errors that occur in the DDIC database table TCPIC and, if necessary, data conversion, take place in the individual programs themselves. The parameters that determined the physical partner system for a connection are administrated in the DDIC database table TXCOM.

Once the connection is initialized, the system writes an eight-digit connection number in the data object id. This number can be used to identify individual connections. As standard, 2\*\*16 connections are possible for each calling program. id expects only [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data types, with a minimum length of eight digits.

After initialization, the connection must be established. Then, in the first connection step, all the necessary administration data is sent to the partner system. The data sent in this connection step must have a specific structure and must be available in an [EBCDIC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenebcdic_glosry.htm "Glossary Entry") format. The example below shows how a specifically structured structure can be converted into the EBCDIC format. The subsequent response also exists in EBCDIC format. After this initial connection has been established, data can be transferred without the need for further conversion.

During communication, the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in the called program must not be changed. Screen output is ignored or, in the case of list output to the SAP spool system, is redirected if the statement NEW-PAGE was entered beforehand. [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of types I, S, and W are ignored, while types A and E cause the program to terminate.

Hints

-   The statement COMMUNICATION is not supported in classes and should no longer occur in programs, since support for the direct programming of the CPI-C interface has largely been discontinued. Instead, only the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry") is to be used for communication between programs. However, the function of the statement is maintained for supporting existing programs and for internal purposes.
-   The EBCDIC format is used in the first connection step because the CPI-C interface was mainly used for connections to R/2 systems.

Example

In the simplest case, an ABAP program calls a subroutine in an ABAP program of another [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). To enable this, the calling program must log on to the other system by specifying the type of CPI-C service, the logon data, the programs and subroutines, and the type of error handling. The registration takes place by sending a specific structure to the other system in EBCDIC format.

The following example shows a schematic representation of the communication between two ABAP programs P1 and P2 without querying return values. The calling program P1 first creates the connection and sends a field connect\_xstr that contains the content of the connect structure converted to EBCDIC format with the necessary data. After the connection is confirmed by P2, P1 sends the actual, unconverted application data in the buffer b. When this data has been received, P2 sends a confirmation to P1. The connection from P1 is then closed again and the content of the buffer (Answer) is produced as output.

PROGRAM p1.
DATA: d    TYPE c LENGTH 8,
      id   TYPE c LENGTH 8,
      b TYPE c LENGTH 10,
      len  TYPE x LENGTH 4,
      dat  TYPE xstring,
      stat TYPE xstring,
      BEGIN OF connect,
        header   TYPE c LENGTH 12 VALUE 'CONNCPIC1',
        client   TYPE c LENGTH  3 VALUE '001',
        user     TYPE c LENGTH 12 VALUE 'BONDJ',
        password TYPE c LENGTH  8 VALUE '007',
        language TYPE c LENGTH  1 VALUE 'E',
        corr     TYPE c LENGTH  1 VALUE ' ',
        program  TYPE c LENGTH  8 VALUE 'P2',
        routine  TYPE c LENGTH 30 VALUE 'CPIC\_START',
      END OF connect,
      connect\_str  TYPE c LENGTH 75,
      connect\_xstr TYPE x LENGTH 75,
      connect\_ret  TYPE x LENGTH 75,
      converter TYPE REF TO cl\_abap\_conv\_out\_ce.
connect\_str = connect.
converter = cl\_abap\_conv\_out\_ce=>create( encoding = '0101' ).
converter->write( data = connect\_str ).
connect\_xstr = converter->get\_buffer( ).
d = ...
COMMUNICATION INIT
  DESTINATION d
  ID id.
COMMUNICATION ALLOCATE
  ID id.
COMMUNICATION SEND
  BUFFER connect\_xstr
  ID id.
                        PROGRAM p2.
                        DATA:
                          id   TYPE c LENGTH 8,
                          b TYPE c LENGTH 10,
                          len  TYPE x LENGTH 4,
                          dat  TYPE xstring,
                          stat TYPE xstring.
                        FORM cpic\_start.
                          COMMUNICATION ACCEPT
                            ID id.
COMMUNICATION RECEIVE
  BUFFER     connect\_ret
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID id.
b = 'Request'.
COMMUNICATION SEND
  BUFFER b
  ID id.
                          COMMUNICATION RECEIVE
                            BUFFER     b
                            RECEIVED   len
                            DATAINFO   dat
                            STATUSINFO stat
                            ID         id.
                          IF b = 'Request'.
                            b = 'Answer'.
                          ENDIF.
                          COMMUNICATION SEND
                            BUFFER     b
                            ID         id.
                        ENDFORM.
CLEAR b.
COMMUNICATION RECEIVE
  BUFFER     b
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID         id.
WRITE / b.
COMMUNICATION DEALLOCATE ID id.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No authorization to accept a CPIC connection.
    Runtime error: COMMUNICATION\_ACCEPT\_NO\_AUTH
-   Cause: No authorization to open a CPIC connection.
    Runtime error: COMMUNICATION\_INIT\_NO\_AUTH

Continue
[COMMUNICATION, comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm)
[COMMUNICATION, cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)


### abapcommunication_comstep.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) →  [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, comstep, ABAPCOMMUNICATION_COMSTEP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

COMMUNICATION, comstep

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

... *{*INIT DESTINATION dest*}*
  *|* ALLOCATE
  *|* ACCEPT
  *|* *{*SEND BUFFER buf*}*
  *|* *{*RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat*}*
  *|* DEALLOCATE ...

Alternatives:

[1\. ... INIT DESTINATION dest](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ALLOCATE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ACCEPT](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... SEND BUFFER buf](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... DEALLOCATE](#!ABAP_ALTERNATIVE_6@6@)

Effect

There are different alternatives for specifying comstep, each of which is responsible for a connection step.

Alternative 1   

... INIT DESTINATION  dest

Effect

The connection between the programs initialized by specifying dest. dest expects a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object of the length 8 that, when executing the statement, contains a value from the column SDEST of the DDIC database table TXCOM.

During initialization, the system automatically runs an authorization check on the [authorization object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_CPIC. The authorization can be checked before the connection is established using the function module AUTHORITY\_CHECK\_CPIC.

Alternative 2   

... ALLOCATE

Effect

Establishes a connection to the partner identified in the previous addition DESTINATION. At the same time, a start request is passed to the partner, if it is a program.

Alternative 3   

... ACCEPT

Effect

This addition can be used to accept the established connection in a called partner program. After authentication, the called program is in receive status.

Alternative 4   

... SEND BUFFER buf

Effect

Sends data to the partner program. A data object can be specified for buf, for which all [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. If the statement COMMUNICATION is executed, the content of buf is passed to the partner program.

Hints

-   A connection step opened with SEND must be followed by a connection step opened with RECEIVE.
-   Information loss, for example due to different number formats of the communication partners, is avoided if only character-like types are used for transferring the data. Furthermore, the data is only transferred completely if the sending and receiving buffers have the same structure and length.

Alternative 5   

... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat

Effect

Receives data from the partner program. A data object can be specified for buf, for which all flat elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. When the statement COMMUNICATION is executed, the content of buf is taken from the partner program.

After the execution of the statement, the data object dat contains information about whether the data is sent completely, and the content of the data object stat indicates whether the current program is in send or receive mode. Only byte-like data objects are allowed for dat and stat, the length should not be less than 4 bytes. The encoding for the values in dat and stat can be taken from the [include program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") RSCPICDF. Here, data objects with a descriptive name and [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") are declared which can be compared with dat and stat.

Hint

A connection step opened with RECEIVE must be followed by a connection step opened with SEND.

Alternative 6   

... DEALLOCATE

Effect

The connection is closed, and all memory areas are released.


### abapcommunication_options.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) →  [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, cpic_options, ABAPCOMMUNICATION_OPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

COMMUNICATION, cpic\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

... *\[*RETURNCODE rc*\]*
    *\[*LENGTH leng*\]*
    *\[*RECEIVED rec*\]*
    *\[*HOLD*\]*.

Additions:

[1\. ... RETURNCODE  rc](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH leng](#!ABAP_ADDITION_2@2@)
[3\. ... RECEIVED rec](#!ABAP_ADDITION_3@3@)
[4\. ... HOLD](#!ABAP_ADDITION_4@4@)

Effect

Further additions for the statement COMMUNICATION.

Addition 1   

... RETURNCODE  rc

Effect

This addition can be specified for any communication steps and receives the return code in rc. rc expects the data type i. The meaning of the return codes is encoded in the [include program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") RSCPICDF. Here, data objects with descriptive names and [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") are declared and can be compared with rc. The following table contains a list of possible return values.

rc

Data Object from RSCPICDF

0

cm\_ok

1

cm\_allocate\_failure\_no\_retry

2

cm\_allocate\_failure\_retry

3

cm\_conversation\_type\_mismatch

6

cm\_security\_not\_valid

8

cm\_sync\_lvl\_not\_supported\_pgm

9

cm\_tpn\_not\_recognized

10

cm\_tp\_not\_available\_no\_retry

11

cm\_tp\_not\_available\_retry

12

cm\_deallocated\_abend

13

cm\_deallocated\_normal

14

cm\_parameter\_error

15

cm\_product\_specific\_error

16

cm\_program\_error\_no\_trunc

18

cm\_program\_error\_no\_trunc

19

cm\_program\_error\_trunc

26

cm\_resource\_failure\_no\_retry

27

cm\_resource\_failure\_retry

28

cm\_unsuccessful

The same return codes are also written to the system field sy-subrc.

Addition 2   

... LENGTH leng

Effect

This addition can only be specified in the communication steps SEND and RECEIVE. As a result, the data buffer buffer is only sent or received in the length leng. The length leng expects a data object of the data type i.

Addition 3   

... RECEIVED rec

Effect

This addition can only be specified for the communication step RECEIVE. The data object rec contains the number of bytes received by the partner program. Only byte-like data objects of length 4 are allowed for rec.

Addition 4   

... HOLD

Effect

This addition can only be specified for the communication step RECEIVE. It prevents a change of the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") when receiving data to avoid the possible loss of the [database cursor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). In this case, the current work process waits until all data has been received.


### abapcommunication.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, ABAPCOMMUNICATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMUNICATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

COMMUNICATION [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id *\[* [cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)*\]*.

Effect

This statement enables cross-system communication between two ABAP programs, or between an ABAP program and a program written in another programming language. The entire communication process takes place in individual communication steps, for which the COMMUNICATION statement must be executed repeatedly with the corresponding additions [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm). For both partner programs, communication is based on the [CPI-C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencpi-c_glosry.htm "Glossary Entry") interface, which has been defined as a communication standard by IBM as a part of the SAA standard. This interface provides the following functions in the form of the CPI-C starter set:

-   Establishing, accepting, and closing a connection
-   Sending and receiving data

Coordination of the individual communication steps, recording any errors that occur in the DDIC database table TCPIC and, if necessary, data conversion, take place in the individual programs themselves. The parameters that determined the physical partner system for a connection are administrated in the DDIC database table TXCOM.

Once the connection is initialized, the system writes an eight-digit connection number in the data object id. This number can be used to identify individual connections. As standard, 2\*\*16 connections are possible for each calling program. id expects only [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data types, with a minimum length of eight digits.

After initialization, the connection must be established. Then, in the first connection step, all the necessary administration data is sent to the partner system. The data sent in this connection step must have a specific structure and must be available in an [EBCDIC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenebcdic_glosry.htm "Glossary Entry") format. The example below shows how a specifically structured structure can be converted into the EBCDIC format. The subsequent response also exists in EBCDIC format. After this initial connection has been established, data can be transferred without the need for further conversion.

During communication, the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in the called program must not be changed. Screen output is ignored or, in the case of list output to the SAP spool system, is redirected if the statement NEW-PAGE was entered beforehand. [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of types I, S, and W are ignored, while types A and E cause the program to terminate.

Hints

-   The statement COMMUNICATION is not supported in classes and should no longer occur in programs, since support for the direct programming of the CPI-C interface has largely been discontinued. Instead, only the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry") is to be used for communication between programs. However, the function of the statement is maintained for supporting existing programs and for internal purposes.
-   The EBCDIC format is used in the first connection step because the CPI-C interface was mainly used for connections to R/2 systems.

Example

In the simplest case, an ABAP program calls a subroutine in an ABAP program of another [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). To enable this, the calling program must log on to the other system by specifying the type of CPI-C service, the logon data, the programs and subroutines, and the type of error handling. The registration takes place by sending a specific structure to the other system in EBCDIC format.

The following example shows a schematic representation of the communication between two ABAP programs P1 and P2 without querying return values. The calling program P1 first creates the connection and sends a field connect\_xstr that contains the content of the connect structure converted to EBCDIC format with the necessary data. After the connection is confirmed by P2, P1 sends the actual, unconverted application data in the buffer b. When this data has been received, P2 sends a confirmation to P1. The connection from P1 is then closed again and the content of the buffer (Answer) is produced as output.

PROGRAM p1.
DATA: d    TYPE c LENGTH 8,
      id   TYPE c LENGTH 8,
      b TYPE c LENGTH 10,
      len  TYPE x LENGTH 4,
      dat  TYPE xstring,
      stat TYPE xstring,
      BEGIN OF connect,
        header   TYPE c LENGTH 12 VALUE 'CONNCPIC1',
        client   TYPE c LENGTH  3 VALUE '001',
        user     TYPE c LENGTH 12 VALUE 'BONDJ',
        password TYPE c LENGTH  8 VALUE '007',
        language TYPE c LENGTH  1 VALUE 'E',
        corr     TYPE c LENGTH  1 VALUE ' ',
        program  TYPE c LENGTH  8 VALUE 'P2',
        routine  TYPE c LENGTH 30 VALUE 'CPIC\_START',
      END OF connect,
      connect\_str  TYPE c LENGTH 75,
      connect\_xstr TYPE x LENGTH 75,
      connect\_ret  TYPE x LENGTH 75,
      converter TYPE REF TO cl\_abap\_conv\_out\_ce.
connect\_str = connect.
converter = cl\_abap\_conv\_out\_ce=>create( encoding = '0101' ).
converter->write( data = connect\_str ).
connect\_xstr = converter->get\_buffer( ).
d = ...
COMMUNICATION INIT
  DESTINATION d
  ID id.
COMMUNICATION ALLOCATE
  ID id.
COMMUNICATION SEND
  BUFFER connect\_xstr
  ID id.
                        PROGRAM p2.
                        DATA:
                          id   TYPE c LENGTH 8,
                          b TYPE c LENGTH 10,
                          len  TYPE x LENGTH 4,
                          dat  TYPE xstring,
                          stat TYPE xstring.
                        FORM cpic\_start.
                          COMMUNICATION ACCEPT
                            ID id.
COMMUNICATION RECEIVE
  BUFFER     connect\_ret
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID id.
b = 'Request'.
COMMUNICATION SEND
  BUFFER b
  ID id.
                          COMMUNICATION RECEIVE
                            BUFFER     b
                            RECEIVED   len
                            DATAINFO   dat
                            STATUSINFO stat
                            ID         id.
                          IF b = 'Request'.
                            b = 'Answer'.
                          ENDIF.
                          COMMUNICATION SEND
                            BUFFER     b
                            ID         id.
                        ENDFORM.
CLEAR b.
COMMUNICATION RECEIVE
  BUFFER     b
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID         id.
WRITE / b.
COMMUNICATION DEALLOCATE ID id.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No authorization to accept a CPIC connection.
    Runtime error: COMMUNICATION\_ACCEPT\_NO\_AUTH
-   Cause: No authorization to open a CPIC connection.
    Runtime error: COMMUNICATION\_INIT\_NO\_AUTH

Continue
[COMMUNICATION, comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm)
[COMMUNICATION, cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)


### abenabap_cpic.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CPI-C Interface, ABENABAP_CPIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

CPI-C Interface

This section describes cross-system communications between two ABAP programs as realized using the [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) statement.

Hint

SDK for CPI-C is no longer supported. The CPI-C libraries and the documentation for programming are no longer delivered. For new programs, SDK and the libraries for [RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_glosry.htm "Glossary Entry") must be used. The API for CPI-C was retained to support existing programs and for internal technical purposes.

Continue
[COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm)


### abenabap_java_script.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP and JavaScript, ABENABAP_JAVA_SCRIPT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

ABAP and JavaScript

In the kernel of an AS ABAP, a JavaScript (JS) Engine is integrated, in which JavaScript programs can be executed either in normal or in debugging mode (server-side scripting). The JavaScript (JS) Engine used supports JavaScript Version 1.5. Proxies can be used to bind script variables to data objects in ABAP programs.

The class CL\_JAVA\_SCRIPT implements an API, which can be used in ABAP programs, for the JavaScript (JS) Engine implemented in the kernel. This class encapsulates the JavaScript C Engine API and makes methods and attributes available to the ABAP programmer to perform JavaScript programs.

Hint

Support for the connection of JavaScript to ABAP is scheduled to be discontinued. This means that the class CL\_JAVA\_SCRIPT can no longer be used.

Example

The program DEMO\_JAVA\_SCRIPT\_MINI\_EDITOR is an example of a minimal JavaScript editor in which JavaScript programs can be edited, executed, and tested. This program was created using ABAP methods only and uses the class CL\_JAVA\_SCRIPT.
