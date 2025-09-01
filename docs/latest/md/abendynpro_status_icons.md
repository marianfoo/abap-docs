  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Elements](javascript:call_link\('abenabap_dynpro_elements.htm'\)) →  [dynpro - Screen Layout and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Status%20Icons%2C%20ABENDYNPRO_STATUS_ICONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Status Icons

Status icons are [screen elements](javascript:call_link\('abenscreen_element_glosry.htm'\) "Glossary Entry") that you can use to represent the state of a program graphically. In principle, you can use any of the icons available in the [SAP GUI](javascript:call_link\('abensap_gui_glosry.htm'\) "Glossary Entry"). However, the choice should be limited to those icons specifically for this purpose.

You can only create status icons in the graphical [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). When you create one, you assign a name and a screen field to it. This screen field is known as a status field. The visible length of the screen field determines the amount of space that the icon can use on the screen. Apart from the icon itself, you can also insert text in the field. The actual length (defLg) of the status field must be long enough for the internal representation of the icon, plus any text and tooltip text that you specify. When you create the status icon in the Screen Painter, a placeholder appears on the screen. You must specify the icon itself, its text and tooltip text in the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") event of your ABAP program.

To define the icon in your ABAP program, you must create a field with the same name as the status field on the screen and the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") type ICON\_TEXT (alternatively, you can use ICONS-TEXT, i. e. the TEXT component of the DDIC structure ICONS). You can then fill this field with the required technical information in the PBO event. When the screen is displayed, the information is transferred to the status field and the icon appears.

To fill the field in your ABAP program, use the function module ICON\_CREATE. It has the following import parameters:

-   NAME
    
    The name of the required icon. These are listed in the include program <ICON>, or the corresponding input help in the Screen Painter or Menu Painter.
    
-   TEXT
    
    This parameter allows you to enter a text that will appear after the icon on the screen.
    
-   INFO
    
    In this parameter, you can specify an info text, which appears as tooltip on the screen.
    
-   ADD\_STDINF
    
    This flag switches the tooltip display on or off.
    

The function module converts these parameters into a single string, which is returned in the export parameter RESULT. When you assign the result parameter to the status field, it contains all the information required to display the status icon.

Executable Example

[dynpro - Status Icons](javascript:call_link\('abendynpro_status_icons_abexa.htm'\))