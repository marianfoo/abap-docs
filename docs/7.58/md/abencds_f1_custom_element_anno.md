---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_anno.htm"
abapFile: "abencds_f1_custom_element_anno.htm"
keywords: ["do", "if", "try", "class", "data", "abencds", "custom", "element", "anno"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20element_annot%2C%20ABENCDS_F1_CUSTOM_ELEMENT_ANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) in the definition of an [element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_absent_list_element.htm) or CDS association of an [CDS custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") as element annotation. The character @ must be placed directly in front of the name annotation of the annotation. In a CDS custom entity, element annotations can only be specified in front of an element or a CDS association.

All element annotations described in topic [CDS DDL - element\_annot](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm) can be used to annotate elements and associations in a CDS custom entity.

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
        @EndUserText.label: 'Simple type field'
        col4 : DEMO\_BT\_CHAR\_TEXT;
  }

The class CL\_DEMO\_CDS\_CUSTOM\_ENTITY\_ELEM shows that the element annotations of the CDS custom entity can be [evaluated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE. The result set contains not only the direct element annotations, but also derived annotations which are defined for the simple type used for typing.