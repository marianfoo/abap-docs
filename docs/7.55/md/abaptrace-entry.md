  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentests_internal.htm) → 

TRACE-ENTRY

This statement is for internal use only.
It must not be used in application programs.

Syntax

TRACE-ENTRY text.

Effect

This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace component General kernel.