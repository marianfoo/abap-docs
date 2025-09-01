  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20call%20sequence%2C%20ABENCALL_SEQUENCE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

call sequence

A call sequence is the set of programs whose [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") are loaded jointly into an [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") by a sequence of calls using [SUBMIT ... AND RETURN](javascript:call_link\('abapsubmit.htm'\)) or [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). It is possible to return to the preceding program in the call sequence from every program. The first program in a call sequence is the [top level transaction](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry"). The programs of a call sequence have collective access to the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"). A call sequence can be exited completely using the statement [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).

[→ More about](javascript:call_link\('abenabap_program_call.htm'\))