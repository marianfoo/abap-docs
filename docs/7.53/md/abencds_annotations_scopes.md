  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) →  [ABAP CDS - Specifying Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_usage.htm) → 

ABAP CDS - Scopes for Annotations

[Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) can be specified for the following scopes in source code in ABAP CDS: The annotation [@Scope](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) is used in the associated [annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") to specify in which scopes an annotation can be specified.

-   [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry"):

-   [Annotation definition annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_anno_annos.htm) for a [CDS annotation definition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry")
    In the statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_annotation.htm)

-   [Entity annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) for a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm), [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm), [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_abstract_entity.htm)

-   [View annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_view_entity_annotations.htm) for a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm)

-   [Extension annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_extend_view_annotations.htm) for a [CDS view extension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_extend_glosry.htm "Glossary Entry")
    In front of the statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_extend_view.htm)

-   [Function annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_function_annotations.htm) for a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_table_function.htm)

-   [Hierarchy annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_hierarchy_annotations.htm) for a [CDS hierarchy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_hierarchy.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry")
    In front of and after the [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_param.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    In front of and after the [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_param.htm)

-   [Parameter annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter_annotations.htm) for a [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry")
    In front of the [parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_param.htm)

-   [Element annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm) for an [element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm) of the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry")
    In front of and after the [element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_entry.htm)

-   [Element annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm) for an [element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_element.htm) in the [element list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    In front of and after the [element](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_element.htm)

-   [Metadata extension annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_metadata_ext_annos.htm) for a [CDS metadata extension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry")
    In front of the statement [ANNOTATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_annotate_view.htm)

-   [CDS DCL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_dcl_glosry.htm "Glossary Entry"):

-   [Role annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_role_annotations.htm) for a [CDS role](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_role_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_role.htm)

-   [Access policy annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_ap_annotations.htm) for a [CDS access policy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_access_policy_glosry.htm "Glossary Entry")

-   [PFCG mapping annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_dcl_pm_annotations.htm) for a [PFCG mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_pfcg_mapping_glosry.htm "Glossary Entry")
    In front of the statement [DEFINE PFCG\_MAPPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_pfcg_mapping.htm)

The [ABAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") that are possible for a scope are documented here. For framework-specific annotations by SAP, see the tables in the document [Framework-specific annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_frmwrk.htm).

Note

The annotations specified in the source code of a CDS entity can be annotated or overridden using the annotations of [CDS metadata extensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry").