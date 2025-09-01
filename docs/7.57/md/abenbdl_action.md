  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - action, ABENBDL_ACTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

CDS BDL - action

Syntax Forms

[non-factory actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\))
1\. *\[* [internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[*static*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                  *\[* [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))*\]*;
[factory actions](javascript:call_link\('abenbdl_action_factory.htm'\))
2\. *\[* [internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[*static*\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                   \[cardinality\];

Effect

[RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") are [non-standard RAP BO operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") that modify the state of an [entity instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). The custom logic must be implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)).

There are two kinds of actions available:

-   [non-factory actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\))
    
    [Non-factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") implement custom logic that changes existing entity instances.
    
-   [factory actions](javascript:call_link\('abenbdl_action_factory.htm'\))
    
    [Factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") can be used to create RAP BO entity instances.
    

Continue
[CDS BDL - action, Non-Factory](javascript:call_link\('abenbdl_action_nonfactory.htm'\))
[CDS BDL - action, factory](javascript:call_link\('abenbdl_action_factory.htm'\))
[CDS BDL - Examples of Actions](javascript:call_link\('abenbdl_action_abexas.htm'\))