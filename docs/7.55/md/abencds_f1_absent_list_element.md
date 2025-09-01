---
title: "CDS DDL - DEFINE ABSTRACT ENTITY, element"
description: |
  Syntax ... @element_annot1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm) @element_annot2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm) ...  KEY name       : typin
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_list_element.htm"
abapFile: "abencds_f1_absent_list_element.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "absent", "list", "element"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_element_list.htm) → 

CDS DDL - DEFINE ABSTRACT ENTITY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
    *{* *\[*KEY*\]* name       : [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_typing.htm) *}*
  *|* *{*       \_assoc     : [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm) *}*
  *|* *{*       \_compos    : [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_composition.htm) *}*
  *|* *{*       \_to\_parent : [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_to_parent_assoc.htm) *}* ...

Additions:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or exposes a CDS association \_assoc, a CDS composition \_compos, or a CDS-to-parent association \_to\_parent in the [list of elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabstract_glosry.htm "Glossary Entry"). name or \_assoc or \_compos and \_to\_parent must be used to specify a unique name that complies with the naming rules for [names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm). Here, the name of a CDS association, a CDS composition, or a CDS-to-parent association can start with an underscore \_, as recommended. The names of the elements and CDS associations, CDS compositions, and CDS-to-parent associations are in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_func_parameter_list.htm) of the table function. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

-   If the additions [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm), [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_composition.htm), and [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_to_parent_assoc.htm) are not used, a element is defined that is typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_typing.htm). The typing determines the data type of the corresponding component of the structured data type represented by the CDS abstract entity.

-   The addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm) is used to expose a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") of the name \_assoc.

-   The addition [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_composition.htm) is used to expose a CDS composition with the name \_compos.

-   The addition [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_to_parent_assoc.htm) is used to expose a CDS-to-parent association with the name \_to\_parent.

No component with the name \_assoc, \_compos, and \_to\_parent is created in the associated structured data type.

It is not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Addition 1

... @element\_annot

Effect

Specifies annotations for the element. The annotations can be specified in front of every element and every CDS association, CDS composition, and CDS-to-parent association using [@element\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_list_annotation.htm).

Hint

Element annotations can be used to annotate the elements and CDS associations, CDS compositions, plus CDS-to-parent associations of a CDS abstract entity with semantic attributes.

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). Those elements of the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list.htm) can be defined as key elements that are placed without gaps at the start of the list.

Hint

The key elements of a CDS abstract entity can be used to create an abstract data model.

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, element\_annot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_list_annotation.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_association.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_composition.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_absent_to_parent_assoc.htm)