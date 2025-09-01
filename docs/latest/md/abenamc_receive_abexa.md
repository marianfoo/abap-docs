  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm) →  [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc.htm) →  [AMC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMC%20-%20Receiving%20Messages%2C%20ABENAMC_RECEIVE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMC - Receiving Messages

This example demonstrates how messages are received using [AMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_receive\_amc DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS message\_receiver DEFINITION.
  PUBLIC SECTION.
    INTERFACES:
      if\_amc\_message\_receiver\_text,
      if\_amc\_message\_receiver\_binary,
      if\_amc\_message\_receiver\_pcp.
    DATA: text\_message TYPE string,
    binary\_message TYPE xstring,
    pcp\_message TYPE REF TO if\_ac\_message\_type\_pcp.
ENDCLASS.
CLASS message\_receiver IMPLEMENTATION.
  METHOD if\_amc\_message\_receiver\_text~receive.
    text\_message = i\_message.
  ENDMETHOD.
  METHOD if\_amc\_message\_receiver\_binary~receive.
    binary\_message = i\_message.
  ENDMETHOD.
  METHOD if\_amc\_message\_receiver\_pcp~receive.
    pcp\_message = i\_message.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_receive\_amc IMPLEMENTATION.
  METHOD main.
    FINAL(in) = cl\_demo\_input=>new( ).
    TRY.
        in->add\_text( \`Session id: \` &&
          cl\_amc\_channel\_manager=>get\_consumer\_session\_id( ) ).
      CATCH cx\_amc\_error INTO FINAL(id\_exc).
        out->write( id\_exc->get\_text( ) ).
    ENDTRY.
    DATA(txt) = \` \`.
    in->add\_field(
      EXPORTING as\_checkbox = 'X'
                text        = 'Wait for text messages'
      CHANGING  field       = txt ).
    DATA(hex) = \` \`.
    in->add\_field(
      EXPORTING as\_checkbox = 'X'
                text        = 'Wait for binary messages'
      CHANGING  field       = hex ).
    DATA(pcp) = \` \`.
    in->add\_field(
      EXPORTING as\_checkbox = 'X'
                text        = 'Wait for PCP message'
      CHANGING  field       = pcp ).
    DATA(time) = 60.
    in->request(
      EXPORTING  text        = 'Waiting time'
      CHANGING  field       = time ).
    FINAL(patt) = |{ txt WIDTH = 1 }{ hex WIDTH = 1 }{ pcp WIDTH = 1 }|.
    FINAL(receiver) = NEW message\_receiver( ).
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_text'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO FINAL(text\_exc).
        out->write( text\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_binary'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO FINAL(binary\_exc).
        out->write( binary\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_pcp'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO FINAL(amc\_exc).
        out->write( amc\_exc->get\_text( ) ).
    ENDTRY.
    CASE patt.
      WHEN \`X  \`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->text\_message   IS NOT INITIAL
             UP TO time SECONDS.
      WHEN \`XX \`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->text\_message   IS NOT INITIAL AND
                   receiver->binary\_message IS NOT INITIAL
             UP TO time SECONDS.
      WHEN \`XXX\`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->text\_message   IS NOT INITIAL AND
                   receiver->binary\_message IS NOT INITIAL AND
                   receiver->pcp\_message    IS BOUND
             UP TO time SECONDS.
      WHEN \` X \`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->binary\_message IS NOT INITIAL
             UP TO time SECONDS.
      WHEN \` XX\`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->binary\_message IS NOT INITIAL AND
                   receiver->pcp\_message    IS BOUND
             UP TO time SECONDS.
      WHEN \`  X\`.
        WAIT FOR MESSAGING CHANNELS
             UNTIL receiver->pcp\_message    IS BOUND
             UP TO time SECONDS.
      WHEN OTHERS.
        RETURN.
    ENDCASE.
    IF txt = 'X' AND receiver->text\_message IS NOT INITIAL.
      out->next\_section( \`Text Message\`
        )->write( receiver->text\_message ).
    ENDIF.
    IF hex = 'X' AND receiver->binary\_message IS NOT INITIAL.
      out->next\_section( \`Binary Message\`
        )->write\_json( receiver->binary\_message ).
    ENDIF.
    IF pcp = 'X' AND receiver->pcp\_message IS BOUND.
      DATA fields TYPE pcp\_fields.
      TRY.
          receiver->pcp\_message->get\_fields(
            CHANGING c\_fields = fields ).
          FINAL(body) = receiver->pcp\_message->get\_text( ).
        CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_exc).
          out->write( pcp\_exc->get\_text( ) ).
      ENDTRY.
      IF fields IS NOT INITIAL OR
         body   IS NOT INITIAL.
        out->next\_section( 'Push Channel Protocol (PCP)'
          )->write( fields
          )->write\_html( body ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The local class message\_receiver implements the interfaces IF\_AMC\_MESSAGE\_RECEIVER\_TEXT, IF\_AMC\_MESSAGE\_RECEIVER\_BINARY, and IF\_AMC\_MESSAGE\_RECEIVER\_PCP. AMC consumers (created using the factory method CREATE\_MESSAGE\_CONSUMER of the system class CL\_AMC\_CHANNEL\_MANAGER) are used to register instances of this local class for the messaging channels /demo\_text, /demo\_binary, and /demo\_pcp of the application DEMO\_AMC from the package SABAPDEMOS.

It is possible to select which messages are waited for. In accordance with this selection, the [WAIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_amc.htm) statement creates a wait state that lasts until all corresponding fields text\_message, binary\_message, and pcp\_message have been filled in the callback routines RECEIVE triggered by messages. The wait time is limited to a definable number of seconds. The transaction SMAMC displays the registered AMC consumer during the wait time.

The required messages can be sent by executing CL\_DEMO\_SEND\_AMC (see the executable example [Sending AMC Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_send_abexa.htm)) from any current AS ABAP user session. The content of the messages is displayed once they have been received. The executable example [APC, WebSocket Communication](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_abexa.htm) shows how the messaging channels are linked with [ABAP push channels (APC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm). The class CL\_DEMO\_RECEIVE\_AMC also receives messages sent from Web pages connected to an APC like this.

The ID of the receiver session is displayed in the input window of the class. If this ID is entered in the executable example for [sending AMC messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_send_abexa.htm), point-to-point communication is used and only this receiver session is sent.