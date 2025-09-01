  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Calling Programs, ABENABAP_PROGRAM_CALL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

Calling Programs

If allowed by the package concept, the following can be called in each [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of an ABAP program:

-   [Executable programs](javascript:call_link\('abenabap_submit_report.htm'\))
-   [Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)), that is, programs linked to a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry")

When a program is called, the calling program can be exited either temporarily or completely.

![Figure](abdoc_call_prog.gif)

In temporary exits from the calling program (shown on the left side of the figure), the called program is started in a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The internal session of the calling program is preserved. The calling program and the called program form a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). Within a call sequence, there is shared access to the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") using the statements [IMPORT FROM MEMORY](javascript:call_link\('abapimport_data_cluster.htm'\)) and [EXPORT TO MEMORY](javascript:call_link\('abapexport_data_cluster.htm'\)). A call sequence can have a maximum of nine internal sessions. If this maximum is exceeded, the program terminates, and the entire call sequence is deleted.

When the calling program is completely exited (shown on the right side of the figure), the called program is started in a new internal session, which replaces the internal session of the calling program.

A program that creates an internal session when it is called represents the main program of the [main program group](javascript:call_link\('abenmain_program_group_glosry.htm'\) "Glossary Entry") in the internal session.

Hints

-   When a called program is loaded, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised in that program.
-   The statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without the addition AND RETURN shown on the right side of the figure does not always replace the internal session of the calling program directly. If the calling program was not started with SUBMIT itself, its internal session is preserved in the call sequence and is only deleted after the submitted program is completed.

Continue
[Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\))
[Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\))