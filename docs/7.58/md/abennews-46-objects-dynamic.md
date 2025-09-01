  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for ABAP Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Dynamic%20Method%20Calls%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-OBJECTS-DYNAMIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

ABAP Objects - Dynamic Method Calls in ABAP Release 4.6A

In Release 4.6A, the kernel functions of ABAP Objects are enhanced by dynamic method calls (or dynamic invoke).

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