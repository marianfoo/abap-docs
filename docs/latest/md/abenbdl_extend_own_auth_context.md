  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20extend%20own%20authorization%20context%2C%20ABENBDL_EXTEND_OWN_AUTH_CONTEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

RAP - extend own authorization context

Syntax

extend own authorization context
{
  *\[*[AuthObject1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*[AuthObject2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}

Effect

Extends a [full authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry") using the statement extend own authorization context by adding further [authorization objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_object_glosry.htm "Glossary Entry") AuthObject1, AuthObject2, ... to the context. If the original BDEF defines a full authorization context and the extension implementation uses authorization objects which are not used in the original implementation, you should extend the full authorization context to ensure a complete and exhaustive list. Like for the original BDEF, the full authorization context is evaluated by certain contract checks and if it is not complete, a runtime error occurs.

As a prerequisite, the original BDEF must define a full authorization context. If this is the case, the full authorization context can be extended without any explicit extensibility enabling. If the original BDEF does not define a full authorization context, it must not be added via an extension.

An extension full authorization context may be defined before, between, or after the other [components of an extension BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm). It is also possible to define an empty own authorization context.

For details on the concept of an own authorization context, see topic [RAP - define own authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_def_own_auth_context.htm).

Example

The following BDEF extension DEMO\_RAP\_EXT\_AUTH\_CONTEXT extends the RAP behavior definition DEMO\_RAP\_OWN\_AUTH\_CONTEXT. It adds one further authorization object to the context.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") of the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here. In a real-life scenario, AUTHOBJ5 would be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

extension implementation in class bp\_demo\_rap\_ext\_auth\_context unique;
extend own authorization context
{ 'AUTHOBJ5'; }