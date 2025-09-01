  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) → 

Calling Programs

If allowed by the package concept, the following can be called in each [processing block](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of an ABAP program:

-   [Executable programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_submit_report.htm)
-   [Transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_call_transaction.htm), that is, programs linked to a [transaction code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_code_glosry.htm "Glossary Entry")

When a program is called, the calling program can be exited either temporarily or completely.

![Figure](bdoc_call_prog.gif)

In temporary exits from the calling program (shown on the left side of the figure), the called program is started in a new [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The internal session of the calling program is preserved. The calling program and the called program form a [call sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Within a call sequence, there is shared access to the [ABAP Memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_memory_glosry.htm "Glossary Entry") using the statements [IMPORT FROM MEMORY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm) and [EXPORT TO MEMORY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexport_data_cluster.htm). A call sequence can have a maximum of nine internal sessions. If this maximum is exceeded, the program terminates, and the entire call sequence is deleted.

When the calling program is completely exited (shown on the right side of the figure), the called program is started in a new internal session, which replaces the internal session of the calling program.

A program that creates an internal session when it is called represents the main program of the [main program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_group_glosry.htm "Glossary Entry") in the internal session.

Hints

-   When a called program is loaded, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapload-of-program.htm) is raised in that program.
-   The statement [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) without the addition AND RETURN shown on the right side of the figure does not always replace the internal session of the calling program directly. If the calling program was not started with SUBMIT itself, its internal session is preserved in the call sequence and is only deleted after the submitted program is completed.

Continue
[Calling Executable Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_submit_report.htm)
[Calling Transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_call_transaction.htm)