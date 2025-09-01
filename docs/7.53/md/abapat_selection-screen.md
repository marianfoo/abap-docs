  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) → 

AT SELECTION-SCREEN

[Quick Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

AT SELECTION-SCREEN [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)).

Effect

This statement defines event blocks for different events [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) that are triggered by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice during actions on selection screens that are linked into another selection screen as a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") - first for the linked selection screen itself, and then for the linking selection screens.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\))