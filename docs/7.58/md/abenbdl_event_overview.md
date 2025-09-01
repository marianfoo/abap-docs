  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Events%2C%20ABENBDL_EVENT_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Events

Syntax Forms

[RAP Business Event](javascript:call_link\('abenbdl_event.htm'\))

event EventName *\[**\[*deep*\]* parameter ParamName*\]*;

[RAP Derived Event](javascript:call_link\('abenbdl_managed_event.htm'\))

managed event DerivedEventName on RefEvent parameter ViewEntityName;

Effect

-   RAP supports event-driven architecture. A [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") enables asynchronous communication between an event provider and an event consumer. Details are described in the topic [RAP - event](javascript:call_link\('abenbdl_event.htm'\)).
-   A [RAP derived event](javascript:call_link\('abenrap_derived_event_glosry.htm'\) "Glossary Entry") is defined with reference to an existing [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"). It redefines the payload of the existing event. Details are described in the topic [RAP - managed event](javascript:call_link\('abenbdl_managed_event.htm'\)).

Continue
[RAP - event](javascript:call_link\('abenbdl_event.htm'\))
[RAP - managed event](javascript:call_link\('abenbdl_managed_event.htm'\))