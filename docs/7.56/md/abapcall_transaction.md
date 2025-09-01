---
title: "CALL TRANSACTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_shortref.htm) Syntax Forms Simple transaction call(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_standard.htm) 1. CALL TRANSACTION ta WITHWITHOUT AUTHORITY-CHECK
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm"
abapFile: "abapcall_transaction.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "abapcall", "transaction"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_call_transaction.htm) → 

CALL TRANSACTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_shortref.htm)

Syntax Forms

[Simple transaction call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_standard.htm)
1\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.
[Transaction call using batch input table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_using.htm)
2\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_authority.htm)
                      USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                    *|*  *\[*OPTIONS FROM opt*\]* *}*
                                       *\[*MESSAGES INTO itab*\]*.

Effect

The statement CALL TRANSACTION calls the [transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_glosry.htm "Glossary Entry") whose transaction code is contained in the data object ta. The calling program and its data are preserved. After the transaction call, the program execution of the calling program is resumed after the statement CALL TRANSACTION. The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    
    If the data object ta is specified as a [text field literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a static specification by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object ta is specified as a [variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, ta is not evaluated until runtime in both cases. If the transaction specified in ta is not found, a uncatchable exception is raised.

-   In the [first variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_standard.htm), the display of the initial dynpro can be suppressed.
-   In the [second variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_using.htm), the transaction is controlled by a [batch input table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").

In both variants, an [authorization check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_check_glosry.htm "Glossary Entry") can be performed for the called transaction.

When the transaction is called, the ABAP program linked to the transaction code is loaded in a new [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [call sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The session of the calling program and the current [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry") are retained. The called program runs in its own SAP LUW.

-   If the called transaction is a dialog transaction, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapload-of-program.htm) is raised after the ABAP program is loaded and the [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") defined as the initial dynpro of the transaction is called. The initial dynpro is the first dynpro of a [dynpro sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_sequence_glosry.htm "Glossary Entry"). The transaction is finished when the dynpro sequence is ended by encountering the next dynpro with dynpro number 0 or when the program is exited using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_program.htm).
-   If the called transaction is an [OO transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_transaction_glosry.htm "Glossary Entry"), then, after all programs other than [class pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_pool_glosry.htm "Glossary Entry") are loaded, the event LOAD-OF-PROGRAM is raised and the method linked to the transaction code is called. If the method is an instance method, an object of the corresponding class is generated implicitly and referenced by the runtime framework. The transaction is finished when the method is finished or when the program is exited using the statement LEAVE PROGRAM.

Hints

-   CALL TRANSACTION does not end the current [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). A [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program has the same effect as in the current program.
-   The statement CALL TRANSACTION opens a new [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry"), but it does not open a new [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW, in particular, can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. The statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) in the called program may also affect the interrupted SAP LUW under certain circumstances. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur during [local updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_update_glosry.htm "Glossary Entry").
-   The number of internal sessions in a [call sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm "Glossary Entry") is restricted to nine. If this is exceeded by CALL TRANSACTION, the program is terminated and the entire call sequence is deleted.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_call_scrty.htm).

Example

Call of the transaction DEMO\_TRANSACTION in the executable example program DEMO\_CALL\_TRANSACTION\_SPA\_GPA.

TRY.
    CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Executable Examples

[Transaction Call - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactions_abexas.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_AUTHORIZATION\_ERROR

-   Cause: No authorization for this transaction.
    Runtime error: CALL\_TRANSACTION\_NO\_AUTH

Uncatchable Exceptions

-   Cause: Transaction not found.
    Runtime error: CALL\_TRANSACTION\_NOT\_FOUND
-   Cause: Transaction is an area menu and cannot be called.
    Runtime error: CALL\_TRANSACTION\_IS\_MENU
-   Cause: Transaction is locked.
    Runtime error: CALL\_TRANSACTION\_LOCKED
-   Cause: Error in internal memory management.
    Runtime error: CALL\_TRANSACTION\_MSG\_NO\_PAGING
-   Cause: Recursive call of a transaction using the addition USING.
    Runtime error: CALL\_TRANSACTION\_USING\_NESTED
    

Continue
[CALL TRANSACTION, standard](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_standard.htm)
[CALL TRANSACTION, USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction_using.htm)
[Transaction Call, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactions_abexas.htm)