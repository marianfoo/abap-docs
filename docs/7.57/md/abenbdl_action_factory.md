  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - action, factory, ABENBDL_ACTION_FACTORY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

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

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   In a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), factory actions from the base BDEF can be reused. For details on reuse, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is also possible to specify new factory actions as described in topic [CDS BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Example

The following example shows a managed [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") which defines two factory actions:

-   copy\_instance: All values of the requested entity instance are copied and a new key value is assigned.
-   new\_instance: A new entity instance is created with default values.
    
    managed implementation in class bp\_demo\_rap\_factory\_action unique;
    strict(2);
    define behavior for demo\_rap\_factory\_action
    persistent table demo\_dbtab\_root
    lock master
    authorization master ( instance )
    {
      create;
      update;
      delete;
      // copy instance, assign new unique key value
      factory action copy\_instance \[1\];
      // create new instance with default values
      static factory action new\_instance \[1\];
    }
    

The actions are implemented in behavior pool BP\_DEMO\_RAP\_FACTORY\_ACTION. The program DEMO\_RAP\_FACTORY\_ACTION accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and executes both actions.

Result: the entity instance with key field '1' is copied and a new entity instance with default values is created.

Executable Example

The example above is explained in detail in the executable example [CDS BDL - factory action](javascript:call_link\('abenbdl_action3_abexa.htm'\)).