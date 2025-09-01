  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%20DESTINATION%2C%20Internal%20Addition%2C%20ABAPCALL_FUNCTION_DESTINATION_INT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

CALL FUNCTION DESTINATION, Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... KEEPING LOGICAL UNIT OF WORK

Effect

This addition has the effect that the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") of the caller is kept, and no [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is performed.

Hint

When this addition is used incorrectly, the worst-case scenario is a system shutdown.