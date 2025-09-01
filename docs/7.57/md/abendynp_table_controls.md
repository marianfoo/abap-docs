---
title: "Continue"
description: |
  dynpro - LOOP, WITH CONTROL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm) dynpro - Examples of Table Controls(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_control_abexas.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_table_controls.htm"
abapFile: "abendynp_table_controls.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "abendynp", "table", "controls"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_dynpro_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Table Controls, ABENDYNP_TABLE_CONTROLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

dynpro - Table Controls

Table controls are named screen elements used to display and process table-like data on [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"). In a table control, a maximum of 255 screen elements is summarized in a table control line, which can be repeated multiple times within the table control on the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry"). The fields of a line must be created only once as [dynpro fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") in the dynpro and only once as global data objects in the ABAP program.

Table controls provide an area on the screen for editing the displayed table control lines which offers column headers, selection of lines and columns, horizontal and vertical scrolling using scroll bars, the definition of lead columns, and persistence of the current settings (see DEMO\_DYNPRO). Parts of the user actions in table controls are processed on the presentation server. Vertical scrolling, saving of settings, and changes of screen size (if the resizing properties have been set accordingly when defining the table controls) raise the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry").

A column of the table controls can be defined as marking column, in which the screen element is displayed like a pushbutton and handled like a checkbox (see the first column of the table control in DEMO\_DYNPRO). A checked selection key sets the content of the associated dynpro field to X and an unchecked key sets the content to blank. The state of the selection key is transported at PAI time to an identically named data object in the ABAP program and, at [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") time, the marker can be set using the content of the data object.

Table controls encapsulate [step loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstep_loop_glosry.htm "Glossary Entry") and make their standalone use obsolete. The processing of table controls in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") is based on the step loop technique using the statement [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm). Unlike the processing of independent step loops, the loops of the dynpro flow logic are associated using the addition WITH CONTROL with the table controls of the dynpros during the processing of table controls.

In the ABAP program, table controls must be declared using the statement [CONTROLS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontrols.htm), where a special structure for handling of table controls is created.

Continue
[dynpro - LOOP, WITH CONTROL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm)
[dynpro - Examples of Table Controls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_control_abexas.htm)