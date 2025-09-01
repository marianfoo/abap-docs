  

* * *

AS ABAP Release 756, ©Copyright 2022 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Working with released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [Compatibility Rules for the C1 Contract](javascript:call_link\('abenc1_compatibility_rules.htm'\)) → 

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [General Rules for Elementary Data Types](#abenc1-provider-rules-1-------dictionary-objects---@ITOC@@ABENC1_PROVIDER_RULES_2)
-   [ABAP CDS Objects](#abenc1-provider-rules-3-------objects-implemented-in-abap---@ITOC@@ABENC1_PROVIDER_RULES_4)

General Rules for Elementary Data Types

Elementary data types can be released as follows:

-   In ABAP Dictionary and ABAP CDS based on [DDIC built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\))
    -   Standalone as DDIC domains or data elements
    -   Component types of DDIC structures or database tables
    -   Element types of CDS entities
-   In ABAP language based on [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\))
    -   Public types of global classes or interfaces
    -   Types of interface parameters of methods, events and function modules

For all these elementary types, the following general rules apply:

-   The built-in data type must not be changed with the following exceptions:
    
    -   [DDIC built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) INT1, INT2 INT4
    -   [built-in ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i
    
    Those may be replaced by an integer type with a larger value range.
    
-   The length must not be changed with the following exceptions:
    
    -   DDIC built-in data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP types c and p
    
    The length must not be decreased.
    
-   The number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") must not be changed with the following exceptions:
    
    -   DDIC built-in data types DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP type p
    
    The number of decimal places must not be decreased.
    

Dictionary Objects

-   [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry")
    
    Changes to domains must follow the general rules for elementary data types listed above. Furthermore, changes to the following [semantic attributes](javascript:call_link\('abenddic_domains_sema.htm'\)) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion routine must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry")
    
    Changes to data elements must follow the general rules for elementary data types listed above.
    
-   [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](javascript:call_link\('abenddic_structure_glosry.htm'\) "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes are allowed to existing components are allowed for elementary components only and must follow the general rules for elementary data types listed above.
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry")
    
    For DDIC database tables the same rules apply as for DDIC structures.
    
-   [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.
    

ABAP CDS Objects

-   [CDS Entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
    -   Only [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can be released with a C1 contract.
    -   The usage of upper and lower case in the name of an entity, its associations, elements or parameters must not be changed.
    -   The client handling must not be changed.
    -   Being a root entity of a RAP BO cannot be undone.
    -   Only annotations can be used that are allowed by the annotation [@CompatibilityContract.rc.usageAllowed](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) in their definition. Changes to annotations are also governed by its definition.
    -   Parameters must not be removed from or added to the parameter interface.
    -   Associations to a released target data source must not be removed and the target data source must not be exchanged in that case..
    -   No implicit SELECT list \* is allowed.
    -   Only positions of non-key elements can be changed if allowed by the data category.
    -   Only non-key elements can be added.
    -   Changes to the elementary data types of elements and parameters are allowed but must follow the general rules for elementary data types listed above.
-   [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry")
    -   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
    -   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
    -   Parameters and results of actions and functions must be DDIC data elements or CDS entities.

Objects implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") and [Interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the general rules for elementary data types listed above.
        
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