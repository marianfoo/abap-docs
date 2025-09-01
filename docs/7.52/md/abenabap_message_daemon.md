  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm) → 

Messages in ABAP Daemon Processing

Messages sent in [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") (namely when [ABAP Daemon](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_glosry.htm "Glossary Entry") methods are executed) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" terminate the [ABAP Daemon session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") and restart the [ABAP Daemon](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_glosry.htm "Glossary Entry") in a new user session. After the restart, the [ABAP Daemon event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_ERROR is raised.

Procedures called in an ABAP Daemon are executed in the ABAP Daemon context and their messages behave accordingly.