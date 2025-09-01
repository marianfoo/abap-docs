  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_channels.htm) →  [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc.htm) →  [AMC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMC%20-%20Sending%20Messages%2C%20ABENAMC_SEND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMC - Sending Messages

This example demonstrates how messages are sent using [AMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_send\_amc DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_send\_amc IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF struct,
        name  TYPE string,
        value TYPE string,
      END OF struct,
      fields TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
    DATA: text TYPE abap\_bool,
          hex  TYPE abap\_bool,
          pcp  TYPE abap\_bool.
    DATA text\_message   TYPE string VALUE \`I am a text message\`.
    DATA binary\_message TYPE string VALUE \`I am a binary message\`.
    DATA pcp\_body       TYPE string VALUE \`I am a PCP body\`.
    DATA field1         TYPE string VALUE \`Field1\`.
    DATA value1         TYPE string VALUE \`Value1\`.
    DATA field2         TYPE string VALUE \`Field2\`.
    DATA value2         TYPE string VALUE \`Value2\`.
    DATA no\_echo        TYPE abap\_bool.
    DATA session\_id     TYPE amc\_consumer\_session\_id.
    cl\_demo\_input=>new(
      )->add\_field( EXPORTING text = 'Text message'
                    CHANGING  field = text\_message
      )->add\_field( EXPORTING text = 'Send text message'
                              as\_checkbox = 'X'
                    CHANGING  field = text
      )->add\_line(
      )->add\_field( EXPORTING text = 'Binary message'
                    CHANGING  field = binary\_message
      )->add\_field( EXPORTING text = 'Send binary message'
                              as\_checkbox = 'X'
                    CHANGING  field = hex
      )->add\_line(
      )->add\_field( EXPORTING text = 'Field1' CHANGING field = value1
      )->add\_field( EXPORTING text = 'Field2' CHANGING field = value2
      )->add\_field( EXPORTING text = 'PCP body'
                    CHANGING  field = pcp\_body
      )->add\_field( EXPORTING text = 'Send PCP message'
                              as\_checkbox = 'X'
                    CHANGING  field = pcp
      )->add\_line(
      )->add\_field( EXPORTING text = 'Suppress echo'
                              as\_checkbox = 'X'
                    CHANGING  field = no\_echo
      )->add\_line(
      )->add\_field( EXPORTING text  = 'Consumer session id'
                    CHANGING  field = session\_id
      )->request( ).
    IF text IS NOT INITIAL.
      TRY.
          IF session\_id IS INITIAL.
            CAST if\_amc\_message\_producer\_text(
                   cl\_amc\_channel\_manager=>create\_message\_producer(
                     i\_application\_id = 'DEMO\_AMC'
                     i\_channel\_id     = '/demo\_text'
                     i\_suppress\_echo  = no\_echo )
              )->send( i\_message = text\_message ).
          ELSE.
            CAST if\_amc\_message\_producer\_text(
                 cl\_amc\_channel\_manager=>create\_message\_producer\_by\_id(
                   i\_consumer\_session\_id = session\_id
                   i\_communication\_type  =
                       cl\_amc\_channel\_manager=>co\_comm\_type\_synchronous
                   i\_application\_id      = 'DEMO\_AMC'
                   i\_channel\_id          = '/demo\_text' )
              )->send( i\_message = text\_message ).
          ENDIF.
        CATCH cx\_amc\_error INTO FINAL(text\_exc).
          out->write( text\_exc->get\_text( ) ).
      ENDTRY.
    ENDIF.
    IF hex IS NOT INITIAL.
      FINAL(json\_writer) = cl\_sxml\_string\_writer=>create(
                          type = if\_sxml=>co\_xt\_json ).
      CALL TRANSFORMATION id SOURCE message = binary\_message
                             RESULT XML json\_writer.
      FINAL(json) = json\_writer->get\_output( ).
      TRY.
          IF session\_id IS INITIAL.
            CAST if\_amc\_message\_producer\_binary(
                   cl\_amc\_channel\_manager=>create\_message\_producer(
                     i\_application\_id = 'DEMO\_AMC'
                     i\_channel\_id     = '/demo\_binary'
                     i\_suppress\_echo  = no\_echo )
              )->send( i\_message = json ).
          ELSE.
            CAST if\_amc\_message\_producer\_binary(
                 cl\_amc\_channel\_manager=>create\_message\_producer\_by\_id(
                   i\_consumer\_session\_id = session\_id
                   i\_communication\_type  =
                       cl\_amc\_channel\_manager=>co\_comm\_type\_synchronous
                   i\_application\_id = 'DEMO\_AMC'
                   i\_channel\_id     = '/demo\_binary' )
              )->send( i\_message = json ).
          ENDIF.
        CATCH cx\_amc\_error INTO FINAL(binary\_exc).
          out->write( binary\_exc->get\_text( ) ).
      ENDTRY.
    ENDIF.
    IF pcp IS NOT INITIAL.
      FINAL(fields) = VALUE fields( ( name = 'Field1' value = value1 )
                                   ( name = 'Field2' value = value2 ) ).
      FINAL(body)  = |<b>{ pcp\_body }</b>|.
      TRY.
          FINAL(pcp\_message) = cl\_ac\_message\_type\_pcp=>create( ).
          pcp\_message->set\_field( i\_name  = fields\[ 1 \]-name
                             i\_value = fields\[ 1 \]-value ).
          pcp\_message->set\_field( i\_name  = fields\[ 2 \]-name
                             i\_value = fields\[ 2 \]-value ).
          pcp\_message->set\_text( body ).
          IF session\_id IS INITIAL.
            CAST if\_amc\_message\_producer\_pcp(
                  cl\_amc\_channel\_manager=>create\_message\_producer(
                    i\_application\_id = 'DEMO\_AMC'
                    i\_channel\_id     = '/demo\_pcp'
                    i\_suppress\_echo  = no\_echo )
              )->send( i\_message = pcp\_message ).
          ELSE.
            CAST if\_amc\_message\_producer\_pcp(
                 cl\_amc\_channel\_manager=>create\_message\_producer\_by\_id(
                   i\_consumer\_session\_id = session\_id
                   i\_communication\_type  =
                       cl\_amc\_channel\_manager=>co\_comm\_type\_synchronous
                   i\_application\_id = 'DEMO\_AMC'
                   i\_channel\_id     = '/demo\_pcp' )
              )->send( i\_message = pcp\_message ).
          ENDIF.
        CATCH cx\_amc\_error INTO FINAL(amc\_exc).
          out->write( amc\_exc->get\_text( ) ).
        CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_exc).
          out->write( pcp\_exc->get\_text( ) ).
      ENDTRY.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The factory method CREATE\_MESSAGE\_PRODUCER of the system class CL\_AMC\_CHANNEL\_MANAGER is used to create sender objects for the messaging channels /demo\_text, /demo\_binary, and /demo\_pcp of the application DEMO\_AMC from the package SABAPDEMOS and to perform a casting for these objects to the appropriate interfaces.

X can be passed to the optional parameter I\_SUPPRESS\_ECHO to define that the messages sent using a sender object are not sent to the current ABAP session. The effect of this is shown in the executable example [Suppressing Standalone Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_suppress_echo_abexa.htm).

The SEND methods of the interfaces are used to send a text string, [JSON data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) as a byte string and two name/value pairs, as well as a body in SAP's own [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") using the messaging channels. The data of the PCP message is passed to an object of the class CL\_AC\_MESSAGE\_TYPE\_PCP and serialized there.

The executable example [Receiving AMC Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_receive_abexa.htm) demonstrates how these messages can be received in ABAP programs. The executable example [APC, WebSocket Communication](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc_abexa.htm) shows how the messaging channels are linked with [ABAP Push Channels (APC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapc.htm) and that the messages sent using CL\_DEMO\_SEND\_AMC are received by Web pages connected to an APC like this.

The ID of a receiver session can be entered in the input window of the class, as shown in the executable example for [receiving AMC messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamc_receive_abexa.htm). If an ID of this type is entered, the class attempts to send the messages synchronously to this receiver session only.