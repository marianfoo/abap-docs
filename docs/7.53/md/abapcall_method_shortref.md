  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CALL METHOD - Quick reference

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

-   [(meth\_name)](javascript:call_link\('abapcall_method_meth_ident_dyna.htm'\)) - Method contained in meth\_name.
    
-   [(class\_name)](javascript:call_link\('abapcall_method_meth_ident_dyna.htm'\)) - Class contained in class\_name.
    

Specifies the parameters:

-   [PARAMETER-TABLE ptab](javascript:call_link\('abapcall_method_parameter_tables.htm'\))
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type ABAP\_ PARMBIND\_TAB.
    
-   [EXCEPTION-TABLE etab](javascript:call_link\('abapcall_method_parameter_tables.htm'\))
    Assigns dynamic return values to non-class-based exceptions using an internal table etab of type ABAP\_EXCPBIND\_TAB.