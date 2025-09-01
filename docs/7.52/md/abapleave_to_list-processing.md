  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

LEAVE TO LIST-PROCESSING

[Quick Reference](javascript:call_link\('abapleave_to_list-process_shortref.htm'\))

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Addition:

[... AND RETURN TO SCREEN dynnr](#!ABAP_ONE_ADD@1@)

Effect

This statement can be executed during [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") and [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing. After the current dynpro is processed, this statement interrupts the current [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry"), starts the list processor, and displays the basic list. The basic list consists of any list output of all PBO and PAI modules of the dynpro sequence executed to this point. The statement is ignored in the event blocks for [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") and [list events](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry").

The [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the [list dynpro](javascript:call_link\('abenlist_dynpro_glosry.htm'\) "Glossary Entry") of the list processor replaces the screen shown in the [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") 0. Any modal dialog windows stacked above this are hidden while the list is being displayed. The GUI status set in the dynpro sequence is used. Any list events triggered by user actions in the GUI window of the list dynpro call the event blocks of the current [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry"). Any details lists created there are displayed by the list processor in the GUI window of the basic list (unless the statement [WINDOW](javascript:call_link\('abapwindow.htm'\)) is used).

The user can exit the list processor or list display by selecting the functions Back, Exit, or Cancel in the display for list level 0, or by means of a program that uses the [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)) statement. By default, the interrupted dynpro sequence resumes in both cases with the PBO processing of the dynpro in which the list processor was called.

Addition

... AND RETURN TO SCREEN dynnr

Effect

Using the addition AND RETURN TO SCREEN, another dynpro can be specified in dynnr for continuing PBO processing. dynnr expects a character-like data object that contains the number of a dynpro in the current main program.

Notes

-   If the current dynpro is displayed in a dialog box, the list processor also displays the lists in this window.
    
-   If the value 0 is specified in dynnr, the current dynpro sequence is closed after the list processor is exited.
    

Executable Example

[Calling Lists from Dynpro Processing](javascript:call_link\('abenleave_to_list_proc_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Calling Lists from Within Screen Processing](javascript:call_link\('abenleave_to_list_proc_abexa.htm'\))