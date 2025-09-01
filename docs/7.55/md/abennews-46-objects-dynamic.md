  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

ABAP Objects - Dynamic Method Calls in Release 4.6A

In Release 4.6A, the kernel functions of ABAP Objects are enhanced by dynamic method calls (or dynamic invoke).

Dynamic method call

In addition to the old static [access](javascript:call_link\('abenclass_components_addressing.htm'\)), methods can now also be addressed dynamically using the usual ABAP parenthesis semantics.

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

In contrast to subroutines and function modules, the actual parameters can also be passed dynamically in dynamic [method calls](javascript:call_link\('abapcall_method_dynamic.htm'\)).