# ABAP - Keyword Documentation / ABAP - Reference / Calling and leaving program units / Exiting Program Units

Included pages: 16



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenleave_program_units.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm)
- [abenabap_leave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm)
- [abapleave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program.htm)
- [abenleave_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm)
- [abenend_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm)
- [abapreturn.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm)
- [abapexit_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm)
- [abapcheck_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)
- [abapstop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop.htm)
- [abenleave_loops.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm)
- [abapexit_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm)
- [abapcheck_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_loop.htm)
- [abapcontinue.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcontinue.htm)

**Bundle Contains**: 13 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.435Z

---

### abenleave_program_units.htm

> **📖 Official SAP Documentation**: [abenleave_program_units.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) → 

Exiting Program Units

Program units that can be exited using ABAP statements are:

-   [Complete ABAP programs](javascript:call_link\('abenabap_leave_program.htm'\))

-   [Processing blocks](javascript:call_link\('abenleave_processing_blocks.htm'\))

-   [Loops](javascript:call_link\('abenleave_loops.htm'\))

This translation does not reflect the current version of the documentation.
Continue
[Exiting Programs](javascript:call_link\('abenabap_leave_program.htm'\))
[Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\))
[Exiting Loops](javascript:call_link\('abenleave_loops.htm'\))



**📖 Source**: [abenleave_program_units.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm)

### abenabap_leave_program.htm

> **📖 Official SAP Documentation**: [abenabap_leave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Programs

This section contains the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Continue
[LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))



**📖 Source**: [abenabap_leave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm)

### abapleave_program.htm

> **📖 Official SAP Documentation**: [abapleave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abapleave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program.htm)

### abenabap_leave_program.htm

> **📖 Official SAP Documentation**: [abenabap_leave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Programs

This section contains the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Continue
[LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))



**📖 Source**: [abenabap_leave_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm)

### abenleave_processing_blocks.htm

> **📖 Official SAP Documentation**: [abenleave_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Processing Blocks

[Processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") can be exited implicitly using the following:

-   [Regular exits](javascript:call_link\('abenend_processing_blocks.htm'\))

The following statements can be used to exit processing blocks in a program-driven way:

-   [RETURN](javascript:call_link\('abapreturn.htm'\))

-   [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))

-   [STOP](javascript:call_link\('abapstop.htm'\))

-   [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)) (obsolete, for logical databases only)

-   [REJECT](javascript:call_link\('abapreject.htm'\)) (obsolete, for logical databases only)

The way the program flow continues depends on the type of processing block.

In addition to the statements described here, any statements that call other units without returning to the caller after the call also exit their processing block. These include the following statements:

-   [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))

-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

[Messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") and raised [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Note

Exiting a procedure using RETURN (or EXIT or CHECK) is the error-free way to exit the procedure. Any formal parameters for which pass by value is defined are not passed to the associated actual parameters only in cases where the procedure terminates after an error (for example, if an exception is raised or a message is sent).

Continue
[Regular Exiting of a Processing Block](javascript:call_link\('abenend_processing_blocks.htm'\))
[RETURN](javascript:call_link\('abapreturn.htm'\))
[EXIT - processing\_block](javascript:call_link\('abapexit_processing_blocks.htm'\))
[CHECK - processing\_block](javascript:call_link\('abapcheck_processing_blocks.htm'\))
[STOP](javascript:call_link\('abapstop.htm'\))



**📖 Source**: [abenleave_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm)

### abenend_processing_blocks.htm

> **📖 Official SAP Documentation**: [abenend_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

Regular Exiting of a Processing Block

A processing block is exited in a regular when reaching its end. For processing blocks that are concluded using an END statement, this is the end. Event blocks that are not concluded explicitly with a statement have an implicit conclusion after their last statement.

Depending on the processing block exited, the runtime environment behaves as follows:

-   In [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), the program returns to after the point where they were called. The output parameters for which [pass by values](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") are defined are passed to the bound actual parameters.

-   In [dialog modules](javascript:call_link\('abendialog_module_glosry.htm'\) "Glossary Entry"), the program returns to after the point in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") where they were called.

-   In [event blocks](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry"), the control is given back to the runtime environment and the current process of the runtime environment continues with the program execution.

Example

Output before, during, and after execution of a procedure.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>write( \`In procedure\` ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>write( \`Before procedure\` ).
  demo=>main( ).
  cl\_demo\_output=>display( \`After procedure\` ).



**📖 Source**: [abenend_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenend_processing_blocks.htm)

### abapreturn.htm

> **📖 Official SAP Documentation**: [abapreturn.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

RETURN

[Quick Reference](javascript:call_link\('abapreturn_shortref.htm'\))

Syntax

RETURN.

Effect

This statement ends the current processing block immediately. It can appear at any point in a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") and ends this block regardless of the statement block or control structure in which the block appears.

After the processing block is exited, the runtime environment responds in the same way as when the [processing block is exited in a regular way](javascript:call_link\('abenend_processing_blocks.htm'\)) (with the exception of [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event blocks](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") START-OF-SELECTION and GET). In particular, the output parameters of procedures are passed to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using RETURN.
    
-   After the reporting event block START-OF-SELECTION is exited using RETURN, the runtime environment does not trigger any more reporting events; instead, it calls the list processor directly to display the basic list.
    
-   After the reporting event block GET is exited using RETURN, subordinate nodes in the hierarchical structure of the associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") are no longer processed. The logical database reads the next row of the current node or next higher node, if it has reached the end of the hierarchy level.
    

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Note

The statement RETURN is provided for exiting processing blocks early but correctly. However, since RETURN behaves differently in [GET](javascript:call_link\('abapget-.htm'\)) events than when the event block is exited as usual, the statement [REJECT](javascript:call_link\('abapreject_shortref.htm'\)) should be used here, which was designed especially for this purpose.

Example

Exits the method show\_list using RETURN if one of the formal parameters required (structure or data\_tab) is initial.

METHOD show\_list.
  "IMPORTING structure TYPE c
  "          data\_tab  TYPE ANY TABLE.
  DATA alv\_list TYPE REF TO cl\_gui\_alv\_grid.
  IF structure IS INITIAL OR
     data\_tab  IS INITIAL.
    RETURN.
  ENDIF.
  CREATE OBJECT alv\_list
         EXPORTING i\_parent = cl\_gui\_container=>screen0.
  alv\_list->set\_table\_for\_first\_display(
    EXPORTING i\_structure\_name = structure
    CHANGING  it\_outtab        = data\_tab ).
  CALL SCREEN 100.
ENDMETHOD.



**📖 Source**: [abapreturn.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreturn.htm)

### abapexit_processing_blocks.htm

> **📖 Official SAP Documentation**: [abapexit_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

EXIT - processing\_block

[Quick Reference](javascript:call_link\('abapexit_shortref.htm'\))

Syntax

EXIT.

Effect

If the statement EXIT is located outside a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"), the statement immediately terminates the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").

After the processing block is exited, the runtime environment responds in the same way as when the [processing block is exited in a regular way](javascript:call_link\('abenend_processing_blocks.htm'\)) (with the exception of the event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event blocks](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") START-OF-SELECTION and GET). In particular, the output parameters of procedures are passed to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using EXIT.
    
-   After the reporting event blocks START-OF-SELECTION and GET have been exited using EXIT, the runtime environment does not trigger any more reporting events; instead, it calls the list processor directly to display the basic list.
    

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Example

The method main contains two EXIT statements. Whereas the first statement exits the LOOP loop, the second statement exits the entire method. The RETURN statement should be used instead of the EXIT statement.

TYPES:
  BEGIN OF line,
    col1 TYPE string,
    col2 TYPE string,
  END OF line,
  itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING char TYPE string
                                 itab TYPE itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    LOOP AT itab INTO DATA(wa).
      FIND char IN wa-col1 RESPECTING CASE.
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDLOOP.
    FIND to\_upper( char ) IN wa-col2 RESPECTING CASE.
    IF sy-subrc <> 0.
      EXIT.                   "works as RETURN here!
    ENDIF.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(itab) = VALUE itab(
    ( col1 = \`aaaa\` col2 = \`AAAA\` )
    ( col1 = \`bbbb\` col2 = \`XXXX\` )
    ( col1 = \`cccc\` col2 = \`CCCC\` ) ).
  demo=>main( char = \`b\`
              itab = itab ).



**📖 Source**: [abapexit_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_processing_blocks.htm)

### abapcheck_processing_blocks.htm

> **📖 Official SAP Documentation**: [abapcheck_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

CHECK - processing\_block

[Quick Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

If the statement CHECK is located outside a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") and log\_exp is false, this statement exits the current processing block. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

After the processing block is exited, the runtime environment proceeds in the same way as when the [processing block is exited in the regular way](javascript:call_link\('abenend_processing_blocks.htm'\)) (with the exception of the event block [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event block](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") GET). In particular, the output parameters of procedures are passed to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using CHECK.
    
-   After the reporting event block GET is exited using CHECK, any subordinate nodes in the hierarchy structure of the associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") are no longer processed. The logical database reads the next row of the current node or next higher node, if it has reached the end of the hierarchy level.
    

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Notes

-   In a procedure (a method, function module, or subroutine), CHECK log\_exp works outside a loop in the same way as the following:
    

IF NOT log\_exp.
  RETURN.
ENDIF.

-   A further variant of the statement CHECK for exiting processing blocks is [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)). This can only be used in [GET event blocks](javascript:call_link\('abapget-.htm'\)) for logical databases.
    

Example

This example shows a case where CHECK can be used outside a loop. Right at the start of a procedure, a prerequisite for executing the procedure is checked (and the procedure exited if the check is not successful). In this case, the procedure cannot be executed in the background.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CHECK sy-batch IS INITIAL.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).



**📖 Source**: [abapcheck_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_processing_blocks.htm)

### abapstop.htm

> **📖 Official SAP Documentation**: [abapstop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

STOP

[Quick Reference](javascript:call_link\('abapstop_shortref.htm'\))

Syntax

STOP.

Effect

The statement STOP is only to be used in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") and in the following event blocks:

-   [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) (without additions)
    
-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))
    
-   [GET](javascript:call_link\('abapget-.htm'\))
    

These event blocks are exited using STOP and the runtime environment raises the event END-OF-SELECTION.

Note

The statement STOP cannot be used in methods and raises a non-handleable exception when processing [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)), during a [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) event, and in programs not called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

Example

Ends the event block GET sbook of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") F1S, after max postings have been issued, and branches to END-OF-SELECTION.

NODES: sflight,
       sbook.
DATA: bookings TYPE i,
      max TYPE i VALUE 100.
GET sflight.
  cl\_demo\_output=>next\_section( |{ sflight-carrid } | &&
                                |{ sflight-connid } | &&
                                |{ sflight-fldate }| ).
GET sbook.
  bookings = bookings + 1.
  cl\_demo\_output=>write( |{ sbook-bookid } | &&
                         |{ sbook-customid }| ).
  IF bookings = max.
    STOP.
  ENDIF.
END-OF-SELECTION.
  cl\_demo\_output=>line( ).
  cl\_demo\_output=>display( |First { bookings } bookings| ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The statement STOP was executed outside the process flow for an executable program.
    Runtime error: STOP\_NO\_REPORT
    
-   Cause: The statement STOP was executed during the process flow for a dynpro and therefore outside the permitted events.
    Runtime error: STOP\_WITHIN\_CALLED\_DYNPRO



**📖 Source**: [abapstop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstop.htm)

### abenleave_processing_blocks.htm

> **📖 Official SAP Documentation**: [abenleave_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Processing Blocks

[Processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") can be exited implicitly using the following:

-   [Regular exits](javascript:call_link\('abenend_processing_blocks.htm'\))

The following statements can be used to exit processing blocks in a program-driven way:

-   [RETURN](javascript:call_link\('abapreturn.htm'\))

-   [EXIT](javascript:call_link\('abapexit_processing_blocks.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))

-   [STOP](javascript:call_link\('abapstop.htm'\))

-   [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)) (obsolete, for logical databases only)

-   [REJECT](javascript:call_link\('abapreject.htm'\)) (obsolete, for logical databases only)

The way the program flow continues depends on the type of processing block.

In addition to the statements described here, any statements that call other units without returning to the caller after the call also exit their processing block. These include the following statements:

-   [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))

-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

-   [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))

-   [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) without AND RETURN

[Messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") and raised [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Note

Exiting a procedure using RETURN (or EXIT or CHECK) is the error-free way to exit the procedure. Any formal parameters for which pass by value is defined are not passed to the associated actual parameters only in cases where the procedure terminates after an error (for example, if an exception is raised or a message is sent).

Continue
[Regular Exiting of a Processing Block](javascript:call_link\('abenend_processing_blocks.htm'\))
[RETURN](javascript:call_link\('abapreturn.htm'\))
[EXIT - processing\_block](javascript:call_link\('abapexit_processing_blocks.htm'\))
[CHECK - processing\_block](javascript:call_link\('abapcheck_processing_blocks.htm'\))
[STOP](javascript:call_link\('abapstop.htm'\))



**📖 Source**: [abenleave_processing_blocks.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_processing_blocks.htm)

### abenleave_loops.htm

> **📖 Official SAP Documentation**: [abenleave_loops.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Loops

You can use the following statements to exit loops:

-   [EXIT](javascript:call_link\('abapexit_loop.htm'\))

-   [CONTINUE](javascript:call_link\('abapcontinue.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_loop.htm'\))

Continue
[EXIT - loop](javascript:call_link\('abapexit_loop.htm'\))
[CHECK - loop](javascript:call_link\('abapcheck_loop.htm'\))
[CONTINUE](javascript:call_link\('abapcontinue.htm'\))



**📖 Source**: [abenleave_loops.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm)

### abapexit_loop.htm

> **📖 Official SAP Documentation**: [abapexit_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

EXIT - loop

[Quick Reference](javascript:call_link\('abapexit_shortref.htm'\))

Syntax

EXIT.

Effect

If the EXIT statement is specified within a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"), it exits the loop by ending the current loop pass. The program flow resumes after the closing statement in the loop.

Note

Outside of a loop, the statement EXIT exits the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") (see [EXIT - Processing Block](javascript:call_link\('abapexit_processing_blocks.htm'\))). EXIT, however, should only be used within loops.

Example

Exits a loop using EXIT if the loop index sy-index is greater than a number limit.

DATA limit TYPE i VALUE 10.
DO.
  IF sy-index > limit.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ sy-index } | ).
ENDDO.
cl\_demo\_output=>display( ).



**📖 Source**: [abapexit_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexit_loop.htm)

### abapcheck_loop.htm

> **📖 Official SAP Documentation**: [abapcheck_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_loop.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

CHECK - loop

[Quick Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Syntax

CHECK [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Effect

If the statement CHECK is executed in a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") and log\_exp is incorrect, the statement CHECK exits the current loop pass immediately and the program continues with the next loop pass. Any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") can be specified for [log\_exp](javascript:call_link\('abenlogexp.htm'\)).

Notes

-   Inside a loop, CHECK log\_exp works just like the following:
    

IF NOT log\_exp.
  CONTINUE.
ENDIF.

-   Outside a loop, the statement CHECK exits the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") (see [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\))), however it is best to only use CHECK inside loops.
    

Example

Cancels a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).



**📖 Source**: [abapcheck_loop.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_loop.htm)

### abapcontinue.htm

> **📖 Official SAP Documentation**: [abapcontinue.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcontinue.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

CONTINUE

[Quick Reference](javascript:call_link\('abapcontinue_shortref.htm'\))

Syntax

CONTINUE.

Effect

The statement CONTINUE can only be used in [loops](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"). If it is used, the current loop pass is exited immediately and the program flow is continued with the next loop pass.

Example

Exits a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).



**📖 Source**: [abapcontinue.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcontinue.htm)

### abenleave_loops.htm

> **📖 Official SAP Documentation**: [abenleave_loops.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenleave_loops.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_loops.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) → 

Exiting Loops

You can use the following statements to exit loops:

-   [EXIT](javascript:call_link\('abapexit_loop.htm'\))

-   [CONTINUE](javascript:call_link\('abapcontinue.htm'\))

-   [CHECK](javascript:call_link\('abapcheck_loop.htm'\))

Continue
[EXIT - loop](javascript:call_link\('abapexit_loop.htm'\))
[CHECK - loop](javascript:call_link\('abapcheck_loop.htm'\))
[CONTINUE](javascript:call_link\('abapcontinue.htm'\))
