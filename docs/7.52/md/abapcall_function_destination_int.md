  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION - DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) → 

This addition is for internal use only.
It must not be used in application programs.

Addition:

... KEEPING LOGICAL UNIT OF WORK

Effect

This addition has the effect that the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") of the caller is kept and no [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is performed.

Note

When this addition is used incorrectly, the worst case scenario may be a system shutdown.