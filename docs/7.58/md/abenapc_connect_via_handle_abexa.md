  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20APC%20-%20System-Wide%20Access%2C%20ABENAPC_CONNECT_VIA_HANDLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

APC - System-Wide Access

This example demonstrates access to any ABAP channel using a connection handle.

Source Code   

\* Public class definition
CLASS cl\_demo\_apc\_access\_cnnctn DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_apc\_access\_cnnctn IMPLEMENTATION.
  METHOD main.
    DATA attach\_handle TYPE string VALUE ' '.
    DATA(msg) = \`Hello APC!\`.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field  = attach\_handle
     )->add\_field( CHANGING field = msg
     )->request( ).
    TRY.
        FINAL(access\_object) =
          cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ).
        FINAL(message\_manager) =
          CAST if\_apc\_wsp\_message\_manager(
            access\_object->get\_message\_manager( ) ).
        FINAL(message) = CAST if\_apc\_wsp\_message(
          message\_manager->create\_message( ) ).
        message->set\_text( msg ).
        message\_manager->send( message ).
      CATCH cx\_apc\_error INTO FINAL(apc\_error).
        out->write( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The class expects a valid connection handle for a WebSocket connection as its input, creates an access objects for this handle, and uses it to send a simple text message.

An APC connection from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc_abexa.htm) publishes its connection handle as follows:

-   Create a WebSocket server without PCP.
-   Open the connection on the Web page.
-   Send the text message get handle.

This message is identified in the method ON\_MESSAGE of the APC handler class CL\_APC\_WS\_EXT\_DEMO\_APC and the connection handle is retrieved and sent. The Web page displays it in a form that can be copied. If the connection handle is passed to the class above while the connection is open, the message sent by the class is received and displayed by the Web page.