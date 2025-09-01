  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.53](javascript:call_link\('abennews-753.htm'\)) → 

ABAP CDS in Release 7.53

[1\. CDS hierarchies](#!ABAP_MODIFICATION_1@1@)

[2\. New condition IS INITIAL](#!ABAP_MODIFICATION_2@2@)

[3\. Literals](#!ABAP_MODIFICATION_3@3@)

[4\. Annotation definitions](#!ABAP_MODIFICATION_4@4@)

[5\. New scope for annotations](#!ABAP_MODIFICATION_5@5@)

[6\. Abstract CDS entities](#!ABAP_MODIFICATION_6@6@)

[7\. Metadata extensions for CDS entities](#!ABAP_MODIFICATION_7@7@)

[8\. Access control](#!ABAP_MODIFICATION_8@8@)

Modification 1

CDS Hierarchies

The new statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can be used to create [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry").

Modification 2

New Condition IS INITIAL

The new condition [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial.htm'\)) can be used to check the initial value of operands.

Modification 3

Literals

A [literal](javascript:call_link\('abencds_f1_literal.htm'\)) of a value is now always handled as a field of the type INT8, including in the definition of associations.

Modification 4

Annotation Definitions

In the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") of a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") delivered by SAP, the new annotation [@CompatibilityContract](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) must be used to specify the usability of the annotation in CDS entities, depending on their [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry").

Modification 5

New Scope for Annotations

In a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the new enumeration symbol #ENTITY, which defines a [scope](javascript:call_link\('abencds_annotations_scopes.htm'\)) for entity annotations, can be specified after the annotation [@scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)). Annotations with this scope can be specified in the definitions of all [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in front of the statement DEFINE.

The [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") @EndUserText.label and @Metadata.allowExtensions were switched to this scope.

Modification 6

Abstract CDS Entities

An [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") defines the type attributes of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") without creating an instance of a database object. An abstract CDS entity is defined using [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) in a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry").

Modification 7

Metadata Extensions for CDS Entities

The variant [ANNOTATE ENTITY](javascript:call_link\('abencds_f1_annotate_view.htm'\)) was added to the previous statement [ANNOTATE VIEW](javascript:call_link\('abencds_f1_annotate_view.htm'\)). This makes it possible to define [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") for any [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") with the exception of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"). Metadata extensions of this type can contain entity annotations, parameter annotations, and element annotations.

Modification 8

Access Control

The following enhancements have been implemented in [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"):

-   New [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) can be used as [access conditions](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) in [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"). They make the previous [inherited access rules](javascript:call_link\('abencds_dcl_role_inherited_rule.htm'\)) obsolete. Some inheritance conditions apply conditions from existing CDS roles and some inheritance conditions apply access rules defined for other CDS entities.
    
-   In a [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") can be [mapped](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) to an element list. This mapping assigns the CDS elements to the authorization fields of an authorization object. A PFCG mapping is defined in a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry") using [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)).