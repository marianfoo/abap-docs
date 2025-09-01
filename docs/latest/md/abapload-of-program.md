  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Program Constructor](javascript:call_link\('abenprogram_constructor.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOAD-OF-PROGRAM%2C%20ABAPLOAD-OF-PROGRAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOAD-OF-PROGRAM

[Short Reference](javascript:call_link\('abapload-of-program_shortref.htm'\))

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") of a function pool, executable program, module pool, or subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") if such a program is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

When a program is called using SUBMIT or a transaction code, a new internal session is opened each time a call is made and the event block is executed once for each call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that no [statements](javascript:call_link\('abenleave_program_units.htm'\)) can be executed that exit the event block without returning to it.

The first time an external [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") or a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") is called, the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") of the called procedure is loaded into the internal session of the caller and the event LOAD-OF-PROGRAM is raised. The event block is executed before the called procedure. Each time a procedure of the same compilation unit is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is no longer raised.

Hints

-   The event LOAD-OF-PROGRAM should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions, because then it cannot be guaranteed that the event block is fully executed.
-   If a program is only loaded because declarations are required of it, for example, when using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
-   [Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") of the global class defined in the class pool can be used instead.
-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry").
-   Any statements that exit the event block LOAD-OF-PROGRAM like [RETURN](javascript:call_link\('abapreturn.htm'\)) raise the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED and lead to errors from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry"). Although the statement [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\)) does not cause a runtime error, it should still not be used.
-   It is discouraged to send any [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in the event block LOAD-OF-PROGRAM that require user interaction and block the program flow, because this is not appropriate in the moment of loading a program. Since the [behavior of messages](javascript:call_link\('abenabap_messages_types.htm'\)) depends on the context, where a program is loaded, you should not use them at all. A message of type E leads to runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED anyway.
-   For executable programs that are called using SUBMIT, it is recommended that the event [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) is used, since the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](javascript:call_link\('abenreporting_process.htm'\))) and because its event block must not be fully executed.

Example

The include program LABAP\_DOCUE00 implements the LOAD-OF-PROGRAM event block of a function pool. It sets a global variable and triggers an action that is relevant for the complete function pool.