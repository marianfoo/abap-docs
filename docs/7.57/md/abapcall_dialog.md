  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DIALOG, ABAPCALL_DIALOG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

CALL DIALOG

[Short Reference](javascript:call_link\('abapcall_dialog_shortref.htm'\))

Obsolete Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Additions:

[1\. ... AND SKIP FIRST SCREEN](#!ABAP_ADDITION_1@1@)
[2\. ... USING bdc\_tab *\[*MODE mode*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 FROM a1 p2 FROM a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... IMPORTING p1 TO a1 p2 TO a2 ...](#!ABAP_ADDITION_4@4@)

Effect

The statement CALL DIALOG calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") whose name is contained in a flat character-like data object dialog. The data object dialog must contain the name in uppercase letters. The following can be specified for dialog:

-   Literal or constant
    
    If the data object dialog is specified as a [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or as a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object dialog is specified as a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, dialog is not evaluated until runtime (in both cases). If the dialog module specified in dialog is not found, an uncatchable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded into a new [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The session of the calling program is preserved. In contrast to [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), the called program runs in the same [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") as the calling program.

After the ABAP program is loaded, the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)).

Hints

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. The following should be noted:
    -   The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) lead to database commits or database rollbacks in the called program.
    -   The statement COMMIT WORK starts the [background](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") or [transactional remote function calls](javascript:call_link\('abentrfc_1_glosry.htm'\) "Glossary Entry") registered in the dialog module using CALL FUNCTION ... IN BACKGROUND UNIT and CALL FUNCTION ... IN BACKGROUND TASK (obsolete). If [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") or [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry") are registered in a dialog module and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.
    -   [Procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") registered with [CALL FUNCTION IN UPDATE TASK](javascript:call_link\('abapcall_function_update.htm'\)) and [MOVE-CORRESPONDING *\[*EXACT*\]*](javascript:call_link\('abapperform.htm'\)) are only executed with the corresponding statements COMMIT WORK and ROLLBACK WORK in the calling program.
    -   Changes to [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") of the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") cannot be committed while CALL DIALOG is being executed. Changes made in the object services compatibility mode can be committed later using COMMIT WORK. On the other hand, calling the method END of a top-level transaction of the object-oriented transaction mode started in the called program has no effect either during or after CALL DIALOG. In object-oriented transaction mode, a transaction must be started before CALL DIALOG and then completed.
    -   In the called program, [SAP locks](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") are inherited by the calling program.
-   Calling dialog modules is replaced by calling methods of global classes or by function modules where function modules that can call the classic dynpros of their function pool. It is usually not necessary to open an internal session without changing the SAP-LUW.

Addition 1   

... AND SKIP FIRST SCREEN

Effect

Under the same conditions as for the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), this addition suppresses the display of the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using parameter passing instead of [SPA/GPA parameters](javascript:call_link\('abenspa_gpa_parameter_glosry.htm'\) "Glossary Entry").

Addition 2   

... USING bdc\_tab *\[*MODE mode*\]*

Effect

This addition controls the called program by specifying a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab of the line type BDCDATA like in the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). Only MODE can be used here as an addition to control the processing.
If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is sent in the called program, this message is available in the system fields sy-msgid, sy-msgty, sy-msgno, sy-msgv1, ..., sy-msgv4 after the call.

Addition 3   

... EXPORTING p1 FROM a1 p2 FROM a2 ...

Addition 4   

... IMPORTING p1 TO a1 p2 TO a2 ...

Effect

These additions can be used to assign the appropriate actual parameters a1, a2, ... to the formal parameters p1, p2, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is linked with identically named [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"), they are not overwritten by any SPA/GPA parameters.
If IMPORTING is specified, the system field sy-subrc is inherited implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Hint

Outside of classes, the additions FROM a1, FROM a2, ... and TO a1, TO a2, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: A parameter name is too long.
    Runtime error: CALL\_DIALOG\_NAME\_TOO\_LONG
-   Cause: The called dialog module is unknown.
    Runtime error: CALL\_DIALOG\_NOT\_FOUND
-   Cause: The called dialog module contains errors (error in entry in table TDCT).
    Runtime error: CALL\_DIALOG\_WRONG\_TDCT\_MODE
-   Cause: No further paging area available for passing parameters.
    Runtime error: CALL\_DIALOG\_NO\_CONTAINER
-   Cause: The statement CALL DIALOG ... SCREEN ... PROGRAM ... is not supported.
    Runtime error: CALL\_DIALOG\_SCREEN/PROGRAM

Continue
![Example](exa.gif "Example") [Calling a Dialog Module](javascript:call_link\('abencall_dialog_abexa.htm'\))