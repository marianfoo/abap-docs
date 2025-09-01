  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm) →  [ABAP CDS - SDL for Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm) →  [CDS SDL - DEFINE SERVICE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20PROVIDER%20CONTRACTS%2C%20ABENSRVD_PROVIDER_CONTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - PROVIDER CONTRACTS

Syntax

... PROVIDER CONTRACTS INA
                     *|* SQL ...

Effect

A provider contract can optionally be specified in a [CDS service definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definition_glosry.htm "Glossary Entry"). It defines the scenario for which the service definition in question is intended. The effect is that stricter syntax checks are applied.

Currently, the following provider contracts are available:

-   INA
    
    Switches on syntax checks that are needed if the service definition is published with the [Information Access (InA) protocol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenina_protocol_glosry.htm "Glossary Entry"). When this provider contract is specified, the following additional rules apply:
    
    -   The CDS entities exposed must be analytical queries. Two kinds of analytical query are acceptable:
        
        Analytical queries with the annotation @Analytics.query set to true
        
        [CDS projection views with the provider contract analytical\_query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry").
        
    -   If the exposed CDS entity is an analytical query with the annotation @Analytics.query: true, exactly one entity must be exposed. Otherwise, a syntax check error occurs.
    -   If the exposed CDS entity is a CDS projection view with the provider contract analytical\_query, then multiple entities can be exposed.
-   SQL
    
    Switches on syntax checks that are needed if the service definition is published with the service binding type SQL. The same checks are performed as for service bindings of type SQL. The checks are documented on SAP Help Portal in the Developer Extensibility Guide, topic [Constraints](https://help.sap.com/docs/SAP_S4HANA_CLOUD/6aa39f1ac05441e5a23f484f31e477e7/4082fe1b66164eeb8aa41192166526af).
    

Exactly one provider contract can be specified in a CDS service definition. Changing the value defined after PROVIDER CONTRACTS is possible, even after activation and transport of the respective service definition, as long as the corresponding service binding is not affected.

Use Case

A provider contract is a prerequisite for releasing a CDS service definition under the [C0 contract, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry"). It enforces strict rules that match the rules of a type of [service binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_binding_glosry.htm "Glossary Entry"). This ensures stability of [business services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_service_glosry.htm "Glossary Entry") and prevents service definition extensions from causing errors in the associated service bindings.

Related Information

-   [C0 Contract Rules for CDS Service Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_sd.htm)

Hint

The provider contract specified in a CDS service definition and the service binding which is defined for the CDS service definition in question must match. Otherwise, an error occurs.

Example

The following service definition specifies the provider contract INA and meets all corresponding requirements.

@EndUserText.label: 'SD with provider contract'
@AbapCatalog.extensibility.extensible: true
define service DEMO\_CDS\_SD\_PROVIDER\_CONTRACT
  provider contracts ina {
  expose DEMO\_CDS\_ANALYTIC\_CASE;
  expose DEMO\_CDS\_ANALYTIC\_PARAMETER;
}