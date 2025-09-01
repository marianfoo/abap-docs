---
title: "INTERFACES - integration"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterfaces_shortref.htm) Syntax INTERFACES intf. Effect In the declaration of an interface, the statement INTERFACES binds the interface intf in the declared interface. Additions cannot be specified. As a result, the in
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterfaces_ifac.htm"
abapFile: "abapinterfaces_ifac.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abapinterfaces", "ifac"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) →  [Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_ifac_components.htm) →  [Implementing and including interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterfaces.htm) →  [INTERFACES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterfaces.htm) → 

INTERFACES - integration

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterfaces_shortref.htm)

Syntax

INTERFACES intf.

Effect

In the declaration of an interface, the statement INTERFACES binds the interface intf in the declared interface. Additions cannot be specified. As a result, the interface intf becomes a component interface of a composite interface.

An interface can be composed of any number of different component interfaces. All these interfaces are equally valid and located at the same level. If a component interface itself is a composite (that is, it contains its own component interfaces), the nesting hierarchy is irrelevant for the composition of the interface. It is relevant, however, for accessing the interface components.

To access a component comp of a component interface intf within a composite interface, the expression intf~comp can be used with the interface component selector (~). Multiple use of the interface component selection in a name (such as intf1~intf2~comp) is generally not supported. In a composite interface, it is possible to use the interface component selector to access only interface components of the component interface that are bound in this interface using the statement INTERFACES. Since all nested interfaces are at the same level, however, all that is needed to access the interface components of all component interfaces is the name of their interface.

Notes

-   Each interface and its components appear only once in a composite interface. An interface that is seemingly implemented more than once in an interface (since it is an interface component of one or more other interfaces) also exists only once.
    
-   Since there are no separate namespaces for global and local interfaces, it must be ensured that compositions of local interfaces do not produce combinations of global and local interfaces with identical names, because they cannot be equally valid at the same level in their implementation.
    

Example

The following example demonstrates how the statement INTERFACES can be used to compose and implement interfaces. The class c1 implements the composite interfaces i2 and i3. Although i1 is a component interface of i2 and i3, it exists only once in class c1. A reference variable iref1 of the static type i1 is used to create an object class c1 and call method i1~m1, which is implemented there.

INTERFACE i1.
  METHODS m1.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
  METHODS m2.
ENDINTERFACE.
INTERFACE i3.
  INTERFACES i1.
  METHODS m3.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES: i2, i3.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD i1~m1.
    ...
  ENDMETHOD.
  METHOD i2~m2.
    ...
  ENDMETHOD.
  METHOD i3~m3.
    ...
  ENDMETHOD.
ENDCLASS.
DATA iref1 TYPE REF TO i1.
START-OF-SELECTION.
  CREATE OBJECT iref1 TYPE c1.
  iref1->m1( ).