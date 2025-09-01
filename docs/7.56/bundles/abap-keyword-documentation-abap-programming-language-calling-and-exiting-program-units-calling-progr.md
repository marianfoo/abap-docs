# ABAP - Keyword Documentation / ABAP - Programming Language / Calling and exiting program units / Calling Programs / Calling Transactions / CALL TRANSACTION

Included pages: 13


### abapcall_transaction.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) → 

CALL TRANSACTION

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax Forms

[Simple transaction call](javascript:call_link\('abapcall_transaction_standard.htm'\))
1\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) *\[*AND SKIP FIRST SCREEN*\]*.
[Transaction call using batch input table](javascript:call_link\('abapcall_transaction_using.htm'\))
2\. CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))
                      USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                    *|*  *\[*OPTIONS FROM opt*\]* *}*
                                       *\[*MESSAGES INTO itab*\]*.

Effect

The statement CALL TRANSACTION calls the [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") whose transaction code is contained in the data object ta. The calling program and its data are preserved. After the transaction call, the program execution of the calling program is resumed after the statement CALL TRANSACTION. The data object ta must be character-like, flat and contain the transaction code in uppercase letters. The following can be specified for ta:

-   Literal or constant
    
    If the data object ta is specified as a [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a static specification by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object ta is specified as a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, ta is not evaluated until runtime in both cases. If the transaction specified in ta is not found, a uncatchable exception is raised.

-   In the [first variant](javascript:call_link\('abapcall_transaction_standard.htm'\)), the display of the initial dynpro can be suppressed.
-   In the [second variant](javascript:call_link\('abapcall_transaction_using.htm'\)), the transaction is controlled by a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry").

In both variants, an [authorization check](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry") can be performed for the called transaction.

When the transaction is called, the ABAP program linked to the transaction code is loaded in a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"). The session of the calling program and the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") are retained. The called program runs in its own SAP LUW.

-   If the called transaction is a dialog transaction, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised after the ABAP program is loaded and the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") defined as the initial dynpro of the transaction is called. The initial dynpro is the first dynpro of a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry"). The transaction is finished when the dynpro sequence is ended by encountering the next dynpro with dynpro number 0 or when the program is exited using the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)).
-   If the called transaction is an [OO transaction](javascript:call_link\('abenoo_transaction_glosry.htm'\) "Glossary Entry"), then, after all programs other than [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") are loaded, the event LOAD-OF-PROGRAM is raised and the method linked to the transaction code is called. If the method is an instance method, an object of the corresponding class is generated implicitly and referenced by the runtime framework. The transaction is finished when the method is finished or when the program is exited using the statement LEAVE PROGRAM.

Hints

-   CALL TRANSACTION does not end the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). A [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") in the called program has the same effect as in the current program.
-   The statement CALL TRANSACTION opens a new [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), but it does not open a new [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). This means that a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") in this SAP LUW, in particular, can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) or [CALL FUNCTION IN BACKGROUND TASK](javascript:call_link\('abapcall_function_background_task.htm'\)) in the tables VB... or ARFCSSTATE and ARFCSDATA. The statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) in the called program may also affect the interrupted SAP LUW under certain circumstances. To prevent this, an explicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") must be executed before the program is called. This problem does not occur during [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry").
-   The number of internal sessions in a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") is restricted to nine. If this is exceeded by CALL TRANSACTION, the program is terminated and the entire call sequence is deleted.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Example

Call of the transaction DEMO\_TRANSACTION in the executable example program DEMO\_CALL\_TRANSACTION\_SPA\_GPA.

TRY.
    CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Executable Examples

[Transaction Call - Examples](javascript:call_link\('abentransactions_abexas.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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
[CALL TRANSACTION, standard](javascript:call_link\('abapcall_transaction_standard.htm'\))
[CALL TRANSACTION, USING](javascript:call_link\('abapcall_transaction_using.htm'\))
[Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\))


### abapcall_transaction_standard.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION, standard

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version specified in ta as described under the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to suppress the initial screen.

Hint

This variant does not set the system field sy-subrc.

Addition   

... AND SKIP FIRST SCREEN

Effect

This addition can be used to suppress the display of a [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   For the initial dynpro, its own dynpro number must not be entered as the static next dynpro in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

If these prerequisites are met, the screen of the dynpro is displayed that is specified in the Screen Painter as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the initial dynpro.

Example

If the static next dynpro of the initial dynpro of the called dialog transaction FLIGHT\_TA is not the initial dynpro itself, its screen is suppressed because its input fields are filled using the SPA/GPA parameters CAR and CON.

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
[CALL TRANSACTION, AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))


### abapcall_transaction_authority.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [CALL TRANSACTION, standard](javascript:call_link\('abapcall_transaction_standard.htm'\)) → 

CALL TRANSACTION, AUTHORITY-CHECK

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

... WITH*|*WITHOUT AUTHORITY-CHECK ...

Additions:

[1\. ... WITH AUTHORITY-CHECK](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT AUTHORITY-CHECK](#!ABAP_ADDITION_2@2@)

Effect

These additions control the authorization checks when the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) is executed.

Hint

The use of the statement CALL TRANSACTION without one of the additions WITH AUTHORITY-CHECK or WITHOUT AUTHORITY-CHECK is [obsolete](javascript:call_link\('abapcall_transaction_auth_obs.htm'\)).

Addition 1   

... WITH AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is checked using the following [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") before the transaction call is executed:

-   The authorization object S\_TCODE.
-   Any authorization object specified in the definition of the transaction code (transaction SE93). Fields of the authorization object for which no value is specified here are not checked.

If no authorization exists, a catchable exception of the class CX\_SY\_AUTHORIZATION\_ERROR is raised.

Hint

The use of the addition WITH AUTHORITY-CHECK is the recommended method of checking the authorizations of the current user. It replaces the preceding checks using the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check_shortref.htm'\)), the function module AUTHORITY\_CHECK\_TCODE, and checks that depend on the content of the DDIC database table [TCDCOUPLES](javascript:call_link\('abapcall_transaction_auth_obs.htm'\)).

Addition 2   

... WITHOUT AUTHORITY-CHECK

Effect

If this addition is specified, the authorization of the current user to execute the called transaction is not checked.

Hints

-   The addition WITHOUT AUTHORITY-CHECK indicates explicitly that no authorization check is necessary for the transaction call. It prevents the corresponding error message from the security test in the [extended program checks](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry").
-   If the addition WITHOUT AUTHORITY-CHECK is specified, the content of the DDIC database table [TCDCOUPLES](javascript:call_link\('abapcall_transaction_auth_obs.htm'\)) is ignored.


### abapcall_transaction_standard.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION, standard

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) *\[*AND SKIP FIRST SCREEN*\]*.

Addition:

[... AND SKIP FIRST SCREEN](#!ABAP_ONE_ADD@1@)

Effect

This variant calls the version specified in ta as described under the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check. AND SKIP FIRST SCREEN can be used to suppress the initial screen.

Hint

This variant does not set the system field sy-subrc.

Addition   

... AND SKIP FIRST SCREEN

Effect

This addition can be used to suppress the display of a [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro of a called dialog transaction. The addition AND SKIP FIRST SCREEN suppresses the first screen only under the following prerequisites:

-   For the initial dynpro, its own dynpro number must not be entered as the static next dynpro in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").
-   All mandatory input fields of the initial dynpro must be filled completely and with the correct values by the [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

If these prerequisites are met, the screen of the dynpro is displayed that is specified in the Screen Painter as the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the initial dynpro.

Example

If the static next dynpro of the initial dynpro of the called dialog transaction FLIGHT\_TA is not the initial dynpro itself, its screen is suppressed because its input fields are filled using the SPA/GPA parameters CAR and CON.

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
[CALL TRANSACTION, AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))


### abapcall_transaction_using.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION, USING

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Additions:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check.

bdc\_tab expects an internal table with the line type BDCDATA from the ABAP Dictionary. The additions control its processing.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program, and no other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro to be processed

DYNBEGIN

Flag for the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](javascript:call_link\('abenbatch_input_table.htm'\)) of the internal table bdc\_tab, any number of screens of the called transaction can be provided with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Hints

-   Calling a transaction using a batch input table is actually not the same as executing [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). However, there is no exact dividing line between the two, since batch input-based frameworks, such as [CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry"), and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. As a result, they can use certain options that are not available in genuine batch input.
-   The control options for a batch input table include the control options for [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in real [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"), and sometimes exceed them.

Example

Call of transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

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

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions MODE or OPTIONS FROM are used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processing with display of the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry")

"E"

Display of screens only if an error occurs

"N"

Processing without display of the screens. If a breakpoint is reached in one of the called [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. Then, the field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processing without display of the screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2   

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions UPDATE or OPTIONS FROM are used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") of the called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\)) had been executed in it.

Others

As for "A".

Hint

This option is not available for execution of [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). Updates are always synchronous here.

Addition 3   

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling the processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from the ABAP Dictionary. The CTU\_PARAMS structure has the components shown in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry") mode for processing. While [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry") is used mostly for data transfer, CATT processes are designed to be reusable tests of more complex [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"). Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Flag to indicate whether the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Flag to indicate whether the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) terminates processing or not. Values: " " ( COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

Without the addition OPTIONS FROM, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4   

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") sent during batch input processing are stored in an internal table itab of the line type BDCMSGCOLL from the ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))

Continue
[CALL TRANSACTION, Batch Input Table](javascript:call_link\('abenbatch_input_table.htm'\))


### abenbatch_input_table.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [CALL TRANSACTION, USING](javascript:call_link\('abapcall_transaction_using.htm'\)) → 

CALL TRANSACTION, Batch Input Table

A [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") of the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") BDCDATA , which is specified after the addition USING of the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) in [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") calls, must have the following content, which is achieved by appending lines to an initial table in this order:

-   For each new dynpro, a new line with
    -   A program name in the column PROGRAM
    -   A dynpro number in the column DYNPRO
    -   A flag "X" in the column DYNBEGIN
-   For each input field to be filled, a line with
    
    -   The name of the dynpro field in the column FNAM
    -   The value to be passed in the column FVAL
    
    If the field is part of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), the desired line number must be appended to the field name. If the dynpro contains [subscreens](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry"), their fields are assigned to the including dynpro. This can produce multiple fields with the same name, which are then all filled.
    
-   If the cursor is to be positioned on a screen element
    
    -   The value "BDC\_CURSOR" in the column FNAM
    -   The name of the screen element in the column FVAL
    
    If the cursor is to be positioned on a screen element in a table control or step loop, the desired line number must be appended to the name of the element.
    
-   For each dynpro, the function code
    -   The value "BDC\_OKCODE" in the column FNAM
    -   A function code in the column FVAL

Any columns in a line that are not listed remain initial.

Hints

-   Transaction Recorder (transaction SHDB) records executed transactions as batch input tables. The resulting batch input tables can be displayed and edited. Programs and function modules can be generated for their use.
-   In [batch input folders](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry"), multiple field names of subscreens can be distinguished by specifying the special value "BDC\_SUBSCR in a preceding line in the column FNAM and in the column FVAL of the subscreen.

Executable Example

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))


### abapcall_transaction_using.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION, USING

[Short Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Additions:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check.

bdc\_tab expects an internal table with the line type BDCDATA from the ABAP Dictionary. The additions control its processing.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program, and no other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro to be processed

DYNBEGIN

Flag for the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](javascript:call_link\('abenbatch_input_table.htm'\)) of the internal table bdc\_tab, any number of screens of the called transaction can be provided with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Hints

-   Calling a transaction using a batch input table is actually not the same as executing [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). However, there is no exact dividing line between the two, since batch input-based frameworks, such as [CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry"), and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. As a result, they can use certain options that are not available in genuine batch input.
-   The control options for a batch input table include the control options for [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in real [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"), and sometimes exceed them.

Example

Call of transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

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

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions MODE or OPTIONS FROM are used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processing with display of the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry")

"E"

Display of screens only if an error occurs

"N"

Processing without display of the screens. If a breakpoint is reached in one of the called [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. Then, the field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processing without display of the screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2   

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions UPDATE or OPTIONS FROM are used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") of the called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\)) had been executed in it.

Others

As for "A".

Hint

This option is not available for execution of [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). Updates are always synchronous here.

Addition 3   

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling the processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from the ABAP Dictionary. The CTU\_PARAMS structure has the components shown in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry") mode for processing. While [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry") is used mostly for data transfer, CATT processes are designed to be reusable tests of more complex [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"). Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Flag to indicate whether the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Flag to indicate whether the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) terminates processing or not. Values: " " ( COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

Without the addition OPTIONS FROM, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4   

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") sent during batch input processing are stored in an internal table itab of the line type BDCMSGCOLL from the ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))

Continue
[CALL TRANSACTION, Batch Input Table](javascript:call_link\('abenbatch_input_table.htm'\))


### abentransactions_abexas.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

Transaction Call, Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](javascript:call_link\('abencall_transaction_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, Report Transaction](javascript:call_link\('abencall_transaction_repo_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](javascript:call_link\('abencall_transaction_dialog_abexa.htm'\))


### abencall_transaction_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

Transaction Call, SPA/GPAParameters

The example demonstrates a transaction call using SPA/GPA parameters.

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

The transaction DEMO\_TRANSACTION displays the details for a flight uniquely identified by the airline and the flight number. It is called from main using the statement CALL TRANSACTION and filled with [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry") as initial values using the statement SET PARAMETER.


### abencall_transaction_bdc_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

Transaction Call, BDC Table

This example demonstrates a transaction call using a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_call\_transaction\_bdc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'.
    DATA bdcdata\_tab TYPE TABLE OF bdcdata WITH EMPTY KEY.
    bdcdata\_tab = VALUE #(
      ( program  = 'SAPLSEOD' dynpro   = '1000' dynbegin = 'X' )
      ( fnam = 'BDC\_CURSOR'       fval = 'SEOCLASS-CLSNAME' )
      ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name )
      ( fnam = 'BDC\_OKCODE'       fval = '=WB\_DISPLAY' ) ).
    DATA(opt) = VALUE ctu\_params( dismode = 'E'
                                  defsize = 'X' ).
    TRY.
        CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                                USING bdcdata\_tab OPTIONS FROM opt.
      CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Call of the Class Builder (transaction SE24) and display of the class CL\_ABAP\_BROWSER. The required authorization is checked by using the addition WITH AUTHORITY-CHECK. The internal table bdcdata\_tab contains the entry for the processing of the first dynpro (1000) of the transaction. The structure opt is used to configure processing to skip the first screen and display the subsequent screen in standard size.


### abencall_transaction_repo_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

Transaction Call, Report Transaction

The example demonstrates a selection screen call using a report transaction.

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

When the assigned transaction DEMO\_REPORT\_TRANSACT is called, the executable program starts with the selection screen 500 in the same GUI window. Further processing is described in the executable example [Selection Screens, Calling Standalone Selection Screens](javascript:call_link\('abensel_screen_call_sel_scr_abexa.htm'\)).


### abencall_transaction_dialog_abexa.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

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

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

Transaction Call, Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](javascript:call_link\('abencall_transaction_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, Report Transaction](javascript:call_link\('abencall_transaction_repo_abexa.htm'\))
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](javascript:call_link\('abencall_transaction_dialog_abexa.htm'\))
