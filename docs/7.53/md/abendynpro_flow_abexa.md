---
title: "Dynpros, Dynpro Sequences"
description: |
  This example demonstrates how dynpro sequences behave. Source Code PROGRAM sapmdemo_screen_flow MESSAGE-ID demo_flight. TABLES: spfli, sairport, scarr. DATA: ok_code   TYPE c LENGTH 4, rcode     TYPE c LENGTH 5, old_spfli TYPE spfli.  PBO MODULE status_0100 OUTPUT. SET PF-STATUS 'TD0100'. SE
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_abexa.htm"
abapFile: "abendynpro_flow_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "data", "types", "abendynpro", "flow", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Dynpro Flow and Dynpro Sequences](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_processing.htm) → 

Dynpros, Dynpro Sequences

This example demonstrates how dynpro sequences behave.

Source Code

PROGRAM sapmdemo\_screen\_flow MESSAGE-ID demo\_flight.
TABLES: spfli,
        sairport,
        scarr.
DATA: ok\_code   TYPE c LENGTH 4,
      rcode     TYPE c LENGTH 5,
      old\_spfli TYPE spfli.
\* PBO
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'TD0100'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE status\_0200 OUTPUT.
  SET PF-STATUS 'TD0200'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE status\_0210 OUTPUT.
  SET PF-STATUS 'POPUP'.
  SET TITLEBAR 'POP'.
ENDMODULE.
\* PAI
MODULE user\_command\_0100 INPUT.
  CASE ok\_code.
    WHEN space.
      SELECT SINGLE \*
             FROM  spfli
             WHERE carrid      = @spfli-carrid
             AND   connid      = @spfli-connid
             INTO  @spfli.
      IF sy-subrc NE 0.
        MESSAGE e005 WITH spfli-carrid spfli-connid.
      ENDIF.
      old\_spfli = spfli.
      CLEAR ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'BACK'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE user\_command\_0200 INPUT.
  CASE ok\_code.
    WHEN 'SAVE'.
      UPDATE spfli.
      IF sy-subrc = 0.
        MESSAGE s001 WITH spfli-carrid spfli-connid.
      ELSE.
        MESSAGE a002 WITH spfli-carrid spfli-connid.
      ENDIF.
      CLEAR ok\_code.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      PERFORM safety\_check USING rcode.
      IF rcode = 'EXIT'. SET SCREEN 0. LEAVE SCREEN. ENDIF.
    WHEN 'BACK'.
      CLEAR ok\_code.
      PERFORM safety\_check USING rcode.
      IF rcode = 'EXIT'. SET SCREEN 100. LEAVE SCREEN. ENDIF.
    WHEN 'DELE'.
      MESSAGE w011.
      DELETE FROM spfli
        WHERE carrid = @spfli-carrid
        AND connid = @spfli-connid.
  ENDCASE.
ENDMODULE.
MODULE check\_fr\_airport INPUT.
  SELECT SINGLE \*
         FROM  sairport
         WHERE id = @spfli-airpfrom
         INTO  @sairport.
  IF sy-subrc <> 0.
    MESSAGE e003 WITH spfli-airpfrom.
  ENDIF.
ENDMODULE.
MODULE check\_to\_airport INPUT.
  SELECT SINGLE \*
         FROM  sairport
         WHERE id = @spfli-airpto
         INTO  @sairport.
  IF sy-subrc <> 0.
    MESSAGE e004 WITH spfli-airpto.
  ENDIF.
ENDMODULE.
MODULE exit\_0100 INPUT.
  CASE ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
    WHEN 'BACK'.
      CLEAR ok\_code.
      SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE exit\_0200 INPUT.
  CASE ok\_code.
    WHEN 'CANC'.
      CLEAR ok\_code.
      SET SCREEN 100. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE user\_command\_0210 INPUT.
  CASE ok\_code.
    WHEN 'SAVE'. SET SCREEN 0. LEAVE SCREEN.
    WHEN 'EXIT'. SET SCREEN 0. LEAVE SCREEN.
    WHEN 'CANC'. SET SCREEN 0. LEAVE SCREEN.
  ENDCASE.
ENDMODULE.
MODULE read\_text\_0100 INPUT.
  SELECT SINGLE \*
         FROM scarr
         WHERE carrid = @spfli-carrid
         INTO @scarr.
ENDMODULE.
\* Subroutine
FORM safety\_check USING rcode.
  LOCAL ok\_code.
  rcode = 'EXIT'.
  CHECK spfli NE old\_spfli.
  CLEAR ok\_code.
  CALL SCREEN 210 STARTING AT 10 5.
  CASE ok\_code.
    WHEN 'SAVE'. UPDATE spfli.
    WHEN 'EXIT'.
    WHEN 'CANC'. CLEAR spfli.
  ENDCASE.
ENDFORM.

Description

The transaction DEMO\_SCREEN\_FLOW uses three dynpros. The dynpros 100 and 200 form a sequence. Dynpro 210 is a modal dialog box and is only called under special circumstances.

-   Dynpro 100: The user enters flight data, chooses Continue to request a detailed display of this data, or ends the transaction.

-   Dynpro 200: The system displays complete details about the flight, in input fields. The user types over the display to enter the changes.

-   Dynpro 210: The modal dialog box appears only if the user attempts to quit dynpro 200 by choosing Back or Exit without saving the values modified. It enables the user to save changes or cancel the operation.

This transaction is a good example of how a dynpro sequence is implemented. A closer look at dynpro 200 shows how the modal dialog box is called. When processing the BACK or EXIT function codes, the PAI module must check if the flight data has been changed since it was last displayed or saved. If this is the case, dynpro 210 is called as a modal dialog box. The following parts of the flow logic of dynpro 200 are as follows:

PROCESS AFTER INPUT.
  MODULE exit\_0200 AT EXIT-COMMAND.
  ...
  MODULE user\_command\_0200.

The system calls two dialog modules at the PAI event. The user interface of transaction DEMO\_SCREEN\_FLOW offers the functions Back, Exit, and Cancel as return commands. On the screen of dynpro 200, the user should only be able to leave the screen directly to dynpro 100 using Cancel. The function code is processed in the module exit\_200. The next dynpro is set dynamically to 100, and dynpro 200 is terminated immediately using LEAVE SCREEN. All other function codes for screen 200 are processed in module user\_command\_200:

-   The Save function triggers a database update.

-   The Exit and Back functions call the subroutine safety\_check. This subroutine checks to see whether there is unsaved data on the screen, and, if required, calls dynpro 210.

If the Exit function is chosen (function code EXIT), the user leaves the transaction completely since the dynpro sequence is ended dynamically using SET SCREEN 0. If the user chooses Back (function code BACK), the next dynpro is changed dynamically to 100 using SET SCREEN 100.

The subroutine safety\_check first compares the current values of the dynpro fields with the values saved. If the values match, no save is needed, and the routine terminates. If the values differ, safety\_check calls the modal dialog box of dynpro 210. This asks the user if he or she wants to save, and returns the answer to the field ok\_code. The static next dynpro for dynpro 210 is 210. However, the processing logic (module user\_command\_210) always sets the next dynpro dynamically to 0, which returns control to the subroutine.

The following figure summarizes the flow of the dynpro sequences in the example:

![Figure](abdoc_dynpro_seq.gif)