---
title: "RAP Business Object Contract - Overview"
description: |
  The RAP business object contract defines a set of rules and guidelines for the RAP BO provider(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm 'Glossary Entry') and consumer(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_g
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm"
abapFile: "abaprap_bo_contract.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "method", "data", "types", "abaprap", "contract"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP Business Object Contract - Overview, ABAPRAP_BO_CONTRACT, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RAP Business Object Contract - Overview

The RAP business object contract defines a set of rules and guidelines for the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") implementation to ensure consistency and reliability. This topic provides an overview on general rules for the implementation. Find more details in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Invalid ABAP statements in RAP BO providers

-   ABAP statements that are not allowed in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"):
    -   COMMIT WORK
    -   ROLLBACK WORK
    -   CALL (C function)
    -   SYSTEM-CALL
    -   All [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry")\-related statements like CALL  DIALOG, CALL SCREEN, LEAVE SCREEN, SET SCREEN, SUBMIT (AND RETURN), MESSAGE (without INTO), WRITE, LEAVE, and STOP.
    -   You are not allowed to leave a behavior implementation using RAISE EXCEPTION.
-   ABAP statements that are not allowed outside of the late save phase of the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") (i. e. in the [RAP saver methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm) and [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm)):
    -   PERFORM ON COMMIT
    -   PERFORM ON ROLLBACK
    -   CALL FUNCTION IN UPDATE TASK
    -   CALL FUNCTION IN BACKGROUND UNIT
    -   CALL FUNCTION IN BACKGROUND TASK
    -   Database instructions using INSERT, DELETE, UPDATE, MODIFY and other forms of modifying database access.
-   AUTHORITY-CHECK OBJECT statements are not allowed outside of [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm), [FOR *\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_auth.htm), [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_global_auth.htm) and [FOR READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm) [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") since the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must ensure that the data in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") is always compliant with regard to authorization.

Invalid ABAP EML statements in RAP BO providers

-   COMMIT ENTITIES statements are not allowed in [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry").
-   ROLLBACK ENTITIES
-   A [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must not use ABAP EML MODIFY statements in the [RAP saver methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [check\_before\_save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_check_before_save.htm), [adjust\_numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm), [save\_modified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_saver_meth_save_modified.htm) and [cleanup](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_cleanup.htm). The statements can only be used in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and in the [finalize](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_finalize.htm) saver method in the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Furthermore, ABAP EML MODIFY statements are not allowed in read-only [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry").
-   AUTHORITY-CHECK DISABLE statements are not allowed outside of [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm), [FOR *\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_auth.htm), [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_global_auth.htm) and [FOR READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm) [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") since the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must ensure that the data in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") is always compliant with regard to authorization.
-   SET LOCKS statements are only allowed in the [FOR LOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_lock.htm) and [FOR MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_modify.htm) handler methods.

Invalid ABAP EML statements outside of RAP BO providers

-   ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) and [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) statements using the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm) are not allowed in [BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_glosry.htm "Glossary Entry") and should only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Missing %cid

-   [%cid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm) should always be filled in [RAP create operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_create_operation_glosry.htm "Glossary Entry"), [RAP create-by-association operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") (here, %cid should also be filled in the [%target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_target.htm) structure) and [RAP factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_factory_action_glosry.htm "Glossary Entry"). If [%cid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_cid.htm) is of no relevance, you can make use of the addition [AUTO FILL CID](abapmodify_entity_entities_fields.htm#!ABAP_ONE_ADD@1@) to automatically fill %cid with a unique dummy value to make sure that it is filled.

Mapping of invalid preliminary keys

-   [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") must not request the mapping of preliminary keys for which no final keys exist. Hence, [RAP BO providers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") should map all preliminary keys unless the operation failed. RAP BO consumers should also avoid requesting the mapping for preliminary keys if the corresponding instances have been deleted in the course of the session.

Respecting static feature controls

-   [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") should respect static [RAP feature controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_feature_control_glosry.htm "Glossary Entry"), for example, read-only fields should not be updated.

Avoiding empty update operations

-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation.
-   An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.