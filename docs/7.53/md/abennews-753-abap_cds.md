  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-753.htm) → 

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

The new statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_hierarchy.htm) can be used to create [CDS hierarchies](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_hierarchy_glosry.htm "Glossary Entry").

Modification 2

New Condition IS INITIAL

The new condition [IS INITIAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_initial.htm) can be used to check the initial value of operands.

Modification 3

Literals

A [literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm) of a value is now always handled as a field of the type INT8, including in the definition of associations.

Modification 4

Annotation Definitions

In the [DDLA source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddla_source_code_glosry.htm "Glossary Entry") of a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") delivered by SAP, the new annotation [@CompatibilityContract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) must be used to specify the usability of the annotation in CDS entities, depending on their [release contract](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelease_contract_glosry.htm "Glossary Entry").

Modification 5

New Scope for Annotations

In a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"), the new enumeration symbol #ENTITY, which defines a [scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_scopes.htm) for entity annotations, can be specified after the annotation [@scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm). Annotations with this scope can be specified in the definitions of all [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") in front of the statement DEFINE.

The [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") @EndUserText.label and @Metadata.allowExtensions were switched to this scope.

Modification 6

Abstract CDS Entities

An [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry") defines the type attributes of a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") without creating an instance of a database object. An abstract CDS entity is defined using [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_abstract_entity.htm) in a [CDS data definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_data_definition_glosry.htm "Glossary Entry").

Modification 7

Metadata Extensions for CDS Entities

The variant [ANNOTATE ENTITY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm) was added to the previous statement [ANNOTATE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm). This makes it possible to define [CDS metadata extensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") for any [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") with the exception of [CDS table functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry"). Metadata extensions of this type can contain entity annotations, parameter annotations, and element annotations.

Modification 8

Access Control

The following enhancements have been implemented in [CDS access control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_control_glosry.htm "Glossary Entry"):

-   New [inheritance conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_inherit.htm) can be used as [access conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_conditions.htm) in [CDS roles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry"). They make the previous [inherited access rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_role_inherited_rule.htm) obsolete. Some inheritance conditions apply conditions from existing CDS roles and some inheritance conditions apply access rules defined for other CDS entities.
    
-   In a [PFCG condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg.htm), a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry") can be [mapped](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cond_pfcg_mapping.htm) to an element list. This mapping assigns the CDS elements to the authorization fields of an authorization object. A PFCG mapping is defined in a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry") using [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm).