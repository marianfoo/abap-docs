  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

PCP - Push Channel Protocol

The [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") is a communications format, specified by SAP, that is used to exchange messages between ABAP programs and between ABAP programs and external interfaces. A message in Push Channel Protocol is similar to a simple HTTP message. It basically consists of header fields for metadata and a message body.

-   A header field is a name-value pair separated by a colon (:) and followed by a line break.

-   The message body can be either character-like or byte-like.

-   The encoding of a character-like message body is [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry"). It can contain line breaks (\\n).

-   The encoding of a byte-like message body is [Base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry").

The escape character for the special characters :, \\n, and \\ is a prefixed \\.

The following APIs are available for handling the Push Channel Protocol:

-   On AS ABAP, the class CL\_AC\_MESSAGE\_TYPE\_PCP and the interface IF\_AC\_MESSAGE\_TYPE\_PCP constitute an API that handles PCP messages.

-   In [SAPUI5](javascript:call_link\('abensapui5_glosry.htm'\) "Glossary Entry"), the class [sap.ui.core.ws.SapPcpWebSocket](https://openui5.hana.ondemand.com/docs/api/symbols/sap.ui.core.ws.sappcpwebsocket.html) provides the necessary methods.

-   The JavaScript file sap-pcp-websocket.js can be loaded from the MIME repository as an API for other clients.

At present, the Push Channel Protocol is used by the following ABAP frameworks:

-   [ABAP Channels](javascript:call_link\('abenabap_channel_glosry.htm'\) "Glossary Entry")

-   PCP messages are an optional message type for [AMC](javascript:call_link\('abenamc.htm'\)) messages

-   PCP messages are a possible subprotocol of the WebSocket protocol for [APC](javascript:call_link\('abenapc.htm'\)) messages.

-   [ABAP Daemons](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry")

PCP messages are the only option for communicating between ABAP programs and [ABAP Daemons](javascript:call_link\('abenabap_daemon.htm'\)). ABAP Daemons also have access to data in PCP format in the [ABAP Daemon memory](javascript:call_link\('abenabap_daemon_memory_glosry.htm'\) "Glossary Entry").

Notes

-   The Push Channel Protocol is recommended for AMC messages and APC messages. They provide a unified format and make it possible to send and evaluate context information as meta data in the header fields, alongside the message itself.

-   The methods of the SAP-UI5 class sap.ui.core.ws.SapPcpWebSocket and the JavaScript file sap-pcp-websocket.js use an optional parameter to support multiplexing of virtual connections using a real WebSocket connection when PCP is in use. For Web applications, it is advisable to use virtual connections, since many Web browsers only support a limited number of WebSocket connections. For APC applications that use the Push Channel Protocol, the use of multiplexing is transparent, which means that virtual connections can be constructed to APC without making any changes.

-   Detailed information about PCP can be found in the ABAP Channels documentation in SAP Help Portal.