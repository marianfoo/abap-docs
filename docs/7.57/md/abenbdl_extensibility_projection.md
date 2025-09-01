  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - BDEF Projection Extension, ABENBDL_EXTENSIBILITY_PROJECTION, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - BDEF Projection Extension

A [BDEF projection extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") is a repository object that extends a [CDS projection behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") using the statement [extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_for_projection.htm).

As a prerequisite, the respective projection BDEF must explicitly allow extensions as described in topic [Extensibility Enabling for CDS Projection BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_enabling_projection.htm).

The following image shows the possible components of a BDEF projection extension:

![Figure](bdef_projection_extension_struc.jpg)

-   The [BDEF projection extension header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_proj_ext_header_glosry.htm "Glossary Entry") is a mandatory component that starts with [extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_for_projection.htm).
-   An [entity projection extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_proj_ext_glosry.htm "Glossary Entry") is an optional component. It extends the behavior of an existing RAP BO entity of a BDEF projection. It starts with [extend behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh_proj.htm).
-   A [projection extension entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_proj_ext_entity_glosry.htm "Glossary Entry") is an optional component that defines the behavior for the projection of an extension node. It starts with [define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_proj_ext_entity.htm).
-   An [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") can be added or an [own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry") may be extended.

Continue
[CDS BDL - extension for projection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_for_projection.htm)