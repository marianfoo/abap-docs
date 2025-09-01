  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an [element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) or CDS association of an [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") as element annotation. The character @ must be placed directly in front of the name annotation of the annotation. In a CDS custom entity, element annotations can only be specified in front of an element or a CDS association.

All element annotations described in topic [CDS DDL - element\_annot](javascript:call_link\('abencds_f1_element_annotation.htm'\)) can be used to annotate elements and associations in a CDS custom entity.

Example

The following DDL source code shows a CDS custom entity with element annotations:

define custom entity demo\_cds\_custom\_entity\_elem  
  {
        @EndUserText.label: 'Key field'
    key col1 : abap.char(3);
        @EndUserText.label: 'Integer field'
        col2 : abap.int4;
        @EndUserText.label: 'String field'
        col3 : abap.string;
        @EndUserText.label: 'Data element field'
        col4 : demo\_char\_text;
  }

The program DEMO\_CDS\_CUSTOM\_ENTITY\_ELEM shows that the element annotations of the CDS custom entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. The result set contains not only the direct element annotations, but also derived annotations which are defined for the data element used for typing.