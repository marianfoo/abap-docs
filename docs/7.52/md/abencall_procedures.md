  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

Calling Procedures

[Procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") can be called both [internally](javascript:call_link\('abencall_procedures_intern.htm'\)) and [externally](javascript:call_link\('abencall_procedures_extern.htm'\)). The following figure shows the most important internal and external calls.

![Figure](abdoc_call_proc.gif)

The statements for calling procedures are as follows:

-   Methods are called using
    [meth( ... )](javascript:call_link\('abapcall_method_static_short.htm'\))
    [CALL METHOD dynamic\_meth ...](javascript:call_link\('abapcall_method_dynamic.htm'\))

-   Function modules are called using
    [CALL FUNCTION func ...](javascript:call_link\('abapcall_function.htm'\))

-   For the time being, obsolete subroutines are called using
    [PERFORM subr ...](javascript:call_link\('abapperform.htm'\))

These statements fill the parameter interfaces of the procedures. If the call ends correctly, control is returned to the statement after the call point.

Continue
[Internal Procedure Calls](javascript:call_link\('abencall_procedures_intern.htm'\))
[External Procedure Call](javascript:call_link\('abencall_procedures_extern.htm'\))
[Method Calls](javascript:call_link\('abenmethod_calls.htm'\))
[CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\))
[PERFORM](javascript:call_link\('abapperform.htm'\))