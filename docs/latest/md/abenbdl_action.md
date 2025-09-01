  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20action%2C%20ABENBDL_ACTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - action

Syntax Forms

[Non-Factory Actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\))

1\. *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[* [static](javascript:call_link\('abenbdl_static.htm'\))*\]* *\[*[repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\))*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[* [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))*\]*
                  *\[* [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                  *\[*[OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))*\]*;

[Factory Actions](javascript:call_link\('abenbdl_action_factory.htm'\))

2\. *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[* [static](javascript:call_link\('abenbdl_static.htm'\)) *\[*[default](javascript:call_link\('abenbdl_action_default_factory.htm'\))*\]**\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[* [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))*\]*
                  *\[* [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                   \[cardinality\];

[Save Actions](javascript:call_link\('abenbdl_action_onsave.htm'\))

3\. *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[* [static](javascript:call_link\('abenbdl_static.htm'\))*\]**\[*factory*\]*
  save(finalize*|*adjustnumbers*|*finalize, adjustnumbers) action
                  *\[*(
                  *\[* [features: global](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))*\]*
                  *\[* [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\))*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                  *\[*[OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))*\]*;

Effect

[RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") are [non-standard RAP BO operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") that modify the state of an [entity instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). The custom logic must be implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)).

The following kinds of actions are available:

-   [non-factory actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\))
    -   [Non-factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") implement custom logic that changes existing entity instances.
    -   Instance-bound non-factory actions can be declared as [repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\)). A [repeatable action](javascript:call_link\('abenrap_repeatable_action_glosry.htm'\) "Glossary Entry") can be executed multiple times on the same [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") in the same [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") request.
-   [factory actions](javascript:call_link\('abenbdl_action_factory.htm'\))
    -   [Factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") can be used to create RAP BO entity instances.
    -   A [default factory action](javascript:call_link\('abenbdl_action_default_factory.htm'\)) is a special kind of factory action.
-   [save actions](javascript:call_link\('abenbdl_action_onsave.htm'\))
    -   [RAP save actions](javascript:call_link\('abenrap_save_action_glosry.htm'\) "Glossary Entry") can be non-factory actions or factory actions. RAP save actions are characterized by the syntax addition save, which has the effect that the action in question can only be executed during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). Any attempt to execute a RAP save action during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") results in a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

Continue
[RAP - action, Non-Factory](javascript:call_link\('abenbdl_action_nonfactory.htm'\))
[RAP - action, factory](javascript:call_link\('abenbdl_action_factory.htm'\))
[RAP - save action](javascript:call_link\('abenbdl_action_onsave.htm'\))
[RAP - Examples of Actions](javascript:call_link\('abenbdl_action_abexas.htm'\))