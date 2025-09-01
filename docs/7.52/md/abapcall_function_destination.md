  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) → 

CALL FUNCTION - DESTINATION

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION func DESTINATION dest [parameter\_list](javascript:call_link\('abapcall_function_destination_para.htm'\)).

Effect

Synchronous call (sRFC) of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") specified in func using the [RFC interface](javascript:call_link\('abenrfc_interface_glosry.htm'\) "Glossary Entry"). Use the addition DESTINATION to specify the [destination](javascript:call_link\('abenrfc_destination.htm'\)) in dest. func and dest expect character-like data objects. The calling program is continued using the statement CALL FUNCTION, if the remotely called function has finished.

More Information

For more detailed information about sRFC, see the RFC documentation on [SAP Help Portal](http://help.sap.com).

Notes

-   If an empty string or a text field consisting only of blanks is specified for dest, the addition DESTINATION is ignored and a regular [CALL FUNCTION func](javascript:call_link\('abapcall_function_general.htm'\)) call is made.
    
-   The synchronous RFC triggers a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") in the calling program. An sRFC during the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") is an exception to this.
    

Continue
[CALL FUNCTION - DESTINATION parameter\_list](javascript:call_link\('abapcall_function_destination_para.htm'\))
[CALL FUNCTION - DESTINATION - interner Zusatz](javascript:call_link\('abapcall_function_destination_int.htm'\))