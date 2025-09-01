  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchies.htm) →  [CDS DDL - DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) →  [CDS DDL - DEFINE HIERARCHY, element\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element_list.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE HIERARCHY, element, ABENCDS_F1_HIERA_ELEMENT, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE HIERARCHY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm)*\]*
    ...
       *\[*KEY*\]* *{* \_assoc                   *\[*AS alias*\]* *}*
           *|* *{* element                  *\[*AS alias*\]* *}*
           *|* *{* $node.hierarchy\_attribute AS alias  *}*
    *\[*[@<element\_annot1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm)*\]*
    *\[*[@<element\_annot2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm)*\]*  ...

Alternatives:

[1\. ... \_assoc](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... element](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... $node.hierarchy\_attribute](#!ABAP_ALTERNATIVE_3@3@)

Additions:

[1\. ... @element\_annot ... @<element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)
[3\. ... AS alias](#!ABAP_ADDITION_3@3@)

Effect

Specifies an element in the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). The names of the elements in a CDS hierarchy must be unique and must be in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_parameter_list.htm) of the CDS hierarchy.

Alternative 1   

... \_assoc

Effect

\_assoc can be used to make the CDS hierarchy expose a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") that itself is exposed by the CDS view cds\_view specified after [SOURCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) in its SELECT list. The name of a CDS association can be specified for \_assoc but path expressions are not possible.

The CDS hierarchy exposes the CDS association for use in CDS views or in ABAP SQL:

-   A CDS view can evaluate the CDS association in its path expressions ([CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm), [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm)).
-   The CDS association can be used in ABAP SQL [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_path.htm).

The current CDS hierarchy is the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association and any join expressions created for a path expression from the CDS association use the current CDS hierarchy as their left side. All fields of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the CDS association that occur in the ON condition must also be specified as elements of the current element list.

A CDS association exposed in this way is, like any element, part of the element list. It is not, however, part of the result set or a component of a type defined in ABAP with respect to the CDS hierarchy. If no alternative element name alias is defined, the element name is defined by the name of the CDS association.

Hint

When a CDS association is exposed, care should be taken that the exposing hierarchy itself is the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the exposed CDS association and not the data source of the view. More specifically, when CDS associations are exposed that were already exposed by the source of the hierarchy, the hierarchy replaces the original view as the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") of the CDS association. The left side of an instance of a join expression created for the exposed CDS association is the result set of the hierarchy.

Alternative 2   

... element

Effect

element can be used to specify an element of the CDS view cds\_view specified after [SOURCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm). This element is part of the result set of the CDS hierarchy and a component of a type defined in ABAP with respect to the CDS hierarchy.

Hint

When the hierarchy is accessed in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), the element is a regular component of the [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") in the results list, if \* or ...~\* are used in the SELECT list.

Alternative 3   

... $node.hierarchy\_attribute

Effect

$node.hierarchy\_attribute can be used to specify a [hierarchy attribute](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_attribute_glosry.htm "Glossary Entry") hierarchy\_attribute after the prefix $node. The names of all [hierarchy attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_attributes.htm) can be specified for hierarchy\_attribute. In this case, AS ALIAS must be used to define an alternative element name, which cannot be the name of a hierarchy attribute.

This element is part of the result set of the CDS hierarchy and a component of a type defined in ABAP with respect to the CDS hierarchy. When the CDS hierarchy is accessed, the element contains the respective value of the hierarchy attribute for each row.

Hints

-   When the hierarchy is defined in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), the element is a regular component of the [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") in the results list, if \* or ...~\* are used in the SELECT list.
-   When the hierarchy is accessed in [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"), the associated additional [hierarchy column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") can be used to access the hierarchy attribute.
-   It is practical to include a hierarchy attribute in the element list of a CDS hierarchy explicitly either if it is required when other CDS entities access the CDS hierarchy, or if it is a component of a structured type in ABAP that references the CDS hierarchy.

Addition 1   

... @element\_annot

Effect

Specifies annotations for the element. The annotations can be specified before the element using [@element\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm) or after the element using [@<element\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm).

Hint

Element annotations can be used to annotate the elements and CDS associations of a CDS hierarchy with semantic properties.

Addition 2   

... KEY

Effect

KEY is used to define the current element as a key element of the current [CDS hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_hierarchy_glosry.htm "Glossary Entry"). Those elements of the [element list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_element_list.htm) can be defined as key elements that are placed without gaps at the start of the list. The key elements of the CDS entity are evaluated as follows if they are used as a data source of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement in ABAP SQL:

-   By the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm).
-   In implicit [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry").
    
    If a CDS role defined for a CDS entity is evaluated when the entity is accessed, its key elements must identify a unique row in the result set. If this is not the case, the internal instance of access control can produce duplicate entries or even incorrect results when aggregate functions are used. If a unique key cannot be determined for a CDS entity, no key element should be defined. A different instance of access control is then produced internally, which is less efficient.
    

Otherwise, the key elements of the CDS entity are used to document the semantics of the data model. The addition KEY is then ignored when the CDS hierarchy is activated and when other accesses are performed in program executions.

Caution: The key elements of a CDS entity do not define unique lines in its result with regard to the key. An application or framework accessing a CDS entity must expect duplicate entries for the key fields in the result set. If the lines of a result set should be unique in respect to a set of key elements, it is the task of the application or framework that provides the CDS entity to define them appropriately and to document the view accordingly.

Hints

-   In the ABAP SQL syntax check, the key elements are used in places where the key is respected.
-   The key elements are not relevant for the uniqueness of rows within the result set of the CDS hierarchy, which means that exceptions can be raised when making assignments to internal tables with appropriately unique table keys.

Addition 3   

... AS alias

Effect

Defines an alternative element name for the current element. The alternative element name replaces the actual name of the element. When the current CDS hierarchy is accessed, the alternative element names must be used instead of the actual name.

Continue
[CDS DDL - DEFINE HIERARCHY, element\_annot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_hiera_elem_annotation.htm)