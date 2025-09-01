  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION - DESTINATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination.htm) → 

CALL FUNCTION - DESTINATION - Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... KEEPING LOGICAL UNIT OF WORK

Effect

This addition has the effect that the [work process](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry") of the caller is kept and no [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is performed.

Note

When this addition is used incorrectly, the worst case scenario may be a system shutdown.