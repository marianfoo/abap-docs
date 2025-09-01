  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entity Extension](javascript:call_link\('abencds_view_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20EXTEND%20CUSTOM%20ENTITY%2C%20ABENCDS_EXTEND_CUSTOM_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - EXTEND CUSTOM ENTITY

Syntax

EXTEND CUSTOM ENTITY CustomEntity WITH
  { ElementListExtension }

Effect

Extends an existing [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") CustomEntity using a [CDS custom entity extension](javascript:call_link\('abencds_cus_entity_extend_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). An existing CDS custom entity can have one or more CDS custom entity extensions.

Prerequisite

As a prerequisite, the extended entity must allow extensions. Extensions are allowed by default or can be explicitly allowed with the annotation [AbapCatalog.extensibility.extensible](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) with the value true. If the value false is specified, extensions are not allowed.

Components of a Custom Entity Extension

Custom entity extensions can make additions to the original entity, but they cannot modify, overwrite, or delete elements from the original entity. A custom entity extension can specify only features that are possible within custom entities, but with some limitations. The following can be specified in a custom entity extension:

-   New elements. These new elements are defined as described in topic [DEFINE CUSTOM ENTITY, Element](javascript:call_link\('abencds_f1_custom_element.htm'\)). Those elements can have [element annotations](javascript:call_link\('abencds_f1_custom_element_anno.htm'\)). New key elements are not possible.
-   New associations \_assoc1, \_assoc2 can be defined in the CDS custom entity extension. The same rules apply that are described in topic [DEFINE CUSTOM ENTITY, association](javascript:call_link\('abencds_f1_custom_association.htm'\)).
-   New [to-child associations](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") \_compos1, \_compos2 can be defined in the CDS custom entity extension under the condition that the composition target is also defined as composition child and has the required to-parent association. The composition target is the extended custom entity, not the extension itself. The same rules apply that are described in topic [DEFINE CUSTOM ENTITY, Composition](javascript:call_link\('abencds_f1_custom_composition.htm'\)).
-   Each appended element must have a unique name.

Elements that are added to a custom entity by an extension change the custom entity signature. The ABAP class that implements the CDS custom entity can access the original and the extension fields.

Restrictions

-   CDS custom entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\)) in a custom entity extension.
-   [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") must not be defined in a custom entity extension.
-   No addition ROOT can be specified in the statement EXTEND CUSTOM ENTITY to transform a regular entity to a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry").
-   An appended element cannot be defined as a KEY element.
-   In a custom entity extension, [header annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) are not supported. That means that no annotations are allowed in front of the statement EXTEND CUSTOM ENTITY.

Hint

As stated above, a custom entity extension changes the custom entity signature of the ABAP class that implements the custom entity. To use the extension elements, the following options exist:

-   If the implementing ABAP class selects data from data sources, such as CDS entities or DDIC database tables, these data sources can also be extended. The custom entity extension fields can be passed to the extension fields of the data source with MOVE-CORRESPONDING.
-   If a customer wants to process the extension fields in the custom entity implementation, this can be enabled via BAdIs provided by the owner of the custom entity.

Example

The CDS custom entity extension DEMO\_CDS\_EXTEND\_CUSTOM

extend custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM with
{
  col4    : abap.char(1);
  @ObjectModel.sort.enabled: false
  @ObjectModel.filter.enabled: false
  \_assoc  : association to DEMO\_CDS\_CUSTOM\_ENTITY  
    on $projection.col2 = \_assoc.id;
  \_compos : composition of exact one to one DEMO\_CDS\_CUSTOM\_CHILD;
}

adds a new element and two new associations to the existing CDS custom entity.

@EndUserText.label: 'CDS custom entity, extended entity'
@AbapCatalog.extensibility.extensible: true
define root custom entity DEMO\_CDS\_ORIGINAL\_CUSTOM
  with parameters
    param1 : abap.int4
{
  key col1 : abap.char( 5 );
      col2 : abap.int4;
      col3 : abap.int4;
}