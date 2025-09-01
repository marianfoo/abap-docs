  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

Runtime Errors

Runtime errors indicate situations in which the execution of an ABAP program cannot be continued but must be terminated. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:

-   A catchable exception is not handled.

-   A uncatchable exception is raised.

-   Program-driven raise:

-   The statement [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)) or the addition [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)) is used.

-   An [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") fails.

-   An [exit message](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") or [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation and leads to a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Following a program termination caused by a runtime error, the system generates a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") which contains the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to branch directly to the ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](javascript:call_link\('abenabap_dump_analsyis_glosry.htm'\) "Glossary Entry") (transaction ST22). The output of the short dump can be controlled in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Hint

Program-driven termination of a program should be implemented in situations where meaningful program execution is no longer possible, using [RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\)), [THROW SHORTDUMP](javascript:call_link\('abenconditional_expression_result.htm'\)), or [ASSERT](javascript:call_link\('abapassert.htm'\)) from now on and not using [exit messages](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry").

Example

Raising of the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](javascript:call_link\('abapraise_shortdump.htm'\))