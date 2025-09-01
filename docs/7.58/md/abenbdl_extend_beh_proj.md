  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - BDEF Projection Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_projection.htm) →  [RAP - extension for projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension_for_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Projection%20Extension%2C%20ABENBDL_EXTEND_BEH_PROJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Projection Extension

Syntax

extend behavior for ProjectionEntity
  *\[* [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique_ext.htm)*\]*
  *\[*[authorization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm)*\]*
{
   [projection\_extension\_body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_proj_ext_body.htm)
}
...

Effect

An [entity projection extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_proj_ext_glosry.htm "Glossary Entry") extends a [projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") ProjectionEntity. As a prerequisite, extensions must be explicitly enabling as described in topic [RAP - Extensibility Enabling for Projection BDEFs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_ext_enabling_projection.htm).

Syntax additions and components:

-   [implementation in class ClassName unique](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique_ext.htm): specifies an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the [extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_prefix_extension_glosry.htm "Glossary Entry") behavior of the particular entity. Optional and only required if the entity in question defines new actions or functions. The rules for extension ABPs apply, see topic [RAP - implementation in class unique, Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_in_class_unique_ext.htm).
-   [authorization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm):
    -   Defines authorization control for actions that were added in the projection layer via a BDEF projection extension.
    -   Optional and only useful in combination with new actions.
    -   Works in the same way as for projection BDEFs, see topic [RAP BDL - authorization, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm).
-   [projection\_extension\_body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_proj_ext_body.htm): extends the [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_body_glosry.htm "Glossary Entry") of a projection BDEF.

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_BDEF\_EXT extends the RAP projection behavior definition DEMO\_RAP\_PROJ\_EXT\_FIELD.

It adds field attributes to extension fields.

extension for projection;
extend behavior for Root {
field(suppress) char\_field\_ext;
field(readonly:update) int\_field\_ext;
}

Executable Example

The executable example [BDEF Projection Extension, Field Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_entity_proj_ext_1_abexa.htm) explains the example above in detail.

Continue
[RAP - extension\_body, Projection Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_proj_ext_body.htm)