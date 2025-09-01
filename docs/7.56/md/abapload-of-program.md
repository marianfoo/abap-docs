---
title: "LOAD-OF-PROGRAM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapload-of-program_shortref.htm) Syntax LOAD-OF-PROGRAM. Effect This event keyword defines the program constructor(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_constructor_glosry.htm 'Glossary E
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapload-of-program.htm"
abapFile: "abapload-of-program.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abapload", "program"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_blocks.htm) →  [Program Constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_constructor.htm) → 

LOAD-OF-PROGRAM

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapload-of-program_shortref.htm)

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") of a function pool , executable program, module pool, or subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") if one of the executable programs listed above is loaded into the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry").

When a program is called using SUBMIT or a transaction code, a new internal session is opened each time a call is made and the event block is executed once for each call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that no [statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleave_program_units.htm) can be executed that exit the event block without returning to it.

The first time an external [procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocedure_glosry.htm "Glossary Entry") or a [subscreen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubscreen_glosry.htm "Glossary Entry") is called, the [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry") of the called procedure is loaded into the internal session of the caller and the event LOAD-OF-PROGRAM is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is no longer raised.

Hints

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_glosry.htm "Glossary Entry").
-   Any statements that exit the event block LOAD-OF-PROGRAM like [RETURN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreturn.htm) raise the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED and lead to errors from the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry"). Although the statement [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_program.htm) does not cause a runtime error, it should still not be used.
-   The event LOAD-OF-PROGRAM should not be used to call sophisticated processes, where the program flow can not be controlled by the caller. This includes especially those that involve user interactions, because then it cannot be guaranteed that the event block is fully executed.
-   It is discouraged to send any [messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_glosry.htm "Glossary Entry") in the event block LOAD-OF-PROGRAM that require user interaction and block the program flow, because this is not appropriate in the moment of loading a program. Since the [behavior of messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) depends on the context, where a program is loaded, you should not use them at all. A message of type E leads to runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED anyway.
-   For executable programs that are called using SUBMIT, it is recommended to use the event [INITIALIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization.htm), since the [start values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstart_value_glosry.htm "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm)) and because its event block must not be fully executed.
-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
-   [Class pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_pool_glosry.htm "Glossary Entry") do not have a program constructor, since the [static constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the global class defined in the class pool can be used instead.

Example

Sets a global data object for the language depending on the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).