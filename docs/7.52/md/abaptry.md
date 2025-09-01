---
title: "TRY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry_shortref.htm) Syntax TRY. try_block CATCH(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) BEFORE UNWIND cx_class1 cx_class2 ... INTO oref. catch_bl
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm"
abapFile: "abaptry.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abaptry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) → 

TRY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry_shortref.htm)

Syntax

TRY.
    *\[*try\_block*\]*
  *\[*[CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.
    *\[*catch\_block*\]**\]*
    ...
  *\[* [CLEANUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcleanup.htm) *\[*INTO oref*\]*.
    *\[*cleanup\_block*\]**\]*
ENDTRY.

Effect

The statement TRY introduces a control structure with multiple statement blocks. The first statement block try\_block is always executed, whereas a branching off to exactly one of the remaining statement blocks only occurs if a [class-based exception](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") is raised in try\_block.

A TRY control structure defines the following statement blocks:

-   A TRY block try\_block directly after the statement TRY. The TRY block defines a protected area whose class-based exceptions can be handled in the subsequent CATCH blocks. If no exception is raised in the TRY block and it reaches its end, the system resumes processing after ENDTRY. If a class-based exception is raised in the TRY block, the system searches for an exception handler in the same TRY control structure or in an external structure (see [System Behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_system_response.htm)).
    
-   One or more optional CATCH blocks catch\_block for handling exceptions, each directly after a [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm) statement. If the end of a CATCH block is reached without it being left early, the processing continues after the ENDTRY. The special statements [RETRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapretry.htm) and [RESUME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapresume.htm) can be listed in a CATCH block, to control the behavior of exception handling.
    
-   An optional CLEANUP block cleanup\_block for cleanups directly after the statement [CLEANUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcleanup.htm).
    

A TRY control structure invalidates the simultaneous use of the obsolete statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm) to handle [catchable runtime errors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencatchable_runtime_error_glosry.htm "Glossary Entry") in the current [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry").

Notes

-   All statement blocks of a TRY control structure can contain any kind of control structures, in particular further TRY control structures.
    
-   No exceptions (except those in category CX\_NO\_CHECK from event handlers) can be propagated from the [static constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-methods_constructor.htm) and [event handlers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_event_handler.htm), which means they must always be handled locally.
    

Example

Division by zero in a TRY block. The relevant exception is caught with [CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm).

TRY.
    cl\_demo\_output=>display( 1 / 0 ).
  CATCH cx\_sy\_arithmetic\_error INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Executable Example

[Exceptions, TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentry_abexa.htm)

Continue
[CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_try.htm)
[RESUME](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapresume.htm)
[RETRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapretry.htm)
[CLEANUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcleanup.htm)
[ENDTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendtry.htm)