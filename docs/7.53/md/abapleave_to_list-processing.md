---
title: "LEAVE TO LIST-PROCESSING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-process_shortref.htm) Syntax LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN dynnr. Addition: ... AND RETURN TO SCREEN dynnr(#!ABAP_ONE_ADD@1@) Effect This statement can be executed during PBO(ht
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm"
abapFile: "abapleave_to_list-processing.htm"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "abapleave", "list", "processing"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm) → 

LEAVE TO LIST-PROCESSING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-process_shortref.htm)

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Addition:

[... AND RETURN TO SCREEN dynnr](#!ABAP_ONE_ADD@1@)

Effect

This statement can be executed during [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") and [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing. After the current dynpro is processed, this statement interrupts the current [dynpro sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_sequence_glosry.htm "Glossary Entry"), starts the list processor, and displays the basic list. The basic list consists of any list output of all PBO and PAI modules of the dynpro sequence executed to this point. The statement is ignored in the event blocks for [reporting events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_event_glosry.htm "Glossary Entry") and [list events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_event_glosry.htm "Glossary Entry").

The [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the [list dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_dynpro_glosry.htm "Glossary Entry") of the list processor replaces the screen shown in the [popup level](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpop-up_level_glosry.htm "Glossary Entry") 0. Any modal dialog windows stacked above this are hidden while the list is being displayed. The GUI status set in the dynpro sequence is used. Any list events triggered by user actions in the GUI window of the list dynpro call the event blocks of the current [main program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_glosry.htm "Glossary Entry"). Any details lists created there are displayed by the list processor in the GUI window of the basic list (unless the statement [WINDOW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm) is used).

The user can exit the list processor or list display by selecting the functions Back, Exit, or Cancel in the display for list level 0, or by means of a program that uses the [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing.htm) statement. By default, the interrupted dynpro sequence resumes in both cases with the PBO processing of the dynpro in which the list processor was called.

Addition

... AND RETURN TO SCREEN dynnr

Effect

Using the addition AND RETURN TO SCREEN, another dynpro can be specified in dynnr for continuing PBO processing. dynnr expects a character-like data object that contains the number of a dynpro in the current main program.

Notes

-   If the current dynpro is displayed in a dialog box, the list processor also displays the lists in this window.
    
-   If the value 0 is specified in dynnr, the current dynpro sequence is closed after the list processor is exited.
    

Executable Example

[Calling Lists from Dynpro Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm)

Continue
![Example](exa.gif "Example") [Calling Lists from Dynpro Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm)