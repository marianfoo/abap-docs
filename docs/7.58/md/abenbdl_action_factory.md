  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [RAP - action](javascript:call_link\('abenbdl_action.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20action%2C%20factory%2C%20ABENBDL_ACTION_FACTORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - action, factory

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[* [static](javascript:call_link\('abenbdl_static.htm'\)) *\[*[default](javascript:call_link\('abenbdl_action_default_factory.htm'\))*\]**\]* factory action
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
                   \[cardinality\]

Effect

[Factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry") are used to create [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Factory actions can be instance-bound or [static](javascript:call_link\('abenbdl_static.htm'\)). Instance-bound factory actions can copy specific values of an instance. Static factory actions can be used to create instances with prefilled default values.

For factory actions, the same rules apply as for [non-factory actions](javascript:call_link\('abenbdl_action_nonfactory.htm'\)) with the following differences:

-   Output parameters OutputParameter are not allowed.
    
    A factory action always produces one new BO entity instance for which it is declared. It is therefore not necessary to specify the result in the BDL. Factory actions may also create child entity instances.
    
-   It is mandatory to specify a cardinality. The cardinality must always be \[1\] for factory actions.

The result of a factory action is returned in the [response parameter](javascript:call_link\('abapeml_response.htm'\)) MAPPED by a mapping between the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") %cid and the key of the newly created entity instance.

Exactly one static factory action can be defined as default factory action using the syntax addition [default](javascript:call_link\('abenbdl_action_default_factory.htm'\)). This definition of default factory actions has an effect on consuming frameworks, such as OData. For further details, see topic [RAP - Default Factory Action](javascript:call_link\('abenbdl_action_default_factory.htm'\)).

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   In a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), factory actions from the base BDEF can be reused. For details on reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is also possible to specify new factory actions as described in topic [RAP BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

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
      field(readonly:update) key\_field;
      // copy instance, assign new unique key value
      factory action copy\_instance \[1\];
      // create new instance with default values
      static factory action new\_instance \[1\];
    }
    

The actions are implemented in behavior pool BP\_DEMO\_RAP\_FACTORY\_ACTION. The class CL\_DEMO\_RAP\_FACTORY\_ACTION accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and executes both actions.

Result: the entity instance with key field 1 is copied and a new entity instance with default values is created.

Executable Example

The example above is explained in detail in the executable example [RAP BDL - factory action](javascript:call_link\('abenbdl_action3_abexa.htm'\)).

Continue
[RAP - Default Factory Action](javascript:call_link\('abenbdl_action_default_factory.htm'\))