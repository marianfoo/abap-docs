  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_projection_bo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Definition%2C%20Projection%20BDEF%2C%20ABENBDL_DEFINE_BEH_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

RAP - Entity Behavior Definition, Projection BDEF

Syntax

define behavior for ProjectedEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*{**\[*[implementation in class ClassName *\[*unique*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_in_class_unique.htm)*\]**}*
[entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character_projection.htm)
{
  [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_projection.htm)
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP projection business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") in the [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry"). A [RAP projection behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can project a subset or all of the nodes of its underlying base BO. The [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") ProjectedEntity must be a [CDS projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry").

Syntax additions and components:

-   An alias name can be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). The alias name is visible in the method syntax of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the business object and in the [derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm). The length of an alias name AliasName is restricted to 30 characters.
-   The optional addition external can be used to provide an alias name for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the alias name.
-   An ABAP behavior pool, referred to using implementation in class ClassName unique, can be specified for each entity that defines [new actions or functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm) and thus requires an implementation. It can be specified either in the [BDEF projection header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_projection_header.htm) or as part of the projection behavior definition.
-   [Entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character.htm) define general properties for each entity.
-   The [entity behavior body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) can expose a subset of the transactional behavior or the base BDEF, for example, standard operations or field properties. It is also possible to define [new actions or functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm), or new [field properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm).

Example

The following example shows a projection BDEF. The projected BO is DEMO\_SALES\_CDS\_BUPA\_2. It exposes the standard operations and associations of the underlying BO.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

projection;
foreign entity demo\_cds\_validation;
define behavior for DEMO\_RAP\_PROJECTION\_1 alias Parent
{
  use create;
  use update;
  use delete;
  use association \_BuPa { create; }
}
define behavior for DEMO\_RAP\_PROJECTION\_1\_CHILD alias Child
{
  use update;
  use delete;
  use association \_Address;
}

Continue
[RAP - Entity Behavior Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character_projection.htm)
[RAP - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_projection.htm)