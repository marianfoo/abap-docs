  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

User Dialogs

This example demonstrates the classic user dialogs selection screen, dynpro, message, and list.

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

First, an input field is created on the standard selection screen using PARAMETERS. Then, CALL SCREEN is used to call a dynpro that displays the value of the field. The statement MESSAGE sends the text as a message. Finally, it is written to the basic list of the program using WRITE.