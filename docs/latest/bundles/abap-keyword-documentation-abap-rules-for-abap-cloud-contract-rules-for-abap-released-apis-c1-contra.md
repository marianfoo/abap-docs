# ABAP - Keyword Documentation / ABAP - Rules for ABAP Cloud / Contract Rules for ABAP Released APIs / C1 Contract Rules

Included pages: 15


### abenc1_contract_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%2C%20ABENC1_CONTRACT_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules

In [ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cloud_glosry.htm "Glossary Entry"), the language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry") must be used, where access to [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted to [released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreleased_api_glosry.htm "Glossary Entry").

The [C1 contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for system-internal access to APIs from other repository objects. It guarantees stable APIs for use within the same [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry"). The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm)
-   [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm)

Continue
[C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm)
[C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm)


### abenc1_provider_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20API%20Providers%2C%20ABENC1_PROVIDER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [C1 Contract Rules for Providing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm)
-   [C1 Contract Rules for Providing Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm)
-   [C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_type.htm)
-   [C1 Contract Rules for Providing CDS Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_func.htm)
-   [C1 Contract Rules for Providing CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm)
-   [C1 Contract Rules for Providing RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_rap.htm)
-   [C1 Contract Rules for Providing Objects Implemented in ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_abap.htm)

Continue
[C1 Contract Rules for Providing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm)
[C1 Contract Rules for Providing Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm)
[C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_type.htm)
[C1 Contract Rules for Providing CDS Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_func.htm)
[C1 Contract Rules for Providing CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm)
[C1 Contract Rules for Providing RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_rap.htm)
[C1 Contract Rules for Providing Objects Implemented in ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_abap.htm)


### abenc1_provider_rules_elem.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Elementary%20Data%20Types%2C%20ABENC1_PROVIDER_RULES_ELEM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

C1 Contract Rules for Providing Elementary Data Types

Elementary data types can be released as follows:

-   In ABAP Dictionary and ABAP CDS based on [DDIC built-in data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   Standalone as DDIC domains or data elements
    -   Component types of DDIC structures or database tables
    -   Element types of CDS entities
-   In ABAP language based on [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm)
    -   Public types of global classes or interfaces
    -   Types of interface parameters of methods, events and function modules

A provider of an elementary type must obey the following rules:

-   The built-in data type must not be changed with the following exceptions:
    
    -   [DDIC built-in data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) INT1, INT2, and INT4
    -   [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) b, s, and i
    
    Those may be replaced by an integer type with a larger value range.
    
-   The length must not be changed with the following exceptions:
    
    -   DDIC built-in data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP types c and p
    
    The length must not be decreased.
    
-   The number of [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_place_glosry.htm "Glossary Entry") must not be changed with the following exceptions:
    
    -   DDIC built-in data types DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP type p
    
    The number of decimal places must not be decreased.


### abenc1_provider_rules_ddic.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Dictionary%20Objects%2C%20ABENC1_PROVIDER_RULES_DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

C1 Contract Rules for Providing Dictionary Objects

A provider of DDIC objects must obey the following rules:

-   [DDIC domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry")
    
    Changes to domains must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm). Furthermore, changes to the following [semantic properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion exit must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry")
    
    Changes to data elements must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm).
    
-   [DDIC table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structure_glosry.htm "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes to existing components are allowed for elementary components only and must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm).
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry")
    
    The same rules apply to DDIC database tables as to DDIC structures.
    
-   [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.


### abenc1_provider_rules_cds_type.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Types%2C%20ABENC1_PROVIDER_RULES_CDS_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

C1 Contract Rules for Providing CDS Types

A provider of [CDS user-defined types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry") must obey the following rules:

-   The data type must not be changed.
-   The length must not be changed.
-   The number of decimal places must not be changed.
-   The conversion exit must not be changed.
-   The setting for lowercase letters must not be changed.
-   The type of the user-defined type must not be changed. That means that a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") must not be changed into a [CDS enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_type_glosry.htm "Glossary Entry") and vice versa.

The following additional rules apply to CDS enumerated types:

-   The enumerated constants must not be deleted or renamed.
-   The enumerated values must not be changed.
-   If an enumerated type is defined with reference to another enumerated type, the underlying type must remain stable with regard to the enumerated constants and enumerated values.
    
    Example: DEFINE TYPE EnumTypeStack : EnumTypeBase
    
    If EnumTypeStack is released with the C1 contract, the enumerated constants of EnumTypeBase must remain stable.
    

The following changes are allowed for user-defined types that are released with the C1 contract:

-   If a CDS simple type is typed using a DDIC data element, the data element can be replaced as long as the data type, length, and number of decimal places remain stable.
-   Adding or removing annotations is allowed as long as the stability requirements mentioned above are not affected. For example:
    -   If a CDS simple type is typed using a data element with conversion exit or the Lowercase Letters property, the data element can be replaced by a simple type and the annotations AbapCatalog.typeSpec.conversionExit and ObjectModel.upperCase.
    -   If a CDS simple type is typed using another CDS simple type, the underlying simple type can be replaced by a DDIC data element and the annotations that are part of the semantic properties of the data element can be removed from the simple type. For example, the annotations AbapCatalog.typeSpec.conversionExit and ObjectModel.upperCase can be replaced by semantic properties of a data element.
-   Adding enumerated constants to a CDS enumerated type is allowed.
-   Changing the sequence of enumerated constants of a CDS enumerated type is allowed.


### abenc1_provider_rules_cds_func.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Scalar%20Functions%2C%20ABENC1_PROVIDER_RULES_CDS_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

C1 Contract Rules for Providing CDS Scalar Functions

A provider of a [CDS scalar function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") must obey the following rules:

-   [CDS Scalar Function Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfd_glosry.htm "Glossary Entry")
    
    Before release
    
    -   If a parameter of a scalar function definition is typed using a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") or a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry"), the respective DDIC data element or CDS simple type must be classified with the C1 contract.
    
    After release:
    
    -   The name of the scalar function definition must not be changed.
    -   The parameter interface must remain stable. This means that parameters must not be added or removed, parameter names must not be changed and their order must not be changed. The data types of parameters must not be changed incompatibly. In particular, the following rules apply:
        
        \- The typing of an input parameter or of the return parameter can be changed under the condition that the data type remains the same. For example, a built-in ABAP Dictionary data type can be changed into a CDS simple type of the same data type.
        
        \- The typing of an input parameter can be changed from a built-in data type into a generic data type under the condition that the scope of the generic data type includes the original built-in data type. The other way around, from a generic data type to a built-in data type, is not allowed.
        
-   [CDS scalar function implementation reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dsfi_glosry.htm "Glossary Entry")
    
    Before release:
    
    -   The scalar function definition to which the implementation reference refers must be classified with the C1 contract.
    -   The [AMDP function implementation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_method_glosry.htm "Glossary Entry") that implements the scalar function in question must exist.
    
    After release:
    
    -   The name of the scalar function implementation reference must not be changed.
    -   The type of implementation, that is, the runtime environment to which the scalar function in question is bound, must not be changed.


### abenc1_provider_rules_cds.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Entities%2C%20ABENC1_PROVIDER_RULES_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

C1 Contract Rules for Providing CDS Entities

A provider of ABAP CDS objects must obey the following rules:

-   [CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry")
    -   Only [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") and [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") can be released with a C1 contract.
    -   The usage of upper and lower case in the name of an entity, its associations, elements or parameters must not be changed.
    -   The client handling must not be changed.
    -   Being a [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") of a RAP BO cannot be undone.
    -   Only annotations can be used that are allowed by the annotation [@CompatibilityContract.rc.usageAllowed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm) in their definition. Changes to annotations are also governed by its definition.
    -   Parameters must not be removed from or added to the parameter interface.
    -   Associations to a released target data source must not be removed and the target data source must not be exchanged.
    -   No implicit SELECT list \* is allowed.
    -   Only positions of non-key elements can be changed if allowed by the data category.
    -   Only non-key elements can be added.
    -   Changes to the elementary data types of elements and parameters are allowed but must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm).


### abenc1_provider_rules_rap.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20RAP%20Behavior%20Definitions%2C%20ABENC1_PROVIDER_RULES_RAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

C1 Contract Rules for Providing RAP Behavior Definitions

A provider of [RAP behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") must obey the following rules:

-   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
-   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
-   Parameters and results of actions and functions must be DDIC data elements or CDS entities.


### abenc1_provider_rules_abap.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20Objects%20Implemented%20in%20ABAP%2C%20ABENC1_PROVIDER_RULES_ABAP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C1 Contract Rules for Providing Objects Implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_glosry.htm "Glossary Entry") and [Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoo_intf_glosry.htm "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the [rules for elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm).
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Interface methods cannot be added without defining a [default behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_default.htm).
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [AMDP classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry")
    
    AMDP classes are classes that implement the [tag interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_AMDP\_MARKER\_HDB. AMDP classes must obey the general rules for classes listed above and the following special rules:
    
    -   Optional parameters must not be added to methods.
    -   The order of parameters must not be changed.
    -   The property READ-ONLY must not be removed. It can be specified either in the method declaration with the addition [AMDP OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) or in the method implementation with the addition [OPTIONS READ-ONLY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm). It must not be fully removed, but it can be moved from the method declaration to the method implementation or vice versa.
    -   The option [CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be added or removed.
    -   The addition [CDS SESSION CLIENT CURRENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be changed to [CDS SESSION CLIENT clnt](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm).
    -   The option [CLIENT INDEPENDENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) must not be removed.
    -   The addition [FOR DDL OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods_for_ddl_object.htm) must not be added or removed.
    -   The method implementation must not be changed from an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") to an ABAP method.
    -   The implementation language, specified using the addition [LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod_by_db_proc.htm), must not be changed.
    -   An AMDP method can be an [AMDP procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"), an [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry"), or a [graph workspace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengraph_workspace_glosry.htm "Glossary Entry"). The type of method must not be changed.
-   [Function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.


### abenc1_provider_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20API%20Providers%2C%20ABENC1_PROVIDER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [C1 Contract Rules for Providing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm)
-   [C1 Contract Rules for Providing Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm)
-   [C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_type.htm)
-   [C1 Contract Rules for Providing CDS Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_func.htm)
-   [C1 Contract Rules for Providing CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm)
-   [C1 Contract Rules for Providing RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_rap.htm)
-   [C1 Contract Rules for Providing Objects Implemented in ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_abap.htm)

Continue
[C1 Contract Rules for Providing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm)
[C1 Contract Rules for Providing Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm)
[C1 Contract Rules for Providing CDS Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_type.htm)
[C1 Contract Rules for Providing CDS Scalar Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds_func.htm)
[C1 Contract Rules for Providing CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm)
[C1 Contract Rules for Providing RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_rap.htm)
[C1 Contract Rules for Providing Objects Implemented in ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_abap.htm)


### abenc1_consumer_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20API%20Consumers%2C%20ABENC1_CONSUMER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules for API Consumers

The [provider rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) for objects with a C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   [C1 Contract Rules for Consuming Elementary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_elem.htm)
-   [C1 Contract Rules for Consuming Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_struct.htm)
-   [Example: Consumption of APIs with C1 Contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_demo_1.htm)

Continue
[C1 Contract Rules for Consuming Elementary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_elem.htm)
[C1 Contract Rules for Consuming Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_struct.htm)
[Example: Consumption of APIs with C1 Contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_demo_1.htm)


### abenc1_consumer_rules_elem.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Elementary%20Types%2C%20ABENC1_CONSUMER_RULES_ELEM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

C1 Contract Rules for Consuming Elementary Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

are [allowed to be changed by the API provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_elem.htm) as follows:

-   Integer types INT1, INT2, and INT4 or b, s, and i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

-   [Operations with Elementary Data Objects](#@@ITOC@@ABENC1_CONSUMER_RULES_ELEM_1)
-   [Operations with Structures](#@@ITOC@@ABENC1_CONSUMER_RULES_ELEM_2)

Operations with Elementary Data Objects   

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless operator EXACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_exact.htm)
    -   [Host variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) in read positions of ABAP SQL.

Mitigation

When declaring data objects, always refer to the released data types themselves. Do not refer to user-defined types. Use data objects referring to released types only at operand positions where changing the type cannot produce an error.

Operations with Structures   

Changing the data type of a component of a structure changes the [technical type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.


### abenc1_consumer_rules_struct.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Structures%2C%20ABENC1_CONSUMER_RULES_STRUCT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

C1 Contract Rules for Consuming Structures

API providers can add or change non-key elements in global types as structured [DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm) or [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm). These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

-   [Includes](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_1)
-   [Assignments and Comparisons](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_2)
-   [Unstructured Access](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_3)
-   [Field Symbols](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_4)
-   [RFC](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_5)

Includes   

Including a released structure into another structure.

Possible Problems

Error, when a component is added that already exists.

Mitigation

Include a released structure only by renaming its components with [suffixes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).

Assignments and Comparisons   

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

-   [Logical Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)
-   [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm)
-   [Working with internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm)
-   [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm)
-   [Working with data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm)

Possible Problems

Depending on the change all kinds of errors might occur. The following allowed changes in particular can affect the rules for processing structures fundamentally:

-   Adding numeric components to a formerly character-like structure.
-   Adding [deep](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_glosry.htm "Glossary Entry") components to a formerly [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structure.
-   Shifting the positions of numeric or deep components to formerly character-like sections.

Mitigation

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various CORRESPONDING mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Unstructured Access   

Processing the content of a released structure without addressing single components as for example:

-   [Offset/Length Specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm)
-   [String processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) (on complete structure)

Possible Problems

Depending on the change (see above) all kinds of errors might occur.

Mitigation

No processing of released structures without accessing single components.

Field Symbols   

Addressing released structures with [field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry") by using:

-   [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm)
-   ASSIGNING addition when [working with internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm)

Possible Problems

When the addition [CASTING](abapassign_casting.htm#!ABAP_ALTERNATIVE_2@2@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC   

Passing released structures to remote [RFMs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfm_glosry.htm "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.


### abenc1_demo_1.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20Consumption%20of%20APIs%20with%20C1%20Contract%2C%20ABENC1_DEMO_1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Example: Consumption of APIs with C1 Contract

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If [changes allowed by C1 contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) are applied to the pseudo external types, syntax errors and exceptions occur.

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


### abenc1_consumer_rules.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20API%20Consumers%2C%20ABENC1_CONSUMER_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

C1 Contract Rules for API Consumers

The [provider rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules.htm) for objects with a C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   [C1 Contract Rules for Consuming Elementary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_elem.htm)
-   [C1 Contract Rules for Consuming Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_struct.htm)
-   [Example: Consumption of APIs with C1 Contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_demo_1.htm)

Continue
[C1 Contract Rules for Consuming Elementary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_elem.htm)
[C1 Contract Rules for Consuming Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules_struct.htm)
[Example: Consumption of APIs with C1 Contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_demo_1.htm)
