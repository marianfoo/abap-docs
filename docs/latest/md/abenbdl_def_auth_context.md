---
title: "RAP - define authorization context"
description: |
  Syntax define authorization context ContextName for disable(modifyreadmodify,read)  AuthObject1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);  AuthObject2(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_auth_context.htm"
abapFile: "abenbdl_def_auth_context.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "def", "auth", "context"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Authorization Context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20define%20authorization%20context%2C%20ABENBDL_DEF_AUTH_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - define authorization context

Syntax

define authorization context ContextName
      *\[**{*for disable(*{*modify*|*read*|*modify,read*}*)*}**\]*
{
   [AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);
  *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}

Effect

A [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can define [authorization contexts for disable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_context_glosry.htm "Glossary Entry") using the statement define authorization context. Authorization contexts for disable list multiple [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that are used for the ABAP statement [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm). When an authorization context for disable is activated, authority checks for all associated authorization objects are always successful; in other words, the respective authorization checks are skipped. This can be useful, for example, when a BDEF implements its own [authorization check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) and then calls existing code, which again has its own authorization checks.

One RAP behavior definition can define one or more authorization contexts for disable. The contexts may be defined before, between, or after the entity behavior definitions. Each context can contain one or more [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") AuthObject1, AuthObject2, .... It is also possible to define an empty authorization context for disable. This can be useful when using [BDEF privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm): to enable BDEF privileged mode, it is mandatory to specify at least one authorization context for disable. However, some RAP BOs use authority checks that do not rely on authorization objects. In this case, an empty authorization context for disable can be specified.

The optional addition for disable(*{*modify*|*read*|*modify,read*}*) activates the authorization context for disable in question for certain [handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"). When a context is activated for a handler method, then the corresponding handler method is automatically and implicitly disabled for the authorization context in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Example:

define authorization context ReadContext
  for disable (read)
...

in the BDEF has the effect that

METHOD read.
...
ENDMETHOD.

in the ABAP behavior pool behaves as if the code was

METHOD read.
[AUTHORITY-CHECK DISABLE BEGIN CONTEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check_disable.htm) demo\_context~ReadContext.
...
[AUTHORITY-CHECK DISABLE END](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check_disable.htm).
ENDMETHOD.

Currently, only the handler methods modify and read are available. They can be specified individually, or both together. Each handler method can only be assigned once within a RAP behavior definition.

Activating an Authorization Context for Disable

An authorization context for disable can be activated and the corresponding authorization objects skipped in the following ways:

-   by using [AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check_disable.htm) in the ABAP behavior pool for a handler or [saver method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry").
-   implicitly by [registering a context for use in privileged mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm).
-   implicitly by registering a context for a category of handler method, as described above.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"): a projection BDEF can define an authorization context for disable independently of the projected BDEF. This means that an authorization context for disable can be defined in the projection layer even if the projected entity does not have an authorization context for disable.

Dependency

If you define and activate an authorization context for disable which lists authorization objects (that means, it is not empty), you also need to specify a [RAP full authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry") that lists all mentioned authorization objects, unless they are forbidden for use in full authorization contexts as per their classification. Otherwise, syntax check warnings occur. Further details are described in topic [RAP - define own authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm).

Hint

The optional registration of an authority context for a dedicated purpose using the syntax for disable(*{*modify*|*read*|*modify,read*}*) does not generate an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END bracket within handler methods that are introduced by RAP extensions. In other words, no such bracket is generated in implementation classes that are named in [extension BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm).

Example

The following managed BDEF defines two authorization contexts for disable: ac1 and ac2 with the addition for disable. A full authorization context which lists all objects from ac\_1 is also required.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_auth.htm) is not implemented here. In a real-life scenario, the authorization objects from the full authorization context would be implemented in this RAP handler method.

managed implementation in class bp\_demo\_rap\_auth\_context unique;
strict(2);
with privileged mode disabling ac\_1;
define authorization context ac\_1
{
'AUTHOBJ1' ;
'AUTHOBJ2' ;
'AUTHOBJ3' ;
}
define authorization context ac\_2
for disable(modify, read) ##warn\_OK
{
'AUTHOBJ4' ;
}
define own authorization context by privileged mode;
define behavior for DEMO\_RAP\_AUTH\_CONTEXT alias Root
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field(readonly:update) KeyField;
  mapping for demo\_dbtab\_root
  {
  KeyField = key\_field;
  DataField = data\_field;
  CharField = char\_field;
  CharField2 = char\_field\_2;
  DecField = dec\_field;
  }
}
define behavior for DEMO\_RAP\_AUTH\_CONTEXT\_CHILD alias Child
persistent table DEMO\_DBTAB\_CHILD
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField;
  field(readonly:update) KeyFieldChild;
  association \_parent;
  mapping for demo\_dbtab\_child
  {
  KeyField = key\_field;
  KeyFieldChild = key\_field\_child;
  DataField = data\_field;
  CharField = char\_field;
  }
}

Executable Example

The example [Using the addition PRIVILEGED with an ABAP EML Statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_privileged_abexa.htm) defines an authorization context and registers it for use in privileged mode. It then demonstrates access to the RAP BO, first without the addition PRIVILEGED, afterwards with using PRIVILEGED.