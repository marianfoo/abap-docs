---
title: "CLASS - IMPLEMENTATION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_shortref.htm) Syntax CLASS class IMPLEMENTATION. ... METHOD ... ... ENDMETHOD. ... ENDCLASS. Effect In the statement block CLASS class IMPLEMENTATION - ENDCLASS, the following methods of a class class must be impl
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_implementation.htm"
abapFile: "abapclass_implementation.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abapclass", "implementation"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclasses_and_interfaces.htm) →  [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm) → 

CLASS - IMPLEMENTATION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_shortref.htm)

Syntax

CLASS class IMPLEMENTATION.
  ...
  METHOD ...
    ...
  ENDMETHOD.
  ...
ENDCLASS.

Effect

In the statement block CLASS class IMPLEMENTATION - ENDCLASS, the following methods of a class class must be implemented, in any order:

-   All [concrete](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconcrete_glosry.htm "Glossary Entry") methods declared using [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods.htm) or [CLASS-METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-methods.htm) in the declaration part of the class.
    
-   All concrete methods of interfaces specified by the statement [INTERFACES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces.htm) in the declaration part of the class.
    
-   All methods inherited from superclasses that are executed with the statement [METHODS ... REDEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_redefinition.htm) in the declaration part of the class
    

The implementation of each method corresponds to a processing block [METHOD - ENDMETHOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod.htm). No statements are allowed in the implementation part outside of method implementations. All components of the class can be accessed in an instance method implementation. All static components of the class can be accessed in a static method implementation. You do not need a component selector to address the component of your own class. Within the implementation of each instance method, there is an implicitly created, local reference variable named me available at runtime. It points to the current instance of the method.

When implementing methods declared in an interface bound by the class [INTERFACES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterfaces.htm) intf, the name of the method in METHOD must have either intf~ in front of it or use an alias name declared using [ALIASES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapaliases.htm). The interface method must be declared in the interface. Otherwise, a syntax error will occur when local interfaces are used. If a global interface is specified using intf~, only a syntax warning occurs. In this way, the classes remain usable even after subsequent removal of the methods from the global interface, provided they have not used the methods themselves.

Notes

-   A class that does not need to implement any methods on the basis of its declaration part either has an empty implementation part or none at all.
    
-   Abstract methods in abstract classes cannot be implemented in the implementation part.
    
-   The implementation part of a class can only be specified in the context described under [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm).
    

Example

In this example, three methods of the class c2 must be implemented. The method m1 in c1 is abstract and must not be implemented there.

INTERFACE i1.
  METHODS m1.
ENDINTERFACE.
CLASS c1 DEFINITION ABSTRACT.
  PROTECTED SECTION.
    METHODS m1 ABSTRACT.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    INTERFACES i1.
    METHODS m2.
  PROTECTED SECTION.
    METHODS m1 REDEFINITION.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
  METHOD m2.
    ...
  ENDMETHOD.
  METHOD i1~m1.
    ...
  ENDMETHOD.
ENDCLASS.