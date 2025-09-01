  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Background%20Processing%2C%20ABENABAP_MESSAGE_BATCH_JOB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Background Processing

In [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry"), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only [during list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) is a message of type W converted into a message of type E before it is actually handled.

A message is not displayed, but instead is written as follows to the background processing log (job log) depending on the message type:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. A check is then performed to see whether the message is handled using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)). If this is not the case, the message is also written to the log with message number 564 of the message class 00 and current background processing is terminated, whereby a message of type A executes a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") and a message of type E does not. Background processing is resumed when the message is handled.
-   Messages of type X create a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") with associated [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") and the current background processing is canceled.

Hints

-   Since background processing is always started internally using the statement [SUBMIT](javascript:call_link\('abapsubmit_via_job.htm'\)), [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) is usually also active at the same time.
-   For messages of type A, it should be noted that handling using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) causes the statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) to be executed implicitly, hence producing a database rollback and other side-effects.