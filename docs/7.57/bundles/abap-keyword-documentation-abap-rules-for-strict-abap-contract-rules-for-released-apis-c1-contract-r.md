# ABAP - Keyword Documentation / ABAP - Rules for Strict ABAP / Contract Rules for Released APIs / C1 Contract Rules

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenc1_contract_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_rules.htm)
- [abenc1_provider_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)
- [abenc1_provider_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_elem.htm)
- [abenc1_provider_rules_ddic.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_ddic.htm)
- [abenc1_provider_rules_cds.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_cds.htm)
- [abenc1_provider_rules_abap.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_abap.htm)
- [abenc1_consumer_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)
- [abenc1_consumer_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_elem.htm)
- [abenc1_consumer_rules_struct.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_struct.htm)
- [abenc1_demo_1.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_demo_1.htm)

**Bundle Contains**: 10 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.290Z

---

### abenc1_contract_rules.htm

> **📖 Official SAP Documentation**: [abenc1_contract_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules, ABENC1_CONTRACT_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

C1 Contract Rules

In [strict ABAP development environments](javascript:call_link\('abenstrict_abap_dev_envir_glosry.htm'\) "Glossary Entry"), a [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") must be used, where access to [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is restricted to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").

The [C1 contract](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry") is the [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry") that is crucial for system-internal access to APIs from other repository objects. It guarantees stable APIs for use within the same [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\))
-   [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\))

Continue
[C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\))
[C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\))



**📖 Source**: [abenc1_contract_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_rules.htm)

### abenc1_provider_rules.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for API Providers, ABENC1_PROVIDER_RULES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [C1 Contract Rules for Providing Elementary Data Types](javascript:call_link\('abenc1_provider_rules_elem.htm'\))
-   [C1 Contract Rules for Providing Dictionary Objects](javascript:call_link\('abenc1_provider_rules_ddic.htm'\))
-   [C1 Contract Rules for Providing CDS Entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\))
-   [C1 Contract Rules for Providing Objects Implemented in ABAP](javascript:call_link\('abenc1_provider_rules_abap.htm'\))

Continue
[C1 Contract Rules for Providing Elementary Data Types](javascript:call_link\('abenc1_provider_rules_elem.htm'\))
[C1 Contract Rules for Providing Dictionary Objects](javascript:call_link\('abenc1_provider_rules_ddic.htm'\))
[C1 Contract Rules for Providing CDS Entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\))
[C1 Contract Rules for Providing Objects Implemented in ABAP](javascript:call_link\('abenc1_provider_rules_abap.htm'\))



**📖 Source**: [abenc1_provider_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)

### abenc1_provider_rules_elem.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_elem.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Elementary Data Types, ABENC1_PROVIDER_RULES_ELEM, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Elementary Data Types

Elementary data types can be released as follows:

-   In ABAP Dictionary and ABAP CDS based on [DDIC built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\))
    -   Standalone as DDIC domains or data elements
    -   Component types of DDIC structures or database tables
    -   Element types of CDS entities
-   In ABAP language based on [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\))
    -   Public types of global classes or interfaces
    -   Types of interface parameters of methods, events and function modules

A provider of an elementary type must obey the following rules:

-   The built-in data type must not be changed with the following exceptions:
    
    -   [DDIC built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) INT1, INT2, and INT4
    -   [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, and i
    
    Those may be replaced by an integer type with a larger value range.
    
-   The length must not be changed with the following exceptions:
    
    -   DDIC built-in data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP types c and p
    
    The length must not be decreased.
    
-   The number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") must not be changed with the following exceptions:
    
    -   DDIC built-in data types DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP type p
    
    The number of decimal places must not be decreased.



**📖 Source**: [abenc1_provider_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_elem.htm)

### abenc1_provider_rules_ddic.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules_ddic.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_ddic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Dictionary Objects, ABENC1_PROVIDER_RULES_DDIC, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Dictionary Objects

A provider of DDIC objects must obey the following rules:

-   [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry")
    
    Changes to domains must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)). Furthermore, changes to the following [semantic properties](javascript:call_link\('abenddic_domains_sema.htm'\)) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion routine must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry")
    
    Changes to data elements must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
    
-   [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes to existing components are allowed for elementary components only and must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry")
    
    The same rules apply to DDIC database tables as to DDIC structures.
    
-   [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.



**📖 Source**: [abenc1_provider_rules_ddic.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_ddic.htm)

### abenc1_provider_rules_cds.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules_cds.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_cds.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing CDS Entities, ABENC1_PROVIDER_RULES_CDS, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing CDS Entities

A provider of ABAP CDS objects must obey the following rules:

-   [CDS Entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
    -   Only [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can be released with a C1 contract.
    -   The usage of upper and lower case in the name of an entity, its associations, elements or parameters must not be changed.
    -   The client handling must not be changed.
    -   Being a root entity of a RAP BO cannot be undone.
    -   Only annotations can be used that are allowed by the annotation [@CompatibilityContract.rc.usageAllowed](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in their definition. Changes to annotations are also governed by its definition.
    -   Parameters must not be removed from or added to the parameter interface.
    -   Associations to a released target data source must not be removed and the target data source must not be exchanged.
    -   No implicit SELECT list \* is allowed.
    -   Only positions of non-key elements can be changed if allowed by the data category.
    -   Only non-key elements can be added.
    -   Changes to the elementary data types of elements and parameters are allowed but must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
-   [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry")
    -   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
    -   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
    -   Parameters and results of actions and functions must be DDIC data elements or CDS entities.



**📖 Source**: [abenc1_provider_rules_cds.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_cds.htm)

### abenc1_provider_rules_abap.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules_abap.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_abap.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Providing Objects Implemented in ABAP, ABENC1_PROVIDER_RULES_AB
AP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Providing Objects Implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") and [Interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the [rules for elementary data types](javascript:call_link\('abenc1_provider_rules_elem.htm'\)).
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [Function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.



**📖 Source**: [abenc1_provider_rules_abap.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules_abap.htm)

### abenc1_provider_rules.htm

> **📖 Official SAP Documentation**: [abenc1_provider_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for API Providers, ABENC1_PROVIDER_RULES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [C1 Contract Rules for Providing Elementary Data Types](javascript:call_link\('abenc1_provider_rules_elem.htm'\))
-   [C1 Contract Rules for Providing Dictionary Objects](javascript:call_link\('abenc1_provider_rules_ddic.htm'\))
-   [C1 Contract Rules for Providing CDS Entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\))
-   [C1 Contract Rules for Providing Objects Implemented in ABAP](javascript:call_link\('abenc1_provider_rules_abap.htm'\))

Continue
[C1 Contract Rules for Providing Elementary Data Types](javascript:call_link\('abenc1_provider_rules_elem.htm'\))
[C1 Contract Rules for Providing Dictionary Objects](javascript:call_link\('abenc1_provider_rules_ddic.htm'\))
[C1 Contract Rules for Providing CDS Entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\))
[C1 Contract Rules for Providing Objects Implemented in ABAP](javascript:call_link\('abenc1_provider_rules_abap.htm'\))



**📖 Source**: [abenc1_provider_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_provider_rules.htm)

### abenc1_consumer_rules.htm

> **📖 Official SAP Documentation**: [abenc1_consumer_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for API Consumers, ABENC1_CONSUMER_RULES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for API Consumers

The [provider rules](javascript:call_link\('abenc1_provider_rules.htm'\)) for objects with a C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   [C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
-   [C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
-   [Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))

Continue
[C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
[C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
[Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))



**📖 Source**: [abenc1_consumer_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)

### abenc1_consumer_rules_elem.htm

> **📖 Official SAP Documentation**: [abenc1_consumer_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_elem.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Consuming Elementary Types, ABENC1_CONSUMER_RULES_ELEM, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Consuming Elementary Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

are [allowed to be changed](javascript:call_link\('abenc1_provider_rules_elem.htm'\)) as follows:

-   Integer types INT1, INT2, and INT4 or b, s, and i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

-   [Operations with Elementary Data Objects](#abenc1-consumer-rules-elem-1-------operations-with-structures---@ITOC@@ABENC1_CONSUMER_RULES_ELEM_2)

Operations with Elementary Data Objects   

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))
    -   [Host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) in read positions of ABAP SQL.

Mitigation

When declaring data objects, always refer to the released data types themselves. Do not refer to self defined types. Use data objects referring to released types only at operand positions where changing the type cannot produce an error.

Operations with Structures   

Changing the data type of a component of a structure changes the [technical type](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.



**📖 Source**: [abenc1_consumer_rules_elem.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_elem.htm)

### abenc1_consumer_rules_struct.htm

> **📖 Official SAP Documentation**: [abenc1_consumer_rules_struct.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_struct.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for Consuming Structures, ABENC1_CONSUMER_RULES_STRUCT, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for Consuming Structures

Non-key elements can be added to or changed in global types as structured [DDIC types](javascript:call_link\('abenc1_provider_rules_ddic.htm'\)) or [CDS entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\)). These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

-   [Includes](#abenc1-consumer-rules-struct-1-------assignments-and-comparisons---@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_2)
-   [Unstructured Access](#abenc1-consumer-rules-struct-3-------field-symbols---@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_4)
-   [RFC](#abenc1-consumer-rules-struct-5---includes-----including-a-released-structure-into-another-structure---possible-problems--error--when-a-component-is-added-that-already-exists---mitigation--include-a-released-structure-only-by-renaming-its-components-with--suffixes--javascript-call-link---abenddic-include-structure-htm-------assignments-and-comparisons-----assignments-and-comparisons-between-data-objects-that-are-typed-with-the-released-structured-type-and-data-objects-that-are-typed-otherwise-can-occur-for--------logical-expressions--javascript-call-link---abenlogexp-htm----------assignments--javascript-call-link---abenvalue-assignments-htm----------working-with-internal-tables--javascript-call-link---abenitab-htm----------abap-sql--javascript-call-link---abenabap-sql-htm----------working-with-data-clusters--javascript-call-link---abendata-cluster-htm------possible-problems--depending-on-the-change-all-kinds-of-errors-might-occur--the-following-allowed-changes-in-particular-can-affect-the-rules-for-processing-structures-fundamentally-------adding-numeric-components-to-a-formerly-character-like-structure------adding--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---components-to-a-formerly--flat--javascript-call-link---abenflat-glosry-htm-----glossary-entry---structure------shifting-the-positions-of-numeric-or-deep-components-to-formerly-character-like-sections---mitigation--no-assignments-or-comparisons-between-released-structures-and-data-objects-that-are-typed-otherwise--no-usage-of-otherwise-defined-structures-in-abap-sql--the-various-corresponding-mechanisms-can-be-used-to-mitigate-the-problem--but-they-are-not-failsafe-in-all-situations---unstructured-access-----processing-the-content-of-a-released-structure-without-addressing-single-components-as-for-example--------offset-length-specifications--javascript-call-link---abenoffset-length-htm----------string-processing--javascript-call-link---abenabap-data-string-htm------on-complete-structure---possible-problems--depending-on-the-change--see-above--all-kinds-of-errors-might-occur---mitigation--no-processing-of-released-structures-without-accessing-single-components---field-symbols-----addressing-released-structures-with--field-symbols--javascript-call-link---abenfield-symbol-glosry-htm-----glossary-entry---by-using--------assign--javascript-call-link---abapassign-htm---------assigning-addition-when--working-with-internal-tables--javascript-call-link---abenitab-htm------possible-problems--when-the-addition--casting--abapassign-casting-htm--abap-alternative-22@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC   

Passing released structures to remote [RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.



**📖 Source**: [abenc1_consumer_rules_struct.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules_struct.htm)

### abenc1_demo_1.htm

> **📖 Official SAP Documentation**: [abenc1_demo_1.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_demo_1.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: Consumption of APIs with C1 Contract, ABENC1_DEMO_1, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: Consumption of APIs with C1 Contract

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If [changes allowed by C1 contract](javascript:call_link\('abenc1_provider_rules.htm'\)) are applied to the pseudo external types, syntax errors and exceptions occur.

\*Pseudo DDIC types
TYPES:
  ddic\_de\_i TYPE i,
  ddic\_de\_c TYPE c LENGTH 3,
  BEGIN OF ddic\_struc,
    text TYPE ddic\_de\_c,
    int  TYPE ddic\_de\_i,
  END OF ddic\_struc.
DATA ddic\_dbtab TYPE HASHED TABLE OF ddic\_struc WITH UNIQUE key text.
\*Consumer Code
DATA int TYPE ddic\_de\_i.
"Exception when DDIC\_DE\_I is changed to int8
"and int exceeds value range of i
DO int TIMES.
  ...
ENDDO.
"Syntax error when DDDIC\_DE\_I is changed to int8
DATA dref TYPE REF TO i.
dref = REF #( int ).
"Syntax error when DDIC\_DE\_I is changed to int8
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
INSERT int INTO TABLE itab.
DATA char TYPE ddic\_de\_c.
"Exception when length of DDIC\_DE\_C is increased
"and char contains more than three relevant characters
SELECT carrname
       FROM scarr
       WHERE carrid = @char
       INTO TABLE @FINAL(result).
DATA:
  struc1 TYPE ddic\_struc,
  BEGIN OF struc2,
    text TYPE c LENGTH 3,
    int  TYPE i,
  END OF struc2.
"Syntax errors when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
struc1 = struc2.
IF struc1 = struc2.
  ...
ENDIF.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
FIELD-SYMBOLS <fs> TYPE ddic\_struc.
ASSIGN struc2 TO <fs> CASTING.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
SELECT single \*
       from @ddic\_dbtab as dbtab
       into @struc2.



**📖 Source**: [abenc1_demo_1.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_demo_1.htm)

### abenc1_consumer_rules.htm

> **📖 Official SAP Documentation**: [abenc1_consumer_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenc1_consumer_rules.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_consumer_rules.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C1 Contract Rules for API Consumers, ABENC1_CONSUMER_RULES, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C1 Contract Rules for API Consumers

The [provider rules](javascript:call_link\('abenc1_provider_rules.htm'\)) for objects with a C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   [C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
-   [C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
-   [Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))

Continue
[C1 Contract Rules for Consuming Elementary Types](javascript:call_link\('abenc1_consumer_rules_elem.htm'\))
[C1 Contract Rules for Consuming Structures](javascript:call_link\('abenc1_consumer_rules_struct.htm'\))
[Example: Consumption of APIs with C1 Contract](javascript:call_link\('abenc1_demo_1.htm'\))
