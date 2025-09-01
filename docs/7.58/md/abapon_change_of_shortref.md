  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  O

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ON%20CHANGE%20OF%2C%20ABAPON_CHANGE_OF_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ON CHANGE OF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapon.htm)

Syntax

ON CHANGE OF dobj *\[*OR dobj1 *\[*OR dobj2*\]* ...*\]*.
  statement\_block
ENDON.

Effect

Obsolete: Defines a control structure with a statement block statement\_block. The statement block is executed if the data object dobj has changed since the last time the statement ON CHANGE OF was executed.

Addition  

-   OR dobj1 *\[*OR dobj2*\]* ...
    Executes the statement block even if the content of one of the data objects dobj1, dobj2, ... changed.