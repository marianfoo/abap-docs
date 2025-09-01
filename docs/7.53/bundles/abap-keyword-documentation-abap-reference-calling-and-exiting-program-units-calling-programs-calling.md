# ABAP Keyword Documentation / ABAP − Reference / Calling and Exiting Program Units / Calling Programs / Calling Transactions / CALL TRANSACTION

Included pages: 13


### abapcall_transaction.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) → 

CALL TRANSACTION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax Forms

[Simple transaction call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_standard.htm)
1\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.
[Transaction call using batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm)
2\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm)
                      USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                    *|*  *\[*OPTIONS FROM opt*\]* *}*
                                       *\[*MESSAGES INTO itab*\]*.

Effect

The statement CALL TRANSACTION calls the [transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry") whose transaction code is contained in the data object ta. The calling program and its data are preserved. After the transaction call, the program execution of the calling program resumes after the statement CALL TRANSACTION. The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    

If the data object ta is specified as a [text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.

-   Variable
    

If the data object ta is specified as a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, ta is not evaluated until runtime (in both cases). If the transaction specified in ta cannot be found, a non-handleable exception is raised.

-   In the [first variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_standard.htm), the display of the initial screen can be suppressed.
    
-   In the [second variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm), the transaction is executed using a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").
    

In both variants, an [authorization check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_check_glosry.htm "Glossary Entry") can be performed on the called transaction.

When the transaction is called, the ABAP program associated with the transaction code is loaded in a new [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [call sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The session of the calling program and the current [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry") are preserved. The called program runs in its own SAP LUW.

-   If the called transaction is a dialog transaction, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) is raised after the ABAP program is loaded and the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") defined as the initial dynpro of the transaction is called. The initial dynpro is the first dynpro of a [dynpro sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_sequence_glosry.htm "Glossary Entry"). The transaction is finished when the dynpro sequence is ended by encountering the next dynpro with dynpro number 0 or when the program is exited using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_program.htm).
    
-   If the called transaction is an [OO transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoo_transaction_glosry.htm "Glossary Entry"), the event LOAD-OF-PROGRAM is raised and the method associated with the transaction code is called when any program is loaded (except [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry")). If the method is an instance method, an object of the associated class is generated implicitly and referenced by the runtime environment. The transaction is finished when the method is finished or when the program is exited using the statement LEAVE PROGRAM.
    

Notes

-   CALL TRANSACTION does not end the current [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). A [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program works in exactly the same way as in the current program.
    
-   The statement CALL TRANSACTION opens a new [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry") but it does not open a new [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. Under certain circumstances, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur in [local updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_update_glosry.htm "Glossary Entry").
    
-   The number of internal sessions in a [call sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_sequence_glosry.htm "Glossary Entry") is restricted to nine. If this is exceeded by CALL TRANSACTION, the program terminates and the entire call sequence is deleted.
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendyn_call_scrty.htm).

Example

Calling transaction DEMO\_TRANSACTION in the executable example program DEMO\_CALL\_TRANSACTION\_SPA\_GPA.

TRY.
    CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Executable Examples

[Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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
[CALL TRANSACTION - standard](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_standard.htm)
[CALL TRANSACTION - USING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm)
[Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm)


### abapcall_transaction_standard.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

CALL TRANSACTION - standard

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version described in ta as described under the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to skip the initial screen.

Note

This variant does not set the system field sy-subrc.

Addition

... AND SKIP FIRST SCREEN

Effect

This addition suppresses the display of a [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   On the initial dynpro, the dynpro number must not be specified as a static next dynpro in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry").
    
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry").
    

If these prerequisites are met, the screen of the dynpro is displayed that is specified in Screen Painter as the [next dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the initial dynpro.

Example

If the static next dynpro of the initial dynpro of the called dialog transaction FLIGHT\_TA is not the initial dynpro itself, its screen is suppressed, since its input fields are filled using the SPA/GPA parameters CAR and CON.

DATA: carrid TYPE spfli-carrid,
      connid TYPE spfli-connid.
...
SET PARAMETER ID: 'CAR' FIELD carrid,
                  'CON' FIELD connid.
TRY.
    CALL TRANSACTION 'FLIGHT\_TA' WITH AUTHORITY-CHECK
                                 AND SKIP FIRST SCREEN.
    CATCH cx\_sy\_authorization\_error.
      RETURN.
ENDTRY.

Continue
[CALL TRANSACTION - AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm)


### abapcall_transaction_authority.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION - standard](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_standard.htm) → 

CALL TRANSACTION - AUTHORITY-CHECK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

... WITH*|*WITHOUT AUTHORITY-CHECK ...

Extras:

[1\. ... WITH AUTHORITY-CHECK](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT AUTHORITY-CHECK](#!ABAP_ADDITION_2@2@)

Effect

These additions control the authorization checks when the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) is executed.

Note

The use of the statement CALL TRANSACTION without one of the additions WITH AUTHORITY-CHECK or WITHOUT AUTHORITY-CHECK is now [obsolete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm).

Addition 1

... WITH AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is checked using the following [authorization objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenauthorization_object_glosry.htm "Glossary Entry") before the transaction is called:

-   The authorization object S\_TCODE
    
-   Any authorization object entered in the definition of the transaction code (transaction SE93). Fields of the authorization object for which no value is specified here are not checked.
    

If no authorization is found, a handleable exception of the class CX\_SY\_AUTHORIZATION\_ERROR is raised.

Note

The addition WITH AUTHORITY-CHECK is the recommended method of checking the authorizations of the current user. It replaces checks using the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check_shortref.htm), the function module AUTHORITY\_CHECK\_TCODE, and checks associated with the content of the database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm).

Addition 2

... WITHOUT AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user is not checked when the called transaction is executed.

Notes

-   The addition WITHOUT AUTHORITY-CHECK indicates explicitly that no authorization checks are required when the transaction is called. It suppresses the corresponding error message from the security test in the [extended program checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry").
    
-   If the addition WITHOUT AUTHORITY-CHECK is specified, the content of the database table [TCDCOUPLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_auth_obs.htm) is ignored.


### abapcall_transaction_standard.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

CALL TRANSACTION - standard

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version described in ta as described under the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to skip the initial screen.

Note

This variant does not set the system field sy-subrc.

Addition

... AND SKIP FIRST SCREEN

Effect

This addition suppresses the display of a [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   On the initial dynpro, the dynpro number must not be specified as a static next dynpro in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry").
    
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry").
    

If these prerequisites are met, the screen of the dynpro is displayed that is specified in Screen Painter as the [next dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the initial dynpro.

Example

If the static next dynpro of the initial dynpro of the called dialog transaction FLIGHT\_TA is not the initial dynpro itself, its screen is suppressed, since its input fields are filled using the SPA/GPA parameters CAR and CON.

DATA: carrid TYPE spfli-carrid,
      connid TYPE spfli-connid.
...
SET PARAMETER ID: 'CAR' FIELD carrid,
                  'CON' FIELD connid.
TRY.
    CALL TRANSACTION 'FLIGHT\_TA' WITH AUTHORITY-CHECK
                                 AND SKIP FIRST SCREEN.
    CATCH cx\_sy\_authorization\_error.
      RETURN.
ENDTRY.

Continue
[CALL TRANSACTION - AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm)


### abapcall_transaction_using.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

CALL TRANSACTION - USING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm)
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Extras:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) are used to control the authorization check.

bdc\_tab expects an internal table with the row type BDCDATA from ABAP Dictionary. The additions control how it is processed.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program. No other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro processed

DYNBEGIN

Flags the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table.htm) of the internal table bdc\_tab, any number of screens of the called transaction can be filled with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Notes

-   Calling a transaction using a batch input table is not the same as executing [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"). There is no exact dividing line between the two, however, since batch input-based frameworks such as [CATT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatt_glosry.htm "Glossary Entry") and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. In this way, they can use certain options not available in genuine batch input.
    
-   The control options for a batch input table cover the control options for [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in real [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"), plus some extra options.
    

Example

Calling transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

DATA: bdcdata\_tab TYPE TABLE OF bdcdata,
      opt         TYPE ctu\_params.
...
TRY.
    CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                            USING bdcdata\_tab OPTIONS FROM opt.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Addition 1

... MODE mode

Effect

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions MODE or OPTIONS FROM is not used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processed with displayed [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry")

"E"

Screens displayed only if an error occurs

"N"

Processed without displayed screens. If a breakpoint is reached in one of the called [transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. The field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processed without displayed screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions UPDATE or OPTIONS FROM is not used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry") of called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_update_task_local.htm) were executed in the program.

Others

As for "A".

Note

This option is not available for execution of [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"). Updates are always synchronous.

Addition 3

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from ABAP Dictionary. The CTU\_PARAMS structure has the components displayed in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatt_glosry.htm "Glossary Entry") mode for processing. While [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry") is used mostly for data transfer, CATT processes are more complex [transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"), since they are reusable tests. Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Specifies whether the [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Specifies whether the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) terminates processing or not. Values: " " (COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

If the addition OPTIONS FROM is not used, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") sent during batch input processing are saved to an internal table itab of the type BDCMSGCOLL from ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)

Continue
[CALL TRANSACTION - Batch Input Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table.htm)


### abenbatch_input_table.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION - USING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm) → 

CALL TRANSACTION - Batch Input Table

A [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") of the [row type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrow_type_glosry.htm "Glossary Entry") BDCDATA specified after the addition USING of the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) in [transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry") calls must have the following content. This content is achieved by appending rows to an initial table in this order:

-   For each new dynpro, a new row with

-   a program name in the column PROGRAM

-   a dynpro number in the column DYNPRO

-   an "X" in the column DYNBEGIN

-   For each filled input field, a row with

-   the name of the dynpro field in the column FNAM

-   the passed value in the column FVAL

If the field is part of a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") or [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the required row number must be appended to the field name.

-   If the cursor is to be positioned on a screen element

-   The value "BDC\_CURSOR" in the column FNAM

-   the name of the screen element in the column FVAL

If the cursor is to be positioned on a screen element in a table control or step loop, the required row number must be appended to the name of the element.

-   For each dynpro, the function code

-   The value "BDC\_OKCODE" in the column FNAM

-   a function code in the column FVAL

Any columns not used in a row remain initial.

Note

Transaction Recorder (transaction SHDB) records executed transactions as batch input tables. The resulting batch input tables can be displayed and edited. Programs and function modules can be generated to use these tables.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)


### abapcall_transaction_using.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

CALL TRANSACTION - USING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm)
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Extras:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_authority.htm) are used to control the authorization check.

bdc\_tab expects an internal table with the row type BDCDATA from ABAP Dictionary. The additions control how it is processed.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program. No other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro processed

DYNBEGIN

Flags the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table.htm) of the internal table bdc\_tab, any number of screens of the called transaction can be filled with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Notes

-   Calling a transaction using a batch input table is not the same as executing [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"). There is no exact dividing line between the two, however, since batch input-based frameworks such as [CATT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatt_glosry.htm "Glossary Entry") and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. In this way, they can use certain options not available in genuine batch input.
    
-   The control options for a batch input table cover the control options for [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in real [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"), plus some extra options.
    

Example

Calling transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

DATA: bdcdata\_tab TYPE TABLE OF bdcdata,
      opt         TYPE ctu\_params.
...
TRY.
    CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                            USING bdcdata\_tab OPTIONS FROM opt.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Addition 1

... MODE mode

Effect

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions MODE or OPTIONS FROM is not used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processed with displayed [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry")

"E"

Screens displayed only if an error occurs

"N"

Processed without displayed screens. If a breakpoint is reached in one of the called [transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. The field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processed without displayed screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions UPDATE or OPTIONS FROM is not used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry") of called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_update_task_local.htm) were executed in the program.

Others

As for "A".

Note

This option is not available for execution of [batch input sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry"). Updates are always synchronous.

Addition 3

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from ABAP Dictionary. The CTU\_PARAMS structure has the components displayed in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencatt_glosry.htm "Glossary Entry") mode for processing. While [batch input](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_glosry.htm "Glossary Entry") is used mostly for data transfer, CATT processes are more complex [transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry"), since they are reusable tests. Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Specifies whether the [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Specifies whether the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) terminates processing or not. Values: " " (COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

If the addition OPTIONS FROM is not used, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") sent during batch input processing are saved to an internal table itab of the type BDCMSGCOLL from ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)

Continue
[CALL TRANSACTION - Batch Input Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table.htm)


### abentransactions_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

Transaction Call - Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_repo_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_dialog_abexa.htm)


### abencall_transaction_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm) → 

Transaction Call, SPA/GPAParameters

This example demonstrates how a transaction is called using SPA/GPA parameters.

Source Code

REPORT demo\_call\_transaction\_spa\_gpa.
PARAMETERS: carrid TYPE spfli-carrid,
            connid TYPE spfli-connid.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SET PARAMETER ID: 'CAR' FIELD carrid,
                      'CON' FIELD connid.
    TRY.
        CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
      CATCH cx\_sy\_authorization\_error.
        RETURN.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The transaction DEMO\_TRANSACTION displays the details for a flight uniquely identified by the airline and the flight number. It is called from main using the statement CALL TRANSACTION and filled with [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") as initial values using the statement SET PARAMETER.


### abencall_transaction_bdc_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm) → 

Transaction Call, BDC Table

This example shows how a transaction is called using a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_call\_transaction\_bdc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'.
    DATA bdcdata\_tab TYPE TABLE OF bdcdata.
    DATA opt TYPE ctu\_params.
    bdcdata\_tab = VALUE #(
      ( program  = 'SAPLSEOD' dynpro   = '1000' dynbegin = 'X' )
      ( fnam = 'BDC\_CURSOR'       fval = 'SEOCLASS-CLSNAME' )
      ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name )
      ( fnam = 'BDC\_OKCODE'       fval = '=WB\_DISPLAY' ) ).
    opt-dismode = 'E'.
    opt-defsize = 'X'.
    TRY.
        CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                                USING bdcdata\_tab OPTIONS FROM opt.
      CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Call Class Builder (transaction SE24) and display the class CL\_ABAP\_BROWSER. The required authorization is checked by using the addition WITH AUTHORITY-CHECK. The internal table bdcdata\_tab contains the entry for the processing of the first dynpro (1000) in the transaction. The structure opt is used to configure processing to skip the first screen and display the subsequent screen in standard size.


### abencall_transaction_repo_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm) → 

Transaction Call, Report Transaction

The example illustrates how a selection screen can be called using a report transaction.

Source Code

REPORT demo\_call\_selection\_screen.
SELECTION-SCREEN BEGIN OF SCREEN 100.
SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1.
PARAMETERS: cityfr TYPE spfli-cityfrom,
            cityto TYPE spfli-cityto.
SELECTION-SCREEN END OF BLOCK sel1.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECTION-SCREEN INCLUDE BLOCKS sel1.
SELECTION-SCREEN BEGIN OF BLOCK sel2
                          WITH FRAME TITLE tit2.
PARAMETERS: airpfr TYPE spfli-airpfrom,
            airpto TYPE spfli-airpto.
SELECTION-SCREEN END OF BLOCK sel2.
SELECTION-SCREEN END OF SCREEN 500.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    tit1 = 'Cities'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    tit1 = 'Cities for Airports'.
    tit2 = 'Airports'.
    CALL SELECTION-SCREEN 500 STARTING AT 10 10.
    tit1 = 'Cities again'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description

When the associated transaction DEMO\_REPORT\_TRANSACT is called, the executable program starts with the selection screen 500 in the same GUI window. The further process is described in the executable example [Selection Screens, Calling Standalone Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_call_sel_scr_abexa.htm).


### abencall_transaction_dialog_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm) → 

Transaction Call, Dialog Transaction

This example demonstrates a dialog transaction where the first dynpro is a selection screen.

Source Code

\*&---------------------------------------------------------------------\*
\*& Modulpool  SAPMSSLS                                                 \*
\*&---------------------------------------------------------------------\*
PROGRAM  sapmdemo\_selscreen\_dynp.
SET EXTENDED CHECK OFF.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
  SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME.
    PARAMETERS: cityfr LIKE spfli-cityfrom,
                cityto LIKE spfli-cityto.
  SELECTION-SCREEN END OF BLOCK sel1.
  SELECTION-SCREEN BEGIN OF BLOCK sel2 WITH FRAME.
    PARAMETERS: airpfr LIKE spfli-airpfrom,
              airpto LIKE spfli-airpto.
  SELECTION-SCREEN END OF BLOCK sel2.
SELECTION-SCREEN END OF SCREEN 500.
AT SELECTION-SCREEN.
   ...
   LEAVE TO SCREEN 100.

Description

When the associated transaction DEMO\_SELSCREEN\_DYNP is called, the program starts by displaying selection screen 500. The user input on the selection screen can be processed, for example, at the event AT SELECTION-SCREEN or later in the application logic. After the event AT SELECTION-SCREEN is processed (PAI of the selection screen), the program branches to a next dynpro, 100.


### abentransactions_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

Transaction Call - Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_repo_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_dialog_abexa.htm)
