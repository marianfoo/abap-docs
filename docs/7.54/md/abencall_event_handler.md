  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](javascript:call_link\('abapmethods_event_handler.htm'\)) of the statements [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)). They are not usually called directly using explicit [method calls](javascript:call_link\('abenmethod_calls.htm'\)).

-   Instead, they are called indirectly using [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)).

-   They can only be executed if an event handler is registered using [SET HANDLER](javascript:call_link\('abapset_handler.htm'\)).

Continue
[RAISE EVENT](javascript:call_link\('abapraise_event.htm'\))
[SET HANDLER](javascript:call_link\('abapset_handler.htm'\))