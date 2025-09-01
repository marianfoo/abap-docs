  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20METHOD%2C%20ABAPCALL_METHOD_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL METHOD - Short Reference

[Reference](javascript:call_link\('abapcall_method_dynamic.htm'\))

Syntax

CALL METHOD *{*(meth\_name)
            *|*oref->(meth\_name)
            *|*(class\_name)=>(meth\_name)
            *|*class=>(meth\_name)
            *|*(class\_name)=>meth*}*
  *\[*PARAMETER-TABLE ptab*\]*
  *\[*EXCEPTION-TABLE etab*\]*.

Effect

Dynamic method call.

Additions   

Specifies the method:

-   [(meth\_name)](javascript:call_link\('abapcall_method_meth_ident_dyna.htm'\)) (method contained in meth\_name)
-   [(class\_name)](javascript:call_link\('abapcall_method_meth_ident_dyna.htm'\)) (class contained in class\_name)

Specifies the parameters:

-   [PARAMETER-TABLE ptab](javascript:call_link\('abapcall_method_parameter_tables.htm'\))
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type abap\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](javascript:call_link\('abapcall_method_parameter_tables.htm'\))
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of type abap\_excpbind\_tab.