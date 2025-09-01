  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) → 

CDS BDL - entity behavior definition, projection BDEF

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
[CDS BDL - entity behavior characteristics, projection BDEF](javascript:call_link\('abenbdl_character_projection.htm'\))
[CDS BDL - entity behavior body, projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\))