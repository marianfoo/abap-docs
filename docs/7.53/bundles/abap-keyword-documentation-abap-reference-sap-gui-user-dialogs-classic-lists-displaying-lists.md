# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Classic Lists / Displaying Lists

Included pages: 15



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenlists_displayed.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm)
- [abapleave_to_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)
- [abenleave_to_list_proc_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm)
- [abapleave_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing.htm)
- [abapwindow.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm)
- [abenlist_window_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_window_abexa.htm)
- [abapset_pf-status_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_list.htm)
- [abapset_titlebar_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_titlebar_list.htm)
- [abapset_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_cursor_list.htm)
- [abapget_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm)
- [abapget_cursor_list_field.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_field.htm)
- [abapget_cursor_list_line.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_line.htm)

**Bundle Contains**: 12 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.233Z

---

### abenlists_displayed.htm

> **📖 Official SAP Documentation**: [abenlists_displayed.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Displaying Lists

A basic list is either displayed automatically or in a program-driven way. A details list is always displayed automatically:

-   In [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), the basic list created up to that point is displayed automatically after the event [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)). At the start of the program, the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") is set automatically, which can be replaced by another GUI status in the program using [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\)).
    
-   In any program that can contain dynpros as components, a display of the current basic list can be called during processing of a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") (program-driven).
    
-   In any program that can contain dynpros as components, the details list created in a processing block is displayed automatically when the processing block is terminated after [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)), [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)), or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)). If no details list is created, the previous list level is displayed.
    

The following sections cover the statements

-   [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))
    
-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))
    

used to call the basic list during a dynpro sequence, the statements

-   [WINDOW](javascript:call_link\('abapwindow.htm'\))
    
-   [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\))
    
-   [SET TITLEBAR](javascript:call_link\('abapset_titlebar_list.htm'\))
    
-   [SET CURSOR](javascript:call_link\('abapset_cursor_list.htm'\))
    

used to determine properties of the called list, and the statement

-   [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\))
    

used to read a displayed list.

Continue
[LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))
[LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))
[WINDOW](javascript:call_link\('abapwindow.htm'\))
[SET PF-STATUS - List](javascript:call_link\('abapset_pf-status_list.htm'\))
[SET TITLEBAR - List](javascript:call_link\('abapset_titlebar_list.htm'\))
[SET CURSOR - List](javascript:call_link\('abapset_cursor_list.htm'\))
[GET CURSOR - List](javascript:call_link\('abapget_cursor_list.htm'\))



**📖 Source**: [abenlists_displayed.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm)

### abapleave_to_list-processing.htm

> **📖 Official SAP Documentation**: [abapleave_to_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

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
![Example](exa.gif "Example") [Calling Lists from Dynpro Processing](javascript:call_link\('abenleave_to_list_proc_abexa.htm'\))



**📖 Source**: [abapleave_to_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)

### abenleave_to_list_proc_abexa.htm

> **📖 Official SAP Documentation**: [abenleave_to_list_proc_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) →  [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) → 

Calling Lists from Dynpro Processing

This example shows how to switch from dynpro processing to list processing.

Source Code

REPORT demo\_leave\_to\_list\_processing .
TABLES demo\_conn.
DATA: wa\_spfli TYPE spfli,
      flightdate TYPE sflight-fldate.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100.
  CALL SCREEN 500.
  SET SCREEN 100.
ENDMODULE.
MODULE call\_list\_500 OUTPUT.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  SET PF-STATUS space.
  SUPPRESS DIALOG.
  SELECT  carrid, connid, cityfrom, cityto
    FROM  spfli
    WHERE carrid = @demo\_conn-carrid
    INTO  CORRESPONDING FIELDS OF @wa\_spfli.
    WRITE: / wa\_spfli-carrid, wa\_spfli-connid,
             wa\_spfli-cityfrom, wa\_spfli-cityto.
    HIDE: wa\_spfli-carrid, wa\_spfli-connid.
  ENDSELECT.
  CLEAR wa\_spfli-carrid.
ENDMODULE.
TOP-OF-PAGE.
  WRITE text-001 COLOR COL\_HEADING.
  ULINE.
TOP-OF-PAGE DURING LINE-SELECTION.
  WRITE sy-lisel COLOR COL\_HEADING.
  ULINE.
AT LINE-SELECTION.
  CHECK NOT wa\_spfli-carrid IS INITIAL.
  SELECT  fldate
    FROM  sflight
    WHERE carrid = @wa\_spfli-carrid AND
          connid = @wa\_spfli-connid
    INTO  @flightdate.
    WRITE / flightdate.
  ENDSELECT.
  CLEAR wa\_spfli-carrid.

Description

This example switches to list processing while processing dynpro 100. The screen layout of dynpro 100 has a single input field, the component CARRID of the structure SDYN\_CONN from ABAP Dictionary. The flow logic of dynpro 100 is:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In the PAI module user\_command\_0100, CALL SCREEN is used to call dynpro 500. Dynpro 500 encapsulates a basic list. It has the following flow logic:

PROCESS BEFORE OUTPUT.
  MODULE call\_list\_500.
PROCESS AFTER INPUT.

The module call\_list\_500 defines the basic list and switches to list processing. After returning from the list display, the system branches to the next dynpro 0, which means that dynpro 500 represents a dynpro sequence with only one dynpro. When list processing is complete, the system goes back to a point after the call point in user\_command\_0100.

If the user selects a line on the basic list, a details list appears. This is done using the event block AT LINE-SELECTION. The program also contains event blocks for TOP-OF-PAGE and TOP-OF-PAGE DURING LINE-SELECTION, which define page headers for both the basic list and details list.

Since there is only one list system in this program, there is no need for case distinctions within the list events.



**📖 Source**: [abenleave_to_list_proc_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm)

### abapleave_to_list-processing.htm

> **📖 Official SAP Documentation**: [abapleave_to_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

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
![Example](exa.gif "Example") [Calling Lists from Dynpro Processing](javascript:call_link\('abenleave_to_list_proc_abexa.htm'\))



**📖 Source**: [abapleave_to_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)

### abapleave_list-processing.htm

> **📖 Official SAP Documentation**: [abapleave_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

LEAVE LIST-PROCESSING

[Quick Reference](javascript:call_link\('abapleave_list-processing_shortref.htm'\))

Syntax

LEAVE LIST-PROCESSING.

Effect

This statement immediately exits the list processor. The runtime environment continues processing with the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") event of the dynpro from which the list processor was called using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) or the dynpro that was set using the addition [AND RETURN TO SCREEN](javascript:call_link\('abapleave_to_list-processing.htm'\)) of this statement.

If the statement is not executed when the list is displayed by the list processor, it is ignored, except in the event blocks for [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry"). Here, the processor branches to the end of the program and continues in accordance with the [process flow](javascript:call_link\('abenreporting_process.htm'\)) for executable programs.

When the list processor is exited, the list buffer of the [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") is initialized. New output statements describe a new basic list.

Example

This example shows the recommended procedure for displaying lists during dynpro sequences. A separate dynpro 500 is defined for calling the list processor. The [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of this dynpro does not contain any screen elements and calls a single PBO module call\_list but no [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") modules. The full basic list, including the GUI status, is defined in the PBO module. When the dynpro is exited using LEAVE SCREEN, its processing is stopped and the list processor is started. The list events are handled in the same program. When the list processor is exited, the dynpro sequence of dynpro 500 is ended, because the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") 0 is specified when the list processor is called.

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



**📖 Source**: [abapleave_list-processing.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing.htm)

### abapwindow.htm

> **📖 Official SAP Documentation**: [abapwindow.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

WINDOW

[Quick Reference](javascript:call_link\('abapwindow_shortref.htm'\))

Syntax

WINDOW STARTING AT col1 lin1
       *\[*ENDING  AT col2 lin2*\]*.

Effect

This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an interactive list event. If there are multiple WINDOW statements in an event block, the last one is valid.

The upper left corner is determined for the column and the row by the values in col1 and lin1. The values are based on the GUI window of the basic list. The lower right corner is set automatically. The maximum lower right corner can either be specified in col2 and lin2 or is specified using the lower right corner of the GUI window where the list event took place.

col1, lin1, col2, and lin2 expect data objects of the type i. The values of all data objects should lie within the GUI window of the basic list and the values of col1 and lin1 should be less than those of col2 and lin2. If not, the behavior is undefined.

If no GUI status is set using [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\)) and an event block is defined using [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)), the system automatically uses a [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") suitable for the dialog box without a [menu bar](javascript:call_link\('abenmenu_bar_glosry.htm'\) "Glossary Entry") and [system toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry"). This includes pushbuttons for the predefined function codes "PICK" (only for AT LINE-SELECTION), "PRI", "%SC", "%SC+", and "RW" in the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry").

Note

If a GUI status is set using SET PF-STATUS, this should be created in [Menu Painter](javascript:call_link\('abenmenu_painter_glosry.htm'\) "Glossary Entry") as a dialog box status; the list template should also be included.

Example

Displays the details of an airline in a dialog box after a row is selected.

DATA: scarr\_wa TYPE scarr,
      col      TYPE i,
      lin      TYPE i.
START-OF-SELECTION.
   SELECT carrid
          FROM scarr
          INTO scarr\_wa-carrid.
    WRITE / scarr\_wa-carrid.
    HIDE  scarr\_wa-carrid.
  ENDSELECT.
  CLEAR scarr\_wa-carrid.
AT LINE-SELECTION.
  col = sy-cucol + 40.
  lin = sy-curow + 2.
  WINDOW STARTING AT sy-cucol sy-curow
         ENDING   AT col lin.
  IF sy-lsind = 1 AND
     scarr\_wa-carrid IS NOT INITIAL.
    SELECT SINGLE carrname, url
           FROM scarr
           WHERE carrid = @scarr\_wa-carrid
           INTO (@scarr\_wa-carrname, @scarr\_wa-url).
    WRITE: scarr\_wa-carrname, / scarr\_wa-url.
  ENDIF.

Continue
![Example](exa.gif "Example") [Lists, Dialog Boxes](javascript:call_link\('abenlist_window_abexa.htm'\))



**📖 Source**: [abapwindow.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm)

### abenlist_window_abexa.htm

> **📖 Official SAP Documentation**: [abenlist_window_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_window_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) →  [WINDOW](javascript:call_link\('abapwindow.htm'\)) → 

Lists, Dialog Boxes

The example shows how to display a details list in the dialog box.

Source Code

REPORT demo\_list\_window NO STANDARD PAGE HEADING.
START-OF-SELECTION.
  SET PF-STATUS 'BASIC'.
  WRITE 'Select line for a demonstration of windows'.
AT USER-COMMAND.
  CASE sy-ucomm.
    WHEN 'SELE'.
      IF sy-lsind = 1.
        SET PF-STATUS 'DIALOG'.
        SET TITLEBAR 'WI1'.
        WINDOW STARTING AT 5 3 ENDING AT 40 10.
        WRITE 'Select line for a second window'.
      ELSEIF sy-lsind = 2.
        SET PF-STATUS 'DIALOG' EXCLUDING 'SELE'.
        SET TITLEBAR 'WI2'.
        WINDOW STARTING AT 45 10 ENDING AT 60 12.
        WRITE 'Last window'.
      ENDIF.
  ENDCASE.

Description

This program sets status BASIC for the basic list. In the status BASIC, the default function code PICK for the key F2 is replaced by the user-defined function code SELE (text SELECT) and SELE is inserted in the application toolbar.

For this reason, SELECT, F2, and double-clicking with the mouse all raise the event AT USER-COMMAND. In the corresponding processing block, list levels 1 and 2 have the status DIALOG and appear as a dialog box. Like in the status BASIC, the default function code PICK is replaced in the status DIALOG by the function code SELE which is inserted in the application toolbar after Cancel.

Titles WI1 and WI2 are defined for the dialog boxes. In the second dialog box, the function code SELE has been disabled using the addition EXCLUDING in the statement SET PF-STATUS.

The system displays horizontal scroll bars in the dialog boxes since the list width of the dialog boxes is not adjusted and therefore corresponds to the standard width of the basic list.



**📖 Source**: [abenlist_window_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_window_abexa.htm)

### abapwindow.htm

> **📖 Official SAP Documentation**: [abapwindow.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

WINDOW

[Quick Reference](javascript:call_link\('abapwindow_shortref.htm'\))

Syntax

WINDOW STARTING AT col1 lin1
       *\[*ENDING  AT col2 lin2*\]*.

Effect

This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an interactive list event. If there are multiple WINDOW statements in an event block, the last one is valid.

The upper left corner is determined for the column and the row by the values in col1 and lin1. The values are based on the GUI window of the basic list. The lower right corner is set automatically. The maximum lower right corner can either be specified in col2 and lin2 or is specified using the lower right corner of the GUI window where the list event took place.

col1, lin1, col2, and lin2 expect data objects of the type i. The values of all data objects should lie within the GUI window of the basic list and the values of col1 and lin1 should be less than those of col2 and lin2. If not, the behavior is undefined.

If no GUI status is set using [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\)) and an event block is defined using [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)), the system automatically uses a [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") suitable for the dialog box without a [menu bar](javascript:call_link\('abenmenu_bar_glosry.htm'\) "Glossary Entry") and [system toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry"). This includes pushbuttons for the predefined function codes "PICK" (only for AT LINE-SELECTION), "PRI", "%SC", "%SC+", and "RW" in the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry").

Note

If a GUI status is set using SET PF-STATUS, this should be created in [Menu Painter](javascript:call_link\('abenmenu_painter_glosry.htm'\) "Glossary Entry") as a dialog box status; the list template should also be included.

Example

Displays the details of an airline in a dialog box after a row is selected.

DATA: scarr\_wa TYPE scarr,
      col      TYPE i,
      lin      TYPE i.
START-OF-SELECTION.
   SELECT carrid
          FROM scarr
          INTO scarr\_wa-carrid.
    WRITE / scarr\_wa-carrid.
    HIDE  scarr\_wa-carrid.
  ENDSELECT.
  CLEAR scarr\_wa-carrid.
AT LINE-SELECTION.
  col = sy-cucol + 40.
  lin = sy-curow + 2.
  WINDOW STARTING AT sy-cucol sy-curow
         ENDING   AT col lin.
  IF sy-lsind = 1 AND
     scarr\_wa-carrid IS NOT INITIAL.
    SELECT SINGLE carrname, url
           FROM scarr
           WHERE carrid = @scarr\_wa-carrid
           INTO (@scarr\_wa-carrname, @scarr\_wa-url).
    WRITE: scarr\_wa-carrname, / scarr\_wa-url.
  ENDIF.

Continue
![Example](exa.gif "Example") [Lists, Dialog Boxes](javascript:call_link\('abenlist_window_abexa.htm'\))



**📖 Source**: [abapwindow.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwindow.htm)

### abapset_pf-status_list.htm

> **📖 Official SAP Documentation**: [abapset_pf-status_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

SET PF-STATUS - List

[Quick Reference](javascript:call_link\('abapset_pf-status_shortref.htm'\))

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Extras:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)
[3\. ... IMMEDIATELY](#!ABAP_ADDITION_3@3@)

Effect

In list processing, this statement sets the GUI status specified in status for the display window of the current list, and all subsequent list levels until the next SET PF-STATUS statement. The statement mostly has the same function as for [dynpros](javascript:call_link\('abapset_pf-status_dynpro.htm'\)).

Unlike the [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of dynpros, however, every list level is automatically associated with the GUI status that is set for it. If the system returns from displaying a higher list level to a lower list level, the latter is displayed again with the GUI status that was set for it.

If the status of the data object is initial, the standard list status is set and the additions OF PROGRAM and EXCLUDING are ignored. The [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") contains predefined list-specific functions whose functions are handled by the runtime environment when a screen list is displayed, and do produce calls of event blocks in the ABAP program. If event blocks are also defined with AT LINE-SELECTION or AT PFnn, further function keys are automatically assigned function codes in the standard list status:

-   If [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) is used, the F2 key and the double-click function of the mouse is assigned the function code "PICK" and the function text Select. This function is then also automatically displayed in the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry").
    
-   If [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)) is used, all the Fnn functions of the keyboard that are not handled by the runtime environment are assigned the function codes "PFnn", where "nn" is a number between 01 and 24.
    

If the standard list status is set, sy-pfkey is assigned the value "STLI".

Note

When setting the GUI status for the [list dynpro](javascript:call_link\('abenlist_dynpro_glosry.htm'\) "Glossary Entry"), it is best to set a GUI status for which a list status has been included as a template status in [Menu Painter](javascript:call_link\('abenmenu_painter_glosry.htm'\) "Glossary Entry"). Including this type of template status passes the list-specific functions of the standard list status to a self-defined GUI status.

Addition 1

... OF PROGRAM prog

Addition 2

... EXCLUDING fcode

Effect

As for [dynpros](javascript:call_link\('abapset_pf-status_dynpro.htm'\)).

Addition 3

... IMMEDIATELY

Effect

The addition IMMEDIATELY only has an effect if it is used when creating a details list, that is, within an event block following an interactive list event. The effect of this addition is that SET PF-STATUS has an effect on the current displayed list (sy-listi) and all subsequent list levels, and not only starting from the current details list (sy-lsind).

Example

In the following program segment, it is only possible to select a single line from the basic list by double-clicking the mouse or using the function key F2. This function is then deactivated for the basic list and all subsequent list levels.

START-OF-SELECTION.
  SET PF-STATUS 'BASIC'.
  WRITE / \`Pick me!\`.
AT LINE-SELECTION.
  SET PF-STATUS 'BASIC' EXCLUDING 'PICK' IMMEDIATELY.
  WRITE / \`Don't pick me!\`.



**📖 Source**: [abapset_pf-status_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_list.htm)

### abapset_titlebar_list.htm

> **📖 Official SAP Documentation**: [abapset_titlebar_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_titlebar_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

SET TITLEBAR - List

[Quick Reference](javascript:call_link\('abapset_titlebar_shortref.htm'\))

Syntax

SET TITLEBAR title *\[*OF PROGRAM prog*\]*
                   *\[*WITH text1 ... text9*\]*.

Extras:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... WITH text1 ... text9](#!ABAP_ADDITION_2@2@)

Effect

In list processing, this statement sets the GUI title specified in title for the display window of the current list level and all following list levels up to the next statement SET TITLEBAR. The statement has mostly the same syntax and semantics as for [dynpros](javascript:call_link\('abapset_titlebar_dynpro.htm'\)).

Unlike in [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of dynpros, each list level remains automatically associated with the title set for it. When the display of a higher list level is switched to the display of a lower list level, the latter is displayed with the title that was set for it.

Addition 1

...  OF PROGRAM prog

Addition 2

... WITH text1 ... text9

Effect

As for [dynpros](javascript:call_link\('abapset_titlebar_dynpro.htm'\)).



**📖 Source**: [abapset_titlebar_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_titlebar_list.htm)

### abapset_cursor_list.htm

> **📖 Official SAP Documentation**: [abapset_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_cursor_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

SET CURSOR - List

[Quick Reference](javascript:call_link\('abapset_cursor_shortref.htm'\))

Syntax

SET CURSOR *{* *{* FIELD field LINE line
                     *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* LINE  line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *}*
           *|* *{* col lin *}* *}*.

Alternatives:

[1\. ... FIELD field LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... col lin](#!ABAP_ALTERNATIVE_3@3@)

Effect

In list processing, this statement positions the cursor in the next list displayed on the screen. This is either the current list or, if no details list is created in an event block after an interactive event, the previous list. The cursor can be positioned by entering a field after FIELD or a line after LINE, or by entering a specific position using col and lin.

If the statement SET CURSOR is not specified, the cursor is positioned by default in the first field in the list that is ready for input or in the command field in the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry").

The statement is ignored if the specified position is outside the display area of the list, or if it points to [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry").

Note

The exact position of the cursor is only visible in output areas that are ready for input. Otherwise the whole area in which the cursor is positioned is selected.

Alternative 1

... FIELD field LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*

Effect

The cursor is positioned in the list line specified in line in the output area of the data object whose name is contained in field. The entry is not case-sensitive.

-   If OFFSET is not specified, the cursor is positioned in the first column of the output area.
    
-   If OFFSET is specified without an addition, or with the addition DISPLAY, the cursor is positioned in the column of the output area entered in off.
    
-   If OFFSET is specified with the addition MEMORY, the cursor is positioned on the character in the output area that is specified in off in the list buffer in the output of the data object in field. If this character is cut off in the list display, the cursor is positioned on the corresponding indicator (< or >).
    

The data object field must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"). line and off expect data objects of type i.

If the data object specified in field was contained in the output more than once in the visible area of the line, the cursor is positioned in the first output area. If the data object specified in field does not occur in the visible area of the line, the specification is ignored.

If the cursor is to be positioned in the output area of a data object addressed in the WRITE statement using a field symbol, and the same data object is no longer assigned to the field symbol, the name of the data object must be contained in field, and not the name of the field symbol.

Example

In the following output, the cursor is positioned in the output area ready for input of the field input. Without the SET CURSOR statement, the cursor would be positioned on the previous checkbox.

DATA: flag TYPE c LENGTH 1,
      inp  TYPE c LENGTH 10.
SET BLANK LINES ON.
WRITE: / flag AS CHECKBOX, inp INPUT.
SET CURSOR FIELD 'inp' LINE sy-linno.

Alternative 2

... LINE line *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*

Effect

The cursor is positioned in the list line specified in line.

-   If OFFSET is not specified, the cursor is positioned in the first column of the row.
    
-   If OFFSET is specified without an addition, or with the addition DISPLAY, the cursor is positioned in the column entered in off.
    
-   If OFFSET is specified with the addition MEMORY, the cursor is positioned on the character in the position specified in off in the list buffer. If this character is cut off in the list display, the cursor is positioned on the corresponding indicator (< or >).
    

line and off expect data objects of type i.

Note

This variant of the SET CURSOR statement does not work in [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry").

Alternative 3

... col lin

Effect

The cursor is positioned in the column specified in col and the line specified in lin in the list window. col and lin expect data objects of the type i. Column numbering begins at 2.



**📖 Source**: [abapset_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_cursor_list.htm)

### abapget_cursor_list.htm

> **📖 Official SAP Documentation**: [abapget_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

GET CURSOR - List

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

GET CURSOR *{* *{*FIELD field *\[* [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}*
           *|* *{*LINE line *\[* [line\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}* *}*.

Variants:

[1\. GET CURSOR FIELD field *\[*field\_properties*\]*.](#!ABAP_VARIANT_1@1@)
[2\. GET CURSOR LINE line *\[*line\_properties*\]*.](#!ABAP_VARIANT_2@2@)

Effect

If this statement is specified in list processing, it passes the name of the output field or the number of the list line on which the screen cursor in the displayed list is positioned (after the user action) to the variables field or line, depending on how FIELD or LINE is specified. Further information on the cursor position can be read if required.

System Fields

sy-subrc

Meaning

0

The cursor is on a field or a list line and the statement was executed successfully.

4

The cursor is not on any field or any list line.

Variant 1

GET CURSOR FIELD field *\[*field\_properties*\]*.

Effect

Returns the name of the displayed field in field after a user action. This name is where the cursor is positioned in the currently displayed list. field expects a character-like variable. The addition [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\)) can be used to read further information about the cursor position.

If the screen cursor is on a subarea displayed using an [offset/length](javascript:call_link\('abenoffset_length.htm'\)) of a structure, the following rules apply:

-   The subarea of the structure has been displayed using the name of the structure:
    

-   If the subarea includes the entire structure, the name of the structure is returned.

-   If the subarea only includes a part of the structure, the name of the component is returned in which the subarea begins.

-   The subarea of the structure has been displayed using the name of a component of the structure:
    

-   The name of the component is returned in which the subarea begins.

These rules also apply to substructures.

The addition FIELD can only be used to determine the names of global data objects of the ABAP program. If the cursor is positioned on the output of a data object that is not visible in the current context or a literal, field is initialized. This has no influence on the other additions or on sy-subrc.

If the cursor is on the output area of a data object that was accessed in the WRITE statement using a field symbol, the name of the data object is returned and not the name of the field symbol.

Variant 2

GET CURSOR LINE line *\[*line\_properties*\]*.

Effect

Returns the number of the list line in line after a user action. This line is where the cursor is positioned in the currently displayed list. line expects a variable of type i. The addition [line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\)) can be used to read further information about the cursor position.

Continue
[GET CURSOR - field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))
[GET CURSOR - line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\))



**📖 Source**: [abapget_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm)

### abapget_cursor_list_field.htm

> **📖 Official SAP Documentation**: [abapget_cursor_list_field.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_field.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) →  [GET CURSOR - List](javascript:call_link\('abapget_cursor_list.htm'\)) → 

GET CURSOR - field\_properties

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]*
    *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]* *\[*LINE lin*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)
[4\. ... LINE lin](#!ABAP_ADDITION_4@4@)

Effect

Using these additions, further information about the cursor position can be read during list processing with the addition FIELD of the [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\)) statement.

Addition 1

... VALUE val

Effect

The addition VALUE assigns the formatted content of the output area on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2

... LENGTH len

Effect

The addition LENGTH assigns the length of the output area on which the cursor is positioned to the data object len. len expects a variable of the type i.

Addition 3

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the output area on which it is positioned to the data object off. off expects a variable of the type i. Counting begins at 0.

The addition OFFSET with the addition MEMORY assigns the offset of the character in the area of the data object in the list buffer (on whose output the cursor is positioned) to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.

Note

If [Subfields](javascript:call_link\('abenoffset_length.htm'\)) is displayed in lists, the returned offset is counted starting from the offset of the subfield.

Addition 4

... LINE lin

Effect

The addition LINE assigns the number of the list line on which the cursor is positioned to the data object lin. lin expects a variable of the type i.



**📖 Source**: [abapget_cursor_list_field.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_field.htm)

### abapget_cursor_list_line.htm

> **📖 Official SAP Documentation**: [abapget_cursor_list_line.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_line.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) →  [GET CURSOR - List](javascript:call_link\('abapget_cursor_list.htm'\)) → 

GET CURSOR - line\_properties

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*.

Extras:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)

Effect

Using these additions, further information about the cursor position can be read using the addition LINE of the statement [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\)).

Addition 1

... VALUE val

Effect

The addition VALUE assigns the formatted content of the list line on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2

... LENGTH len

Effect

The addition LENGTH assigns the line length set using the addition LINE-SIZE of the statement introducing the program or using NEW-PAGE (this is the line on which the cursor is positioned) to the data object len. len expects a variable of the type i.

Addition 3

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the displayed line on which it is positioned to the data object off. off expects a variable of the type i.

The addition OFFSET with the addition MEMORY assigns the position of the character in the list buffer line (on whose output the cursor is currently positioned) to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.



**📖 Source**: [abapget_cursor_list_line.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list_line.htm)

### abapget_cursor_list.htm

> **📖 Official SAP Documentation**: [abapget_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapget_cursor_list.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_cursor_list.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

GET CURSOR - List

[Quick Reference](javascript:call_link\('abapget_cursor_shortref.htm'\))

Syntax

GET CURSOR *{* *{*FIELD field *\[* [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}*
           *|* *{*LINE line *\[* [line\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))*\]**}* *}*.

Variants:

[1\. GET CURSOR FIELD field *\[*field\_properties*\]*.](#!ABAP_VARIANT_1@1@)
[2\. GET CURSOR LINE line *\[*line\_properties*\]*.](#!ABAP_VARIANT_2@2@)

Effect

If this statement is specified in list processing, it passes the name of the output field or the number of the list line on which the screen cursor in the displayed list is positioned (after the user action) to the variables field or line, depending on how FIELD or LINE is specified. Further information on the cursor position can be read if required.

System Fields

sy-subrc

Meaning

0

The cursor is on a field or a list line and the statement was executed successfully.

4

The cursor is not on any field or any list line.

Variant 1

GET CURSOR FIELD field *\[*field\_properties*\]*.

Effect

Returns the name of the displayed field in field after a user action. This name is where the cursor is positioned in the currently displayed list. field expects a character-like variable. The addition [field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\)) can be used to read further information about the cursor position.

If the screen cursor is on a subarea displayed using an [offset/length](javascript:call_link\('abenoffset_length.htm'\)) of a structure, the following rules apply:

-   The subarea of the structure has been displayed using the name of the structure:
    

-   If the subarea includes the entire structure, the name of the structure is returned.

-   If the subarea only includes a part of the structure, the name of the component is returned in which the subarea begins.

-   The subarea of the structure has been displayed using the name of a component of the structure:
    

-   The name of the component is returned in which the subarea begins.

These rules also apply to substructures.

The addition FIELD can only be used to determine the names of global data objects of the ABAP program. If the cursor is positioned on the output of a data object that is not visible in the current context or a literal, field is initialized. This has no influence on the other additions or on sy-subrc.

If the cursor is on the output area of a data object that was accessed in the WRITE statement using a field symbol, the name of the data object is returned and not the name of the field symbol.

Variant 2

GET CURSOR LINE line *\[*line\_properties*\]*.

Effect

Returns the number of the list line in line after a user action. This line is where the cursor is positioned in the currently displayed list. line expects a variable of type i. The addition [line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\)) can be used to read further information about the cursor position.

Continue
[GET CURSOR - field\_properties](javascript:call_link\('abapget_cursor_list_field.htm'\))
[GET CURSOR - line\_properties](javascript:call_link\('abapget_cursor_list_line.htm'\))
