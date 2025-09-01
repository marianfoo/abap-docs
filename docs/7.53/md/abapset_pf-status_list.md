  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Displaying Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlists_displayed.htm) → 

SET PF-STATUS - List

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_shortref.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Extras:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)
[3\. ... IMMEDIATELY](#!ABAP_ADDITION_3@3@)

Effect

In list processing, this statement sets the GUI status specified in status for the display window of the current list, and all subsequent list levels until the next SET PF-STATUS statement. The statement mostly has the same function as for [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_dynpro.htm).

Unlike the [screen layouts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of dynpros, however, every list level is automatically associated with the GUI status that is set for it. If the system returns from displaying a higher list level to a lower list level, the latter is displayed again with the GUI status that was set for it.

If the status of the data object is initial, the standard list status is set and the additions OF PROGRAM and EXCLUDING are ignored. The [standard list status](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") contains predefined list-specific functions whose functions are handled by the runtime environment when a screen list is displayed, and do produce calls of event blocks in the ABAP program. If event blocks are also defined with AT LINE-SELECTION or AT PFnn, further function keys are automatically assigned function codes in the standard list status:

-   If [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_line-selection.htm) is used, the F2 key and the double-click function of the mouse is assigned the function code "PICK" and the function text Select. This function is then also automatically displayed in the [application toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_toolbar_glosry.htm "Glossary Entry").
    
-   If [AT PFnn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_pfnn.htm) is used, all the Fnn functions of the keyboard that are not handled by the runtime environment are assigned the function codes "PFnn", where "nn" is a number between 01 and 24.
    

If the standard list status is set, sy-pfkey is assigned the value "STLI".

Note

When setting the GUI status for the [list dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_dynpro_glosry.htm "Glossary Entry"), it is best to set a GUI status for which a list status has been included as a template status in [Menu Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmenu_painter_glosry.htm "Glossary Entry"). Including this type of template status passes the list-specific functions of the standard list status to a self-defined GUI status.

Addition 1

... OF PROGRAM prog

Addition 2

... EXCLUDING fcode

Effect

As for [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_pf-status_dynpro.htm).

Addition 3

... IMMEDIATELY

Effect

The addition IMMEDIATELY only has an effect if it is used when creating a details list, that is, within an event block following an interactive list event. The effect of this addition is that SET PF-STATUS has an effect on the current displayed list (sy-listi) and all subsequent list levels, and not only starting from the current details list (sy-lsind).

Example

In the following program segment, it is only possible to select a single line from the basic list by double-clicking the mouse or using the function key F2. This function is then deactivated for the basic list and all subsequent list levels.

START-OF-SELECTION.
  SET PF-STATUS 'BASIC'.
  WRITE / \`Pick me!\`.
AT LINE-SELECTION.
  SET PF-STATUS 'BASIC' EXCLUDING 'PICK' IMMEDIATELY.
  WRITE / \`Don't pick me!\`.