  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IF%2C%20ABAPIF_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IF - Short Reference

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