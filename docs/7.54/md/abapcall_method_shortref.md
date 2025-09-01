  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CALL METHOD - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_dynamic.htm)

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

-   [(meth\_name)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_dyna.htm) (method contained in meth\_name)
    
-   [(class\_name)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_meth_ident_dyna.htm) (class contained in class\_name)
    

Specifies the parameters:

-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type ABAP\_ PARMBIND\_TAB.
    
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic return values to non-class-based exceptions using an internal table etab of type ABAP\_EXCPBIND\_TAB.