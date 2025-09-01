  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentests_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TRACE-ENTRY%2C%20ABAPTRACE-ENTRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TRACE-ENTRY

This statement is for internal use only.
It must not be used in application programs.

Syntax

TRACE-ENTRY text.

Effect

This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace component General kernel.