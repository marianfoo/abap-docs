---
title: "PERFORM - ON COMMIT, ROLLBACK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm) Syntax PERFORM subr ON  COMMIT LEVEL idx  ROLLBACK . Addition: ... LEVEL idx(#!ABAP_ONE_ADD@1@) Effect This statement registers the subroutine directly specified using subr
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm"
abapFile: "abapperform_subr.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "method", "data", "abapperform", "subr"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw.htm) → 

PERFORM - ON COMMIT, ROLLBACK

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm)

Syntax

PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* ROLLBACK *}*.

Addition:

[... LEVEL idx](#!ABAP_ONE_ADD@1@)

Effect

This statement registers the subroutine directly specified using subr in the same program. The subroutine is not executed immediately, but a flag is set for execution when one of the statements [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprollback.htm) is reached.

The registered subroutines are executed if the statement COMMIT WORK or ROLLBACK WORK is executed in their work process and before update function modules registered using [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm). Subroutines that are registered during execution of an update function module for COMMIT are executed at the end of the non-local [update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry") in the update work process.

Programming Guideline

[Do not implement in function modules and subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")

Notes

-   Creating subroutines is obsolete. If new subroutines are required for PERFORM subr ON COMMIT or PERFORM subr ON ROLLBACK, they should only be used as wrapping for a method call and must not contain any other functional code.
    
-   Registered subroutines cannot have any parameter interface. Therefore, data can only be passed through external interfaces - for example, the ABAP memory. Subroutines that are executed in COMMIT WORK or ROLLBACK WORK are thus more suitable for management tasks, such as cleanup work at the end of a [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry"), than for database changes.
    
-   During processing of a registered subroutine after COMMIT WORK or ROLLBACK WORK, the statements PERFORM ... ON COMMIT, PERFORM ... ON ROLLBACK, COMMIT WORK, or ROLLBACK WORK must not be executed. Type "A" messages caught using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_parameter.htm) in function module calls execute the statement ROLLBACK WORK implicitly and are therefore also forbidden.
    
-   Update function modules registered using [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_update.htm) after COMMIT WORK in the processing of a registered subroutine are registered for the current [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry").
    

Addition

... LEVEL idx

Effect

In the case of subroutines registered for COMMIT, the order of execution can be controlled using the addition LEVEL, where idx expects a data object of the type i. The execution then takes place, sorted according to ascending value of idx. idx has the value 0, if a value is not explicitly specified. If the value is the same as idx or if no value is specified, the order of execution is the same as the order of registration. A subroutine registered multiple times for COMMIT or ROLLBACK is executed once in each case.

Example

Registers a subroutine insert of the same program for execution in the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm). The data is passed using the [ABAP memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry").

DATA(values) = VALUE demo\_update\_tab(
  ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
  ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
  ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
EXPORT values = values TO MEMORY ID 'INS'.
PERFORM insert ON COMMIT .
...
FORM insert.
  DATA values TYPE demo\_update\_tab.
  IMPORT values = values FROM MEMORY ID 'INS'.
  IF sy-subrc = 0.
    ...
  ENDIF.
ENDFORM.

Executable Example

[SAP LUW, ON COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_on_commit_abexa.htm)