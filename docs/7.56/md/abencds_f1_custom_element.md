---
title: "CDS DDL - DEFINE CUSTOM ENTITY, element"
description: |
  Syntax ... @element_annot1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list_annotation.htm) @element_annot2(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list_annotation.htm) ...  KEY name      : typing
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm"
abapFile: "abencds_f1_custom_element.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "custom", "element"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
    *{* *\[*KEY*\]* name      : [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typing.htm) *}*
  *|* *{*      \_assoc     : [association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_association.htm) *}*
  *|* *{*      \_compos    : [composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_composition.htm) *}*
  *|* *{*      \_to\_parent : [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_tp_association.htm) *}* ...

Additions:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or exposes a CDS association \_assoc, a CDS composition \_compos, or a CDS-to-parent association \_to\_parent in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) of a CDS custom entity. At least one element must be defined as a key element.

The element names name, \_assoc, \_compos, and \_to\_parent must specify a unique name that complies with the naming rules for [names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_general_syntax_rules.htm). It is recommended that the name of a CDS association, a CDS composition, or a CDS-to-parent association starts with an underscore \_. The names of the elements are in the same namespace as the parameters of the custom entity. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

-   An element name can optionally be defined as key element using the keyword KEY and it must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typing.htm). The typing determines the data type of the corresponding component of the structured data type represented by the CDS custom entity.
-   The addition [association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_association.htm) is used to expose a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") of the name \_assoc.
-   The addition [composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_composition.htm) is used to expose a [CDS composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_composition_glosry.htm "Glossary Entry") with the name \_compos.
-   The addition [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_tp_association.htm) is used to expose a [CDS to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abento_parent_association_glosry.htm "Glossary Entry") with the name \_to\_parent. No component with the name \_assoc, \_compos, and \_to\_parent is created in the associated structured data type. Element names are not case-sensitive. The blanks in the semicolon-separated list are ignored and can be omitted.

Addition 1   

... @element\_annot

Effect

Specifies annotations for an element. The annotations can be specified in front of every element using [@element\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_annotation.htm). Element annotations can be used to annotate the elements and CDS associations, CDS compositions, and CDS to-parent associations of a CDS custom entity with semantic attributes.

Addition 2   

... KEY

Effect

KEY is used to define the current element as a key element of the current CDS custom entity. Those elements of the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) can be defined as key elements that are placed without gaps at the start of the list. At least the first element must be a key element.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, element\_annot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_anno.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_association.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, composition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_composition.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, to-parent association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_tp_association.htm)