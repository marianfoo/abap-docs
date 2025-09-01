  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls.htm) → 

Static Method Calls

There are two types of static method call, standalone static method calls and functional static method calls. Method chainings are a special form of static method call.

-   [meth( ... ) - Standalone Method Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_short.htm)
-   [meth( ... ) - Functional Method Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_functional.htm)
-   [... meth1( ... )->meth2( ... )->... - Method Chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_chain.htm)

Obsolete variant of the standalone call:

-   [CALL METHOD meth ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static.htm)

Hint

The static method call described here must not be confused with the call of [static methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatic_method_glosry.htm "Glossary Entry"). A static method call is the static specification of an [instance method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_method_glosry.htm "Glossary Entry") or a static method. In addition, there is the [dynamic method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls_dynamic.htm), for which the methods are specified dynamically.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_procedures.htm).

CX\_SY\_REF\_IS\_INITIAL

-   Cause: Reference variable is initial
    Runtime error: OBJECTS\_OBJREF\_NOT\_ASSIGNED

Continue
[meth( ... ), Standalone Method Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_short.htm)
[meth( ... ), Functional Method Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_functional.htm)
[... meth1( ... )->meth2( ... )->..., Method Chaining](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_chain.htm)
[meth( ... ), Parameter Passing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm)