  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules for Providers of CDS Entities, ABENC0_PROVIDER_RULES_CDS, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C0 Contract Rules for Providers of CDS Entities

Generally, a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that is classified with the [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C0 contract imposes on different kinds of repository objects.

-   [Prerequisites for C0 Release](#abenc0-provider-rules-cds-1-------stability-rules-after-release---@ITOC@@ABENC0_PROVIDER_RULES_CDS_2)
-   [Restrictions](#abenc0-provider-rules-cds-3-------example-topics---@ITOC@@ABENC0_PROVIDER_RULES_CDS_4)

Prerequisites for C0 Release   

-   The [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") must be marked as extensible. That means that the annotation [@AbapCatalog.extensibility.extensible](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) must be set to true.
    
    In CDS view entities and CDS projection views, the annotation [@AbapCatalog.viewEnhancementCategory](javascript:call_link\('abencds_view_entity_anno.htm'\)) can be used instead, or both annotations can be used at the same time. Their values must match each other, that means, they must both allow extensions.
    
-   The CDS entity must define a 3-character long element suffix using the annotation [@AbapCatalog.extensibility.elementSuffix](javascript:call_link\('abencds_f1_entity_annotations.htm'\)).
-   The CDS entity must define a quota that preserves capacity for extension content. Both annotations [@AbapCatalog.extensibility.quota.maximumFields](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) and [@AbapCatalog.extensibility.quota.maximumBytes](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) are mandatory. The maximum number of fields must be an integer between 0 and 1000 and the maximum number of bytes must be an integer between 0 and 10.000.
-   If the entity to be released is a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), stable alias names for data sources and associations that can be used by [extensions](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry") are mandatory. The annotation [@AbapCatalog.extensibility.dataSources](javascript:call_link\('abencds_view_entity_anno.htm'\)) must be set and define at least one stable data source. The data sources and associations which are allowlisted in this way must themselves be released, either under the C0 contract, or under the [C1 contract](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry").
-   The stable data sources defined in the annotation @AbapCatalog.extensibility.dataSources must fulfill at least one of the following conditions:
    -   be a data source specified as part of the SELECT clause (CDS view entity)
    -   be specified as data source after DEFINE VIEW ENTITY AS PROJECTION ON (CDS projection view)
    -   be a locally defined or redefined association whose association target has exactly one data source defined after FROM that is a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry"). An association can only be defined as stable data source if it has a maximum cardinality of maximum 1.
-   Release is possible only if all elements use the correct [namespace](javascript:call_link\('abennames_repos_obj_guidl.htm'\) "Guideline") prefix. For repository objects developed in an SAP system, this means that the element names must not start with YY or ZZ. /namespace\_prefix is only allowed if the enclosing object has the same prefix.
-   For [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), the following prerequisite applies: They must have exactly one data source after FROM. This data source must be a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry").
-   The CDS entity must not have any fields of data type LCHR or LRAW.
-   The annotation [@AbapCatalog.extensibility.allowNewDatasources](javascript:call_link\('abencds_view_entity_anno.htm'\)) is optional. It can be set to true or false, but true is allowed only in CDS projection views. When set to true, consumers of the released API are allowed to use new data sources. This means that a consumer can use a newly defined association in a path expression to include a field from a new data source in the extension.
-   The annotation [@AbapCatalog.extensibility.allowNewCompositions](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) is optional. It can be set to true or false. The value true is a prerequisite for node extensibility. It explicitly allows consumers of the released API to add new child nodes to a CDS data model.

Stability Rules After Release   

-   Currently, [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), and [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") can be released with a C0 contract.
-   Client-dependent views must not be changed into client-independent views after C0 release.
-   The [provider contract](javascript:call_link\('abencds_pv_provider_contract.htm'\)) must not be changed after C0 release.
-   The [CDS object type](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") must not be changed after C0 release.
-   The [DDL source type](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") must not be changed after C0 release.
-   The extensibility annotations must not be removed after C0 release. Changes are allowed within strict limits:
    -   @AbapCatalog.extensibility.extensible must not be removed and its value must not be changed.
    -   The released stable alias names specified in AbapCatalog.extensibility.dataSources must not be changed. The target object name a released alias refers to must not be changed. If the released alias name refers to an association, this association must not change its maximum cardinality. New stable data sources can be added.
    -   The quota definition defined in @AbapCatalog.extensibility.quota.maximumFields and @AbapCatalog.extensibility.quota.maximumBytes must not be reduced.
    -   The element suffix defined with @AbapCatalog.extensibility.elementSuffix must not be changed.
    -   @AbapCatalog.extensibility.allowNewDatasources must not be removed and its value must not be changed from true to false. The reverse, from false to true, is possible though.
-   Key fields must not be changed after C0 release. Name, position, and data type of key fields must not change. Key fields must not be deleted and no new key fields can be added.

Restrictions   

-   [Union views](javascript:call_link\('abencds_union_v2.htm'\)) must not be released under the C0 contract.
-   Entities with a [GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\)) clause are not supported.
-   The annotation AbapCatalog.viewEnhancementCategory must not be set to #UNION or #GROUP BY.
-   A maximum of 64 joins is supported (ATC error). A maximum of 32 joins is recommended (ATC warning).
-   [Buffering](javascript:call_link\('abencds_v2_view_buffering.htm'\)) is not supported. The annotation [@AbapCatalog.entityBuffer](javascript:call_link\('abencds_view_entity_anno.htm'\)) must not be set to true.
-   Client-independent CDS views must not be released under the C0 contract.

Example Topics   

[Example for a C0 released CDS view entity which is extended from a restricted ABAP language version](javascript:call_link\('abenc0_demo.htm'\))

[Example for a C0 released CDS projection view which is extended from a restricted ABAP language version](javascript:call_link\('abenc0_demo_1.htm'\))

[Example for C0 node extensibility](javascript:call_link\('abenc0_node_ext_demo.htm'\))