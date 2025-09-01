  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20FUNCTION%20KEY%2C%20ABAPSELECTION-SCREEN_FUNCTIONKEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, FUNCTION KEY

[Short Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

SELECTION-SCREEN FUNCTION KEY n *\[*[ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]*.

Effect

In the GUI status of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") set by the system, the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry") contains five inactive [pushbuttons](javascript:call_link\('abenpushbutton_glosry.htm'\) "Glossary Entry"), to which the function codes FC01 to FC05 are assigned. This statement activates the pushbutton of the function code FC0n, where a value between 1 and 5 must be specified for n.

To enable use of the pushbuttons, the statement [TABLES](javascript:call_link\('abaptables.htm'\)) can be used to declare an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") of the structure SSCRFIELDS from the ABAP Dictionary.

If a text is assigned to the component functxt\_0n of the interface area sscrfields before the selection screen is called, this text is displayed on the corresponding pushbutton. Otherwise, the pushbutton does not contain any text.

When the user chooses a pushbutton in the application toolbar, the runtime framework raises the event [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) and the associated function code is passed to the component ucomm of the interface work area sscrfields.

The [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Hints

-   To assign icons, a [tooltip](javascript:call_link\('abentool_tip_glosry.htm'\) "Glossary Entry"), and appropriate text to the pushbuttons, a data object of the structured type SMP\_DYNTXT can be defined in the ABAP Dictionary. The ID of the icon, a tooltip, and the associated text must be assigned to the components of this data object. The content of the entire structure must then be assigned to the component functxt\_0n of the interface work area sscrfields.
-   Once the event block in AT SELECTION-SCREEN has been processed, the system usually returns to displaying the selection screen. To exit [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") and continue executing the program, either Execute or Cancel must be chosen. This means pushbuttons on selection screens are intended primarily for use for dynamic modifications to the selection screen rather than to control the program.
-   If the content of the component ucomm is set to a function code used in the GUI status during selection screen processing, the [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry") is modified accordingly.
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Executable Example

[Selection Screens, Pushbuttons in the Application Toolbar](javascript:call_link\('abenselscreen_pb_bar_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Selection Screens -Pushbuttons in the Toolbar](javascript:call_link\('abenselscreen_pb_bar_abexa.htm'\))