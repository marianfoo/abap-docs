  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in List Processing](javascript:call_link\('abenlists_obsolete.htm'\)) →  [Obsolete List Event](javascript:call_link\('abenlist_event_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT PF, ABAPAT_PFNN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

AT PF

[Short Reference](javascript:call_link\('abapat_pf_shortref.htm'\))

Obsolete Syntax

AT PFnn.

Effect

Reacts to an obsolete [list event](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry"). This obsolete statement defines an event block whose event is raised by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") when a list is displayed. This is provided the screen cursor is on a list line and a function is selected using the function code PFnn, where nn is a number between 01 and 24. In the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry"), these function codes are assigned to the function keys of the input device.

Hint

[AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)) should always be used instead of AT PFnn and special function codes should be assigned to the required function keys.