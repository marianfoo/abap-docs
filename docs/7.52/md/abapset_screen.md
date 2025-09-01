  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

SET SCREEN

[Quick Reference](javascript:call_link\('abapset_screen_shortref.htm'\))

Syntax

SET SCREEN dynnr.

Effect

This statement defines the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") specified in dynnr as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") to be processed after the current dynpro. dynnr expects a data object of the type n and the length 4. It must contain either the dynpro number of a dynpro in the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") or the value 0; otherwise an unhandleable exception is raised. The specified next dynpro overwrites the previously defined next dynpro.

The next dynpro is called automatically when the end of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing is reached for the current dynpro. If the dynpro number of the next dynpro is 0, the current dynpro sequence is ended.

Note

There is always a next dynpro defined while a dynpro is being processed. After a dynpro is called, the next dynpro whose properties are defined statically applies; this next dynpro can be overwritten using the statement SET SCREEN for as long as the current dynpro is being processed.