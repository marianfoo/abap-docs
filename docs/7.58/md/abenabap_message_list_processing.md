  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20List%20Processing%2C%20ABENABAP_MESSAGE_LIST_PROCESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - List Processing

In [list processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_processing_glosry.htm "Glossary Entry"), a message of type W is always converted to type E before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm), if no dynpro sequence called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm) is processed there.
-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_to_list-processing.htm) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_list-processing.htm) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_event_glosry.htm "Glossary Entry") are handled, even when [reporting events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry") are being handled. The latter applies in particular to the standard event [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-selection.htm).

Hint

[Background jobs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_batch_job.htm) are always started using [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit_via_job.htm), which means that list processing is usually also active at the same time.