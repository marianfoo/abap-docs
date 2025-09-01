  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20authorization%3Anone%2C%20ABENBDL_ACTIONS_AUTH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - authorization:none

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
-   [Projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). For details, see [RAP BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap).

Hints

-   For details on authorization control in RAP, see topic [RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).
-   In managed, unmanaged, and projection RAP BOs, authorization control can be specified in the authorization master entity and applies to all actions. The operation additions authorization:none, [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)), [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\)), and [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\)) are optional. However, in [base BDEF extensions](javascript:call_link\('abenrap_base_bdef_ext_glosry.htm'\) "Glossary Entry"), authorization control must be specified for each action separately. The reason for this is that the authorization control of extension actions should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.

Example

This example demonstrates the notation in the RAP behavior definition.

-   Standard operation: delete (authorization:none);
-   Association: association \_MyAssoc { create(authorization:none); }
-   Action: action (authorization:none) MyAction;
-   Determine action: determine action (authorization:none) MyDetAction{ ... }
-   Draft action: draft action (authorization:none) Edit;