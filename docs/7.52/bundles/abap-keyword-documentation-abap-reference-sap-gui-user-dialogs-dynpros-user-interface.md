# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Dynpros / User Interface

Included pages: 2


### abenabap_dynpros_gui.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) → 

User Interface

For the execution of user dialogs, input and output services are required that can be accessed through a user interface (UI). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the GUI window on the screen, this is a graphical user interface (GUI). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") is SAP GUI, which is installed as a software component of an [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") on the [presentation servers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpresentation_server_glosry.htm "Glossary Entry") of the presentation layer. It contains all the control elements that are required for execution of dialogs between the user and the program. The operating elements of the SAP GUI are represented schematically in the following diagram:

![Figure](abdoc_gui.gif)

On the screen, SAP GUI presents the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") of a dynpro (dynamic program) in a GUI window. The screen can contain screen elements for displaying contents or for receiving user actions. The screen and its screen elements are processed using [Layout Editor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlayout_editor_glosry.htm "Glossary Entry") in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status. Also, they are assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field sy-pfkey.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using Menu Painter, contains the heading of the GUI window. The status bar displays information that can be transmitted, among other things, during the execution of an ABAP program using the [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) statement. In addition, it contains system information that can be displayed or hidden using an icon on the right of the bar.

Continue
![Example](exa.gif "Example") [Screens, GUI Status and Function Codes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_gui_status_abexa.htm)


### abendynpro_gui_status_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [User Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_gui.htm) → 

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
