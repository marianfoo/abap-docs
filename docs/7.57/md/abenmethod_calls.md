  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Method Calls, ABENMETHOD_CALLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Method Calls

There are two types of method call, static method calls and dynamic method calls. In static method calls, the name of the method must be completely known in the program. In dynamic method calls, the name of the method is determined partially or completely at runtime.

When an instance method is called using a reference variable and the static type of the reference variable is a superclass of the dynamic type, the dynamic method call can be used to call all visible methods of the dynamic type. In static method calls, however, only the visible methods of the static type can be called.

Static method calls have the pattern meth( ). They do not need a keyword, but the method is specified directly and the parameters passing is in parentheses instead. Dynamic method calls are introduced using CALL METHOD.

-   [Static method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_static.htm)
-   [Dynamic method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_dynamic.htm)

An [obsolete syntax variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static.htm) also exists where static method calls are still introduced using CALL METHOD.

System Fields

The system field sy-subrc is set to 0 when a method is called. If a [non-class-based exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_non_class.htm) is raised and is handled by the assignment of a value, sy-subrc is set to this value.

Continue
[Static Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_static.htm)
[Dynamic Method Call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_dynamic.htm)