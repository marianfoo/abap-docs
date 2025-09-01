---
title: "RAP - Authorization Context"
description: |
  Syntax Forms Full Authorization Context(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm) 1. define own authorization context by privileged mode;  define own authorization context by privileged mode and AuthObject1(https://help.sap.com/doc
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm"
abapFile: "abenbdl_authorization_context.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenbdl", "authorization", "context"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Authorization%20Context%2C%20ABENBDL_AUTHORIZATION_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Authorization Context

Syntax Forms

[Full Authorization Context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm)

1\. define own authorization context by privileged mode;
*|* define own authorization context by privileged mode and
  {*\[*[AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]* *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]* *\[*...*\]*}
*|* define own authorization context
  {*\[* [AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]* *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]* *\[*...*\]*}

[Authorization Context for Disable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_auth_context.htm)

2\. define authorization context ContextName
      *\[**{*for disable(*{*modify*|*read*|*modify,read*}*)*}**\]*
{
   [AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);
  *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}

Effect

A [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can define [authorization contexts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_con_glosry.htm "Glossary Entry") that list multiple [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that are used for the ABAP statement [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm). There are different types of authorization contexts:

-   [Full authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry")
    -   Defined using the statement [define own authorization context *\[*...*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm).
    -   List of [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") which are checked by the implementation methods of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") itself, or by existing code that is called by the ABAP behavior pool implementation. The full authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive. Otherwise, a syntax check warning occurs.
-   [Authorization context for disable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_auth_context_glosry.htm "Glossary Entry")
    -   Defined using the statement [define authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_auth_context.htm).
    -   Container for [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that lists one or more authorization objects. When an authorization context is activated, the [authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_check_glosry.htm "Glossary Entry") for all associated authorization objects always return the value authorized. That means, the respective authorization checks are skipped.

SAP has configured authorization objects to be allowed or forbidden for use in full authorization contexts or authorization contexts for disable. This configuration must be respected. Otherwise, a syntax check warning occurs. When using [strict mode version 2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict_2.htm), a syntax check error occurs.

If the authorization context for disable is used by the syntax [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_privileged_mode.htm), then it must be ensured that this authorization context for disable does not contradict the full authorization context. This means:

-   A full authorization context must be specified that contains all authorization objects of this particular authorization context for disable. Otherwise, a syntax check warning occurs.
-   All authorization objects of the full authorization context must be specified in the authorization context for disable in question except for the authorization objects which are forbidden in authorization context for disable as per their classification. Otherwise, a syntax check warning occurs.

Example

The following managed BDEF defines three authorization contexts:

-   Own authorization context: Lists all authorization objects used by the RAP BO implementation. It is modelled by privileged mode and adds two further authorization objects AUTHOBJ5 and AUTHOBJ6. These two further authorization objects are not included in the own authorization context. This is OK in this case, since they are classified as not allowed in BDEF privileged mode by SAP.
-   NoCheckWhenPrivileged: Lists authorization objects that can be skipped by a RAP BO consumer with [privileged access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm).
-   NoCheckWhenReadingorModifying: authorization objects that can be skipped in read or modify operations.

In this example, the authorization context NoCheckWhenPrivileged contains a subset of authorization objects of the own authorization context. The own authorization context documents all authorization objects that are used by a RAP BO implementation and NoCheckWhenPrivileged defines which ones of them can be skipped in privileged mode.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_auth.htm) is not implemented here. In a real-life scenario, the authorization objects from the own authorization context would be implemented in this RAP handler method.

managed implementation in class bp\_demo\_rap\_own\_auth\_context unique;
strict(2);
extensible;
with privileged mode disabling NoCheckWhenPrivileged;
define authorization context NoCheckWhenPrivileged
{
'AUTHOBJ1' ;
}
define own authorization context by privileged mode and
{
'AUTHOBJ5' ;
'AUTHOBJ6' ;
}
define authorization context NoCheckWhenReadingorModifying
for disable (modify, read) ##warn\_OK
{
'AUTHOBJ4' ;
}
define behavior for DEMO\_RAP\_OWN\_AUTH\_CONTEXT alias Root
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  association \_child { create; }
  field ( readonly ) KeyField;
  mapping for demo\_dbtab\_root
  {
  KeyField = key\_field;
  DataField = data\_field;
  CharField = char\_field;
  CharField2 = char\_field\_2;
  DecField = dec\_field;
  }
}
define behavior for DEMO\_RAP\_OWN\_AUTH\_CON\_CHILD alias Child
persistent table DEMO\_DBTAB\_CHILD
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField, KeyFieldChild;
  association \_parent;
  mapping for demo\_dbtab\_child
  {
  KeyField = key\_field;
  KeyFieldChild = key\_field\_child;
  DataField = data\_field;
  CharField = char\_field;
  }
}

Continue
[RAP - define own authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm)
[RAP - define authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_auth_context.htm)