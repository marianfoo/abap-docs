  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [User Interface](javascript:call_link\('abenabap_dynpros_gui.htm'\)) → 

Screens, GUI Status and Function Codes

The example shows how to set the GUI status and evaluate function codes.

Source Code

PROGRAM demo\_dynpro\_gui\_status.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      output  LIKE ok\_code.
CALL SCREEN 100.
MODULE init\_screen\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'BACK' OR 'EXIT' OR 'CANCEL'.
      LEAVE PROGRAM.
    WHEN OTHERS.
      output = save\_ok.
  ENDCASE.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The screen field of output has been defined as not ready for input in the Screen Painter. The module init\_screen\_0100 sets the GUI status status\_0100 and the title 100 in the PBO event. All function codes are available as menu items but not all of them have been assigned to a function key. The function codes of the standard toolbar enable the icons and automatically assign them a function key. Some of the additional function keys are assigned to the application toolbar. The module user\_command\_0100 first assigns the contents of the field ok\_code to the auxiliary variable save\_ok and initializes ok\_code. This procedure is always recommended since this makes sure that the screen field ok\_code is also reinitialized in the PBO event and does not contain any unintended value. Then the function code chosen is assigned to the field output and displayed in the corresponding screen field, except for BACK, EXIT, and CANCEL. Cancel exits the program. The function code SELE can be passed to the ABAP program in one of the following ways, for example:

-   Choosing Choose in the Edit menu

-   Choosing the Choose pushbutton in the application toolbar

-   Choosing F2 on the keyboard

-   Pressing the right mouse-button and choosing Choose

-   Double-clicking the screen field of output

-   Entering SELE into the screen field and choosing ENTER

All other function codes based on their definition and without double-clicking the mouse.