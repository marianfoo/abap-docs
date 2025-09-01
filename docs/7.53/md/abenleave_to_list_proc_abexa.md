---
title: "Calling Lists from Dynpro Processing"
description: |
  This example shows how to switch from dynpro processing to list processing. Source Code REPORT demo_leave_to_list_processing . TABLES demo_conn. DATA: wa_spfli TYPE spfli, flightdate TYPE sflight-fldate. CALL SCREEN 100. MODULE status_0100 OUTPUT. SET PF-STATUS 'SCREEN_100'. ENDMODULE. MODUL
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_to_list_proc_abexa.htm"
abapFile: "abenleave_to_list_proc_abexa.htm"
keywords: ["select", "do", "while", "if", "case", "class", "data", "abenleave", "list", "proc", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm) →  [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm) → 

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