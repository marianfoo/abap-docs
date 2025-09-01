---
title: "ABAP CDS - Scopes for Annotations"
description: |
  Annotations(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) can be specified in ABAP CDS source code for the following scopes by using annotation syntax(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm). The scopes in w
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_scopes.htm"
abapFile: "abencds_annotations_scopes.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "annotations", "scopes"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_usage.htm) → 

ABAP CDS - Scopes for Annotations

[Annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) can be specified in ABAP CDS source code for the following scopes by using [annotation syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax.htm). The scopes in which an annotation can be specified are determined with the [@Scope](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_anno_annos.htm) annotation in the corresponding annotation definition.

-   [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry"):

-   [Annotation definition annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_anno_annos.htm) for a [CDS annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry")
    in front of the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation.htm)

-   [Entity annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_annotations.htm) for a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry")
    in front of the statements [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm), [DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm), [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_table_function.htm), [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_abstract_entity.htm), and [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)

-   View annotations for a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry"). View annotations are subdivided into:
    [View entity annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity_anno.htm) in front of the statement [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm)
    [Projection view annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_annotations.htm) in front of the statement [DEFINE VIEW ENTITY AS PROJECTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_as_projection.htm)
    [DDIC-based view annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) in front of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm)
    Which view annotation can be used where is not governed by the [@Scope](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_anno_annos.htm) annotation, but is documented for each DEFINE statement.

-   [Extension annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view_annotations.htm) for a [CDS view extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry")
    in front of the statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm)

-   [Function annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_function_annotations.htm) for a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    in front of the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_table_function.htm)

-   [Hierarchy annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hierarchy_annotations.htm) for a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")
    in front of the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")
    in front of and after the [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    in front of and after the [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_entity_parameter_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")
    in front of the [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm)

-   [Element annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_element_annotation.htm) for an element of the SELECT list of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")
    in front of and after the element

-   [Element annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_element_annotation.htm) for an [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_element.htm) in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    in front of and after the [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_element.htm)

-   [Metadata extension annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_metadata_ext_annos.htm) for a [CDS metadata extension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry")
    in front of the statement [ANNOTATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_annotate_view.htm)

-   [CDS SDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sdl_glosry.htm "Glossary Entry"):

-   [Service definition annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_service_annos.htm) for a [CDS service definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_service_definition_glosry.htm "Glossary Entry")
    In the statement [DEFINE SERVICE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrvd_define_service.htm)

-   [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_dcl_glosry.htm "Glossary Entry"):

-   [Role annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_role_annotations.htm) for a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry")
    in front of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_role.htm)

-   [Access policy annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_ap_annotations.htm) for a [CDS access policy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_policy_glosry.htm "Glossary Entry")

-   [PFCG mapping annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_pm_annotations.htm) for a [PFCG mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry")
    in front of the statement [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_pfcg_mapping.htm)

The ABAP Annotations that are possible for a scope are documented under [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry"). For framework-specific annotations by SAP, see the tables in the document [Framework-specific annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_frmwrk.htm).

Hint

The annotations specified in the source code of a CDS entity can be annotated or overridden using the annotations of [CDS metadata extensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").