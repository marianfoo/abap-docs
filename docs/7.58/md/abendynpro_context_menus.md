  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Context%20Menus%2C%20ABENDYNPRO_CONTEXT_MENUS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Context Menus

The user interface of a dynpro is defined by a [GUI status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_status_glosry.htm "Glossary Entry") with type dialog status, defined in the [Menu Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmenu_painter_glosry.htm "Glossary Entry"). For each dialog status, the system automatically creates a standard context menu, which the user can display by making a right-click on the screen of the dynpro (or by choosing Shift + F10). The standard context menu contains all of the [function keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_key_glosry.htm "Glossary Entry") with which functions are associated. It therefore makes it easy to access any function code that is available using the keyboard since normally only the most important are assigned to the application toolbar.

Additionally, context-specific menus can be defined for dynpros for any of the following screen elements:

-   Input/output fields
-   Text fields
-   Table controls
-   Group boxes
-   Subscreens

When one of these elements is selected using the right-hand mouse button, a dynamic context menu can be created in the ABAP program. This context menu can contain any function, not just the function keys. Pushbuttons, checkboxes, and radio buttons cannot have their own context menus. They can, however, be given unique function codes.

Class CL\_CTMENU

Context menus are objects of the global class CL\_CTMENU. In the [class library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_library_glosry.htm "Glossary Entry"), this class is one of the Frontend Services components, alongside the [Control Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_framework_glosry.htm "Glossary Entry") classes (see [dynpro - Custom Controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_custom_controls.htm)). It contains methods that allow context menus to be defined dynamically in the local program. Dedicated context menus to be used as templates can be created statically in the Menu Painter.

The most important methods of the class CL\_CTMENU are:

Method

Function

LOAD\_GUI\_STATUS

Appends a context menu predefined statically in Menu Painter to a context menu in the local program.

ADD\_FUNCTION

Appends a single function to a context menu in the local program.

ADD\_MENU

Appends another context menu to the current context menu in the local program.

ADD\_SUBMENU

Appends another context menu to the current context menu in the local program as a cascading menu.

ADD\_SEPARATOR

Adds a separator.

HIDE\_FUNCTIONS

Hides functions

SHOW\_FUNCTIONS

Shows functions

DISABLE\_FUNCTIONS

Deactivates functions

ENABLE\_FUNCTIONS

Activates functions

SET\_DEFAULT\_FUNCTION

Defines a default function, which is highlighted when the menu is displayed.

In the above table, a context menu in the local program means an object of class CL\_CTMENU. CL\_CTMENU is used in different ways depending on the context:

-   If a context menu is used in a control, the need to create objects of the class CL\_CTMENU depends on the wrapper of the class. The relevant functions may already be encapsulated in the control class. Normally, control users do not have to create their own context menus. This ensures that no conflicts occur with the event handler of the control. For more information, see the documentation of the individual control classes.
-   When context menus are defined on dynpros (or on lists), the associated objects in class CL\_CTMENU are created automatically by the runtime environment and not explicitly in the program. References to the object are passed as the parameters of special callback routines in the ABAP program.

Note the following aspects regarding context menus:

Aspect

Details

Context menus for elements on dynpros

To associate a context menu with one of the screen elements above, only the ID context must be entered in the Context Menu field in the element attributes in the Screen Painter. If a context menu is not defined for a particular screen element, it inherits the context menu from the next highest element in the hierarchy. For example, all screen elements in a group box that do not have their own context menu would inherit the context menu of the group box. The highest hierarchy level is the default context menu, containing all of the key settings of the current dialog status.
If a screen element is associated with a context menu (either its own menu or one that it has inherited), a special [subroutine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry") on\_ctmenu\_context is called in the ABAP program when the user clicks the right-hand mouse button (or SHIFT + F10). The [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") event is not triggered. This subroutine (callback routine) is used to define the context menu dynamically and must be programmed in the processing logic. If an appropriate subroutine does not exist, the context menu is not displayed.
The same context menu can be associated with any number of screen elements. They then all work with the same subroutine.

Defining context menus in the processing logic

For each context menu context to be called for an element on a dynpro, a corresponding callback routine must be programmed in the ABAP program: FORM on\_ctmenu\_context USING l\_menu TYPE REF TO cl\_ctmenu. ... ENDFORM.
Each of these routines must have a single USING parameter, typed as a reference variable to the class CL\_CTMENU. For each context menu assigned to an element on a screen, the runtime environment automatically creates an object of the class. When the user requests the context menu by right-clicking with the mouse (or by using SHIFT + F10), the system calls the corresponding subroutine and passes a reference to the corresponding object to the formal parameter.
When the object is passed it is initial and the context menu does not contain any entries. In the subroutine, the methods of the object (as listed above) can now be used to construct the context menu dynamically.

Using predefined context menus

Apart from dialog statuses and dialog box statuses, there is a third kind of GUI status that can be defined in the Menu Painter: context menus. For information about creating context menus in the Menu Painter in ABAP Workbench, see [Creating Context Menus](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/e25d3bb2e06411d295a900a0c94260a5).
Predefined context menus enable groups of statically defined function codes from an ABAP program to be provided in a context-specific form. The method LOAD\_GUI\_STATUS makes it possible to append a context menu from any ABAP program to a context menu in the local program. As a rule, predefined context menus reuse the function codes from a dialog status with the same semantics, but in a context-specific way. Once a predefined context menu is loaded to a context menu in the local program, it can be modified in any way. Other predefined context menus can be appended, functions added or removed, other context menus added.

Defining new context menus

Completely new context-specific menus can be created either by modifying predefined context menus or by constructing menus from new functions.
Any number of new functions can be added to a context menu. When a new function is added, a function text, function code, and function type (for example, E for an unconditional module call) must be specified.
However, it is also possible to add any other context menu objects from the local program. In this case, it is enough just to pass a reference to another context menu. A collection of context menu objects can be created in the program and used and combined as necessary. Submenus can also be constructed. Deeply nested menus can be created by adding submenus to existing submenus.

Style guidelines

When creating context menus, the following rules should be observed:
\- The functions in a context menu should be a subset of the functions in the program. This can be observed by using predefined context menus.
\- Context menus should not contain more than ten entries at a single level.
\- If a context menu is used for a screen element, it should ideally contain all of the functions possible for that element, at the very least the standard commands, like Select, Copy, Cut, and Paste.
\- The order of the functions should be: object-specific commands, copying commands, further commands.
\- Functions that can be selected using the left-hand mouse button should not be duplicated in a context menu.

Displaying the context menu

Once the context menu is defined dynamically in the callback routine, it is displayed on the screen immediately. When the user chooses a function from the menu, the system triggers the PAI event and passes the corresponding function code to the ABAP program in sy-ucomm and the OK field.

Executable Example

[dynpro - Context Menus](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_context_menu_abexa.htm)