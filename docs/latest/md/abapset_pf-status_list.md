---
title: "SET PF-STATUS, List"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_shortref.htm) Syntax SET PF-STATUS status OF PROGRAM prog EXCLUDING fcode IMMEDIATELY. Additions: 1. ... OF PROGRAM prog(#!ABAP_ADDITION_1@1@) 2. ... EXCLUDING fcode(#!AB
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_list.htm"
abapFile: "abapset_pf-status_list.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapset", "status", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_list.htm) →  [Lists - Display](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlists_displayed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20PF-STATUS%2C%20List%2C%20ABAPSET_PF-STATUS_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET PF-STATUS, List

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_shortref.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Additions:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... EXCLUDING fcode](#!ABAP_ADDITION_2@2@)
[3\. ... IMMEDIATELY](#!ABAP_ADDITION_3@3@)

Effect

In list processing, this statement sets the GUI status specified in status for the display window of the current list, and all subsequent list levels until the next SET PF-STATUS statement. The statement mostly has the same function as for [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_dynpro.htm).

Unlike the [screen layouts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") of dynpros, however, every list level is automatically linked with the GUI status that is set for it. If the system returns from displaying a higher list level to a lower list level, the latter is displayed again with the GUI status that was set for it.

If the status of the data object is initial, the standard list status is set, and the additions OF PROGRAM and EXCLUDING are ignored. The [standard list status](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") contains predefined list-specific functions whose functions codes are handled by the runtime framework when a screen list is displayed, and produce calls of event blocks in the ABAP program. If event blocks are also defined with AT LINE-SELECTION or AT PFnn, further function keys are automatically assigned function codes in the standard list status:

-   If [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_line-selection.htm) is used, the F2 key and the double-click function of the mouse is assigned the function code PICK and the function text Select. This function is then also automatically displayed in the [application toolbar](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenapplication_toolbar_glosry.htm "Glossary Entry").
-   If [AT PFnn](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_pfnn.htm) is used, all the Fnn functions of the keyboard that are not handled by the runtime framework are assigned the function codes PFnn, where nn is a number between 01 and 24.

If the standard list status is set, sy-pfkey is assigned the value STLI.

Hint

When setting the GUI status for the [list dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_dynpro_glosry.htm "Glossary Entry"), it is best to set a GUI status for which a list status has been included as a template status in the [Menu Painter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmenu_painter_glosry.htm "Glossary Entry"). Including this type of template status passes the list-specific functions of the standard list status to a user-defined GUI status.

Addition 1   

... OF PROGRAM prog

Addition 2   

... EXCLUDING fcode

Effect

As for [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_dynpro.htm).

Addition 3   

... IMMEDIATELY

Effect

The addition IMMEDIATELY only has an effect if it is used when creating a details list, that is, within an event block following an interactive list event. The effect of this addition is that SET PF-STATUS affects the current displayed list (sy-listi) and all subsequent list levels, and not only starting from the current details list (sy-lsind).

Example

In the following program segment, it is only possible to select a single line from the basic list by double-clicking the mouse or using the function key F2. This function is then deactivated for the basic list and all subsequent list levels.

START-OF-SELECTION.
  SET PF-STATUS 'BASIC'.
  WRITE / \`Pick me!\`.
AT LINE-SELECTION.
  SET PF-STATUS 'BASIC' EXCLUDING 'PICK' IMMEDIATELY.
  WRITE / \`Don't pick me!\`.