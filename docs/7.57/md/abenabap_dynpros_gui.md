---
title: "Continue"
description: |
  !Example(exa.gif 'Example') dynpro - GUI Statuses and Function Codes(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_gui_status_abexa.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_gui.htm"
abapFile: "abenabap_dynpros_gui.htm"
keywords: ["do", "if", "try", "abenabap", "dynpros", "gui"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - User Interface, ABENABAP_DYNPROS_GUI, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

dynpro - User Interface

For the execution of user dialogs, input and output services are required that can be accessed through a user interface (UI). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the GUI window on the screen, this is a graphical user interface (GUI). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") is SAP GUI, which is installed as a component of the [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") [presentation layer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpresentation_layer_glosry.htm "Glossary Entry") on the presentation servers. It contains all control elements that are required for execution of dialogs between the user and the program. The control elements of the SAP GUI are represented schematically in the following diagram:

![Figure](abdoc_gui.gif)

On the screen, SAP GUI presents the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") of a dynpro in a GUI window. The screen layout can contain screen elements for displaying content or for receiving user actions. The screen layout and its screen elements are processed using the [Layout Editor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlayout_editor_glosry.htm "Glossary Entry") in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status, as well as being assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field sy-pfkey.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using the Menu Painter, contains the header of the GUI window. The status bar displays information that can be sent, among other things, during the execution of an ABAP program using the [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) statement. In addition, it contains system information that can be displayed or hidden through an icon on the right-hand side of the bar.

Continue
![Example](exa.gif "Example") [dynpro - GUI Statuses and Function Codes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_gui_status_abexa.htm)