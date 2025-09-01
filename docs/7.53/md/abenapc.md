  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) → 

APC - ABAP Push Channels

-   [APC - Overview](#abenapc-1--------as-abap-as-an-apc-server---@ITOC@@ABENAPC_2)

-   [ABAP Push Channels as Repository Objects](#abenapc-3--------apc-handler-class---@ITOC@@ABENAPC_4)

-   [AS ABAP as APC client](#abenapc-5--------as-abap-as-a-detached-apc-client---@ITOC@@ABENAPC_6)

-   [Associating APC with AMC](#abenapc-7--------apc---system-wide-access---@ITOC@@ABENAPC_8)

-   [APC - Security](#abenapc-9--------apc---exceptions---@ITOC@@ABENAPC_10)

-   [APC - Test and Analysis](#abenapc-11--------more-information---@ITOC@@ABENAPC_12)

Note

Each communication step in ABAP Push Channels, such as sending a message or responding to an event, can be associated with a change of [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") and usually triggers a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry").

APC - Overview

ABAP Push Channels (APC) enable bidirectional communication with the Internet for ABAP programs using the following:

-   WebSockets

-   TCP sockets

Both communication protocols are based on the [transmission control protocol (TCP)](http://tools.ietf.org/html/rfc793), which enables push communication (unlike HTTP). Under the traditional pull principle, each response of a server requires a preceding client request; under the push principle, however, it is enough to have an open connection between client and server, used by the server to pass information as soon as it becomes available.

-   An [AS ABAP](http://tools.ietf.org/html/rfc6455) can use the [WebSocket](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") protocol to communicate with clients and servers that support this protocol. All standard Web browsers, for example, support the WebSocket protocol. One example of clients are appropriately programmed Web pages in browsers that support WebSockets.

-   An [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") can use TCP sockets directly using TCP/IP packets to communicate with clients and servers that do not support the WebSocket protocol. These can be, for example, embedded systems or programmable logic controllers (PLC). Direct communication is hence possible between ABAP programs and "intelligent things" in the Internet of Things (IoT) or devices used to control and monitor machines.

ABAP Push Channels can be used to make AS ABAP into a WebSocket server and a WebSocket client. The APC framework in AS ABAP makes the following scenarios possible:

-   AS ABAP as an APC server

-   stateless

-   stateful

-   AS ABAP as APC client

-   AS ABAP as a detached APC client

-   stateless

-   stateful

A detached client is an AS ABAP [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") that opens a connection to an APC server, is detached, and can then itself be addressed as an APC server.

All scenarios can be implemented for both protocols, WebSocket and TCP socket. The associated class-based APIs in AS ABAP for both protocols are very similar. For an AS ABAP as APC server, [ABAP push channels](javascript:call_link\('abenabap_push_channel_glosry.htm'\) "Glossary Entry") need to be created as repository objects. A service in the [ICF](javascript:call_link\('abenicf.htm'\)) service tree and a special [APC handler class](javascript:call_link\('abenapc_handler_class_glosry.htm'\) "Glossary Entry") are then assigned to these objects. A WebSocket server can be addressed directly using a HTTP/HTTPS query, whereas corresponding TCP ports need to be configured for TCP sockets.

For both protocols, simple character and byte strings can be used as a format for messages. In the case of the WebSocket protocol, SAP's [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") should also be used. For the WebSocket protocol, it is still possible to associate ABAP Push Channels with [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)) to make AS ABAP communication with the Internet independent of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry").

AS ABAP as an APC Server

To implement a stateless or stateful APC server on an AS ABAP, an [ABAP Push Channel](javascript:call_link\('abenabap_push_channel_glosry.htm'\) "Glossary Entry") must be created as a repository object and an associated [APC handler class](javascript:call_link\('abenapc_handler_class_glosry.htm'\) "Glossary Entry") implemented.

ABAP Push Channels as Repository Objects

An [ABAP Push Channel](javascript:call_link\('abenabap_push_channel_glosry.htm'\) "Glossary Entry") defined as a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") must exist for each APC server application. ABAP Push Channels can be created in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in ABAP Workbench by opening the context menu of a package and choosing Connectivity. The Connectivity Browser of the Object Navigator provides another means of access. To open the Object Navigator for APCs, use transaction SAPC.

When a push channel is created, either WebSocket or TCP socket must be defined as the connection type. The server must also be defined as stateless or stateful. On stateful servers, the context and, more specifically, the attributes of the APC handler are preserved each time the server is accessed by a client.

Each push channel has two further repository objects generated when a push channels is created:

-   A node in the service tree of [ICF](javascript:call_link\('abenicf.htm'\)), visible in transaction SICF (the service editor). Like all other ICF services, this node represents the Web address of the push channel. This node can be activated and deactivated in the service editor, but not tested directly.

-   In the case of the WebSocket protocol, other systems (such as a Web browser that supports the WebSocket protocol) can use this address to communicate with the push channel directly.

-   In the case of the TCP socket protocol, the alias mechanism in ICF must be used to configure a TCP port.

-   An APC handler class saved as a global class in the ABAP Class Library and which can be edited in Class Builder. When a query is sent to a push channel, the APC framework creates an instance of the class as an APC handler in a dedicated [APC session](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry").

An optional subprotocol of the WebSocket protocol can be assigned to a push channel that uses the WebSocket protocol. Currently, SAP's own [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") can be assigned. The generated APC handler class inherits from a different superclass, depending on the protocol used, and includes other interfaces that enable specific access to the protocol.

Example

See the ABAP Push Channels DEMO\_APC, DEMO\_APC\_PCP, and DEMO\_APC\_PCP\_STATEFUL in the package SABAPDEMOS. All three use the WebSocket protocol. DEMO\_APC is stateless and does not use a subprotocol. DEMO\_APC\_PCP is stateless and uses the [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") as a subprotocol. DEMO\_APC\_PCP\_STATEFUL is like DEMO\_APC\_PCP but is stateful.

APC Handler Class

The APC handler class of each ABAP Push Channel inherits from one of the following superclasses (depending on its attributes):

-   WebSocket protocol

-   CL\_APC\_WSP\_EXT\_STATELESS\_BASE
    (stateless if a subprotocol is not used)

-   CL\_APC\_WSP\_EXT\_STATELESS\_PCP\_B
    (stateless if the [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") is used)

-   CL\_APC\_WSP\_EXT\_STATEFUL\_BASE
    (stateful if a subprotocol is not used)

-   CL\_APC\_WSP\_EXT\_STATEFUL\_PCP\_B
    (stateful if the [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") is used)

-   TCP socket protocol.

-   CL\_APC\_TCP\_EXT\_STATELESS\_BASE
    (stateless)

-   CL\_APC\_TCP\_EXT\_STATEFUL\_BASE
    (stateful)

All superclasses contain abstract interface methods ON\_START and ON\_MESSAGE that can be redefined as application-specific methods:

-   ON\_START

The APC framework runs this method in the APC handler when the push channel is opened. Here, initial actions can be implemented, to be performed at this time. For example, the binding can be made to an [ABAP Messaging Channel](javascript:call_link\('abenamc.htm'\)) here. The method can also remain empty.

-   ON\_MESSAGE

The APC framework executes this method in the APC handler when the push channel receives an APC message. All responses to the message must be implemented or called here. Input parameters are available here that reference objects for the message, its context, and the message manager. For example, a message can be sent as a response.

-   In an APC without a subprotocol, text messages and binary message content can be read from received message objects and written to message objects waiting to be sent.

-   In an APC with [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry"), the content of received messages can be deserialized to ABAP data and ABAP data can be serialized to message objects waiting to be sent.

Further optional interface methods, such as ON\_ACCEPT, ON\_CLOSE, and ON\_ERROR can be implemented to respond to the corresponding events. More particularly, ON\_ACCEPT can be used to decide whether an APC connection is opened.

The APC handler classes for the TCP socket protocol have an additional method, ON\_CONNECTION\_SETUP, from the interface IF\_APC\_TCP\_SERVER\_CONFIG in which the TCP framework structure must be defined. Here, a TCP framework type and a value for this type can be specified using constants of the interface IF\_APC\_TCP\_FRAME\_TYPES. The TCP framework structure can be determined using a terminator character or a length.

An APC message in an APC handler class is handled as [APC processing](javascript:call_link\('abenapc_processing_glosry.htm'\) "Glossary Entry") in a separate [APC session](javascript:call_link\('abenapc_session_glosry.htm'\) "Glossary Entry"). Here, certain statements, like [MESSAGE](javascript:call_link\('abapmessage.htm'\)) or [BREAK-POINT](javascript:call_link\('abapbreak-point.htm'\)), are handled differently than, for example, in dialog processing. External breakpoints can be set to debug programs during APC processing. In stateful APC processing, the program is executed in [non-blocking mode](javascript:call_link\('abenapc_non_blocking_model.htm'\)), where all statements are forbidden that could prevent inbound messages from being received.

Notes

-   Each time a message is sent and each time APC processing is exited, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is executed (except during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry")).

-   If no subprotocol is used, there are no special requirements made on an APC client, such as a WebSocket-enabled browser. As a WebSocket server, an AS ABAP can be addressed using text messages and binary messages and with standard techniques. If SAP's own [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") is used, a WebSocket client must use the associated API. For external clients such as WebSocket-enabled browsers, this API is available as a JavaScript file in the MIME repository under the node /sap/public/bc/ur/sap-pcp-websocket.js.

Example

See the APC handler class CL\_APC\_WS\_EXT\_DEMO\_APC for the ABAP Push Channel DEMO\_APC or CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP for the ABAP Push Channel DEMO\_APC\_PCP. The APC handler class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP\_ST for the ABAP Push Channel DEMO\_APC\_PCP\_STATEFUL calls the identically named methods of CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP. Here, an object of the class is created in the method ON\_ACCEPT. The executable example under [AS ABAP as WebSocket Server](javascript:call_link\('abenapc_abexa.htm'\)) creates a Web site that accesses these APC services as a client.

AS ABAP as APC client

The functions of APC clients in an AS ABAP are implemented in handler classes that integrate the following interfaces:

-   IF\_APC\_WSP\_EVENT\_HANDLER
    for the WebSocket protocol and the TCP socket protocol without subprotocol.

-   IF\_APC\_WSP\_EVENT\_HANDLER\_PCP
    for the WebSocket protocol with the [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry")

The interface methods ON\_OPEN, ON\_MESSAGE, ON\_CLOSE, and ON\_ERROR can be implemented in suitable ways in the handler classes. ON\_OPEN and ON\_CLOSE are executed when opening and closing a connection, whereas ON\_MESSAGE is triggered the next time messages from the server cause the work process to change. The attribute MESSAGE can be accessed in ON\_MESSAGE. When a method like this is being processed, no [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") can be executed, implicitly or explicitly, since this cause the runtime error APC\_ILLEGAL\_STATEMENT.

The following classes are used to instantiate the actual client objects:

-   CL\_APC\_WSP\_CLIENT\_MANAGER
    using the methods CREATE\_BY\_URL or CREATE\_BY\_DESTINATION for the WebSocket protocol

-   CL\_APC\_TCP\_CLIENT\_MANAGER
    using the method CREATE for the TCP socket protocol

The address of the server in question, a reference to the hander object, and the subprotocol (if needed) are passed to these methods. In the case of the TCP socket protocol, the TCP framework structure must be defined by a terminator character or a length. Reference variables of the type IF\_APC\_WSP\_CLIENT that point to a client object with the following interface methods are returned:

-   The method GET\_CONTEXT gets a context object whose method GET\_INITIAL\_REQUEST can be used in the WebSocket protocol to create an access object for the HTTP address. This object then specifies paths and form fields for the address.

-   The method CONNECT opens an APC connection to a server using the information from the client object. The method CLOSE can be used to close the connection again explicitly. When the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is closed while a connection is open, the connection is also closed implicitly. If a connection is closed by an error, the handler method ON\_ERROR is called, followed by the handler method ON\_CLOSE.

-   The method GET\_MESSAGE\_MANAGER gets a reference of type IF\_APC\_WSP\_MESSAGE\_MANAGER\_BAS to a message manager object that can be cast to IF\_APC\_WSP\_MESSAGE\_MANAGER or IF\_APC\_WSP\_MESSAGE\_MANAGER\_PCP as specified by the subprotocol. The message manager can be used to create messages and send them from the client to the server.

When an APC message is sent, messages can be received by the server in the client session. This requires that the current session be in a wait state (rolled out by a change of work process). Messages directed to the client that are received by the AS ABAP during the wait state call the method ON\_MESSAGE of the handler object when the session is rolled in. The work process can be changed explicitly or implicitly:

-   The statement [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) is used for explicit programming. As specified by a condition, this statement switches the work process, and hence rolls out the session, while waiting for messages.

-   Implicit switches of the work process, as occur for example at the end of a [dialog step](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry"), are useful in GUI scenarios where WAIT needs to be avoided.

Executable Examples

-   [AS ABAP as WebSocket client](javascript:call_link\('abenapc_ws_client_abexa.htm'\))

-   [AS ABAP as TCP socket client](javascript:call_link\('abenapc_tcp_client_abexa.htm'\))

AS ABAP as a Detached APC Client

Like in AS ABAP as an APC client, detached APC clients open a connection from an [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") to an APC server and detach it again immediately. The same AS ABAP or another one can then attach itself to this connection as an attached APC client. The AS ABAP that opened the connection is given the part of an APC server as a detached client. This server can be stateless or stateful.

As in an APC client, a detached client requires handler classes with the interfaces IF\_APC\_WSP\_EVENT\_HANDLER or IF\_APC\_WSP\_EVENT\_HANDLER\_PCP. In this case, however, only the method ON\_OPEN is called and must be implemented accordingly. In the method ON\_OPEN, the method GET\_CONNECTION\_ATTACH\_HANDLE of the interface IF\_APC\_WSP\_SERVER\_CONTEXT can be used to get a connection handle for the detached client from the context object. This can then be used to connect with an attached client. Here, a security rule must be defined that specifies whether only sessions with the same client and user or only the current program can operate as an attached client in the same client.

The following classes are used to instantiate the actual detached client objects:

-   CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER
    using the methods CREATE\_BY\_URL or CREATE\_BY\_DESTINATION for the WebSocket protocol

-   CL\_APC\_TCP\_CLIENT\_CONN\_MANAGER
    using the method CREATE for the TCP socket protocol

The methods CREATE\_... have the same semantics as in a regular APC client and connect to an APC server.

The interface IF\_APC\_WSP\_CLIENT\_CONN\_DETACH is used to access a detached client object. Once a connection is defined with a stateless or stateful APC, it is opened and then immediately detached using the method CONNECT\_AND\_DETACH. This executes the method ON\_OPEN, which gets a connection handle for the connection using the context object.

To connect an AS ABAP with the detached client as an attached client, the method ATTACH of the classes CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER or CL\_APC\_TCP\_CLIENT\_CONN\_MANAGER above is used to create attached client objects. Here, the connection handle for the connection must be passed. This can take place in the current session or in a different session. The interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH can be used to access an attached client object. As in regular client objects, messages can be sent using the message manager. It is not possible, however, to create a connection with a handler class to use [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) to wait for messages. Any connections to detached clients that are no longer needed should be closed using the method CLOSE of the attached client object.

Notes

-   A detached client supports scenarios where an AS ABAP that wants to operate as an APC server itself opens an APC connection.

-   If the same AS ABAP with the same ABAP Push Channel is given the part of the detached and attached client, the sent messages must be identified as suitable messages in the APC handler class to prevent it from responding to its own messages. The header fields of the [PCP protocol](javascript:call_link\('abenpcp.htm'\)) are an appropriate way of doing this.

-   When an AS ABAP is working as a stateful detached client, an ABAP program is processed in the [non-blocking mode](javascript:call_link\('abenapc_non_blocking_model.htm'\)). Here, all statements are forbidden that could prevent inbound messages from being received.

-   APC messages sent from an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH The length of messages that can be sent is currently restricted to approximately 1 MB. Character strings are converted to the [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry") format. The limit can be increased by changing the profile parameter rdisp/long\_messages/max\_length.

Executable Examples

-   [Creating a Detached Client](javascript:call_link\('abenapc_detached_client_abexa.htm'\))

-   [AS ABAP as Attached Client](javascript:call_link\('abenapc_attached_client_abexa.htm'\)).

Associating APC with AMC

On its own, the APC framework enables a WebSocket to communicate with precisely one [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). To make communication non-dependent on the current AS Instance, the servers can be associated using [ABAP Messaging Channels](javascript:call_link\('abenamc.htm'\)). Here, a push channel (in the implementation of its APC handler class with method BIND\_AMC\_MESSAGE\_CONSUMER of interface IF\_APC\_WSP\_BINDING\_MANAGER of one the specially created binding managers) can be associated with an AMC consumer for a specific ABAP Messaging Channel with a suitable message type. Messages sent using this ABAP Messaging Channel are then handled automatically as APC messages. The APC framework wraps the required methods of the AMC framework. The only prerequisite is that the APC handler class is authorized to bind consumers and to send messages in the messaging channel in question. The association with the AMC consumer can be removed explicitly using the method UNBIND\_AMC\_MESSAGE\_CONSUMER of the binding manager. Any attempts to remove a nonexistent association raise an exception.

Notes

-   It is not possible to associate APC with AMC for TCP sockets.

-   It is not possible to associate APC with AMC during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry").

-   A push channel can only be associated once with a messaging channel. Any attempts to bind a push channel more than once to a messaging channel that is already bound raise any exception. Any attempts to remove a nonexistent association raise an exception.

-   The methods BIND\_AMC\_MESSAGE\_CONSUMER and UNBIND\_AMC\_MESSAGE\_CONSUMER both cause a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry").

-   If an ABAP Push Channel is associated with a messaging channel, it is possible to stop messages from being sent to the same connection, if the value of ABAP\_TRUE is passed to the parameter I\_SUPPRESS\_ECHO when the AMC sender object is created using the method CREATE\_MESSAGE\_PRODUCER of the class CL\_AMC\_CHANNEL\_MANAGER. If the APC connection is part of the ABAP session that uses the AMC sender object to send, the AMC message to the same APC connection is suppressed.

Executable Examples

-   See [AS ABAP as WebSocket Server](javascript:call_link\('abenapc_abexa.htm'\)), where ABAP Push Channels are demonstrated both with and without an association with AMC.

-   Execute DEMO\_APC\_PING\_PONG.

APC - System-Wide Access

An AS ABAP can send a message to an APC with which it is not associated as long as it knows the connection handle for this connection. The APC connection can exist on the same AS Instance or on a different server. The APC handler class can use the method GET\_CONNECTION\_ATTACH\_HANDLE of the interface IF\_APC\_WSP\_SERVER\_CONTEXT to get its connection handle from the context object. Here, a security rule must be defined that specifies whether only sessions with the same client and user or only the current program can access the connection in the same client.

A program that knows the connection handle and meets the prerequisites can use the method ATTACH of the classes CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER or CL\_APC\_TCP\_CLIENT\_CONN\_MANAGER to create an access object. These are the same methods as used to create an attached client for a detached client and the access object has the corresponding attributes. Its message manager can be used to create messages and send them to the APC connection.

Notes

-   System-wide sending of messages using an access object is technically the same as using an attached client object, but the scenario itself is different. Only attached clients can be used to access a detached client. System-wide access is possible in all scenarios if required.

-   APC messages sent from an attached client object using the interface IF\_APC\_WSP\_CLIENT\_CONN\_ATTACH The length of messages that can be sent is currently restricted to approximately 1 MB. Character strings are converted to the [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry") format. The limit can be increased by changing the profile parameter rdisp/long\_messages/max\_length.

Executable Example

[System-Wide Access](javascript:call_link\('abenapc_connect_via_handle_abexa.htm'\))

APC - Security

For the ABAP Push Channel, a virus scan profile can be specified for outbound and inbound messages. This profile is used when the virus scan interface (VSI) runs checks.

As was previously the case, WebSocket messages can only be handled if the WebSocket object is created using a file or website from the same address or domain. In other cases, permitted addresses or domains must be created using transaction SAPC\_CROSS\_ORIGIN in the table APC\_CROSS\_ORIGIN. Authorization for the fields of authorization object S\_APC\_ORIG is required.

APC - Exceptions

Error situations in sender and receiver programs (such as violations of rules set by the properties of a push channel) raise exceptions of the class CX\_APC\_ERROR.

APC - Test and Analysis

The existing test and analysis tools, such as [ABAP Debugger](javascript:call_link\('abenabap_debugger_glosry.htm'\) "Glossary Entry"), [runtime analysis](javascript:call_link\('abenruntime_analysis_glosry.htm'\) "Glossary Entry"), or [performance trace](javascript:call_link\('abenperformance_trace_glosry.htm'\) "Glossary Entry"), can be used as usual for programs running on AS ABAP and sending and receiving APC messages.

An overview of all APC connections on an AS ABAP can be found in transaction SMWS. Any surplus connections can also be closed here.

More Information

Detailed information about APC can be found in the ABAP Channels documentation in SAP Help Portal.

Continue
[APC - Non-Blocking Mode](javascript:call_link\('abenapc_non_blocking_model.htm'\))
[WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\))
[Examples of APC](javascript:call_link\('abenapc_abexas.htm'\))