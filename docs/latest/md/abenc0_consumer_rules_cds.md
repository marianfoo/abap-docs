  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Consumers%20of%20CDS%20Entities%2C%20ABENC0_CONSUMER_RULES_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

C0 Contract Rules for Consumers of CDS Entities

The [provider rules](javascript:call_link\('abenc0_provider_rules_cds.htm'\)) for objects with the C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed extensions to released APIs that must be considered when creating an extension.

-   [Naming Rules](#abenc0-consumer-rules-cds-1-------general-rules---@ITOC@@ABENC0_CONSUMER_RULES_CDS_2)
-   [Restrictions](#abenc0-consumer-rules-cds-3-------example-topics---@ITOC@@ABENC0_CONSUMER_RULES_CDS_4)

Naming Rules   

-   The alias name for elements and associations must start with the correct [namespace prefix](javascript:call_link\('abennames_repos_obj_guidl.htm'\) "Guideline"). For customers and partners, this means that either ZZ or YY must be used as prefix. For associations, it is strongly recommended that the alias name starts with an underscore (\_) followed by the correct namespace prefix.
-   All elements and associations defined in the extension must have the element suffix that is defined in the released API by means of the annotation [@AbapCatalog.extensibility.elementSuffix](javascript:call_link\('abencds_f1_entity_annotations.htm'\)).
-   In extensions to [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), all elements and associations defined in the extension must have the alias name of a stable data source, defined by the annotation [@AbapCatalog.extensibility.dataSources](javascript:call_link\('abencds_view_entity_anno.htm'\)), as prefix.

Examples for correct names:

-   DatasourceAlias.field as ZZ\_customerField\_suffix
-   DatasourceAlias.\_assoc as \_YY\_assoc\_suffix

General Rules   

-   Currently, [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), and [CDS custom entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") can be extended.
-   The extended CDS entity must be released under the C0 contract for the corresponding language version ([ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry") or [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")).
-   The extension must fit the quota definition defined in the extended entity by means of the annotations [AbapCatalog.extensibility.quota.maximumBytes](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) and [AbapCatalog.extensibility.quota.maximumFields](javascript:call_link\('abencds_f1_entity_annotations.htm'\)). That means that the maximum number of fields and the maximum number of bytes must not be exceeded.

Rules for Extension Fields

-   To define an additional field for a C0 released API that is selected from another data source, the field must either belong to the same software component, or be C1 released.
-   To define additional fields for a released API, in a scenario where these additional fields are selected from another extension, both extensions must be assigned to the same software component or the extended entity must be C1 released.

Rules for Node Extension

-   Adding new child nodes to a released API by means of [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") is allowed if the annotation [@AbapCatalog.extensibility.allowNewCompositions](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) is set to true.

Rules for Associations

-   Associations that are released with a stable alias name by the extended entity, using the annotation AbapCatalog.extensibility.dataSources, must not be exposed in the element list.
-   To define a new association in an extension, the association target must be [C1 released](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry") or created in the same software component.
-   Newly defined, local associations can be exposed in the element list. The name of a newly defined, local association must comply with the naming rules described in section Naming.

Rules for Path Expressions:

-   In an extension to a released API, exposed associations and associations used within path expressions can have a target [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of 0 or 1. A target cardinality greater than 1 is not allowed.
-   Path traversing with the exact length of 1 is allowed for released data sources with stable alias names.
-   Path traversing with the exact length of 1 is not allowed for locally defined associations.
-   Path traversing with a length greater than 1 is only allowed in the following cases:
    -   The extended object must be a CDS projection view.
    -   The annotation [@AbapCatalog.extensibility.allowNewDatasources](javascript:call_link\('abencds_view_entity_anno.htm'\)) is set to true.
    -   All traversed objects of the path are CDS view entities or CDS DDIC-based views.
    -   Examples for path lengths:
        
        BaseObjectAlias.fieldName //path length of 1
        
        BaseObjectAlias.\_assoc.fieldName //path length of 2
        

Restrictions   

-   The following data types are not supported in extensions to released APIs: [LCHR](javascript:call_link\('abenddic_builtin_types.htm'\)), [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)), [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)).
-   Reusing expressions using [$projection](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) as pointer is not supported when extending a released API.
-   [Session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)) are not supported when extending a released API.
-   The built-in function [utcl\_current](javascript:call_link\('abencds_timestamp_functions_v2.htm'\)) is not supported in extensions to released APIs.

Example Topics   

[Example for a C0 released CDS view entity which is extended from a restricted ABAP language version](javascript:call_link\('abenc0_demo.htm'\))

[Example for a C0 released CDS projection view which is extended from a restricted ABAP language version](javascript:call_link\('abenc0_demo_1.htm'\))

[Example for C0 node extensibility](javascript:call_link\('abenc0_node_ext_demo.htm'\))