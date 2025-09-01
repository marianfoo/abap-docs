  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Projection Extension, ABENBDL_EXTEND_BEH_PROJ, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Projection Extension

Syntax

extend behavior for ProjectionEntity
  *\[* [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\))*\]*
  *\[*[authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*
{
   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\))
}
...

Effect

An [entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") extends a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") ProjectionEntity. As a prerequisite, extensions must be explicitly enabling as described in topic [Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).

Syntax additions and components:

-   [implementation in class ClassName unique](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)): specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [extension](javascript:call_link\('abenrap_prefix_extension_glosry.htm'\) "Glossary Entry") behavior of the particular entity. Optional and only required if the entity in question defines new actions or functions. The rules for extension ABPs apply, see topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).
-   [authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\)):
    -   Defines authorization control for actions that were added in the projection layer via a BDEF projection extension.
    -   Optional and only useful in combination with new actions.
    -   Works in the same way as for projection BDEFs, see topic [CDS BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).
-   [projection\_extension\_body](javascript:call_link\('abenbdl_proj_ext_body.htm'\)): extends the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of a projection BDEF.

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD.

It adds field attributes to extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Executable Example

The executable example [BDEF Projection Extension, Field Extension](javascript:call_link\('abenbdl_entity_proj_ext_1_abexa.htm'\)) explains the example above in detail.

Continue
[CDS BDL - extension\_body, Projection Extension](javascript:call_link\('abenbdl_proj_ext_body.htm'\))