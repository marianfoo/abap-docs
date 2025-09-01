  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_call_transaction.htm) → 

LEAVE TO TRANSACTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction_shortref.htm)

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

The statement LEAVE TO TRANSACTION calls either the [transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_glosry.htm "Glossary Entry") whose transaction code is contained in data object ta or the current transaction, and in doing so exits the current [call sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    
    If the data object ta is specified as a [text field literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a static specification by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object ta is specified as a [variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, ta is not evaluated until runtime (in both cases).

If CURRENT TRANSACTION is specified, the current transaction is called using the transaction code that was used to call the transaction using CALL TRANSACTION or LEAVE TO TRANSACTION. This transaction code is contained in the system field sy-tcode except for [parameter transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparameter_transaction_glosry.htm "Glossary Entry") or [variant transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariant_transaction_glosry.htm "Glossary Entry"). When using parameter transactions or variant transactions, their transaction code is used for the call and sy-tcode contains the name of the implicitly called [dialog transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendialog_transaction_glosry.htm "Glossary Entry").

When using LEAVE TO TRANSACTION, the current [call sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_sequence_glosry.htm "Glossary Entry") is exited completely. When the called transaction is terminated, the runtime framework returns to the position where the first program in the call sequence was called and the current [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry") is terminated.

When the transaction is called, the ABAP program to which the transaction code is linked is loaded in a new [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"). All previous internal sessions are deleted from the stack. At the same time, the [ABAP memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_memory_glosry.htm "Glossary Entry") is deleted, which means that [EXPORT FROM MEMORY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexport_data_cluster.htm) or [IMPORT TO MEMORY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm) cannot be used to pass data when using LEAVE TO TRANSACTION.

The steps of the called dialog transaction or [OO transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_transaction_glosry.htm "Glossary Entry") are the same as in [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm). When the called transaction is exited, the runtime framework returns to the position where the first program in the current call sequence was called.

If the transaction specified in ta is not found, or if ta is initial or contains a blank, the stack of the current call sequence is deleted and the runtime framework returns directly to the position where the first program in the current call sequence was called. If ta is not initial, an appropriate message appears in the status bar.

The statement LEAVE TO TRANSACTION always terminates the current call sequence, regardless of whether or not a new transaction can be called.

Unlike in the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm), the authorization of the current user for executing the called transaction is always checked automatically as follows when using the statement LEAVE TO TRANSACTION:

-   It is checked against the [authorization object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_TCODE.
-   It is checked against any authorization object entered in the definition of the transaction code (maintenance transaction SE93). Fields of the authorization object for which no value is specified here are not checked.

If the required authorization is missing, a [message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_glosry.htm "Glossary Entry") with [message type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_type_glosry.htm "Glossary Entry") A ([termination message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentermination_message_glosry.htm "Glossary Entry")) is sent and the system [responds](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) appropriately.

Hints

-   The CURRENT TRANSACTION call can be used to execute a current parameter transaction or variant transaction again with the corresponding parameters or the transaction variant. Alternatively, the static method GET\_CURRENT\_TRANSACTION of the class CL\_DYNPRO can be used to obtain the transaction code of the current transaction. This method returns the transaction code during a parameter transaction or variant transaction instead of the transaction code of the implicitly called dialog transaction.
-   LEAVE TO TRANSACTION does not end the current [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). A [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program has the same effect as in the current program.
-   If procedures are still registered for LEAVE TO TRANSACTION in the current [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry"), the SAP LUW is terminated and the procedures are not called or rolled back. Any registered [update function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") are preserved in the database, but can no longer be executed. In cases like this, therefore, it is advisable to execute the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) explicitly before the program call.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_call_scrty.htm).

Addition   

... AND SKIP FIRST SCREEN

Effect

The addition AND SKIP FIRST SCREEN has the same meaning as in[CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm).

Example

Call of transaction DEMO\_TRANSACTION, suppressing the first screen.

LEAVE TO TRANSACTION 'DEMO\_TRANSACTION' AND SKIP FIRST SCREEN.