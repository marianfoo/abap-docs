---
title: "RAP - define own authorization context"
description: |
  Syntax define own authorization context by privileged mode;  define own authorization context by privileged mode and  AuthObject1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm); AuthObject2(https://help.sap.com/doc/abapdocu_latest_inde
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm"
abapFile: "abenbdl_def_own_auth_context.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "abenbdl", "def", "own", "auth", "context"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Authorization Context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20define%20own%20authorization%20context%2C%20ABENBDL_DEF_OWN_AUTH_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

RAP - define own authorization context

Syntax

  define own authorization context by privileged mode;
*|* define own authorization context by privileged mode and
  {
  *\[*[AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*[AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
  }
*|* define own authorization context
  {
  *\[*[AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*[AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
  }

Effect

Defines a [full authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry") for a RAP BO. A full authorization context lists one or multiple [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") which are checked by the implementation methods of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") itself, or by existing code that is called by the ABAP behavior pool implementation. The full authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive.

Three different notation options exist:

-   define own authorization context by privileged mode;
    
    When using this option, the authorization context ContextName specified after [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm) is copied to the full authorization context. In other words, the authorization objects which are disabled in [BDEF privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_privileged_mode_glosry.htm "Glossary Entry") are automatically reused for the full authorization context.
    
    You can use this notation when the full authorization context is identical to the context used for the privileged mode, meaning when privileged mode disables all authorization objects without exception.
    
-   define own authorization context by privileged mode and {...}
    
    This syntax variant copies all authorization objects which are disabled in BDEF privileged mode and it allows you to specify further authorization objects AuthObject1, AuthObject2, ... after and for the full authorization context.
    
-   define own authorization context {...}
    
    When using this option, you must individually list all authorization objects AuthObject1, AuthObject2, .... that are checked in the ABAP behavior pool. This syntax variant is useful for a BDEF without privileged mode.
    

A full authorization context may be defined before, between, or after the [entity behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry"). It is possible to define an empty full authorization context define own authorization context { ... }. One RAP behavior definition can have no more than one full authorization context.

Dependency

All authorization objects listed in a full authorization context which are allowed in a privileged authorization context as per their configuration must be listed in a privileged context. Otherwise, a syntax check warning occurs.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"): a projection BDEF can define a full authorization context independently of the projected BDEF. This means that a full authorization context can be defined in the projection layer even if the projected entity does not have a full authorization context.

Hints

-   In transaction SAAB, contract check CC\_RAP\_CONTRACT can be switched on. This contract check enforces a complete and exhaustive full authorization context. This includes not only authorization objects that are implemented in the current RAP BO's behavior pool, but also authorization objects that are implemented in other RAP BOs that are called by the current RAP BO. In other words, the authorization objects of the current ABAP behavior pool and of all existing code that is called by the current ABAP behavior pool must be listed in the full authorization context.
-   In transaction SU22, a full authorization context is used to generate authorization default values.

Example

The following managed BDEF defines three authorization contexts:

-   ac\_2
-   ac\_priv
-   A full authorization context

with privileged mode disabling disables ac\_priv and the full authorization context reuses the authorization objects listed in ac\_priv. It adds one further authorization object to the full authorization context.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_auth.htm) is not implemented here. In a real-life scenario, the authorization objects from the full authorization context would be implemented in this RAP handler method.

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
  field ( readonly ) key\_field;
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