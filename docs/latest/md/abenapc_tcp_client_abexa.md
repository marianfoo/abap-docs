  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20APC%20-%20AS%20ABAP%20as%20TCP%20Socket%20Client%2C%20ABENAPC_TCP_CLIENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

APC - AS ABAP as TCP Socket Client

This example demonstrates AS ABAP as a TCP socket client.

Source Code   

\* Public class definition
CLASS cl\_demo\_apc\_tcp\_client DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS apc\_handler DEFINITION FINAL .
  PUBLIC SECTION.
    INTERFACES if\_apc\_wsp\_event\_handler.
    DATA message TYPE string.
ENDCLASS.
CLASS apc\_handler IMPLEMENTATION.
  METHOD if\_apc\_wsp\_event\_handler~on\_open.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_message.
    TRY.
        message = i\_message->get\_text( ).
      CATCH cx\_apc\_error INTO FINAL(apc\_error).
        message = apc\_error->get\_text( ).
    ENDTRY.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_close.
    message = 'Connection closed!'.
  ENDMETHOD.
  METHOD if\_apc\_wsp\_event\_handler~on\_error.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_apc\_tcp\_client IMPLEMENTATION.
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
      out->write( 'TCP Server not found!' ).
      LEAVE PROGRAM.
    ENDIF.
    cl\_gui\_frontend\_services=>execute(
    EXPORTING
      application = \`cmd.exe\`
      parameter  =  \`/c \` && tcp\_server &&
                   \` -l \` && ip\_adress && \` -p \` && port ).
    WAIT UP TO 1 SECONDS.
    TRY.
        FINAL(event\_handler) = NEW apc\_handler( ).
        "Client
        FINAL(client) = cl\_apc\_tcp\_client\_manager=>create(
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
        FINAL(message\_manager) = CAST if\_apc\_wsp\_message\_manager(
          client->get\_message\_manager( ) ).
        FINAL(message) = CAST if\_apc\_wsp\_message(
          message\_manager->create\_message( ) ).
        FINAL(binary\_terminator) = CONV xstring( terminator ).
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
          out->write(
            'No handler for APC messages registered!' ).
        ELSEIF sy-subrc = 8.
          out->write(
            'Timeout occurred!' ).
        ELSE.
          out->write(
            |TCP client received:\\n\\n{ event\_handler->message }| ).
        ENDIF.
        client->close(
          i\_reason = 'Application closed connection!' ).
      CATCH cx\_apc\_error INTO FINAL(apc\_error).
        out->write( apc\_error->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates how an ABAP program can create an [APC client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) for the TCP socket protocol. It is structured in exactly the same way as in the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_ws_client_abexa.htm) for the WebSocket client, but with the connection made to a TCP socket server. The current front-end computer is used as the TCP socket server here and the freely available [Ncat](https://nmap.org/ncat/) can be downloaded to this computer.

This class requires the Ncat.exe directory and the address of the current front-end computer, for which suggestions are made. In addition, a terminator character is needed for the TCP framework structure.

When the class is executed, Ncat.exe is started and waits for messages from the APC client. Once a message is sent, this client waits for a message that can be entered in the Ncat window and confirmed using Enter.