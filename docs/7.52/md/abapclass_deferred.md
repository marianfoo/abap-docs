  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) → 

CLASS - DEFERRED

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_deferred_load_shortref.htm)

Syntax

CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.

Effect

This variant of the statement CLASS is used to make the class class known, regardless of the location of the actual definition of the class in the program. It does not introduce a declaration part and must not be ended using ENDCLASS.

-   Without the addition PUBLIC, the statement makes the local class of its actual definition known before its actual definition. The program must contain a declaration part for class at a later point. Individual components of the class cannot be accessed before it is actually defined. This statement is required if a reference to a local class needs to be made before it is defined.
    
-   Using the addition PUBLIC, this variant makes a global class known and defers loading the class until the end of the current program unit. Individual components of the class can only be accessed after it has been loaded. This statement can be used to prevent unwanted recursions when making references to global classes.
    

Note

This variant of the statement CLASS can also only be specified in the context described under [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm).

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

One example of using the addition DEFERRED PUBLIC would be a type group in which a reference type is declared with a reference to a global class, which itself contains components with references to this reference type. In this situation, the entire class cannot be loaded before the type group, since the types are not yet known. After the statement DEFERRED PUBLIC, however, the class name can be specified after REF TO without the class having been loaded previously.