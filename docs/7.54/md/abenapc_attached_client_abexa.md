  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) →  [APC - ABAP Push Channels](javascript:call_link\('abenapc.htm'\)) →  [Examples of APC](javascript:call_link\('abenapc_abexas.htm'\)) → 

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

The program expects a connection handle as input, as provided in the output of the executable [detached client](javascript:call_link\('abenapc_detached_client_abexa.htm'\)) example. The connection handle is used to create and employ an attached client object precisely as described in the detached client example. The connection handle can be reused indefinitely until the connection is closed using the method CLOSE. If the connection is not closed by mistake, this can be done later in the transaction SMWS.