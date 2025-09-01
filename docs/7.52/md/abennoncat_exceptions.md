  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) → 

Runtime Errors

Runtime errors identify situations in which the system cannot continue running an ABAP program and has to terminate it. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions

-   A handleable exception is not handled.

-   A non-handleable exception is raised.

-   An [exit message](javascript:call_link\('abenexit_message_glosry.htm'\) "Glossary Entry") is sent.

-   An [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") fails.

Each runtime error is identified by a name and assigned to a specific error situation. Each runtime error produces a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"). Following a program termination caused by a runtime error, the system displays a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") which indicates the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to navigate directly to ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](javascript:call_link\('abenabap_dump_analsyis_glosry.htm'\) "Glossary Entry") (transaction ST22). The output of the short dump can be changed in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Note

If a program-driven termination of a program is needed in situations where it is not a good idea for the program to continue, it is best to use [assertions](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry") from now on and avoid using exit messages.

Example

Raising the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).