  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - extend own authorization context, ABENBDL_EXTEND_OWN_AUTH_CONTEXT, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - extend own authorization context

Syntax

extend own authorization context
{
  *\[*[AuthObject1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]*
  *\[*[AuthObject2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbc_authority_check.htm);*\]*
  *\[*...*\]*
}

Effect

Extends an [own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_own_ac_glosry.htm "Glossary Entry") using the statement extend own authorization context by adding further [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") AuthObject1, AuthObject2, ... to the context. If the original behavior definition defines an own authorization context and the extension implementation uses authorization objects which are not used in the original implementation, you should extend the own authorization context to ensure a complete and exhaustive list. Like for the original BDEF, the own authorization context is evaluated by certain contract checks and if it is not complete, a runtime error occurs.

As a prerequisite, the original BDEF must define an own authorization context. If this is the case, the own authorization context can be extended without any explicit extensibility enabling. If the original BDEF does not define an own authorization context, it must not be added via an extension.

An extension own authorization context may be defined before, between, or after the other [components of an extension BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm). It is also possible to define an empty own authorization context.

For details on the concept of an own authorization context, see topic [CDS BDL - define own authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_def_own_auth_context.htm).

Example

The following BDEF extension DEMO\_RAP\_EXT\_AUTH\_CONTEXT extends the CDS behavior definition DEMO\_RAP\_OWN\_AUTH\_CONTEXT. It adds one further authorization object to the context.

extension implementation in class bp\_demo\_rap\_ext\_auth\_context unique;
extend own authorization context
{ 'AUTHOBJ5'; }