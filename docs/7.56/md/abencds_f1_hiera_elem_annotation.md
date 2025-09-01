  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Hierarchies](javascript:call_link\('abencds_hierarchies.htm'\)) →  [CDS DDL - DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) →  [CDS DDL - DEFINE HIERARCHY, element\_list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) →  [CDS DDL - DEFINE HIERARCHY, element](javascript:call_link\('abencds_f1_hiera_element.htm'\)) → 

CDS DDL - DEFINE HIERARCHY, element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an [element](javascript:call_link\('abencds_f1_hiera_element.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") as element notation. Element annotations can be specified before and after the element.

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   Following the element, the characters @< must be placed before the name annotation of the annotation.

The elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](javascript:call_link\('abencds_f1_element_annotation.htm'\)).