  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP entity event, ABENRAP_ENTITY_EVENT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

RAP entity event

A RAP entity event is a business event that usually represents a piece of information about the outcome of a [CUD operation](javascript:call_link\('abencud_glosry.htm'\) "Glossary Entry") in the context of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). For example, the creation of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") raises a RAP entity event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the payload of the event) always includes the instance key and, if need be, further information like the action (CUD).