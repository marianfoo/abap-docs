---
title: "Messages - Background Processing"
description: |
  In background processing(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm 'Glossary Entry'), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only during list processing(https://he
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_batch_job.htm"
abapFile: "abenabap_message_batch_job.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenabap", "message", "batch", "job"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Background Processing, ABENABAP_MESSAGE_BATCH_JOB, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - Background Processing

In [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), all messages are handled in accordance with the type specified in the statement MESSAGE, with the following exception. Only [during list processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_list_processing.htm) is a message of type W converted into a message of type E before it is actually handled.

A message is not displayed, but instead is written as follows to the background processing log (job log) depending on the message type:

-   Messages of type S are written to the log and the program continues.
-   Messages of type I and W are written to the log and the program continues. The user input Enter, which is required to continue the program, is created automatically.
-   Messages of type E and A are written to the log. A check is then performed to see whether the message is handled using [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm). If this is not the case, the message is also written to the log with message number 564 of the message class 00 and current background processing is terminated, whereby a message of type A executes a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and a message of type E does not. Background processing is resumed when the message is handled.
-   Messages of type X create a [runtime error](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry") with associated [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") and the current background processing is canceled.

Hints

-   Since background processing is always started internally using the statement [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_via_job.htm), [list processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_list_processing.htm) is usually also active at the same time.
-   For messages of type A, it should be noted that handling using [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm) causes the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) to be executed implicitly, hence producing a database rollback and other side-effects.