  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - List Processing, ABENABAP_MESSAGE_LIST_PROCESSING, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - List Processing

In [list processing](javascript:call_link\('abenlist_processing_glosry.htm'\) "Glossary Entry"), a message of type W is always converted to type E before further context-dependent handling takes place. The message is then handled in accordance with the other context.

List processing is active in the following contexts with respect to messages:

-   In all executable programs called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), if no dynpro sequence called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) is processed there.
-   After list processing is called explicitly using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) in a dynpro sequence. The statement [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)) switches list processing off during a dynpro sequence.

In programs called using SUBMIT, list processing is active, therefore, apart from when actual [list events](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry") are handled, even when [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") are being handled. The latter applies in particular to the standard event [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)).

Hint

[Background jobs](javascript:call_link\('abenabap_message_batch_job.htm'\)) are always started using [SUBMIT](javascript:call_link\('abapsubmit_via_job.htm'\)), which means that list processing is usually also active at the same time.