  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Screen%20Layout%20and%20Screen%20Elements%2C%20ABENABAP_DYNPROS_SCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

dynpro - Screen Layout and Screen Elements

The [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") is created in the [Layout Editor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlayout_editor_glosry.htm "Glossary Entry") in the [Screen Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_painter_glosry.htm "Glossary Entry"). The screen layout of the program DEMO\_DYNPRO contains all possible screen elements. Above the screen layout, the menu bar, standard toolbar, title bar, and the application toolbar can be seen. The status bar is located at the bottom.

The following table summarizes the screen elements you can use:

Screen Element

Details

Text fields

Display elements, which cannot be changed either by the user or by the ABAP program.

Input/output fields and templates

Used to display data from the ABAP program or for entering data on the screen. Linked to screen fields.

Dropdown list boxes

Special input/output fields that allow users to choose one entry from a fixed list of possible entries.

Checkbox elements

Special input/output fields that the user can either select (value X) or deselect (value SPACE). Checkbox elements can be linked with function codes.

Radio button elements

Special input/output fields that are combined into groups. Within a radio button group, only a single button can be selected at any one time. When the user selects one button, all of the others are automatically deselected. Radio button elements can be linked with function codes.

Pushbuttons

Elements on the screen that trigger the PAI event of the screen flow logic when chosen by the user. There is a function code attached to each pushbutton, which is passed to the ABAP program when it is chosen.

Group boxes

Pure display elements that group together elements on the screen, such as radio button groups.

Subscreens

Area on the screen in which you can place another screen.

Table controls

Tabular input/output fields.

Tabstrip controls

Areas on the screen in which you can switch between various pages.

Custom controls

Areas on the screen in which you can display controls. Controls are software components of the presentation server.

Status icons

Display elements, indicating the status of the application program.

ok field

Every screen has a twenty-character ok\_code field (also known as the function code field) that is not displayed directly on the screen. User actions that trigger the PAI event also place the corresponding function code into this field, from where it is passed to the ABAP program. You can also use the command field in the standard toolbar to enter the ok field. To be able to use the ok field, you need to assign a name to it.

![Figure](abdoc_screen_elements.gif)

All screen elements have a set of attributes, some of which are set automatically, others of which have to be specified in the Screen Painter. They determine things such as the layout of the screen elements on the screen. You can set the attributes of screen elements in the Screen Painter - either for a single element, or using the element list, which lists all of the elements belonging to the current screen. Some of the attributes that you set statically in the Screen Painter can be overwritten dynamically in the ABAP program.

The following subtopics are covered in this section:

-   [dynpro - Status Icons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_status_icons.htm)
-   [dynpro - Context Menus](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_context_menus.htm)
-   [dynpro - Subscreens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_subscreen.htm)
-   [dynpro - Tabstrip Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_tabstrip.htm)
-   [dynpro - Splitter Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_splitter_control_spcl.htm)
-   [dynpro - Custom Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_custom_controls.htm)
-   [dynpro - Table Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_table_controls.htm)
-   [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_elements_abexas.htm)

Further Information

[Screen Painter (Help Portal Documentation)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/d1801b50454211d189710000e8322d00)

Continue
[dynpro - Status Icons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_status_icons.htm)
[dynpro - Context Menus](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_context_menus.htm)
[dynpro - Subscreens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_subscreen.htm)
[dynpro - Tabstrip Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_tabstrip.htm)
[dynpro - Splitter Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_splitter_control_spcl.htm)
[dynpro - Custom Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_custom_controls.htm)
[dynpro - Table Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_table_controls.htm)
[dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_elements_abexas.htm)