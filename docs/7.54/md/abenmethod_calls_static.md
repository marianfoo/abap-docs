  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) → 

Static Method Calls

There are two types of static method call, standalone static method calls and functional static method calls. (Method chainings are a special type of static method call.)

-   [meth( ... ) - Standalone Method Call](javascript:call_link\('abapcall_method_static_short.htm'\))

-   [meth( ... ) - Functional Method Call](javascript:call_link\('abapcall_method_functional.htm'\))

-   [... meth1( ... )->meth2( ... )->... - Method Chaining](javascript:call_link\('abapcall_method_static_chain.htm'\))

The following is an obsolete variant of the standalone call:

-   [CALL METHOD meth ...](javascript:call_link\('abapcall_method_static.htm'\))
    

Note

The static method call described here is not to be confused with the call of [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"). A static method call is the static specification of an [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") or a static method. In addition, there is the [dynamic method call](javascript:call_link\('abenmethod_calls_dynamic.htm'\)), for which the methods are specified dynamically.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](javascript:call_link\('abenexceptions_procedures.htm'\)).
    

CX\_SY\_REF\_IS\_INITIAL

-   Cause: Reference variable is initial
    Runtime error: OBJECTS\_OBJREF\_NOT\_ASSIGNED
    

Continue
[meth( ... ) - Standalone Method Call](javascript:call_link\('abapcall_method_static_short.htm'\))
[meth( ... ) - Functional Method Call](javascript:call_link\('abapcall_method_functional.htm'\))
[... meth1( ... )->meth2( ... )->... - method chaining](javascript:call_link\('abapcall_method_static_chain.htm'\))
[meth( ... ) - Parameter Passing](javascript:call_link\('abapcall_method_parameters.htm'\))