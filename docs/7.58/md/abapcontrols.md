  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONTROLS%2C%20ABAPCONTROLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONTROLS

[Short Reference](javascript:call_link\('abapcontrols_shortref.htm'\))

Syntax Forms

[Declaration of Table Controls](javascript:call_link\('abapcontrols_tableview.htm'\))

1\. CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.

[Declaration of Tabstrip Controls](javascript:call_link\('abapcontrols_tabstrip.htm'\))

2\. CONTROLS contrl TYPE TABSTRIP.

Effect

For each [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") used in the program, all [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") and [tabstrip controls](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") defined there must be declared in the declaration part using the statement CONTROLS, otherwise an uncatchable exception is raised when the corresponding dynpro is called. contrl expects the name of the control defined in the dynpro to be specified directly. After TYPE, TABLEVIEW, or TABSTRIP must be used to specify whether it is a table control or a tabstrip control.

For each control, the CONTROLS statement creates a structure with the name of the control in the ABAP program. The structure components enable the respective control to be processed in the ABAP program.

Hints

-   For table controls, corresponding [loops](javascript:call_link\('dynploop.htm'\)) must be programmed in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). For tabstrip controls, suitable [subscreens](javascript:call_link\('dynpcall.htm'\)) must be called.
-   [Splitter controls](javascript:call_link\('abensplitter_control_glosry.htm'\) "Glossary Entry") do not have to be declared using the CONTROLS statement. Instead the class CL\_DYNPRO\_SPLITTER is used.

Continue
[CONTROLS, TYPE TABLEVIEW](javascript:call_link\('abapcontrols_tableview.htm'\))
[CONTROLS, TYPE TABSTRIP](javascript:call_link\('abapcontrols_tabstrip.htm'\))