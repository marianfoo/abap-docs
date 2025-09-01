---
title: "CDS BDL - action"
description: |
  Syntax Forms non-factory actions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_nonfactory.htm) 1.  internal(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_internal.htm)static action ( features: instance  global(h
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm"
abapFile: "abenbdl_action.htm"
keywords: ["update", "do", "if", "try", "method", "data", "abenbdl", "action"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) →  [CDS BDL - Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations.htm) →  [CDS BDL - Non-Standard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - action, ABENBDL_ACTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

CDS BDL - action

Syntax Forms

[non-factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_nonfactory.htm)
1\. *\[* [internal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_internal.htm)*\]**\[*static*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[* [OutputParameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm)*\]*;
[factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_factory.htm)
2\. *\[* [internal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_internal.htm)*\]**\[*static*\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_input_param.htm)*\]*
                   \[cardinality\];

Effect

[RAP actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") are [non-standard RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") that modify the state of an [entity instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). The custom logic must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_modify.htm).

There are two kinds of actions available:

-   [non-factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_nonfactory.htm)
    
    [Non-factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") implement custom logic that changes existing entity instances.
    
-   [factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_factory.htm)
    
    [Factory actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") can be used to create RAP BO entity instances.
    

Continue
[CDS BDL - action, Non-Factory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_nonfactory.htm)
[CDS BDL - action, factory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_factory.htm)
[CDS BDL - Examples of Actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_abexas.htm)