  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Channels](javascript:call_link\('abenabap_channels.htm'\)) →  [AMC - ABAP Messaging Channels](javascript:call_link\('abenamc.htm'\)) →  [Examples of AMC](javascript:call_link\('abenamc_abexas.htm'\)) → 

AMC, Receiving Messages

This example demonstrates how messages are received using [AMC](javascript:call_link\('abenamc_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_receive\_amc.
CLASS message\_receiver DEFINITION.
  PUBLIC SECTION.
    INTERFACES:
      if\_amc\_message\_receiver\_text,
      if\_amc\_message\_receiver\_binary,
      if\_amc\_message\_receiver\_pcp.
    DATA: text\_message   TYPE string,
          binary\_message TYPE xstring,
          pcp\_message    TYPE REF TO if\_ac\_message\_type\_pcp.
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
CLASS amc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS amc\_demo IMPLEMENTATION.
  METHOD main.
   DATA(in) = cl\_demo\_input=>new( ).
    TRY.
        in->add\_text( \`Session id: \` &&
          cl\_amc\_channel\_manager=>get\_consumer\_session\_id( ) ).
      CATCH cx\_amc\_error INTO DATA(id\_exc).
        cl\_demo\_output=>display( id\_exc->get\_text( ) ).
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
    DATA(patt) = |{ txt WIDTH = 1 }{ hex WIDTH = 1 }{ pcp WIDTH = 1 }|.
    DATA(receiver) = NEW message\_receiver( ).
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_text'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO DATA(text\_exc).
        cl\_demo\_output=>display( text\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_binary'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO DATA(binary\_exc).
        cl\_demo\_output=>display( binary\_exc->get\_text( ) ).
    ENDTRY.
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_pcp'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO DATA(amc\_exc).
        cl\_demo\_output=>display( amc\_exc->get\_text( ) ).
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
    DATA(out) = cl\_demo\_output=>new( ).
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
          DATA(body) = receiver->pcp\_message->get\_text( ).
        CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_exc).
          cl\_demo\_output=>display( pcp\_exc->get\_text( ) ).
      ENDTRY.
      IF fields IS NOT INITIAL OR
         body   IS NOT INITIAL.
        out->next\_section( 'Push Channel Protocol (PCP)'
          )->write( fields
          )->write\_html( body ).
      ENDIF.
    ENDIF.
    out->display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  amc\_demo=>main( ).

Description

The local class message\_receiver implements the interfaces IF\_AMC\_MESSAGE\_RECEIVER\_TEXT, IF\_AMC\_MESSAGE\_RECEIVER\_BINARY, and IF\_AMC\_MESSAGE\_RECEIVER\_PCP. AMC consumers (created using the factory method CREATE\_MESSAGE\_CONSUMER of the system class CL\_AMC\_CHANNEL\_MANAGER) are used to register instances of this local class for the messaging channels /demo\_text, /demo\_binary, and /demo\_pcp of the application DEMO\_AMC from the package SABAPDEMOS.

It is possible to select which messages are waited for. As specified by this selection, the [WAIT](javascript:call_link\('abapwait_amc.htm'\)) statement creates a wait state until all the fields in question text\_message, binary\_message, and pcp\_message have been filled in the callback routines RECEIVE (themselves triggered by messages). The wait time is limited to a definable number of seconds. The transaction SMAMC displays the registered AMC consumer during the wait time.

The required messages can be sebt by the program DEMO\_SEND\_AMC (see the executable example [Sending AMC Messages](javascript:call_link\('abenamc_send_abexa.htm'\))) from any current AS ABAP user session. The content of the messages is displayed once they have been received. The executable example [APC, WebSocket Communication](javascript:call_link\('abenapc_abexa.htm'\)) shows how the messaging channels are associated with [ABAP push channels (APC)](javascript:call_link\('abenapc.htm'\)). The program DEMO\_RECEIVE\_APC also receives messages sent from Web pages associated with an APC like this.

The ID of the receiver session is displayed on the input window on the program. If this ID is entered in the executable example for [sending AMC messages](javascript:call_link\('abenamc_send_abexa.htm'\)), point-to-point communication is used and only this receiver session is sent.