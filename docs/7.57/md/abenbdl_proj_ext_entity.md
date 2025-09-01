  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) →  [CDS BDL - BDEF Projection Extension](javascript:call_link\('abenbdl_extensibility_projection.htm'\)) →  [CDS BDL - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Projection Extension Entity, ABENBDL_PROJ_EXT_ENTITY, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Projection Extension Entity

Syntax

[... define behavior for ProjectionEntity ...](javascript:call_link\('abenbdl_projection_bo.htm'\))

Prerequisites

-   As a prerequisite, the underlying [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") must explicitly allow BDEF extensions as described in topic [CDS BDL - Extensibility Enabling for CDS Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).
-   The extension node must be added to the RAP data model via [RAP data model extension](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").

Effect

A [projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") defines the behavior for an extension node in a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") using the statement define behavior for.

The projection behavior for this extension node is defined similar to projection BDEFs, see section [CDS BDL - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)). Note the following restrictions:

-   The [operation augment](javascript:call_link\('abenbdl_augment_projection.htm'\)) is currently not supported in BDEF extensions.

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See topic [CDS BDL - implementation in class unique, Extension](javascript:call_link\('abenbdl_in_class_unique_ext.htm'\)).

Example

The BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH. It behavior-enables an extension node using the syntax define behavior for, reusing operations from the projected BDEF and specifying field attributes.

extension for projection;
extend behavior for Root
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}

Executable Example

The executable example [BDEF Projection Extension, Node Extension](javascript:call_link\('abenbdl_entity_proj_ext_abexa.htm'\)) explains the example above in detail.