  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET SCREEN, ABAPSET_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

SET SCREEN

[Short Reference](javascript:call_link\('abapset_screen_shortref.htm'\))

Syntax

SET SCREEN dynnr.

Effect

This statement sets the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") specified in dynnr as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the current dynpro. dynnr expects a data object of the type n and the length 4. It must contain either the dynpro number of a dynpro in the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") or the value 0, otherwise an uncatchable exception is raised. The specified next dynpro overwrites the previously defined next dynpro.

The next dynpro is called automatically when the end of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing is reached for the current dynpro. If the dynpro number of the next dynpro is 0, the current dynpro sequence is ended.

Hint

There is always a next dynpro defined while a dynpro is being processed. After a dynpro is called, the next dynpro whose properties are defined statically applies, which can be overwritten using the statement SET SCREEN for as long as the current dynpro is being processed.