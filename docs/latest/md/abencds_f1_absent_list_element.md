---
title: "CDS DDL - DEFINE ABSTRACT ENTITY, element"
description: |
  Syntax ... @element_annot1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_annotation.htm) @element_annot2(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_annotation.htm) ...  KEY name
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm"
abapFile: "abencds_f1_absent_list_element.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencds", "absent", "list", "element"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ABSTRACT%20ENTITY%2C%20element%2C%20ABENCDS_F1_ABSENT_LIST_ELEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
    *{* *\[*KEY*\]* name       : [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) *}*
  *|* *{*       \_assoc     : [association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm) *}*
  *|* *{*       \_compos    : [composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_composition.htm) *}*
  *|* *{*       \_to\_parent : [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_to_parent_assoc.htm) *}* ...

Additions:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or defines a CDS association \_assoc, a CDS to-child association \_compos, or a CDS-to-parent association \_to\_parent in the [list of elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) of a [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabstract_glosry.htm "Glossary Entry"). name or \_assoc or \_compos and \_to\_parent must be used to specify a unique name that complies with the naming rules for [names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm). Here, the name of a CDS association, a CDS to-child association, or a CDS-to-parent association can start with an underscore \_, as recommended. The names of the elements and CDS associations, CDS to-child associations, and CDS-to-parent associations are in the same namespace as the parameters of the abstract entity. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

-   An element name defines an element. Elements must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm). All possible data types and the rules for typing are described in the topic about [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) in CDS. The typing determines the data type of the corresponding component of the structured data type represented by the CDS abstract entity.
-   The addition [association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm) is used to expose a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") of the name \_assoc.
-   The addition [composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_composition.htm) is used to expose a CDS to-child association with the name \_compos.
-   The addition [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_to_parent_assoc.htm) is used to expose a CDS-to-parent association with the name \_to\_parent.
-   The element list must contain at least one element name. It is not allowed to specify only an association, to-child association, or to-parent association in the element list.

No component with the name \_assoc, \_compos, and \_to\_parent is created in the associated structured data type.

Element names are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Example

The following DDL source code shows a CDS abstract entity:

@EndUserText.label: 'Abstract CDS Entity'
@Metadata.allowExtensions: false
define abstract entity demo\_cds\_abstract\_entity
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
        col3 : abap.string;
        col4 : DEMO\_BT\_CHAR\_TEXT;
  }

The class CL\_DEMO\_CDS\_ABSTRACT\_ENTITY demonstrates the following:

-   The structure of the CDS abstract entity can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") methods.
-   The annotations of the CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The structure of the CDS abstract entity can be used as a data type in the ABAP program.

Addition 1   

... @element\_annot

Effect

Specifies annotations for the element. The annotations can be specified in front of every element and every CDS association, CDS to-child association, and CDS-to-parent association using [@element\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_annotation.htm).

Hint

Element annotations can be used to annotate the elements and CDS associations, CDS to-child associations, plus CDS-to-parent associations of a CDS abstract entity with semantic properties.

Addition 2   

... KEY

Effect

KEY is used to define the current element as a key element of the current [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). Those elements of the [element list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_return_list.htm) can be defined as key elements that are placed without gaps at the start of the list.

Hint

The key elements of a CDS abstract entity can be used to create an abstract data model.

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, element\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_annotation.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_association.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, composition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_composition.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, to-parent association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_to_parent_assoc.htm)