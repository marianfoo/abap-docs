  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

SAP LUW

Related sequence of programming units, whose execution , for example in [dialog steps](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry") or in [remote function calls](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), can be distributed across multiple [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"), but whose database changes are updated within a single [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") or [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and completed by the [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). Changes within one SAP LUW can be undone by the ABAP SQL statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)).

[→ More](javascript:call_link\('abensap_luw.htm'\))