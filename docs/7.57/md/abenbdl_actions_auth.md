  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - authorization:none, ABENBDL_ACTIONS_AUTH, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - authorization:none

Syntax

... (authorization:none) ...

Effect

The RAP BO operation addition authorization:none excludes the operation in question from [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)). As a prerequisite, [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) must be defined and implemented.

authorization:none can be used for the following operations:

-   the [standard operations create and delete](javascript:call_link\('abenbdl_standard_operations.htm'\))
    
    Note: For the standard operation create, the addition authorization:none is only available in case of global authorization.
    
-   [operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [actions](javascript:call_link\('abenbdl_action.htm'\))
    
    Note: For static actions, the addition authorization:none is only available in case of global authorization.
    
-   [determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))
-   [the draft action Edit](javascript:call_link\('abenbdl_draft_action.htm'\))

For actions and determine actions, the addition (authorization:none) can be used in authorization master and authorization dependent entities.

For create, delete, operations for associations, and the draft action Edit, this addition can only be used in the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry").

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). For details, see [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Definition.

Hint

For details on authorization control in RAP, see topic [CDS BDL - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).

Example

This example demonstrates the notation in the CDS behavior definition.

-   Standard operation: delete (authorization:none);
-   Association: association \_MyAssoc { create(authorization:none); }
-   Action: action (authorization:none) MyAction;
-   Determine action: determine action (authorization:none) MyDetAction{ ... }
-   Draft action: draft action (authorization:none) Edit;