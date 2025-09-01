  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_objects.htm) →  [ABAP Objects - Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Object%20References%20in%20Internal%20Tables%2C%20ABENCLASS_ATTRIBUTES_AS_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

ABAP Objects - Object References in Internal Tables

If the line type of an internal table contains object reference variables as components comp, the attributes attr of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
-   ... itab *\[* KEY ... comp->attr = ... *\]* ...
-   SORT itab BY comp->attr ...
-   DELETE itab WHERE comp->attr ...
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured lines with the type of an object reference variable, the attributes of the object to which a line points can be addressed using table\_line->attr.