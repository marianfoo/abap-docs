  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-46a.htm) → 

ABAP Objects - Dynamic Method Calls in Release 4.6A

In Release 4.6A, the kernel functions of ABAP Objects are enhanced by dynamic method calls (or dynamic invoke).

Dynamic method call

In addition to the old static [access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_components_addressing.htm), methods can now also be addressed dynamically using the usual ABAP parenthesis semantics.

-   Calling an instance method meth:
    CALL METHOD ref->(f)
    

-   Calling a static method meth:
    CALL METHOD class=>(f)
    CALL METHOD (c)=>meth
    CALL METHOD (c)=>(f)
    

-   Calling a method within the same class meth:
    CALL METHOD (f)
    CALL METHOD ME->(f)
    

f and c are fields containing the name of the method meth or class class.

In contrast to subroutines and function modules, the actual parameters can also be passed dynamically in dynamic [method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_dynamic.htm).