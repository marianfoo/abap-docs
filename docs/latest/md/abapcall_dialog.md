  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_call_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20DIALOG%2C%20ABAPCALL_DIALOG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL DIALOG

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_dialog_shortref.htm)

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

The statement CALL DIALOG calls the [dialog module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_module_object_glosry.htm "Glossary Entry") whose name is contained in a flat character-like data object dialog. The data object dialog must contain the name in uppercase letters. The following can be specified for dialog:

-   Literal or constant
    
    If the data object dialog is specified as a [text field literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or as a [constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstant_glosry.htm "Glossary Entry"), it is evaluated as a statically specified object by tools such as the [extended program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_glosry.htm "Glossary Entry") or the where-used list.
    
-   Variable
    
    If the data object dialog is specified as a [variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm "Glossary Entry"), it is specified only dynamically, and the content is not evaluated statically.
    

When the statement is executed, dialog is not evaluated until runtime (in both cases). If the dialog module specified in dialog is not found, an uncatchable exception is raised.

When calling the dialog module, the assigned ABAP program is loaded into a new [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The session of the calling program is preserved. In contrast to [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm), the called program runs in the same [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_glosry.htm "Glossary Entry") as the calling program.

After the ABAP program is loaded, the event [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapload-of-program.htm) is triggered and the dynpro defined as the initial dynpro of the dialog module is called. The dialog module is terminated when the corresponding [dynpro sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") terminates upon reaching the next dynpro with dynpro number 0 or the program is exited using the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_program.htm).

Hints

-   Dialog modules are the only language resource that can be used to open a new internal session without changing the SAP LUW. The following should be noted:
    -   The statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) and [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback.htm) lead to database commits or database rollbacks in the called program.
    -   The statement COMMIT WORK starts the [background](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbg_remote_function_glosry.htm "Glossary Entry") or [transactional remote function calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentrfc_1_glosry.htm "Glossary Entry") registered in the dialog module using CALL FUNCTION ... IN BACKGROUND UNIT and CALL FUNCTION ... IN BACKGROUND TASK (obsolete). If [tRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentrfc_2_glosry.htm "Glossary Entry") or [qRFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenqrfc_glosry.htm "Glossary Entry") are registered in a dialog module and are not started with COMMIT WORK, they are not executed by the COMMIT WORK of the caller.
    -   [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") registered with [CALL FUNCTION IN UPDATE TASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_update.htm) and [PERFORM ON *{*COMMIT*|*ROLLBACK*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform.htm) are only executed with the corresponding statements COMMIT WORK and ROLLBACK WORK in the calling program.
    -   Changes to [persistent objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpersistent_object_glosry.htm "Glossary Entry") of the [object services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_services_glosry.htm "Glossary Entry") cannot be committed while CALL DIALOG is being executed. Changes made in the object services compatibility mode can be committed later using COMMIT WORK. On the other hand, calling the method END of a top-level transaction of the object-oriented transaction mode started in the called program has no effect either during or after CALL DIALOG. In object-oriented transaction mode, a transaction must be started before CALL DIALOG and then completed.
    -   In the called program, [SAP locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_lock_glosry.htm "Glossary Entry") are inherited by the calling program.
-   Calling dialog modules is replaced by calling methods of global classes or by function modules where function modules that can call the classic dynpros of their function pool. It is usually not necessary to open an internal session without changing the SAP LUW.

Addition 1   

... AND SKIP FIRST SCREEN

Effect

Under the same conditions as for the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm), this addition suppresses the display of the [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") of the initial dynpro. If the called dialog module has input parameters for the mandatory input fields of the initial dynpro, they can also be filled using parameter passing instead of [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry").

Addition 2   

... USING bdc\_tab *\[*MODE mode*\]*

Effect

This addition controls the called program by specifying a [batch input table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab of the line type BDCDATA like in the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm). Only MODE can be used here as an addition to control the processing.
If a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") is sent in the called program, this message is available in the system fields sy-msgid, sy-msgty, sy-msgno, sy-msgv1, ..., sy-msgv4 after the call.

Addition 3   

... EXPORTING p1 FROM a1 p2 FROM a2 ...

Addition 4   

... IMPORTING p1 TO a1 p2 TO a2 ...

Effect

These additions can be used to assign the appropriate actual parameters a1, a2, ... to the formal parameters p1, p2, ... of the dialog module. The formal parameters of a dialog module are always optional. They can have all data types except for reference types.
When loading the called program, the values of the actual parameters are assigned to the global data objects of the called program that are defined as formal parameters. If this data is linked with identically named [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry"), they are not overwritten by any SPA/GPA parameters.
If IMPORTING is specified, the system field sy-subrc is inherited implicitly by the called dialog module and unknown formal parameters are ignored by the system.

Hint

Outside of classes, the additions FROM a1, FROM a2, ... and TO a1, TO a2, ... in the parameter lists can be omitted if the formal parameters and actual parameters have the same names.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

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
![Example](exa.gif "Example") [Calling a Dialog Module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_dialog_abexa.htm)