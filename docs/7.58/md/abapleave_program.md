  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Programs](javascript:call_link\('abenabap_leave_program.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LEAVE%20PROGRAM%2C%20ABAPLEAVE_PROGRAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LEAVE PROGRAM

[Short Reference](javascript:call_link\('abapleave_program_shortref.htm'\))

Syntax

LEAVE PROGRAM.

Effect

This statement immediately terminates the current [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") and deletes its [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), including all loaded programs, instances, and their data.

The statement LEAVE PROGRAM can appear anywhere within any processing block. It ends the program regardless of the program object or [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") of the internal session in which it is executed.

The runtime framework responds to LEAVE PROGRAM depending on how the main program of the internal session was called:

-   If the main program was called using [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), [SUBMIT AND RETURN](javascript:call_link\('abapsubmit.htm'\)), or [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)), the runtime framework returns to the calling program after the call position. If the main program was called using CALL DIALOG, the output parameters of the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") are passed to the calling program.
-   If the main program was called using [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) or using a transaction code from within a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the runtime framework returns to behind the position from which the first program in the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") was called.
-   If the main program was called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without the addition AND RETURN, the runtime framework returns to behind the position from which the calling program was started. The internal session of the calling program is also deleted, if it was preserved.

Hints

-   If procedures are still registered when a program is exited in the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), the SAP LUW is terminated without calling or rolling back the procedures. Any registered [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") are preserved in the database but can no longer be executed. In this case, the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) should be executed explicitly before exiting the program.
-   The statement [LEAVE](javascript:call_link\('abapleave-.htm'\)) without additions is obsolete.

Example

Exiting a program after a failed authorization check.

CALL FUNCTION 'AUTHORITY\_CHECK\_TCODE'
  EXPORTING
    tcode  = sy-tcode
  EXCEPTIONS
    ok     = 1
    not\_ok = 2
    OTHERS = 3.
IF sy-subrc > 1.
  LEAVE PROGRAM.
ENDIF.