  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) →  [APC - ABAP Push Channels](javascript:call_link\('abenapc.htm'\)) →  [Examples of APC](javascript:call_link\('abenapc_abexas.htm'\)) → 

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

This example demonstrates how an ABAP program can create a [detached APC client](javascript:call_link\('abenapc.htm'\)) for the WebSocket protocol.

-   The local class apc\_handler, which implements the interface IF\_APC\_WSP\_EVENT\_HANDLER\_PCP, is used as the handler class. The method on\_open gets a connection handle for the connection. The other methods are not needed.

-   CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER is used to create a detached client object as an APC server for the current AS ABAP. It is possible to select which of the two ABAP push channels, DEMO\_APC\_PCP or DEMO\_APC\_PCP\_STATEFUL, from the executable example [AS ABAP as WebSocket Server](javascript:call_link\('abenapc_abexa.htm'\)) is used. The server can also be instructed to send its messages using [ABAP messaging channels](javascript:call_link\('abenamc.htm'\)). The method CONNECT\_AND\_DETACH is used to create a detached client for the ABAP push channel.

-   The connection handle obtained by the method on\_open of the handler class can either be displayed or used immediately in the program to create an attached client for the detached client.

-   A displayed connection handle can be used in the program of the executable [attached client](javascript:call_link\('abenapc_attached_client_abexa.htm'\)) example.

-   If not, the method ATTACH of the class CL\_APC\_WSP\_CLIENT\_CONN\_MANAGER is used to create an attached client object for the connection handle. Its message manager is then used to create a message in [PCP format](javascript:call_link\('abenpcp.htm'\)) and send it.

A breakpoint in the method ON\_MESSAGE of the APC handler class CL\_APC\_WSP\_EXT\_DEMO\_APC\_PCP can be used to monitor the arrival and processing of the message (it is not possible to respond to messages from the same class here). If the message is sent using [AMC](javascript:call_link\('abenamc.htm'\)), the response from the server is received by all associated AMC receivers. The attached client cannot itself wait for the response.