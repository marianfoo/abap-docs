  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - RAP BO operation, additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

CDS BDL - authorization:update

Syntax

... (authorization:update) ...

Effect

The RAP BO operation addition authorization:update delegates the [authorization check](javascript:call_link\('abenbdl_authorization.htm'\)) for the operation in question to the update operation. That means that an operation specified as authorization:update has the same authorization control that is specified for the update operation.

As a prerequisite, [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) must be defined and implemented. However, it is not required that the update operation is enabled for the entity in question. You can delegate the authorization for operations to the update operation even though the update operation is not enabled for this entity.

authorization:update can be used for the following operations:

-   the [standard operation delete](javascript:call_link\('abenbdl_standard_operations.htm'\))
-   the [create-by-association](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") operation
-   [actions](javascript:call_link\('abenbdl_action.htm'\))
-   [determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))

Note: The authorization for internal actions cannot be delegated. Internal actions do not have authorization checks in general, as they are only invoked internally.

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). For details, see [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Definition.

Hints

-   For details on authorization control in RAP, see topic [CDS BDL - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).
-   Remember: Standard operations in authorization-dependent entities are automatically delegated to the update operation of the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry").
-   If you delegate the authorization for an [action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") in an authorization-dependent entity to the update operation, it will be delegated to the update operation of the authorization master entity in the end.

Example

An example for authorization:update in a projection BDEF is provided in the topic about authorization control in projection BDEFs, see [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).