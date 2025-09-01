  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm) → 

AT SELECTION-SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_shortref.htm)

Syntax

AT SELECTION-SCREEN [selscreen\_event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm).

Effect

This statement defines event blocks for different events [selscreen\_event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm) that are triggered by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice for actions on selection screens included as a [subscreen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubscreen_glosry.htm "Glossary Entry") on another selection screen: First for the included selection screen and then the for selection screen or screens to be included.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)