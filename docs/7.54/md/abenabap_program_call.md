  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) → 

Calling Programs

If permitted by the package concept, each [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") of ABAP program makes it possible to call the following:

-   [executable programs](javascript:call_link\('abenabap_submit_report.htm'\))

-   [Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) (programs associated with a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry"))

statement. When a program is called, the calling program can be exited either temporarily or completely.

![Figure](abdoc_call_prog.gif)

In temporary exits from the calling program (shown on the left side of the figure), the called program is started in a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The internal session of the calling program is preserved. The calling program and the called program represent a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). Within a call sequence, the programs have shared access to the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") (using the statements [IMPORT FROM MEMORY](javascript:call_link\('abapimport_data_cluster.htm'\)) and [EXPORT TO MEMORY](javascript:call_link\('abapexport_data_cluster.htm'\))). A call sequence can have a maximum of nine internal sessions. If this maximum is exceeded, the program terminates and the entire call sequence is deleted.

When the calling program is exited in full (shown on the right side of the figure), the called program is started in a new internal session, which replaces the internal session of the calling program.

A program that creates an internal session when it is called represents the main program of the [main program group](javascript:call_link\('abenmain_program_group_glosry.htm'\) "Glossary Entry") in the internal session.

Note

When the runtime environment loads a called program, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised in that program.

Continue
[Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\))
[Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\))