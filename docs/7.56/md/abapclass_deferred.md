---
title: "CLASS, DEFERRED"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_deferred_load_shortref.htm) Syntax CLASS class DEFINITION DEFERRED PUBLIC. Effect This variant of the statement CLASS is used to make the class class known temporarily in the program, regardless of the loc
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_deferred.htm"
abapFile: "abapclass_deferred.htm"
keywords: ["do", "if", "class", "data", "types", "abapclass", "deferred"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) → 

CLASS, DEFERRED

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_deferred_load_shortref.htm)

Syntax

CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement CLASS is used to make the class class known temporarily in the program, regardless of the location of the actual definition of the class in the program. It does not introduce a declaration part and must not be closed using ENDCLASS.

-   Without the addition PUBLIC, the statement makes a local class of its actual definition known before its actual definition. The program must contain a declaration part for class at a later point. It is not possible to access individual components before the actual definition. The statement is necessary if a reference to a local class is to be made before it is defined.
-   Using the addition PUBLIC, it makes a global class known and delays loading the class until the end of the current program unit. Individual components of the class can only be accessed after it has been loaded. This statement can be used to prevent unwanted recursions when referring to global classes.

Hint

This variant of the statement CLASS can also only be listed in the context described under [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm).

Example

In this example, the class c1 uses the class c2 and vice versa. This means that one of the classes must be made known before it is actually defined.

CLASS c1 DEFINITION DEFERRED.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    DATA c1ref TYPE REF TO c1.
ENDCLASS.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA c2ref TYPE REF TO c2.
ENDCLASS.

Example

An example of using the addition DEFERRED PUBLIC would be a type pool in which a reference type is declared with reference to a global class, which itself contains components with references to this reference type. In this situation, the entire class cannot be loaded before the type pool, since the types are not yet known. After the statement CLASS DEFINITION ... DEFERRED PUBLIC, however, the class name can be specified after REF TO without the class having been loaded previously.