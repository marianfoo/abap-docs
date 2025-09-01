  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) → 

Calling Procedures

[Procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") can be called both [internally](javascript:call_link\('abencall_procedures_intern.htm'\)) and [externally](javascript:call_link\('abencall_procedures_extern.htm'\)). The following figure shows the most important internal and external calls.

![Figure](bdoc_call_proc.gif)

The statements for calling procedures are

-   for methods:
    
    [meth( ... )](javascript:call_link\('abapcall_method_static_short.htm'\))
    
    [CALL METHOD dynamic\_meth ...](javascript:call_link\('abapcall_method_dynamic.htm'\))
    
-   for function modules:
    
    [CALL FUNCTION func ...](javascript:call_link\('abapcall_function.htm'\))
    
-   and (for the time being) for the obsolete subroutines:
    
    [PERFORM subr ...](javascript:call_link\('abapperform.htm'\))
    

These statements supply the parameter interfaces of the procedures. When the call is terminated correctly, control returns to the statement after the call position.

Continue
[Internal Procedure Calls](javascript:call_link\('abencall_procedures_intern.htm'\))
[External Procedure Call](javascript:call_link\('abencall_procedures_extern.htm'\))
[Method Calls](javascript:call_link\('abenmethod_calls.htm'\))
[CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\))
[PERFORM](javascript:call_link\('abapperform.htm'\))