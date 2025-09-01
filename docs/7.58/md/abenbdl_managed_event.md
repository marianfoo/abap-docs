  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - Events](javascript:call_link\('abenbdl_event_overview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20managed%20event%2C%20ABENBDL_MANAGED_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - managed event

Syntax

managed event DerivedEventName on RefEvent parameter ViewEntityName;

Effect

Defines a [RAP derived event](javascript:call_link\('abenrap_derived_event_glosry.htm'\) "Glossary Entry") DerivedEventName in the root node of a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"). A derived event is defined with reference to an already implemented event RefEvent and allows the definition of a payload that deviates from the one of the referenced event. When the referenced event is raised, the derived event is raised as well with its custom payload. No implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required for the derived event.

Currently, RAP derived events can be defined only in the root node of a RAP business object or in an extension of the root node of a RAP business object.

-   The name DerivedEventName defines the name of the derived event. It must comply with the naming rules for CDS BDL that are described in the topic [RAP BDL - General Syntax Rules](javascript:call_link\('abenbdl_general_syntax_rules.htm'\)).
-   After the keyword ON, the referenced event RefEvent is specified. The referenced event must be an event from the current behavior definition. In case of an extension, the referenced event must be specified in the original BDEF that is currently being extended.
-   An [output parameter](javascript:call_link\('abenoutput_parameter_glosry.htm'\) "Glossary Entry") ViewEntityName must be defined. It redefines the payload of the event RefEvent. The following rules apply:
    
    -   The output parameter ViewEntityName must be a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") without any associations.
    -   The key fields of the view entity used as output parameter ViewEntityName must match the key fields of the entity the referenced event is defined for.
    
    Note: The output parameter of a derived event is always flat. Deep structures or view entities with associations are not supported.
    

Availability

-   RAP derived events can be defined in [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") and in [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
-   They can also be defined in [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") for managed and unmanaged RAP BOs. This is described in topic [RAP BDL - Adding Elements](javascript:call_link\('abenbdl_new_elem_ext.htm'\)).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Derived Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/c081abb9243045d098197321213fde29?version=sap_cross_product_abap).

Example

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_DERIVED\_EVENT. It defines the event MyEvent.

unmanaged implementation in class bp\_demo\_rap\_derived\_event unique;
strict ( 2 );
extensible;
define behavior for DEMO\_RAP\_DERIVED\_EVENT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field(readonly:update) keyfield;
  event MyEvent;
}

The following CDS view entity is used as an output parameter of the derived event. Its key fields match the key fields of the root view entity DEMO\_RAP\_DERIVED\_EVENT.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, demo for derived event'
define root view entity DEMO\_RAP\_DERIVED\_EVENT\_PARAM
  as select from demo\_dbtab\_root
{
  key key\_field    as KeyField,
      data\_field   as DataField
}

The following BDEF extension redefines the event MyEvent from the base BDEF. The derived event has the name MyDerivedEvent.

extension using interface DEMO\_RAP\_DERIVED\_EVENT\_PV;
extend behavior for RootInterface
{
  managed event MyDerivedEvent on MyEvent
    parameter DEMO\_RAP\_DERIVED\_EVENT\_PARAM;
}