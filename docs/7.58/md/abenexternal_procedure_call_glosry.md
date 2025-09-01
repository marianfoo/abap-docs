  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20external%20procedure%20call%2C%20ABENEXTERNAL_PROCEDURE_CALL_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

external procedure call

[Procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") call from a different ABAP program of the same [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). The first time one of its procedures is called, the required program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the calling program, if not already there, and, apart from [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), the [event](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised. See also [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry").

[→ More about](javascript:call_link\('abencall_procedures_extern.htm'\))