  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT SCREEN, ABAPLOOP_AT_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

LOOP AT SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_screen_shortref.htm)

Syntax

LOOP AT SCREEN INTO wa.
  ...
ENDLOOP.

Effect

The statement LOOP AT SCREEN ... ENDLOOP define a loop around a statement block. For every screen element of the current dynpro to which a [dynpro field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") is assigned, one loop pass is executed. wa can be specified as the following:

-   an existing work area of the data type [SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen.htm) from the ABAP Dictionary,
-   an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a work area of the type SCREEN is declared.

After the statement LOOP, the work area contains the properties of the screen element in question.

When a [table control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstep_loop_glosry.htm "Glossary Entry") is processed (that is, within a [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry")), the current properties are determined for its screen elements in the current line or group. Outside of the processing of a table control or step loop, the statically predefined properties of all lines or groups are determined for its screen elements.

Hints

-   The statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) in a loop across an internal table, where a system table is used instead of an internal table.
-   In particular, the statement LOOP AT SCREEN can be used for selection screens during [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm).
-   This statement also has an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_at_screen_obsolete.htm), which works with an obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm).
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after INTO.

Executable Example

[Dynpros, Dynamic Screen Modifications](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_mod_simple_abexa.htm)

Continue
[dynpro - The Structure SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen.htm)
[MODIFY SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm)
![Example](exa.gif "Example") [dynpro - Dynamic Screen Modification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_mod_simple_abexa.htm)