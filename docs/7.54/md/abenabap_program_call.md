---
title: "Calling Programs"
description: |
  If permitted by the package concept, each processing block(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') of ABAP program makes it possible to call the following: -   executable programs(https://help.sap.com/doc/abapdocu_754_index_htm
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm"
abapFile: "abenabap_program_call.htm"
keywords: ["delete", "do", "if", "try", "data", "abenabap", "program", "call"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) → 

Calling Programs

If permitted by the package concept, each [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") of ABAP program makes it possible to call the following:

-   [executable programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_submit_report.htm)

-   [Transactions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_call_transaction.htm) (programs associated with a [transaction code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry"))

statement. When a program is called, the calling program can be exited either temporarily or completely.

![Figure](abdoc_call_prog.gif)

In temporary exits from the calling program (shown on the left side of the figure), the called program is started in a new [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The internal session of the calling program is preserved. The calling program and the called program represent a [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"). Within a call sequence, the programs have shared access to the [ABAP Memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry") (using the statements [IMPORT FROM MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_data_cluster.htm) and [EXPORT TO MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm)). A call sequence can have a maximum of nine internal sessions. If this maximum is exceeded, the program terminates and the entire call sequence is deleted.

When the calling program is exited in full (shown on the right side of the figure), the called program is started in a new internal session, which replaces the internal session of the calling program.

A program that creates an internal session when it is called represents the main program of the [main program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_group_glosry.htm "Glossary Entry") in the internal session.

Note

When the runtime environment loads a called program, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm) is raised in that program.

Continue
[Calling Executable Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_submit_report.htm)
[Calling Transactions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_call_transaction.htm)