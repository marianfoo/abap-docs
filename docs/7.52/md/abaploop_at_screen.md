---
title: "LOOP AT SCREEN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen_shortref.htm) Syntax LOOP AT SCREEN INTO wa. ... ENDLOOP. Effect The statements LOOP AT SCREEN ... ENDLOOP define a loop around a statement block. For every screen element of the current dynpro to which a
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen.htm"
abapFile: "abaploop_at_screen.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "internal-table", "abaploop", "screen"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_abap_statements.htm) → 

LOOP AT SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_screen_shortref.htm)

Syntax

LOOP AT SCREEN INTO wa.
  ...
ENDLOOP.

Effect

The statements LOOP AT SCREEN ... ENDLOOP define a loop around a statement block. For every screen element of the current dynpro to which a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") is assigned, one loop pass is executed. wa can be specified as:

-   an existing work area of the data type [SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen.htm) from ABAP Dictionary,
    
-   an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a work area of the type SCREEN is declared.
    

After the statement LOOP, the work area contains the properties of the screen element in question.

When a [table control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_control_glosry.htm "Glossary Entry") or a [step loop](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstep_loop_glosry.htm "Glossary Entry") is processed (that is, within a [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynploop.htm) of the [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry")), the current properties are determined for its screen elements in the current row or group. Outside of the processing of a table control or step loop, the statically predefined properties of all rows or groups are determined for its screen elements.

Notes

-   The statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) in a loop across an internal table, where a system table is used instead of an internal table.
    
-   In particular, the statement LOOP AT SCREEN can be used for selection screens during [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm).
    
-   This statement also has an [obsolete short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_at_screen_obsolete.htm), which works with an obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm).
    
-   The obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_structure_obsolete.htm) should not be specified explicitly after INTO.
    

Executable Example

[Dynpros, Dynamic Screen Modifications](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_mod_simple_abexa.htm)

Continue
[The Structure SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen.htm)
[MODIFY SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_screen.htm)
![Example](exa.gif "Example") [Screens, Dynamic Screen Modification](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_mod_simple_abexa.htm)