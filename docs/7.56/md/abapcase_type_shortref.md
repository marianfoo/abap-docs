  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CASE TYPE OF - Short Reference

[Reference](javascript:call_link\('abapcase_type.htm'\))

Syntax

CASE TYPE OF oref
  *\[*WHEN TYPE class*|*intf *\[*INTO target1*\]*.
    *\[*statement\_block1*\]**\]*
  *\[*WHEN TYPE class*|*intf *\[*INTO target2*\]*.
    *\[*statement\_block2*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The first statement block is executed for which an object type class or intf specified in the WHEN TYPE statement is more general or equal to the dynamic or static type of the object reference variable oref. If the condition is not met, the statement block is executed after the statement WHEN OTHERS.

Addition

-   INTO target
    Specifies a target variable to which the object reference can be copied.