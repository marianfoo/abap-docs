  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc_abexas.htm) → 

APC - System-Wide Access

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

An APC connection from the executable example [AS ABAP as WebSocket Server](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapc_abexa.htm) publishes its connection handle as follows:

-   Create a WebSocket server without PCP.
-   Open the connection on the Web page.
-   Send the text message "get handle".

This message is identified in the method ON\_MESSAGE of the APC handler class CL\_APC\_WS\_EXT\_DEMO\_APC and the connection handle is retrieved and sent. The Web page displays it in a form that can be copied. If the connection handle is passed to the program above while the connection is open, the message sent by the program is received and displayed by the Web page.