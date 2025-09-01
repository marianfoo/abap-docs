  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination-.htm) → 

CALL FUNCTION DESTINATION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_shortref.htm)

Syntax

CALL FUNCTION func DESTINATION dest [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination_para.htm).

Effect

Synchronous call (sRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). The addition DESTINATION is used to specify the [destination](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_destination.htm) in dest. func and dest expect character-like data objects. The calling program is continued using the statement CALL FUNCTION, if the remotely called function has finished.

More Information

For more information about sRFC, see the documentation RFC in SAP Help Portal.

Hints

-   If an empty string or a text field consisting only of blanks is specified for dest, the addition DESTINATION is ignored and a regular [CALL FUNCTION func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_general.htm) call is performed.
-   The synchronous RFC triggers a [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the calling program with the following exception: No database commit is triggered by an sRFC during [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry") processing. sRFC is not [forbidden during updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_commit_during_update.htm).

Continue
[CALL FUNCTION DESTINATION, parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination_para.htm)
[CALL FUNCTION DESTINATION, Internal Addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination_int.htm)