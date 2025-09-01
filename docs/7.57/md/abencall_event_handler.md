  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Call Event Handler, ABENCALL_EVENT_HANDLER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](javascript:call_link\('abapmethods_event_handler.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). They are not usually called directly using explicit [method calls](javascript:call_link\('abenmethod_calls.htm'\)).

-   Instead, they are called indirectly using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)).
-   They can only be executed if an event handler is registered using [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)).

Continue
[RAISE EVENT](javascript:call_link\('abapraise_event.htm'\))
[SET HANDLER](javascript:call_link\('abapset_handler.htm'\))