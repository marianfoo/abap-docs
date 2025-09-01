  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20element%2C%20ABENCDS_F1_CUSTOM_ELEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CDS DDL - DEFINE CUSTOM ENTITY, element

Syntax

... *\[*[@element\_annot1](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]*
    *\[*[@element\_annot2](javascript:call_link\('abencds_f1_return_list_annotation.htm'\))*\]*
    ...
    *{* *\[*KEY*\]* name      : [typing](javascript:call_link\('abencds_typing.htm'\)) *}*
  *|* *{*      \_assoc     : [association](javascript:call_link\('abencds_f1_custom_association.htm'\)) *}*
  *|* *{*      \_compos    : [composition](javascript:call_link\('abencds_f1_custom_composition.htm'\)) *}*
  *|* *{*      \_to\_parent : [to\_parent\_assoc](javascript:call_link\('abencds_f1_custom_tp_association.htm'\)) *}* ...

Additions:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or exposes a CDS association \_assoc, a to-child association \_compos, or a CDS-to-parent association \_to\_parent in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a CDS custom entity. At least one element must be defined as a key element.

The element names name, \_assoc, \_compos, and \_to\_parent must specify a unique name that complies with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). It is recommended that the name of a CDS association, a CDS to-child association, or a CDS-to-parent association starts with an underscore \_. The names of the elements are in the same namespace as the parameters of the custom entity. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the DDIC database table TRESE.

-   An element name can optionally be defined as key element using the keyword KEY and it must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)). The typing determines the data type of the corresponding component of the structured data type represented by the CDS custom entity.
-   The addition [association](javascript:call_link\('abencds_f1_custom_association.htm'\)) is used to expose a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of the name \_assoc.
-   The addition [composition](javascript:call_link\('abencds_f1_custom_composition.htm'\)) is used to expose a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") with the name \_compos.
-   The addition [to\_parent\_assoc](javascript:call_link\('abencds_f1_custom_tp_association.htm'\)) is used to expose a [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") with the name \_to\_parent. No component with the name \_assoc, \_compos, and \_to\_parent is created in the associated structured data type. Element names are not case-sensitive. The blanks in the semicolon-separated list are ignored and can be omitted.

Addition 1   

... @element\_annot

Effect

Specifies annotations for an element. The annotations can be specified in front of every element using [@element\_annot](javascript:call_link\('abencds_f1_absent_list_annotation.htm'\)). Element annotations can be used to annotate the elements and CDS associations, CDS to-child associations, and CDS to-parent associations of a CDS custom entity with semantic properties.

Addition 2   

... KEY

Effect

KEY is used to define the current element as a key element of the current CDS custom entity. Those elements of the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) can be defined as key elements that are placed without gaps at the start of the list. At least the first element must be a key element.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Continue
[CDS DDL - DEFINE CUSTOM ENTITY, element\_annot](javascript:call_link\('abencds_f1_custom_element_anno.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, association](javascript:call_link\('abencds_f1_custom_association.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, COMPOSITION](javascript:call_link\('abencds_f1_custom_composition.htm'\))
[CDS DDL - DEFINE CUSTOM ENTITY, To-Parent Association](javascript:call_link\('abencds_f1_custom_tp_association.htm'\))