  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20APC%20-%20AS%20ABAP%20as%20Attached%20Client%2C%20ABENAPC_ATTACHED_CLIENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

APC - AS ABAP as Attached Client

This example demonstrates the AS ABAP as an attached client for a detached client.

Source Code   

\* Public class definition
CLASS cl\_demo\_apc\_attach\_client DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_apc\_attach\_client IMPLEMENTATION.
  METHOD main.
    DATA attach\_handle TYPE string VALUE ' '.
    DATA(msg) = \`Hello APC!\`.
    DATA amc TYPE abap\_bool VALUE ' '.
    DATA close TYPE abap\_bool VALUE ' '.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = attach\_handle
     )->add\_field( CHANGING field = msg
     )->add\_field( EXPORTING as\_checkbox = 'X'
                   CHANGING field  = amc
     )->add\_field( EXPORTING as\_checkbox = 'X'
                   CHANGING field  = close
      )->request( ).
    TRY.
        "Attached client
        FINAL(client\_attach) =
          cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ).
        FINAL(message\_manager) =
          CAST if\_apc\_wsp\_message\_manager\_pcp(
            client\_attach->get\_message\_manager( ) ).
        FINAL(message) = CAST if\_ac\_message\_type\_pcp(
          message\_manager->create\_message( ) ).
        TRY.
            IF amc = abap\_true.
              message->set\_field( i\_name = 'amc' i\_value = 'x' ).
            ENDIF.
            message->set\_field(
              i\_name = 'detached\_client' i\_value = 'x' ).
            message->set\_text( msg ).
          CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_error).
            out->write( pcp\_error->get\_text( ) ).
            LEAVE PROGRAM.
        ENDTRY.
        message\_manager->send( message ).
        IF close  = abap\_true.
          client\_attach->close(
            i\_reason = 'Application closed connection!' ).
        ENDIF.
      CATCH cx\_apc\_error INTO FINAL(apc\_error).
        out->write( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The class expects a connection handle as input, as returned in the output of the executable [detached client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_detached_client_abexa.htm) example. The connection handle is used to create and use an attached client object exactly as described in the detached client example. The connection handle can be reused indefinitely until the connection is closed using the method CLOSE. If the connection is not closed by mistake, this can be done later in the transaction SMWS.