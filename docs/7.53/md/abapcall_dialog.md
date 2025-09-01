  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_call_obsolete.htm) → 

CALL DIALOG

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog_shortref.htm)

Obsolete Syntax

CALL DIALOG dialog *\[* *{*AND SKIP FIRST SCREEN*}*
                   *|* *{*USING bdc\_tab *\[*MODE mode*\]**}* *\]*
                   *\[*EXPORTING p1 FROM a1 p2 FROM a2 ...*\]*
                   *\[*IMPORTING p1 TO a1 p2 TO a2 ...*\]*.

Extras:

[1\. ... AND SKIP FIRST SCREEN](#!ABAP_ADDITION_1@1@)
[2\. ... USING bdc\_tab *\[*MODE mode*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 FROM a1 p2 FROM a2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... IMPORTING p1 TO a1 p2 TO a2 ...](#!ABAP_ADDITION_4@4@)

Effect

The statement CALL DIALOG calls the [dialog module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_module_object_glosry.htm "Glossary Entry") whose name is contained in a flat character-like data object dialog. The data object dialog must contain the name in uppercase. The following can be specified for dialog:

-   Literal or constant
    

If the data object dialog is specified as a [text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.

-   Variable
    

If the data object dialog is specified as a [variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, dialog is not evaluated until runtime (in both cases). If the dialog module specified in dialog is not found, a non-handleable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded in a new [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The session of the calling program is preserved. In contrast to [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm), the called program runs in the same [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry") as the calling program.

After the ABAP program is loaded, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_program.htm).

Notes

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. Be aware of the following:
    

-   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprollback.htm) cause database commits or database rollbacks in the called program.

-   The statement COMMIT WORK starts the [background](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") or [transactional remote function calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_1_glosry.htm "Glossary Entry") registered in the dialog module using CALL FUNCTION ... IN BACKGROUND UNIT and CALL FUNCTION ... IN BACKGROUND TASK (obsolete). If [tRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_2_glosry.htm "Glossary Entry") or [qRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry") are registered in a dialog module and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.

-   The [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") registered with [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_update.htm) and [MOVE-CORRESPONDING *\[*EXACT*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm) are only executed with the corresponding statements COMMIT WORK and ROLLBACK WORK in the calling program.

-   Changes to [persistent objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpersistent_object_glosry.htm "Glossary Entry") of the [object services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry") cannot be committed while CALL DIALOG is being executed. Changes made in the object services compatibility mode can be committed later using COMMIT WORK. On the other hand, calling the method END of a top-level transaction called in the program (of the object-oriented transaction mode) does not have any effect, either during or after CALL DIALOG. In object-oriented transaction mode, a transaction must be called before CALL DIALOG and then completed.

-   In the called program, [SAP locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock_glosry.htm "Glossary Entry") are inherited by the calling program.

-   Calling dialog modules is replaced by calling methods of global classes or by function modules (function modules that can call the classic dynpros of their function group). It is usually not necessary to open an internal session without changing the SAP-LUW.
    

Addition 1

... AND SKIP FIRST SCREEN

Effect

Under the same conditions as for the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm), this addition suppresses the display of the [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_glosry.htm "Glossary Entry") of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using pass by parameter instead of [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry").

Addition 2

... USING bdc\_tab *\[*MODE mode*\]*

Effect

This addition controls the called program as in the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) by specifying a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab of the row type BDCDATA. In this case, only MODE can be used as an addition for the control of the processing.
If a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") is sent in the called program, this message is available in the system fields sy-msgid, sy-msgty, sy-msgno, sy-msgv1, ..., sy-msgv4 after the call.

Addition 3

... EXPORTING p1 FROM a1 p2 FROM a2 ...

Addition 4

... IMPORTING p1 TO a1 p2 TO a2 ...

Effect

These additions can be used to assign the appropriate actual parameters a1, a2, ... to the formal parameters p1, p2, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is associated with [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") of the same name, they are not overwritten by possible SPA/GPA parameters.
If IMPORTING is specified, the system field sy-subrc is applied implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Note

Outside of classes, the additions FROM a1, FROM a2, ... and TO a1, TO a2, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: A parameter name is too long.
    Runtime error: CALL\_DIALOG\_NAME\_TOO\_LONG
    
-   Cause: The called dialog module is unknown.
    Runtime error: CALL\_DIALOG\_NOT\_FOUND
    
-   Cause: The called dialog module contains errors (error in entry in table TDCT).
    Runtime error: CALL\_DIALOG\_WRONG\_TDCT\_MODE
    
-   Cause:No more paging area available for passing parameters.
    Runtime error: CALL\_DIALOG\_NO\_CONTAINER
    
-   Cause: The statement CALL DIALOG ... SCREEN ... PROGRAM ... is not supported.
    Runtime error: CALL\_DIALOG\_SCREEN/PROGRAM
    

Continue
![Example](exa.gif "Example") [Calling a Dialog Module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_dialog_abexa.htm)