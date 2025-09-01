  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_call_transaction.htm) → 

CALL TRANSACTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_shortref.htm)

Syntax Forms

[Simple transaction call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_standard.htm)
1\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.
[Transaction call using batch input table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm)
2\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_authority.htm)
                      USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                    *|*  *\[*OPTIONS FROM opt*\]* *}*
                                       *\[*MESSAGES INTO itab*\]*.

Effect

The statement CALL TRANSACTION calls the [transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_glosry.htm "Glossary Entry") whose transaction code is contained in the data object ta. The calling program and its data are preserved. After the transaction call, the program execution of the calling program resumes after the statement CALL TRANSACTION. The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    

If the data object ta is specified as a [text field literal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.

-   Variable
    

If the data object ta is specified as a [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstant_glosry.htm "Glossary Entry"), it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, ta is not evaluated until runtime (in both cases). If the transaction specified in ta cannot be found, a non-handleable exception is raised.

-   In the [first variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_standard.htm), the display of the initial screen can be suppressed.
    
-   In the [second variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm), the transaction is executed using a [batch input table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").
    

In both variants, an [authorization check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenauthorization_check_glosry.htm "Glossary Entry") can be performed on the called transaction.

When the transaction is called, the ABAP program associated with the transaction code is loaded in a new [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The session of the calling program and the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry") are preserved. The called program runs in its own SAP LUW.

-   If the called transaction is a dialog transaction, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm) is raised after the ABAP program is loaded and the [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") defined as the initial dynpro of the transaction is called. The initial dynpro is the first dynpro of a [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry"). The transaction is finished when the dynpro sequence is ended by encountering the next dynpro with dynpro number 0 or when the program is exited using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program.htm).
    
-   If the called transaction is an [OO transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoo_transaction_glosry.htm "Glossary Entry"), the event LOAD-OF-PROGRAM is raised and the method associated with the transaction code is called when any program is loaded (except [class pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry")). If the method is an instance method, an object of the associated class is created implicitly and referenced by the runtime environment. The transaction is finished when the method is finished or when the program is exited using the statement LEAVE PROGRAM.
    

Notes

-   CALL TRANSACTION does not end the current [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). A [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program works in exactly the same way as in the current program.
    
-   The statement CALL TRANSACTION opens a new [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry") but it does not open a new [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. Under certain circumstances, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur in [local updates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_update_glosry.htm "Glossary Entry").
    
-   The number of internal sessions in a [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry") is restricted to nine. If this is exceeded by CALL TRANSACTION, the program terminates and the entire call sequence is deleted.
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendyn_call_scrty.htm).

Example

Calling transaction DEMO\_TRANSACTION in the executable example program DEMO\_CALL\_TRANSACTION\_SPA\_GPA.

TRY.
    CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Executable Examples

[Transaction Call - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransactions_abexas.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_AUTHORIZATION\_ERROR

-   Cause: No authorization for this transaction.
    Runtime error: CALL\_TRANSACTION\_FAILED
    

Non-Handleable Exceptions

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
[CALL TRANSACTION - standard](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_standard.htm)
[CALL TRANSACTION - USING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_using.htm)
[Transaction Call - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransactions_abexas.htm)