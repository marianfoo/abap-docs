  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20RFC%20Processing%2C%20ABENABAP_MESSAGE_RFC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - RFC Processing

As long as no list or dialog processing takes place during [RFC processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), messages behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause processing to terminated, followed by a [database rollback](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_message_list_processing.htm) takes place during RFC processing, any messages sent behave as described there.

Hint

If a message of type E is sent in a remote-enabled function module, it should be noted that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.