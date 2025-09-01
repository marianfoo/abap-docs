  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Services (BS)](javascript:call_link\('abencds_business_services.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS SDL - DEFINE SERVICE, ABENSRVD_DEFINE_SERVICE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

CDS SDL - DEFINE SERVICE

Syntax

*\[*[@service\_annot1](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
*\[*[@service\_annot2](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
  ...
*\[*DEFINE*\]* SERVICE service
{
   EXPOSE cds\_entity1 *\[*AS alias1*\]*;
  *\[*EXPOSE cds\_entity2 *\[*AS alias2*\]*;*\]*
   ...
}

Effect

The statement DEFINE SERVICE implements a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") with the name service in [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"). The name service is in the same namespace as the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined with [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") and must satisfy the appropriate naming conventions.

The service definition exposes the CDS entities cds\_entity1, cds\_entity2, ... for a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"). Each CDS entity is exposed using its own statement EXPOSE within the curly brackets. Each statement must be closed by a semicolon ;. At least one CDS entity must be exposed. The following CDS entities can be specified:

-   [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
-   [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")

For each CDS entity, the addition AS can be used to specify an optional alias name alias1, alias2, ... The CDS entity is exposed under this alias name and it must be used when the business service is accessed.

In syntax checks and when the service definition is activated, the relationship between the exposed CDS entities is not verified.

The optional annotations [@service\_annot1](javascript:call_link\('abencds_define_service_annos.htm'\)), [@service\_annot2](javascript:call_link\('abencds_define_service_annos.htm'\)), ... can be specified in front of the statement DEFINE SERVICE.

Hints

-   If multiple CDS entities are exposed in a single service definition, these entities must be related semantically. For example, it is recommended that a service definition that exposes a CDS view, which itself exposes [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), also exposes the [association targets](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of these associations. Together with the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") all other CDS entities of the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") should also be exposed.
-   If a service definition is used in a business service, it must be linked with a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") protocol using a [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry"). The service definition itself, however, is independent of the protocol in question and can be used with different protocols in multiple service bindings.
-   Further restrictions apply to the CDS entities in question when using a service definition in a service binding. For example, the definition must have at least one key field or the cardinalities of the CDS associations must be defined correctly.
-   No service bindings can be defined for service definitions that expose CDS abstract entities.

Example

The following service definition exposes CDS views that are related to each other under their own names by CDS associations.

define service demo\_sd\_assoc\_scarr\_spfli {
  expose demo\_cds\_assoc\_scarr;
  expose demo\_cds\_assoc\_spfli;
  expose demo\_cds\_sflight;
  expose demo\_cds\_sairport;
}

Example

The following service definition exposes a CDS view under an alias name.

@EndUserText.label: 'Expose demo\_cds\_cross\_join'
define service DEMO\_SD\_CROSS\_JOIN {
  expose demo\_cds\_cross\_join as demo\_t000\_t100;
}

Executable Example

See [Consuming Business Services](javascript:call_link\('abenconsume_bs_abexa.htm'\)).

Continue
[CDS SDL - service\_annot](javascript:call_link\('abencds_define_service_annos.htm'\))