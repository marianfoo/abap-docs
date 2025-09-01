  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm) → 

LEAVE LIST-PROCESSING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing_shortref.htm)

Syntax

LEAVE LIST-PROCESSING.

Effect

This statement immediately exits the list processor. The runtime environment continues processing with the [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") event of the dynpro from which the list processor was called using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm) or the dynpro that was set using the addition [AND RETURN TO SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm) of this statement.

If the statement is not executed when the list is displayed by the list processor, it is ignored, except in the event blocks for [reporting events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_event_glosry.htm "Glossary Entry"). Here, the processor branches to the end of the program and continues in accordance with the [process flow](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) for executable programs.

When the list processor is exited, the list buffer of the [dynpro sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") is initialized. New output statements describe a new basic list.

Example

This example shows the recommended procedure for displaying lists during dynpro sequences. A separate dynpro 500 is defined for calling the list processor. The [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of this dynpro does not contain any screen elements and calls a single PBO module call\_list but no [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") modules. The full basic list, including the GUI status, is defined in the PBO module. When the dynpro is exited using LEAVE SCREEN, its processing is stopped and the list processor is started. The list events are handled in the same program. When the list processor is exited, the dynpro sequence of dynpro 500 is ended, because the [next dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennext_dynpro_glosry.htm "Glossary Entry") 0 is specified when the list processor is called.

PROGRAM demo NO STANDARD PAGE HEADING.
...
MODULE call\_list OUTPUT.
  SET PF-STATUS space.
  WRITE 'Basic List'.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  LEAVE SCREEN.
ENDMODULE.
TOP-OF-PAGE.
  WRITE 'Header' COLOR COL\_HEADING.
  ULINE.
TOP-OF-PAGE DURING LINE-SELECTION.
  WRITE sy-lsind COLOR COL\_HEADING.
  ULINE.
AT LINE-SELECTION.
  WRITE 'Secondary List'.
  IF sy-lsind = 20.
    LEAVE LIST-PROCESSING.
  ENDIF.