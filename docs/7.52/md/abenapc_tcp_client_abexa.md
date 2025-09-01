  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_channels.htm) →  [APC - ABAP Push Channels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc.htm) →  [Examples of APC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_abexas.htm) → 

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
         |For the TCP server, download the freely available NCAT.EXE|
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
        DATA(binary\_msg) = cl\_abap\_codepage=>convert\_to( msg ).
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
            'Timeout occured!' ).
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

This example demonstrates how an ABAP program can create an [APC client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc.htm) for the TCP socket protocol. It is structured in exactly the same way as in the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapc_ws_client_abexa.htm) for the WebSocket client, but with the connection being made to a TCP socket. The current front-end computer is used as the TCP socket here and the available [Ncat](https://nmap.org/ncat/) can be downloaded to this computer.

This program requires the Ncat.exe directory and the address of the current front-end computer (proposals are made for this information). In addition, a terminator character is needed for the TCP framework structure.

When the program is executed, Ncat.exe is started and waits for messages from the APC client. Once a message is sent, this client waits for a message entered in the Ncat window and confirmed using Enter.