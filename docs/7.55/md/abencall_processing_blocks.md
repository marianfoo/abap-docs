  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) → 

Calling Processing Blocks

In every [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of an ABAP program, processing blocks of the same program can be called (internal calls) or processing blocks of other ABAP programs can be called (external calls) .

-   Direct [call of procedures](javascript:call_link\('abencall_procedures.htm'\)).

-   Indirect call of [event handlers](javascript:call_link\('abencall_event_handler.htm'\)) by raising events from the same class in methods. This supplies the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](javascript:call_link\('abapset_handler.htm'\)).

-   Indirect call of event blocks by raising events in the runtime environment explicitly.

The statement [MODULE](javascript:call_link\('abapmodule.htm'\)) is used to call dialog modules in the processing blocks of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"), however, and not in processing blocks of an ABAP program.

Continue
[Calling Procedures](javascript:call_link\('abencall_procedures.htm'\))
[Call Event Handler](javascript:call_link\('abencall_event_handler.htm'\))
[Call Event Blocks](javascript:call_link\('abencall_event_blocks.htm'\))