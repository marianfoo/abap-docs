  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

call sequence

A call sequence is the set of programs whose [internal sessions](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") are loaded jointly in a [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") by a sequence of calls using [SUBMIT ... AND RETURN](javascript:call_link\('abapsubmit.htm'\)) or [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) It is possible to return to the preceding program in the call sequence from every program. The first program in a call sequence is the [top level transaction](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry"). The programs of a call sequence have common access to the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"). A call sequence can be exited completely using the statement [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).

[→ More](javascript:call_link\('abenabap_program_call.htm'\))