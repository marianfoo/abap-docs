  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20action%2C%20ABENBDL_ACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - action

Syntax Forms

[Non-Factory Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_nonfactory.htm)

1\. *\[*[internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm)*\]**\[* [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm)*\]* *\[*[repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm)*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[* [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)*\]*
                  *\[* [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[*[OutputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm)*\]*;

[Factory Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_factory.htm)

2\. *\[*[internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm)*\]**\[* [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm) *\[*[default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_default_factory.htm)*\]**\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[* [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)*\]*
                  *\[* [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm)*\]*
                   \[cardinality\];

[Save Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_onsave.htm)

3\. *\[*[internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm)*\]**\[* [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm)*\]**\[*factory*\]*
  save(finalize*|*adjustnumbers*|*finalize, adjustnumbers) action
                  *\[*(
                  *\[* [features: global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)*\]*
                  *\[* [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm)*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[*[OutputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm)*\]*;

Effect

[RAP actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") are [non-standard RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") that modify the state of an [entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). The custom logic must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm).

The following kinds of actions are available:

-   [non-factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_nonfactory.htm)
    -   [Non-factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") implement custom logic that changes existing entity instances.
    -   Instance-bound non-factory actions can be declared as [repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm). A [repeatable action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_repeatable_action_glosry.htm "Glossary Entry") can be executed multiple times on the same [RAP BO entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") in the same [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") request.
-   [factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_factory.htm)
    -   [Factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") can be used to create RAP BO entity instances.
    -   A [default factory action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_default_factory.htm) is a special kind of factory action.
-   [save actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_onsave.htm)
    -   [RAP save actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_action_glosry.htm "Glossary Entry") can be non-factory actions or factory actions. RAP save actions are characterized by the syntax addition save, which has the effect that the action in question can only be executed during the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). Any attempt to execute a RAP save action during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") results in a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

Continue
[RAP - action, Non-Factory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_nonfactory.htm)
[RAP - action, factory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_factory.htm)
[RAP - save action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_onsave.htm)
[RAP - Examples of Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_abexas.htm)