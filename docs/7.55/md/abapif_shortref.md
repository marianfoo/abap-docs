  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

IF - Quick reference

[Reference](javascript:call_link\('abapif.htm'\))

Syntax

IF [log\_exp1](javascript:call_link\('abenlog_exp_shortref.htm'\)).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](javascript:call_link\('abenlog_exp_shortref.htm'\)).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The statement block after the first true logical expression log\_exp1, log\_exp2, ... is executed. If no logical expression is true, the statement block after ELSE is executed.