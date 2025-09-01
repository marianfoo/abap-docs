  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET UPDATE TASK - Quick reference

[Reference](javascript:call_link\('abapset_update_task_local.htm'\))

Syntax

SET UPDATE TASK LOCAL.

Effect

Determines that [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") registered with CALL FUNCTION ... IN UPDATE TASK that have high priority are executed immediately in the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") and within the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") when the COMMIT WORK statement is executed.