  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: User Dialogs, ABENSCREEN_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

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