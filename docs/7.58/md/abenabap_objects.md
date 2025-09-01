---
title: "ABAP Objects"
description: |
  ABAP Objects is the object-oriented part of ABAP. ABAP Objects adds a complete set of language elements(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_keywords.htm) to ABAP, which was previously only a procedural language, that allow object-oriented programming(https://he
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects.htm"
abapFile: "abenabap_objects.htm"
keywords: ["do", "if", "method", "class", "data", "abenabap", "objects"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%2C%20ABENABAP_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects

ABAP Objects is the object-oriented part of ABAP.

ABAP Objects adds a complete set of [language elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_keywords.htm) to ABAP, which was previously only a procedural language, that allow [object-oriented programming](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_orientation.htm). This object-oriented extension of ABAP is based on the previous languages scope and is largely compatible with them. ABAP Objects can be used in existing programs, and the [statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_statements.htm) that can be used in ABAP Objects correspond to almost all of the remaining ABAP language scope, although certain [obsolete language elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_strict.htm) are not allowed in the context of ABAP Objects due to a previous cleanup of the ABAP language.

-   [ABAP Objects - Object Orientation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_orientation.htm)
-   [ABAP Objects - Definition of Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_interface_definition.htm)
-   [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses.htm)
-   [ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)
-   [ABAP Objects - Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterfac.htm)
-   [ABAP Objects - Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents_overview.htm)
-   [ABAP Objects - Friends, Friendship Between Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfriends.htm)
-   [ABAP Objects - Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject.htm)
-   [ABAP Objects - Statements in ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_statements.htm)
-   [ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm)

Hint

The package SABAP\_DEMOS\_CAR\_RENTAL contains a complete example application written in ABAP Objects, whose presentation logic is realized by a dynpro or Web Dynpro. The Web Dynpro calls interface methods that are implemented in a class and that access classes that perform database accesses.

Continue
[ABAP Objects - Object Orientation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_orientation.htm)
[ABAP Objects - Definition of Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_interface_definition.htm)
[ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclasses.htm)
[ABAP Objects - Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance.htm)
[ABAP Objects - Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterfac.htm)
[ABAP Objects - Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevents_overview.htm)
[ABAP Objects - Friends, Friendship Between Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfriends.htm)
[ABAP Objects - Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject.htm)
[ABAP Objects - Statements in ABAP Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_statements.htm)
[ABAP Objects - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_objects_abexas.htm)