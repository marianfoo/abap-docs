  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CASE - Short Reference

[Reference](javascript:call_link\('abapcase.htm'\))

Syntax

CASE operand.
  *\[*WHEN operand1 *\[*OR operand2 *\[*OR operand3 *\[*...*\]**\]**\]*.
    *\[*statement\_block1*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The first statement block, for which the content of the operand operand is identical to one of the operands operand1, operand2, ... in the WHEN statement, is executed first. If no matches are found, the statement block is executed after the statement WHEN OTHERS.