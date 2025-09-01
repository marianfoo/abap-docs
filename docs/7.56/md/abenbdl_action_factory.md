  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - non-standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm) →  [CDS BDL - action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) → 

CDS BDL - action, factory

Syntax

*\[*[internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_internal.htm)*\]**\[*static*\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_input_param.htm)*\]*
                   \[cardinality\]

Effect

[Factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") are used to create [RAP BO entity instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry"). Factory actions can be instance-bound (default) or static. Instance-bound factory actions can copy specific values of an instance. Static factory actions can be used to create instances with prefilled default values.

For factory actions, the same rules apply as for [non-factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_nonfactory.htm) with the following differences:

-   Output parameters OutputParameter are not allowed.
    
    Factory actions always produce one new BO entity instance with possible child entity instances. It is therefore not necessary to specify a result.
    
-   It is mandatory to specify a cardinality. The cardinality must always be \[1\] for factory actions.

The result of a factory action is returned in the [response parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) MAPPED by a mapping between the [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") %cid and the key of the newly created entity instance.

Availability

-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   In a [projection BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), factory actions from the base BDEF can be reused. For details on reuse, see topic [CDS BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm). It is also possible to specify new factory actions as described in topic [CDS BDL - actions and functions, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm).