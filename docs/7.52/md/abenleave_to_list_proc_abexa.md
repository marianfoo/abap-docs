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