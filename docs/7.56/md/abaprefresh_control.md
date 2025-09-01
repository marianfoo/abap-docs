  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

REFRESH CONTROL

[Short Reference](javascript:call_link\('abaprefresh_control_shortref.htm'\))

Syntax

REFRESH CONTROL contrl FROM SCREEN dynnr.

Effect

This statement initializes the attributes of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") by assigning values to certain components of the associated structure contrl. For contrl, a structure must be specified that was created using the statement [CONTROLS](javascript:call_link\('abapcontrols_tableview.htm'\)) for a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry"). The values are taken from the definition of the identically named table control whose [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is specified in dynnr. The values of the components are set for which the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") are also taken from the definition of a table control (see description of the structure cxtab\_control in [CONTROLS](javascript:call_link\('abapcontrols_tableview.htm'\))). dynnr expects a data object of the type n of length 4. It must contain the number of a dynpro on which a table control name contrl is defined.