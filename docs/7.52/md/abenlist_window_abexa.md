---
title: "Lists, Dialog Boxes"
description: |
  The example shows how to display a details list in the dialog box. Source Code REPORT demo_list_window NO STANDARD PAGE HEADING. START-OF-SELECTION. SET PF-STATUS 'BASIC'. WRITE 'Select line for a demonstration of windows'. AT USER-COMMAND. CASE sy-ucomm. WHEN 'SELE'. IF sy-lsind = 1. SET PF-STATU
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_window_abexa.htm"
abapFile: "abenlist_window_abexa.htm"
keywords: ["select", "insert", "do", "if", "case", "class", "abenlist", "window", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlists_displayed.htm) →  [WINDOW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwindow.htm) → 

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

In this program, the status of the basic list is set to BASIC. In the status BASIC, the default function code PICK for the key F2 has been replaced by the user-defined function code SELE (text SELECT) which has been inserted in the application toolbar.

As a result, choosing SELECT or F2 or double-clicking the mouse triggers the event AT USER-COMMAND. In the associated processing block, the list levels 1 and 2 are output with the status DIALOG as a dialog box. Like in the status BASIC, the default function code PICK is replaced in the status DIALOG by the function code SELE which is inserted in the application toolbar after Cancel.

The titles WI1 and WI2 have been defined for the dialog boxes. In the second dialog box, the function code SELE has been disabled using the addition EXCLUDING in the statement SET PF-STATUS.

The system displays horizontal scrollbars in the dialog boxes since the list width of the dialog boxes is not adjusted and therefore corresponds to the standard width of the basic list.