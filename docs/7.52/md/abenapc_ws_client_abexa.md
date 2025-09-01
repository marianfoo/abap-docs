  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) →  [APC - ABAP Push Channels](javascript:call_link\('abenapc.htm'\)) →  [Examples of APC](javascript:call_link\('abenapc_abexas.htm'\)) → 

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
              'Timeout occured!' ).
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

This example demonstrates how an ABAP program can create an [APC client](javascript:call_link\('abenapc.htm'\)) for the WebSocket protocol.

-   The local class apc\_handler, which implements the interface IF\_APC\_WSP\_EVENT\_HANDLER\_PCP, is used as the handler class. When a message is received, the method on\_message sets its message attribute to the message text.

-   CL\_APC\_WSP\_CLIENT\_MANAGER is used to create a client object for the current AS ABAP as an APC server and opens a connection to one of its ABAP push channels. It is possible to select which of the two ABAP push channels, DEMO\_APC\_PCP or DEMO\_APC\_PCP\_STATEFUL, from the executable example [AS ABAP as WebSocket Server](javascript:call_link\('abenapc_abexa.htm'\)) is used. The server can also be instructed to send its messages using [ABAP messaging channels](javascript:call_link\('abenamc.htm'\)).

-   The message manager of the client object is used to create a message in [PCP format](javascript:call_link\('abenpcp.htm'\)) and send it multiple times.

-   The statement [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) is then used to switch the program to a wait state so that messages sent back from the server can be handled. Here, the logical expression checks the attribute message of the handler class apc\_handler. A received text is displayed.

-   Finally, the connection is closed explicitly.

It is possible to select how many messages are sent and how often the wait state occurs.

-   If communication takes place with the stateful server, the counter level of the server is raised, indicating that multiple messages are being sent and received.

-   If the server sends its messages using ABAP messaging channels, other AMC receivers in the same messaging channel can also see the messages of the server. For example, the Web browser from the executable example [AS ABAP as WebSocket Server](javascript:call_link\('abenapc_abexa.htm'\)) can receive these messages. In the reverse direction, the APC client can then also receive those messages sent by the APC server as a response to messages from the Web browser, if they occur in one of the programmed wait periods.