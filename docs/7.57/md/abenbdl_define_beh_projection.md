  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Definition, Projection BDEF, ABENBDL_DEFINE_BEH_PROJECTION,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Definition, Projection BDEF

Syntax

define behavior for ProjectedEntity *\[*alias AliasName*\]* *\[*external ExternalName*\]*
*{**\[*[implementation in class ClassName *\[*unique*\]*](javascript:call_link\('abenbdl_in_class_unique.htm'\))*\]**}*
[entity behavior characteristics](javascript:call_link\('abenbdl_character_projection.htm'\))
{
  [entity behavior body](javascript:call_link\('abenbdl_body_projection.htm'\))
}
*\[*behavior for ChildEntity1*\]**\[*, behavior for ChildEntity2*\]**\[*, ...
*\]*

Effect

Defines the behavior for a [RAP projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") in the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry"). A [CDS projection behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") can project a subset or all of the nodes of its underlying base BO. The [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") ProjectedEntity must be a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry").

Syntax additions and components:

-   An alias name can be specified using the keyword alias. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). The alias name is visible in the method syntax of the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") of the business object and in the [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)). The length of an alias name AliasName is restricted to 30 characters.
-   The optional addition external can be used to provide an alias name for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the alias name.
-   An ABAP behavior pool, referred to using implementation in class ClassName unique, can be specified for each entity that defines [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)) and thus requires an implementation. It can be specified either in the [BDEF projection header](javascript:call_link\('abenbdl_bdef_projection_header.htm'\)) or as part of the projection behavior definition.
-   [Entity behavior characteristics](javascript:call_link\('abenbdl_character.htm'\)) define general properties for each entity.
-   The [entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) can expose a subset of the transactional behavior or the base BDEF, for example, standard operations or field properties. It is also possible to define [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)), or new [field properties](javascript:call_link\('abenbdl_field_projection.htm'\)).

Example

The following example shows a projection BDEF. The projected BO is DEMO\_SALES\_CDS\_BUPA\_2. It exposes the standard operations and associations of the underlying BO.

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
[CDS BDL - Entity Behavior Characteristics, Projection BDEF](javascript:call_link\('abenbdl_character_projection.htm'\))
[CDS BDL - Entity Behavior Body, Projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\))