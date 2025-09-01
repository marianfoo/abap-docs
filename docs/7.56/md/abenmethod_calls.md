  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

Method Calls

There are two types of method call, static method calls and dynamic method calls. In static method calls, the name of the method must be completely known in the program. In dynamic method calls, the name of the method is determined partially or completely at runtime.

When an instance method is called using a reference variable and the static type of the reference variable is a superclass of the dynamic type, the dynamic method call can be used to call all visible methods of the dynamic type. In static method calls, however, only the visible methods of the static type can be called.

Static method calls have the pattern meth( ). They do not need a keyword, but the method is specified directly and the parameters passing is in parentheses instead. Dynamic method calls are introduced using CALL METHOD.

-   [Static method calls](javascript:call_link\('abenmethod_calls_static.htm'\))
-   [Dynamic method calls](javascript:call_link\('abenmethod_calls_dynamic.htm'\))

An [obsolete syntax variant](javascript:call_link\('abapcall_method_static.htm'\)) also exists where static method calls are still introduced using CALL METHOD.

System Fields

The system field sy-subrc is set to 0 when a method is called. If a [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) is raised and is handled by the assignment of a value, sy-subrc is set to this value.

Continue
[Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\))
[Dynamic Method Call](javascript:call_link\('abenmethod_calls_dynamic.htm'\))