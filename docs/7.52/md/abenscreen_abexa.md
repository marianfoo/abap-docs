  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) → 

User Dialogs

This example demonstrates the classic user dialog - selection screen, screen, message, and list.

Source Code

REPORT demo\_hello\_world.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
PARAMETERS input(12) TYPE c DEFAULT 'Hello World!'.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo IMPLEMENTATION.
  METHOD main.
\* Selection Screen
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      LEAVE PROGRAM.
    ENDIF.
\* Dynpro
    CALL SCREEN 100.
\* Message
    MESSAGE input TYPE 'I'.
\* List
    WRITE input.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

First, an input field is created on the standard selection screen using PARAMETERS. Then, CALL SCREEN is used to call a screen that displays the value of the field. The MESSAGE statement sends the text as a message. Finally, it is written to the basic list of the program using a WRITE statement.