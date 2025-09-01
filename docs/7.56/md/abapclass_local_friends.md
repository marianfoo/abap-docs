---
title: "CLASS, LOCAL FRIENDS"
description: |
  Syntax CLASS class DEFINITION LOCAL FRIENDS class1 class2 ... intf1  intf2  ... Effect This statement makes the local classes and interfaces class1 class2 ... and intf1 intf2 ... of a class pool(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_pool_glosry.htm 'Glossary Entry')
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_local_friends.htm"
abapFile: "abapclass_local_friends.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abapclass", "local", "friends"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) → 

CLASS, LOCAL FRIENDS

Syntax

CLASS class DEFINITION
            LOCAL FRIENDS class1 class2 ...
                          intf1  intf2  ...

Effect

This statement makes the local classes and interfaces class1 class2 ... and intf1 intf2 ... of a [class pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_pool_glosry.htm "Glossary Entry") [friends](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfriend_glosry.htm "Glossary Entry") of its global class class. At least one class or one interface must be specified.

This statement does not introduce a declaration part and must not be closed using the ENDCLASS statement.

Hints

-   The declaration of local classes of a class pool as friends of the global class is particularly necessary for local [test classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_class_glosry.htm "Glossary Entry") that test the private components of the global class.
-   This variant of the statement CLASS can also only be listed in the context described under [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm).
-   If the local classes and interfaces class1 class2 ... and intf1 intf2 ... are to have access to all components of the global class class in their declaration part, the statement must first be specified in the class pool, for which the local classes and interfaces must first be registered using [CLASS -](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_deferred.htm) or [INTERFACE - DEFERRED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinterface_deferred.htm).

Example

In the CL\_DEMO\_AMDP\_MESH class, the cl\_test\_selects class from the [test include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_include_glosry.htm "Glossary Entry") is declared in the [CCDEF include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccdef_glosry.htm "Glossary Entry") as a local friend of the global class, so that its private methods can be tested.

CLASS cl\_test\_selects DEFINITION DEFERRED.
CLASS cl\_demo\_amdp\_mesh DEFINITION LOCAL FRIENDS cl\_test\_selects.