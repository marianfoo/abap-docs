  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - non-standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm) → 

CDS BDL - action

Syntax Forms

[non-factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_nonfactory.htm)
1\. *\[* [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)*\]**\[*static*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[* [OutputParameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm)*\]*;
[factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_factory.htm)
2\. *\[* [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)*\]**\[*static*\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm)*\]*
                   \[cardinality\];

Effect

[RAP actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_action_glosry.htm "Glossary Entry") are [non-standard RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") that modify the state of an [entity instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). The custom logic must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_modify.htm).

There are two kinds of actions available:

-   [non-factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_nonfactory.htm)
    
    [Non-factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") implement custom logic that changes existing entity instances.
    
-   [factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_factory.htm)
    
    [Factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") can be used to create RAP BO entity instances.
    

Continue
[CDS BDL - action, non-factory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_nonfactory.htm)
[CDS BDL - action, factory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_factory.htm)
[CDS BDL - Examples of actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_abexas.htm)