  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) →  [ABAP CDS - Specifying Annotations](javascript:call_link\('abencds_anno_usage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Scopes for Annotations, ABENCDS_ANNOTATIONS_SCOPES, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Scopes for Annotations

[Annotations](javascript:call_link\('abencds_annotations.htm'\)) can be specified in ABAP CDS source code for the following scopes by using [annotation syntax](javascript:call_link\('abencds_annotations_syntax.htm'\)). The scopes in which an annotation can be specified are determined with the [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) annotation in the corresponding annotation definition.

-   [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"):
    -   [Annotation definition annotations](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) for a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\))
        
    -   [Entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) for a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")
        
        in front of the statements [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)), [DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)), [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)), [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)), [DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_custom_entities.htm'\)), [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)), [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)).
        
    -   View annotations for a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). View annotations are subdivided into:
        
        [View entity annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)) in front of the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\))
        
        [Projection view annotations](javascript:call_link\('abencds_proj_view_annotations.htm'\)) in front of the statement [DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\))
        
        [DDIC-based view annotations](javascript:call_link\('abencds_view_anno_v1.htm'\)) in front of the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\))
        
        Which view annotation can be used where is not governed by the [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) annotation, but is documented for each DEFINE statement.
        
    -   [Extension annotations](javascript:call_link\('abencds_f1_extend_view_annotations.htm'\)) for a [CDS view extension](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)) or [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\))
        
    -   [Function annotations](javascript:call_link\('abencds_f1_function_annotations.htm'\)) for a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\))
        
    -   [Hierarchy annotations](javascript:call_link\('abencds_f1_hierarchy_annotations.htm'\)) for a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\))
        
    -   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
        
        in front of and after the [parameter](javascript:call_link\('abencds_f1_param.htm'\))
        
    -   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
        
        in front of and after the [parameter](javascript:call_link\('abencds_f1_param.htm'\))
        
    -   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\)) of an [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")
        
        in front of the [parameter](javascript:call_link\('abencds_f1_param.htm'\))
        
    -   [Parameter annotations](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) for a [parameter](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
        
        in front of the [parameter](javascript:call_link\('abencds_f1_param.htm'\))
        
    -   [Element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)) for an element of the SELECT list of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
        
        in front of and after the element
        
    -   [Element annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)) for an [element](javascript:call_link\('abencds_f1_return_list_element.htm'\)) in the [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
        
        in front of and after the [element](javascript:call_link\('abencds_f1_return_list_element.htm'\))
        
    -   [Metadata extension annotations](javascript:call_link\('abencds_f1_metadata_ext_annos.htm'\)) for a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [ANNOTATE](javascript:call_link\('abencds_f1_annotate_view.htm'\))
        
-   [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry"):
    -   [Service definition annotations](javascript:call_link\('abencds_define_service_annos.htm'\)) for a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry")
        
        In the statement [DEFINE SERVICE](javascript:call_link\('abensrvd_define_service.htm'\))
        
-   [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"):
    -   [Role annotations](javascript:call_link\('abencds_f1_dcl_role_annotations.htm'\)) for a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\))
        
    -   [Access policy annotation](javascript:call_link\('abencds_f1_dcl_ap_annotations.htm'\)) for a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry")
    -   [PFCG mapping annotation](javascript:call_link\('abencds_f1_dcl_pm_annotations.htm'\)) for a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry")
        
        in front of the statement [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\))
        

The ABAP annotations that are possible for a scope are documented under [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry"). For framework-specific annotations by SAP, see the tables in the document [Framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).

Hint

The annotations specified in the source code of a CDS entity can be annotated or overridden using the annotations of [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry").