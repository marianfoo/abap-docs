  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Authorization Context](javascript:call_link\('abenbdl_authorization_context.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - define own authorization context, ABENBDL_DEF_OWN_AUTH_CONTEXT, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - define own authorization context

Syntax

  define own authorization context by privileged mode;
*|* define own authorization context by privileged mode and
  {
  *\[*[AuthObject1](javascript:call_link\('abenbc_authority_check.htm'\));*\]*
  *\[*[AuthObject2](javascript:call_link\('abenbc_authority_check.htm'\));*\]*
  *\[*...*\]*
  }
*|* define own authorization context
  {
  *\[*[AuthObject1](javascript:call_link\('abenbc_authority_check.htm'\));*\]*
  *\[*[AuthObject2](javascript:call_link\('abenbc_authority_check.htm'\));*\]*
  *\[*...*\]*
  }

Effect

Defines an [own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") for a RAP BO. An own authorization context lists one or multiple [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") which are checked by the implementation methods of the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") itself, or by existing code that is called by the ABAP behavior pool implementation. The own authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive, otherwise, a syntax check warning occurs.

Three different notation options exist:

-   define own authorization context by privileged mode;
    
    When using this option, the authorization context ContextName specified after [with privileged mode disabling ContextName](javascript:call_link\('abenbdl_privileged_mode.htm'\)) is copied to the own authorization context. In other words, the authorization objects which are disabled in [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") are automatically reused for the own authorization context.
    
    You can use this notation when the own authorization context is identical to the context used for the privileged mode, meaning when privileged mode disables all authorization objects without exception.
    
-   define own authorization context by privileged mode and {...}
    
    This syntax variant copies all authorization objects which are disabled in BDEF privileged mode and it allows you to specify further authorization objects AuthObject1, AuthObject2, ... after and for the own authorization context.
    
-   define own authorization context {...}
    
    When using this option, you must individually list all authorization objects AuthObject1, AuthObject2, .... that are checked in the ABAP behavior pool. This syntax variant is useful for a BDEF without privileged mode.
    

An own authorization context may be defined before, between, or after the [entity behavior definitions](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry"). It is possible to define an empty own authorization context define own authorization context { ... }. One CDS behavior definition can have no more than one own authorization context.

Dependency

All authorization objects listed in an own authorization context which are allowed in a privileged authorization context as per their classification in transaction SU21 must be listed in a privileged context. Otherwise, a syntax check warning occurs.

Use

An own authorization context is respected in the following cases:

-   By transaction SU22 to generate authorization default values.
-   By contract checks which enforce a complete and exhaustive own authorization context when switched on.

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BDEF](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"): a projection BDEF can define an own authorization context independently of the projected BDEF. This means that an own authorization context can be defined in the projection layer even if the projected entity does not have an own authorization context.

Hint

-   In transaction SAAB, contract check CC\_RAP\_CONTRACT can be switched on. This contract check enforces a complete and exhaustive own authorization context.

Example

The following managed BDEF defines three authorization contexts:

-   ac\_2
-   ac\_priv
-   An own authorization context

with privileged mode disabling disables ac\_priv and the own authorization context reuses the authorization objects listed in ac\_priv. It adds one further authorization object to the own authorization context.

managed implementation in class bp\_demo\_rap\_own\_ac\_short unique;
strict(2);
with privileged mode disabling ac\_priv;
define behavior for DEMO\_RAP\_OWN\_AC\_SHORT alias Root
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}
define authorization context ac\_2
{
  'AUTHOBJ1';
  'AUTHOBJ2';
}
define authorization context ac\_priv
{
  'AUTHOBJ3';
}
define own authorization context by privileged mode and
{
  'AUTHOBJ5';
}