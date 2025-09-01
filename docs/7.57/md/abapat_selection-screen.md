  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Processing](javascript:call_link\('abenselection_screen_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT SELECTION-SCREEN, ABAPAT_SELECTION-SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

AT SELECTION-SCREEN

[Short Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

AT SELECTION-SCREEN [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)).

Effect

This statement defines event blocks for different events [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) that are raised by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") during [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and after certain user actions on a displayed selection screen. They are used for selection screen processing in the ABAP program.

AT SELECTION-SCREEN is raised at least twice during actions on selection screens that are included in another selection screen as a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry"): first for the included selection screen itself, and then for the including selection screens.

Hint

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection screen events.

Continue
[AT SELECTION-SCREEN, selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\))