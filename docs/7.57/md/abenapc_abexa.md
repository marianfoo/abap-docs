  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: APC - AS ABAP as WebSocket Server, ABENAPC_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

APC - AS ABAP as WebSocket Server

This example demonstrates [ABAP push channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_glosry.htm "Glossary Entry") in AS ABAP as a WebSocket server.

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
        }" target="\_blank" ref ="noopener noreferrer">| &&
        |Open demo web page with standard browser</a><br><br>| &&
      |If your browser does not support WebSocket, | &&
      |copy the URL to another browser.| &&
      |</body>| &&
      |</html>| ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/bc/abap/demo\_apc\`.
    FINAL(location) =
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

-   Is the APC used linked with an [ABAP messaging channel (AMC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc.htm)?
-   Is an APC used together with the [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") or is an APC used without this protocol?
-   Is a stateful service used when the subprotocol PCP is used?

The Web page is provided by an [ICF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenicf.htm) HTTP service whose URL is constructed in the program for the current AS instance. If the standard browser called does not support communication using the WebSocket protocol, the URL must be opened using a suitable browser instead.

The communication partners are:

-   The Web pages generated in the HTTP request handler CL\_HTTP\_EXT\_APC\_DEMO or CL\_HTTP\_EXT\_APC\_PCP\_DEMO. One Web page makes it possible to open a WebSocket object without Push Channel Protocol (PCP) support and the other Web page makes it possible to open a WebSocket object with the support of this protocol. Both Web pages make it possible to send messages using the object and to close the object. These tasks are performed by a JavaScript function implemented in the Web page. If PCP is used, a JavaScript file sap-pcp-websocket.js is included from the Mime repository of the AS ABAP. This file provides the client-side framework for using this protocol. This API is not needed if PCP is not used. If the PCP protocol is used, it is possible to access both a stateless ABAP channel and a stateful ABAP channel.
-   The ABAP push channel DEMO\_APC, DEMO\_APC\_PCP, or DEMO\_APC\_PCP\_STATEFUL from the package SABAPDEMOS in the current AS ABAP, where the latter two support the Push Channel Protocol (PCP) and the latter is stateful. The URL of the service assigned to the push channel is used in the JavaScript function of the associated Web page to open the WebSocket communication of this Web page. The form field amc is passed. The APC handler classes CL\_APC\_WS\_EXT\_DEMO\_APC and CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP implement the methods ON\_START and ON\_MESSAGE of the interface IF\_APC\_WSP\_EXTENSION for communication with and without a connection to an [AMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc.htm). The APC handler class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP\_ST demonstrates a stateful service by simply calling the identically named methods of an object of the class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP. The AMC used here is /demo\_text or /demo\_pcp from the [executable examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_abexas.htm) for AMC. When a message is received, the method ON\_MESSAGE creates a new message with information about the received message and sends it. If PCP is not used, a text message is sent. In the version for PCP, this protocol is used. CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP demonstrates the stateful service by raising a counter whose value stays the same in stateless services, but changes in the stateful service.

If the ABAP push channel is opened using the form field amc=x, communication takes place using AMC. Each Web page connected to the push channel receives every message sent using AMC. In the example, this means that the message sent by ON\_MESSAGE cannot just be received by the Web page that sent a message. Furthermore, the Web pages connected to the push channel receive messages sent, for example, using the program DEMO\_SEND\_AMC from the executable example [Sending AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_send_abexa.htm). Conversely, the program DEMO\_RECEIVE\_AMC receives the messages sent from the Web pages from the executable example [Receiving AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_receive_abexa.htm).

Hint

Before this example can work, the protocols WEBSOCKET and WEBSOCKETS must be listed as active services in the Services function in the transaction SMICM.