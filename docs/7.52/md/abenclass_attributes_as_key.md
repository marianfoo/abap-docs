---
title: "Object References in Internal Tables"
description: |
  If the row type of an internal table contains object reference variables in the form of the component comp, the attributes attr of the object (to which each reference of the row points) can be used as key values for reading, sorting, and modifying rows in tables. This is possible in the following st
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_attributes_as_key.htm"
abapFile: "abenclass_attributes_as_key.htm"
keywords: ["delete", "loop", "do", "if", "class", "internal-table", "abenclass", "attributes", "key"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm) →  [Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject.htm) → 

Object References in Internal Tables

If the row type of an internal table contains object reference variables in the form of the component comp, the attributes attr of the object (to which each reference of the row points) can be used as key values for reading, sorting, and modifying rows in tables. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...

-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...

-   ... itab *\[* KEY ... comp->attr = ... *\]* ...

-   SORT itab BY comp->attr ...

-   DELETE itab WHERE comp->attr ...

-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured rows with the type of an object reference variable, the attributes of the object to which a row points can be addressed using table\_line->attr .