---
title: "CALL METHOD - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm) Syntax CALL METHOD (meth_name) oref->(meth_name) (class_name)=>(meth_name) class=>(meth_name) (class_name)=>meth PARAMETER-TABLE ptab EXCEPTION-TABLE etab. Effe
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_shortref.htm"
abapFile: "abapcall_method_shortref.htm"
keywords: ["do", "if", "method", "class", "internal-table", "abapcall", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20METHOD%2C%20ABAPCALL_METHOD_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL METHOD - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm)

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

-   [(meth\_name)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_dyna.htm) (method contained in meth\_name)
-   [(class\_name)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_dyna.htm) (class contained in class\_name)

Specifies the parameters:

-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type abap\_parmbind\_tab.
-   [EXCEPTION-TABLE etab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameter_tables.htm)
    Assigns dynamic return codes to non-class-based exceptions using an internal table etab of type abap\_excpbind\_tab.