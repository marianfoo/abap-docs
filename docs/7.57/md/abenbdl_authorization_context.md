  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Authorization Context, ABENBDL_AUTHORIZATION_CONTEXT, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Authorization Context

Syntax Forms

[Authorization Context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm)
1\. define authorization context ContextName
      *\[**{*for disable(*{*modify*|*read*|*modify,read*}*)*}**\]*
{
   [AuthObject1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);
  *\[*[AuthObject2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}
[Own Authorization Context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)
2\. define own authorization context by privileged mode;
*|* define own authorization context by privileged mode and
  {*\[*[AuthObject1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]* *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]* *\[*...*\]*}
*|* define own authorization context
  {*\[* [AuthObject1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]* *\[* [AuthObject2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]* *\[*...*\]*}

Effect

A [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can define [authorization contexts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") that list multiple [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that are used for the ABAP statement [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm). There are different types of authorization contexts:

-   Authorization context defined using the statement [define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm), optionally with the addition for disable.
    -   Container for [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") that lists one or more authorization objects. When an authorization context is activated, the [authorization checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_check_glosry.htm "Glossary Entry") for all associated authorization objects always return the value authorized. That means, the respective authorization checks are skipped.
-   [Own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry") defined using the statement [define own authorization context *\[*...*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm).
    -   List of [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") which are checked by the implementation methods of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") itself, or by existing code that is called by the ABAP behavior pool implementation. The own authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive. Otherwise, a syntax check warning occurs.

Types and Classification of Authorization Objects

Certain technical authorization objects must not be used in an authorization context. They can only be used in own authorization contexts. This is indicated by a syntax check error.

Authorization objects are configured in transaction SU21. They can be enabled or disabled for usage in an own authorization context and in BDEF privileged mode. This configuration must be respected, otherwise, a syntax check warning occurs and when using [strict mode version 2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_strict_2.htm), a syntax check error occurs.

Interaction of Authorization Context and Own Authorization Context

If a BDEF enables BDEF privileged mode using the syntax [with privileged mode disabling ContextName](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_privileged_mode.htm), then an own authorization context must be specified and it must contain all authorization objects which are listed in the authorization context ContextName and which are allowed in an own context as per their classification. In other words, all privileged authorization objects which can be used in an own context must be used in an own context. Otherwise, a syntax check warning occurs.

The other way around is a requirement as well: All authorization objects listed in an own authorization context which are allowed in an activated, privileged context must be specified in the privileged context. Otherwise, a syntax check warning occurs.

Note: If an authorization context lists objects, but this context is not skipped in BDEF privileged mode (i.e. the context is not activated), no own authorization context is required.

Note: define authorization context ContextName for disable can contain authorization objects which are not part of the own authorization context. These authorization objects can be of a different technical type and they can always be skipped for read operations, or modify operations, or both.

The own authorization context might be a superset of the authorization context.

Example

The following managed BDEF defines three authorization contexts:

-   Own authorization context: Lists all authorization objects used by the RAP BO implementation. It is modelled by privileged mode and adds two further authorization objects AUTHOBJ5 and AUTHOBJ6. These two further authorization objects are not included in the own authorization context. This is ok in this case, since they are classified as not allowed in BDEF privileged mode in transaction SU21.
-   NoCheckWhenPrivileged: Lists authorization objects that can be skipped by a RAP BO consumer with [privileged access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_privileged.htm).
-   NoCheckWhenReadingorModifying: authorization objects that can be skipped in read or modify operations.

In this example, the authorization context NoCheckWhenPrivileged contains a subset of authorization objects of the own authorization context. The own authorization context documents all authorization objects that are used by a RAP BO implementation and NoCheckWhenPrivileged defines which ones of them can be skipped in privileged mode.

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

Continue
[CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_auth_context.htm)
[CDS BDL - define own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm)