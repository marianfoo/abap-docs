  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP Business Object Contract - Overview, ABAPRAP_BO_CONTRACT, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RAP Business Object Contract - Overview

The RAP business object contract defines a set of rules and guidelines for the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and [consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") implementation to ensure consistency and reliability. This topic provides an overview on general rules for the implementation. Find more details in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Invalid ABAP statements in RAP BO providers

-   ABAP statements that are not allowed in [ABAP behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"):
    -   COMMIT WORK
    -   ROLLBACK WORK
    -   CALL (C function)
    -   SYSTEM-CALL
    -   All [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry")\-related statements like CALL  DIALOG, CALL SCREEN, LEAVE SCREEN, SET SCREEN, SUBMIT (AND RETURN), MESSAGE (without INTO), WRITE, LEAVE, and STOP.
    -   You are not allowed to leave a behavior implementation using RAISE EXCEPTION.
-   ABAP statements that are not allowed outside of the late save phase of the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") (i. e. in the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) and [save](javascript:call_link\('abensaver_method_save.htm'\))):
    -   PERFORM ON COMMIT
    -   PERFORM ON ROLLBACK
    -   CALL FUNCTION IN UPDATE TASK
    -   CALL FUNCTION IN BACKGROUND UNIT
    -   CALL FUNCTION IN BACKGROUND TASK
    -   Database instructions using INSERT, DELETE, UPDATE, MODIFY and other forms of modifying database access.
-   AUTHORITY-CHECK OBJECT statements are not allowed outside of [FOR PRECHECK](javascript:call_link\('abaphandler_meth_precheck.htm'\)), [FOR *\[*INSTANCE*\]* AUTHORIZATION](javascript:call_link\('abaphandler_meth_auth.htm'\)), [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) and [FOR READ](javascript:call_link\('abaphandler_meth_read.htm'\)) [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") since the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") must ensure that the data in the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") is always compliant with regard to authorization.

Invalid ABAP EML statements in RAP BO providers

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry").
-   ROLLBACK ENTITIES
-   A [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)), [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)), [save](javascript:call_link\('abensaver_method_save.htm'\)), [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) and [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)). The statements can only be used in the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") and in the [finalize](javascript:call_link\('abensaver_finalize.htm'\)) saver method in the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry").
-   AUTHORITY-CHECK DISABLE statements are not allowed outside of [FOR PRECHECK](javascript:call_link\('abaphandler_meth_precheck.htm'\)), [FOR *\[*INSTANCE*\]* AUTHORIZATION](javascript:call_link\('abaphandler_meth_auth.htm'\)), [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) and [FOR READ](javascript:call_link\('abaphandler_meth_read.htm'\)) [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") since the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") must ensure that the data in the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") is always compliant with regard to authorization.
-   SET LOCKS statements are only allowed in the [FOR LOCK](javascript:call_link\('abaphandler_meth_lock.htm'\)) and [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)) handler methods.

Invalid ABAP EML statements outside of RAP BO providers

-   ABAP EML [MODIFY](javascript:call_link\('abapmodify_entity_entities.htm'\)) and [READ](javascript:call_link\('abapread_entity_entities.htm'\)) statements using the addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) are not allowed in [BAdIs](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") and should only be used in [ABAP behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

Missing %cid

-   [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) should always be filled in [RAP create operations](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [RAP create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") (here, %cid should also be filled in the [%target](javascript:call_link\('abapderived_types_target.htm'\)) structure) and [RAP factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry"). If [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) is of no relevance, you can make use of the addition [AUTO FILL CID](abapmodify_entity_entities_fields.htm#!ABAP_ONE_ADD@1@) to automatically fill %cid with a unique dummy value to make sure that it is filled.

Mapping of invalid preliminary keys

-   [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") must not request the mapping of preliminary keys for which no final keys exist. Hence, [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") should map all preliminary keys unless the operation failed. RAP BO consumers should also avoid requesting the mapping for preliminary keys if the corresponding instances have been deleted in the course of the session.

Respecting static feature controls

-   [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") should respect static [RAP feature controls](javascript:call_link\('abenrap_feature_control_glosry.htm'\) "Glossary Entry"), for example, read-only fields should not be updated.

Avoiding empty update operations

-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation.
-   An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.