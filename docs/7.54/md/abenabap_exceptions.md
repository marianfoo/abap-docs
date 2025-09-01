  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) → 

Exception Handling

Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exception handling enables a response to be made to these events.

Exception situations can be recognized either by the program or by the runtime environment. When an exception situation is recognized, either the ABAP program or the runtime environment raises an exception. Exceptions in the ABAP runtime environment are generally caused by error situations that cannot be predicted by the static [program check](javascript:call_link\('abenprogram_check_glosry.htm'\) "Glossary Entry").

Exceptions are either handleable or non-handleable.

-   Handleable exceptions are [class-based](javascript:call_link\('abenexceptions.htm'\)). They are predefined in the system, or custom exceptions can be defined. They are raised either by the ABAP runtime environment or in an ABAP program using

-   The statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\))

-   [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) specified in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\))

They can be handled using [TRY - CATCH - ENDTRY](javascript:call_link\('abaptry.htm'\)). As well as these, [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) and (obsolete) [catchable runtime errors](javascript:call_link\('abensystem-exceptions.htm'\)) also exist.

-   Non-handleable exceptions are raised only by the ABAP runtime environment. They are a response to error situations that cannot generally be handled meaningfully in a program.

Non-handled exceptions (all non-handleable exceptions and all handleable exceptions not caught in the program) produce a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry"), which means that the program is terminated with a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry").

Continue
[Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\))
[Exceptions Before Class-Based Exceptions](javascript:call_link\('abenexceptions_pre_610.htm'\))
[Exceptions in ABAP Statements](javascript:call_link\('abenabap_language_exceptions.htm'\))
[Runtime Error](javascript:call_link\('abennoncat_exceptions.htm'\))