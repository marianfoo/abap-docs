  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  I

IF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapif.htm)

Syntax

IF [log\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlog_exp_shortref.htm).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlog_exp_shortref.htm).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The statement block after the first true logical expression log\_exp1, log\_exp2, ... is executed. If no logical expression is true, the statement block after ELSE is executed.