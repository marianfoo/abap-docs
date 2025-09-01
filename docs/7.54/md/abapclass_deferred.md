---
title: "CLASS - DEFERRED"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred_load_shortref.htm) Syntax CLASS class DEFINITION DEFERRED PUBLIC. Effect This variant of the statement CLASS is used to make the class class known, regardless of the location of the actual definit
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred.htm"
abapFile: "abapclass_deferred.htm"
keywords: ["do", "if", "class", "data", "types", "abapclass", "deferred"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm) → 

CLASS - DEFERRED

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred_load_shortref.htm)

Syntax

CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement CLASS is used to make the class class known, regardless of the location of the actual definition of the class in the program. It does not introduce a declaration part and must not be ended using ENDCLASS.

-   Without the addition PUBLIC, the statement makes the local class of its actual definition known before its actual definition. The program must contain a declaration part for class at a later point. You cannot access individual components of the class before it is actually defined. You need this statement if you want to make reference to a local class before it is defined.
    
-   Using the addition PUBLIC, this variant makes a global class known and defers loading the class until the end of the current program unit. You can only access individual components of the class after it has been loaded. This statement can be used to prevent unwanted recursions when making references to global classes.
    

Note

This variant of the statement CLASS can also only be listed in the context described under [CLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass.htm).

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

One example of using the addition DEFERRED PUBLIC would be a type group in which a reference type is declared with a reference to a global class, which itself contains components with references to this reference type. In this situation, the entire class cannot be loaded before the type group, since the types are not yet known. After the statement CLASS DEFINITION ... DEFERRED PUBLIC, however, the class name can be specified after REF TO without the class having been loaded previously.