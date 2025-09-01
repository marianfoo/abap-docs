  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AT%20SELECTION-SCREEN%2C%20ABAPAT_SELECTION-SCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AT SELECTION-SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_shortref.htm)

Syntax

AT SELECTION-SCREEN [selscreen\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm).

Effect

This statement defines event blocks for different events [selscreen\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm) that are raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") and after certain user actions on a displayed selection screen. They are used for selection screen processing in the ABAP program.

AT SELECTION-SCREEN is raised at least twice during actions on selection screens that are included in another selection screen as a [subscreen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_glosry.htm "Glossary Entry"): first for the included selection screen itself, and then for the including selection screens.

Hint

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection screen events.

Continue
[AT SELECTION-SCREEN, selscreen\_event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)