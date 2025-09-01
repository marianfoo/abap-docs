---
title: "MODIFY SCREEN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_screen_shortref.htm) Syntax MODIFY SCREEN FROM wa. Effect This statement can be used in the statement block after LOOP AT SCREEN(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_screen.htm"
abapFile: "abapmodify_screen.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "abapmodify", "screen"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20SCREEN%2C%20ABAPMODIFY_SCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_screen_shortref.htm)

Syntax

MODIFY SCREEN FROM wa.

Effect

This statement can be used in the statement block after [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm) only and makes sense only during [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") processing. A work area wa of the type [SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen.htm) from the ABAP Dictionary must be specified after FROM. The statement modifies the properties of the current screen element with the values from the work area.

The name component must contain the name of the current screen element, otherwise the statement is not executed. Apart from the components group1 through group4 and length, all other components of wa have either the value 0 or 1. The value 0 deactivates the corresponding field property and the value 1 activates it. In addition, [required](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen.htm) and [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen.htm) can also have the value 2:

If MODIFY SCREEN is executed during PBO processing, the modified properties for the display of the [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") affect the current [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") after PBO processing. The properties of the screen elements of the dynpro are reset to their static properties at the start of each PBO processing, so that the execution of MODIFY SCREEN during [PAI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry") processing does not affect the display of the following screen layout.

The active component

The active component is used to set the input, output, and invisible components at the same time. When PBO processing starts, the component active is always 1. If active is set to 0 by MODIFY SCREEN, input and output are set to 0 and invisible is set to 1. Any other values in input, output, and invisible are ignored. Conversely, setting input and output to 0 and invisible to 1 automatically sets active to 0 and any other values in active are ignored.

Special Cases

The following special cases should be noted:

-   If the current dynpro field with the property output field only is defined in Screen Painter, it cannot be set to ready for input and the assignment of the value 1 to the component input is ignored.
-   If the current dynpro field with the property required is defined in Screen Painter or if the component required is set to 1, the component input should stay as 1. Otherwise, setting input to 0 would cancel the required property.

Modifications in Table Controls and Step Loops

When processing a [table control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the changes affect the current line of the table control or the current step loop group. Before the processing of a table control, the change to the properties of a screen element that is part of a line in the table control does not affect the table control, since the values are passed from the structure created using [CONTROLS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontrols.htm). Before a step loop is processed, the change to the properties of a screen elements that is part of a step loop group affects all groups in the step loop.

Modifications to Tabstrip Controls

If the active component for a [tab title](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentab_title_glosry.htm "Glossary Entry") of a [tabstrip control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentabstrip_control_glosry.htm "Glossary Entry") is set to 0, the whole tabstrip page is hidden.

Hints

-   More specifically, the statement MODIFY SCREEN can be used for selection screens during the selection screen event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm) in [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_events.htm).
-   This statement has an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodify_screen_obsolete.htm) that works with the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_structure_obsolete.htm).
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after FROM.

Example

In the following PBO module, an input field called val is made mandatory and converted to display in the foreground.

MODULE modify\_0100 OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-name = 'VAL'.
      screen\_wa-required    = '1'.
      screen\_wa-intensified = '1'.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.

Executable Example

The program DEMO\_DYNPRO\_MODIFY\_SCREEN demonstrates all possible dynamic screen modifications.