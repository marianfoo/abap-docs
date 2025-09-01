---
title: "CALL METHOD - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_dynamic.htm) Syntax CALL METHOD (meth_name) oref->(meth_name) (class_name)=>(meth_name) class=>(meth_name) (class_name)=>meth PARAMETER-TABLE ptab EXCEPTION-TABLE etab. Effe
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_shortref.htm"
abapFile: "abapcall_method_shortref.htm"
keywords: ["do", "if", "method", "class", "internal-table", "abapcall", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  C

CALL METHOD - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_dynamic.htm)

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

-   [(meth\_name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_dyna.htm) - Method contained in meth\_name.
    
-   [(class\_name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_dyna.htm) - Class contained in class\_name.
    

Specifies the parameters:

-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type ABAP\_ PARMBIND\_TAB.
    
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic return values to non-class-based exceptions using an internal table etab of type ABAP\_EXCPBIND\_TAB.