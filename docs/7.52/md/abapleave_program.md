  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Programs](javascript:call_link\('abenabap_leave_program.htm'\)) → 

LEAVE PROGRAM

[Quick Reference](javascript:call_link\('abapleave_program_shortref.htm'\))

Syntax

LEAVE PROGRAM.

Effect

This statement ends the current [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") immediately and deletes its [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), including all loaded programs, instances, and their data.

The statement LEAVE PROGRAM can appear anywhere within any processing block. It ends the program regardless of the program or object in which it is executed or in which [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") of the internal session.

The way the runtime environment responds to LEAVE PROGRAM depends on how the main program was called in the internal session:

-   If the main program was called using [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), [SUBMIT AND RETURN](javascript:call_link\('abapsubmit.htm'\)), or [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)), the runtime environment returns to the calling program after the call point. If the main program was called using CALL DIALOG, the output parameters of the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") are passed to the calling program.
    
-   If the main program was called using [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) or using a transaction code from within a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the runtime environment returns to the point at which the first program in the current [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry") was called.
    
-   If the main program was called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without the addition AND RETURN, the runtime environment returns to the point at which the calling program was started.
    

Notes

-   If procedures are still registered when a program is exited in the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), the SAP LUW is ended without calling or rolling back the procedures. Any registered [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") are preserved in the database, but can no longer be executed. In this case, the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) should be executed explicitly before leaving the program.
    
-   The statement [LEAVE](javascript:call_link\('abapleave-.htm'\)) without additions is obsolete.
    

Example

Leaving a program after a failed authorization check.

CALL FUNCTION 'AUTHORITY\_CHECK\_TCODE'
  EXPORTING
    tcode  = sy-tcode
  EXCEPTIONS
    ok     = 1
    not\_ok = 2
    OTHERS           = 3.
IF sy-subrc > 1.
  LEAVE PROGRAM.
ENDIF.