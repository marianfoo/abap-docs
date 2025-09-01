  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Components in Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_ifac_components.htm) →  [ABAP Objects - Implementing or Including Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterfaces.htm) →  [INTERFACES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACES%2C%20composition%2C%20ABAPINTERFACES_IFAC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACES, composition

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinterfaces_shortref.htm)

Syntax

INTERFACES intf.

Effect

In the declaration of an interface, the statement INTERFACES includes the interface intf in the declared interface. Additions cannot be specified. As a result, the interface intf becomes a component interface of a composite interface.

An interface can be composed of any number of different component interfaces. All component interfaces are equal and on one level. If a component interface itself is a composite, that is, it contains its own component interfaces, the nesting hierarchy is irrelevant for the composition of the interface. It is relevant, however, for accessing the interface components.

To access the component comp of a component interface intf within a composite interface, the expression intf~comp can be used with the interface component selector (~). It is not possible to use the interface component selector multiple times in a name (intf1~intf2~comp). In a composite interface, it is possible to use the interface component selector to access only those interface components of the component interface that are included in this interface using the statement INTERFACES. Since all nested interfaces are at the same level, however, this is sufficient to access the interface components of all component interfaces using the name of their interface.

Hints

-   Each interface and its components appear only once in a composite interface. Even an interface that is seemingly implemented more than once in an interface, because it is an interface component of one or more other interfaces, really exists only once.
-   Since there are no separate namespaces for global and local interfaces, it must be ensured that combinations of local interfaces do not result in combinations of global and local interfaces with identical names, because they cannot be equal and on the same level in their implementation.

Example

The following example shows how the statement INTERFACES can be used to compose and implement interfaces. Class c1 implements the composite interfaces i2 and i3. Although i1 is a component interface of i2 and i3, it exists only once in class c1. A reference variable iref1 of the static type i1 creates an object class c1 and calls the method i1~m1, which is implemented there.

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
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
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
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA iref1 TYPE REF TO i1.
    CREATE OBJECT iref1 TYPE c1.
    iref1->m1( ).
  ENDMETHOD.
ENDCLASS.