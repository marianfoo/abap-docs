  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

background processing

Execution of [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") with predetermined settings in the background, that is, with no on-screen user dialog. In contrast to [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry"), the execution flow is fixed when the program is started. An [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is scheduled in [ABAP Editor](javascript:call_link\('abenabap_editor_glosry.htm'\) "Glossary Entry") or after choosing System → Services → Reporting from the menu Program → Execute → Background for automatic execution or is called in the background using [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)). Background processing takes place in a separate [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") and at least one background [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") must be configured.