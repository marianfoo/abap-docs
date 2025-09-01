  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20CDS%20Service%20Definitions%2C%20ABENC0_CONTRACT_RULES_SD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

C0 Contract Rules for CDS Service Definitions

The following sections list the most important [C0 contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry") rules for [CDS service definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_service_definition_glosry.htm "Glossary Entry").

The general rules for [CDS service definition extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_service_def_ext_glosry.htm "Glossary Entry") are described in topic [CDS SDL - EXTEND SERVICE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrvd_extend_service.htm).

-   [C0 Contract Rules for Providers of CDS Service Definitions](#@@ITOC@@ABENC0_CONTRACT_RULES_SD_1)
-   [C0 Contract Rules for Consumers of CDS Service Definitions](#@@ITOC@@ABENC0_CONTRACT_RULES_SD_2)
-   [Example: C0 Released CDS Service Definition, Design and Consumption](#@@ITOC@@ABENC0_CONTRACT_RULES_SD_3)

C0 Contract Rules for Providers of CDS Service Definitions   

Prerequisites for a C0 Release

-   A provider contract must be set using the syntax statement [PROVIDER CONTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrvd_provider_contract.htm).
-   The annotation [@AbapCatalog.extensibility.extensible: true](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_service_annos.htm) must be set.
-   The C0 release is possible only if all exposed entities use the correct [namespace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennames_repos_obj_guidl.htm "Guideline") prefix. For repository objects developed in an SAP system, this means that the entity names must not start with YY or ZZ.

Stability Rules After Release

-   The service definition in question must not be deleted.
-   The annotation @AbapCatalog.extensibility.extensible: true must not be removed or set to false.
-   The provider contract must remain stable. It must not be removed and its value must not be changed.
-   If new entities are added, these new entities must obey the naming rules. For repository objects developed in an SAP system, this means that the entity names must not start with YY or ZZ.

C0 Contract Rules for Consumers of CDS Service Definitions   

-   The extended service definition must be released under the C0 contract.
-   If entities are exposed that were initially created in an SAP system, these entities must be released under the [C1 release contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc1_contract_glosry.htm "Glossary Entry").
-   The rules of the provider contract must be respected. These rules are described in topic [CDS SDL - PROVIDER CONTRACTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensrvd_provider_contract.htm).

Example: C0 Released CDS Service Definition, Design and Consumption   

The following CDS service definition DEMO\_CDS\_SD\_PROVIDER\_CONTRACT is defined as extensible and it specifies a provider contract. It fulfills all requirements for C0 release.

Note: This service definition shows how to create a released API. However, it is not released under the C0 contract, extend, because it is not intended to be used as an API.

@EndUserText.label: 'SD with provider contract'
@AbapCatalog.extensibility.extensible: true
define service DEMO\_CDS\_SD\_PROVIDER\_CONTRACT
  provider contracts ina {
  expose DEMO\_CDS\_ANALYTIC\_CASE;
  expose DEMO\_CDS\_ANALYTIC\_PARAMETER;
}

The following CDS service definition extension DEMO\_CDS\_SD\_PROVIDER\_CONTRACT extends the service definition displayed above. It exposes one further entity, respecting the provider contracts' rules.

extend service DEMO\_CDS\_SD\_PROVIDER\_CONTRACT with {
  expose DEMO\_ANALYTICAL\_QUERY;
}