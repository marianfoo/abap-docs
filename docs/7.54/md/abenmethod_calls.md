  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) → 

Method Calls

There are two types of method call, static method calls and dynamic method calls. In static method calls, the name of the method must be specified in full in the program. In dynamic method calls, the full name of the method or a part of the name is determined at runtime.

When an instance method is called using a reference variable and the static type of the reference variable is a superclass of the dynamic type, the dynamic method call can be used to call all visible methods of the dynamic type. In static method calls, however, only the visible methods of the static type can be called.

Static method calls have the pattern meth( ). They do not need a keyword and the method is specified directly and the parameters passed in parentheses instead. Dynamic method calls are introduced using CALL METHOD.

-   [Static method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm)

-   [Dynamic method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_dynamic.htm)

An [obsolete syntax variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static.htm) also exists where static method calls are still introduced using CALL METHOD.

System Fields

The system field sy-subrc is set to 0 when a method is called. If a [non-class-based exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) is raised that was handled by the assignment of a value, sy-subrc is set to this value.

Continue
[Static Method Calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_static.htm)
[Dynamic Method Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_calls_dynamic.htm)