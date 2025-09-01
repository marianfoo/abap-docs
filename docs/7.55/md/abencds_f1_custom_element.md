  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
    *{* *\[*KEY*\]* name      : [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_typing.htm) *}*
  *|* *{*      \_assoc     : [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm) *}*
  *|* *{*      \_compos    : [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm) *}*
  *|* *{*      \_to\_parent : [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_tp_association.htm) *}* ...

Additions:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or exposes a CDS association \_assoc, a CDS composition \_compos, or a CDS-to-parent association \_to\_parent in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) of a CDS custom entity. At least one element must be defined as a key element.

name or \_assoc or \_compos and \_to\_parent must be used to specify a unique name that complies with the naming rules for [names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm). Here, the name of a CDS association, a CDS composition, or a CDS-to-parent association can start with an underscore \_, as recommended. The names of the elements and CDS associations, CDS compositions, and CDS-to-parent associations are in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_func_parameter_list.htm) of the table function. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

The following applies to the CDS associations, CDS compositions, and CDS to-parent associations:

-   If the additions [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm), [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm), and [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_tp_association.htm) are not used, a element is defined that is typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_typing.htm).

-   The addition [association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm) is used to expose a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") of the name \_assoc.

-   The addition [composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm) is used to expose a CDS composition with the name \_compos.

-   The addition [to\_parent\_assoc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_tp_association.htm) is used to expose a CDS-to-parent association with the name \_to\_parent.

-   No component with the name \_assoc, \_compos, and \_to\_parent is created in the associated structured data type.
    

Addition 1

... @element\_annot

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") in the definition of an element of a CDS custom entity. The element annotation must be prefixed directly by the character @. Element annotations cannot be specified with an @< suffix in a CDS custom entity. Element annotations can be used to annotate the elements and CDS associations, CDS compositions, plus CDS-to-parent associations of a CDS custom entity with semantic attributes.

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current CDS custom entity. Those elements of the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) can be defined as key elements that are placed without gaps at the start of the list.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_association.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, composition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_composition.htm)
[CDS DDL - DEFINE CUSTOM ENTITY, to-parent association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_tp_association.htm)