  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET UPDATE TASK, ABAPSET_UPDATE_TASK_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

SET UPDATE TASK - Short Reference

[Reference](javascript:call_link\('abapset_update_task_local.htm'\))

Syntax

SET UPDATE TASK LOCAL.

Effect

Determines that [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") registered with CALL FUNCTION ... IN UPDATE TASK that have high priority are executed immediately in the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") and within the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") when the COMMIT WORK statement is executed.