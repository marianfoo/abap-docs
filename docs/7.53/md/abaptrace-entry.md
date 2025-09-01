  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentests_internal.htm) → 

TRACE-ENTRY

This statement is for internal use only.
It must not be used in application programs.

Syntax

TRACE-ENTRY text.

Effect

This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace component General kernel.