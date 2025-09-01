---
title: "CALL FUNCTION - DESTINATION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_shortref.htm) Syntax CALL FUNCTION func DESTINATION dest parameter_list(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm). Effect Synchronous call (sRFC)
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination.htm"
abapFile: "abapcall_function_destination.htm"
keywords: ["update", "do", "if", "try", "data", "abapcall", "function", "destination"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination-.htm) → 

CALL FUNCTION - DESTINATION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_shortref.htm)

Syntax

CALL FUNCTION func DESTINATION dest [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm).

Effect

Synchronous call (sRFC) of a [remote-enabled function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenremote_enabled_fm_glosry.htm "Glossary Entry") specified in func using the [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). The addition DESTINATION is used to specify the [destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_destination.htm) in dest. func and dest expect character-like data objects. The calling program is continued using the statement CALL FUNCTION, if the remotely called function has finished.

More Information

More information about sRFC can be found in the RFC documentation on [SAP Help Portal](http://help.sap.com).

Notes

-   If an empty string or a text field consisting only of blanks is specified for dest, the addition DESTINATION is ignored and a regular [CALL FUNCTION func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_general.htm) call is made.
    
-   The synchronous RFC triggers a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the calling program. An exception to this is sRFC in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry").
    

Continue
[CALL FUNCTION - DESTINATION parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm)
[CALL FUNCTION - DESTINATION - Internal Addition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_int.htm)