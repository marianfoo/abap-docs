  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [RAP - action](javascript:call_link\('abenbdl_action.htm'\)) →  [RAP - action, factory](javascript:call_link\('abenbdl_action_factory.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Default%20Factory%20Action%2C%20ABENBDL_ACTION_DEFAULT_FACTORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Default Factory Action

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* [static](javascript:call_link\('abenbdl_static.htm'\)) default factory action
                  *\[*(
                  *\[* [features: global](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                   \[1\]

Effect

Exactly one static factory action per [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") can be defined as default static factory action using the syntax addition default. The same rules apply as for factory actions, see topic [RAP - action, factory](javascript:call_link\('abenbdl_action_factory.htm'\)).

The addition default is evaluated by consuming frameworks, such as OData. These frameworks use the default factory action as standard action in certain scenarios.

Possible [RAP BO operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) to default factory actions:

-   [internal](javascript:call_link\('abenbdl_internal.htm'\))
-   [static](javascript:call_link\('abenbdl_static.htm'\))
-   [features:global](javascript:call_link\('abenbdl_actions_fc.htm'\))
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))
-   [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))
-   [authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))
-   [external](abenbdl_action_nonfactory.htm#!ABAP_ADDITION_2@2@)
-   [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   For [projection BOs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), the following rules apply:
    -   The default factory action from the base BDEF can be reused. For details on reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
    -   It is also possible to specify a new default factory action in the projection layer.
    -   If the default factory action from the base BO is reused, and at the same time, a new default factory action is defined in the projection BDEF, the default factory from the projection is considered to be the default. It overwrites the default factory action from the base BDEF.
    -   Further details on actions and functions in projection BDEFs are described in topic [RAP BDL - Actions and Functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Restriction

The specification of default factory actions in a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") is not allowed.

Example

The following example shows a managed BDEF which defines a static default factory action:

managed
implementation in class bp\_demo\_rap\_default\_factory\_a unique;
strict ( 2 );
define behavior for DEMO\_RAP\_DEFAULT\_FACTORY\_A alias Root
persistent table demo\_dbtab\_root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
  static default factory action sdfa \[1\];
  static factory action sfa \[1\];
}

The projection BDEF reuses the static default factory action from the base BDEF and specifies a new static default factory action. Consuming frameworks consider the static default factory action from the projection BDEF as default.

projection
implementation in class bp\_demo\_rap\_dfa\_pv unique;
strict ( 2 );
define behavior for DEMO\_RAP\_DFA\_PV alias RootProjection
{
  use create;
  use update;
  use delete;
  use action sdfa;
  use action sfa;
  static default factory action sdfa\_proj \[1\];
}