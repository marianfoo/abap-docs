  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_channels.htm) →  [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc.htm) →  [AMC - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc_abexas.htm) → 

AMC - Suppressing Standalone Messages

This example demonstrates the suppression of [AMC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc_glosry.htm "Glossary Entry") messages to the current ABAP session.

Source Code

REPORT demo\_amc\_suppress\_echo.
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
CLASS amc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS amc\_demo IMPLEMENTATION.
  METHOD main.
    DATA(receiver) = NEW message\_receiver( ).
    TRY.
        cl\_amc\_channel\_manager=>create\_message\_consumer(
            i\_application\_id = 'DEMO\_AMC'
            i\_channel\_id     = '/demo\_text'
            )->start\_message\_delivery( i\_receiver = receiver ).
      CATCH cx\_amc\_error INTO DATA(text\_exc).
        cl\_demo\_output=>display( text\_exc->get\_text( ) ).
    ENDTRY.
    "Check 'Send text message' and toggle 'Suppress echo'
    SUBMIT demo\_send\_amc AND RETURN.
    WAIT FOR MESSAGING CHANNELS
      UNTIL receiver->text\_message IS NOT INITIAL
      UP TO 1 SECONDS.
    IF receiver->text\_message IS NOT INITIAL.
      cl\_demo\_output=>display( receiver->text\_message ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  amc\_demo=>main( ).

Description

Like in the executable example for [Receiving Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc_receive_abexa.htm), a receiver object for the messaging channel /demo\_text of the application DEMO\_AMC from the package SABAPDEMOS is registered. In the example shown here, the text message can be sent by calling the program DEMO\_SEND\_AMC from the example [Sending Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamc_send_abexa.htm) within the same ABAP session.

The message is only received if the initial value is transferred during sending to the parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER. If the Suppress echo checkbox is selected, on the other hand, the message is suppressed.