  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - non-standard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\)) → 

CDS BDL - action, factory

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[*static*\]* factory action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                   \[cardinality\]

Effect

[Factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") are used to create [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Factory actions can be instance-bound (default) or static. Instance-bound factory actions can copy specific values of an instance. Static factory actions can be used to create instances with prefilled default values.

For factory actions, the same rules apply as for [non-factory actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\)) with the following differences:

-   Output parameters OutputParameter are not allowed.
    
    Factory actions always produce one new BO entity instance with possible child entity instances. It is therefore not necessary to specify a result.
    
-   It is mandatory to specify a cardinality. The cardinality must always be \[1\] for factory actions.

The result of a factory action is returned in the [response parameter](javascript:call_link\('abapeml_response.htm'\)) MAPPED by a mapping between the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") %cid and the key of the newly created entity instance.

Availability

-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   In a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), factory actions from the base BDEF can be reused. For details on reuse, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is also possible to specify new factory actions as described in topic [CDS BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).