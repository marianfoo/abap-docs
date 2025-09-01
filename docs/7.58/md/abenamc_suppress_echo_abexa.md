  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_channels.htm) →  [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc.htm) →  [AMC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMC%20-%20Suppressing%20Standalone%20Messages%2C%20ABENAMC_SUPPRESS_ECHO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

AMC - Suppressing Standalone Messages

This example demonstrates the suppression of [AMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_glosry.htm "Glossary Entry") messages to the current ABAP session.

Source Code   

\* Public class definition
CLASS cl\_demo\_amc\_suppress\_echo DEFINITION
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
      if\_amc\_message\_receiver\_text.
    DATA text\_message TYPE string.
ENDCLASS.
CLASS message\_receiver IMPLEMENTATION.
  METHOD if\_amc\_message\_receiver\_text~receive.
    text\_message = i\_message.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_amc\_suppress\_echo IMPLEMENTATION.
  METHOD main.
    FINAL(receiver) = NEW message\_receiver( ).
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_text'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO FINAL(text\_exc).
        out->write( text\_exc->get\_text( ) ).
    ENDTRY.
    "Check 'Send text message' and toggle 'Suppress echo'
    SUBMIT demo\_send\_amc AND RETURN.
    WAIT FOR MESSAGING CHANNELS
      UNTIL receiver->text\_message IS NOT INITIAL
      UP TO 1 SECONDS.
    IF receiver->text\_message IS NOT INITIAL.
      out->write( receiver->text\_message ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Like in the executable example for [Receiving Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_receive_abexa.htm), a receiver object for the messaging channel /demo\_text of the application DEMO\_AMC from the package SABAPDEMOS is registered. In the example shown here, the text message can be sent by calling the class CL\_DEMO\_SEND\_AMC from the example [Sending Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_send_abexa.htm) within the same ABAP session.

The message is only received if the initial value is transferred during sending to the parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER. If the Suppress echo checkbox is selected, on the other hand, the message is suppressed.