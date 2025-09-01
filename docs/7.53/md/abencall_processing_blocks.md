  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) → 

Calling Processing Blocks

In every [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of an ABAP program, processing blocks of the same program can be called (using internal calls) or processing blocks of other ABAP programs can be called (using external calls) .

-   [Calling procedures](javascript:call_link\('abencall_procedures.htm'\)) directly.

-   [Event handlers](javascript:call_link\('abencall_event_handler.htm'\)) can be called indirectly by raising events from the same class in methods. This provides the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](javascript:call_link\('abapset_handler.htm'\)).

-   Event blocks can be called indirectly by raising events in the runtime environment explicitly.

The statement [MODULE](javascript:call_link\('abapmodule.htm'\)) is used to call dialog modules in the processing blocks of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"), however, and not in processing blocks of an ABAP program.

Continue
[Calling Procedures](javascript:call_link\('abencall_procedures.htm'\))
[Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\))
[Call Event Blocks](javascript:call_link\('abencall_event_blocks.htm'\))