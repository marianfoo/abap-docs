  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_submit_report.htm) → 

SUBMIT

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_shortref.htm)

Syntax

SUBMIT *{*rep*|*(name)*}* *\[*[selscreen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_interface.htm)*\]*
                    *\[*[list\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_list_options.htm)*\]*
                    *\[*[job\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_via_job.htm)*\]*
                    *\[*AND RETURN*\]*.

Addition:

[... AND RETURN](#!ABAP_ONE_ADD@1@)

Effect

The statement SUBMIT calls an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). The executable program is executed as described under [Flow of an Executable Program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_process.htm). Depending on the addition AND RETURN, the calling program is either ended or interrupted. If the called program contains a syntax error, an uncatchable exception is raised. The [name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_name_glosry.htm "Glossary Entry") of the called program can be specified as follows:

-   rep

Direct static specification as rep.

-   (name)

Specification as the content of a parenthesized flat character-like data object name. The data object name must contain the name of the program to be called in uppercase letters. The following can be specified for name:

-   Literal or constant
    If the data object name is specified as a text field literal or as a constant, it can be evaluated statically and the called program is known as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime in both cases. If the program specified in name is not found, an uncatchable exception is raised.

The additions have the following meaning:

-   The additions [selscreen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_interface.htm) can be used to determine the [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry") for the called program and to supply it with values.
    

-   The additions [list\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_list_options.htm) can be used to affect the output medium and the page size of the basic list of the called program.
    

-   The program can be scheduled for [background processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbackround_processing_glosry.htm "Glossary Entry") by specifying [job\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_via_job.htm).

-   The addition AND RETURN determines whether the calling program is ended or interrupted. It defines the behavior regarding the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") and the behavior with respect to [SAP LUWs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry").

When the statement SUBMIT is executed, an authorization check for the [authorization group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_group_glosry.htm "Glossary Entry") specified in the [program attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") is performed using the [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM. The program attribute Start Using Variant is ignored in SUBMIT.

Security Hint

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendyn_call_scrty.htm).

Example

Call of a program DEMO\_PROGRAM\_SUBMIT\_REP without returning to the calling program.

SUBMIT demo\_program\_submit\_rep.

Addition

... AND RETURN

Effect

The addition AND RETURN determines whether the calling program is ended or interrupted. It defines in which [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") the submitted program is executed, how the current [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") is handled, and where the program execution continues after the program call is completed:

-   Without the addition AND RETURN, the calling program and its [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") is ended. The content of the system field sy-calld is copied from the calling program to the submitted program. The internal session is handled in one of two ways:

-   If the calling program was started with SUBMIT, the internal session of the submitted program replaces the internal session of the calling program at the same position of the current [call sequence](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_sequence_glosry.htm "Glossary Entry").

-   If the calling program was started with [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) or [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm), the submitted program is started in a new internal session of the current [call sequence](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_sequence_glosry.htm "Glossary Entry") while the internal session of the calling program is kept at its position of the call sequence.

When the submitted program is completed, processing continues in both cases behind the position from which the calling program was started. The internal session of the submitted program and the internal session of the calling program, which still exists in the second case, are deleted.

-   The addition AND RETURN interrupts the calling program. The submitted program is started in a new internal session of the current [call sequence](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The internal session of the calling program and the current [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") are preserved. The submitted program runs in its own SAP LUW. Once the submitted program is finished, its internal session is deleted and program execution of the calling program is continued after the statement SUBMIT in its internal session.

The number of internal sessions in a call sequence is restricted to nine. If this is exceeded by SUBMIT ... AND RETURN, the program is terminated and the entire call sequence is deleted.

Hints

-   Semantically, there is no difference between the options for handling the internal sessions after SUBMIT without AND RETURN. In both cases, the calling program is ended completely, and its internal session is deleted - either before starting the submitted program or after it is completed. No code behind the SUBMIT statement is executed. However, if the internal session of the calling program is preserved during the execution of the submitted program, it becomes one of the number of internal sessions of the call sequence, which cannot exceed the maximum of nine.

-   Hints on [LUWs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenluw_glosry.htm "Glossary Entry"):

-   SUBMIT does not end the current [database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), regardless of the addition AND RETURN.

-   A [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program has exactly the same effect as in the current program.

-   The statement SUBMIT with the addition AND RETURN opens a new [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry"), but it does not open a new [database LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW, in particular, can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. Under certain circumstances, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur during [local updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_update_glosry.htm "Glossary Entry").

-   If there are still procedures registered in the current [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry") for SUBMIT statements without AND RETURN, the SAP LUW is terminated without calling or rolling back the procedures. Registered [update function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") can no longer be executed. In this case, the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaprollback.htm) should be executed explicitly before the program is called.

-   It can be dangerous to use SUBMIT with AND RETURN at positions where no database commit can occur, for example between [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) statements for opened database cursors. A [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_commit.htm) in the called program, for example because of dynpro or list processing, can lead to an exception in the calling program.

Example

Call of a program DEMO\_PROGRAM\_SUBMIT\_REP and return to the calling program.

SUBMIT demo\_program\_submit\_rep AND RETURN.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The specified program was not found.
    Runtime error: LOAD\_PROGRAM\_NOT\_FOUND

-   Cause: An attempt was made to pass an invalid value to a selection using the addition SIGN.
    Runtime error: SUBMIT\_WRONG\_SIGN

-   Cause: The specified program is not a report.
    Runtime error: SUBMIT\_WRONG\_TYPE

-   Cause: An attempt was made to pass more than one value to a report parameter.
    Runtime error: SUBMIT\_IMPORT\_ONLY\_PARAMETER

-   Cause: An attempt was made to use WITH sel IN itab to pass a table without an appropriate layout to a selection.
    Runtime error: SUBMIT\_IN\_ITAB\_ILL\_STRUCTURE

-   Cause: An attempt was made to pass a parameter to the selection screen that cannot be converted to the target field.
    Runtime error: SUBMIT\_PARAM\_NOT\_CONVERTIBLE

-   Cause: The called program contains a syntax error.
    Runtime error: SYNTAX\_ERROR
    

Continue
[SUBMIT, selscreen\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_interface.htm)
[SUBMIT, list\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_list_options.htm)
[SUBMIT, job\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_via_job.htm)