  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20business%20event%2C%20ABENRAP_ENTITY_EVENT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP business event

A RAP business event is a business event that usually represents a piece of information about the outcome of a [CUD operation](javascript:call_link\('abencud_glosry.htm'\) "Glossary Entry") in the context of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). For example, the creation of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") raises a RAP business event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the payload of the event) always includes the instance key and, if need be, further information like the action (CUD).

[→ More about](javascript:call_link\('abenbdl_event.htm'\))