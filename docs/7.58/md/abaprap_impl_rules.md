  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20Implementation%20Rules%2C%20ABAPRAP_IMPL_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP Implementation Rules

The [ABAP contract checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontract_checks_glosry.htm "Glossary Entry") include [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") checks. The RAP BO contract defines a set of rules and guidelines for the [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and [consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") implementation to ensure consistency and reliability.

The checks also include transactional contract checks that are implemented in the [controlled SAP LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrolled_sap_luw_glosry.htm "Glossary Entry") concept. This concept is implicitly used by RAP.

To enforce the ABAP contract checks, the following [checkpoint groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") can be activated.

Note: Depending on the context (for example, strict(2) or implementations in the [restricted ABAP language version scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_version_glosry.htm "Glossary Entry")), the checkpoint group activation is not required. The violations can, especially in case of CC\_STMT and depending on the checkpoint group activation, result in a runtime error or they can be logged.

Checkpoint group

Purpose

Runtime errors

CC\_STMT

To enable the controlled SAP LUW checks. They check for invalid statements and operations in the transactional phases. For more information, see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinvalid_stmts_in_tx.htm).

BEHAVIOR\_ILLEGAL\_STATEMENT, BEHAVIOR\_ILLEGAL\_STMT\_IN\_CALL

CC\_RAP\_CONTRACT, CC\_RAP\_INTERNAL

RAP BO contract-related checkpoint groups to check for violations of RAP BO consumer and provider implementations. Note that the following list only relates to these checkpoint groups.

BEHAVIOR\_CONTRACT\_VIOLATION

The following table contains RAP BO contract check violations:

RAP BO Contract Check Violation

Details

Missing %cid

[%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm) should always be filled in [RAP create operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_create_operation_glosry.htm "Glossary Entry"), [RAP create-by-association operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") (here, %cid should also be filled in the [%target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_target.htm) structure) and [RAP factory actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_factory_action_glosry.htm "Glossary Entry"). If [%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm) is of no relevance, you can make use of the addition [AUTO FILL CID](abapmodify_entity_entities_fields.htm#!ABAP_ONE_ADD@1@) to automatically fill %cid with a unique dummy value to make sure that it is filled.

ABAP EML modify operations in RAP save sequence

The RAP BO provider may only perform ABAP EML modify operations in the RAP interaction phase or in the finalize saver method.

Improper provider implementations of [draft actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") that are specified with [with additional implementation](abenbdl_draft_action.htm#!ABAP_ADDITION_1@1@)

Provider implementations of the [edit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action2_abexa.htm), [discard](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action2_abexa.htm), and [activate](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action1_abexa.htm) methods should not return failed entries.
Provider implementations of the edit, discard, and activate, and [resume](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action2_abexa.htm) methods should not return [state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry"). [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) should not be filled.

Improper authorization check

If a BDEF defines authorization checks ([authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm)), then no authorization check should be performed that deviates from the definition, i.e. the authorization object used must either be listed in the own authorization context, or must be suppressed by another context. In such a case, the BEHAVIOR\_UNEXPECTED\_AUTH\_CHECK runtime error is usually raised.

Mapping of invalid preliminary keys

[RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") must not request the mapping of preliminary keys for which no final keys exist. Therefore, [RAP BO providers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") should map all preliminary keys unless the operation failed. RAP BO consumers should also avoid requesting the mapping for preliminary keys if the corresponding instances have been deleted in the course of the session.

Not respecting static [feature control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_feature_control_glosry.htm "Glossary Entry")

RAP BO consumers must respect the static feature control. For example, fields that are specified as read-only in the BDEF must not be updated, or fields that are specified as mandatory must be provided in a create operation.

Unnecessary or ambiguous requests by RAP BO consumers

RAP BO consumers must not request unnecessary or ambiguous operations, that is, an update operation is unnecessary if no fields are changed. Examples of ambiguous operations are duplicate update operations on the same instance, duplicate delete operations, or action or function executions.

Improper use of [augmentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_augmentation_glosry.htm "Glossary Entry")

An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation. An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Hint

See [here](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491c002326bc14cde10000000a42189b) how to enable a checkpoint group. You can choose whether violations are logged or cause a runtime error.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap)
-   [Restrictions in Transactional Phases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinvalid_stmts_in_tx.htm)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)