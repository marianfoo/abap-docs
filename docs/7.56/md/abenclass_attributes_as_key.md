  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Objects](javascript:call_link\('abenobject.htm'\)) → 

ABAP Objects - Object References in Internal Tables

If the line type of an internal table contains object reference variables as components comp, the attributes attr of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
-   ... itab *\[* KEY ... comp->attr = ... *\]* ...
-   SORT itab BY comp->attr ...
-   DELETE itab WHERE comp->attr ...
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured lines with the type of an object reference variable, the attributes of the object to which a line points can be addressed using table\_line->attr .