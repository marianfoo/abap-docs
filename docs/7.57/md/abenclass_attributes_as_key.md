---
title: "ABAP Objects - Object References in Internal Tables"
description: |
  If the line type of an internal table contains object reference variables as components comp, the attributes attr of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expre
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_attributes_as_key.htm"
abapFile: "abenclass_attributes_as_key.htm"
keywords: ["delete", "loop", "do", "if", "class", "internal-table", "abenclass", "attributes", "key"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Object References in Internal Tables, ABENCLASS_ATTRIBUTES_AS_KEY, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Object References in Internal Tables

If the line type of an internal table contains object reference variables as components comp, the attributes attr of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
-   ... itab *\[* KEY ... comp->attr = ... *\]* ...
-   SORT itab BY comp->attr ...
-   DELETE itab WHERE comp->attr ...
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured lines with the type of an object reference variable, the attributes of the object to which a line points can be addressed using table\_line->attr.