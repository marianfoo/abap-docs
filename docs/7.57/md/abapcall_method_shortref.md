  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL METHOD, ABAPCALL_METHOD_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CALL METHOD - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_dynamic.htm)

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

-   [(meth\_name)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_dyna.htm) (method contained in meth\_name)
-   [(class\_name)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_dyna.htm) (class contained in class\_name)

Specifies the parameters:

-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type abap\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of type abap\_excpbind\_tab.