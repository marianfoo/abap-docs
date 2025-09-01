  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen.htm) → 

MODIFY SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_screen_shortref.htm)

Syntax

MODIFY SCREEN FROM wa.

Effect

This statement can be used in the statement block after [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen.htm) only and makes sense only during [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") processing. A work area wa of the type [SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen.htm) from ABAP Dictionary must be specified after FROM. The statement modifies the attributes of the current screen element with the values from the work area.

The name component must contain the name of the current screen element, otherwise the statement is not executed. Apart from the components group1 through group4 and length, all other components of wa have either the value 0 or 1. The value 0 deactivates the corresponding field property; the value 1 activates it. In addition, [required](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen.htm) and [value\_help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen.htm) can also have the value 2:

If MODIFY SCREEN is executed during PBO processing, the modified attributes for the display of the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") affect the current [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") after PBO processing. The attributes of the screen elements of the dynpro are reset to their static attributes at the start of each PBO processing, so that the execution of MODIFY SCREEN during [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") processing does not affect the display of the following screen.

The active component

The active component is used to set the input, output, and invisible components at the same time. When PBO processing starts, the component active is always 1. If active is set to 0 by MODIFY SCREEN, input and output are set to 0 and invisible is set to 1. Any other values in input, output, and invisible are ignored. Conversely, setting input and output to 0 and invisible to 1 automatically sets active to 0 and any other values in active are ignored.

Special Cases

The following special cases should be noted:

-   If the current dynpro field with the property output field only is defined in Screen Painter, it cannot be set to ready for input and the assignment of the value 1 to the component input is ignored.
    
-   If the current dynpro field with the property required is defined in Screen Painter or if the component required is set to 1, the component input should stay as 1. Otherwise, setting input to 0 would cancel the required property.
    

Modifications in Table Controls and Step Loops

When processing a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the changes affect the current row of the table control or the current step loop group. Before the processing of a table control, the change to the attributes of a screen element that is part of a row in the table control does not affect the table control, since the values are passed from the structure created using [CONTROLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcontrols.htm). Before a step loop is processed, the change to the attributes of a screen elements that is part of a step loop group affects all groups in the step loop.

Modifications to Tabstrip Controls

If the active component for a [tab title](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentab_title_glosry.htm "Glossary Entry") of a [tabstrip control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentabstrip_control_glosry.htm "Glossary Entry") is set to 0, the whole tabstrip page is hidden.

Notes

-   More specifically, the statement MODIFY SCREEN can be used for selection screens during the selection screen event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm) in [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm).
    
-   This statement has an [obsolete short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodify_screen_obsolete.htm) that works with the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm).
    
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after FROM.
    

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