  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Projection%20Extension%2C%20ABENBDL_EXTENSIBILITY_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

RAP - BDEF Projection Extension

A [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") is a repository object that extends a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") using the statement [extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)).

As a prerequisite, the respective projection BDEF must explicitly allow extensions as described in topic [RAP - Extensibility Enabling for Projection BDEFs](javascript:call_link\('abenbdl_ext_enabling_projection.htm'\)).

The following image shows the possible components of a BDEF projection extension:

![Figure](bdef_projection_extension_struc.jpg)

-   The [BDEF projection extension header](javascript:call_link\('abenrap_proj_ext_header_glosry.htm'\) "Glossary Entry") is a mandatory component that starts with [extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)).
-   An [entity projection extension](javascript:call_link\('abenrap_entity_proj_ext_glosry.htm'\) "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity of a BDEF projection. It starts with [extend behavior for](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)).
-   A [projection extension entity](javascript:call_link\('abenrap_proj_ext_entity_glosry.htm'\) "Glossary Entry") is an optional component that defines the behavior for the projection of an extension node. It starts with [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)).
-   An [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") can be added or a [full authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") may be extended.

Continue
[RAP - extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\))