  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20with%20privileged%20mode%2C%20ABENBDL_PRIVILEGED_MODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - with privileged mode

Syntax Forms

BDEF Privileged Mode for Managed and Unmanaged RAP BOs

...
with privileged mode disabling ContextName;
...

BDEF Privileged Mode for RAP Projection BOs

...
with privileged mode disabling base context
  *\[*and ContextName*\]*;
...

BDEF Privileged Mode for RAP Interface Behavior Definitions

...
with privileged mode;
...

Alternatives:

[1\. with privileged mode disabling ContextName](#!ABAP_ALTERNATIVE_1@1@)
[2\. with privileged mode disabling base context *\[*and*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. with privileged mode](#!ABAP_ALTERNATIVE_3@3@)

Effect

Enables [BDEF privileged mode](javascript:call_link\('abenrap_privileged_mode_glosry.htm'\) "Glossary Entry") for a RAP BO. BDEF privileged mode is prerequisite to use the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) in EML when consuming the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). BDEF privileged mode can be specified for [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), and [interface BOs](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). The syntax for the different BO types (managed, unmanaged, projection, interface) varies. Details are described below.

Executable Example

The example [Using the addition PRIVILEGED with an ABAP EML Statement](javascript:call_link\('abeneml_privileged_abexa.htm'\)) defines an [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") and registers it for use in privileged mode. It then demonstrates access to the RAP BO, first without the addition PRIVILEGED, afterwards using PRIVILEGED.

Alternative 1   

with privileged mode disabling ContextName

Effect

This syntax variant is available only for managed and unmanaged BDEFs.

In the [header part of a behavior definition](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of a managed or unmanaged RAP BO, it is possible to specify with privileged mode disabling ContextName. The effect is that the [authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry") ContextName is automatically disabled when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") uses [privileged access](javascript:call_link\('abapeml_privileged.htm'\)) to the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in question. ContextName must be an authorization context for disable defined in the same BDEF. Not more than one authorization context can be specified.

Example:

with privileged mode disabling demo\_context\_bdl

in the BDEF has the effect that the [EML statement](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry")

read entity privileged demo\_context\_bdl
   all fields with value #( ( name = field1 ) )
   result data(result)
   failed data(failed)

behaved as if

authority-check disable begin context demo\_context\_bdl~privileged context.
   read entity privileged demo\_context\_bdl
   all fields with value #( (name = field1 ) )
   result data(result)
   failed data(failed)
authority-check disable end.

had been written.

So with the syntax with privileged mode disabling, the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") leaves out calls to [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry"). No implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

There are other kinds of authority checks, such as [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). If a business object is protected from unauthorized access using any other method than authorization objects, the BDEF can define an empty authorization context that is referred to in ContextName.

Example:

BDEF header: with privileged mode disabling EmptyContext

BDEF body: define authorization context EmptyContext { }

In the case of empty authorization contexts, privileged EML calls are handled as follows:

-   In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), the RAP framework automatically and implicitly checks for other authorizations, such as CDS access control.
-   In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), rules for the handling of a privileged access can be defined in the respective handler methods in the ABAP behavior pool.

Hints

-   The syntax with privileged mode; has been deprecated for managed and unmanaged RAP BOs. For compatibility reasons, it can still be used, but it is not recommended and if used, a warning message appears.
-   There are multiple options how to activate an authorization context for disable (described in topic [RAP - define authorization context](javascript:call_link\('abenbdl_def_auth_context.htm'\))). One of them is that a context can directly be registered for a category of [handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") using the syntax
    
    define authorization context ContextName
       for disable(*{*read*|*modify*|*read,modify*}*)
    
    The difference between this and with privileged mode disabling is that in the first case, the context is active within the handler method. In the latter case, the context is active around the EML statement and that means it is also active during calls to the handler method that might be performed by the RAP framework implicitly before calling the actual handler targeted by the EML statement.
    

Example - 1, Deprecated Syntax

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_PRIVILEGED and it enables privileged mode.

The privileged mode must be implemented in class BP\_DEMO\_RAP\_PRIVILEGED (currently not implemented in this example).

Note: This syntax has been deprecated and is not recommended.

managed implementation in class bp\_demo\_rap\_privileged unique;
strict(2);
with privileged mode;
define behavior for DEMO\_RAP\_PRIVILEGED
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance,global )
{
  create;
  update;
  delete;
  field (readonly:update) key\_field;
  field (features : instance ) data\_field;
}

Example - 2, New, Recommended Syntax

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_AUTH\_CONTEXT. It enables privileged mode and specifies that for privileged EML access, the authorization context ac\_1 is disabled.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) is not implemented here. In a real-life scenario, the authorization objects from the full authorization context would be implemented in this RAP handler method.

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

Alternative 2   

with privileged mode disabling base context

Effect

This syntax variant is available only for [projection BDEFs](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). It enables BDEF privileged mode for a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). As a prerequisite, the [projected BDEF](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") must offer privileged mode. The syntax for enabling privileged mode in a projection BDEF is as follows:

with privileged mode disabling base context
  *\[*and ContextName*\]*

base context refers to the [authorization context for disable](javascript:call_link\('abenbdl_def_auth_context.htm'\)) that is specified in the projected BDEF. It is compulsory to reuse the authorization context from the projected BDEF.

If the projected BDEF specifies an empty authorization context, this can also be reused by the projection BDEF.

With the optional addition and ContextName, it is possible to specify an additional authorization context for disable in the projection BDEF. ContextName must be an authorization context for disable defined in the same projection BDEF. For all [privileged](javascript:call_link\('abapeml_privileged.htm'\)) operations on the projection BDEF, both the authorization context of the projected BDEF and the context of the projection BDEF are disabled.

Hint

Privileged mode can only be reused in a projection BDEF if the syntax with privileged mode disabling ContextName is specified in the projected BDEF. If the projected BDEF uses the deprecated syntax form with privileged mode;, then BDEF privileged mode is not available in the projection BO.

Example

The following example shows a projection BDEF based on the projected BDEF DEMO\_RAP\_AUTH\_CONTEXT. It enables privileged mode, reuses the authorization context for disable from the projected BDEF and adds one further authorization context to the projection layer.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is not implemented here. In a real-life scenario, AUTHOBJ1 would be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

projection implementation in class BP\_DEMO\_RAP\_AUTH\_CONTEXT\_PROJ unique;
strict(2);
with privileged mode disabling base context and ac\_3;
define authorization context ac\_3
{
'AUTHOBJ1' ;
}
define behavior for DEMO\_RAP\_AUTH\_CONTEXT\_PROJ
{
  use create;
  use update;
  use delete;
}
define own authorization context by privileged mode;

Alternative 3   

with privileged mode

Effect

This syntax variant is available only for [interface BDEFs](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). It enables BDEF privileged mode for an interface BDEF, so that access with [EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") can take place in privileged mode using the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)). Since interface BDEFs cannot define any access restrictions or authorization contexts themselves, it is a prerequisite that the underlying [projected BDEF](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") offers privileged mode. A privileged access is then delegated to the implementation of the underlying base RAP BO. The syntax for enabling privileged mode in an interface BDEF is as follows:

with privileged mode;

Hint

Privileged mode can only be reused in an interface BDEF if the syntax with privileged mode disabling ContextName is specified in the projected BDEF.