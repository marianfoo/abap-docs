  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) →  [Program Constructor](javascript:call_link\('abenprogram_constructor.htm'\)) → 

LOAD-OF-PROGRAM

[Quick Reference](javascript:call_link\('abapload-of-program_shortref.htm'\))

Syntax

LOAD-OF-PROGRAM.

Effect

This event keyword defines the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") of an executable program, a module pool, a function group, or a subroutine pool. The program constructor is an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") when one of the executable programs mentioned above is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

When a program is called using SUBMIT or using a transaction code, a new internal session is opened in every call and the event block is executed once in every call. Global data objects of the program can be initialized here. The event block must be fully executed, otherwise a runtime error occurs. This means that [statements](javascript:call_link\('abenleave_program_units.htm'\)) can be specified that exit the event block without returning to it.

The first time an external [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") (subroutine or function module) or a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") is called, the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") of the called procedure is loaded into the internal session of the caller, thus raising the event LOAD-OF-PROGRAM. The event block is executed before the called procedure. Each time a procedure of the same master program is called again by a caller of the same internal session, the event LOAD-OF-PROGRAM is not raised.

Notes

-   The event LOAD-OF-PROGRAM should mainly be used to initialize global data when calling external procedures or [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"). If executable programs are called using SUBMIT, it is recommended that the event INITIALIZATION is used, since the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") for parameter and selection criteria are set after LOAD-OF-PROGRAM (see [program flow after SUBMIT](javascript:call_link\('abenreporting_process.htm'\))).
    
-   If a program is only loaded because declarations are required from it, such as when using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), the LOAD-OF-PROGRAM event is not raised. The program constructor is only executed if an executable unit of the program is called afterwards.
    
-   [Class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") do not have a program constructor, since the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") from the global class defined in the class pool can be used instead.
    

Example

Sets a global data object for the language as specified by the system field sy-langu in the event LOAD-OF-PROGRAM.

DATA g\_langu TYPE sy-langu.
LOAD-OF-PROGRAM.
  g\_langu = COND #( WHEN sy-langu = 'D' THEN 'D' ELSE 'E' ).