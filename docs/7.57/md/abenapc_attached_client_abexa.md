  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_channels.htm) →  [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) →  [APC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: APC - AS ABAP as Attached Client, ABENAPC_ATTACHED_CLIENT_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

APC - AS ABAP as Attached Client

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
            cl\_demo\_output=>display( pcp\_error->get\_text( ) ).
            LEAVE PROGRAM.
        ENDTRY.
        message\_manager->send( message ).
        IF close  = abap\_true.
          client\_attach->close(
            i\_reason = 'Application closed connection!' ).
        ENDIF.
      CATCH cx\_apc\_error INTO FINAL(apc\_error).
        cl\_demo\_output=>display( apc\_error->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  apc\_demo=>main( ).

Description   

The program expects a connection handle as input, as returned in the output of the executable [detached client](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_detached_client_abexa.htm) example. The connection handle is used to create and use an attached client object exactly as described in the detached client example. The connection handle can be reused indefinitely until the connection is closed using the method CLOSE. If the connection is not closed by mistake, this can be done later in the transaction SMWS.