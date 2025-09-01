  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Elements](javascript:call_link\('abenabap_dynpro_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20User%20Interface%2C%20ABENABAP_DYNPROS_GUI%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - User Interface

For the execution of user dialogs, input and output services are required that can be accessed through a [user interface](javascript:call_link\('abenuser_interface_glosry.htm'\) "Glossary Entry") (UI). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the [GUI window](javascript:call_link\('abengui_window_glosry.htm'\) "Glossary Entry") on the screen, this is a graphical user interface ([GUI](javascript:call_link\('abengui_glosry.htm'\) "Glossary Entry")). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") is [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"), which is installed as a component of the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry") on the presentation servers. It contains all control elements that are required for the execution of dialogs between the user and the program. The control elements of the SAP GUI are represented schematically in the following diagram:

![Figure](abdoc_gui.gif)

On the screen, SAP GUI presents the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a dynpro in a GUI window. The screen layout can contain screen elements for displaying content or for receiving user actions. The screen layout and its screen elements are processed using the [Layout Editor](javascript:call_link\('abenlayout_editor_glosry.htm'\) "Glossary Entry") in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status, as well as being assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field sy-pfkey.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using the Menu Painter, contains the header of the GUI window. The status bar displays information that can be sent, among other things, during the execution of an ABAP program using the [MESSAGE](javascript:call_link\('abapmessage.htm'\)) statement. In addition, it contains system information that can be displayed or hidden through an icon on the right-hand side of the bar.

Continue
![Example](exa.gif "Example") [dynpro - GUI Statuses and Function Codes](javascript:call_link\('abendynpro_gui_status_abexa.htm'\))