  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  O

ON CHANGE OF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapon.htm)

Syntax

ON CHANGE OF dobj *\[*OR dobj1 *\[*OR dobj2*\]* ...*\]*.
  statement\_block
ENDON.

Effect

Obsolete: Defines a control structure with a statement block statement\_block. The statement block is executed if the data object dobj has changed since the last time the statement ON CHANGE OF was executed.

Addition

-   OR dobj1 *\[*OR dobj2*\]* ...
    Executes the statement block even if the content of one of the data objects dobj1, dobj2, ... changed.