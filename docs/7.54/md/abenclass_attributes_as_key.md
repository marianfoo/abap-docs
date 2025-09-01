  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Objects](javascript:call_link\('abenobject.htm'\)) → 

Object References in Internal Tables

If the row type of an internal table contains object reference variables in the form of the component comp, the attributes attr of the object (to which each reference of the row points) can be used as key values for reading, sorting, and modifying rows in tables. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...

-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...

-   ... itab *\[* KEY ... comp->attr = ... *\]* ...

-   SORT itab BY comp->attr ...

-   DELETE itab WHERE comp->attr ...

-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured rows with the type of an object reference variable, the attributes of the object to which a row points can be addressed using table\_line->attr .