# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ABAP Channels / APC - ABAP Push Channels / Examples of APC

Included pages: 7


### abenapc_abexas.htm

---
title: "Examples of APC"
description: |
  !Example(exa.gif 'Example') APC, AS ABAP as WebSocket Server(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm) !Example(exa.gif 'Example') APC, AS ABAP as WebSocket Client(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_ws_client_abexa.htm) !Ex
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm"
abapFile: "abenapc_abexas.htm"
keywords: ["do", "if", "data", "abenapc", "abexas"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) → 

Examples of APC

Continue
![Example](exa.gif "Example") [APC, AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm)
![Example](exa.gif "Example") [APC, AS ABAP as WebSocket Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_ws_client_abexa.htm)
![Example](exa.gif "Example") [APC, AS ABAP as TCP Socket Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_tcp_client_abexa.htm)
![Example](exa.gif "Example") [APC, Creating a Detached Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_detached_client_abexa.htm)
![Example](exa.gif "Example") [APC, AS ABAP as Attached Client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_attached_client_abexa.htm)
![Example](exa.gif "Example") [APC, System-Wide Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_connect_via_handle_abexa.htm)


### abenapc_abexa.htm

---
title: "APC, AS ABAP as WebSocket Server"
description: |
  This example demonstrates ABAP push channel(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_glosry.htm 'Glossary Entry')s in AS ABAP as a WebSocket server. Source Code REPORT demo_apc_wsp. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. CLASS-METHODS class_construc
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm"
abapFile: "abenapc_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenapc", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, AS ABAP as WebSocket Server

This example demonstrates [ABAP push channel](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_glosry.htm "Glossary Entry")s in AS ABAP as a WebSocket server.

Source Code

REPORT demo\_apc\_wsp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA url TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF url IS INITIAL.
      RETURN.
    ENDIF.
    DATA amc TYPE abap\_bool VALUE 'X'.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = amc ).
    cl\_demo\_input=>add\_line( ).
    DATA pcp TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = pcp ).
    DATA pcp\_stateful TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = pcp\_stateful ).
    cl\_demo\_input=>request( ).
    amc = to\_upper( amc ).
    cl\_demo\_output=>display\_html(
      |<html>| &&
      |<body>| &&
      |<a href="{ COND string( WHEN pcp IS INITIAL AND
                                    pcp\_stateful IS INITIAL THEN url
                               ELSE url && \`\_pcp\` )
        }?sap-client={ sy-mandt
        }&sap-language={ cl\_i18n\_languages=>sap1\_to\_sap2( sy-langu )
        }{ COND string( WHEN amc = abap\_true
             THEN \`&amc=x\`
             ELSE \`\` )
        }{ COND string( WHEN pcp\_stateful = abap\_true
             THEN \`&pcp\_stateful=x\`
             ELSE \`\` )
        }" target="\_blank">| &&
        |Open demo web page with standard browser</a><br><br>| &&
      |If your browser does not support WebSocket, | &&
      |copy the URL to another browser.| &&
      |</body>| &&
      |</html>| ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_apc\`.
    DATA(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      url = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates bidirectional communication between a browser that supports the WebSocket protocol as an APC client and AS ABAP as an APC server. The example program above has the task of displaying a webpage that communicates with the current AS ABAP. It is possible to specify the following:

-   Is the APC used associated with an [ABAP messaging channel (AMC)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm)?

-   Is an APC used together with the [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") or is an APC used without this protocol?

-   Is a stateful service used when the subprotocol PCP is used?

The Web page is provided by an [ICF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenicf.htm) HTTP service whose URL is constructed in the program for the current AS Instance. If the standard browser called does not support communication using the WebSocket protocol, you must open the URL using a suitable browser instead.

The communication partners are:

-   The Web pages generated in the HTTP request handler CL\_HTTP\_EXT\_APC\_DEMO or CL\_HTTP\_EXT\_APC\_PCP\_DEMO. One Web page makes it possible to open a WebSocket object without Push Channel Protocol (PCP) support and the other Web page makes it possible to open a WebSocket object with the support of this protocol. Both Web pages make it possible to send messages using the object and to close the object. These tasks are performed by a JavaScript function implemented in the Web page. If PCP is used, a JavaScript file sap-pcp-websocket.js is included from the Mime repository in AS ABAP. This file provides the client-side framework for using this protocol. This API is not needed if PCP is not used. If the PCP protocol is used, it is possible to access both a stateless ABAP channel and a stateful channel.

-   The ABAP push channel DEMO\_APC, DEMO\_APC\_PCP, or DEMO\_APC\_PCP\_STATEFUL from the package SABAPDEMOS in the current AS ABAP (with the latter two supporting the Push Channel Protocol (PCP) and the latter being stateful). The URL of the service assigned to the push channel is used in the JavaScript function of the associated Web page to open the WebSocket communication of this Web page. The form field amc is passed further. The APC handler classes CL\_APC\_WS\_EXT\_DEMO\_APC and CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP implement the methods ON\_START and ON\_MESSAGE of the interface IF\_APC\_WSP\_EXTENSION for communication with and without a connection to an [AMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm). The APC handler class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP\_ST demonstrates a stateful service by simply calling the identically named methods of an object of the class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP. The AMC used here is /demo\_text or /demo\_pcp from the [executable examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc_abexas.htm) for AMC. When a message is received, the method ON\_MESSAGE creates a new message with information about the received message and sends it. If PCP is not used, a text message is sent. In the version for PCP, this protocol is used. CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP demonstrates the stateful service by raising a counter whose value stays the same in stateless services.

If the ABAP push channel is opened using the form field amc=x, communication takes place using AMC. Each Web page bound to the push channel receives every message sent using AMC. In the example, this means that the message sent by ON\_MESSAGE is not just received by the Web page that sent a message. Furthermore, the Web pages bound to the push channel receive messages sent, for example, using the program DEMO\_SEND\_AMC from the executable example [Sending AMC Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc_send_abexa.htm). Conversely, the program DEMO\_RECEIVE\_AMC receives the messages sent from the Web pages from the executable example [Receiving AMC Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc_receive_abexa.htm).

Note

Before this example can work, the protocols WEBSOCKET and WEBSOCKETS must be specified as active services in the Services function in the transaction SMICM.


### abenapc_ws_client_abexa.htm

---
title: "APC, AS ABAP as WebSocket Client"
description: |
  This example demonstrates AS ABAP as a WebSocket client. Source Code REPORT demo_apc_client. CLASS apc_handler DEFINITION FINAL. PUBLIC SECTION. INTERFACES if_apc_wsp_event_handler_pcp. DATA       message TYPE string. ENDCLASS. CLASS apc_handler IMPLEMENTATION. METHOD if_apc_wsp_event_h
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_ws_client_abexa.htm"
abapFile: "abenapc_ws_client_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenapc", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, AS ABAP as WebSocket Client

This example demonstrates AS ABAP as a WebSocket client.

Source Code

REPORT demo\_apc\_client.
CLASS apc\_handler DEFINITION FINAL.
  PUBLIC SECTION.
    INTERFACES if\_apc\_wsp\_event\_handler\_pcp.
    DATA       message TYPE string.
ENDCLASS.
CLASS apc\_handler IMPLEMENTATION.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_open.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_message.
    TRY.
        me->message = i\_message->get\_text( ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        me->message = apc\_error->get\_text( ).
      CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_error).
        cl\_demo\_output=>display( pcp\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_close.
    me->message = 'Connection closed!'.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_error.
    cl\_demo\_output=>display( 'Error!' ).
    LEAVE PROGRAM.
  ENDMETHOD.
ENDCLASS.
CLASS apc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS apc\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(msg) = \`Hello APC!\`.
    cl\_demo\_input=>add\_field( CHANGING field = msg ).
    DATA amc TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = amc ).
    DATA stateful\_server TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = stateful\_server ).
    DATA messages TYPE i VALUE '5'.
    cl\_demo\_input=>add\_field(  CHANGING field  = messages ).
    DATA wait TYPE i VALUE '10'.
    cl\_demo\_input=>add\_field(  CHANGING field  = wait ).
    cl\_demo\_input=>request( ).
    TRY.
        DATA(event\_handler) = NEW apc\_handler( ).
        "Client
        DATA(client) =
          cl\_apc\_wsp\_client\_manager=>create\_by\_destination(
            i\_destination = 'NONE'
            i\_event\_handler = event\_handler
            i\_protocol =
              if\_apc\_wsp\_event\_handler\_pcp=>co\_event\_handler\_type ).
        "Server
        DATA(request) =
          client->get\_context( )->get\_initial\_request( ).
        request->set\_path\_and\_query(
          i\_relative\_uri =
            \`/sap/bc/apc/sap/demo\_apc\_pcp\` &&
            COND #(
               WHEN stateful\_server = abap\_true THEN \`\_stateful\` ) &&
            COND #(
              WHEN amc = abap\_true THEN \`?amc=x\` ) ).
        client->connect( ).
        "Sending messages
        DATA(message\_manager) =
          CAST if\_apc\_wsp\_message\_manager\_pcp(
            client->get\_message\_manager( ) ).
        DATA(message) =
          CAST if\_ac\_message\_type\_pcp(
            message\_manager->create\_message( ) ).
        TRY.
            IF amc = abap\_true.
              message->set\_field( i\_name = 'amc' i\_value = 'x' ).
            ENDIF.
            message->set\_text( msg ).
          CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_error).
            cl\_demo\_output=>display( pcp\_error->get\_text( ) ).
            LEAVE PROGRAM.
        ENDTRY.
        DO messages TIMES.
          message\_manager->send( message ).
        ENDDO.
        "Receiving messages
        DO wait TIMES.
          out->line( ).
          CLEAR event\_handler->message.
          WAIT FOR PUSH CHANNELS
               UNTIL event\_handler->message IS NOT INITIAL
               UP TO 1 SECONDS.
          IF sy-subrc = 4.
            out->write\_text(
              'No handler for APC messages registered' ).
          ELSEIF sy-subrc = 8.
            out->write\_text(
              'Timeout occurred!' ).
          ELSE.
            out->write\_text(
             |Received APC message: \\n\\n{
               event\_handler->message } | ).
          ENDIF.
        ENDDO.
        out->line( ).
        "Close connection
        client->close( i\_reason = 'Application closed connection!' ).
        out->display( ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description

This example demonstrates how an ABAP program can create an [APC client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) for the WebSocket protocol.

-   The local class apc\_handler, which implements the interface IF\_APC\_WSP\_EVENT\_HANDLER\_PCP, is used as the handler class. When a message is received, the method on\_message sets its message attribute to the message text.

-   CL\_APC\_WSP\_CLIENT\_MANAGER is used to create a client object for the current AS ABAP as an APC server and opens a connection to one of its ABAP push channels. It is possible to select which of the two ABAP push channels, DEMO\_APC\_PCP or DEMO\_APC\_PCP\_STATEFUL, from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm) is used. The server can also be instructed to send its messages using [ABAP messaging channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm).

-   The message manager of the client object is used to create a message in [PCP format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp.htm) and send it multiple times.

-   The statement [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_apc.htm) is then used to switch the program to a wait state so that messages sent back from the server can be handled. Here, the logical expression checks the attribute message of the handler class apc\_handler. A received text is displayed.

-   Finally, the connection is closed explicitly.

It is possible to select how many messages are sent and how often the wait state occurs.

-   If communication takes place with the stateful server, the counter level of the server is raised, indicating that multiple messages are being sent and received.

-   If the server sends its messages using ABAP messaging channels, other AMC receivers in the same messaging channel can also see the messages of the server. For example, the Web browser from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm) can receive these messages. In the reverse direction, the APC client can then also receive those messages sent by the APC server as a response to messages from the Web browser, if they occur in one of the programmed wait periods.


### abenapc_tcp_client_abexa.htm

---
title: "APC, AS ABAP as TCP Socket Client"
description: |
  This example demonstrates AS ABAP as a TCP socket client. Source Code REPORT demo_apc_tcp_client. CLASS apc_handler DEFINITION FINAL . PUBLIC SECTION. INTERFACES if_apc_wsp_event_handler. DATA       message TYPE string. ENDCLASS. CLASS apc_handler IMPLEMENTATION. METHOD if_apc_wsp_event
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_tcp_client_abexa.htm"
abapFile: "abenapc_tcp_client_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "abenapc", "tcp", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, AS ABAP as TCP Socket Client

This example demonstrates AS ABAP as a TCP socket client.

Source Code

REPORT demo\_apc\_tcp\_client.
CLASS apc\_handler DEFINITION FINAL .
  PUBLIC SECTION.
    INTERFACES if\_apc\_wsp\_event\_handler.
    DATA       message TYPE string.
ENDCLASS.
CLASS apc\_handler IMPLEMENTATION.
  METHOD if\_apc\_wsp\_event\_handler~on\_open.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_message.
    TRY.
        message = i\_message->get\_text( ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        message = apc\_error->get\_text( ).
    ENDTRY.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_close.
    message = 'Connection closed!'.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_error.
  ENDMETHOD.
ENDCLASS.
CLASS apc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS apc\_demo IMPLEMENTATION.
  METHOD main.
    DATA(tcp\_server) = \`C:\\ncat\\ncat.exe\`.
    DATA(ip\_adress)  = cl\_gui\_frontend\_services=>get\_ip\_address( ).
    DATA(port)       = \`12345\`.
    DATA(terminator) = \`0A\`.
    DATA(msg)        = \`Hello TCP, answer me!\`.
    cl\_demo\_input=>new(
      )->add\_text(
         \`For the TCP server, download the freely available NCAT.EXE\`
      )->add\_field( CHANGING field = tcp\_server
      )->add\_field( CHANGING field = ip\_adress
      )->add\_field( CHANGING field = port
      )->add\_field( CHANGING field = terminator
      )->add\_field( CHANGING field = msg
      )->request( ).
    "Server
    IF cl\_gui\_frontend\_services=>file\_exist(
         file = tcp\_server ) IS INITIAL.
      cl\_demo\_output=>display( 'TCP Server not found!' ).
      LEAVE PROGRAM.
    ENDIF.
    cl\_gui\_frontend\_services=>execute(
    EXPORTING
      application = \`cmd.exe\`
      parameter  =  \`/c \` && tcp\_server &&
                   \` -l \` && ip\_adress && \` -p \` && port ).
    WAIT UP TO 1 SECONDS.
    TRY.
        DATA(event\_handler) = NEW apc\_handler( ).
        "Client
        DATA(client) = cl\_apc\_tcp\_client\_manager=>create(
          i\_host   = ip\_adress
          i\_port  = port
          i\_frame = VALUE apc\_tcp\_frame(
            frame\_type =
              if\_apc\_tcp\_frame\_types=>co\_frame\_type\_terminator
            terminator =
              terminator )
          i\_event\_handler = event\_handler ).
        client->connect( ).
        "Send mesasage from client
        DATA(message\_manager) = CAST if\_apc\_wsp\_message\_manager(
          client->get\_message\_manager( ) ).
        DATA(message) = CAST if\_apc\_wsp\_message(
          message\_manager->create\_message( ) ).
        DATA(binary\_terminator) = CONV xstring( terminator ).
        DATA(binary\_msg) =
          cl\_abap\_conv\_codepage=>create\_out( )->convert( msg ).
        CONCATENATE binary\_msg binary\_terminator
               INTO binary\_msg IN BYTE MODE.
        message->set\_binary( binary\_msg ).
        message\_manager->send( message ).
        "Wait for a message from server
        CLEAR event\_handler->message.
        WAIT FOR PUSH CHANNELS
             UNTIL event\_handler->message IS NOT INITIAL
             UP TO 10 SECONDS.
        IF sy-subrc = 4.
          cl\_demo\_output=>display(
            'No handler for APC messages registered!' ).
        ELSEIF sy-subrc = 8.
          cl\_demo\_output=>display(
            'Timeout occurred!' ).
        ELSE.
          cl\_demo\_output=>display(
            |TCP client received:\\n\\n{ event\_handler->message }| ).
        ENDIF.
        client->close(
          i\_reason = 'Application closed connection!' ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description

This example demonstrates how an ABAP program can create an [APC client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) for the TCP socket protocol. It is structured in exactly the same way as in the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_ws_client_abexa.htm) for the WebSocket client, but with the connection being made to a TCP socket server. The current front-end computer is used as the TCP socket server here and the available [Ncat](https://nmap.org/ncat/) can be downloaded to this computer.

This program requires the Ncat.exe directory and the address of the current front-end computer (proposals are made for this information). In addition, a terminator character is needed for the TCP framework structure.

When the program is executed, Ncat.exe is started and waits for messages from the APC client. Once a message is sent, this client waits for a message entered in the Ncat window and confirmed using Enter.


### abenapc_detached_client_abexa.htm

---
title: "APC, Creating a Detached Client"
description: |
  This example demonstrates how a detached client is created for the WebSocket protocol. Source Code REPORT demo_apc_detached_client. CLASS apc_handler DEFINITION FINAL. PUBLIC SECTION. INTERFACES if_apc_wsp_event_handler_pcp. DATA: connection_attach_handle TYPE string, message
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_detached_client_abexa.htm"
abapFile: "abenapc_detached_client_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenapc", "detached", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, Creating a Detached Client

This example demonstrates how a detached client is created for the WebSocket protocol.

Source Code

REPORT demo\_apc\_detached\_client.
CLASS apc\_handler DEFINITION FINAL.
  PUBLIC SECTION.
    INTERFACES if\_apc\_wsp\_event\_handler\_pcp.
    DATA: connection\_attach\_handle TYPE string,
          message                  TYPE string.
ENDCLASS.
CLASS apc\_handler IMPLEMENTATION.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_open.
    TRY.
        connection\_attach\_handle =
          i\_context->get\_connection\_attach\_handle(
            EXPORTING i\_connection\_security =
              i\_context->co\_con\_security\_by\_user\_id ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        me->message = apc\_error->get\_text( ).
    ENDTRY.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_message.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_close.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler\_pcp~on\_error.
  ENDMETHOD.
ENDCLASS.
CLASS apc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS apc\_demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(msg) = \`Hello APC!\`.
    cl\_demo\_input=>add\_field( CHANGING field = msg ).
    DATA amc TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = amc ).
    DATA stateful\_server TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = stateful\_server ).
    DATA show\_attach\_handle TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = show\_attach\_handle ).
    cl\_demo\_input=>request( ).
    TRY.
        DATA(event\_handler) = NEW apc\_handler( ).
        "Detached client
        DATA(client\_detach) =
          cl\_apc\_wsp\_client\_conn\_manager=>create\_by\_destination(
            i\_destination = 'NONE'
            i\_application\_id = \`DEMO\_APC\_PCP\`
            i\_event\_handler = event\_handler
            i\_protocol =
              if\_apc\_wsp\_event\_handler\_pcp=>co\_event\_handler\_type ).
        "Server
        DATA(request) =
          client\_detach->get\_context( )->get\_initial\_request( ).
        request->set\_path\_and\_query(
          i\_relative\_uri =
            \`/sap/bc/apc/sap/demo\_apc\_pcp\` &&
            COND #(
               WHEN stateful\_server = abap\_true THEN \`\_stateful\` ) &&
            COND #( WHEN amc = abap\_true THEN \`?amc=x\` ) ).
        client\_detach->connect\_and\_detach( ).
        IF event\_handler->message IS NOT INITIAL.
          out->display(
            |Error during ON\_OPEN: { event\_handler->message }| ).
          LEAVE PROGRAM.
        ENDIF.
        IF show\_attach\_handle IS INITIAL.
          "Attached client
          DATA(client\_attach) =
            cl\_apc\_wsp\_client\_conn\_manager=>attach(
              event\_handler->connection\_attach\_handle ).
          DATA(message\_manager) =
            CAST if\_apc\_wsp\_message\_manager\_pcp(
              client\_attach->get\_message\_manager( ) ).
          DATA(message) = CAST if\_ac\_message\_type\_pcp(
            message\_manager->create\_message( ) ).
          TRY.
              IF amc = abap\_true.
                message->set\_field( i\_name = 'amc' i\_value = 'x' ).
              ENDIF.
              message->set\_field(
                i\_name = 'detached\_client' i\_value = 'x' ).
              message->set\_text( msg ).
            CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_error).
              cl\_demo\_output=>display( pcp\_error->get\_text( ) ).
              LEAVE PROGRAM.
          ENDTRY.
          message\_manager->send( message ).
          client\_attach->close(
            i\_reason = 'Application closed connection!' ).
        ELSE.
          out->display(
            |Attach Handle:\\n\\n{
            event\_handler->connection\_attach\_handle
            }\\n\\nUse as input to DEMO\_APC\_ATTACH\_CLIENT.| ).
        ENDIF.
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description

This example demonstrates how an ABAP program can create a [detached APC client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) for the WebSocket protocol.

-   The local class apc\_handler, which implements the interface IF\_APC\_WSP\_EVENT\_HANDLER\_PCP, is used as the handler class. The method on\_open gets a connection handle for the connection. The other methods are not needed.

-   CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER is used to create a detached client object as an APC server for the current AS ABAP. It is possible to select which of the two ABAP push channels, DEMO\_APC\_PCP or DEMO\_APC\_PCP\_STATEFUL, from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm) is used. The server can also be instructed to send its messages using [ABAP messaging channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm). The method CONNECT\_AND\_DETACH is used to create a detached client for the ABAP push channel.

-   The connection handle obtained by the method on\_open of the handler class can either be displayed or used immediately in the program to create an attached client for the detached client.

-   A displayed connection handle can be used in the program of the executable [attached client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_attached_client_abexa.htm) example.

-   If not, the method ATTACH of the class CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER is used to create an attached client object for the connection handle. Its message manager is then used to create a message in [PCP format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp.htm) and send it.

A breakpoint in the method ON\_MESSAGE of the APC handler class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP can be used to monitor the arrival and processing of the message (it is not possible to respond to messages from the same class here). If the message is sent using [AMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm), the response from the server is received by all associated AMC receivers. The attached client cannot itself wait for the response.


### abenapc_attached_client_abexa.htm

---
title: "APC, AS ABAP as Attached Client"
description: |
  This example demonstrates the AS ABAP as an attached client for a detached client. Source Code REPORT demo_apc_attach_client. CLASS apc_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS apc_demo IMPLEMENTATION. METHOD main. DATA attach_handle TYPE string VALUE ' '. cl_demo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_attached_client_abexa.htm"
abapFile: "abenapc_attached_client_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenapc", "attached", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, AS ABAP as Attached Client

This example demonstrates the AS ABAP as an attached client for a detached client.

Source Code

REPORT demo\_apc\_attach\_client.
CLASS apc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS apc\_demo IMPLEMENTATION.
  METHOD main.
    DATA attach\_handle TYPE string VALUE ' '.
    cl\_demo\_input=>add\_field( CHANGING field  = attach\_handle ).
    DATA(msg) = \`Hello APC!\`.
    cl\_demo\_input=>add\_field( CHANGING field = msg ).
    DATA amc TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = amc ).
    DATA close TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>add\_field( EXPORTING as\_checkbox = 'X'
                              CHANGING field  = close ).
    cl\_demo\_input=>request( ).
    TRY.
        "Attached client
        DATA(client\_attach) =
          cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ).
        DATA(message\_manager) =
          CAST if\_apc\_wsp\_message\_manager\_pcp(
            client\_attach->get\_message\_manager( ) ).
        DATA(message) = CAST if\_ac\_message\_type\_pcp(
          message\_manager->create\_message( ) ).
        TRY.
            IF amc = abap\_true.
              message->set\_field( i\_name = 'amc' i\_value = 'x' ).
            ENDIF.
            message->set\_field(
              i\_name = 'detached\_client' i\_value = 'x' ).
            message->set\_text( msg ).
          CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_error).
            cl\_demo\_output=>display( pcp\_error->get\_text( ) ).
            LEAVE PROGRAM.
        ENDTRY.
        message\_manager->send( message ).
        IF close  = abap\_true.
          client\_attach->close(
            i\_reason = 'Application closed connection!' ).
        ENDIF.
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description

The program expects a connection handle as input, as provided in the output of the executable [detached client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_detached_client_abexa.htm) example. The connection handle is used to create and employ an attached client object precisely as described in the detached client example. The connection handle can be reused indefinitely until the connection is closed using the method CLOSE. If the connection is not closed by mistake, this can be done later in the transaction SMWS.


### abenapc_connect_via_handle_abexa.htm

---
title: "APC, System-Wide Access"
description: |
  This example demonstrates access to any ABAP channel using a connection handle. Source Code REPORT demo_apc_access_connection. CLASS apc_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS apc_demo IMPLEMENTATION. METHOD main. DATA attach_handle TYPE string VALUE ' '. cl_demo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_connect_via_handle_abexa.htm"
abapFile: "abenapc_connect_via_handle_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "catch", "method", "class", "data", "abenapc", "connect", "via", "handle", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexas.htm) → 

APC, System-Wide Access

This example demonstrates access to any ABAP channel using a connection handle.

Source Code

REPORT demo\_apc\_access\_connection.
CLASS apc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS apc\_demo IMPLEMENTATION.
  METHOD main.
    DATA attach\_handle TYPE string VALUE ' '.
    cl\_demo\_input=>add\_field( CHANGING field  = attach\_handle ).
    DATA(msg) = \`Hello APC!\`.
    cl\_demo\_input=>add\_field( CHANGING field = msg ).
    cl\_demo\_input=>request( ).
    TRY.
        DATA(access\_object) =
          cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ).
        DATA(message\_manager) =
          CAST if\_apc\_wsp\_message\_manager(
            access\_object->get\_message\_manager( ) ).
        DATA(message) = CAST if\_apc\_wsp\_message(
          message\_manager->create\_message( ) ).
        message->set\_text( msg ).
        message\_manager->send( message ).
      CATCH cx\_apc\_error INTO DATA(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description

The program expects a valid connection handle for a WebSocket connection as its input, creates an access objects for this handle, and uses it to send a simple text message.

An APC connection from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapc_abexa.htm) publishes its connection handle as follows:

-   Create a WebSocket server without PCP.

-   Open the connection on the Web page.

-   Send the text message "get handle".

This message is identified in the method ON\_MESSAGE of the APC handler class CL\_APC\_WS\_EXT\_DEMO\_APC and the connection handle is fetched and sent. The Web page displays it in a form that can be copied. If the connection handle is passed to the program above while the connection is open, the message sent by the program is received and displayed by the Web page.
