  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) → 

LEAVE TO TRANSACTION

[Quick Reference](javascript:call_link\('abapleave_to_transaction_shortref.htm'\))

Syntax

LEAVE TO *{* *{*TRANSACTION ta*}* *|* *{*CURRENT TRANSACTION*}* *}*
         *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

The statement LEAVE TO TRANSACTION calls either the [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") whose transaction code is contained in data object ta or the current transaction, and in doing so leaves the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    

If the data object ta is specified as a [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.

-   Variable
    

If the data object ta is specified as a [variable](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, ta is not evaluated until runtime (in both cases).

If CURRENT TRANSACTION is specified, the current transaction is called using the transaction code used to call the transaction using CALL TRANSACTION or LEAVE TO TRANSACTION. This transaction code is contained in the system field sy-tcode except in the case of [parameter transactions](javascript:call_link\('abenparameter_transaction_glosry.htm'\) "Glossary Entry") or [variant transactions](javascript:call_link\('abenvariant_transaction_glosry.htm'\) "Glossary Entry"). When parameter transactions or variant transactions are used, their transaction code is used for the call and sy-tcode contains the name of the implicitly called [dialog transaction](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry").

When using LEAVE TO TRANSACTION, the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") is exited completely. When the called transaction ends, the runtime environment returns to the position where the first program in the call sequence was called. This ends the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry").

When the transaction is called, the ABAP program associated with the transaction code is loaded in a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). All previous internal sessions are deleted from the stack. At the same time, the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") is deleted, which means that [EXPORT FROM MEMORY](javascript:call_link\('abapexport_data_cluster.htm'\)) or [IMPORT TO MEMORY](javascript:call_link\('abapimport_data_cluster.htm'\)) do not pass data when using LEAVE TO TRANSACTION.

The steps of the called dialog transaction or [OO transaction](javascript:call_link\('abenoo_transaction_glosry.htm'\) "Glossary Entry") are the same as in [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). When the called transaction is exited, the runtime environment returns to the position where the first program in the current call sequence was called.

If the transaction specified in ta is not found, or if ta is initial or blank, the stack of the current call sequence is deleted and the runtime environment returns directly to the position where the first program in the current call sequence was called. If ta is not initial, an appropriate message appears in the status bar.

The statement LEAVE TO TRANSACTION always terminates the current call sequence, regardless of whether or not a new transaction can be called.

Unlike in the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), the authorization of the current user for executing the called transaction is always checked automatically as follows when using the statement LEAVE TO TRANSACTION:

-   It is checked against the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_TCODE.
    
-   It is checked against any authorization object entered in the definition of the transaction code (in transaction SE93). Fields of the authorization object for which no value is specified here are not checked.
    

If the required authorization is missing, a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") with [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") A (a [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry")) is sent and the system [responds](javascript:call_link\('abenabap_messages_types.htm'\)) appropriately.

Notes

-   The CURRENT TRANSACTION call can be used to execute a current parameter transaction or variant transaction with the corresponding parameters or the transaction variant. Alternatively, the method GET\_CURRENT\_TRANSACTION of the class CL\_DYNPRO can be used to obtain the transaction code of the current transaction. This method returns the transaction code during a parameter transaction or variant transaction instead of the transaction code of the implicitly called dialog transaction.
    
-   LEAVE TO TRANSACTION does not end the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). A [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") in the called program works in exactly the same way as in the current program.
    
-   If procedures are still registered at LEAVE TO TRANSACTION in the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), the SAP LUW is ended and the procedures are not called or rolled back. Any registered [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") are preserved in the database, but can no longer be executed. In cases like this, therefore, it is advisable to execute the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) explicitly before the program call.
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Addition

... AND SKIP FIRST SCREEN

Effect

The addition AND SKIP FIRST SCREEN has the same meaning as in[CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)).

Example

Calling transaction DEMO\_TRANSACTION, suppressing the first screen.

LEAVE TO TRANSACTION 'DEMO\_TRANSACTION' AND SKIP FIRST SCREEN.