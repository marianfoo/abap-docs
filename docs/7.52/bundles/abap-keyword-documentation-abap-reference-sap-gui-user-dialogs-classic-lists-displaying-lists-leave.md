# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Classic Lists / Displaying Lists / LEAVE TO LIST-PROCESSING

Included pages: 2


### abapleave_to_list-processing.htm

---
title: "LEAVE TO LIST-PROCESSING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-process_shortref.htm) Syntax LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN dynnr. Addition: ... AND RETURN TO SCREEN dynnr(#!ABAP_ONE_ADD@1@) Effect This statement can be executed during PBO(ht
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-processing.htm"
abapFile: "abapleave_to_list-processing.htm"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "abapleave", "list", "processing"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlists_displayed.htm) → 

LEAVE TO LIST-PROCESSING

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-process_shortref.htm)

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Addition:

[... AND RETURN TO SCREEN dynnr](#!ABAP_ONE_ADD@1@)

Effect

This statement can be executed during [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") and [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") processing. After the current dynpro is processed, this statement interrupts the current [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry"), starts the list processor, and displays the basic list. The basic list consists of any list output of all PBO and PAI modules of the dynpro sequence executed to this point. The statement is ignored in the event blocks for [reporting events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreporting_event_glosry.htm "Glossary Entry") and [list events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_event_glosry.htm "Glossary Entry").

The [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") of the [list dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_dynpro_glosry.htm "Glossary Entry") of the list processor replaces the screen shown in the [popup level](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpop-up_level_glosry.htm "Glossary Entry") 0. Any modal dialog windows stacked above this are hidden while the list is being displayed. The GUI status set in the dynpro sequence is used. Any list events triggered by user actions in the GUI window of the list dynpro call the event blocks of the current [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry"). Any details lists created there are displayed by the list processor in the GUI window of the basic list (unless the statement [WINDOW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwindow.htm) is used).

The user can exit the list processor or list display by selecting the functions Back, Exit, or Cancel in the display for list level 0, or by means of a program that uses the [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_list-processing.htm) statement. By default, the interrupted dynpro sequence resumes in both cases with the PBO processing of the dynpro in which the list processor was called.

Addition

... AND RETURN TO SCREEN dynnr

Effect

Using the addition AND RETURN TO SCREEN, another dynpro can be specified in dynnr for continuing PBO processing. dynnr expects a character-like data object that contains the number of a dynpro in the current main program.

Notes

-   If the current dynpro is displayed in a dialog box, the list processor also displays the lists in this window.
    
-   If the value 0 is specified in dynnr, the current dynpro sequence is closed after the list processor is exited.
    

Executable Example

[Calling Lists from Dynpro Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_to_list_proc_abexa.htm)

Continue
![Example](exa.gif "Example") [Calling Lists from Within Screen Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_to_list_proc_abexa.htm)


### abenleave_to_list_proc_abexa.htm

---
title: "Calling Lists from Within Screen Processing"
description: |
  The example shows how to switch from screen processing to list processing. Source Code REPORT demo_leave_to_list_processing . TABLES demo_conn. DATA: wa_spfli TYPE spfli, flightdate TYPE sflight-fldate. CALL SCREEN 100. MODULE status_0100 OUTPUT. SET PF-STATUS 'SCREEN_100'. ENDMODULE. MODULE
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_to_list_proc_abexa.htm"
abapFile: "abenleave_to_list_proc_abexa.htm"
keywords: ["select", "do", "while", "class", "data", "abenleave", "list", "proc", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlists_displayed.htm) →  [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_list-processing.htm) → 

Calling Lists from Within Screen Processing

The example shows how to switch from screen processing to list processing.

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

In this example, the system branches to list processing while screen 100 is being processed. The screen layout of screen 100 has a single input field, the component CARRID of the structure SDYN\_CONN from the ABAP Dictionary. The flow logic of screen 100 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In the PAI module user\_command\_0100, CALL SCREEN is used to call screen 500. Screen 500 encapsulates a basic list. The flow logic of this screen is as follows:

PROCESS BEFORE OUTPUT.
  MODULE call\_list\_500.
PROCESS AFTER INPUT.

The module call\_list\_500 defines the basic list and branches to the list display. Since the system branches to the next screen 0 after returning from the list display, screen 500 represents a screen sequence with a single screen only. When list processing is completed, the system returns to after the callpoint in user\_command\_0100.

Selecting a line in the basic list creates a details list. The event block for AT LINE-SELECTION has been programmed for this purpose. In addition, the page headers for the basic and details list are defined in the event blocks for TOP-OF-PAGE and TOP-OF-PAGE DURING LINE-SELECTION.

Since only one list system is used in this program, separate control during list event processing is not necessary.
