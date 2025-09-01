  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20BDEF%20Projection%20Extension%2C%20ABENBDL_EXTENSIBILITY_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

RAP - BDEF Projection Extension

A [BDEF projection extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") is a repository object that extends a [RAP projection behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") using the statement [extension for projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_projection.htm).

As a prerequisite, the respective projection BDEF must explicitly allow extensions as described in topic [RAP - Extensibility Enabling for Projection BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_enabling_projection.htm).

The following image shows the possible components of a BDEF projection extension:

![Figure](bdef_projection_extension_struc.jpg)

-   The [BDEF projection extension header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_proj_ext_header_glosry.htm "Glossary Entry") is a mandatory component that starts with [extension for projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_projection.htm).
-   An [entity projection extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_proj_ext_glosry.htm "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity of a BDEF projection. It starts with [extend behavior for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extend_beh_proj.htm).
-   A [projection extension entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry") is an optional component that defines the behavior for the projection of an extension node. It starts with [define behavior for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_proj_ext_entity.htm).
-   An [authorization context for disable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can be added or a [full authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry") may be extended.

Continue
[RAP - extension for projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_projection.htm)