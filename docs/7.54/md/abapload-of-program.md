---
title: "LOAD-OF-PROGRAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program_shortref.htm) Syntax LOAD-OF-PROGRAM. Effect This event keyword defines the program constructor(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_constructor_glosry.htm 'Glossary E
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program.htm"
abapFile: "abapload-of-program.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapload", "program"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_blocks.htm) →  [Program Constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_constructor.htm) → 

LOAD-OF-PROGRAM

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapload-of-program_shortref.htm)

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") of an executable program, a module pool, a function group, or a subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") when one of the executable programs mentioned above is loaded into the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry").

When a program is called using SUBMIT or using a transaction code, a new internal session is opened in every call and the event block is executed once in every call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that [statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenleave_program_units.htm) can be specified that exit the event block without returning to it.

The first time an external [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") (subroutine or function module) or a [subscreen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubscreen_glosry.htm "Glossary Entry") is called, the [master program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenframe_program_glosry.htm "Glossary Entry") of the called procedure is loaded into the internal session of the caller, thus raising the event LOAD-OF-PROGRAM. The event block is executed before the called procedure. Each time a procedure of the same master program is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is not raised.

Notes

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_glosry.htm "Glossary Entry"). If executable programs are called using SUBMIT, it is recommended that the event INITIALIZATION is used, since the [start values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstart_value_glosry.htm "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm)).
    
-   If a program is only loaded because declarations are required from it, such as when using [absolute type names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
    
-   [Class pools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") from the global class defined in the class pool can be used instead.
    

Example

Sets a global data object for the language as specified by the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).