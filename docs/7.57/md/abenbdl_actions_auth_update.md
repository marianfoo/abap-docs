  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) →  [CDS BDL - Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations.htm) →  [CDS BDL - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations_additions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - authorization:update, ABENBDL_ACTIONS_AUTH_UPDATE, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - authorization:update

Syntax

... (authorization:update) ...

Effect

The RAP BO operation addition authorization:update delegates the [authorization check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) for the operation in question to the update operation. That means that an operation specified as authorization:update has the same authorization control that is specified for the update operation.

As a prerequisite, [authorization control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) must be defined and implemented. However, it is not required that the update operation is enabled for the entity in question. You can delegate the authorization for operations to the update operation even though the update operation is not enabled for this entity.

authorization:update can be used for the following operations:

-   the [standard operation delete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm)
-   the [create-by-association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") operation
-   [actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm)
-   [determine actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm)

Note: The authorization for internal actions cannot be delegated. Internal actions do not have authorization checks in general, as they are only invoked internally.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"). For details, see [CDS BDL - authorization, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_projection.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Definition.

Hints

-   For details on authorization control in RAP, see topic [CDS BDL - authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).
-   Remember: Standard operations in authorization-dependent entities are automatically delegated to the update operation of the [authorization master entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry").
-   If you delegate the authorization for an [action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") in an authorization-dependent entity to the update operation, it will be delegated to the update operation of the authorization master entity in the end.

Example

An example for authorization:update in a projection BDEF is provided in the topic about authorization control in projection BDEFs, see [CDS BDL - authorization, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_projection.htm).