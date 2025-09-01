  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_elements.htm) →  [dynpro - User Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_gui.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20GUI%20Statuses%20and%20Function%20Codes%2C%20ABENDYNPRO_GUI_STATUS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

dynpro - GUI Statuses and Function Codes

This example demonstrates how to set the GUI status and evaluate function codes.

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

The static next dynpro number of dynpro 100 is 100. The screen field of output is defined as not ready for input in Screen Painter. The module init\_screen\_0100 sets the GUI status status\_0100 and the title 100 in the PBO event. All function codes exist as menu entries, but not all of them are assigned to function keys. The function codes in the standard toolbar activate the icons and are automatically assigned to their function keys. Some of the additional function keys are assigned to the application toolbar. The module user\_command\_0100 first assigns the content of the field ok\_code to the helper variable save\_ok and initializes ok\_code. This procedure is always recommended since it also initializes the dynpro field ok\_code again in the PBO event and does not contain any unwanted values. Then the function code chosen is assigned to the field output and displayed in the corresponding screen field, except for BACK, EXIT, and CANCEL. The latter terminates the program. The function code SELE can be passed to the ABAP program in the following ways:

-   Choosing Choose in the Edit menu
-   Choosing the Choose pushbutton in the application toolbar
-   Choosing F2 on the keyboard
-   Pressing the right mouse button and choosing Choose
-   Double-clicking the screen field of output
-   Entering SELE in the command field and choosing ENTER

The other function codes are passed in accordance with their definition, but without a double-click.