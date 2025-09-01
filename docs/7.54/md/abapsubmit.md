  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_submit_report.htm) → 

SUBMIT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_shortref.htm)

Syntax

SUBMIT *{*rep*|*(name)*}* *\[*[selscreen\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_interface.htm)*\]*
                    *\[*[list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm)*\]*
                    *\[*[job\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm)*\]*
                    *\[*AND RETURN*\]*.

Addition:

[... AND RETURN](#!ABAP_ONE_ADD@1@)

Effect

The statement SUBMIT calls an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). The executable program is executed as described under [Flow of an Executable Program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm). If the called program contains a syntax error, an exception is raised that cannot be handled. The [name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_name_glosry.htm "Glossary Entry") of the called program can be specified as follows:

-   rep
    

Specified directly and statically as rep.

-   (name)
    

Specified as the content of a parenthesized flat character-like data object name. The data object name must contain the name of the program accessed in uppercase letters. The following can be specified for name:

-   Literal or constants
    If the data object name is specified as a text field literal or as a constant, it can be evaluated statically and the called program is known as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases). If the program specified in name is not found, a non-handleable exception is raised.

The additions have the following meaning:

-   The additions [selscreen\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_interface.htm) can be used to determine the [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") for the program accessed and to supply it with values.
    
-   The additions [list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) allow the output medium and the page size to be specified in the basic list for the called program.
    
-   The program can be scheduled for [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry") by specifying [job\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm).
    
-   The addition AND RETURN determines the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") and the behavior with respect to [SAP LUWs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry").
    

When the statement SUBMIT is executed, it is followed by an authorization check (using the [authorization object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM) for the [authorization group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthorization_group_glosry.htm "Glossary Entry") specified in the [program attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). The program attribute Start Using Variant is ignored if SUBMIT is used.

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_call_scrty.htm).

Example

Call program DEMO\_PROGRAM\_SUBMIT\_REP without returning to the calling program.

SUBMIT demo\_program\_submit\_rep.

Addition

... AND RETURN

Effect

The addition AND RETURN determines the object accessed by the runtime environment after the program is called:

-   If the addition AND RETURN is not specified, the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the program accessed replaces the internal session of the calling program in the same position in the [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"), with the current [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry") being exited. Once program access is completed, the system returns to before the position from which the calling program was started. The content of the system field sy-calld at SUBMIT is copied by the calling program without AND RETURN.
    
-   The addition AND RETURN starts the executable program in a new internal session of the current [call sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_sequence_glosry.htm "Glossary Entry"). The session of the calling program and the current [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry") are preserved. The called program runs in its own SAP LUW. Once the program call is finished, resumes execution of the program execution is continued after the statement SUBMIT.
    

The number of internal sessions in a call sequence is restricted to nine. If this is exceeded by SUBMIT ... AND RETURN, the program terminates and the entire call sequence is deleted.

Notes

-   SUBMIT does not end the current [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), regardless of the addition AND RETURN. A [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") in the called program works in exactly the same way as in the current program.
    
-   The statement SUBMIT with the addition AND RETURN opens a new [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry"), but it does not open a new [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). This means that a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry") in this SAP LUW can roll back all registration entries made by the statements [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_update.htm) or [CALL FUNCTION IN BACKGROUND TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_background_task.htm) in the tables VB... or ARFCSSTATE and ARFCSDATA. Under certain circumstances, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) in the called program can also affect the interrupted SAP LUW. To prevent this, an explicit [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") must be executed before the program is called. This problem does not occur in [local updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_update_glosry.htm "Glossary Entry").
    
-   If there are still procedures registered in the current [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw_glosry.htm "Glossary Entry") in the case of SUBMITs without AND RETURN, the SAP LUW exits without calling or rolling back the procedures. Registered [update function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") can no longer be executed. In cases like this, therefore, it is advisable to execute the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) explicitly before the program call.
    

Example

Call program DEMO\_PROGRAM\_SUBMIT\_REP and return to the calling program.

SUBMIT demo\_program\_submit\_rep AND RETURN.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

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
[SUBMIT - selscreen\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_interface.htm)
[SUBMIT - list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm)
[SUBMIT - job\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm)