  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) → 

ABAP CDS - Scopes for Annotations

[Annotations](javascript:call_link\('abencds_annotations.htm'\)) can be specified for the following scopes in source code in ABAP CDS: The annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) is used in the associated [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") to specify in which scopes an annotation can be specified.

-   [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):

-   [Annotation definition annotations](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) for a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry")
    In the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))

-   [Entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) for a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)), [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)), [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))

-   [View annotations](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\))

-   [Extension annotations](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) for a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")
    In front of the statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\))

-   [Function annotations](javascript:call_link\('abencds_f1_function_annotations.htm'\)) for a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\))

-   [Hierarchy annotations](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\)) for a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))

-   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
    In front of and after the [parameter](javascript:call_link\('abencds_f1_param.htm'\))

-   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
    In front of and after the [parameter](javascript:call_link\('abencds_f1_param.htm'\))

-   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")
    In front of the [parameter](javascript:call_link\('abencds_f1_param.htm'\))

-   [Element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)) for an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
    In front of and after the [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\))

-   [Element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)) for an [element](javascript:call_link\('abencds_f1_return_list_element.htm'\)) in the [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
    In front of and after the [element](javascript:call_link\('abencds_f1_return_list_element.htm'\))

-   [Metadata extension annotations](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) for a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry")
    In front of the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\))

-   [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"):

-   [Role annotations](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)) for a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\))

-   [Access policy annotation](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) for a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry")

-   [PFCG mapping annotation](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\)) for a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry")
    In front of the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))

The [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that are possible for a scope are documented here. For framework-specific annotations by SAP, see the tables in the document [Framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).

Note

The annotations specified in the source code of a CDS entity can be annotated or overridden using the annotations of [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").