  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) → 

Calling Processing Blocks

In every [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of an ABAP program, processing blocks of the same program can be called (using internal calls) or processing blocks of other ABAP programs can be called (using external calls) .

-   [Calling procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm) directly.

-   [Event handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_event_handler.htm) can be called indirectly by raising events from the same class in methods. This provides the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_handler.htm).

-   Event blocks can be called indirectly by raising events in the runtime environment explicitly.

The statement [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodule.htm) is used to call dialog modules in the processing blocks of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), however, and not in processing blocks of an ABAP program.

Continue
[Calling Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm)
[Call Event Handler](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_event_handler.htm)
[Call Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_event_blocks.htm)