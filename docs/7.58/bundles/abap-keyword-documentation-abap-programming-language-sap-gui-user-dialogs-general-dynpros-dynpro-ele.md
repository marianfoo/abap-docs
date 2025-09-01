# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Elements / dynpro - User Interface

Included pages: 2


### abenabap_dynpros_gui.htm

---
title: "Continue"
description: |
  !Example(exa.gif 'Example') dynpro - GUI Statuses and Function Codes(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_gui_status_abexa.htm)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_gui.htm"
abapFile: "abenabap_dynpros_gui.htm"
keywords: ["do", "if", "try", "abenabap", "dynpros", "gui"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20User%20Interface%2C%20ABENABAP_DYNPROS_GUI%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - User Interface

For the execution of user dialogs, input and output services are required that can be accessed through a [user interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_interface_glosry.htm "Glossary Entry") (UI). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the [GUI window](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_window_glosry.htm "Glossary Entry") on the screen, this is a graphical user interface ([GUI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_glosry.htm "Glossary Entry")). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") is [SAP GUI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_gui_glosry.htm "Glossary Entry"), which is installed as a component of the [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") [presentation layer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") on the presentation servers. It contains all control elements that are required for the execution of dialogs between the user and the program. The control elements of the SAP GUI are represented schematically in the following diagram:

![Figure](abdoc_gui.gif)

On the screen, SAP GUI presents the [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of a dynpro in a GUI window. The screen layout can contain screen elements for displaying content or for receiving user actions. The screen layout and its screen elements are processed using the [Layout Editor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlayout_editor_glosry.htm "Glossary Entry") in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status, as well as being assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field sy-pfkey.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using the Menu Painter, contains the header of the GUI window. The status bar displays information that can be sent, among other things, during the execution of an ABAP program using the [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) statement. In addition, it contains system information that can be displayed or hidden through an icon on the right-hand side of the bar.

Continue
![Example](exa.gif "Example") [dynpro - GUI Statuses and Function Codes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_gui_status_abexa.htm)


### abendynpro_gui_status_abexa.htm

---
title: "Source Code"
description: |
  PROGRAM demo_dynpro_gui_status. DATA: ok_code TYPE sy-ucomm, save_ok LIKE ok_code, output  LIKE ok_code. CALL SCREEN 100. MODULE init_screen_0100 OUTPUT. SET PF-STATUS 'STATUS_100'. SET TITLEBAR '100'. ENDMODULE. MODULE user_command_0100 INPUT. save_ok = ok_code. CLEAR ok_code. CASE s
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_gui_status_abexa.htm"
abapFile: "abendynpro_gui_status_abexa.htm"
keywords: ["do", "if", "case", "data", "abendynpro", "gui", "status", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - User Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_gui.htm) → 

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
