---
title: "RAP entity event"
description: |
  A RAP entity event is a business event that usually represents a piece of information about the outcome of a CUD operation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencud_glosry.htm 'Glossary Entry') in the context of a RAP BO entity(https://help.sap.com/doc/abapdocu_757_index
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_entity_event_glosry.htm"
abapFile: "abenrap_entity_event_glosry.htm"
keywords: ["do", "if", "try", "abenrap", "entity", "event", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP entity event, ABENRAP_ENTITY_EVENT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

RAP entity event

A RAP entity event is a business event that usually represents a piece of information about the outcome of a [CUD operation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencud_glosry.htm "Glossary Entry") in the context of a [RAP BO entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). For example, the creation of a [RAP BO entity instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") raises a RAP entity event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the payload of the event) always includes the instance key and, if need be, further information like the action (CUD).