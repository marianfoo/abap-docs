  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRY, ABAPTRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement
:)

TRY

[Short Reference](javascript:call_link\('abaptry_shortref.htm'\))

Syntax

TRY.
    *\[*try\_block*\]*
  *\[*[CATCH](javascript:call_link\('abapcatch_try.htm'\)) *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.
    *\[*catch\_block*\]**\]*
    ...
  *\[* [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) *\[*INTO oref*\]*.
    *\[*cleanup\_block*\]**\]*
ENDTRY.

Effect

The statement TRY introduces a control structure with multiple statement blocks. The first statement block try\_block is always processed, whereas a branching off to exactly one of the remaining statement blocks only occurs if a [class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") is raised in try\_block.

A TRY control structure defines the following statement blocks:

-   A TRY block try\_block directly after the statement TRY. The TRY block defines a protected area whose class-based exceptions can be handled in the subsequent CATCH blocks. If no exception is raised in the TRY block and it reaches its end, processing continues after ENDTRY. If a class-based exception is raised in the TRY block, the system searches for an exception handler in the same or an external TRY control structure (see [System Behavior](javascript:call_link\('abenexceptions_system_response.htm'\))).
-   One or more optional CATCH blocks catch\_block for handling exceptions, each directly after a [CATCH](javascript:call_link\('abapcatch_try.htm'\)) statement. If the end of a CATCH block is reached without being exited early, the processing continues after the ENDTRY. The special statements [RETRY](javascript:call_link\('abapretry.htm'\)) and [RESUME](javascript:call_link\('abapresume.htm'\)) can be listed in a CATCH block, to control the behavior of exception handling.
-   An optional CLEANUP block cleanup\_block for cleanups directly after the [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) statement.

A TRY control structure invalidates the simultaneous use of the obsolete statement [CATCH SYSTEM-EXCEPTIONS](javascript:call_link\('abapcatch_sys.htm'\)) to handle [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") in the current [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry").

Hints

-   All statement blocks of a TRY control structure can contain any kind of control structures, in particular further TRY control structures.
-   Since no exceptions can be propagated from the [static constructors](javascript:call_link\('abapclass-methods_constructor.htm'\)) and [event handlers](javascript:call_link\('abapmethods_event_handler.htm'\)), they must always be handled locally. An exception to this rule is exception category CX\_NO\_CHECK, that can be propagated from event handlers.

Example

Division by zero in a TRY block. The relevant exception is caught with [CATCH](javascript:call_link\('abapcatch_try.htm'\)).

TRY.
    cl\_demo\_output=>display( 1 / 0 ).
  CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Executable Example

[Exceptions, TRY](javascript:call_link\('abentry_abexa.htm'\))

Continue
[CATCH](javascript:call_link\('abapcatch_try.htm'\))
[RESUME](javascript:call_link\('abapresume.htm'\))
[RETRY](javascript:call_link\('abapretry.htm'\))
[CLEANUP](javascript:call_link\('abapcleanup.htm'\))
[ENDTRY](javascript:call_link\('abapendtry.htm'\))