  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Display](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlists_displayed.htm) →  [WINDOW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwindow.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Dialog%20Box%2C%20ABENLIST_WINDOW_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Dialog Box

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

For this reason, SELECT, F2, and double-clicking with the mouse all raise the event AT USER-COMMAND. In the corresponding processing block, list levels 1 and 2 have the status DIALOG and are output as a dialog box. Like in the status BASIC, the default function code PICK is replaced in the status DIALOG by the function code SELE which is inserted in the application toolbar after Cancel.

Titles WI1 and WI2 are defined for the dialog boxes. In the second dialog box, the function code SELE has been disabled using the addition EXCLUDING in the statement SET PF-STATUS.

The system displays horizontal scroll bars in the dialog boxes since the list width of the dialog boxes is not adjusted and therefore corresponds to the standard width of the basic list.