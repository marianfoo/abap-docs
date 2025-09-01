  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Call%20Event%20Handler%2C%20ABENCALL_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](javascript:call_link\('abapmethods_event_handler.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). They are not usually called directly using explicit [method calls](javascript:call_link\('abenmethod_calls.htm'\)).

-   Instead, they are called indirectly using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)).
-   They can only be executed if an event handler is registered using [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)).

Continue
[RAISE EVENT](javascript:call_link\('abapraise_event.htm'\))
[SET HANDLER](javascript:call_link\('abapset_handler.htm'\))