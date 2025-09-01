  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Authorization Context](javascript:call_link\('abenbdl_authorization_context.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - define authorization context, ABENBDL_DEF_AUTH_CONTEXT, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - define authorization context

Syntax

define authorization context ContextName
      *\[**{*for disable(*{*modify*|*read*|*modify,read*}*)*}**\]*
{
   [AuthObject1](javascript:call_link\('abenbc_authority_check.htm'\));
  *\[* [AuthObject2](javascript:call_link\('abenbc_authority_check.htm'\));*\]*
  *\[*...*\]*
}

Effect

A [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") can define [authorization contexts](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") using the statement define authorization context. Authorization contexts list multiple [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") that are used for the ABAP statement [AUTHORITY-CHECK OBJECT](javascript:call_link\('abapauthority-check.htm'\)). When an authorization context is activated, authority checks for all associated authorization objects are always successful; in other words, the respective authorization checks are skipped. This can be useful, for example, when a BDEF implements its own [authorization check](javascript:call_link\('abenbdl_authorization.htm'\)) and then calls existing code, which again has its own authorization checks.

One CDS behavior definition can define one or more authorization contexts. The contexts may be defined before, between, or after the entity behavior definitions. Each context can contain one or more [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") AuthObject1, AuthObject2, .... It is also possible to define an empty authorization context. This can be useful when using [BDEF privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)): to enable BDEF privileged mode, it is mandatory to specify at least one authorization context. However, some RAP BOs use authority checks that do not rely on authorization objects. In this case, an empty authorization context can be specified.

The optional addition for disable(*{*modify*|*read*|*modify,read*}*) activates the authorization context in question for certain [handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"). When a context is activated for a handler method, then the corresponding handler method is automatically and implicitly disabled for the authorization context in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

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
[AUTHORITY-CHECK DISABLE BEGIN CONTEXT](javascript:call_link\('abapauthority-check_disable.htm'\)) demo\_context~ReadContext.
...
[AUTHORITY-CHECK DISABLE END](javascript:call_link\('abapauthority-check_disable.htm'\)).
ENDMETHOD.

Currently, only the handler methods modify and read are available. They can be specified individually, or both together. Each handler method can only be assigned once within a CDS behavior definition.

Activating an Authorization Context

An authorization context can be activated and the corresponding authorization objects skipped in the following ways:

-   by using [AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END](javascript:call_link\('abapauthority-check_disable.htm'\)) in the ABAP behavior pool for a handler or [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry").
-   implicitly by [registering a context for use in privileged mode](javascript:call_link\('abenbdl_privileged_mode.htm'\)).
-   implicitly by registering a context for a category of handler method, as described above.

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Projection BDEF](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"): a projection BDEF can define an authorization context independently of the projected BDEF. That means that an authorization context can be defined in the projection layer even if the projected entity does not have an authorization context.

Dependency

If you define and activate an authorization context which lists authorization objects (that means, it is not empty), you also need to specify a [RAP own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") that lists all mentioned authorization objects, as long as their classification in transaction SU21 allows this. Otherwise, syntax check warnings occur. Further details are described in topic [CDS BDL - define own authorization context](javascript:call_link\('abenbdl_def_own_auth_context.htm'\)).

Hint

The optional registration of an authority context for a dedicated purpose using the syntax for disable(*{*modify*|*read*|*modify,read*}*) does not generate an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END bracket within handler methods that are introduced by RAP extensions. In other words, no such bracket is generated in implementation classes that are named in [extension BDEFs](javascript:call_link\('abenbdl_extension.htm'\)).

Example

The following managed BDEF defines two authorization contexts: ac1 and ac2 with the addition for disable. An own authorization context which lists all objects from ac\_1 is also required.

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

Executable Example

The example [Using the addition PRIVILEGED with an ABAP EML Statement](javascript:call_link\('abeneml_privileged_abexa.htm'\)) defines an authorization context and registers it for use in privileged mode. It then demonstrates access to the RAP BO, first without the addition PRIVILEGED, afterwards with using PRIVILEGED.