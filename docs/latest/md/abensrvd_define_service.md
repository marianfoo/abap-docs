  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm) →  [ABAP CDS - SDL for Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20DEFINE%20SERVICE%2C%20ABENSRVD_DEFINE_SERVICE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - DEFINE SERVICE

Syntax

*\[*[@service\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)*\]*
*\[*[@service\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)*\]*
  ...
*\[*DEFINE*\]* SERVICE service
*\[* [PROVIDER CONTRACTS contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)*\]*
{
   EXPOSE cds\_entity1 *\[*AS alias1*\]*;
  *\[*EXPOSE cds\_entity2 *\[*AS alias2*\]*;*\]*
   ...
}

Effect

The statement DEFINE SERVICE implements a [CDS service definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definition_glosry.htm "Glossary Entry") with the name service in [CDS SDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sdl_glosry.htm "Glossary Entry"). The name service is in the same namespace as the [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") defined with [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") and must satisfy the appropriate naming conventions.

The service definition exposes the CDS entities cds\_entity1, cds\_entity2, ... for a [business service](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry"). Each CDS entity is exposed using its own statement EXPOSE within the curly brackets. Each statement must be closed by a semicolon ;. At least one CDS entity must be exposed. The following CDS entities can be specified:

-   [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry")
-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")
-   [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry")

For each CDS entity, the addition AS can be used to specify an optional alias name alias1, alias2, ... The CDS entity is exposed under this alias name and it must be used when the business service is accessed.

In syntax checks and when the service definition is activated, the relationship between the exposed CDS entities is not verified.

The optional annotations [@service\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm), [@service\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm), ... can be specified in front of the statement DEFINE SERVICE.

The optional addition [PROVIDER CONTRACTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm) can be used to define a provider contract contract for the service definition in question. A provider contract defines the scenario for which the service definition in question is intended. It is a prerequisite for releasing the service definition in question under the C0 release contract for extensibility. For further details, see topic [C0 Contract Rules for CDS Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_sd.htm).

Hints

-   If a service definition exposes multiple CDS entities, these entities should be related semantically. For example, if a CDS view with CDS associations is exposed in a service definition, it is recommended that the association targets of each CDS association are exposed as well. Together with the [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") all other CDS entities of the [composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") should also be exposed.
-   If a service definition is used in a business service, it must be linked with a [RESTful](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestful_glosry.htm "Glossary Entry") protocol using a [service binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_binding_glosry.htm "Glossary Entry"). The service definition itself, however, is independent of the protocol in question and can be used with different protocols in multiple service bindings.
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

See [Consuming Business Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_abexa.htm).

Continue
[CDS SDL - service\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)
[CDS SDL - PROVIDER CONTRACTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)