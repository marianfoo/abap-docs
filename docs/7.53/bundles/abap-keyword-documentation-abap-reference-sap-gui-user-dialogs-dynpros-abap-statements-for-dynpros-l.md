# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Dynpros / ABAP Statements for Dynpros / LOOP AT SCREEN

Included pages: 4


### abaploop_at_screen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

LOOP AT SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen_shortref.htm)

Syntax

LOOP AT SCREEN INTO wa.
  ...
ENDLOOP.

Effect

The statements LOOP AT SCREEN ... ENDLOOP define a loop around a statement block. For every screen element of the current dynpro to which a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") is assigned, one loop pass is executed. wa can be specified as:

-   an existing work area of the data type [SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen.htm) from ABAP Dictionary,
    
-   an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), where a work area of the type SCREEN is declared.
    

After the statement LOOP, the work area contains the properties of the screen element in question.

When a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry") is processed (that is, within a [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry")), the current properties are determined for its screen elements in the current row or group. Outside of the processing of a table control or step loop, the statically predefined properties of all rows or groups are determined for its screen elements.

Notes

-   The statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) in a loop across an internal table, where a system table is used instead of an internal table.
    
-   In particular, the statement LOOP AT SCREEN can be used for selection screens during [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm).
    
-   This statement also has an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_at_screen_obsolete.htm), which works with an obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm).
    
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after INTO.
    

Executable Example

[Dynpros, Dynamic Screen Modifications](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_mod_simple_abexa.htm)

Continue
[The Structure SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen.htm)
[MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm)
![Example](exa.gif "Example") [Dynpros, Dynamic Screen Modifications](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_mod_simple_abexa.htm)


### abenscreen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) → 

The Structure SCREEN

Most components of the structure SCREEN from ABAP Dictionary correspond to the attributes of a screen element on a dynpro.

Data objects with the data type SCREEN can be used as a work area in the following ABAP statements:

-   in [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm), to read the screen element properties of a dynpro,

-   in [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm), to modify the screen element properties of a dynpro.

The following table shows the components of SCREEN, their assignment to the field properties in the dynpro, and the possible values.

Component

Length

Type

Attribute

Value

Meaning

name

132

c

Name

name

Name

group1

3

c

Gruppe1

id1

Modification group

group2

3

c

Group2

id2

Modification group

group3

3

c

Group3

id3

Modification group

group4

3

c

Group4

id4

Modification group

required

1

c

Mandatory field

0, 1, 2

Mandatory or recommended field

input

1

c

Input

0, 1

Input-ready field

output

1

c

Output

0, 1

Display field

intensified

1

c

Light

0, 1

Highlighted field

invisible

1

c

Invisible

0, 1

Invisible element

length

1

x

VisLg

...

Field length

active

1

c

\-

0, 1

Active field

display\_3d

1

c

Two-dimensional

0, 1

Frame

value\_help

1

c

Input help

0, 1, 2

Input help button

request

1

c

\-

0, 1

Input exists

values\_in\_combo

1

c

Dropdown list box

0, 1

Input help exists

The component name contains the name name of the current dynpro field in the loop. The components group1 to group4 can contain three figure identifiers id1 to id4, which were assigned to the current screen element when it was defined. These identifiers allow the screen elements to be grouped together in up to four different [modification groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodification_group_glosry.htm "Glossary Entry"). These can be queried in logical expressions in the statement block after [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) to process multiple screen elements in the same way.

The remaining components of the structure SCREEN (apart from request) show the display properties of the current screen element. With the exception of length, they can have the value 0 or 1, where content 1 means "active" and content 0 means "inactive". In addition, required and value\_help can also have the value 2:

-   With required, value 2 means a recommended field which is displayed on the screen in the same way as a mandatory field (value 1) but a check is not performed.

-   With value\_help, value 2 means that the input help button is always displayed, whereas value 1 means that the button is only displayed if the cursor is positioned on the dynpro field.

Except for active and request, all components of the structure SCREEN correspond directly to an attribute of the current screen element.

-   The component active does not have a corresponding attribute. A change to its content using [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm) influences the attributes input, output and invisible, and correspondingly the components input, output and invisible of the structure SCREEN.

-   The component request has the following meaning:

-   It is set to the value 1 by the runtime environment if the event PAI occurs, provided that user input exists has been entered in the dynpro field.

-   Using [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm), its content can be set to the value 1 at PBO time to simulate user input.

If the component request has the value 1 for a dynpro field at PAI time, those dialog modules are executed that are called for this field using the additions ON REQUEST and ON CHAIN-REQUEST after the dynpro statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield_module.htm).


### abapmodify_screen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) → 

MODIFY SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen_shortref.htm)

Syntax

MODIFY SCREEN FROM wa.

Effect

This statement can be used in the statement block after [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) only and makes sense only during [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") processing. A work area wa of the type [SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen.htm) from ABAP Dictionary must be specified after FROM. The statement modifies the attributes of the current screen element with the values from the work area.

The name component must contain the name of the current screen element, otherwise the statement is not executed. Apart from the components group1 through group4 and length, all other components of wa have either the value 0 or 1. The value 0 deactivates the corresponding field property; the value 1 activates it. In addition, [required](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen.htm) and [value\_help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen.htm) can also have the value 2:

If MODIFY SCREEN is executed during PBO processing, the modified attributes for the display of the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") affect the current [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") after PBO processing. The attributes of the screen elements of the dynpro are reset to their static attributes at the start of each PBO processing, so that the execution of MODIFY SCREEN during [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing does not affect the display of the following screen.

The active component

The active component is used to set the input, output, and invisible components at the same time. When PBO processing starts, the component active is always 1. If active is set to 0 by MODIFY SCREEN, input and output are set to 0 and invisible is set to 1. Any other values in input, output, and invisible are ignored. Conversely, setting input and output to 0 and invisible to 1 automatically sets active to 0 and any other values in active are ignored.

Special Cases

The following special cases should be noted:

-   If the current dynpro field with the property output field only is defined in Screen Painter, it cannot be set to ready for input and the assignment of the value 1 to the component input is ignored.
    
-   If the current dynpro field with the property required is defined in Screen Painter or if the component required is set to 1, the component input should stay as 1. Otherwise, setting input to 0 would cancel the required property.
    

Modifications in Table Controls and Step Loops

When processing a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the changes affect the current row of the table control or the current step loop group. Before the processing of a table control, the change to the attributes of a screen element that is part of a row in the table control does not affect the table control, since the values are passed from the structure created using [CONTROLS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcontrols.htm). Before a step loop is processed, the change to the attributes of a screen elements that is part of a step loop group affects all groups in the step loop.

Modifications to Tabstrip Controls

If the active component for a [tab title](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentab_title_glosry.htm "Glossary Entry") of a [tabstrip control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentabstrip_control_glosry.htm "Glossary Entry") is set to 0, the whole tabstrip page is hidden.

Notes

-   More specifically, the statement MODIFY SCREEN can be used for selection screens during the selection screen event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) in [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm).
    
-   This statement has an [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodify_screen_obsolete.htm) that works with the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm).
    
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after FROM.
    

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


### abendynpro_mod_simple_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) →  [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) → 

Dynpros, Dynamic Screen Modifications

This example demonstrates how to modify dynpro fields at runtime.

Source Code

REPORT demo\_dynpro\_modify\_simple .
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA flag(1) TYPE c.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      IF flag = ' '.
        screen\_wa-input = '0'.
      ELSEIF flag = 'X'.
        screen\_wa-input = '1'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE cancel.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'TOGGLE'.
      IF flag = ' '.
        flag = 'X'.
      ELSEIF flag = 'X'.
        flag = ' '.
      ENDIF.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input and output fields are from the structure DEMO\_CONN in ABAP Dictionary. The bottom four input and output fields are assigned to the modification group MOD. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

In GUI status SCREEN\_100, the function code TOGGLE is associated with a pushbutton. When the program is called, the four input/output fields at the bottom are not displayed as ready for input, because the variable flag initially contains a blank. The user can make the fields ready for input or not by using Display/Change.

The program DEMO\_DYNPRO\_MODIFY\_SCREEN demonstrates further dynamic screen modifications.
