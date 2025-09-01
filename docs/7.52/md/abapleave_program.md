---
title: "LEAVE PROGRAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program_shortref.htm) Syntax LEAVE PROGRAM. Effect This statement ends the current main program(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm 'Glossary Entry') immediatel
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program.htm"
abapFile: "abapleave_program.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "abapleave", "program"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleave_program_units.htm) →  [Exiting Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_leave_program.htm) → 

LEAVE PROGRAM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_program_shortref.htm)

Syntax

LEAVE PROGRAM.

Effect

This statement ends the current [main program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_program_glosry.htm "Glossary Entry") immediately and deletes its [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), including all loaded programs, instances, and their data.

The statement LEAVE PROGRAM can appear anywhere within any processing block. It ends the program regardless of the program or object in which it is executed or in which [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry") of the internal session.

The way the runtime environment responds to LEAVE PROGRAM depends on how the main program was called in the internal session:

-   If the main program was called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm), [SUBMIT AND RETURN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm), or [CALL DIALOG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_dialog.htm), the runtime environment returns to the calling program after the call point. If the main program was called using CALL DIALOG, the output parameters of the [dialog module](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_module_object_glosry.htm "Glossary Entry") are passed to the calling program.
    
-   If the main program was called using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm) or using a transaction code from within a [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"), the runtime environment returns to the point at which the first program in the current [call sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_sequence_glosry.htm "Glossary Entry") was called.
    
-   If the main program was called using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) without the addition AND RETURN, the runtime environment returns to the point at which the calling program was started.
    

Notes

-   If procedures are still registered when a program is exited in the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry"), the SAP LUW is ended without calling or rolling back the procedures. Any registered [update function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") are preserved in the database, but can no longer be executed. In this case, the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) should be executed explicitly before leaving the program.
    
-   The statement [LEAVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave-.htm) without additions is obsolete.
    

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