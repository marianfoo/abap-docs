  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Definition%2C%20ABENBDL_DEFINE_BEH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Behavior Definition

Syntax

define behavior for RootEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*{**\[*[implementation in class ClassName *\[*unique*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm)*\]**}*
[entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm)
{
  [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm)
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can consist of one or more [entity behavior definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") that start with define behavior for, each one referring to a different [node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") of the business object. An entity behavior definition for the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") RootEntity must be included, whereas entity behavior definitions for [child entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry") are optional. If an entity does not have its own entity behavior definition, the entity does not have a transactional character. It is then not modifiable within the [ABAP RESTful application programming model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry").

In a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), the possible root entities RootEntity are [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") (deprecated).

In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), the possible root entities RootEntity are [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS custom entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entity_glosry.htm "Glossary Entry"), or [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") (deprecated). Note: Custom entities serve as data model basis for [RAP unmanaged queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_unmanged_query_glosry.htm "Glossary Entry").

Syntax additions and components:

-   An alias name can be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). The alias name is visible in the method syntax of the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_behavior_pools.htm) of the business object and in the [derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm). The length of an alias name AliasName is restricted to 30 characters.
-   The optional addition external can be used to provide an alias name for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the alias name.
-   An [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), referred to using [RAP BDL - implementation in class unique](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique.htm), can be specified for each entity.
-   [entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) define general properties for each entity.
-   The [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) defines, among others, [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations.htm) and [field characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm) that define and restrict the access of a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to the respective entity.

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm) is enabled, no gaps are allowed in the behavior enablement of a [composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry"). For example, if a composition tree consists of entities 1 (root), 2 (child), and 3 (grandchild), the definition of a behavior for entities 1 and 3 but not for entity 2 is not allowed, as that would be a gap.
-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm) is enabled, the underlying CDS entities RootEntity, ChildEntity1, ChildEntity2 and so on, must be [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. The CDS composition tree consists of the root entity and one child entity. For both entities, an entity behavior definition is defined.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root
persistent table demo\_dbtab\_root
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_ext { create; }
  field ( readonly:update ) KeyFieldRoot;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    DecFieldRoot = dec\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child
persistent table demo\_dbtab\_child
lock dependent by \_parent
{
  update;
  delete;
  association \_parent { }
  field ( readonly:update ) KeyField, KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}

Example

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. The CDS composition tree consists of the root entity and one child entity. For both entities, an entity behavior definition is defined.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;
strict(2);
with draft;
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
authorization master ( global, instance )
{
  create;
  update;
  delete;
  field ( readonly:update ) KeyFieldRoot;
  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare;
  association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity
draft table demo\_draft\_child
lock dependent by \_parent
etag dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  association \_parent { with draft; }
  field ( readonly:update ) keyfield, KeyFieldChild;
}

The behavior is defined in the CCIMP include of the ABAP behavior pool.

Continue
[RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm)
[RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm)