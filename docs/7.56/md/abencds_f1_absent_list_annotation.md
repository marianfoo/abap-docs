  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_element_list.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_element.htm) → 

CDS DDL - DEFINE ABSTRACT ENTITY, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_element.htm) or CDS association of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") as element annotation. The character @ must be placed directly in front of the name annotation of the annotation. In a CDS abstract entity, element annotations can only be specified in front of an element or a CDS association and not specified after it using @<.

The elements and CDS associations of [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") can be assigned to the element annotations grouped under [element\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_element_annotation.htm).

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

The program DEMO\_CDS\_ABSTRACT\_ENTITY\_ELEM shows that the element annotations of the CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. In this case, there are also derived annotations for the data element used for typing and annotations from a [CDS metadata extension](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry"). The metadata extension is specified as an example for [ANNOTATE ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view.htm).