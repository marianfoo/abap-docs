  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - ABAP Daemon Processing

Messages sent in [ABAP daemon processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry"), that is, when [ABAP daemon](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_glosry.htm "Glossary Entry") methods are executed, behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X terminate the [ABAP daemon session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") and restart the [ABAP daemon](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_glosry.htm "Glossary Entry") in a new user session. After the restart, the [ABAP daemon event](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP daemon are executed in the ABAP daemon context and their messages behave accordingly.