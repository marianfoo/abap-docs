---
title: "CDS BDL - Extensibility Enabling for CDS Projection BDEFs"
description: |
  Syntax projection(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm) strict(version)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm); extensible(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensible.h
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_enabling_projection.htm"
abapFile: "abenbdl_ext_enabling_projection.htm"
keywords: ["update", "delete", "do", "if", "try", "data", "abenbdl", "ext", "enabling", "projection"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_enabling.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Extensibility Enabling for CDS Projection BDEFs, ABENBDL_EXT_ENABLING_PROJE
CTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Extensibility Enabling for CDS Projection BDEFs

Syntax

[projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm)
[strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm);
[extensible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensible.htm);
[define behavior for ProjectedEntity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_projection.htm)
  [extensible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensible.htm)
  *\[*...*\]*
{
  *\[*...*\]*
  *\[* [mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping.htm)*\]*
  *\[*...*\]*
}
...

Prerequisite

To allow [BDEF projection extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") to a [CDS projection behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") must be switched on using the keyword [strict *\[*(version)*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict.htm).

Effect

The keyword extensible can be specified at different places to allow for extensions:

-   extensible in the [CDS behavior definition header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry")
    
    Prerequisite for extensibility. If it is not specified, then extensions are not allowed. If specified, at least one RAP BO entity must be declared as extensible in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_properties_glosry.htm "Glossary Entry").
    
    Allows the following components to be added to a [CDS projection behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") via a BDEF projection extension:
    
    -   [RAP foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry")
    -   Adding a new [RAP authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") and extending an existing [own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry") from the extended entity.
    -   Defining behavior for an extension node on the projection layer by means of a [RAP projection extension entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry").
-   extensible in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_properties_glosry.htm "Glossary Entry")
    
    Mandatory for each individual [RAP BO entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") that allows extensions.
    
    Allows the following behavior extensions to be added via a BDEF projection extension for the RAP BO entity in question:
    
    -   [RAP field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_field_char_glosry.htm "Glossary Entry") can be added to extension fields.
    -   [RAP actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") including [authorization control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_auth_control_glosry.htm "Glossary Entry"), [feature control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_feature_control_glosry.htm "Glossary Entry"), and [precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_precheck_glosry.htm "Glossary Entry").
    -   [RAP functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry")
    -   Reuse of actions, functions, and associations from the original RAP BO of type managed or unmanaged.
    -   [RAP type mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry")
-   extensible in the [entity behavior body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_body_glosry.htm "Glossary Entry"):
    
    [mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping.htm): a [RAP type mapping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") defined in the extended RAP business object can be extended with extension fields. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.
    

Note: It is not required that the underlying [projected BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry") is declared as extensible. A BDEF projection can be extensible independently of the projected RAP BO.

Example

The CDS projection behavior definition for DEMO\_RAP\_PROJ\_EXTEND enables BDEF extensions:

projection;
strict(2);
use draft;
extensible;
define own authorization context { 'AUTHOBJ7';}
define behavior for DEMO\_RAP\_PROJ\_EXTEND alias ProjRoot
extensible
use etag
{
  use create;
  use update;
  use delete;
  use action trigger\_all;
  use action Edit;
  use action Activate;
  use action Discard;
  use action Resume;
  use action Prepare;
  mapping for demo\_dbtab\_root corresponding extensible;
}

Executable Examples

-   [BDEF Projection Extension, Node Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_abexa.htm)
-   [BDEF Projection Extension, Field Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_proj_ext_1_abexa.htm)