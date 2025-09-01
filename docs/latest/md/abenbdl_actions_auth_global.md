  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20authorization%3Aglobal%2C%20ABENBDL_ACTIONS_AUTH_GLOBAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - authorization:global

Syntax

... (authorization:global) ...

Effect

The [RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) authorization:global replaces the [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) that is specified in the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry") and applies global authorization checks instead. It can be used for [actions](javascript:call_link\('abenbdl_action.htm'\)) and [determine actions](javascript:call_link\('abenbdl_determine_action.htm'\)) in authorization master and authorization dependent entities.

It is possible to combine authorization:global and [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\)) for an action or a determine action. Then, both [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"), [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) and [FOR INSTANCE AUTHORIZATION](javascript:call_link\('abaphandler_meth_auth.htm'\)), are checked before the action is executed. Example:

action ( authorization : global, authorization : instance ) MyAction;

If no authorization control is specified for an action, the authorization mode of the [authorization master](javascript:call_link\('abenbdl_authorization.htm'\)) (global, instance, or both) is used for the action by default.

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). For details, see [RAP BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).
-   [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") to managed, unmanaged, and projection BDEFs.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).
-   For details on authorization control in RAP, see topic [RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).

Hints

-   In managed, unmanaged, and projection RAP BOs, authorization control can be specified in the authorization master entity and applies to all actions. The operation additions [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\)), [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)), authorization:global, and [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\)) are optional. However, in [base BDEF extensions](javascript:call_link\('abenrap_base_bdef_ext_glosry.htm'\) "Glossary Entry"), authorization control must be specified for each action separately. The reason for this is that the authorization control of extension actions should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.
-   authorization:global cannot be used for [internal operations](javascript:call_link\('abenbdl_internal.htm'\)).

Example

This example demonstrates authorization control for RAP actions in a BDEF extension. The base behavior definition DEMO\_RAP\_AUTH\_GLOBAL defines instance-based authorization control in the authorization master entity.

managed implementation in class bp\_demo\_rap\_auth\_global unique;
strict ( 2 );
extensible;
define behavior for DEMO\_RAP\_AUTH\_GLOBAL alias Root
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

The BDEF extension DEMO\_RAP\_AUTH\_GLOBAL\_X1 defines new extension actions with authorization control that replaces the authorization control from the original BDEF. The extension actions and the respective authorization control are implemented in the extension ABAP behavior pool.

extension using interface DEMO\_RAP\_GLOBAL\_AUTH\_INT
implementation in class bp\_demo\_rap\_auth\_global\_x1 unique;
extend behavior for Root
{
  action ( authorization : instance ) ext1AuthInstance;
  action ( authorization : global ) ext1AuthGlobal;
  action ( authorization : global, authorization : instance )
    ext1AuthGlobalInstance;
  action ( authorization : none ) ext1AuthNone;
  association \_child { create; }
}
define behavior for DEMO\_RAP\_AUTH\_GLOBAL\_CH alias Child
  using DEMO\_RAP\_GLOBAL\_AUTH\_INT\_CH
persistent table demo\_dbtab\_child
lock dependent
authorization dependent
{
  update;
  delete;
  field ( readonly ) key\_field, key\_field\_child;
  association \_parent;
  action ( authorization : update ) ext1AuthUpdate;
}