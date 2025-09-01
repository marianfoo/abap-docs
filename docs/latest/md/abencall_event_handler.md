---
title: "Call Event Handler"
description: |
  Event handlers are special methods that are declared using the addition FOR EVENT ... OF(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm) of the statements METHODS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) and
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm"
abapFile: "abencall_event_handler.htm"
keywords: ["do", "if", "method", "class", "abencall", "event", "handler"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Call%20Event%20Handler%2C%20ABENCALL_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_event_handler.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-methods.htm). They are not usually called directly using explicit [method calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm).

-   Instead, they are called indirectly using [RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm).
-   They can only be executed if an event handler is registered using [SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm).

Continue
[RAISE EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_event.htm)
[SET HANDLER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm)