  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_transactional_query.htm) →  [CDS DDL - projection\_list, Transactional Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_element_list.htm) →  [CDS DDL - proj\_element, Transactional Query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20element_annot%2C%20Transactional%20Query%2C%20ABENCDS_ELEMENT_ANNOTATIONS_PV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

CDS DDL - element\_annot, Transactional Query

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) in the definition of an element of a projection list in a CDS projection view as element annotation. Element annotations must be specified before the element they belong to, and the character @ must be placed in front of the name annotation of the annotation.

For CDS projection views, there are strict checks that all element annotations used must be defined as a [CDS object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_object_glosry.htm "Glossary Entry") in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Otherwise, a syntax error occurs.

All available element annotations are listed in topic [element\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm).

Propagation of Element Annotations in CDS Projection Views

-   Projected elements and exposed associations from the projected entity inherit the element annotations from the projected entity. Any annotations defined in the projected CDS entity cds\_entity at element level are passed to the CDS projection view projection\_view. This means that the CDS projection view has the same annotation values as the [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). Only if an annotation is defined explicitly for the same element in the CDS projection view, the values are overwritten and only the new values are valid for the element in question. [Framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") can be used to give the element specific semantic properties for other SAP frameworks.
    
    Caution: If you use an annotation with an element reference ElementRef in the [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") and the reference element is aliased in the projection entity, the reference is not drawn to the element in the projection view, due to the name change. In such a case, you have to redefine the annotation in the projection view and use the alias name of the element in the annotation value.
    
    Exception: In an analytical projection view, the annotation Aggregation.default that defines an analytical measure is inherited from the [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") and it cannot be overwritten.
    
-   If a field is not directly projected but used in an expression or built-in function, element annotations are not inherited.
    
    Exception: If a field is used in the [CAST PRESERVING TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm) expression, element annotations are inherited.
    
-   Inheritance of element annotations can be switched off by using the header annotation [@Metadata.ignorePropagatedAnnotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_view_annotations.htm).

Example

The CDS projection view DEMO\_SALES\_PV\_SO\_I\_LIST is a projection of the CDS view DEMO\_SALES\_CDS\_SO\_I. Even though the [projected entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") uses a semantics annotation to connect the gross amount to the currency and the quantity field to the respective unit, the projection view repeats these annotations. This is required because of the alias name of the currency and unit fields.