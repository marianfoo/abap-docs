---
title: "Messages in APC Processing"
description: |
  Messages sent during APC processing(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm 'Glossary Entry') (namely when a Web socket query or TCP query is handled by an APC handler(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc.htm)) behave
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_message_apc_server.htm"
abapFile: "abenabap_message_apc_server.htm"
keywords: ["do", "case", "try", "method", "types", "abenabap", "message", "apc", "server"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm) → 

Messages in APC Processing

Messages sent during [APC processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_processing_glosry.htm "Glossary Entry") (namely when a Web socket query or TCP query is handled by an [APC handler](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc.htm)) behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause the [APC session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_session_glosry.htm "Glossary Entry") to terminate. In the case of stateful APC servers, the connection is closed. The methods ON\_CLOSE and ON\_ERROR can no longer be executed.

Programs or procedures called in the handler are executed in the handler context and their messages behave accordingly.