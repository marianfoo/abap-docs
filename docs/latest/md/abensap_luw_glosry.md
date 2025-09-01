  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20LUW%2C%20ABENSAP_LUW_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SAP LUW

Interrelated sequence of programming units, the execution of which, for example, in [dialog steps](javascript:call_link\('abendialog_step_glosry.htm'\) "Glossary Entry") or in [remote function calls](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), can be distributed across several [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"). However, their database changes are processed within a single [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") or [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and completed by the [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). Changes within one SAP LUW can be undone by the ABAP SQL statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)).

[→ More about](javascript:call_link\('abensap_luw.htm'\))