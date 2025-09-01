  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - RAP BO operation, additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) → 

CDS BDL - authorization:none

Syntax

... (authorization:none) ...

Effect

The RAP BO operation addition authorization:none excludes the operation in question from [authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm). As a prerequisite, [authorization control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) must be defined and implemented.

authorization:none can be used for the following operations:

-   the [standard operations create and delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm)
    
    Note: For the standard operation create, the addition authorization:none is only available in case of global authorization.
    
-   [operations for associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm)
-   [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm)
    
    Note: For static actions, the addition authorization:none is only available in case of global authorization.
    
-   [determine actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm)
-   [the draft action Edit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)

For actions and determine actions, the addition (authorization:none) can be used in authorization master and authorization dependent entities.

For create, delete, operations for associations, and the draft action Edit, this addition can only be used in the [authorization master entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry").

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"). For details, see [CDS BDL - authorization, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_projection.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Definition.

Hint

For details on authorization control in RAP, see topic [CDS BDL - authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).

Example

This example demonstrates the notation in the CDS behavior definition.

-   Standard operation: delete (authorization:none);
-   Association: association \_MyAssoc { create(authorization:none); }
-   Action: action (authorization:none) MyAction;
-   Determine action: determine action (authorization:none) MyDetAction{ ... }
-   Draft action: draft action (authorization:none) Edit;