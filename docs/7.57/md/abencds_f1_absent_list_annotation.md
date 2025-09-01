  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE ABSTRACT ENTITY, element_annot, ABENCDS_F1_ABSENT_LIST_ANNOTATION, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of an [element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) or CDS association of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") as element annotation. The character @ must be placed directly in front of the name annotation of the annotation. In a CDS abstract entity, element annotations can only be specified in front of an element or a CDS association and not specified after it using @<.

The elements and CDS associations of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Example

The following DDL source code shows a CDS abstract entity with element annotations:

@Metadata.allowExtensions : true
define abstract entity demo\_cds\_abstract\_entity\_elem
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

The program DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM shows that the element annotations of the CDS abstract entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. In this case, there are also derived annotations for the data element used for typing and annotations from a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"). The metadata extension is specified as an example for [ANNOTATE ENTITY](javascript:call_link\('abencds_f1_annotate_view.htm'\)).