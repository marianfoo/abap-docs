  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchies.htm) →  [CDS DDL - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) →  [CDS DDL - DEFINE HIERARCHY, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element_list.htm) →  [CDS DDL - DEFINE HIERARCHY, element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE HIERARCHY, element_annot, ABENCDS_F1_HIERA_ELEM_ANNOTATION, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE HIERARCHY, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") as element notation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm).