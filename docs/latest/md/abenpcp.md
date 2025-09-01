  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Push%20Channel%20Protocol%20%28PCP%29%2C%20ABENPCP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Push Channel Protocol (PCP)

The [Push Channel Protocol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") (PCP) is a communications format specified by SAP for exchanging messages between ABAP programs and between ABAP programs and external interfaces. A message in Push Channel Protocol is similar to a simple HTTP message. It basically consists of header fields for metadata and a message body.

-   A header field is a name-value pair separated by a colon (:) and followed by a line feed.
-   The message body can be either character-like or byte-like.
    
    -   The encoding of a character-like message body is [UTF-8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf8_glosry.htm "Glossary Entry"). It can contain line feeds (\\n).
    -   The encoding of a byte-like message body is [Base64](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase64_glosry.htm "Glossary Entry").
    
    The escape character for the special characters :, \\n, and \\ is a prefixed \\.
    

The following APIs are available for handling the Push Channel Protocol:

-   On AS ABAP, the class CL\_AC\_MESSAGE\_TYPE\_PCP and the interface IF\_AC\_MESSAGE\_TYPE\_PCP form an API that handles PCP messages.
-   In [SAPUI5](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensapui5_glosry.htm "Glossary Entry"), the class [sap.ui.core.ws.SapPcpWebSocket](https://openui5.hana.ondemand.com/#/api/sap.ui.core.ws.SapPcpWebSocket) provides the necessary methods.
-   The JavaScript file sap-pcp-websocket.js can be loaded from the MIME repository as an API for other clients.

Currently, the Push Channel Protocol is used by the following ABAP frameworks:

-   [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channel_glosry.htm "Glossary Entry")
    -   PCP messages are an optional message type for [AMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc.htm) messages
    -   PCP messages are a possible subprotocol of the WebSocket protocol for [APC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) messages.
-   [ABAP daemons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_glosry.htm "Glossary Entry")
    
    PCP messages are the only way of communicating between ABAP programs and [ABAP daemons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon.htm). ABAP daemons also have access to data in PCP format in the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry").
    

Hints

-   The Push Channel Protocol is recommended for AMC messages and APC messages. They provide a unified format and make it possible to send and evaluate context information as meta data in the header fields in addition to the message itself.
-   The methods of the SAPUI5 class sap.ui.core.ws.SapPcpWebSocket and the JavaScript file sap-pcp-websocket.js use an optional parameter to support multiplexing of virtual connections using a real WebSocket connection when PCP is used. For Web applications, it is advisable to use virtual connections, since many Web browsers only support a limited number of WebSocket connections. For APC applications that use the Push Channel Protocol, the use of multiplexing is transparent, which means that virtual connections can be constructed for existing APC applications without changes.
-   For detailed information about PCP, see the [ABAP Channels](https://help.sap.com/docs/ABAP_PLATFORM_NEW/05d041d3df1a4595a3c45f57c15e2325/18ef61f6415743658407d4d17f06e950) documentation in the SAP Help Portal.