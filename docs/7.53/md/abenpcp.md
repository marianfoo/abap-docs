  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) → 

PCP - Push Channel Protocol

The [Push Channel Protocol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") (PCP) is a communications format, specified by SAP, that is used to exchange messages between ABAP programs and between ABAP programs and external interfaces. A message in Push Channel Protocol is similar to a simple HTTP message. It basically consists of header fields for metadata and a message body.

-   A header field is a name-value pair separated by a colon (:) and followed by a line break.

-   The message body can be either character-like or byte-like.

-   The encoding of a character-like message body is [UTF-8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf8_glosry.htm "Glossary Entry"). It can contain line breaks (\\n).

-   The encoding of a byte-like message body is [Base64](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase64_glosry.htm "Glossary Entry").

The escape character for the special characters :, \\n, and \\ is a prefixed \\.

The following APIs are available for handling the Push Channel Protocol:

-   On AS ABAP, the class CL\_AC\_MESSAGE\_TYPE\_PCP and the interface IF\_AC\_MESSAGE\_TYPE\_PCP constitute an API that handles PCP messages.

-   In [SAPUI5](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensapui5_glosry.htm "Glossary Entry"), the class [sap.ui.core.ws.SapPcpWebSocket](https://openui5.hana.ondemand.com/docs/api/symbols/sap.ui.core.ws.sappcpwebsocket.html) provides the necessary methods.

-   The JavaScript file sap-pcp-websocket.js can be loaded from the MIME repository as an API for other clients.

At present, the Push Channel Protocol is used by the following ABAP frameworks:

-   [ABAP Channels](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_channel_glosry.htm "Glossary Entry")

-   PCP messages are an optional message type for [AMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc.htm) messages

-   PCP messages are a possible subprotocol of the WebSocket protocol for [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc.htm) messages.

-   [ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_glosry.htm "Glossary Entry")

PCP messages are the only option for communicating between ABAP programs and [ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm). ABAP Daemons also have access to data in PCP format in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry").

Notes

-   The Push Channel Protocol is recommended for AMC messages and APC messages. They provide a unified format and make it possible to send and evaluate context information as meta data in the header fields, alongside the message itself.

-   The methods of the SAP-UI5 class sap.ui.core.ws.SapPcpWebSocket and the JavaScript file sap-pcp-websocket.js use an optional parameter to support multiplexing of virtual connections using a real WebSocket connection when PCP is in use. For Web applications, it is advisable to use virtual connections, since many Web browsers only support a limited number of WebSocket connections. For APC applications that use the Push Channel Protocol, the use of multiplexing is transparent, which means that virtual connections can be constructed to APC without making any changes.

-   Detailed information about PCP can be found in the ABAP Channels documentation in SAP Help Portal.