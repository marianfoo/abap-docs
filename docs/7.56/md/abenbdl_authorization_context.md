---
title: "CDS BDL - define authorization context"
description: |
  Syntax define authorization context ContextName for disable(modifyreadmodify,read)  AuthObject1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm);  AuthObject2(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_au
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm"
abapFile: "abenbdl_authorization_context.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "abenbdl", "authorization", "context"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) → 

CDS BDL - define authorization context

Syntax

define authorization context ContextName
      *\[**{*for disable(*{*modify*|*read*|*modify,read*}*)*}**\]*
{
   [AuthObject1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm);
  *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}

Effect

Besides [entity behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry"), a [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can define [authorization contexts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_auth_context_glosry.htm "Glossary Entry") using the statement define authorization context. Authorization contexts list several [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that are used for the ABAP statement [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm). When an authorization context is activated, authority checks for all associated authorization objects are always successful. This can be useful, for example, when a BDEF implements its own [authorization check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) and then calls existing code, which again has its own authorization checks.

The contexts may be defined before, between, or after the entity behavior definitions. Each context can contain one or more [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") AuthObject1. It is also possible to define an empty authorization context. This can be useful when using [BDEF privileged mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm): to enable BDEF privileged mode, it is mandatory to specify an authorization context. However, some RAP BOs use authority checks that don't rely on authorization objects. In this case, an empty authorization context can be specified.

The optional addition for disable(*{*modify*|*read*|*modify,read*}*) registers the authorization context in question for certain [handler methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"). When a context is registered for a handler method, then the corresponding handler method is automatically and implicitly disabled for the authorization context in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

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
AUTHORITY-CHECK DISABLE BEGIN CONTEXT demo\_context~ReadContext.
...
AUTHORITY-CHECK DISABLE END.
ENDMETHOD.

Currently, only the handler methods modify and read are available. They can be specified individually, or both together. Each handler method can only be assigned once within a CDS behavior definition.

Activating an authorization context

There are the following possibilities to activate an authorization context:

-   by using [AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check_disable.htm) in the ABAP behavior pool for a handler or [saver method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_method_glosry.htm "Glossary Entry").
-   implicitly by [registering a context for use in privileged mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_privileged_mode.htm).
-   implicitly by registering a context for a category of handler method, as described above.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

Hint

The optional registration of an authority context to a dedicated purpose using the syntax for disable(*{*modify*|*read*|*modify,read*}*) does not generate a AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END brace within handler methods that are introduced by RAP extensions. In other words, no such brace is generated in implementation classes that are named in [extension BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_extension.htm).

Example

The following managed BDEF defines two authorization contexts: ac1 and ac2 with the addition for disable.

managed implementation in class bp\_demo\_rap\_auth\_context unique;
strict;
with privileged mode disabling ac\_1;
define authorization context ac\_1
{
'AUTHOBJ1' ;
'AUTHOBJ2' ;
'AUTHOBJ3' ;
}
define authorization context ac\_2
for disable(modify, read)
{
'AUTHOBJ1' ;
}
define behavior for DEMO\_RAP\_AUTH\_CONTEXT alias Root
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_child { create; }
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
  association \_parent;
  mapping for demo\_dbtab\_child
  {
  KeyField = key\_field;
  KeyFieldChild = key\_field\_child;
  DataField = data\_field;
  CharField = char\_field;
  }
}