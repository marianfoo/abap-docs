---
title: "RAP - Events"
description: |
  Syntax Forms RAP Business Event(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm) event EventName deep parameter ParamName; RAP Derived Event(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_managed_event.htm) managed event DerivedEve
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event_overview.htm"
abapFile: "abenbdl_event_overview.htm"
keywords: ["do", "if", "try", "abenbdl", "event", "overview"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Events%2C%20ABENBDL_EVENT_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Events

Syntax Forms

[RAP Business Event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm)

event EventName *\[**\[*deep*\]* parameter ParamName*\]*;

[RAP Derived Event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_managed_event.htm)

managed event DerivedEventName on RefEvent parameter ViewEntityName;

Effect

-   RAP supports event-driven architecture. A [RAP business event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") enables asynchronous communication between an event provider and an event consumer. Details are described in the topic [RAP - event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm).
-   A [RAP derived event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_event_glosry.htm "Glossary Entry") is defined with reference to an existing [RAP business event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"). It redefines the payload of the existing event. Details are described in the topic [RAP - managed event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_managed_event.htm).

Continue
[RAP - event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm)
[RAP - managed event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_managed_event.htm)