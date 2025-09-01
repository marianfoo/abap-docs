  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - APC Processing, ABENABAP_MESSAGE_APC_SERVER, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - APC Processing

Messages sent during [APC processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_processing_glosry.htm "Glossary Entry"), that is, when a Web socket query or TCP query is handled by an [APC handler](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm), behave as follows:

-   Messages of types I, S, and W are ignored.
-   Messages of types A, E, and X cause the [APC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_session_glosry.htm "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.