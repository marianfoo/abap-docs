  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) → 

CALL FUNCTION DESTINATION

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION func DESTINATION dest [parameter\_list](javascript:call_link\('abapcall_function_destination_para.htm'\)).

Effect

Synchronous call (sRFC) of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") specified in func using the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"). The addition DESTINATION is used to specify the [destination](javascript:call_link\('abenrfc_destination.htm'\)) in dest. func and dest expect character-like data objects. The calling program is continued using the statement CALL FUNCTION, if the remotely called function has finished.

More Information

For more information about sRFC, see the documentation RFC in SAP Help Portal.

Hints

-   If an empty string or a text field consisting only of blanks is specified for dest, the addition DESTINATION is ignored and a regular [CALL FUNCTION func](javascript:call_link\('abapcall_function_general.htm'\)) call is performed.
-   The synchronous RFC triggers a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") in the calling program with the following exception: No database commit is triggered by an sRFC during [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") processing. sRFC is not [forbidden during updates](javascript:call_link\('abendb_commit_during_update.htm'\)).

Continue
[CALL FUNCTION DESTINATION, parameter\_list](javascript:call_link\('abapcall_function_destination_para.htm'\))
[CALL FUNCTION DESTINATION, Internal Addition](javascript:call_link\('abapcall_function_destination_int.htm'\))