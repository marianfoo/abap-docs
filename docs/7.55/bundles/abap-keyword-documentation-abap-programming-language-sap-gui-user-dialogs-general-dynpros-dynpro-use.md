# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - User Interface

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_dynpros_gui.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_gui.htm)
- [abendynpro_gui_status_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_gui_status_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.768Z

---

### abenabap_dynpros_gui.htm

> **📖 Official SAP Documentation**: [abenabap_dynpros_gui.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_gui.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) → 

dynpro - User Interface

For the execution of user dialogs, input and output services are required that can be accessed through a user interface (UI). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the GUI window on the screen, this is a graphical user interface (GUI). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") is SAP GUI, which is installed as a component of the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry") on the presentation servers. It contains all the control elements that are required for execution of dialogs between the user and the program. The operating elements of the SAP GUI are represented schematically in the following diagram:

![Figure](abdoc_gui.gif)

On the screen, SAP GUI presents the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a dynpro (dynamic program) in a GUI window. The screen can contain screen elements for displaying contents or for receiving user actions. The screen and its screen elements are processed using [Layout Editor](javascript:call_link\('abenlayout_editor_glosry.htm'\) "Glossary Entry") in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status. Also, they are assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field sy-pfkey.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using Menu Painter, contains the heading of the GUI window. The status bar displays information that can be transmitted, among other things, during the execution of an ABAP program using the [MESSAGE](javascript:call_link\('abapmessage.htm'\)) statement. In addition, it contains system information that can be displayed or hidden through an icon on the right-hand side of the bar.

Continue
![Example](exa.gif "Example") [dynpro - GUI Statuses and Function Codes](javascript:call_link\('abendynpro_gui_status_abexa.htm'\))



**📖 Source**: [abenabap_dynpros_gui.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_gui.htm)

### abendynpro_gui_status_abexa.htm

> **📖 Official SAP Documentation**: [abendynpro_gui_status_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_gui_status_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abendynpro_gui_status_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_gui_status_abexa.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - User Interface](javascript:call_link\('abenabap_dynpros_gui.htm'\)) → 

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

The static next dynpro number of dynpro 100 is 100. The screen field of output is defined as not ready for input in Screen Painter. The module init\_screen\_0100 sets the GUI status status\_0100 and the title 100 in the PBO event. All function codes exist as menu entries, but not all of them are assigned to function keys. The function codes in the standard toolbar activate the icons and are automatically assigned to their function keys. Some of the additional function keys are assigned to the application toolbar. The module user\_command\_0100 first assigns the contents of the field ok\_code to the helper variable save\_ok and initializes ok\_code. This procedure is always recommended since it makes sure that the dynpro field ok\_code is also reinitialized in the PBO event and does not contain any unwanted values. Then the function code chosen is assigned to the field output and displayed in the corresponding screen field, except for BACK, EXIT, and CANCEL. The latter exits the program. The function code SELE can be passed to the ABAP program in the following ways:

-   Choosing Choose in the Edit menu

-   Choosing the Choose pushbutton in the application toolbar

-   Choosing F2 on the keyboard

-   Pressing the right mouse button and choosing Choose

-   Double-clicking the screen field of output

-   Entering SELE in the command field and choosing ENTER

The other function codes are passed in accordance with their definition, but without the double-click function.
