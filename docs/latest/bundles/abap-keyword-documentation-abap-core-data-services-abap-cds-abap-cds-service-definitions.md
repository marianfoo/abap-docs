# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - Service Definitions

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_service_definitions.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm)
- [abencds_f1_sdl_syntax.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm)
- [abensrvd_define_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)
- [abencds_define_service_annos.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)
- [abensrvd_provider_contract.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)
- [abensrvd_extend_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_extend_service.htm)
- [abenservice_bindings_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_bindings_abexas.htm)
- [abenconsume_bs_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_abexa.htm)
- [abenconsume_bs_client_proxy_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_client_proxy_abexa.htm)

**Bundle Contains**: 9 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.873Z

---

### abencds_service_definitions.htm

> **📖 Official SAP Documentation**: [abencds_service_definitions.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Service%20Definitions%2C%20ABENCDS_SERVICE_DEFINITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Service Definitions

A [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") exposes [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for a [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"). Service definitions are created in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") using [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry").

-   [SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))

Service definitions can expose regular CDS entities and root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"):

-   The publication of a regular CDS entity as a business service enables queries to be made from outside AS ABAP on the associated data using the protocol from the service binding.
-   The publication of root entities of [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") also enables transactional writes to be made on the associated data.

Continue
[ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\))
[ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\))



**📖 Source**: [abencds_service_definitions.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_service_definitions.htm)

### abencds_f1_sdl_syntax.htm

> **📖 Official SAP Documentation**: [abencds_f1_sdl_syntax.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20SDL%20for%20Service%20Definitions%2C%20ABENCDS_F1_SDL_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

ABAP CDS - SDL for Service Definitions

A [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in ABAP CDS is created using the data definition language [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry") in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry"). CDS SDL complies with the [general CDS syntax rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)) and contains the following language element for service definitions:

-   [DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))

Hints

-   The [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") of service definitions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there.
-   SDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))
[CDS SDL - EXTEND SERVICE](javascript:call_link\('abensrvd_extend_service.htm'\))



**📖 Source**: [abencds_f1_sdl_syntax.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm)

### abensrvd_define_service.htm

> **📖 Official SAP Documentation**: [abensrvd_define_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20DEFINE%20SERVICE%2C%20ABENSRVD_DEFINE_SERVICE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - DEFINE SERVICE

Syntax

*\[*[@service\_annot1](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
*\[*[@service\_annot2](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
  ...
*\[*DEFINE*\]* SERVICE service
*\[* [PROVIDER CONTRACTS contract](javascript:call_link\('abensrvd_provider_contract.htm'\))*\]*
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

The optional addition [PROVIDER CONTRACTS](javascript:call_link\('abensrvd_provider_contract.htm'\)) can be used to define a provider contract contract for the service definition in question. A provider contract defines the scenario for which the service definition in question is intended. It is a prerequisite for releasing the service definition in question under the C0 release contract for extensibility. For further details, see topic [C0 Contract Rules for CDS Service Definitions](javascript:call_link\('abenc0_contract_rules_sd.htm'\)).

Hints

-   If a service definition exposes multiple CDS entities, these entities should be related semantically. For example, if a CDS view with CDS associations is exposed in a service definition, it is recommended that the association targets of each CDS association are exposed as well. Together with the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") all other CDS entities of the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") should also be exposed.
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
[CDS SDL - PROVIDER CONTRACTS](javascript:call_link\('abensrvd_provider_contract.htm'\))



**📖 Source**: [abensrvd_define_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)

### abencds_define_service_annos.htm

> **📖 Official SAP Documentation**: [abencds_define_service_annos.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) →  [CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20service_annot%2C%20ABENCDS_DEFINE_SERVICE_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - service\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a service definition annotation in the definition of a [service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)).

The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #SERVICE.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-define-service-annos-1-------endusertext-annotations---@ITOC@@ABENCDS_DEFINE_SERVICE_ANNOS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

AbapCatalog Annotations   

Technical settings of a CDS service definition.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.extensibility.extensible

Enables or disables service definition extensibility.

true:
Service definition extensions are allowed.
false:
Service definition extensions are not allowed.

false

true

The annotation @AbapCatalog.extensibility.extensible with the value true is a prerequisite for [C0 release of a CDS service definition](javascript:call_link\('abenc0_contract_rules_sd.htm'\)).

EndUserText Annotations   

Translatable texts of the CDS service definition.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS service definition

Character string with a maximum of 60 characters

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and are translatable. The value specified in the source code should consist of text in the original language of the CDS source code, and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.



**📖 Source**: [abencds_define_service_annos.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_service_annos.htm)

### abensrvd_provider_contract.htm

> **📖 Official SAP Documentation**: [abensrvd_provider_contract.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) →  [CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20PROVIDER%20CONTRACTS%2C%20ABENSRVD_PROVIDER_CONTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - PROVIDER CONTRACTS

Syntax

... PROVIDER CONTRACTS INA
                     *|* SQL ...

Effect

A provider contract can optionally be specified in a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry"). It defines the scenario for which the service definition in question is intended. The effect is that stricter syntax checks are applied.

Currently, the following provider contracts are available:

-   INA
    
    Switches on syntax checks that are needed if the service definition is published with the [Information Access (InA) protocol](javascript:call_link\('abenina_protocol_glosry.htm'\) "Glossary Entry"). When this provider contract is specified, the following additional rules apply:
    
    -   The CDS entities exposed must be analytical queries. Two kinds of analytical query are acceptable:
        
        Analytical queries with the annotation @Analytics.query set to true
        
        [CDS projection views with the provider contract analytical\_query](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry").
        
    -   If the exposed CDS entity is an analytical query with the annotation @Analytics.query: true, exactly one entity must be exposed. Otherwise, a syntax check error occurs.
    -   If the exposed CDS entity is a CDS projection view with the provider contract analytical\_query, then multiple entities can be exposed.
-   SQL
    
    Switches on syntax checks that are needed if the service definition is published with the service binding type SQL. The same checks are performed as for service bindings of type SQL. The checks are documented on SAP Help Portal in the Developer Extensibility Guide, topic [Constraints](https://help.sap.com/docs/SAP_S4HANA_CLOUD/6aa39f1ac05441e5a23f484f31e477e7/4082fe1b66164eeb8aa41192166526af).
    

Exactly one provider contract can be specified in a CDS service definition. Changing the value defined after PROVIDER CONTRACTS is possible, even after activation and transport of the respective service definition, as long as the corresponding service binding is not affected.

Use Case

A provider contract is a prerequisite for releasing a CDS service definition under the [C0 contract, extend](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). It enforces strict rules that match the rules of a type of [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry"). This ensures stability of [business services](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") and prevents service definition extensions from causing errors in the associated service bindings.

Related Information

-   [C0 Contract Rules for CDS Service Definitions](javascript:call_link\('abenc0_contract_rules_sd.htm'\))

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



**📖 Source**: [abensrvd_provider_contract.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_provider_contract.htm)

### abensrvd_define_service.htm

> **📖 Official SAP Documentation**: [abensrvd_define_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20DEFINE%20SERVICE%2C%20ABENSRVD_DEFINE_SERVICE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - DEFINE SERVICE

Syntax

*\[*[@service\_annot1](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
*\[*[@service\_annot2](javascript:call_link\('abencds_define_service_annos.htm'\))*\]*
  ...
*\[*DEFINE*\]* SERVICE service
*\[* [PROVIDER CONTRACTS contract](javascript:call_link\('abensrvd_provider_contract.htm'\))*\]*
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

The optional addition [PROVIDER CONTRACTS](javascript:call_link\('abensrvd_provider_contract.htm'\)) can be used to define a provider contract contract for the service definition in question. A provider contract defines the scenario for which the service definition in question is intended. It is a prerequisite for releasing the service definition in question under the C0 release contract for extensibility. For further details, see topic [C0 Contract Rules for CDS Service Definitions](javascript:call_link\('abenc0_contract_rules_sd.htm'\)).

Hints

-   If a service definition exposes multiple CDS entities, these entities should be related semantically. For example, if a CDS view with CDS associations is exposed in a service definition, it is recommended that the association targets of each CDS association are exposed as well. Together with the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") all other CDS entities of the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") should also be exposed.
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
[CDS SDL - PROVIDER CONTRACTS](javascript:call_link\('abensrvd_provider_contract.htm'\))



**📖 Source**: [abensrvd_define_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_define_service.htm)

### abensrvd_extend_service.htm

> **📖 Official SAP Documentation**: [abensrvd_extend_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_extend_service.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - SDL for Service Definitions](javascript:call_link\('abencds_f1_sdl_syntax.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20SDL%20-%20EXTEND%20SERVICE%2C%20ABENSRVD_EXTEND_SERVICE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS SDL - EXTEND SERVICE

Syntax

EXTEND SERVICE name
  WITH
{
   EXPOSE cds\_entity1 *\[*AS alias1*\]*;
  *\[*EXPOSE cds\_entity2 *\[*AS alias2*\]*;
   ...*\]*
}

Effect

Extends an existing [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") name using a [CDS service definition extension](javascript:call_link\('abencds_service_def_ext_glosry.htm'\) "Glossary Entry") in the [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"). An existing CDS service definition can have one or more CDS service definition extensions.

Prerequisite

As a prerequisite for service definition extensions, the service definition to be extended must explicitly allow extensions. The annotation [@AbapCatalog.extensibility.extensible](javascript:call_link\('abencds_define_service_annos.htm'\)) must be set to true.

Rules for a Service Definition Extension

Service definition extensions can make additions to the original service definition, but they cannot modify, overwrite, or delete elements from it. The following rules apply:

-   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity1, cds\_entity2, ... can be exposed using the keyword EXPOSE. The same rules apply as to the original service definition, see topic [CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\)).
-   Each exposed entity must have a unique name across the original service definition and all existing extensions. In case of naming conflicts, an alternative element alias1 must be assigned using the addition AS.
-   The exposed entities cds\_entity1, cds\_entity2, ... can be entities from the original data model or extension entities. The names of the exposed entities must comply with the [namespace](javascript:call_link\('abennamespace_glosry.htm'\) "Glossary Entry") of the service definition extension. For example, if the name of a service definition extension starts with a Z, each exposed entity must also have a name that starts with Z. This can also be achieved by assigning an alias name with the addition AS.
-   If exposed, each entity should be exposed only once in a service definition and any of its extensions. Even if a new alias name is assigned, a syntax check warning occurs if an entity is exposed more than once.

Restrictions

-   CDS service definition extensions themselves cannot be extended.
-   [Service definition annotations](javascript:call_link\('abencds_define_service_annos.htm'\)) are not supported. That means that no annotations are allowed in front of the statement EXTEND SERVICE.

Example

The following CDS service definition extension

extend service DEMO\_CDS\_ORIGINAL\_SD with {
  expose DEMO\_RAP\_EXTENSIBLE\_EXT;
}

adds one further entity to the service definition

@EndUserText.label: 'CDS service definition for extension'
@AbapCatalog.extensibility.extensible: true
define service DEMO\_CDS\_ORIGINAL\_SD {
  expose DEMO\_RAP\_EXTENSIBLE\_ROOT;
}



**📖 Source**: [abensrvd_extend_service.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensrvd_extend_service.htm)

### abencds_f1_sdl_syntax.htm

> **📖 Official SAP Documentation**: [abencds_f1_sdl_syntax.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20SDL%20for%20Service%20Definitions%2C%20ABENCDS_F1_SDL_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

ABAP CDS - SDL for Service Definitions

A [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in ABAP CDS is created using the data definition language [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry") in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry"). CDS SDL complies with the [general CDS syntax rules](javascript:call_link\('abencds_general_syntax_rules.htm'\)) and contains the following language element for service definitions:

-   [DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))

Hints

-   The [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry") of service definitions has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there.
-   SDL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Continue
[CDS SDL - DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))
[CDS SDL - EXTEND SERVICE](javascript:call_link\('abensrvd_extend_service.htm'\))



**📖 Source**: [abencds_f1_sdl_syntax.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_sdl_syntax.htm)

### abenservice_bindings_abexas.htm

> **📖 Official SAP Documentation**: [abenservice_bindings_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_bindings_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%2C%20ABENSERVICE_BINDINGS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP CDS - Consuming Business Services

-   [ABAP CDS - Consuming Business Services with Demo Class](javascript:call_link\('abenconsume_bs_abexa.htm'\))
-   [ABAP CDS - Consuming Business Services with OData Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ABAP CDS - Consuming Business Services with Demo Class](javascript:call_link\('abenconsume_bs_abexa.htm'\))
![Example](exa.gif "Example") [ABAP CDS - Consuming Business Services with OData Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))



**📖 Source**: [abenservice_bindings_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_bindings_abexas.htm)

### abenconsume_bs_abexa.htm

> **📖 Official SAP Documentation**: [abenconsume_bs_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%20with%20Demo%20Class%2C%20ABENCONSUME_BS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

ABAP CDS - Consuming Business Services with Demo Class

This example demonstrates how the OData data of business services can be consumed in ABAP with a demonstration class.

Source Code   

\* Public class definition
CLASS cl\_demo\_consume\_bs\_simple DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_consume\_bs\_simple IMPLEMENTATION.
  METHOD main.
    DATA(service\_binding) = \`demo\_sb\_scarr\_spfli\`.
    DATA(entity)          = \`demo\_cds\_scarr\_spfli\`.
    DATA(limit)           =  50.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = service\_binding
       )->add\_field( CHANGING field = entity
       )->add\_field( CHANGING field = limit
       )->request( ).
    IF limit < 1 OR limit > 1000.
      out->write( 'Enter a number between 1 and 1000' ).
      RETURN.
    ENDIF.
    TRY.
        cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab(
          EXPORTING
            entity          = entity
            limit           = limit
          IMPORTING
            itab            = FINAL(itab) ).
      CATCH cx\_demo\_bs\_consumption INTO FINAL(exc).
        out->write\_text( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( itab->\* ).
  ENDMETHOD.
ENDCLASS.

Description   

Business services are designed mainly for accessing AS ABAP from outside, however for demonstration purposes here, an ICF client implemented in ABAP is used to read the ICF nodes of business services. The ICF client is implemented in the class CL\_DEMO\_BS\_CONSUMPTION that offers some methods for examining the OData data of [service bindings](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry") whose names are passed by parameter:

-   Several methods are available for reading URLs for use in browsers.
-   One method reads the non-handled OData data in XML or JSON format.
-   One method extracts important metadata to internal tables.
-   One method extracts the actual data to internal tables.

The class CL\_DEMO\_CONSUME\_BS\_SIMPLE shown above uses the class to extract the data of individual CDS entities exposed in service definitions to internal tables and display it. The class CL\_DEMO\_BS\_SIMPLE\_URL displays a URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

Further example classes are:

-   CL\_DEMO\_BS\_URLS gets the URLs of service bindings.
-   CL\_DEMO\_BS\_ODATA gets the unhandled OData data of service bindings.
-   CL\_DEMO\_BS\_META\_DATA gets important metadata as the content of internal tables.
-   CL\_DEMO\_CONSUME\_BS\_WITH\_PARAMS demonstrates parameter passing to exposed CDS entities with input parameters.
-   CL\_DEMO\_CONSUME\_BS\_WITH\_ASSOCS demonstrates how paths are specified for exposed CDS entities joined using associations.

The defaults for the input parameters of the class access service definitions and service bindings that were created for these demonstrations. These service bindings use the OData protocol (version 2) for [Web APIs](javascript:call_link\('abenweb_api_glosry.htm'\) "Glossary Entry").

Hint

See also [Consuming Business Services with Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))



**📖 Source**: [abenconsume_bs_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_abexa.htm)

### abenconsume_bs_client_proxy_abexa.htm

> **📖 Official SAP Documentation**: [abenconsume_bs_client_proxy_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_client_proxy_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) →  [ABAP CDS - Consuming Business Services](javascript:call_link\('abenservice_bindings_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%20with%20OData%20Client%20Proxy%2C%20ABENCONSUME_BS_CLIENT_PROXY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - Consuming Business Services with OData Client Proxy

This example demonstrates how the OData data of business services can be consumed in ABAP using an OData Client Proxy.

Source Code   

\* Public class definition
CLASS cl\_demo\_consume\_bs\_clnt\_proxy DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_consume\_bs\_clnt\_proxy IMPLEMENTATION.
  METHOD main.
    DATA scarr\_spfli TYPE STANDARD TABLE OF demo\_cds\_scarr\_spfli
                     WITH EMPTY KEY.
    TRY.
        /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy(
          VALUE #( service\_id      = 'demo\_sb\_scarr\_spfli'
                   service\_version = '0001' )
           )->create\_resource\_for\_entity\_set( 'demo\_cds\_scarr\_spfli'
           )->create\_request\_for\_read(
           )->execute(
           )->get\_business\_data(
                IMPORTING et\_business\_data = scarr\_spfli ).
        out->write( scarr\_spfli ).
      CATCH /iwbep/cx\_gateway INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Methods of the [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry") framework are used to create a local [OData Client Proxy](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) and to retrieve the data exposed by a CDS service binding DEMO\_SB\_SCARR\_SPFLI. The service binding provides the following service definition:

@EndUserText.label: 'Expose demo\_cds\_scarr\_spfli'
define service demo\_sd\_scarr\_spfli {
  expose demo\_cds\_scarr\_spfli;
}

This service definition exposes the following CDS view entity:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_scarr\_spfli(
    id,
    carrier,
    flight,
    departure,
    destination
  )
  as select from spfli
    join         scarr on scarr.carrid = spfli.carrid
{
  key spfli.carrid,
  key scarr.carrname,
  key spfli.connid,
      spfli.cityfrom,
      spfli.cityto
}

The data provided by that view are retrieved.



**📖 Source**: [abenconsume_bs_client_proxy_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconsume_bs_client_proxy_abexa.htm)

### abenservice_bindings_abexas.htm

> **📖 Official SAP Documentation**: [abenservice_bindings_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_bindings_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenservice_bindings_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenservice_bindings_abexas.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Service Definitions](javascript:call_link\('abencds_service_definitions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Consuming%20Business%20Services%2C%20ABENSERVICE_BINDINGS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP CDS - Consuming Business Services

-   [ABAP CDS - Consuming Business Services with Demo Class](javascript:call_link\('abenconsume_bs_abexa.htm'\))
-   [ABAP CDS - Consuming Business Services with OData Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ABAP CDS - Consuming Business Services with Demo Class](javascript:call_link\('abenconsume_bs_abexa.htm'\))
![Example](exa.gif "Example") [ABAP CDS - Consuming Business Services with OData Client Proxy](javascript:call_link\('abenconsume_bs_client_proxy_abexa.htm'\))
