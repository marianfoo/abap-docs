  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages_types.htm) → 

Messages in RFC Processing

If list processing and dialog processing do not take place in [RFC processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), messages behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause processing to terminated, followed by a [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_list_processing.htm) takes place during RFC processing, any messages sent behave as described there.

Note

If a message of type "E" is sent in a remote-enabled function module, note that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.