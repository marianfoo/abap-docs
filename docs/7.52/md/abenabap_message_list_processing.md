  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm) → 

Messages in List Processing

In [list processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_processing_glosry.htm "Glossary Entry"), a message of type "W" is always converted to type "E" before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm), as long as no dynpro sequence called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm) is being processed there.

-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-processing.htm) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_list-processing.htm) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_event_glosry.htm "Glossary Entry") are being handled (even when [reporting events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreporting_event_glosry.htm "Glossary Entry") are being handled). This is especially true for the standard event [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm).

Note

[Background jobs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_batch_job.htm) are always started using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_via_job.htm), which means that list processing is usually also active at the same time.