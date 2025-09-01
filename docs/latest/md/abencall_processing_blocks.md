  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calling%20Processing%20Blocks%2C%20ABENCALL_PROCESSING_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calling Processing Blocks

In every [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of an ABAP program, processing blocks of the same program can be called (internal calls) or processing blocks of other ABAP programs can be called (external calls).

-   Direct [call of procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm).
-   Indirect call of [event handlers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm) by raising events from the same class in methods. This supplies the interface of the event handler. A prerequisite for the execution of an event handler is its [registration](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_handler.htm).
-   Indirect call of event blocks by raising events in the runtime framework explicitly.

The statement [MODULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodule.htm) is used to call dialog modules in the processing blocks of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), however, and not in processing blocks of an ABAP program.

Continue
[Calling Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm)
[Call Event Handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_handler.htm)
[Call Event Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_event_blocks.htm)