  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

LOOP AT SCREEN

[Short Reference](javascript:call_link\('abaploop_at_screen_shortref.htm'\))

Syntax

LOOP AT SCREEN INTO wa.
  ...
ENDLOOP.

Effect

The statement LOOP AT SCREEN ... ENDLOOP define a loop around a statement block. For every screen element of the current dynpro to which a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is assigned, one loop pass is executed. wa can be specified as the following:

-   an existing work area of the data type [SCREEN](javascript:call_link\('abenscreen.htm'\)) from the ABAP Dictionary,
-   an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a work area of the type SCREEN is declared.

After the statement LOOP, the work area contains the properties of the screen element in question.

When a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or a [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") is processed (that is, within a [LOOP](javascript:call_link\('dynploop.htm'\)) of the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry")), the current properties are determined for its screen elements in the current line or group. Outside of the processing of a table control or step loop, the statically predefined properties of all lines or groups are determined for its screen elements.

Hints

-   The statement LOOP AT SCREEN behaves like the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) in a loop across an internal table, where a system table is used instead of an internal table.
-   In particular, the statement LOOP AT SCREEN can be used for selection screens during [selection screen processing](javascript:call_link\('abenselection_screen_events.htm'\)).
-   This statement also has an [obsolete short form](javascript:call_link\('abenloop_at_screen_obsolete.htm'\)), which works with an obsolete built-in structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)).
-   The obsolete built-in structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) should not be specified explicitly after INTO.

Executable Example

[Dynpros, Dynamic Screen Modifications](javascript:call_link\('abendynpro_mod_simple_abexa.htm'\))

Continue
[dynpro - The Structure SCREEN](javascript:call_link\('abenscreen.htm'\))
[MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\))
![Example](exa.gif "Example") [dynpro - Dynamic Screen Modification](javascript:call_link\('abendynpro_mod_simple_abexa.htm'\))