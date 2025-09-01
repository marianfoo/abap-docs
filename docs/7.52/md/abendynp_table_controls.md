  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) → 

Table Controls

Table Controls are labeled screen elements to display and process table-type data on [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). In a table control, a maximum of 255 screen elements is summarized in a table control row, which can be repeated multiple times within the table control on the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). The fields of a row have to be created only once as [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") in the dynpro and as global data objects in the ABAP program. Table controls provide an area on the screen for editing the displayed table control rows which offers column headers, marking of rows and columns, horizontal and vertical scrolling with scroll bars, the definition of lead columns and saving of the current settings (see DEMO\_DYNPRO). Parts of the user actions in table controls are processed on the presentation server. Vertical scrolling, saving of settings, and changes of screen size (if the resizing properties have been set accordingly when defining the table controls) trigger the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry").

A column of the table controls can be defined as marking column , in which the screen element is displayed like a pushbutton and treated like a checkbox (see the first column of the table control in DEMO\_DYNPRO). A checked selection key sets the content of the assigned dynpro-field to "X", an unchecked key sets the content to " ". The state of the selection key is transported at the event PAI to a data object of the same name in the ABAP-program and at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"), you can set the marker via the content of the data object.

Table Controls encapsulate [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") and make their independent use obsolete. The processing of table controls in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") accordingly bases on the step loop technique using the statement [LOOP](javascript:call_link\('dynploop.htm'\)). In contrary to the processing of independent step loops, the loops of the dynpro flow logic are linked with the addition WITH CONTROL with the table controls of the dynpros during the processing of table controls.

In the ABAP-program, table controls must be declared with the statement [CONTROLS](javascript:call_link\('abapcontrols.htm'\)), whereat a special structure for handling of table controls is created.

Continue
[LOOP - WITH CONTROL](javascript:call_link\('dynploop.htm'\))
[Table Control - Examples](javascript:call_link\('abentable_control_abexas.htm'\))