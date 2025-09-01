  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_processing_blocks.htm) → 

Call Event Handler

Event handlers are special methods that are declared using the addition [FOR EVENT ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_event_handler.htm) of the statements [METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-methods.htm). They are not usually called directly using explicit [method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls.htm).

-   Instead, they are called indirectly using [RAISE EVENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_event.htm).

-   They can only be executed if an event handler is registered using [SET HANDLER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_handler.htm).

Continue
[RAISE EVENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_event.htm)
[SET HANDLER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_handler.htm)