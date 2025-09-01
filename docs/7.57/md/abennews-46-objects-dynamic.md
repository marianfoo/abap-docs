  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.6A](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-46a.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Dynamic Method Calls in Release 4.6A, ABENNEWS-46-OBJECTS-DYNAMIC, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Dynamic Method Calls in Release 4.6A

In Release 4.6A, the kernel functions of ABAP Objects are enhanced by dynamic method calls (or dynamic invoke).

Dynamic method call

In addition to the old static [access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components_addressing.htm), methods can now also be addressed dynamically using the usual ABAP parenthesis semantics.

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

In contrast to subroutines and function modules, the actual parameters can also be passed dynamically in dynamic [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_dynamic.htm).