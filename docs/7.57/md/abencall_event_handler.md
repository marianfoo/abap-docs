---
title: "Call Event Handler"
description: |
  Event handlers are special methods that are declared using the addition FOR EVENT ... OF(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_event_handler.htm) of the statements METHODS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) and CLASS-METH
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_event_handler.htm"
abapFile: "abencall_event_handler.htm"
keywords: ["do", "if", "method", "class", "abencall", "event", "handler"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Call Event Handler, ABENCALL_EVENT_HANDLER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_event_handler.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-methods.htm). They are not usually called directly using explicit [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm).

-   Instead, they are called indirectly using [RAISE EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_event.htm).
-   They can only be executed if an event handler is registered using [SET HANDLER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_handler.htm).

Continue
[RAISE EVENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_event.htm)
[SET HANDLER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_handler.htm)