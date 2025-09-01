  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in List Processing

In [list processing](javascript:call_link\('abenlist_processing_glosry.htm'\) "Glossary Entry"), a message of type "W" is always converted to type "E" before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), as long as no dynpro sequence called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) is being processed there.

-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry") are being handled (even when [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") are being handled). This is especially true for the standard event [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)).

Note

[Background jobs](javascript:call_link\('abenabap_message_batch_job.htm'\)) are always started using [SUBMIT](javascript:call_link\('abapsubmit_via_job.htm'\)), which means that list processing is usually also active at the same time.