  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN - screen\_elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_layout.htm) → 

SELECTION-SCREEN - FUNCTION KEY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_shortref.htm)

Syntax

SELECTION-SCREEN FUNCTION KEY n *\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm)*\]*.

Effect

In the GUI status of the [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") set by the system, the [application toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_toolbar_glosry.htm "Glossary Entry") contains five inactive [pushbuttons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpushbutton_glosry.htm "Glossary Entry"), to which the function codes "FC01" to "FC05" are assigned. This statement activates the pushbutton of the function code "FC0n", where a value between 1 and 5 must be entered for n.

To enable use of the pushbuttons, the statement [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) can be used to declare an [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") of the structure SSCRFIELDS from ABAP Dictionary.

If a text is assigned to the component functxt\_0n of the interface area sscrfields before the selection screen is called, this text is displayed on the relevant pushbutton. Otherwise, the pushbutton does not contain any text.

When the user chooses a pushbutton in the application toolbar, the runtime environment triggers the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm) and the associated function code is passed to the component comm of the interface work area sscrfields.

The additions [ldb\_additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Notes

-   To assign icons, a [tooltip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquick_info_glosry.htm "Glossary Entry"), and appropriate text to the pushbuttons, a data object can be defined of the structured type SMP\_DYNTXT in ABAP Dictionary. The ID of the icon, a tooltip, and the associated text must be assigned to the components of this data object. The content of the whole structure must then be assigned to the component functxt\_0n of the interface work area sscrfields.
    
-   Once the event block in AT SELECTION-SCREEN has been processed, the system usually returns to displaying the selection screen. To exit [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") and continue executing the program, either Execute or Cancel must be chosen. This means pushbuttons on selection screens are intended primarily for use for dynamic modifications to the selection screen rather than to control the program.
    
-   If the content of the component ucomm is set to a function code used in the GUI status during selection screen processing, the [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") is modified accordingly.
    
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").
    

Executable Example

[Selection Screens, Pushbuttons in the Application Toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_pb_bar_abexa.htm)

Continue
![Example](exa.gif "Example") [Selection Screens, Pushbuttons in the Application Toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_pb_bar_abexa.htm)