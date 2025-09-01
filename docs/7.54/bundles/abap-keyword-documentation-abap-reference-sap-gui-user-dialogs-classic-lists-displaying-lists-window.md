# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Classic Lists / Displaying Lists / WINDOW

Included pages: 2


### abapwindow.htm

---
title: "WINDOW"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwindow_shortref.htm) Syntax WINDOW STARTING AT col1 lin1 ENDING  AT col2 lin2. Effect This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an in
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwindow.htm"
abapFile: "abapwindow.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapwindow"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_displayed.htm) → 

WINDOW

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwindow_shortref.htm)

Syntax

WINDOW STARTING AT col1 lin1
       *\[*ENDING  AT col2 lin2*\]*.

Effect

This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an interactive list event. If there are multiple WINDOW statements in an event block, the last one is valid.

The upper left corner is determined for the column and the row by the values in col1 and lin1. The values are based on the GUI window of the basic list. The lower right corner is set automatically. The maximum lower right corner can either be specified in col2 and lin2 or is specified using the lower right corner of the GUI window where the list event took place.

col1, lin1, col2, and lin2 expect data objects of the type i. The values of all data objects should lie within the GUI window of the basic list and the values of col1 and lin1 should be less than those of col2 and lin2. If not, the behavior is undefined.

If no GUI status is set using [SET PF-STATUS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_list.htm) and an event block is defined using [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_line-selection.htm) or [AT PFnn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_pfnn.htm), the system automatically uses a [standard list status](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") suitable for the dialog box without a [menu bar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmenu_bar_glosry.htm "Glossary Entry") and [system toolbar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"). This includes pushbuttons for the predefined function codes "PICK" (only for AT LINE-SELECTION), "PRI", "%SC", "%SC+", and "RW" in the [application toolbar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_toolbar_glosry.htm "Glossary Entry").

Note

If a GUI status is set using SET PF-STATUS, this should be created in [Menu Painter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmenu_painter_glosry.htm "Glossary Entry") as a dialog box status; the list template should also be included.

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
![Example](exa.gif "Example") [Lists, Dialog Boxes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_window_abexa.htm)


### abenlist_window_abexa.htm

---
title: "Lists, Dialog Boxes"
description: |
  The example shows how to display a details list in the dialog box. Source Code REPORT demo_list_window NO STANDARD PAGE HEADING. START-OF-SELECTION. SET PF-STATUS 'BASIC'. WRITE 'Select line for a demonstration of windows'. AT USER-COMMAND. CASE sy-ucomm. WHEN 'SELE'. IF sy-lsind = 1. SET PF-STATU
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_window_abexa.htm"
abapFile: "abenlist_window_abexa.htm"
keywords: ["select", "insert", "do", "if", "case", "class", "abenlist", "window", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlists_displayed.htm) →  [WINDOW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwindow.htm) → 

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
