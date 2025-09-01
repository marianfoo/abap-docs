---
title: "Messages - Updates"
description: |
  During updates(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm 'Glossary Entry'), the behavior of messages depends on the work process. -   During synchronous updates(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensynchronous_update_glosry.htm 'Gl
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_update.htm"
abapFile: "abenabap_message_update.htm"
keywords: ["update", "do", "if", "case", "try", "data", "types", "abenabap", "message"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - Updates

During [updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry"), the behavior of messages depends on the work process.

-   During [synchronous updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensynchronous_update_glosry.htm "Glossary Entry") and [asynchronous updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasynchronous_update_glosry.htm "Glossary Entry") in an update work process in an [update session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_session_glosry.htm "Glossary Entry"), all messages except type S cause the update to terminate without creating a runtime error. The update work process performs a database rollback, enters appropriate comments in the associated database tables VB..., and notifies the user whose program created the entries by SAPmail.
-   During [local updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_update_glosry.htm "Glossary Entry"), all messages apart from type S and X are converted to messages of type A and these behave in the same way as in [dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm), which means they lead to a termination and a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Messages of type S and X are also handled in the same way as in dialog processing.

Hints

-   In exceptional cases, an update work process may be connected to a dialog (for example, during debugging). Messages then behave as in local updates.
-   In updates, type A messages cannot be caught using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_parameter.htm) in function module calls, since here the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) is executed implicitly, and this is not allowed in updates. Therefore, the runtime error MESSAGE\_ROLLBACK\_IN\_POSTING is produced when type A messages are caught using error\_message. Messages of types I, W, and E, on the other hand, can be caught.
-   For more information, see [Forbidden Statements in Updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit_during_update.htm).