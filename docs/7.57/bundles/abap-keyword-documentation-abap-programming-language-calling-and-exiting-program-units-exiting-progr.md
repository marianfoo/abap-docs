# ABAP - Keyword Documentation / ABAP - Programming Language / Calling and Exiting Program Units / Exiting Program Units

Included pages: 16


### abenleave_program_units.htm

---
title: "Exiting Program Units"
description: |
  The following program units can be exited using ABAP statements: -   Complete ABAP programs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm) -   Processing blocks(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) -
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm"
abapFile: "abenleave_program_units.htm"
keywords: ["loop", "do", "if", "abenleave", "program", "units"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Program Units, ABENLEAVE_PROGRAM_UNITS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Exiting Program Units

The following program units can be exited using ABAP statements:

-   [Complete ABAP programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm)
-   [Processing blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm)
-   [Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm)

Continue
[Exiting Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm)
[Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm)
[Exiting Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm)


### abenabap_leave_program.htm

---
title: "Exiting Programs"
description: |
  This section describes the statement LEAVE PROGRAM(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm) used for exiting programs. Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the calle
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm"
abapFile: "abenabap_leave_program.htm"
keywords: ["update", "do", "if", "try", "abenabap", "leave", "program"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Programs, ABENABAP_LEAVE_PROGRAM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Exiting Programs

This section describes the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Hint

The statements for exiting programs are not possible in some contexts as for example during [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit_during_update.htm). Therefore they should not be used in [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry").

Continue
[LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm)


### abapleave_program.htm

---
title: "LEAVE PROGRAM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program_shortref.htm) Syntax LEAVE PROGRAM. Effect This statement immediately terminates the current main program(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm 'Glossary
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm"
abapFile: "abapleave_program.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "abapleave", "program"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LEAVE PROGRAM, ABAPLEAVE_PROGRAM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

LEAVE PROGRAM

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program_shortref.htm)

Syntax

LEAVE PROGRAM.

Effect

This statement immediately terminates the current [main program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm "Glossary Entry") and deletes its [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), including all loaded programs, instances, and their data.

The statement LEAVE PROGRAM can appear anywhere within any processing block. It ends the program regardless of the program object or [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry") of the internal session in which it is executed.

The runtime framework responds to LEAVE PROGRAM depending on how the main program of the internal session was called:

-   If the main program was called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm), [SUBMIT AND RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm), or [CALL DIALOG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_dialog.htm), the runtime framework returns to the calling program after the call position. If the main program was called using CALL DIALOG, the output parameters of the [dialog module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_object_glosry.htm "Glossary Entry") are passed to the calling program.
-   If the main program was called using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm) or using a transaction code from within a [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"), the runtime framework returns to behind the position from which the first program in the current [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry") was called.
-   If the main program was called using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) without the addition AND RETURN, the runtime framework returns to behind the position from which the calling program was started. The internal session of the calling program is also deleted, if it was preserved.

Hints

-   If procedures are still registered when a program is exited in the current [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry"), the SAP LUW is terminated without calling or rolling back the procedures. Any registered [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") are preserved in the database but can no longer be executed. In this case, the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) should be executed explicitly before exiting the program.
-   The statement [LEAVE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave-.htm) without additions is obsolete.

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


### abenabap_leave_program.htm

---
title: "Exiting Programs"
description: |
  This section describes the statement LEAVE PROGRAM(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm) used for exiting programs. Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the calle
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm"
abapFile: "abenabap_leave_program.htm"
keywords: ["update", "do", "if", "try", "abenabap", "leave", "program"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Programs, ABENABAP_LEAVE_PROGRAM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Exiting Programs

This section describes the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm) used for exiting programs.

Apart from LEAVE PROGRAM, the following statements are also used to exit programs that calls other programs without returning to the caller after the call:

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) without AND RETURN

Exiting certain processing blocks can also cause the entire program to be exited implicitly.

Hint

The statements for exiting programs are not possible in some contexts as for example during [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit_during_update.htm). Therefore they should not be used in [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry").

Continue
[LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_program.htm)


### abenleave_processing_blocks.htm

---
title: "Exiting Processing Blocks"
description: |
  Processing blocks(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') can be exited implicitly using: -   regular exiting(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm) or program-driven, using: -
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm"
abapFile: "abenleave_processing_blocks.htm"
keywords: ["select", "update", "do", "if", "try", "data", "abenleave", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Processing Blocks, ABENLEAVE_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exiting Processing Blocks

[Processing blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") can be exited implicitly using:

-   [regular exiting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm)

or program-driven, using:

-   [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm)
-   [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm)
-   [STOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm)
-   [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_select-options.htm) (obsolete, for logical databases only)
-   [REJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreject.htm) (obsolete, for logical databases only)

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_screen.htm)
-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_list-processing.htm)
-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) without AND RETURN

[Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") and raised [exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_glosry.htm "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   Exiting a procedure using RETURN, EXIT or CHECK is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).
-   The statements for [exiting programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm) are not recommended inside procedures. They are not allowed in contexts like [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit_during_update.htm) and lead to exceptions if a procedure is called from such a context.

Continue
[Regular Exiting of a Processing Block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm)
[RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm)
[EXIT, processing\_block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm)
[CHECK, processing\_block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm)
[STOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm)


### abenend_processing_blocks.htm

---
title: "Regular Exiting of a Processing Block"
description: |
  A processing block is terminated regularly when its end is reached. For processing blocks that are completed using an END statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement. Depending on the processing bl
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm"
abapFile: "abenend_processing_blocks.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abenend", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Regular Exiting of a Processing Block, ABENEND_PROCESSING_BLOCKS, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Regular Exiting of a Processing Block

A processing block is terminated regularly when its end is reached. For processing blocks that are completed using an END statement, this is the end. Event blocks that are not completed explicitly with a statement have an implicit completion after their last statement.

Depending on the processing block that is exited, the runtime framework behaves as follows:

-   In [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry"), the program returns to the position after the procedure call. The output parameters for which [pass by values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry") are defined are passed to the bound actual parameters.
-   In [dialog modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_glosry.htm "Glossary Entry"), the program returns to after the calling position in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry").
-   In [event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_block_glosry.htm "Glossary Entry"), the control is returned back to the runtime framework and the current process of the runtime framework continues with the program execution.

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


### abapreturn.htm

---
title: "RETURN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn_shortref.htm) Syntax RETURN. Effect This statement immediately terminates the current processing block. It can appear at any point in a processing block(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-U
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm"
abapFile: "abapreturn.htm"
keywords: ["select", "do", "if", "try", "method", "data", "abapreturn"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RETURN, ABAPRETURN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

RETURN

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn_shortref.htm)

Syntax

RETURN.

Effect

This statement immediately terminates the current processing block. It can appear at any point in a [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") and terminates this block regardless of the statement block or control structure in which the statement appears.

After the processing block has been exited, the runtime framework behaves as when the [processing block is exited in a regular way](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm), with the exception of [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) and the [reporting event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_event_glosry.htm "Glossary Entry") START-OF-SELECTION and GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using RETURN.
-   After the reporting event block START-OF-SELECTION is terminated using RETURN, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.
-   After the reporting event block GET is terminated using RETURN, subordinate nodes in the hierarchical structure of the linked [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   The statement RETURN is generally intended for early but proper returns from processing blocks.
-   Since RETURN behaves differently in [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) events than when the event block is terminated as usual, the statement [REJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreject_shortref.htm) should be used there, which was designed especially for this purpose.

Example

Exit of the method show\_list using RETURN if one of the formal parameters required (structure or data\_tab) is initial.

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


### abapexit_processing_blocks.htm

---
title: "Syntax"
description: |
  EXIT. Effect If the statement EXIT is outside a loop(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm 'Glossary Entry'), it immediately terminates the current processing block(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm"
abapFile: "abapexit_processing_blocks.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "types", "abapexit", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXIT, processing_block, ABAPEXIT_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

EXIT, processing\_block

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the statement EXIT is outside a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry"), it immediately terminates the current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry").

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in a regular way](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm), with the exception of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) and the [reporting event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_event_glosry.htm "Glossary Entry") START-OF-SELECTION and GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using EXIT.
-   After the reporting event blocks START-OF-SELECTION and GET have been terminated using EXIT, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Example

The method main contains two EXIT statements. Whereas the first statement exits the LOOP loop, the second statement exits the entire method. Therefore, the RETURN statement should be used instead of the second EXIT statement.

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
    LOOP AT itab INTO FINAL(wa).
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
  FINAL(itab) = VALUE itab(
    ( col1 = \`aaaa\` col2 = \`AAAA\` )
    ( col1 = \`bbbb\` col2 = \`XXXX\` )
    ( col1 = \`cccc\` col2 = \`CCCC\` ) ).
  demo=>main( char = \`b\`
              itab = itab ).


### abapcheck_processing_blocks.htm

---
title: "Syntax"
description: |
  CHECK log_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm). Effect If the statement CHECK is listed outside a loop(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm 'Glossary Entry') and log_exp is false, it terminates the current pro
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm"
abapFile: "abapcheck_processing_blocks.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "abapcheck", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CHECK, processing_block, ABAPCHECK_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

CHECK, processing\_block

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed outside a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is false, it terminates the current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). Any [logical expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm).

After the processing block is exited, the runtime framework behaves in the same way as when the [processing block is exited in the regular way](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm), with the exception of the event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) and the [reporting event block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreporting_event_glosry.htm "Glossary Entry") GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using CHECK.
-   After the reporting event block GET is terminated using CHECK, any subordinate nodes in the hierarchy structure of the linked [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   In a procedure (a method, function module, or subroutine), CHECK log\_exp works outside a loop in the same way as:
    
    IF NOT log\_exp.
      RETURN.
    ENDIF.
    
-   A further variant of the statement CHECK for exiting processing blocks is [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_select-options.htm), which can only be used in [GET event blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) for logical databases.

Example

This example shows a case where CHECK can be used outside a loop. At the start of a procedure, a prerequisite for executing the procedure is checked and the procedure exited if the check is not successful. In this case, the procedure must not be executed in the background.

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


### abapstop.htm

---
title: "STOP"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop_shortref.htm) Syntax STOP. Effect The statement STOP is only to be used in executable programs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') and in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm"
abapFile: "abapstop.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "data", "abapstop"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: STOP, ABAPSTOP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improveme
nt:)

STOP

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop_shortref.htm)

Syntax

STOP.

Effect

The statement STOP is only to be used in [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") and in the following event blocks:

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) (without additions)
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstart-of-selection.htm)
-   [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm)

These event blocks are exited immediately using STOP and the runtime framework raises the event END-OF-SELECTION.

Hint

The statement STOP is forbidden in methods and raises a uncatchable exception when processing [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm), during a [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapload-of-program.htm) event, and in programs not called using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm).

Example

Termination of the event block GET sbook of the [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") F1S, after max postings have been issued, and branching to END-OF-SELECTION.

NODES: sflight,
       sbook.
DATA: bookings TYPE i,
      max TYPE i VALUE 100.
GET sflight.
  cl\_demo\_output=>next\_section( |{ sflight-carrid } | &&
                                |{ sflight-connid } | &&
                                |{ sflight-fldate }| ).
GET sbook.
  bookings += 1.
  cl\_demo\_output=>write( |{ sbook-bookid } | &&
                         |{ sbook-customid }| ).
  IF bookings = max.
    STOP.
  ENDIF.
END-OF-SELECTION.
  cl\_demo\_output=>line( ).
  cl\_demo\_output=>display( |First { bookings } bookings| ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The statement STOP was executed outside the process flow for an executable program.
    Runtime error: STOP\_NO\_REPORT
-   Cause: The statement STOP was executed during the process flow for a dynpro and therefore outside the allowed events.
    Runtime error: STOP\_WITHIN\_CALLED\_DYNPRO


### abenleave_processing_blocks.htm

---
title: "Exiting Processing Blocks"
description: |
  Processing blocks(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm 'Glossary Entry') can be exited implicitly using: -   regular exiting(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm) or program-driven, using: -
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_processing_blocks.htm"
abapFile: "abenleave_processing_blocks.htm"
keywords: ["select", "update", "do", "if", "try", "data", "abenleave", "processing", "blocks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Processing Blocks, ABENLEAVE_PROCESSING_BLOCKS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exiting Processing Blocks

[Processing blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") can be exited implicitly using:

-   [regular exiting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm)

or program-driven, using:

-   [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm)
-   [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm)
-   [STOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm)
-   [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_select-options.htm) (obsolete, for logical databases only)
-   [REJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreject.htm) (obsolete, for logical databases only)

The subsequent program flow depends on the type of processing block.

In addition to the statements described here, statements that call other units without returning to the caller after the call is made, also terminate their processing block. These include:

-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_screen.htm)
-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_list-processing.htm)
-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm)
-   [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm) without AND RETURN

[Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") and raised [exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_glosry.htm "Glossary Entry") can also exit processing blocks.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   Exiting a procedure using RETURN, EXIT or CHECK is the error-free termination of the procedure. Formal parameters for which the pass by value is defined are not passed to the assigned actual parameters only if the procedure terminates after an error (an exception is raised or a message is sent).
-   The statements for [exiting programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_leave_program.htm) are not recommended inside procedures. They are not allowed in contexts like [unit tests](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_test_glosry.htm "Glossary Entry") or during [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit_during_update.htm) and lead to exceptions if a procedure is called from such a context.

Continue
[Regular Exiting of a Processing Block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenend_processing_blocks.htm)
[RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm)
[EXIT, processing\_block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm)
[CHECK, processing\_block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm)
[STOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstop.htm)


### abenleave_loops.htm

---
title: "Exiting Loops"
description: |
  The following statement can be used to exit a loop completely: -   EXIT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm) The following statements can be used to exit the current loop pass: -   CONTINUE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapco
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm"
abapFile: "abenleave_loops.htm"
keywords: ["loop", "do", "if", "abenleave", "loops"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Loops, ABENLEAVE_LOOPS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Exiting Loops

The following statement can be used to exit a loop completely:

-   [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm)

The following statements can be used to exit the current loop pass:

-   [CONTINUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm)

Continue
[EXIT, loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm)
[CHECK, loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm)
[CONTINUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm)


### abapexit_loop.htm

---
title: "EXIT, loop"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_shortref.htm) Syntax EXIT. Effect If the EXIT statement is listed within a loop(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm 'Glossary Entry'), it exits the loop by terminating t
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm"
abapFile: "abapexit_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapexit"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXIT, loop, ABAPEXIT_LOOP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

EXIT, loop

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the EXIT statement is listed within a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry"), it exits the loop by terminating the current loop pass. The program flow resumes after the closing statement of the loop.

Hint

Outside of a loop, the statement EXIT exits the current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [EXIT - Processing Block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_processing_blocks.htm)). EXIT, however, it should only be used within loops.

Example

Exit of a loop using EXIT if the loop index sy-index is greater than a number limit.

DATA limit TYPE i VALUE 10.
DO.
  IF sy-index > limit.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ sy-index } | ).
ENDDO.
cl\_demo\_output=>display( ).


### abapcheck_loop.htm

---
title: "CHECK, loop"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_shortref.htm) Syntax CHECK log_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm). Effect If the statement CHECK is listed in a loop(https://help.sap.com/doc/abapdocu_757_index_htm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm"
abapFile: "abapcheck_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcheck"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CHECK, loop, ABAPCHECK_LOOP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

CHECK, loop

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed in a [loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is false, the statement CHECK immediately terminates the current loop pass and the program continues with the next loop pass. Any [logical expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm).

Hints

-   Within a loop, CHECK log\_exp has the same effect as:
    
    IF NOT log\_exp.
      CONTINUE.
    ENDIF.
    
-   Outside a loop, the statement CHECK exits the current [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_processing_blocks.htm)), however it is recommended that only CHECK is used inside loops.

Example

Termination of a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).


### abapcontinue.htm

---
title: "CONTINUE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue_shortref.htm) Syntax CONTINUE. Effect The statement CONTINUE may only be used in loops(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm 'Glossary Entry'). If it is used, the curr
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm"
abapFile: "abapcontinue.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcontinue"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONTINUE, ABAPCONTINUE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for i
mprovement:)

CONTINUE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue_shortref.htm)

Syntax

CONTINUE.

Effect

The statement CONTINUE may only be used in [loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_glosry.htm "Glossary Entry"). If it is used, the current loop pass is terminated immediately and the program flow is continued with the next loop pass.

Example

Exit of a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).


### abenleave_loops.htm

---
title: "Exiting Loops"
description: |
  The following statement can be used to exit a loop completely: -   EXIT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm) The following statements can be used to exit the current loop pass: -   CONTINUE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapco
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_loops.htm"
abapFile: "abenleave_loops.htm"
keywords: ["loop", "do", "if", "abenleave", "loops"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exiting Loops, ABENLEAVE_LOOPS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Exiting Loops

The following statement can be used to exit a loop completely:

-   [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm)

The following statements can be used to exit the current loop pass:

-   [CONTINUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm)

Continue
[EXIT, loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm)
[CHECK, loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcheck_loop.htm)
[CONTINUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontinue.htm)
