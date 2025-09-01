  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - APC Processing

Messages sent during [APC processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc_processing_glosry.htm "Glossary Entry"), that is, when a Web socket query or TCP query is handled by an [APC handler](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc.htm), behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause the [APC session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc_session_glosry.htm "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.