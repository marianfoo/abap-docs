  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) → 

Static Method Calls

There are two types of static method call, standalone static method calls and functional static method calls. (Method chainings are a special type of static method call.)

-   [meth( ... ) - standalone method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm)

-   [meth( ... ) - functional method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm)

-   [... meth1( ... )->meth2( ... )->... - method chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_chain.htm)

The following is an obsolete variant of the standalone call:

-   [CALL METHOD meth ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static.htm)
    

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm).
    

CX\_SY\_REF\_IS\_INITIAL

-   Cause: Reference variable is initial
    Runtime error: OBJECTS\_OBJREF\_NOT\_ASSIGNED
    

Continue
[meth( ... ) - Standalone Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm)
[meth( ... ) - Functional Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm)
[... meth1( ... )->meth2( ... )->... - Method Chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_chain.htm)
[meth( ... ) - Parameter Passing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)