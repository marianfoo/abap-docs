  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Dynpro Flow and Dynpro Sequences](javascript:call_link\('abenabap_dynpros_processing.htm'\)) → 

Screens, Screen Sequences

This example shows you how screen sequences behave.

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

Transaction DEMO\_SCREEN\_FLOW uses three screens. Screens 100 and 200 form a sequence. Screen 210 is a modal dialog box and is only called if specific conditions are met:

-   Screen 100: The user enters flight data, chooses Continue to request a detailed display of this data or ends the transaction.

-   Screen 200: The system displays all detail data for the flight in input fields. The user makes any changes required by overwriting the data displayed.

-   Screen 210: The modal dialog box appears only if the user attempts to quit screen 200 by choosing Back or Exit without saving the values modified. The dialog box allows the user to save the changes or cancel the process.

This transaction is a good example of how a screen sequence is implemented. To see how the modal dialog box is called, we have a closer look at screen 200. When processing the BACK or EXIT function codes, the PAI module must check if the flight data has been changed since it was last displayed or saved. If this is the case, screen 210 is to be called as a modal dialog box. The following sections of the flow logic for screen 200 are relevant here:

PROCESS AFTER INPUT.
MODULE exit\_0200 AT EXIT-COMMAND.
  ...
MODULE user\_command\_0200.

The system calls two dialog modules at the PAI event. The user interface of transaction DEMO\_SCREEN\_FLOW offers the functions Back, Exit, and Cancel as return commands. On screen 200, however, the user is only to be provided with the Cancel command to quit the screen immediately and return to screen 100. The corresponding function code is processed in module exit\_200. The next screen in the sequence is dynamically set to 100 and processing of screen 200 is ended immediately with LEAVE SCREEN. All other function codes for screen 200 are processed in module user\_command\_200:

-   The Save function triggers a database update.

-   The Exit and Back functions call subroutine safety\_check. This subroutine searches for any unsaved data on the screen and calls creen 210 if this is necessary.

If the Exit function is chosen (function code EXIT), the user leaves the transaction completely as the screen sequence is dynamically ended using SET SCREEN 0. If the function Back (function code BACK) is chosen, screen 100 is dynamically set as the next screen in the sequence using SET SCREEN 100.

The subroutine safety\_check first compares the current values of the screen fields with the values saved. If these values match, the user does not have to save the data, and the subroutine is ended. If the values do not match, safety\_check calls the modal dialog box of screen 210. The dialog box asks the user whether the data should be saved and returns the user's response as a function code in the field ok\_code. The static next screen of screen 210 is again screen 210. The processing logic (module user\_command\_210), however, always sets the next screen dynamically to 0 with the result that control passes back to the subroutine.

The following graphic summarizes the flow of the screen sequences in the example:

![Figure](abdoc_dynpro_seq.gif)